import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
   const [limit, setLimit] = React.useState(5)
   const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {
      // pollingInterval: 2000
   })
  return (
    <div>
      <button onClick={() => refetch()}>Refetch</button>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      <ul>
        {posts?.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  )
}

export default PostContainer