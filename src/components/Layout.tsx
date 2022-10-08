import * as React from 'react';

import '../styles/index.scss';
import Nav from './Nav';

const Layout: React.FC = ({ children }) => (
  <div className='container'>
    <Nav />
    <main>{children}</main>
  </div>
);

export default Layout;
