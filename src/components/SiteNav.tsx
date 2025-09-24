import { NAVIGATION } from '../navigation';

// Define type for a single navigation item
interface NavItem {
  title: string;
  path?: string;
  children?: NavItem[];
}

interface SiteNavProps {
  isMobileOverlay?: boolean; // New prop to indicate if it's used as mobile overlay
}

export default function SiteNav({ isMobileOverlay }: SiteNavProps) {
  const renderNavLinks = (items: NavItem[]) => {
    return (
      <ul className={`flex flex-col gap-6 sm:gap-4 text-xl ${isMobileOverlay ? 'sm:text-xl' : 'sm:text-base'}`}>
        {items.map((item) => (
          <li key={item.path || item.title}>
            {item.path ? (
              <a href={item.path} className={`${isMobileOverlay ? 'text-white' : 'text-gray-800'} hover:text-gray-600 transition-colors duration-200`}>{item.title}</a>
            ) : (
              <span className={`${isMobileOverlay ? 'text-gray-400' : 'text-gray-600'} font-semibold`}>{item.title}</span>
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