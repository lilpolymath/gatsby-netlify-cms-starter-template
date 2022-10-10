import CMS from 'netlify-cms-app';

import { HomePagePreview, DefaultPagePreview } from './preview-templates';

// Not reliably loaded by registerPreviewStyle, so import directly

// Add Previews
CMS.registerPreviewTemplate('blog', DefaultPagePreview);
