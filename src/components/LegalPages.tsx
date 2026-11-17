import { COMPANY_INFO, type RoutePath } from '../data/siteData';

type LegalDocKind = 'clover-privacy' | 'fixedlist-privacy' | 'terms' | 'epayment-terms';

interface LegalPagesProps {
  docKind: LegalDocKind;
  onNavigate: (path: RoutePath) => void;
}

export function LegalPages({ docKind, onNavigate }: LegalPagesProps) {
  return (
    <div className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Document Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 rounded-lg mb-8 w-fit">
          <button
            type="button"
            onClick={() => onNavigate('/privacy')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              docKind === 'clover-privacy'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            Clover Apps Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => onNavigate('/fixedlist/privacy')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              docKind === 'fixedlist-privacy'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            Fixed List Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => onNavigate('/fixedlist/terms')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              docKind === 'terms'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            Fixed List Terms of Service
          </button>
          <button
            type="button"
            onClick={() => onNavigate('/epayment-terms')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              docKind === 'epayment-terms'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            ePayment Terms (Clover)
          </button>
        </div>

        <article className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 space-y-8 text-slate-700 leading-relaxed">
          {docKind === 'clover-privacy' && (
            <>
              <header className="border-b border-slate-200 pb-6">
                <p className="text-xs font-medium text-blue-700 mb-2">
                  Simple POS · Clover App Market (ePayment &amp; Customer Add)
                </p>
                <h1 className="font-display text-3xl font-bold tracking-tight text-slate-950">
                  Clover Apps Privacy Policy (ePayment &amp; Customer Add)
                </h1>
                <p className="mt-2 text-xs text-slate-500">
                  Effective Date: {COMPANY_INFO.lastUpdated} · Operator: {COMPANY_INFO.legalEntity}{' '}
                  · Applies exclusively to Clover POS Apps (ePayment &amp; Customer Add)
                </p>
              </header>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  1. Scope of This Privacy Policy
                </h2>
                <p className="text-sm">
                  {COMPANY_INFO.legalEntity} (&ldquo;Simple POS,&rdquo; &ldquo;we,&rdquo;
                  &ldquo;our,&rdquo; or &ldquo;us&rdquo;) publishes point-of-sale applications on
                  the Clover App Market, including <strong>ePayment</strong> (App ID:
                  FDKEAKNTAE73R) and <strong>Customer Add</strong> (App ID: 85Y2Q0ZX037QP). This
                  Privacy Policy explains how merchant and customer data is handled when you
                  install and operate those Clover applications. For our property maintenance SaaS,
                  please review the separate{' '}
                  <a
                    href="/fixedlist/privacy"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/fixedlist/privacy');
                    }}
                    className="text-blue-700 font-semibold underline"
                  >
                    Fixed List Privacy Policy
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  2. Clover Merchant &amp; Order Data We Access
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Merchant Identity &amp; Clover OAuth Tokens:</strong> When a merchant
                    installs ePayment or Customer Add via the Clover App Market, we receive Clover
                    merchant identifiers, location metadata, and scoped OAuth access tokens solely
                    to authenticate API requests back to your Clover account.
                  </li>
                  <li>
                    <strong>Customer Add Data:</strong> Customer Add reads and writes customer
                    records (name, email, phone number, and order association) directly through the
                    standard Clover Customers API so merchants can attach or remove customers at
                    order creation, tender, or post-payment.
                  </li>
                  <li>
                    <strong>ePayment Invoice &amp; Recurring Payment Data:</strong> When a merchant
                    sends an ePayment request from Register, Sale, or the ePayment web dashboard,
                    we process order totals, line items, and the recipient&apos;s email address
                    and/or SMS phone number strictly to deliver the requested payment invoice link.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  3. Cardholder Data &amp; Clover Payment Processing
                </h2>
                <p className="text-sm">
                  Online card payments and recurring card-on-file charges initiated through
                  ePayment are processed via authorized Clover merchant payment rails and settle
                  directly into the merchant&apos;s Clover account. Simple POS does not sell
                  merchant transaction histories, customer directories, or cardholder data to any
                  third party.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  4. Email &amp; SMS Payment Notifications
                </h2>
                <p className="text-sm">
                  Customer email addresses and phone numbers entered into ePayment by a merchant
                  are used solely to transmit the specific invoice or receipt notification
                  requested by that merchant. We do not use merchant customer lists for our own
                  marketing or share customer mobile numbers with third-party marketers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  5. Data Retention, Uninstallation &amp; Contact
                </h2>
                <p className="text-sm">
                  When a merchant uninstalls ePayment or Customer Add from Clover, OAuth access
                  tokens are revoked and merchant records are retained only as required for
                  accounting, tax, or dispute resolution. For privacy inquiries or deletion
                  requests, contact{' '}
                  <a
                    href={`mailto:${COMPANY_INFO.supportEmail}`}
                    className="text-blue-700 font-semibold underline"
                  >
                    {COMPANY_INFO.supportEmail}
                  </a>{' '}
                  or call {COMPANY_INFO.supportPhone}.
                </p>
              </section>
            </>
          )}

          {docKind === 'fixedlist-privacy' && (
            <>
              <header className="border-b border-slate-200 pb-6">
                <p className="text-xs font-medium text-blue-700 mb-2">
                  Simple POS · Fixed List Property Maintenance Platform
                </p>
                <h1 className="font-display text-3xl font-bold tracking-tight text-slate-950">
                  Fixed List Privacy Policy
                </h1>
                <p className="mt-2 text-xs text-slate-500">
                  Effective Date: {COMPANY_INFO.lastUpdated} · Operator: {COMPANY_INFO.legalEntity}{' '}
                  · Applies exclusively to Fixed List
                </p>
              </header>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  1. Overview &amp; Scope
                </h2>
                <p className="text-sm">
                  {COMPANY_INFO.legalEntity} (&ldquo;Simple POS,&rdquo; &ldquo;we,&rdquo;
                  &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates <strong>Fixed List</strong>, a
                  web application enabling property managers to dispatch maintenance tasks via
                  magic links, send 24-hour tenant entry notices, relay smart-lock access codes,
                  and generate signed PDF invoices. For our Clover POS merchant apps, see the
                  separate{' '}
                  <a
                    href="/privacy"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/privacy');
                    }}
                    className="text-blue-700 font-semibold underline"
                  >
                    Clover Apps Privacy Policy
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  2. Information We Collect in Fixed List
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Property Manager Account Data:</strong> When a property manager signs
                    in with Google (Firebase Authentication), we collect their name, email address,
                    optional phone number, and Firebase Cloud Messaging (FCM) push tokens for
                    workflow alerts.
                  </li>
                  <li>
                    <strong>Property &amp; Tenant Directory Data:</strong> Property managers enter
                    unit addresses, unit notes, optional smart-lock identifiers (Igloo), and tenant
                    contact information (name, email, phone) solely to coordinate maintenance access
                    and send automated entry-notice emails.
                  </li>
                  <li>
                    <strong>Contractor &amp; Work Order Data:</strong> Contractors do not create
                    accounts or passwords. When opening a per-task magic link or self-registering
                    from Thumbtack or TaskRabbit, Fixed List collects contractor name, email, phone
                    number, estimated completion dates, overrun explanations, problem/completion
                    photos, receipt images, and Labor vs. Supplies invoice line items.
                  </li>
                  <li>
                    <strong>Invoice Signature Audit Data:</strong> When a contractor taps
                    Acknowledge/Sign on a completed task invoice, Fixed List records the timestamp
                    and IP address in lieu of a handwritten signature for billing and 1099 tax
                    recordkeeping.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  3. Mobile Phone Numbers &amp; SMS Opt-In Data (No Third-Party Sharing)
                </h2>
                <p className="text-sm font-medium text-slate-900 bg-slate-50 border border-slate-200 rounded-lg p-4">
                  No mobile information will be shared with third parties or affiliates for
                  marketing or promotional purposes. All data-sharing categories described in this
                  policy exclude text messaging originator opt-in data and consent; this information
                  will not be shared with any third parties, except with telecommunications
                  infrastructure providers (such as Twilio) solely as required to transmit the SMS
                  messages you explicitly opted in to receive.
                </p>
                <p className="text-sm">
                  Contractors and property managers may opt out of SMS notifications at any time by
                  replying <span className="font-mono font-semibold">STOP</span> to any message or
                  emailing {COMPANY_INFO.supportEmail}.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  4. Magic-Link Expiration, Access Codes &amp; Tenant Privacy
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Per-Task Token Expiration:</strong> Contractor task magic links (
                    <span className="font-mono text-xs">/t/&#123;token&#125;</span>) use
                    unguessable random tokens (32+ characters) and expire automatically when the
                    property manager marks the task <strong>Closed</strong>.
                  </li>
                  <li>
                    <strong>Tenant Contact &amp; Igloo Code Redaction:</strong> Tenant contact
                    details and time-windowed Igloo door access codes are shown to an assigned
                    contractor only while the task is active inside the 24-hour access window. After
                    task closure, Igloo codes are redacted from contractor views, and the contractor
                    My Jobs list (<span className="font-mono text-xs">/c/&#123;contractorToken&#125;</span>)
                    never displays tenant contacts or lock codes.
                  </li>
                  <li>
                    <strong>Scoped Media Uploads:</strong> Problem photos, completion photos, and
                    receipt images are stored in Google Cloud Storage paths and uploaded via
                    short-lived signed URLs validated against the task token.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  5. Infrastructure &amp; Multi-Tenant Isolation
                </h2>
                <p className="text-sm">
                  Fixed List runs on Google Firebase (Authentication, Cloud Firestore, Cloud
                  Functions, Cloud Storage, and Cloud Messaging), uses Twilio for SMS delivery, and
                  uses transactional email providers (SendGrid/SMTP or Resend) for 24-hour tenant
                  entry notices and PM fallback notifications. Firestore security rules isolate
                  each property manager&apos;s records by authenticated{' '}
                  <span className="font-mono text-xs">propertyManagerId</span>. We never sell
                  personal data.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  6. Data Retention &amp; Contact
                </h2>
                <p className="text-sm">
                  Completed invoices, receipts, and yearly Labor vs. Supplies summaries are
                  retained for property managers&apos; accounting and IRS Form 1099 preparation
                  until deleted by the account owner. To request access, correction, or deletion of
                  your data, email{' '}
                  <a
                    href={`mailto:${COMPANY_INFO.supportEmail}`}
                    className="text-blue-700 font-semibold underline"
                  >
                    {COMPANY_INFO.supportEmail}
                  </a>.
                </p>
              </section>
            </>
          )}

          {docKind === 'terms' && (
            <>
              <header className="border-b border-slate-200 pb-6">
                <p className="text-xs font-medium text-blue-700 mb-2">
                  Simple POS · Fixed List Property Maintenance Platform
                </p>
                <h1 className="font-display text-3xl font-bold tracking-tight text-slate-950">
                  Fixed List Terms of Service &amp; SMS Messaging Terms
                </h1>
                <p className="mt-2 text-xs text-slate-500">
                  Effective Date: {COMPANY_INFO.lastUpdated} · Operator: {COMPANY_INFO.legalEntity}
                </p>
              </header>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  1. Acceptance of Terms
                </h2>
                <p className="text-sm">
                  By accessing or using Fixed List (whether as an authenticated Property Manager or
                  an unauthenticated Contractor opening a task magic link or My Jobs link), you
                  agree to these Terms of Service and our{' '}
                  <a
                    href="/fixedlist/privacy"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/fixedlist/privacy');
                    }}
                    className="text-blue-700 font-semibold underline"
                  >
                    Fixed List Privacy Policy
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  2. Description of Service &amp; Role Boundaries
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Software Workflow Tool Only:</strong> Fixed List provides dispatch,
                    scheduling, entry-notice email automation, smart-lock code relay, photo
                    documentation, and PDF invoice generation tools. Simple POS is not a property
                    management company, general contractor, payment processor, or employer of any
                    contractor.
                  </li>
                  <li>
                    <strong>Independent Contractor Status:</strong> Contractors using Fixed List
                    magic links act as independent contractors or third-party service providers
                    engaged directly by the Property Manager. Fixed List tracks Labor vs. Supplies
                    subtotals solely for the Property Manager&apos;s recordkeeping and 1099
                    preparation.
                  </li>
                  <li>
                    <strong>External Payments:</strong> Fixed List records payment status (Unpaid /
                    Paid) and off-platform payment method metadata (such as Zelle, Venmo, or cash)
                    entered by the Property Manager; Fixed List does not hold funds or initiate
                    bank transfers between Property Managers and Contractors.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  3. Property Manager Compliance Responsibilities
                </h2>
                <p className="text-sm">
                  Property Managers represent and warrant that they have lawful authority to dispatch
                  maintenance personnel to listed rental units, provide tenant contact details for
                  entry-notice emails, and share temporary smart-lock (Igloo) codes. While Fixed
                  List automates informational 24-hour advance tenant entry-notice emails (aligned
                  with Berkeley and California Civil Code notice standards), Property Managers remain
                  solely responsible for verifying that statutory notice periods, tenant
                  objections, and local housing ordinances are satisfied before unit entry.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  4. Magic Links, Overruns &amp; Electronic Invoice Acknowledgement
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    Contractors must keep per-task magic links and My Jobs links confidential and
                    use unit access codes strictly during the authorized repair window.
                  </li>
                  <li>
                    If job costs are expected to exceed the budget ceiling by approximately $100 or
                    more, the Contractor must submit a revised amount, note, and supporting photo
                    for Property Manager approval before incurring excess charges.
                  </li>
                  <li>
                    Clicking <strong>Acknowledge / Sign</strong> on a Fixed List completion form
                    constitutes an electronic signature under the U.S. ESIGN Act, recording the
                    contractor&apos;s confirmation of work performed, attached receipts, timestamp,
                    and IP address.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  5. SMS Messaging Program Terms (Twilio Toll-Free Compliance)
                </h2>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 text-sm">
                  <p>
                    <strong>Program Name:</strong> Simple POS — Fixed List Maintenance Dispatch SMS.
                  </p>
                  <p>
                    <strong>Message Types:</strong> Task assignment magic links, acceptance nudges,
                    day-before scheduled reminders, unit access code relays, budget overrun alerts,
                    and optional weekly open-job summary digests.
                  </p>
                  <p>
                    <strong>Voluntary Opt-In &amp; Frequency:</strong> Enrollment is optional and
                    completed via our{' '}
                    <a
                      href="/sms-consent"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('/sms-consent');
                      }}
                      className="text-blue-700 font-semibold underline"
                    >
                      SMS Consent Form
                    </a>
                    . Message frequency varies based on active tasks (typically 1–8 messages per
                    task; max 1 message/week for optional digests).
                  </p>
                  <p>
                    <strong>Opt-Out &amp; Support:</strong> Reply{' '}
                    <span className="font-mono font-semibold">STOP</span> to cancel at any time
                    (you will receive one final confirmation text). Reply{' '}
                    <span className="font-mono font-semibold">HELP</span> for assistance or contact{' '}
                    {COMPANY_INFO.supportEmail}. Reply{' '}
                    <span className="font-mono font-semibold">LIST</span> to receive your open jobs
                    summary link.
                  </p>
                  <p>
                    <strong>Rates &amp; Carrier Disclaimer:</strong> Message and data rates may
                    apply. Wireless carriers are not liable for delayed or undelivered messages.
                  </p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  6. Disclaimer of Warranties &amp; Limitation of Liability
                </h2>
                <p className="text-sm">
                  Fixed List is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
                  warranties of any kind. To the maximum extent permitted by law, Simple POS shall
                  not be liable for indirect, incidental, or consequential damages, property damage
                  arising from maintenance work, missed entry notices due to inaccurate tenant
                  email addresses, or carrier SMS delays.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  7. Governing Law &amp; Contact
                </h2>
                <p className="text-sm">
                  These Terms are governed by the laws of the State of California. Questions may be
                  directed to{' '}
                  <a
                    href={`mailto:${COMPANY_INFO.supportEmail}`}
                    className="text-blue-700 font-semibold underline"
                  >
                    {COMPANY_INFO.supportEmail}
                  </a>{' '}
                  or {COMPANY_INFO.supportPhone}.
                </p>
              </section>
            </>
          )}

          {docKind === 'epayment-terms' && (
            <>
              <header className="border-b border-slate-200 pb-6">
                <p className="text-xs font-medium text-blue-700 mb-2">
                  Simple POS · Clover App Market (App ID: FDKEAKNTAE73R)
                </p>
                <h1 className="font-display text-3xl font-bold tracking-tight text-slate-950">
                  ePayment End User License Agreement &amp; Terms
                </h1>
                <p className="mt-2 text-xs text-slate-500">
                  Effective Date: {COMPANY_INFO.lastUpdated} · Operator: {COMPANY_INFO.legalEntity}
                </p>
              </header>

              <section className="space-y-3 text-sm">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  1. License &amp; Clover Integration
                </h2>
                <p>
                  Simple POS grants your merchant business a non-exclusive, non-transferable
                  license to use the <strong>ePayment</strong> application in connection with your
                  authorized Clover merchant account, Clover Register/Sale workflows, and the
                  ePayment web dashboard.
                </p>
              </section>

              <section className="space-y-3 text-sm">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  2. Subscription Tiers &amp; Excess Payment Fees
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Basic Plan ($19.99/month):</strong> Includes up to 50 online payments
                    per billing month. Payments exceeding 50/month incur a $0.49 per-payment fee.
                  </li>
                  <li>
                    <strong>Enterprise Plan ($49.99/month):</strong> Includes up to 500 online
                    payments per billing month ($0.49 per additional payment) and enables recurring
                    card-on-file payment schedules.
                  </li>
                  <li>
                    Billing is administered through your Clover App Market subscription. Standard
                    Clover merchant processing rates apply separately to card transactions.
                  </li>
                </ul>
              </section>

              <section className="space-y-3 text-sm">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  3. Customer Communications &amp; Recurring Billing Consent
                </h2>
                <p>
                  Merchants using ePayment to send invoice payment links via email or SMS, or to
                  enroll customers in recurring billing cycles, are responsible for obtaining
                  documented customer permission prior to charging saved cards or dispatching SMS
                  payment notifications.
                </p>
              </section>

              <section className="space-y-3 text-sm">
                <h2 className="font-display text-xl font-bold text-slate-950">
                  4. Merchant Support
                </h2>
                <p>
                  Support for ePayment is available Monday through Friday, 8:00 AM – 4:00 PM CST at{' '}
                  <a
                    href={`mailto:${COMPANY_INFO.epaymentSupportEmail}`}
                    className="text-blue-700 font-semibold underline"
                  >
                    {COMPANY_INFO.epaymentSupportEmail}
                  </a>{' '}
                  or by phone at {COMPANY_INFO.supportPhone}.
                </p>
              </section>
            </>
          )}
        </article>
      </div>
    </div>
  );
}
