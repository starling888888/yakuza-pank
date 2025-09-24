import { useState } from 'react';
import SiteNav from './SiteNav.tsx';

interface MobileNavToggleButtonProps {
  base: string;
  currentPath: string;
}

export default function MobileNavToggleButton({ base, currentPath }: MobileNavToggleButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <> 
      <button
        aria-label="メニューを開閉"
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden text-white focus:outline-none focus:ring-2 focus:ring-gray-400 p-2 rounded-md z-20"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
        </svg>
      </button>
      {/* Conditionally render SiteNav as an overlay when open on mobile */}
      {isOpen && (
        <div data-testid="mobile-nav-overlay" className="fixed inset-0 bg-gray-900/95 z-10 flex flex-col justify-center items-center sm:hidden">
          <SiteNav isMobileOverlay={true} base={base} currentPath={currentPath}/>
        </div>
      )}
    </>
  );
}
