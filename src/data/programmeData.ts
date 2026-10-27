import { ModuleData, FacultyMember, CampusFacility, FaqItem } from '../types';

export const PROGRAMME_META = {
  institution: 'Indian Institute of Management Shillong',
  partner: 'SHRM India',
  title: 'Post Graduate Certificate in HUMAN RESOURCE MANAGEMENT',
  batch: 'Batch 07',
  tagline: 'People Strategy Meets Business Strategy',
  duration: '12 Months',
  totalHours: 160,
  fees: '₹1,50,000 + GST',
  format: 'Live Online + Campus',
  credits: '40 SHRM PDCs',
  alumniStatus: 'IIM Shillong Exec (Optional)',
  deadlineDate: '21st February 2027',
  batchStatus: 'Enrollments Closing Soon (Batch 07)',
  location: 'Umsawli, Shillong, Meghalaya – 793018',
  contactEmail: 'pgchrm-admissions@iimshillong.ac.in',
  contactPhone: '+91 364 230 8000',
  applicationFee: '₹2,500',
};

export const HOTLINKED_ASSETS = {
  heroCampusBg:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCmtoNv7RwSXWnKXyZYHGgPh46Jp2-fZgToqOfuYbZkG5UncRGIiIFZwQJTaqNJpjBqCttntbHFfaCDZkQesrcWmH2b88xl4mnTz_61UOnC447gEBDmKJ2S2wBQbQ5lvujWlsW-Xe__0HeoKokPgWD0o-Kekmui0ms0edRK2lE-mI1w8lgmSdaPFsZ-ohrr5rvXZEl_KI3ewEq7aEeks97QIK5wdaabKuheMjaXX_f_qzi5oemWXiyyT0aT2N2ZjzhEsQ',
  overviewBanner:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAvN2q9IyKzkWQ4zLJd-qm577ghs-P9Gjg2OjHYDFdF-L0TdeLien4zcXW-5Z3O-mU5XCkwe8CF8raYSs5_AZNVlyEKIQ2QqHDEgPsZZM9fzh-Ce_xwbyYx2rTsnr3drcPfU5bkeobMa5eQQnjxT9SCUpmnyMedES74oA-2TWyXwlkJXjP2WVPtFIFn6NssZJfX_zW9QcVMNeUJqPj2wgCjNEUt1mPhgXU0Ok5h8phMfl0p60tQHKNA3apvSHmp6rcOeQ',
  sampleCertificate:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCvFk8luEHlzuQGBQrwUy0Zo2YxGT_8rmhGGKafhFyzt5uPZsuGWYQJmUjBNESnqKHCawhH5f9D6yTM6Z-YnJLmJ-Sf_VpSspWTjMkCV54CMTp5njx7NOPbcujqhOx0r2yUPXmpOwgU6ZEMQHQ_zlnnlzcTr5dy7s5PadBOsOyOgeiG4FyqHqOX8mJHBtHqeghxKtEx17WsuFxrjC2smfZzfqOPX92VSV9CyVGG58OYt30Sn9dbhoeGFcsw-13iZOwKxQ',
  campusAmphitheatre:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuANXBVjV0Hq-0N5Glm-xGd1hUgXLedTJ3D58b0QnxhY1vmMSyWMIwYOEwWeqzWy0AatCSQihP_OAi_oEFSWHrbGfXNXUUH3bPE7SiNK-zNRuzZwWrMQOR3m8m8fQ8jVD-UXWCJivEpS5RnvcqGBpz33EbM53i1wNn5cUrcUx7WCwpy4SQEMIU5utbUYoL339pwPIrM_sxFRL8kLSzBbJ6LTZlVEoCzO4cGeIsdN0-uT5rooCAWJCx3kGGD9cVE2aro4-Q',
  campusLearningSuite:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCgZkIQPNwXNisg98dWWInct5PS38MAGk-jg_Pj8qOdWaEUcI2obCv7S54L1K7drMDmGs67wsY-HU-1W3QAP6UV0VD3LOsryWVViwA6Jy9-W3OnKYuIrUQsVG-WOH8MXAbETbkwBxa7qV5-bg14JfG_CL31_r-9x8NBkODUmMU4CZNJvfAAKHzez8dsvAzD8gRcR_5BKyNa-gRpeuzaCj9g7pAC9JOKCVrCHQx1tcBmh6T4izwrMK8C6Mv_Aq2xUlNfEQ',
  campusLibrary:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCcgxyJy6lqgUKE07hzJ07RgHR42_6nb4sqgp38TZZKG-9Cc1q0Ir8Bh7SB4TBGh_xYgKFSvkUW2s42VhVvhZqJekSAoZisz3uya7L9tb8YuY7kPC5BY7ZYBOUmnFYdm8mY7D8kQUhoRSBVz5ncCF0x7rBPWYVVb9D-5IMS7L-oZWzsayaHUIsCCe6UDRd0yJu7905m-4nZ27pK01baGY2s6GbBVpRj-zBePrxDwIhk7ZKGiCdRFpSM8faL-mpc86IXBA',
  faculty1:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCjAx22sMhVMX4odcT3uIhs8il0ilbTQZJm_kpTWlV6YeKrtUVG1jzMOwzPlDhtgkbKPDp7us3MNb0ih8_aYFNXrzf1HtpyQn9nhxGPoahqGdXAKww-TJZPALTG6jqtJD04sr-cTtj5Gy1fkgjB1DEaBmvsVggwN8_oMCOeCwdpgnxt4_l0YTSMYKqeEezKMjuetm2qkrZFrnq_4JbmlRNDxiPqa6uuiqYnpIwZjUWygtaclPSqKNI3cW1888K5yEWing',
  faculty2:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCd8Bi_l5RQOvFgYkIRMxinSl6i5Fiagdb3-Cwk3F1TuKHmTNs4vvx5-nndCEDX19dfaZ1A3bb1QndQNZ-pDmC62_V-rxXOe7ytygn2RCHVHX5IVfeN0XP-Hgrwy6r7Agvpy3trheYa0dZWCft4abqg0Rkrhr49R42Z4LpA0zGQGia3pYPHeRoogI-mDV-_RPkOfS9YsOUDPOzspPVumBaMCnWlQ_xEMjfUNTFTq3puWsHLJmdR9WjrQ-qG2b4PhNdELg',
  faculty3:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA7TbWpSpQkz8HGyNkoIg5FDkg4-H9UFeLASTKV7-zvR3ohvb3W5b9mqER5s2UVf4pQH55g5c9SW_uoXK-4okLemGAeXVembF0NekzTg61kGJTl308to7zdRP0UHkUXXPiCr0KLncmeY_29twW3zEQM7_ulKy14qKxYMsH7E6s6ISoxIA1zUwaNnATRNdXj0Hj8X7LluLQfjC_xeGepE4wDj_-cyKeHVSXabL4hKoEZBNxG1HPfAC2gUDupQ0AkT8PHBg',
  faculty4:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAE71_EDHkyk2uY9Od_2cbwZ7GX4fzbFGFqMpgjZq3cP3UA8kQyMbztYlgNHUsc8WuYzracbHHtecM49U99oJ6LOXZFivRHunNZtbUJDr2E437Fy-SX2hsEbW0k426gWuajgciQyLJ6Iq0_1YTDPqayHKsmZT7ohLdY-RXpwO8PgdYTQ13FS_6x-y-Ezt_Uqb7aBresTYsh1xwi6Ol7TWn4Xf_2KjyNlSs6K_Xi2HmPsngAQWsn8bz6FgYxxnFrcze5Rg',
};

