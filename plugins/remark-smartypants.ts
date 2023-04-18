import {visit} from 'unist-util-visit';
import {retext} from 'retext';
import smartypants from 'retext-smartypants';

function check(parent: any) {
  if (parent.tagName === 'script') return false;
  if (parent.tagName === 'style') return false;
  return true;
}

export default function (options: any) {
  const processor = retext().use(smartypants, options);

  function transformer(tree: any) {
    visit(tree, 'text', (node, _, parent) => {
      if (check(parent)) node.value = String(processor.processSync(node.value));
    });
  }

  return transformer;
}
