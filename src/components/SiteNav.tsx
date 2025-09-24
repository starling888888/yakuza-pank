import { NAVIGATION } from '../navigation';

// Define type for a single navigation item
interface NavItem {
  title: string;
  path?: string;
  children?: NavItem[];
}

export default function SiteNav() {
  const renderNavLinks = (items: NavItem[]) => {
    return (
      <ul className="flex flex-col gap-4 text-gray-800">
        {items.map((item) => (
          <li key={item.path || item.title}>
            {item.path ? (
              <a href={item.path} className="hover:text-gray-600 transition-colors duration-200">{item.title}</a>
            ) : (
              <span className="font-semibold text-gray-600">{item.title}</span>
            )}
            {item.children && <ul className="pl-4 mt-2 space-y-2">{renderNavLinks(item.children)}</ul>}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav aria-label="サイトナビゲーション">
      {renderNavLinks(NAVIGATION)}
    </nav>
  );
}
