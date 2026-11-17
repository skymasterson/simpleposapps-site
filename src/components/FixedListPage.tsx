import { ArrowRight } from 'lucide-react';
import maintenanceCraftImg from '../assets/images/property_maintenance_craft_1794892195357.jpg';
import { FIXEDLIST_WORKFLOW_STEPS, type RoutePath } from '../data/siteData';
import { ImageFrame } from './ImageFrame';

interface FixedListPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function FixedListPage({ onNavigate }: FixedListPageProps) {
  return (
    <div className="bg-slate-50">
      {/* Header Band */}
      <section className="bg-white border-b border-slate-200 py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-xs font-medium text-blue-700 mb-3">
                Fixed List by Simple POS · Property Maintenance Dispatch
              </p>
              <h1
                className="font-display font-bold tracking-tight text-slate-950 leading-[1.08]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}
              >
                Dispatch repairs via magic links. Collect signed PDF invoices.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Fixed List lets residential property managers assign maintenance tasks to
                contractors without forcing contractors to create accounts, automate 24-hour
                tenant entry notices, relay time-windowed Igloo smart-lock codes, and generate
                tax-ready Labor vs. Supplies PDF invoices.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/sms-consent')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
                >
                  Open SMS Opt-In Consent Form
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/fixedlist/terms')}
                  className="px-4 py-3 text-sm font-semibold text-slate-800 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Terms &amp; Privacy
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <ImageFrame
                src={maintenanceCraftImg}
                alt="Contractor checking an Igloo-style digital door lock on a managed residential unit"
                aspectClass="aspect-[4/3] lg:aspect-auto lg:h-full w-full"
                className="rounded-xl border border-slate-200"
                fallbackTitle="Fixed List Unit Access & Repair"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Actors */}
      <section className="py-14 lg:py-20 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-blue-700 mb-2">01. System Actors</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Built around how landlords, tradespeople, and tenants actually communicate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-xs font-medium text-slate-500">Role 01 · Authenticated Admin</p>
              <h3 className="mt-2 font-display text-lg font-bold text-slate-950">
                Property Manager
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Signs in with Google. Manages the unit and contractor directory, dispatches tasks
                with budget ceilings and urgency flags, approves ~$100+ overruns, enters 24-hour
                Igloo access codes, and marks invoices paid (Zelle, Venmo, cash, or other).
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-xs font-medium text-slate-500">Role 02 · Zero-Account Magic Link</p>
              <h3 className="mt-2 font-display text-lg font-bold text-slate-950">Contractor</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                No password or app store download required. Interacts via per-task magic links (
                <span className="font-mono text-xs">/t/&#123;token&#125;</span>), a bookmarkable My
                Jobs list (<span className="font-mono text-xs">/c/&#123;contractorToken&#125;</span>
                ), and concise SMS replies (<span className="font-mono text-xs">YES</span>,{' '}
                <span className="font-mono text-xs">NO</span>,{' '}
                <span className="font-mono text-xs">LIST</span>,{' '}
                <span className="font-mono text-xs">STOP</span>).
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-xs font-medium text-slate-500">Role 03 · Passive Notice Recipient</p>
              <h3 className="mt-2 font-display text-lg font-bold text-slate-950">Tenant</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Receives an automated informational entry-notice email at least 24 hours before
                scheduled contractor access (aligned with Berkeley rental rules). Contractor
                access to tenant contact details automatically expires when a task closes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core State Machine */}
      <section className="py-14 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium text-blue-700 mb-2">02. Core Task State Machine</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              End-to-end accountability from draft dispatch to closed invoice.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FIXEDLIST_WORKFLOW_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs mb-3">
                    <span className="font-mono font-semibold text-blue-700 tabular-nums">
                      Step {item.step}
                    </span>
                    <span className="font-mono text-slate-500">{item.transition}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security, Reporting & SMS Summary */}
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
              <p className="text-xs font-medium text-blue-700 mb-2">
                03. Invoice &amp; 1099 Tax Reporting
              </p>
              <h3 className="font-display text-xl font-bold text-slate-950">
                Labor vs. Supplies separation built in
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600 leading-relaxed">
                <li>
                  • Every invoice header captures PM name, unit address, contractor contact details,
                  task ID, and service dates.
                </li>
                <li>
                  • Line items are explicitly tagged <strong>Labor</strong> or{' '}
                  <strong>Supplies</strong> with automatic subtotals so yearly 1099 totals reflect
                  taxable labor accurately.
                </li>
                <li>
                  • Multiple receipt images and completion photos are bundled and rendered into a
                  downloadable PDF invoice.
                </li>
                <li>
                  • Contractor acknowledgement records a timestamped button signature and IP address.
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
              <p className="text-xs font-medium text-blue-700 mb-2">
                04. Privacy &amp; Automated SMS Reminders
              </p>
              <h3 className="font-display text-xl font-bold text-slate-950">
                Scoped magic links and opt-in messaging
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600 leading-relaxed">
                <li>
                  • Per-task tokens use unguessable 32+ character strings and automatically expire
                  when the PM marks the task <strong>Closed</strong>.
                </li>
                <li>
                  • Igloo smart-lock codes are shown only during the active access window and
                  redacted immediately after task closure.
                </li>
                <li>
                  • Hourly reminders send a 24h acceptance nudge (4h if Urgent), day-before entry
                  reminders, and optional Monday 8:00 AM open-jobs digests.
                </li>
                <li>
                  • All Twilio SMS communications follow strict opt-in consent and support instant{' '}
                  <span className="font-mono text-xs">STOP</span> opt-out and{' '}
                  <span className="font-mono text-xs">HELP</span> replies.
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap gap-4 text-sm font-semibold">
                <button
                  type="button"
                  onClick={() => onNavigate('/sms-consent')}
                  className="text-blue-700 hover:underline cursor-pointer"
                >
                  SMS Consent Form
                </button>
                <span className="text-slate-300" aria-hidden="true">
                  ·
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate('/fixedlist/privacy')}
                  className="text-slate-800 hover:text-blue-700 cursor-pointer"
                >
                  Privacy Policy
                </button>
                <span className="text-slate-300" aria-hidden="true">
                  ·
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate('/fixedlist/terms')}
                  className="text-slate-800 hover:text-blue-700 cursor-pointer"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
