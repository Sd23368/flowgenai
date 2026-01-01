import React from 'react';
import { Phone, Database, GitMerge, FileCheck, Zap, Shield, Globe } from 'lucide-react';
import { Feature, IndustryBenefit } from './types';

export const CALENDLY_URL = "https://calendly.com/flowgenaiagency/15-one-on-one-ai-consulting";

export const FEATURES: Feature[] = [
  {
    id: 'voice-ai',
    title: 'Autonomous Reception',
    description: 'Human-parity voice AI that qualifies, schedules, and transfers calls 24/7 with zero latency.',
    icon: <Phone className="w-6 h-6 text-primary" />,
    subFeatures: ['24/7 Live Answering', 'Multilingual Support', 'Smart Call Transfers']
  },
  {
    id: 'workflow-logic',
    title: 'Workflow Autopilot',
    description: 'Trigger complex business logic based on conversation outcomes and lead behavior.',
    icon: <GitMerge className="w-6 h-6 text-secondary" />,
    subFeatures: ['Condition-based Triggers', 'Automated Lead Nurturing', 'Instant Alert Systems']
  },
  {
    id: 'document-ai',
    title: 'Document Intelligence',
    description: 'Extract data from unstructured documents automatically to eliminate manual entry.',
    icon: <FileCheck className="w-6 h-6 text-primary" />,
    subFeatures: ['Intelligent OCR (Bills/IDs)', 'Auto-Contract Generation', 'Summarization Engine']
  },
  {
    id: 'crm-sync',
    title: 'Bi-directional CRM Sync',
    description: 'Native integrations with HubSpot, Salesforce, and Clio to keep your lead data pristine.',
    icon: <Database className="w-6 h-6 text-secondary" />,
    subFeatures: ['Field Mapping', 'Real-time Activity Feed', 'Lead Scoring Sync']
  },
];

export const INDUSTRY_BENEFITS: IndustryBenefit[] = [
  {
    id: 'Solar',
    title: 'Solar Energy',
    painPoint: 'High cost-per-lead and friction in utility bill collection leads to 40% drop-off rates during initial interest.',
    detailedSolution: 'An end-to-end solar sales engine that captures leads, parses utility bills in real-time, and schedules site surveys based on roof orientation data.',
    features: [
      { title: 'Utility Bill OCR', description: 'Instantly extract kWh usage and historical data from uploaded photos of bills.' },
      { title: 'Shading Analysis Sync', description: 'Bridge AI conversations with tools like Aurora Solar or Helioscope.' },
      { title: '24/7 Lead Qual', description: 'Qualify homeowners on credit scores and roof material before they speak to sales.' }
    ],
    kpis: [
      { label: 'Bill Collection', value: '100%' },
      { label: 'Booking Rate', value: '+45%' },
      { label: 'Admin Time', value: '-22h' }
    ],
    stat: '65%',
    statLabel: 'Admin Overhead Saved',
  },
  {
    id: 'Law',
    title: 'Legal Firms',
    painPoint: 'Potential clients call during crises; firms lose cases because of slow response times and manual intake bottlenecks.',
    detailedSolution: 'A high-fidelity legal intake agent that performs conflict checks, categorizes case types, and drafts intake summaries for attorney review.',
    features: [
      { title: 'Intelligent Intake', description: 'Screen for statute of limitations and case-specific merit questions instantly.' },
      { title: 'Clio/MyCase Sync', description: 'Real-time matter creation and document filing without human intervention.' },
      { title: 'Retainer Auto-Draft', description: 'Generate and send e-signature retainer agreements immediately after qualification.' }
    ],
    kpis: [
      { label: 'Capture Rate', value: '99%' },
      { label: 'Intake Speed', value: '8x' },
      { label: 'Client Trust', value: 'High' }
    ],
    stat: '3.5x',
    statLabel: 'Client Intake Speed',
  },
  {
    id: 'Real Estate',
    title: 'Real Estate',
    painPoint: 'The "speed-to-lead" gap in real estate is fatal. Agents miss 60% of portal leads because of active field work.',
    detailedSolution: 'A concierge-level AI that engages Zillow/Realtor.com leads in seconds, verifies pre-approvals, and manages showing calendars.',
    features: [
      { title: 'Instant Response', description: 'Engage leads across SMS and Voice within 15 seconds of portal inquiry.' },
      { title: 'Showing Coordinator', description: 'Sync with MLS data and agent calendars to book property tours automatically.' },
      { title: 'Vetting Engine', description: 'Verify down payment and pre-approval status before alerting the broker.' }
    ],
    kpis: [
      { label: 'Lead Response', value: '<30s' },
      { label: 'Showing Bookings', value: '+55%' },
      { label: 'Agent Focus', value: '+70%' }
    ],
    stat: '100%',
    statLabel: 'Lead Capture Rate',
  },
];

