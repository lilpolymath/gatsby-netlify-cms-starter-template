import * as React from 'react';
import Nav from './Nav';
import '../styles/index.scss';

const Layout: React.FC = ({ children }) => (
  <div className='container'>
    <Nav />
    <main>{children}</main>
  </div>
);

export default Layout;
