import * as React from 'react';
import type { HeadFC } from 'gatsby';

const IndexPage = () => {
  return (
    <div>
      <header className='hero'>
        <h1>Hero</h1>
      </header>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nemo
          nesciunt quaerat adipisci qui nostrum deserunt excepturi perferendis
          sit natus, aperiam quisquam fugiat recusandae ut magnam blanditiis
          laborum eveniet minima! Nobis incidunt atque deserunt voluptatem, aut
          ea doloribus ipsum harum eaque, omnis qui, veritatis officiis impedit
          vero rerum quia amet nemo provident ducimus labore temporibus aperiam
          sapiente molestias consectetur? Natus.
        </p>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
