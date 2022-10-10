import React from 'react';

// import HomePage from './home-page.template';
import DefaultPage from './default';
// import NotFoundPage from './not-found.template';
// import { AppLayout } from '../app-layout.component';
import { safelyGetFrontMatter } from '../cms/utils';

// const componentTemplateMap = {
//   'home-page': HomePage,
//   'hidden-page': NotFoundPage,
// };

const CMSTemplate = (props) => {
  const { pageContext } = props;
  const { templateKey } = safelyGetFrontMatter(pageContext);
  const Page = componentTemplateMap[templateKey];
  return (
    <>
      <DefaultPage {...props} />
    </>
  );
};

export default CMSTemplate;
