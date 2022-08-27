import React from 'react'
import { postAPI } from '../services/postService';
import { PostItem } from './PostItem';
import { IPost } from '../models/IPost';

export const PostContainer2: React.FC = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100);
  const [createPost, { error: createError, isLoading: isCreateLoading }] = postAPI.useCreatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost)
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>ADD_POST</button>

        {isLoading && <h1>Posts are loading...</h1>}

        {posts && posts.map(post => 
          <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate} />
        )}

        {error && <h1>Loading error!</h1>}
      </div>
    </div>
  );
};
