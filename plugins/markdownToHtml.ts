import remark from 'remark';
import externalLinks from 'remark-external-links'; // Add _target and rel to external links
import customHeaders from './remark-header-custom-ids'; // Custom header id's for i18n
import images from 'remark-images'; // Improved image syntax
import unrwapImages from 'remark-unwrap-images'; // Removes <p> wrapper around images
import smartyPants from './remark-smartypants'; // Cleans up typography
import html from 'remark-html';

export default {
  remarkPlugins: [
    externalLinks,
    customHeaders,
    images,
    unrwapImages,
    smartyPants,
  ],
  markdownToHtml,
};

async function markdownToHtml(markdown: any) {
  // @ts-ignore
  const result = await remark()
    .use(externalLinks)
    .use(customHeaders)
    .use(images)
    .use(unrwapImages)
    .use(smartyPants)
    .use(html)
    .process(markdown);
  return result.toString();
}
