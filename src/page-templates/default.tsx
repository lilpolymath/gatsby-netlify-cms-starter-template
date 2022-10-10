import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { safelyGetFrontMatter, withFallback } from '../cms';
import { SEO, Heading } from '../components';
import { RenderMarkdown } from '../core';

export const DefaultPageTemplate = ({ title, body, children }) => {
  return (
    <article>
      <SEO title={withFallback(title, '')} />
      <Heading tag={1}>{title}</Heading>
      <RenderMarkdown md={body} />
      <MDXProvider>{children}</MDXProvider>
    </article>
  );
};

const DefaultPage = ({ pageContext, ...props }) => {
  return (
    <DefaultPageTemplate
      {...safelyGetFrontMatter(pageContext)}
      {...props}
      isPreview={false}
    />
  );
};

export default DefaultPage;
