import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function PostItem({ post }) {
  const myLoader = ({ src }) => {
    return `http://dummyimage.com/${src}`;
  };

  return (
    <>
      <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
        <div className='card p-2'>
          <Image className='card-img-top mx-auto' src={post.images[0].urlImage} height={170} width={200} alt='image' />

          <div className='card-body d-flex flex-column'>
            <h5 className='card-title'>
              <Link href={`/posts/${post._id}`}>
                <a>{post.title}</a>
              </Link>
            </h5>

            <div className='ratings mt-auto mb-3'>
              <p className='card-text'>{post.description}</p>
            </div>
            <button className='btn btn-block view-btn'>
              <Link href={`/posts/${post._id}`}>
                <a>Detail</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostItem;
