import type { SearchSuggestion, SearchResult } from './search.types';

// Search suggestions/autocomplete data
export const cipfaSuggestions: SearchSuggestion[] = [
  { text: 'Member FAQs' },
  { text: 'Home Truths On STPs' },
  { text: 'John Bolton - What Does Good Look Like' },
  { text: 'Better Care Fund Survey Results' },
  { text: 'Fact Or Fiction: Dispelling The Myths' },
  { text: 'Developing Leadership and skills' },
  { text: 'Building Governance and Trust' },
  { text: 'Increasing Financial Resilience' },
  { text: 'Protecting Place and Planet' },
  { text: 'CIPFA Learning' },
  { text: 'Joining CIPFA' },
  { text: 'Membership Fees' },
  { text: 'Continued Professional Development (CPD)' },
  { text: 'Accessing Your Benefits' },
  { text: 'Contacting CIPFA' },
  { text: 'Training and Events' },
  { text: 'Professional Accountancy Qualification' },
  { text: 'Public Finance Live' },
  { text: 'Counter fraud investigators' },
  { text: 'Public Sector Sustainability Certificate' },
];

// Search results data - CIPFA dummy content
export const cipfaSearchData: SearchResult[] = [
  {
    title: 'Member FAQs',
    description:
      'Frequently asked questions for CIPFA members covering membership benefits, CPD requirements, and member services.',
    categoryPath: ['CIPFA', 'Members', 'Member FAQs'],
    date: '2015-10-06',
    category: 'Membership',
    url: '/members/faqs',
    relevance: 10,
  },
  {
    title: 'Home Truths On STPs',
    description:
      'An in-depth analysis of Sustainability and Transformation Partnerships, examining their impact on public sector finance and service delivery.',
    categoryPath: ['CIPFA', 'CIPFA Thinks', 'Articles', 'Home truths on STPs'],
    date: '2017-12-05',
    category: 'Article',
    tags: ['Sustainability', 'Performance improvement', 'Policy'],
    url: '/articles/home-truths-stps',
    relevance: 9,
  },
  {
    title: 'John Bolton - What Does Good Look Like When There Are Scarce Resources In Social Care?',
    description:
      'Expert insights from John Bolton on effective resource management in social care settings, exploring best practices for delivering quality care with limited resources.',
    categoryPath: [
      'CIPFA',
      'CIPFA Thinks',
      'Articles',
      'John Bolton - what does good look like when there are scarce resources in social care?',
    ],
    date: '2015-11-09',
    category: 'Article',
    url: '/articles/john-bolton-social-care',
    relevance: 8,
  },
  {
    title:
      'Fact Or Fiction: Dispelling The Myths To Achieve Effective Health And Social Care Collaboration',
    description:
      'A comprehensive examination of common misconceptions about health and social care collaboration, providing evidence-based guidance for effective partnership working.',
    categoryPath: [
      'CIPFA',
      'CIPFA Thinks',
      'Articles',
      'Fact or fiction: dispelling the myths to achieve effective health and social care collaboration',
    ],
    date: '2017-05-08',
    category: 'Article',
    tags: ['Health and social care'],
    url: '/articles/fact-or-fiction-health-social-care',
    relevance: 8,
  },
  {
    title: 'Better Care Fund Survey Results',
    description:
      'Analysis of survey findings on the Better Care Fund, examining its effectiveness in supporting integrated health and social care services.',
    categoryPath: ['CIPFA', 'CIPFA Thinks', 'Articles', 'Better Care Fund survey results'],
    date: '2016-09-12',
    category: 'Article',
    url: '/articles/better-care-fund-survey',
    relevance: 7,
  },
  {
    title: 'Developing Leadership and Skills',
    description:
      "People are an organisation's most important asset. However, the people challenges faced by public sector bodies are often more complex than for other types of organisations.",
    categoryPath: ['CIPFA', 'Services', 'Training'],
    date: '2024-01-15',
    category: 'Training',
    tags: ['Leadership', 'Skills Development'],
    url: '/services/developing-leadership-skills',
    relevance: 9,
    featured: true,
  },
  {
    title: 'Building Governance and Trust',
    description:
      'Public services need to be delivered against the backdrop of an increasingly challenging macro-environment and with an increasing need for transparency and trust.',
    categoryPath: ['CIPFA', 'Services', 'Governance'],
    date: '2024-02-20',
    category: 'Service',
    tags: ['Governance', 'Trust', 'Transparency'],
    url: '/services/building-governance-trust',
    relevance: 9,
  },
  {
    title: 'Increasing Financial Resilience',
    description:
      'Public sector organisations globally need to tackle a myriad of challenges as they strive to improve their resilience and financial management.',
    categoryPath: ['CIPFA', 'Services', 'Financial Resilience'],
    date: '2024-03-10',
    category: 'Service',
    tags: ['Financial Resilience', 'Risk Management'],
    url: '/services/increasing-financial-resilience',
    relevance: 8,
  },
  {
    title: 'Protecting Place and Planet',
    description:
      'At CIPFA, we believe that improving public services is the key to improving the lives of people in their communities.',
    categoryPath: ['CIPFA', 'Services', 'Sustainability'],
    date: '2024-04-05',
    category: 'Service',
    tags: ['Sustainability', 'Community'],
    url: '/services/protecting-place-planet',
    relevance: 8,
  },
  {
    title: 'Readmission to CIPFA',
    description:
      'Members applying for re-admission are asked to confirm that they have not held themselves out to be a Member in the intervening period, why their membership lapsed and why they wish to be re-admitted, how they have maintained and developed their knowledge and skills for the previous 12 months, and that they will observe all the ethical and technical guides of the Institute.',
    categoryPath: ['CIPFA', 'Members', 'Membership'],
    date: '2024-01-01',
    category: 'Membership',
    url: '/members/readmission',
    relevance: 7,
    featured: true,
  },
  {
    title: 'CIPFA Learning',
    description:
      'Access comprehensive learning resources, course materials, and educational content for CIPFA students and members.',
    categoryPath: ['CIPFA', 'Students', 'CIPFA Learning'],
    date: '2024-05-15',
    category: 'Student Support',
    url: '/students/cipfa-learning',
    relevance: 6,
  },
  {
    title: 'Joining CIPFA',
    description:
      'Information about becoming a CIPFA member, including eligibility requirements, application process, and membership benefits.',
    categoryPath: ['CIPFA', 'Members', 'Joining CIPFA'],
    date: '2024-06-01',
    category: 'Membership',
    url: '/members/joining',
    relevance: 6,
  },
  {
    title: 'Membership Fees',
    description:
      'Details about CIPFA membership fees, payment options, and fee structures for different membership categories.',
    categoryPath: ['CIPFA', 'Members', 'Membership Fees'],
    date: '2024-06-10',
    category: 'Membership',
    url: '/members/fees',
    relevance: 5,
  },
  {
    title: 'Continued Professional Development (CPD)',
    description:
      'Guidance on CPD requirements for CIPFA members, including how to record and maintain your professional development activities.',
    categoryPath: ['CIPFA', 'Members', 'Continued Professional Development (CPD)'],
    date: '2024-07-01',
    category: 'Membership',
    url: '/members/cpd',
    relevance: 6,
  },
  {
    title: 'Accessing Your Benefits',
    description:
      'Learn about the range of benefits available to CIPFA members and how to access them, including training discounts, publications, and networking opportunities.',
    categoryPath: ['CIPFA', 'Members', 'Accessing Your Benefits'],
    date: '2024-07-15',
    category: 'Membership',
    url: '/members/benefits',
    relevance: 5,
  },
  {
    title: 'Contacting CIPFA',
    description:
      'Contact information for CIPFA, including phone numbers, email addresses, and office locations for different departments and services.',
    categoryPath: ['CIPFA', 'Customer Support', 'Contacting CIPFA'],
    date: '2024-08-01',
    category: 'Customer Support',
    url: '/contact',
    relevance: 5,
  },
  {
    title: 'Training and Events',
    description:
      'Browse CIPFA training courses, conferences, and events designed to support public finance professionals throughout their careers.',
    categoryPath: ['CIPFA', 'Training and Events'],
    date: '2024-08-15',
    category: 'Training',
    url: '/training',
    relevance: 6,
  },
];
