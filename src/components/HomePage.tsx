import { useState } from 'react';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import heroWorkspaceImg from '../assets/images/hero_operations_workspace_1794892194016.jpg';
import cloverCounterImg from '../assets/images/clover_pos_counter_1794892194440.jpg';
import maintenanceCraftImg from '../assets/images/property_maintenance_craft_1794892195357.jpg';
import {
  CLOVER_APPS,
  CLOVER_DEVELOPER_URL,
  COMPANY_INFO,
  type RoutePath,
} from '../data/siteData';
import { ImageFrame } from './ImageFrame';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [contactEmail, setContactEmail] = useState('');
  const [contactTopic, setContactTopic] = useState('Fixed List Property Management');
  const [contactMessage, setContactMessage] = useState('');
  const [contactError, setContactError] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const epayment = CLOVER_APPS[0];
  const customerAdd = CLOVER_APPS[1];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactError('');

    const emailTrimmed = contactEmail.trim();
    if (!emailTrimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      setContactError('Please enter a valid email address.');
      return;
    }
    if (!contactMessage.trim() || contactMessage.trim().length < 10) {
      setContactError('Please include a brief description of your question or setup.');
      return;
    }
    setContactSent(true);
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-xs font-medium text-blue-700 mb-3">
                Simple POS · Clover App Market &amp; Property SaaS
              </p>
              <h1
                className="font-display font-bold tracking-tight text-slate-950 leading-[1.08]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
              >
                Software for Busy Entrepreneurs
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Easy-to-use software to keep your business moving—spanning Clover POS apps
                (ePayment and Customer Add) for restaurants and retail counters, plus Fixed List
                maintenance dispatch for property managers.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="#apps"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap shrink-0"
                >
                  Explore Our Apps
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex">
              <ImageFrame
                src={heroWorkspaceImg}
                alt="Simple POS operations desk with a countertop POS terminal and tablet maintenance schedule"
                aspectClass="aspect-[16/10] lg:aspect-auto lg:h-full w-full"
                className="rounded-xl border border-slate-200"
                fallbackTitle="Simple POS Operations Workspace"
              />
            </div>
          </div>

          {/* 4-column Proof Strip */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="font-mono text-2xl font-semibold text-slate-950 tabular-nums">3 Apps</p>
              <p className="mt-1 text-sm text-slate-600">
                ePayment, Customer Add, and Fixed List built by Simple POS
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold text-slate-950 tabular-nums">1,043</p>
              <p className="mt-1 text-sm text-slate-600">
                Published merchant installs on the Clover App Market
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold text-slate-950 tabular-nums">24 Hours</p>
              <p className="mt-1 text-sm text-slate-600">
                Automated tenant entry notice compliance in Fixed List
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold text-slate-950 tabular-nums">0 Logins</p>
              <p className="mt-1 text-sm text-slate-600">
                Required for contractors via Fixed List magic links
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Applications Directory */}
      <section id="apps" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-blue-700 mb-2">
                01. Application Suite · Clover App Market &amp; Property Management
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
                Three purpose-built applications from Simple POS.
              </h2>
            </div>
            <a
              href={CLOVER_DEVELOPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap shrink-0"
            >
              Clover Developer Profile (S4T3B9YGFDCZ2)
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* 3-App Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {/* App 1: ePayment */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col">
              <ImageFrame
                src={cloverCounterImg}
                alt="Restaurant checkout counter running Clover ePayment online invoicing"
                aspectClass="aspect-[4/3]"
                fallbackTitle="ePayment for Clover POS"
              />
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                    <span>Clover App · 826 installs</span>
                    <span className="font-mono">FDKEAKNTAE73R</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-950">
                    {epayment.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-800">{epayment.tagline}</p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{epayment.summary}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                    {epayment.highlights.slice(0, 3).map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 space-y-4">
                  <div className="text-xs text-slate-600 space-y-1">
                    <div>
                      <span className="font-semibold text-slate-950">Basic:</span>{' '}
                      <span className="font-mono tabular-nums text-blue-700 font-semibold">
                        $19.99/mo
                      </span>{' '}
                      (50 payments included)
                    </div>
                    <div>
                      <span className="font-semibold text-slate-950">Enterprise:</span>{' '}
                      <span className="font-mono tabular-nums text-blue-700 font-semibold">
                        $49.99/mo
                      </span>{' '}
                      (500 payments + recurring)
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                    <a
                      href={epayment.marketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-700 hover:underline"
                    >
                      Clover Listing <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    <span className="text-slate-300" aria-hidden="true">
                      ·
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('/privacy')}
                      className="text-slate-700 hover:text-blue-700 cursor-pointer"
                    >
                      Clover Privacy Policy
                    </button>
                    <span className="text-slate-300" aria-hidden="true">
                      ·
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('/epayment-terms')}
                      className="text-slate-700 hover:text-blue-700 cursor-pointer"
                    >
                      Terms
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* App 2: Customer Add */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col">
              <ImageFrame
                src={heroWorkspaceImg}
                alt="POS station and customer directory lookup for Customer Add on Clover"
                aspectClass="aspect-[4/3]"
                fallbackTitle="Customer Add for Clover POS"
              />
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                    <span>Clover App · 217 installs</span>
                    <span className="font-mono">85Y2Q0ZX037QP</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-950">
                    {customerAdd.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-800">{customerAdd.tagline}</p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {customerAdd.summary}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                    {customerAdd.highlights.slice(0, 3).map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 space-y-4">
                  <div className="text-xs text-slate-600 space-y-1">
                    <div>
                      <span className="font-semibold text-slate-950">FREE to Start:</span>{' '}
                      <span className="font-mono tabular-nums text-blue-700 font-semibold">
                        $0/mo
                      </span>{' '}
                      ($0.05 per use)
                    </div>
                    <div>
                      <span className="font-semibold text-slate-950">Unlimited Use:</span>{' '}
                      <span className="font-mono tabular-nums text-blue-700 font-semibold">
                        $9.99/mo
                      </span>{' '}
                      (unlimited attachments)
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                    <a
                      href={customerAdd.marketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-700 hover:underline"
                    >
                      Clover Listing <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    <span className="text-slate-300" aria-hidden="true">
                      ·
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('/customeradd-help')}
                      className="text-slate-700 hover:text-blue-700 cursor-pointer"
                    >
                      Help Guide
                    </button>
                    <span className="text-slate-300" aria-hidden="true">
                      ·
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('/privacy')}
                      className="text-slate-700 hover:text-blue-700 cursor-pointer"
                    >
                      Clover Privacy Policy
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* App 3: Fixed List */}
            <article className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col">
              <ImageFrame
                src={maintenanceCraftImg}
                alt="Maintenance technician inspecting a smart keypad door lock using Fixed List"
                aspectClass="aspect-[4/3]"
                fallbackTitle="Fixed List Property Maintenance"
              />
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                    <span>Property SaaS · In Development</span>
                    <span className="font-mono">Web &amp; SMS</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-950">Fixed List</h3>
                  <p className="mt-2 text-sm font-medium text-slate-800">
                    Dispatch maintenance jobs to contractors via magic links and collect signed PDF
                    invoices.
                  </p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Built for residential property managers overseeing rental units and rotating
                    contractors—automating 24-hour Berkeley tenant entry notices, time-windowed Igloo
                    lock codes, ~$100 overrun approvals, and Labor vs. Supplies 1099 totals.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                    <li>• Zero-account contractor magic links &amp; My Jobs list</li>
                    <li>• Twilio SMS notifications with STOP / HELP / LIST support</li>
                    <li>• Photo-documented completion &amp; timestamped invoice PDFs</li>
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 space-y-4">
                  <div className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-950">Architecture:</span> Google
                    Sign-In for PMs · Public <span className="font-mono">/t/&#123;token&#125;</span>{' '}
                    links · Twilio 1-800 SMS
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => onNavigate('/sms-consent')}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-white bg-blue-700 rounded-md hover:bg-blue-800 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      SMS Opt-In Form
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('/fixedlist')}
                      className="text-blue-700 hover:underline cursor-pointer"
                    >
                      Overview
                    </button>
                    <span className="text-slate-300" aria-hidden="true">
                      ·
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('/fixedlist/privacy')}
                      className="text-slate-700 hover:text-blue-700 cursor-pointer"
                    >
                      Fixed List Privacy
                    </button>
                    <span className="text-slate-300" aria-hidden="true">
                      ·
                    </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('/fixedlist/terms')}
                      className="text-slate-700 hover:text-blue-700 cursor-pointer"
                    >
                      Terms
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Compliance & Separate Policies Hub */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-blue-700 mb-2">
              02. Messaging Compliance &amp; App-Specific Legal Policies
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Dedicated policies for Clover POS apps and Fixed List.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Simple POS maintains distinct privacy policies tailored to Clover merchant workflows
              versus Fixed List property maintenance and Twilio 1-800 SMS messaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-blue-700">Twilio Toll-Free Opt-In</p>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-950">
                  Fixed List SMS Consent Form
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Voluntary opt-in form with unchecked boxes, message frequency, rates notice, and
                  STOP/HELP keywords.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/sms-consent')}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 cursor-pointer"
              >
                Open Consent Form <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">ePayment &amp; Customer Add</p>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-950">
                  Clover Apps Privacy Policy
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Covers Clover merchant OAuth scopes, order and customer sync, and online payment
                  request handling.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/privacy')}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 cursor-pointer"
              >
                Read Clover Privacy <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">Fixed List Maintenance</p>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-950">
                  Fixed List Privacy Policy
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Covers magic-link expiration, Igloo code redaction, 1099 invoice records, and SMS
                  opt-in non-sharing rules.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/fixedlist/privacy')}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 cursor-pointer"
              >
                Read Fixed List Privacy <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">Service Agreements</p>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-950">
                  Fixed List &amp; ePayment Terms
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Covers property manager entry-notice rules, ESIGN invoice signatures, SMS terms,
                  and Clover EULA plans.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/fixedlist/terms')}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 cursor-pointer"
              >
                Read Terms of Service <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Support & Direct Contact */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium text-blue-700 mb-2">
                03. Direct Merchant &amp; PM Support
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                Questions about ePayment, Customer Add, or Fixed List?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Reach the Simple POS team directly by email or phone during standard support hours.
              </p>

              <dl className="mt-8 space-y-4 text-sm border-t border-slate-200 pt-6">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">General &amp; Fixed List Email</dt>
                  <dd className="font-medium text-slate-950">
                    <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="hover:text-blue-700">
                      {COMPANY_INFO.supportEmail}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">ePayment Helpdesk</dt>
                  <dd className="font-medium text-slate-950">
                    <a
                      href={`mailto:${COMPANY_INFO.epaymentSupportEmail}`}
                      className="hover:text-blue-700"
                    >
                      {COMPANY_INFO.epaymentSupportEmail}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Support Phone</dt>
                  <dd className="font-mono font-medium text-slate-950 tabular-nums">
                    {COMPANY_INFO.supportPhone}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Hours</dt>
                  <dd className="text-slate-700 text-right">{COMPANY_INFO.supportHours}</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
                {contactSent ? (
                  <div className="py-6">
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold text-base">
                      <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                      <span>Support inquiry prepared</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      Thank you. Your inquiry regarding <strong>{contactTopic}</strong> has been
                      logged for <strong>{contactEmail}</strong>. You can also send your message
                      directly via email to{' '}
                      <a
                        href={`mailto:${COMPANY_INFO.supportEmail}?subject=${encodeURIComponent(
                          `[Simple POS] ${contactTopic}`
                        )}&body=${encodeURIComponent(contactMessage)}`}
                        className="text-blue-700 underline font-medium"
                      >
                        {COMPANY_INFO.supportEmail}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setContactSent(false);
                        setContactMessage('');
                      }}
                      className="mt-5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-300 rounded-lg hover:bg-slate-200 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} noValidate className="space-y-4">
                    <h3 className="font-display text-lg font-bold text-slate-950">
                      Send a support or product inquiry
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="home-contact-email"
                          className="block text-xs font-medium text-slate-700 mb-1.5"
                        >
                          Work or Merchant Email
                        </label>
                        <input
                          id="home-contact-email"
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-blue-700"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="home-contact-topic"
                          className="block text-xs font-medium text-slate-700 mb-1.5"
                        >
                          Application / Topic
                        </label>
                        <select
                          id="home-contact-topic"
                          value={contactTopic}
                          onChange={(e) => setContactTopic(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:border-blue-700"
                        >
                          <option value="Fixed List Property Management">
                            Fixed List Property Management
                          </option>
                          <option value="ePayment for Clover POS">ePayment for Clover POS</option>
                          <option value="Customer Add for Clover POS">
                            Customer Add for Clover POS
                          </option>
                          <option value="SMS Compliance & Privacy Inquiry">
                            SMS Compliance &amp; Privacy Inquiry
                          </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="home-contact-message"
                        className="block text-xs font-medium text-slate-700 mb-1.5"
                      >
                        How can we help?
                      </label>
                      <textarea
                        id="home-contact-message"
                        rows={3}
                        required
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Describe your Clover merchant setup, unit count, or support question..."
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-blue-700"
                      />
                    </div>
                    {contactError && (
                      <p className="text-xs font-medium text-red-700" role="alert">
                        {contactError}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
