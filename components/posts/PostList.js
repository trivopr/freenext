import React from 'react';
import PostItem from './PostItem';

function PostList({ posts }) {
  return (
    <>
      {posts.map((item) => (
        <PostItem post={item} key={item._id} />
      ))}
    </>
  );
}

export default PostList;
