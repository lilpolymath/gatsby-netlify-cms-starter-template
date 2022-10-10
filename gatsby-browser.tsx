import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';

import Layout from './src/components/Layout';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return <Layout>{element}</Layout>;
};

export const onServiceWorkerUpdateReady: GatsbyBrowser['onServiceWorkerUpdateReady'] =
  () => {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    );

    if (answer === true) {
      window.location.reload();
    }
  };
