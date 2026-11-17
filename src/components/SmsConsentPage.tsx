import { useState } from 'react';
import { CheckCircle2, RotateCcw } from 'lucide-react';
import { COMPANY_INFO, type RoutePath } from '../data/siteData';

interface SmsConsentPageProps {
  onNavigate: (path: RoutePath) => void;
}

interface ConsentReceipt {
  fullName: string;
  role: string;
  phone: string;
  email: string;
  taskAlerts: boolean;
  weeklyDigest: boolean;
  recordedAt: string;
  referenceId: string;
}

function formatUsPhoneDisplay(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  const trimmed = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
  if (trimmed.length === 10) {
    return `+1 (${trimmed.slice(0, 3)}) ${trimmed.slice(3, 6)}-${trimmed.slice(6)}`;
  }
  return raw.trim();
}

function isValidPhone(raw: string): boolean {
  const digits = raw.replace(/\D/g, '');
  return digits.length === 10 || (digits.length === 11 && digits.startsWith('1'));
}

export function SmsConsentPage({ onNavigate }: SmsConsentPageProps) {
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState<'Contractor' | 'Property Manager'>('Contractor');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [companyOrTrade, setCompanyOrTrade] = useState('');

  // Mandatory Twilio TFV rule: all opt-in checkboxes MUST load blank/unchecked by default.
  const [taskAlertsConsent, setTaskAlertsConsent] = useState(false);
  const [weeklyDigestConsent, setWeeklyDigestConsent] = useState(false);

  const [error, setError] = useState('');
  const [receipt, setReceipt] = useState<ConsentReceipt | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!isValidPhone(phone)) {
      setError('Please enter a valid 10-digit US/Canada mobile phone number.');
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address or leave the email field blank.');
      return;
    }

    if (!taskAlertsConsent && !weeklyDigestConsent) {
      setError(
        'Please check at least one SMS notification preference above to enroll, or continue using Fixed List web magic links without SMS.'
      );
      return;
    }

    const now = new Date();
    const refId = `FL-SMS-${now.getFullYear()}${String(now.getMonth() + 1).padStart(
      2,
      '0'
    )}${String(now.getDate()).padStart(2, '0')}-${Math.random()
      .toString(36)
      .slice(2, 7)
      .toUpperCase()}`;

    setReceipt({
      fullName: fullName.trim(),
      role,
      phone: formatUsPhoneDisplay(phone),
      email: email.trim(),
      taskAlerts: taskAlertsConsent,
      weeklyDigest: weeklyDigestConsent,
      recordedAt: now.toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      referenceId: refId,
    });
  };

  const handleReset = () => {
    setReceipt(null);
    setTaskAlertsConsent(false);
    setWeeklyDigestConsent(false);
    setError('');
  };

  return (
    <div className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-medium text-blue-700 mb-2">
            Simple POS · Fixed List Toll-Free SMS Messaging Program
          </p>
          <h1
            className="font-display font-bold tracking-tight text-slate-950 leading-tight"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)' }}
          >
            Fixed List SMS Notification Consent Form
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Use this form to voluntarily opt in to receive automated maintenance dispatch text
            messages from <strong>Simple POS</strong> for the <strong>Fixed List</strong>{' '}
            platform. SMS enrollment is completely optional and is never required to view task
            magic links or submit invoices on the web.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Primary Consent Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
            {receipt ? (
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h2 className="font-display text-xl font-bold text-slate-950">
                      SMS Opt-In Consent Recorded
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      Your messaging preferences for <strong>Simple POS (Fixed List)</strong>{' '}
                      have been saved.
                    </p>
                  </div>
                </div>

                <dl className="border-t border-b border-slate-200 py-5 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Reference ID</dt>
                    <dd className="font-mono font-medium text-slate-950 tabular-nums">
                      {receipt.referenceId}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Subscriber Name</dt>
                    <dd className="font-medium text-slate-950">{receipt.fullName}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Role</dt>
                    <dd className="text-slate-900">{receipt.role}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Mobile Number</dt>
                    <dd className="font-mono font-medium text-slate-950 tabular-nums">
                      {receipt.phone}
                    </dd>
                  </div>
                  {receipt.email && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-500">Email</dt>
                      <dd className="text-slate-900">{receipt.email}</dd>
                    </div>
                  )}
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Task Dispatch &amp; Access Alerts</dt>
                    <dd className="font-medium text-slate-950">
                      {receipt.taskAlerts ? 'Opted In' : 'Not Selected'}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Weekly Open-Jobs Digest</dt>
                    <dd className="font-medium text-slate-950">
                      {receipt.weeklyDigest ? 'Opted In' : 'Not Selected'}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Consent Timestamp</dt>
                    <dd className="font-mono text-xs text-slate-700 tabular-nums">
                      {receipt.recordedAt}
                    </dd>
                  </div>
                </dl>

                <p className="text-xs text-slate-600 leading-relaxed">
                  You can withdraw consent at any time by replying{' '}
                  <span className="font-mono font-semibold text-slate-900">STOP</span> to any
                  Fixed List SMS message, or reply{' '}
                  <span className="font-mono font-semibold text-slate-900">HELP</span> for
                  assistance. Message and data rates may apply.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  Submit another preference or update number
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h2 className="font-display text-xl font-bold text-slate-950">
                    Enroll Mobile Number for Fixed List SMS
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Program Provider: Simple POS · Product: Fixed List Maintenance Dispatch
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="sms-full-name"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="sms-full-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Jordan Alvarez"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-950 placeholder:text-slate-400 focus:border-blue-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sms-role"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Role in Fixed List <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="sms-role"
                      value={role}
                      onChange={(e) =>
                        setRole(e.target.value as 'Contractor' | 'Property Manager')
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-950 focus:border-blue-700"
                    >
                      <option value="Contractor">Independent Contractor / Technician</option>
                      <option value="Property Manager">Property Manager</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="sms-phone"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Mobile Phone Number (SMS) <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="sms-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(510) 555-0194"
                      className="w-full px-3.5 py-2.5 text-sm font-mono bg-white border border-slate-300 rounded-lg text-slate-950 placeholder:text-slate-400 focus:border-blue-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sms-email"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Email Address (Optional)
                    </label>
                    <input
                      id="sms-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contractor@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-950 placeholder:text-slate-400 focus:border-blue-700"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="sms-trade"
                    className="block text-xs font-semibold text-slate-800 mb-1.5"
                  >
                    Trade or Property Portfolio Name (Optional)
                  </label>
                  <input
                    id="sms-trade"
                    type="text"
                    value={companyOrTrade}
                    onChange={(e) => setCompanyOrTrade(e.target.value)}
                    placeholder="e.g. East Bay Plumbing & Electrical"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-950 placeholder:text-slate-400 focus:border-blue-700"
                  />
                </div>

                {/* Adjacent On-Screen Disclosures (Required directly near phone field & checkboxes) */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 text-xs text-slate-700 leading-relaxed">
                  <p className="font-semibold text-slate-950">
                    SMS Program Disclosure — Simple POS (Fixed List)
                  </p>
                  <p>
                    By checking a box below and submitting your phone number, you expressly consent
                    to receive automated SMS text messages from <strong>Simple POS</strong>{' '}
                    regarding <strong>Fixed List</strong> property maintenance operations. Consent
                    is <strong>voluntary</strong> and is not a condition of using Fixed List or
                    receiving work assignments (you may always receive task links manually instead).
                  </p>
                  <p>
                    <strong>Message frequency varies</strong> based on active maintenance jobs
                    (typically 1–8 messages per assigned task; max 1 message per week if enrolled in
                    the weekly open-jobs digest). <strong>Message and data rates may apply.</strong>
                  </p>
                  <p>
                    Reply <span className="font-mono font-semibold text-slate-950">STOP</span> at any
                    time to opt out. Reply{' '}
                    <span className="font-mono font-semibold text-slate-950">HELP</span> for help.
                    Reply <span className="font-mono font-semibold text-slate-950">LIST</span> to
                    receive a link to your open Fixed List jobs. Mobile opt-in data and consent will
                    not be shared with third parties or affiliates for marketing purposes.
                  </p>
                </div>

                {/* Separate Unchecked-by-Default Checkboxes */}
                <div className="space-y-3.5 pt-1">
                  <label className="flex items-start gap-3 cursor-pointer p-3.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <input
                      id="consent-task-alerts"
                      type="checkbox"
                      checked={taskAlertsConsent}
                      onChange={(e) => setTaskAlertsConsent(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-slate-400 text-blue-700 focus:ring-blue-700 shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      <strong>Transactional Maintenance Task &amp; Access SMS (Optional):</strong>{' '}
                      I agree to receive operational text messages from{' '}
                      <strong>Simple POS / Fixed List</strong> containing work order magic links,
                      acceptance nudges, scheduled visit reminders, unit access code relays, and
                      budget overrun notifications. Message frequency varies. Message &amp; data
                      rates may apply. Reply STOP to cancel, HELP for help.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer p-3.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <input
                      id="consent-weekly-digest"
                      type="checkbox"
                      checked={weeklyDigestConsent}
                      onChange={(e) => setWeeklyDigestConsent(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-slate-400 text-blue-700 focus:ring-blue-700 shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      <strong>Weekly Open-Jobs Summary SMS (Optional):</strong> I agree to receive
                      a weekly summary text (up to 1 message/week, e.g., Monday mornings) from{' '}
                      <strong>Simple POS / Fixed List</strong> listing my open and urgent task count
                      plus my My Jobs link. Message &amp; data rates may apply. Reply STOP to
                      cancel, HELP for help.
                    </span>
                  </label>
                </div>

                {/* Direct Links to Privacy Policy and Terms of Service */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  Review our{' '}
                  <a
                    href="/fixedlist/privacy"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/fixedlist/privacy');
                    }}
                    className="text-blue-700 font-semibold underline hover:text-blue-800"
                  >
                    Fixed List Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="/fixedlist/terms"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/fixedlist/terms');
                    }}
                    className="text-blue-700 font-semibold underline hover:text-blue-800"
                  >
                    Fixed List Terms of Service
                  </a>{' '}
                  (including SMS Messaging Terms).
                </p>

                {error && (
                  <p className="text-xs font-semibold text-red-700 bg-red-50 border border-red-200 rounded-lg px-3.5 py-2.5" role="alert">
                    {error}
                  </p>
                )}

                <div className="pt-1 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="px-5 py-3 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
                  >
                    Confirm SMS Opt-In Preferences
                  </button>
                  <span className="text-xs text-slate-500">
                    No pre-checked boxes · Opt out anytime via STOP
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Sample Messages & Supported Keywords */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-display text-base font-bold text-slate-950">
                Sample Fixed List SMS Messages
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Concise messages sent from our verified toll-free number:
              </p>

              <div className="mt-4 space-y-3 text-xs font-mono text-slate-800">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 leading-relaxed">
                  <p className="text-[11px] font-sans font-semibold text-slate-500 mb-1">
                    Task Dispatch
                  </p>
                  Fixed List (Simple POS): New Urgent repair at 2140 Cedar St Unit 4B (Budget:
                  $250, Due: Nov 20). View photos &amp; accept: https://fixedlist.app/t/... Reply
                  YES/NO or STOP to opt out.
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 leading-relaxed">
                  <p className="text-[11px] font-sans font-semibold text-slate-500 mb-1">
                    Day-Before &amp; Access Relay
                  </p>
                  Fixed List: Reminder for tomorrow at 2140 Cedar St Unit 4B. Unit Igloo access
                  code is now available inside your task link: https://fixedlist.app/t/... Reply
                  STOP to unsubscribe.
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 leading-relaxed">
                  <p className="text-[11px] font-sans font-semibold text-slate-500 mb-1">
                    Optional Weekly Digest
                  </p>
                  Fixed List: You have 3 open jobs (1 urgent). Open My Jobs list:
                  https://fixedlist.app/c/... Reply STOP to opt out, HELP for help.
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-display text-base font-bold text-slate-950">
                Supported Inbound SMS Keywords
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt className="font-mono font-semibold text-slate-950">STOP</dt>
                  <dd className="text-xs text-slate-600 text-right">
                    Immediately unsubscribes from all SMS notifications
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt className="font-mono font-semibold text-slate-950">HELP</dt>
                  <dd className="text-xs text-slate-600 text-right">
                    Returns support contact ({COMPANY_INFO.supportEmail})
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt className="font-mono font-semibold text-slate-950">LIST</dt>
                  <dd className="text-xs text-slate-600 text-right">
                    Replies with open job count + My Jobs link
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="font-mono font-semibold text-slate-950">YES / NO</dt>
                  <dd className="text-xs text-slate-600 text-right">
                    Quick accept or decline on the active task prompt
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
