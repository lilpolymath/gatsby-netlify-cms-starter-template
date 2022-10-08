import * as React from 'react';
import type { HeadFC } from 'gatsby';

const AboutPage = () => {
  return (
    <div>
      <header className='hero'>
        <h1>About Me</h1>
      </header>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          nulla reiciendis harum consectetur nesciunt cupiditate hic ab
          voluptatem, odit quidem omnis. Vitae labore enim ratione distinctio
          corporis ipsa porro quo?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          distinctio voluptatem porro quam dolores, voluptatibus nam provident
          atque dolorem nemo alias et aliquid corporis velit tempore eum? Velit,
          hic ipsam. Sint molestiae obcaecati sequi temporibus doloribus.
          Exercitationem perspiciatis qui pariatur dicta dolorem dignissimos
          similique expedita accusantium vitae ut quos non, a voluptates quam
          tempore modi cum tenetur voluptatem, enim quidem?
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>;