export const CASE_STUDIES = [
  {
    company: "SunPath Solar",
    industry: "Solar",
    challenge: "Missing 40% of leads after 6 PM. Manual utility bill intake took 48 hours.",
    solution: "Deployed Voice AI for 24/7 intake and Document AI for instant bill extraction.",
    results: [
      { label: "Lead Response", value: "< 2s" },
      { label: "Rev. Growth", value: "+32%" },
      { label: "Ops Savings", value: "$12k/mo" }
    ],
    color: "primary"
  },
  {
    company: "Thorne Legal",
    industry: "Law",
    challenge: "High-value PI cases were getting lost in a maze of manual qualification forms.",
    solution: "Custom Workflow Autopilot that qualifies cases and drafts retainer contracts in real-time.",
    results: [
      { label: "Intake Speed", value: "8x" },
      { label: "Lead Capture", value: "99%" },
      { label: "Billable Hours", value: "+25h/wk" }
    ],
    color: "secondary"
  }
];

export const PRICING_PLANS = [
  {
    name: 'Automation Pro',
    description: 'For firms needing elite lead capture and basic workflow triggers.',
    features: ['Autonomous Voice AI', 'Standard CRM Connectors', 'Appointment Scheduling', 'Email/SMS Automation'],
    icon: <Zap className="w-6 h-6 text-primary" />,
    color: 'primary'
  },
  {
    name: 'Workflow Elite',
    description: 'Full business autopilot including document AI and custom logic.',
    features: ['Everything in Pro', 'Document Intelligence (OCR)', 'Custom Logic Workflows', 'Advanced Reporting BI', 'Dedicated Success Lead'],
    icon: <Shield className="w-6 h-6 text-secondary" />,
    color: 'secondary',
    featured: true
  },
  {
    name: 'Infrastructure',
    description: 'Bespoke AI architecture for enterprise-scale operations.',
    features: ['Private Model Deployment', 'Custom Voice Cloning', 'On-prem CRM Bridges', 'SLA-backed Uptime', 'White-glove Implementation'],
    icon: <Globe className="w-6 h-6 text-white" />,
    color: 'white'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'Operations Director, SunPath Solar',
    quote: "flowGenix didn't just answer our phones; it automated our entire intake. It extracts utility data and puts it in our CRM before we even call back.",
    image: 'SJ',
  },
  {
    name: 'Marcus Thorne',
    role: 'Partner, Thorne & Associates Law',
    quote: "The document automation alone saved us 20 hours a week. It qualifies the case and drafts the initial intake summary instantly.",
    image: 'MT',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Principal Broker, Urban Nest Realty',
    quote: "We've scaled to three new markets without hiring a single admin. The workflow handles everything from lead capture to showing coordination.",
    image: 'ER',
  },
];

export const REVENUE_DATA = [
  { name: 'Manual Labor', value: 45, color: '#FF6B00' },
  { name: 'Automated Flow', value: 55, color: '#8B5CF6' },
];