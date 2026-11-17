import { ExternalLink } from 'lucide-react';
import { CLOVER_DEVELOPER_URL, COMPANY_INFO, type RoutePath } from '../data/siteData';

interface SupportPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function SupportPage({ onNavigate }: SupportPageProps) {
  return (
    <div className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="max-w-2xl">
          <p className="text-xs font-medium text-blue-700 mb-2">
            Simple POS · Merchant &amp; Property Manager Help Center
          </p>
          <h1
            className="font-display font-bold tracking-tight text-slate-950 leading-tight"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)' }}
          >
            Setup guides &amp; direct support
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Documentation for Clover POS merchants using Customer Add and ePayment, plus contact
            channels for Fixed List property maintenance onboarding.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Customer Add Guide */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4">
            <p className="text-xs font-medium text-slate-500">
              Clover App ID: 85Y2Q0ZX037QP · Android POS
            </p>
            <h2 className="font-display text-2xl font-bold text-slate-950">
              Customer Add Help Guide
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Customer Add works directly with your existing Clover Customers list alongside the
              Register and Sale apps.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
              <li>
                <strong>Starting a new order:</strong> Open an order in Clover Register and tap
                Customer Add to attach an existing guest or create a new profile immediately.
              </li>
              <li>
                <strong>At tender:</strong> Before collecting card or cash tender, select the
                Customer Add action to link the transaction to a customer record.
              </li>
              <li>
                <strong>After the order is paid:</strong> Open any closed order from Orders and
                retroactively attach or update the customer for return tracking or receipt lookup.
              </li>
              <li>
                <strong>Remove customer:</strong> Tap Remove Customer on the order screen if an
                order was attached to the wrong profile.
              </li>
            </ol>
            <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap gap-4">
              <span>Support: {COMPANY_INFO.supportEmail}</span>
              <a
                href="https://www.clover.com/appmarket/apps/85Y2Q0ZX037QP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:underline"
              >
                Open Clover Listing <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* ePayment Support */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4">
            <p className="text-xs font-medium text-slate-500">
              Clover App ID: FDKEAKNTAE73R · Web &amp; POS
            </p>
            <h2 className="font-display text-2xl font-bold text-slate-950">
              ePayment Setup &amp; Support
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Send online payment requests for phone catering orders, deposits, special orders, or
              recurring memberships directly into your Clover merchant account.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
              <li>
                Create an order in Clover Register or run a manual amount in the Sale app.
              </li>
              <li>
                Select <strong>ePayment</strong> at tender and choose the customer&apos;s email
                address and/or SMS phone number.
              </li>
              <li>
                On the <strong>Enterprise Plan</strong>, enable recurring billing frequency using
                the customer&apos;s saved payment card.
              </li>
              <li>
                Use the web dashboard from your Clover web portal when sending invoices away from
                your countertop terminal.
              </li>
            </ol>
            <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap gap-4">
              <a
                href="https://simplepos.freshdesk.com/solution/folders/9000166301"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:underline"
              >
                Freshdesk Knowledge Base <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
              <span>Phone: {COMPANY_INFO.supportPhone}</span>
            </div>
          </section>
        </div>

        {/* Fixed List & Compliance Quick Links */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-xl font-bold text-slate-950">
              Fixed List Support &amp; SMS Compliance
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Need to verify SMS consent, review Fixed List policies, or browse all Clover apps?
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('/sms-consent')}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 cursor-pointer whitespace-nowrap"
            >
              SMS Consent Form
            </button>
            <a
              href={CLOVER_DEVELOPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg hover:bg-slate-200 whitespace-nowrap"
            >
              Clover Developer Page <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
