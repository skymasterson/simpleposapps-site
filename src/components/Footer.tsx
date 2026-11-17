import { CLOVER_DEVELOPER_URL, COMPANY_INFO, type RoutePath } from '../data/siteData';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const go = (path: RoutePath) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div className="md:col-span-1 space-y-3">
            <a
              href="/"
              onClick={go('/')}
              className="font-display text-lg font-bold text-white tracking-tight inline-block"
            >
              {COMPANY_INFO.brandName}
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Practical SaaS software for restaurants, Clover POS merchants, and residential
              property managers.
            </p>
            <p className="text-xs text-slate-400">
              {COMPANY_INFO.location} · {COMPANY_INFO.supportEmail}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Applications</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.clover.com/appmarket/apps/FDKEAKNTAE73R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  ePayment (Clover POS)
                </a>
              </li>
              <li>
                <a
                  href="https://www.clover.com/appmarket/apps/85Y2Q0ZX037QP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Customer Add (Clover POS)
                </a>
              </li>
              <li>
                <a
                  href="/fixedlist"
                  onClick={go('/fixedlist')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Fixed List (Property Management)
                </a>
              </li>
              <li>
                <a
                  href={CLOVER_DEVELOPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Clover Developer Portfolio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Compliance &amp; Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/sms-consent"
                  onClick={go('/sms-consent')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Fixed List SMS Opt-In Consent
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  onClick={go('/privacy')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Clover Apps Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/fixedlist/privacy"
                  onClick={go('/fixedlist/privacy')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Fixed List Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/fixedlist/terms"
                  onClick={go('/fixedlist/terms')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Fixed List Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/epayment-terms"
                  onClick={go('/epayment-terms')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  ePayment EULA &amp; Terms
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/customeradd-help"
                  onClick={go('/customeradd-help')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  App Help &amp; Documentation
                </a>
              </li>
              <li className="text-slate-400">
                Phone:{' '}
                <a
                  href="tel:+16506818233"
                  className="text-slate-200 hover:text-white tabular-nums"
                >
                  {COMPANY_INFO.supportPhone}
                </a>
              </li>
              <li className="text-slate-400">{COMPANY_INFO.supportHours}</li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.supportEmail}`}
                  className="text-slate-200 hover:text-white"
                >
                  {COMPANY_INFO.supportEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.brandName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy" onClick={go('/privacy')} className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a href="/terms" onClick={go('/terms')} className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span aria-hidden="true">·</span>
            <a href="/sms-consent" onClick={go('/sms-consent')} className="hover:text-white transition-colors">
              SMS Consent
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
