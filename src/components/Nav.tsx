import * as React from 'react';
import { Link, HeadFC } from 'gatsby';

const Nav: React.FC = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <div>
        <Link to='/blog'>Blog</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  );
};

export default Nav;

export const Head: HeadFC = () => <title>Not found</title>;