export const MODULES: ModuleData[] = [
  {
    id: 'mod1',
    badge: 'Foundation & Capability',
    title: 'HR Development & Learning in the Work Flow',
    description:
      'Rebuilding organizational learning ecosystems into continuous micro-habits powered by cognitive learning theories and frictionless workflow integrations.',
    capstoneDeliverable: 'Enterprise Capability Heatmap & Skill Gap Matrix',
    hours: 20,
    competencies: [
      {
        title: 'Modern Learning Architecture',
        description: 'Synchronous cohort models, peer micro-credentials, and just-in-time enablement embedded in enterprise stacks.',
      },
      {
        title: 'Knowledge Retention Economics',
        description: 'Measuring behavioral ROI on executive leadership investments using Phillips ROI and Kirkpatrick methodologies.',
      },
      {
        title: 'Adaptive Learning Systems',
        description: 'Designing algorithmic career progression pathways tailored to individual employee competency metrics.',
      },
      {
        title: 'Succession Bench Audits',
        description: 'Identifying mission-critical operational roles and architecting high-potential executive pipelines.',
      },
    ],
    harvardCases: ['Siemens: Reskilling the Global Engineering Workforce', 'Google: Project Aristotle & Learning Circles'],
    toolsCovered: ['Degreed LXP', 'Workday Learning', 'Skill Taxonomy AI'],
  },
  {
    id: 'mod2',
    badge: 'Talent Acquisition',
    title: 'Talent Acquisition & Algorithmic Sourcing',
    description:
      'Harnessing predictive recruiting algorithms, ethical automated screening, and employer branding in hyper-competitive markets.',
    capstoneDeliverable: 'Predictive Talent Funnel & AI Candidate Quality Scorecard',
    hours: 20,
    competencies: [
      {
        title: 'Predictive Candidate Profiling',
        description: 'Utilizing behavioral heuristics and structured assessment stacks for mission-critical executive hires.',
      },
      {
        title: 'AI Hiring Ethics & Bias Audits',
        description: 'Evaluating machine-learning selection models to eliminate algorithmic demographic disparity and regulatory exposure.',
      },
      {
        title: 'Executive Employer Brand Equity',
        description: 'Quantifying talent brand magnetism and designing hyper-targeted talent marketing architectures.',
      },
      {
        title: 'High-Velocity Sourcing Pipelines',
        description: 'Passive candidate engagement systems powered by specialized agentic search workflows.',
      },
    ],
    harvardCases: ['Amazon: Lessons from Algorithmic Recruiting', 'Unilever: Digital Video Interviewing Transformation'],
    toolsCovered: ['Eightfold.ai', 'LinkedIn Talent Insights', 'Beamery CRM'],
  },
  {
    id: 'mod3',
    badge: 'Workforce Modeling',
    title: 'Strategic Workforce Planning & AI Modeling',
    description:
      'Quantitative headcount simulations synchronizing P&L balance forecasts with market talent supply constraints.',
    capstoneDeliverable: '3-Year Quantitative Headcount & Skill Capacity Scenario Model',
    hours: 20,
    competencies: [
      {
        title: 'Dynamic Capacity Modeling',
        description: 'Translating 3-year organizational strategies into predictive FTE requirements and skill decay projections.',
      },
      {
        title: 'Build vs. Buy vs. Bot Framework',
        description: 'Executive decision matrices for internal upskilling vs. specialized contracting vs. agentic AI process automation.',
      },
      {
        title: 'Supply-Demand Gap Quantifications',
        description: 'Macro-economic talent availability modeling across tier-1 and emerging global tech hubs.',
      },
      {
        title: 'Financial Talent Alignment',
        description: 'Harmonizing workforce expenditure budgets directly with corporate EBITDA and margin targets.',
      },
    ],
    harvardCases: ['Dow Chemical: Strategic Workforce Planning Modeling', 'Microsoft: Restructuring for Cloud & AI'],
    toolsCovered: ['Visier People Planning', 'Anaplan Workforce', 'Monte Carlo Headcount Simulators'],
  },
  {
    id: 'mod4',
    badge: 'Culture & Wellbeing',
    title: 'Employee Engagement, Mental Health & Inclusion',
    description:
      'Designing scientifically grounded retention systems, psychological safety indices, and neurodiverse workforce cultures.',
    capstoneDeliverable: 'Comprehensive Enterprise Wellbeing & Psych Safety Audit Framework',
    hours: 20,
    competencies: [
      {
        title: 'Psychological Safety Architecture',
        description: 'Measuring and cultivating fearless intellectual candor, high-velocity feedback loops, and innovation velocity.',
      },
      {
        title: 'Inclusion Diagnostics',
        description: 'Systemic audits for promotion parity, gender wage transparency, and equitable executive succession tracks.',
      },
      {
        title: 'Evidence-Based Wellbeing Programs',
        description: 'Mitigating executive burnout and measuring long-term cognitive productivity health metrics.',
      },
      {
        title: 'Neurodiversity & Cognitive Variety',
        description: 'Structuring team topologies that leverage diverse problem-solving methodologies effectively.',
      },
    ],
    harvardCases: ['Salesforce: The Ohana Culture & Equality Governance', 'Mayo Clinic: Physician & Executive Burnout Intervention'],
    toolsCovered: ['Glint / Viva Pulse', 'Culture Amp', 'DEI Parity Analyzer'],
  },
  {
    id: 'mod5',
    badge: 'Compensation Strategy',
    title: 'Total Rewards & Global Compensation',
    description:
      'Executive compensation formulation, LTIP equity plans, ESOP design, and cross-border tax considerations.',
    capstoneDeliverable: 'C-Suite Executive Total Rewards Package & LTIP Vesting Schedule',
    hours: 20,
    competencies: [
      {
        title: 'Executive Equity & LTIP Modeling',
        description: 'Structuring Long-Term Incentive Plans that tie C-suite remuneration to enterprise market cap benchmarks.',
      },
      {
        title: 'Global Pay Equity & Benchmarking',
        description: 'Hay and Mercer job evaluation standards adapted for multinational remote and distributed workforces.',
      },
      {
        title: 'Performance-Linked Incentive Architectures',
        description: 'Balancing short-term cash bonuses with multi-year milestone delivery covenants.',
      },
      {
        title: 'Cross-Border Compensation Governance',
        description: 'Managing international tax treaties, expatriate allowances, and currency fluctuation hedge mechanisms.',
      },
    ],
    harvardCases: ['Apple: Tim Cook Compensation Governance', 'Tata Sons: Aligning Leadership Incentives with ESG'],
    toolsCovered: ['Korn Ferry Hay Group Grader', 'Aon Total Rewards Suite', 'Carta Equity Planner'],
  },
  {
    id: 'mod6',
    badge: 'People Intelligence',
    title: 'HR Analytics, Agentic AI & People Intelligence',
    description:
      'Deploying Organizational Network Analysis (ONA), attrition prediction engines, and natural language sentiment tracking.',
    capstoneDeliverable: 'Prescriptive People Analytics Dashboard & Attrition Early Warning System',
    hours: 20,
    competencies: [
      {
        title: 'Organizational Network Analysis (ONA)',
        description: 'Mapping informal collaboration highways to uncover hidden enterprise influencers and communication bottlenecks.',
      },
      {
        title: 'Prescriptive Attrition Telemetry',
        description: 'Machine learning algorithms identifying flight risks among critical revenue producers before resignation submission.',
      },
      {
        title: 'LLM & Sentiment Intelligence in HR',
        description: 'Analyzing anonymous pulse feedback at scale while maintaining rigorous privacy safeguards.',
      },
      {
        title: 'Human Capital Valuation Metrics',
        description: 'Formulating HC ROI, revenue per FTE, and intellectual capital indices for investor reports.',
      },
    ],
    harvardCases: ['Credit Suisse: Machine Learning for Retention Forecasting', 'General Electric: ONA in Matrix Restructuring'],
    toolsCovered: ['Tableau / Power BI People Stack', 'Python Scikit-Learn for HR', 'Qualtrics EX'],
  },
  {
    id: 'mod7',
    badge: 'Strategic Advisory',
    title: 'Strategic HRBP Leadership',
    description:
      'Assuming boardroom seats as trusted CEO confidant, orchestrating M&A talent integrations, and culture transformations.',
    capstoneDeliverable: 'Boardroom Executive Memo: M&A Human Capital Due Diligence & Retention Pact',
    hours: 20,
    competencies: [
      {
        title: 'M&A Cultural Due Diligence',
        description: 'Pre-acquisition organizational compatibility diagnostics and post-merger integration leadership strategies.',
      },
      {
        title: 'Boardroom Presentation Mastery',
        description: 'Defending human capital budgets through EBITDA uplift, risk containment, and direct valuation impact.',
      },
      {
        title: 'Change Velocity Orchestration',
        description: 'Guiding enterprise transformations, leadership succession disruptions, and cross-functional restructurings.',
      },
      {
        title: 'Executive Coaching & CEO Advisory',
        description: 'Acting as an impartial sounding board for executive team cohesion, blindspot resolution, and ethics.',
      },
    ],
    harvardCases: ['Disney-Pixar: Preserving Creative Autonomy Post-Acquisition', 'Daimler-Chrysler: Cultural Integration Pitfalls'],
    toolsCovered: ['McKinsey 7S Diagnostic Tool', 'Prosci ADKAR Framework', 'Boardroom Financial Reporting Models'],
  },
  {
    id: 'mod8',
    badge: 'Governance & Capstone',
    title: 'Regulations, ESG & Capstone Simulation',
    description:
      'BRSR ESG social governance, India’s DPDP Act 2023 employee privacy imperatives, and live business capstone defense.',
    capstoneDeliverable: 'Live Capstone Defense Before IIM Shillong Faculty Jury & CHRO Panel',
    hours: 20,
    competencies: [
      {
        title: 'DPDP Act 2023 & Labor Codes',
        description: 'Navigating employee data consent, digital HR compliance, and updated statutory industrial relations codes.',
      },
      {
        title: 'BRSR & ESG Social Pillar Governance',
        description: 'Structuring formal disclosures for employee safety, fair wages, human rights, and supply chain ethics.',
      },
      {
        title: 'Labor Dispute Risk Mitigation',
        description: 'Proactive industrial harmony management, collective bargaining strategy, and grievance redressal architecture.',
      },
      {
        title: 'Live Capstone Defense',
        description: 'Presenting and defending an institutional HR transformation blueprint before an IIM Shillong faculty jury & CHRO panel.',
      },
    ],
    harvardCases: ['Infosys: Institutionalizing BRSR Compliance', 'Maruti Suzuki: Industrial Relations & Labor Reconciliation'],
    toolsCovered: ['ESG BRSR Reporting Template', 'DPDP Data Mapping Framework', 'Capstone Simulation Portal'],
  },
];

