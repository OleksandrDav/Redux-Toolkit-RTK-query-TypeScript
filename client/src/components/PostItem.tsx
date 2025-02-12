import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (id: number) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(post.id);
  };

  const handleUpdate = (e: React.MouseEvent) => {
      const title = prompt() || "";
      update({ ...post, title });
   }

  return (
    <div className="post" onClick={handleUpdate}>
      {post.id}. {post.title}
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default PostItem;
