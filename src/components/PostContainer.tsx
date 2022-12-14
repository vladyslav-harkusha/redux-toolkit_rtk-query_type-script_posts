import React, { useEffect, useState } from 'react'
import { postAPI } from '../services/postService';
import { PostItem } from './PostItem';
import { IPost } from '../models/IPost';


export const PostContainer: React.FC = () => {
  const [limit, setLimit] = useState(10)
  const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
    pollingInterval: 1000
  });
  const [deletePost, { }] = postAPI.useDeletePostMutation();
  const [updatePost, { }] = postAPI.useUpdatePostMutation();

  useEffect(() => {
    setTimeout(() => {
      setLimit(3)
    }, 2000)
  }, [])

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <div className="post__list">
        <button onClick={() => refetch()}>REFETCH</button>

        {isLoading && <h1>Posts are loading...</h1>}

        {posts && posts.map(post => 
          <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate} />
        )}

        {error && <h1>Loading error!</h1>}
      </div>
    </div>
  );
};
