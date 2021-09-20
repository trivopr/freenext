import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../posts/PostList';

function Home() {
  const router = useRouter();
  const { postList } = useSelector((state) => state.posts);

  return (
    <div className='container mt-5'>
      <section className='row'>{postList.length == 0 ? 'No post' : <PostList posts={postList} />}</section>
    </div>
  );
}

export default Home;
