import { NAVIGATION } from '../navigation';

// Define type for a single navigation item
interface NavItem {
  title: string;
  path?: string;
  children?: NavItem[];
}

interface SiteNavProps {
  isMobileOverlay?: boolean; // New prop to indicate if it's used as mobile overlay
  base: string; // Add base prop
  currentPath: string;
}

export default function SiteNav({ isMobileOverlay, base, currentPath }: SiteNavProps) {

  const renderNavLinks = (items: NavItem[]) => {
    return (
      <ul className={`flex flex-col gap-6 sm:gap-4 text-xl ${isMobileOverlay ? 'sm:text-xl' : 'sm:text-base'}`}>
        {items.map((item) => {
          const itemFullPath = item.path ? `${base}${item.path.startsWith('/') ? item.path.substring(1) : item.path}` : '';
          // Normalize paths for comparison (remove trailing slash for root, etc.)
          const normalizedCurrentPath = currentPath === base ? base : currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
          const normalizedItemPath = itemFullPath === base ? base : itemFullPath.endsWith('/') ? itemFullPath.slice(0, -1) : itemFullPath;

          const isActive = item.path && normalizedCurrentPath === normalizedItemPath;

          return (
            <li key={item.path || item.title}>
              {item.path ? (
                <a
                  href={itemFullPath}
                  className={`${isMobileOverlay ? 'text-white' : 'text-gray-800'} hover:text-gray-600 transition-colors duration-200 ${isActive ? 'font-bold !text-blue-500' : ''}`}
                >
                  {item.title}
                </a>
              ) : (
                <span className={`${isMobileOverlay ? 'text-gray-400' : 'text-gray-600'} font-semibold`}>{item.title}</span>
              )}
              {item.children && <ul className="pl-4 mt-2 space-y-2">{renderNavLinks(item.children)}</ul>}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav aria-label="サイトナビゲーション">
      {renderNavLinks(NAVIGATION)}
    </nav>
  );
}