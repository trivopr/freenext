import React, { Component } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

export default class BannerSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className='banner-container'>
        <Slider {...settings}>
          <div>
            <img src='https://dummyimage.com/1200x400/bc4/fff.jpg' alt='' />
          </div>
          <div>
            <img src='https://dummyimage.com/1200x400/ccc/fff.jpg' alt='' />
          </div>
          <div>
            <img src='https://dummyimage.com/1200x400/f40/fff.jpg' alt='' />
          </div>
          <div>
            <img src='https://dummyimage.com/1200x400/b03/fff.jpg' alt='' />
          </div>
          <div>
            <img src='https://dummyimage.com/1200x400/cf5/fff.jpg' alt='' />
          </div>
          <div>
            <img src='https://dummyimage.com/1200x400/77a/fff.jpg' alt='' />
          </div>
        </Slider>
      </div>
    );
  }
}
