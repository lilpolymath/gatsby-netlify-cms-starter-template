import * as React from 'react';
import type { HeadFC } from 'gatsby';

const BlogIndexPage = () => {
  return (
    <div>
      <header className='hero'>
        <h1>Blog Posts</h1>
      </header>
    </div>
  );
};

export default BlogIndexPage;

export const Head: HeadFC = () => <title>Blog</title>;
