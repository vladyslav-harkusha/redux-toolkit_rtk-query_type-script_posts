import React from 'react'
import { postAPI } from '../services/postService';
import { PostItem } from './PostItem';

export const PostContainer2: React.FC = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10);

  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Posts are loading...</h1>}

        {posts && posts.map(post => 
          <PostItem key={post.id} post={post}/>
        )}

        {error && <h1>Loading error!</h1>}
      </div>
    </div>
  );
};