export const FACULTY: FacultyMember[] = [
  {
    id: 'fac1',
    name: 'Dr. Ashutosh Murti',
    credentials: 'PhD, IIT Roorkee',
    role: 'Associate Professor, OB & HRM',
    shortBio:
      'Specializes in organizational dynamics, behavioral strategy, and cross-cultural talent integration across enterprise transitions.',
    fullBio:
      'Over 15 years in management consulting and executive teaching. Consulted for top PSUs, technology multinationals, and financial conglomerates on strategic workforce transformations. Published extensively on cross-cultural leadership adaptation and psychological contract breach.',
    imageUrl: HOTLINKED_ASSETS.faculty1,
    focusAreas: ['Organizational Dynamics', 'Behavioral Strategy', 'Cross-Cultural Integration', 'Executive Coaching'],
  },
  {
    id: 'fac2',
    name: 'Dr. Priya Alat',
    credentials: 'PhD, IIT Delhi',
    role: 'Assistant Professor, HRM',
    shortBio:
      'Focuses on positive organizational psychology, workplace wellbeing metrics, and DEI frameworks in fast-scaling tech companies.',
    fullBio:
      'Published widely in premier international journals on psychological capital, organizational citizenship behavior, and sustainable human resource practices. Recipient of multiple research awards on workplace psychological safety and employee resilience architectures.',
    imageUrl: HOTLINKED_ASSETS.faculty2,
    focusAreas: ['Psychological Capital', 'DEI Metrics', 'Wellbeing Analytics', 'Workforce Resilience'],
  },
  {
    id: 'fac3',
    name: 'Prof. Rohit Dwivedi',
    credentials: 'Fellow, IIM Ahmedabad',
    role: 'Professor, Strategic Human Capital',
    shortBio:
      'Veteran advisor on executive compensation models, labor economics, and industrial dispute management in manufacturing and IT sectors.',
    fullBio:
      'Senior government and enterprise consultant with 20+ years of doctoral teaching, executive development programmes, and boardroom governance advisory. Key advisor to Ministry task forces on labor market reforms, executive wage equity, and productivity bargaining.',
    imageUrl: HOTLINKED_ASSETS.faculty3,
    focusAreas: ['Executive Compensation', 'Labor Economics', 'Industrial Relations', 'Boardroom Governance'],
  },
  {
    id: 'fac4',
    name: 'Dr. Sitanshu S. Das',
    credentials: 'PhD, IIT Kharagpur',
    role: 'Associate Professor, Analytics',
    shortBio:
      'Pioneers AI-driven people intelligence models, natural language processing for employee sentiment, and predictive staffing algorithms.',
    fullBio:
      'Extensive research in predictive organizational analytics, algorithmic fairness, and large-scale data modeling for talent retention. Holds collaborative patents in prescriptive text analytics and workforce network visualization algorithms.',
    imageUrl: HOTLINKED_ASSETS.faculty4,
    focusAreas: ['Agentic AI in HR', 'People Analytics', 'Attrition Modeling', 'NLP Sentiment Tracking'],
  },
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'camp1',
    category: 'Academic Amphitheatre',
    title: 'Tiered Lecture Theatres',
    description:
      'Harvard-case style discussion arenas engineered for high-engagement peer debates, faculty Socratic dialogues, and case diagnostics.',
    imageUrl: HOTLINKED_ASSETS.campusAmphitheatre,
    features: ['Acoustically tuned amphitheatre seating', 'Integrated high-definition presentation arrays', 'Surround recording for hybrid executive cohorts'],
  },
  {
    id: 'camp2',
    category: 'Interactive Classrooms',
    title: 'Executive Learning Suites',
    description:
      'State-of-the-art hybrid simulation rooms connecting executive cohorts to global industry speakers, boardroom masterclasses, and simulation war rooms.',
    imageUrl: HOTLINKED_ASSETS.campusLearningSuite,
    features: ['Multi-display video conferencing infrastructure', 'Collaborative breakout pods for syndicate work', 'Dedicated executive lounge with panoramic pine forest views'],
  },
  {
    id: 'camp3',
    category: 'Research & Case Archives',
    title: 'Central Knowledge Library',
    description:
      'Extensive organizational behavior archives, global market reports, and private executive collaborative pods nestled in Shillong’s mist-clad hills.',
    imageUrl: HOTLINKED_ASSETS.campusLibrary,
    features: ['Access to Harvard Business Publishing & EBSCO', 'Bloomberg & CMIE Prowess terminal access', 'Private executive reflection suites'],
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq1',
    category: 'General',
    question: 'What is the duration and delivery format of the programme?',
    answer:
      'The programme spans 12 months (160 learning hours) delivered live online on weekends (Fridays 7:00 PM – 8:30 PM IST & Sundays 10:00 AM – 11:30 AM IST), alongside an optional 1-day campus immersion at IIM Shillong.',
  },
  {
    id: 'faq2',
    category: 'Credentials',
    question: 'What credentials will I receive upon completion?',
    answer:
      'Eligible participants earn a co-branded Certificate of Completion from IIM Shillong and a Certificate of Participation from SHRM India. Eligible SHRM credential holders can also earn up to 40 SHRM Professional Development Credits (PDCs).',
  },
  {
    id: 'faq3',
    category: 'Credentials',
    question: 'Am I eligible for IIM Shillong Executive Alumni Status?',
    answer:
      'Yes. Participants who successfully complete the programme have the option to apply for IIM Shillong Executive Alumni Status for an additional fee of ₹10,000 + GST, unlocking library access, official email ID, and alumni networking events.',
  },
  {
    id: 'faq4',
    category: 'Fees',
    question: 'What is the fee structure and instalment schedule?',
    answer:
      'The total fee is ₹1,50,000 + GST, payable in convenient flexible instalments across the 12-month period, starting with an initial registration fee of ₹2,500. Zero-cost 12-month EMI options starting at ₹12,500/month are also supported through partner financial institutions.',
  },
  {
    id: 'faq5',
    category: 'Admissions',
    question: 'What are the admission eligibility requirements?',
    answer:
      'Candidates must possess a Bachelor’s Degree or equivalent from a recognized University, with minimum professional work experience in HR, Talent, L&D or allied management functions (ideally 10+ years for Cohort 07). Selection is merit-based upon review of executive candidate profile.',
  },
  {
    id: 'faq6',
    category: 'General',
    question: 'What is the attendance policy for working executives?',
    answer:
      'Recognizing executive travel schedules, sessions are recorded with high-fidelity transcripts on the LMS. A minimum 75% attendance in live lectures and active participation in the capstone defense is required to qualify for certificate issuance.',
  },
];
