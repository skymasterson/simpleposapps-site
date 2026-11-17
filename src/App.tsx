/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { FixedListPage } from './components/FixedListPage';
import { HomePage } from './components/HomePage';
import { LegalPages } from './components/LegalPages';
import { Navbar } from './components/Navbar';
import { SmsConsentPage } from './components/SmsConsentPage';
import { SupportPage } from './components/SupportPage';
import type { RoutePath } from './data/siteData';

const VALID_PATHS: RoutePath[] = [
  '/',
  '/fixedlist',
  '/sms-consent',
  '/fixedlist/sms-consent',
  '/privacy',
  '/fixedlist/privacy',
  '/terms',
  '/fixedlist/terms',
  '/epayment-terms',
  '/customeradd-help',
  '/support',
];

function normalizeRoute(rawPath: string, hash: string): RoutePath {
  if (hash && hash.startsWith('#/')) {
    const hashCandidate = hash.slice(1).replace(/\/+$/, '') || '/';
    if (VALID_PATHS.includes(hashCandidate as RoutePath)) {
      return hashCandidate as RoutePath;
    }
  }
  const cleaned = (rawPath.replace(/\/+$/, '') || '/') as RoutePath;
  if (VALID_PATHS.includes(cleaned)) {
    return cleaned;
  }
  return '/';
}

const PAGE_TITLES: Record<RoutePath, string> = {
  '/': 'Simple POS — Software for Busy Entrepreneurs',
  '/fixedlist': 'Fixed List — Property Maintenance Dispatch | Simple POS',
  '/sms-consent': 'Fixed List SMS Opt-In Consent Form | Simple POS',
  '/fixedlist/sms-consent': 'Fixed List SMS Opt-In Consent Form | Simple POS',
  '/privacy': 'Clover Apps Privacy Policy (ePayment & Customer Add) | Simple POS',
  '/fixedlist/privacy': 'Fixed List Privacy Policy | Simple POS',
  '/terms': 'Terms of Service | Simple POS & Fixed List',
  '/fixedlist/terms': 'Fixed List Terms of Service | Simple POS',
  '/epayment-terms': 'ePayment EULA & Terms | Simple POS',
  '/customeradd-help': 'Support & Help Guides | Simple POS',
  '/support': 'Support & Help Guides | Simple POS',
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() =>
    normalizeRoute(window.location.pathname, window.location.hash)
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizeRoute(window.location.pathname, window.location.hash));
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[currentPath] || PAGE_TITLES['/'];
  }, [currentPath]);

  const navigate = useCallback((path: RoutePath) => {
    if (path !== window.location.pathname) {
      window.history.pushState(null, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/fixedlist':
        return <FixedListPage onNavigate={navigate} />;
      case '/sms-consent':
      case '/fixedlist/sms-consent':
        return <SmsConsentPage onNavigate={navigate} />;
      case '/privacy':
        return <LegalPages docKind="clover-privacy" onNavigate={navigate} />;
      case '/fixedlist/privacy':
        return <LegalPages docKind="fixedlist-privacy" onNavigate={navigate} />;
      case '/terms':
      case '/fixedlist/terms':
        return <LegalPages docKind="terms" onNavigate={navigate} />;
      case '/epayment-terms':
        return <LegalPages docKind="epayment-terms" onNavigate={navigate} />;
      case '/customeradd-help':
      case '/support':
        return <SupportPage onNavigate={navigate} />;
      case '/':
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
