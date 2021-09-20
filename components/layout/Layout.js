import React from 'react';
import Footer from './Footer';
import Header from './Header';
import BannerSlider from '../BannerSlider';

function Layout({ children, title = 'Page Title' }) {
  return (
    <>
      <Header />
      <BannerSlider />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
