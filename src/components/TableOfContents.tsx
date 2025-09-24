import React, { useEffect, useState } from 'react';

interface Heading {
  slug: string;
  text: string;
  level: number;
}

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll('h2, h3, h4, h5, h6')
    ).map((heading) => {
      const level = parseInt(heading.tagName.substring(1));
      const text = heading.textContent || '';
      const slug = heading.id || text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, ''); // Fallback slug generation

      // Ensure heading has an ID for direct linking
      if (!heading.id) {
        heading.id = slug;
      }

      return { slug, text, level };
    });
    setHeadings(headingElements);
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav aria-label="ページ内目次" className="p-4 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-2">目次</h2>
      <ul>
        {headings.map((heading) => (
          <li key={heading.slug} className={`mb-1 text-gray-700 pl-${(heading.level - 2) * 4}`}>
            <a href={`#${heading.slug}`} className="hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
