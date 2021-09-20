import React, { useEffect } from 'react';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
// import { loadUser } from '../../redux/actions/userActions';
import { signOut } from 'next-auth/client';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  // const dispatch = useDispatch();

  // const { user, loading } = useSelector((state) => state.loadedUser);

  // useEffect(() => {
  //   if (!user) {
  //     dispatch(loadUser());
  //   }
  // }, [dispatch, user]);

  const logoutHandler = () => {
    signOut();
  };

  return (
    <Navbar collapseOnSelect expand='lg' bg='light' className='justify-content-center sticky-top'>
      <Container fluid>
        <Navbar.Brand href='/'>
          <img className='logo' src='/images/logo.png' alt='FreeNext' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' className='nav-cover'>
          <Nav className='me-auto'>
            <Link href='/'>
              <a className='nav-link'>Home</a>
            </Link>
            <Link href='/about'>
              <a className='nav-link'>About</a>
            </Link>
            <Link href='/contact'>
              <a className='nav-link'>Contact</a>
            </Link>
          </Nav>
          <div className='mt-3 mt-md-0 text-center'>
            <Link href='/login'>
              <a className='btn btn-danger px-4 text-white login-header-btn float-right'>Login</a>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
