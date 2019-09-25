import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/index.scss';

const Layout = props => (
  <div>
    <Header />
      {props.children}
    <Footer />
  </div>
)

export default Layout;