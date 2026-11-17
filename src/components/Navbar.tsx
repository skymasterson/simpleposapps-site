import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { RoutePath } from '../data/siteData';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

const NAV_ITEMS: { label: string; path: RoutePath }[] = [
  { label: 'Apps', path: '/' },
  { label: 'Fixed List', path: '/fixedlist' },
  { label: 'SMS Consent', path: '/sms-consent' },
  { label: 'Privacy & Terms', path: '/fixedlist/privacy' },
  { label: 'Support', path: '/customeradd-help' },
];

export function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: RoutePath) => {
    if (path === '/') return currentPath === '/';
    if (path === '/fixedlist/privacy') {
      return (
        currentPath === '/privacy' ||
        currentPath === '/fixedlist/privacy' ||
        currentPath === '/terms' ||
        currentPath === '/fixedlist/terms' ||
        currentPath === '/epayment-terms'
      );
    }
    if (path === '/sms-consent') {
      return currentPath === '/sms-consent' || currentPath === '/fixedlist/sms-consent';
    }
    if (path === '/customeradd-help') {
      return currentPath === '/customeradd-help' || currentPath === '/support';
    }
    return currentPath === path;
  };

  const handleLinkClick = (path: RoutePath) => {
    setMobileOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/');
          }}
          className="font-display text-lg font-bold tracking-tight text-slate-950 whitespace-nowrap shrink-0 hover:text-blue-700 transition-colors"
        >
          Simple POS
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.path);
              }}
              className={`text-sm font-medium whitespace-nowrap shrink-0 transition-colors underline-offset-4 ${
                isActive(item.path)
                  ? 'text-blue-700 underline decoration-2'
                  : 'text-slate-600 hover:text-slate-950 hover:underline'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden md:flex items-center shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('/sms-consent')}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            SMS Opt-In Form
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.path);
              }}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                isActive(item.path)
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleLinkClick('/sms-consent')}
              className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
            >
              SMS Opt-In Form
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
