export type RoutePath =
  | '/'
  | '/fixedlist'
  | '/sms-consent'
  | '/fixedlist/sms-consent'
  | '/privacy'
  | '/fixedlist/privacy'
  | '/terms'
  | '/fixedlist/terms'
  | '/epayment-terms'
  | '/customeradd-help'
  | '/support';

export interface CloverApp {
  id: string;
  name: string;
  tagline: string;
  installCount: number;
  productType: string;
  marketUrl: string;
  supportUrl: string;
  supportEmail: string;
  supportPhone?: string;
  termsRoute: RoutePath;
  privacyRoute: RoutePath;
  summary: string;
  highlights: string[];
  plans: {
    name: string;
    price: string;
    detail: string;
  }[];
}

export const CLOVER_DEVELOPER_URL = 'https://www.clover.com/appmarket/developer/S4T3B9YGFDCZ2';

export const CLOVER_APPS: CloverApp[] = [
  {
    id: 'FDKEAKNTAE73R',
    name: 'ePayment',
    tagline:
      'Request online payments from your customers via email and SMS notifications, with recurring billing.',
    installCount: 826,
    productType: 'Web & Clover POS',
    marketUrl: 'https://www.clover.com/appmarket/apps/FDKEAKNTAE73R',
    supportUrl: 'https://simplepos.freshdesk.com/solution/folders/9000166301',
    supportEmail: 'ePayment@foodspot.zohodesk.com',
    supportPhone: '(650) 681-8233',
    termsRoute: '/epayment-terms',
    privacyRoute: '/privacy',
    summary:
      'Send online payment requests directly from your Clover Register or Sale workflow, or launch the ePayment web dashboard when away from your terminal. Ideal for catering phone orders, deposits, special orders, and recurring memberships.',
    highlights: [
      'Create an order in Register or Sale and dispatch payment requests via customer email or SMS.',
      'Process card payments online settled directly into your existing Clover merchant account.',
      'Set up automated recurring billing cycles with saved payment cards on the Enterprise plan.',
      'Works with Clover hardware and Clover Go Android terminals for field or counter collections.',
    ],
    plans: [
      {
        name: 'Basic Plan',
        price: '$19.99/mo',
        detail: 'Includes 50 online payments per month ($0.49 per additional payment).',
      },
      {
        name: 'Enterprise Plan',
        price: '$49.99/mo',
        detail: 'Includes 500 payments per month ($0.49 excess) plus recurring payment scheduling.',
      },
    ],
  },
  {
    id: '85Y2Q0ZX037QP',
    name: 'Customer Add',
    tagline: 'Add or update customer information at any point in your Clover checkout flow.',
    installCount: 217,
    productType: 'Clover Android POS',
    marketUrl: 'https://www.clover.com/appmarket/apps/85Y2Q0ZX037QP',
    supportUrl: '/customeradd-help',
    supportEmail: 'support@simpleposapps.com',
    termsRoute: '/terms',
    privacyRoute: '/privacy',
    summary:
      'Built to work natively alongside Clover Register, Sale, and the default Customers directory. Capture customer details when starting an order, at tender, or after an order is paid—without slowing down the counter.',
    highlights: [
      'Attach a customer record when starting a new order, at tender, or after checkout.',
      'Remove or swap an attached customer on an order cleanly in seconds.',
      'Syncs directly with the standard Clover Customers list for repeat ordering and return tracking.',
      'Helps hospitality and retail teams identify loyal regulars and order history.',
    ],
    plans: [
      {
        name: 'FREE to Start',
        price: '$0/mo',
        detail: 'Pay-as-you-go at $0.05 per customer attachment.',
      },
      {
        name: 'Unlimited Use',
        price: '$9.99/mo',
        detail: 'Flat monthly pricing for unlimited customer attachments across your terminal.',
      },
    ],
  },
];

export const FIXEDLIST_WORKFLOW_STEPS = [
  {
    step: '01',
    transition: 'Draft -> Sent',
    title: 'Pick a unit & dispatch via magic link',
    detail:
      'Property managers select a rental unit (address and tenant contact autofill), set a budget ceiling, optional Urgent flag, and desired completion date, then send a per-task magic link via Twilio SMS or copyable message.',
  },
  {
    step: '02',
    transition: 'Sent -> Accepted / Declined',
    title: 'Zero-account contractor response',
    detail:
      'Contractors open /t/{token} directly in their mobile browser—no app download or password needed. New contractors from Thumbtack or TaskRabbit can self-register into the directory, accept with an estimated date, or decline.',
  },
  {
    step: '03',
    transition: 'Accepted -> Scheduled',
    title: 'Automated 24-hour tenant entry notice',
    detail:
      'Once accepted with a scheduled date, Fixed List automatically emails the tenant an informational entry notice at least 24 hours prior to access (aligned with Berkeley rental entry requirements) and notifies the PM.',
  },
  {
    step: '04',
    transition: 'Scheduled -> Access Granted',
    title: 'Windowed Igloo smart-lock access codes',
    detail:
      'Inside the 24-hour entry window, Fixed List prompts the property manager to enter the time-limited Igloo access code. The code is relayed solely through the active task link (and SMS if enabled) and redacted after close.',
  },
  {
    step: '05',
    transition: 'In Progress -> Overrun Approval',
    title: 'Transparent ~$100 budget overrun control',
    detail:
      'If repair scope expands by ~$100 or more above the budget ceiling, the contractor submits a revised estimate, explanation note, and photo through the task link for one-tap PM approval or rejection.',
  },
  {
    step: '06',
    transition: 'In Progress -> Completed -> Paid',
    title: 'Photo proof, 1099 line items & PDF invoice',
    detail:
      'Contractors upload completion photos, itemize Labor vs. Supplies (for accurate 1099 reporting), attach receipt photos, and tap Acknowledge/Sign (timestamp + IP recorded). The PM logs Zelle, Venmo, cash, or other payment and closes the link.',
  },
];

export const COMPANY_INFO = {
  brandName: 'Simple POS',
  legalEntity: 'Simple POS',
  productName: 'Fixed List',
  supportEmail: 'support@simpleposapps.com',
  epaymentSupportEmail: 'ePayment@foodspot.zohodesk.com',
  supportPhone: '(650) 681-8233',
  supportHours: 'Monday - Friday, 8:00 AM - 4:00 PM CST',
  location: 'Berkeley, California',
  lastUpdated: 'November 16, 2026',
};
