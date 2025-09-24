import { visit } from 'unist-util-visit';

export default function rehypeCustomIds() {
  return (tree) => {
    const counters = {
      h2: 0,
      h3: 0,
      h4: 0,
      h5: 0,
      h6: 0,
    };

    visit(tree, 'element', (node) => {
      if (['h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
        // Reset lower-level counters when a higher-level heading is found
        if (node.tagName === 'h2') {
          counters.h2++;
          counters.h3 = 0;
          counters.h4 = 0;
          counters.h5 = 0;
          counters.h6 = 0;
          node.properties.id = `heading-${counters.h2}`;
        } else if (node.tagName === 'h3') {
          counters.h3++;
          counters.h4 = 0;
          counters.h5 = 0;
          counters.h6 = 0;
          node.properties.id = `heading-${counters.h2}-${counters.h3}`;
        } else if (node.tagName === 'h4') {
          counters.h4++;
          counters.h5 = 0;
          counters.h6 = 0;
          node.properties.id = `heading-${counters.h2}-${counters.h3}-${counters.h4}`;
        } else if (node.tagName === 'h5') {
          counters.h5++;
          counters.h6 = 0;
          node.properties.id = `heading-${counters.h2}-${counters.h3}-${counters.h4}-${counters.h5}`;
        } else if (node.tagName === 'h6') {
          counters.h6++;
          node.properties.id = `heading-${counters.h2}-${counters.h3}-${counters.h4}-${counters.h5}-${counters.h6}`;
        }
      }
    });
  };
}