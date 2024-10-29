import React from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostContainer = () => {
  const [limit, setLimit] = React.useState(100);
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [createPost, { error: createError, isLoading: isCreateLoading }] =
    postAPI.useCreatePostMutation();
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit, {
    // pollingInterval: 2000
  });

  const handleCreate = async () => {
    const title = prompt("Enter post title");
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = async (id: number) => {deletePost(id)};

  const handleUpdate = async (post: IPost) => {updatePost(post)};

  return (
    <div>
      <div className="post__list">
        <button onClick={() => refetch()}>Refetch</button>
        <button onClick={handleCreate}>Add new post</button>

        {isLoading && <div>Loading...</div>}
        {error && <div>Error...</div>}
        <ul>
          {posts?.map((post) => (
            <PostItem
              remove={handleRemove}
              update={handleUpdate}
              key={post.id}
              post={post}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostContainer;
