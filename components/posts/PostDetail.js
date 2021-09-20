import React from 'react'
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Image from 'next/image';

function PostDetail() {
  const { postDetail, error } = useSelector((state) => state.posts);
    return (
        <Container>
          <h2>{postDetail.title}</h2>
          <p>{postDetail.description}</p>
          <Image className='m-auto' src={postDetail.images[0].urlImage} height={170} width={200} alt='image' />
          <p>{postDetail.content}</p>
        </Container>
    )
}

export default PostDetail
