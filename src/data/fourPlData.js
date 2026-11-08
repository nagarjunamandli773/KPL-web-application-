import {
  Network,
  Globe,
  Truck,
  Plane,
  Ship,
  Layers,
  Sliders,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  FileCheck2,
  Warehouse,
  Radio,
  Activity,
  TrendingUp,
  BarChart3,
  Database,
  ArrowRight,
  Briefcase,
  Building2,
  Award,
  Scale
} from 'lucide-react';

export const fourPlHeroStats = [
  {
    label: 'Carrier Neutrality',
    value: '100%',
    sub: 'Zero Fleet Bias or Markups',
    icon: Scale,
  },
  {
    label: 'Average Cost Savings',
    value: '18 - 24%',
    sub: 'First-Year Baseline Savings',
    icon: TrendingUp,
  },
  {
    label: 'Freight Under Management',
    value: '$4.2B+',
    sub: 'Global Tier-1 Buying Power',
    icon: BarChart3,
  },
  {
    label: 'Live Control Tower',
    value: '24/7/365',
    sub: 'Continuous SLA Resolution',
    icon: Radio,
  },
];

export const diagnosticSpendTiers = [
  { id: 'spend-s', label: '$2M - $10M / Year', spendVal: 6, savingsLow: '$1.1M', savingsHigh: '$1.4M', fteSaved: '3 - 4 FTEs' },
  { id: 'spend-m', label: '$10M - $30M / Year', spendVal: 20, savingsLow: '$3.6M', savingsHigh: '$4.8M', fteSaved: '6 - 9 FTEs' },
  { id: 'spend-l', label: '$30M - $100M / Year', spendVal: 65, savingsLow: '$11.7M', savingsHigh: '$15.6M', fteSaved: '14 - 18 FTEs' },
  { id: 'spend-xl', label: '$100M+ Enterprise', spendVal: 150, savingsLow: '$27.0M', savingsHigh: '$36.0M', fteSaved: '25+ FTEs' },
];

export const diagnosticCurrentModels = [
  { id: 'model-fragmented', label: 'Fragmented 3PLs & Local Forwarders', challenge: 'Siloed data, zero rate transparency, multiple tracking portals' },
  { id: 'model-inhouse', label: 'Internal In-House Logistics Team', challenge: 'High administrative overhead, manual spreadsheets, limited market leverage' },
  { id: 'model-hybrid', label: 'Single Asset-Based 3PL Contract', challenge: 'Carrier bias towards own trucks/vessels, opaque accessorial charges' },
  { id: 'model-brokerage', label: 'Spot-Market Freight Broker Reliance', challenge: 'Volatile pricing, unpredictable capacity, unvetted service levels' },
];

export const diagnosticPriorities = [
  { id: 'prio-cost', label: 'Freight Cost Reduction & Audit', target: 'Automated invoice audit, RFP rate benchmark, eliminating accessorial bloat' },
  { id: 'prio-visibility', label: 'End-to-End Visibility & Control Tower', target: 'Single pane of glass tracking across air, ocean, road, rail & customs' },
  { id: 'prio-inventory', label: 'Working Capital & Inventory Turns', target: 'Dynamic modal shifting (Air-to-Ocean), reducing buffer stock and port dwell' },
  { id: 'prio-compliance', label: 'Global Compliance & Vendor SLA', target: 'Supplier chargebacks, customs duty optimization, carbon ESG tracking' },
];

export const comparativeMatrix = [
  {
    feature: 'Core Objective & Mindset',
    twoPl: 'Move physical asset from point A to B',
    threePl: 'Execute transactional storage & transport',
    fourPl: 'Orchestrate entire supply chain strategy & optimize business ROI',
  },
  {
    feature: 'Carrier & Asset Neutrality',
    twoPl: '100% Biased (Own ships, planes or trucks)',
    threePl: 'Biased towards own warehouse & carrier network',
    fourPl: '100% Non-Asset Neutral (Bids out every lane objectively)',
  },
  {
    feature: 'Technology & Integration',
    twoPl: 'Basic tracking number / carrier portal',
    threePl: 'Proprietary siloed WMS/TMS portal',
    fourPl: 'Unified Cloud Control Tower connected to your SAP/Oracle ERP',
  },
  {
    feature: 'Freight Audit & Invoice Settlement',
    twoPl: 'Direct invoices with high error margins',
    threePl: 'Bundled markups with opaque accessorial fees',
    fourPl: 'Automated pre-audit invoice matching (Zero overcharges)',
  },
  {
    feature: 'Continuous Process Engineering',
    twoPl: 'None (Pure utility provider)',
    threePl: 'Limited to operational warehouse fixes',
    fourPl: 'Dedicated Kaizen team with algorithmic routing & modal shift',
  },
  {
    feature: 'Customer Accountability',
    twoPl: 'Disjointed customer support lines',
    threePl: 'Multiple facility managers and account reps',
    fourPl: 'Single Point of Accountability (SPOA) with 24/7 Control Tower',
  },
];

export const fourPlPillars = [
  {
    id: 'control-tower',
    title: 'Global Control Tower & Unified Visibility',
    tagline: 'A single, real-time command cockpit orchestrating every vendor, carrier, terminal, and custom house.',
    icon: Radio,
    accent: '#082653',
    features: [
      'Single pane of glass integrating telematics across 350+ carriers and 100+ ports',
      'AI predictive ETA modeling incorporating geopolitical choke points, weather, and terminal dwell',
      'Milestone exception alerting prioritizing shipments at risk before factory assembly lines stop',
      'Standardized operational playbooks with automated escalation to on-ground intervention teams'
    ]
  },
  {
    id: 'procurement-neutral',
    title: 'Carrier Procurement & Neutral Rate Tendering',
    tagline: 'Leverage $4.2B in aggregated buying power to secure tier-1 institutional shipping rates.',
    icon: Scale,
    accent: '#0284C7',
    features: [
      '100% asset-neutral carrier selection: we don\'t own ships or trucks, so we only select best price & SLA',
      'Quarterly automated mini-bids and spot rate indexing preventing carrier market price gouging',
      'Contractual SLA enforcement with automated carrier scorecards and liquidated damage credits',
      'Capacity allocation guarantees even during peak trans-Pacific and Asia-Europe holiday congestion'
    ]
  },
  {
    id: 'freight-audit-settlement',
    title: 'Machine-Learning Freight Audit & Settlement',
    tagline: 'Stop losing 3% to 7% of annual freight spend to duplicate billings and erroneous accessorial charges.',
    icon: FileCheck2,
    accent: '#059669',
    features: [
      'Automated 8-way matching: Purchase Order, Carrier Rate Card, Bill of Lading, Weight, and Invoice',
      'Pre-payment algorithmic invoice dispute: erroneous charges rejected before money leaves your account',
      'Consolidated monthly freight settlement: pay one audited electronic summary instead of 5,000 carrier bills',
      'Granular landed-cost attribution down to individual SKU level for accurate corporate margin reporting'
    ]
  },
  {
    id: 'network-engineering',
    title: 'Network Optimization & Kaizen Engineering',
    tagline: 'Continuous structural supply chain redesign to unlock working capital and eliminate waste.',
    icon: Network,
    accent: '#EA580C',
    features: [
      'Digital Twin network simulation modeling optimal warehouse locations and safety stock levels',
      'Algorithmic modal shift strategies: transition expensive air freight to premium expedited ocean lanes',
      'Cartonization and cubic load optimization increasing container fill rates from 68% to 94%',
      'Scope 3 carbon emissions tracking and green corridor selection aligned with global ESG standards'
    ]
  }
];

export const fourPlCaseStudies = [
  {
    industry: 'Global Automotive OEM',
    spend: '$68M Annual Spend',
    headline: '21.4% Net Logistics Savings & Zero Factory Line Stoppages',
    result: '$14.5M Saved',
    summary: 'Consolidated 28 disconnected European and Asian freight forwarders into one KPL 4PL Control Tower. Implemented automated line-feeding Milk-Run optimization and eliminated emergency charter flights.',
    kpis: ['21.4% Total Cost Reduction', '99.8% On-Time JIT Assembly', '0 Assembly Line Stoppages']
  },
  {
    industry: 'Consumer Tech & Electronics',
    spend: '$120M Annual Spend',
    headline: 'Inventory Dwell Reduced from 32 Days to 14 Days',
    result: '$24.2M Capital Freed',
    summary: 'Replaced legacy transactional 3PL with KPL 4PL lead management. Dynamic inventory routing and direct-to-retail cross-docking unlocked working capital while accelerating product launch velocity.',
    kpis: ['56% Reduction in Dwell Time', '$24.2M Working Capital Freed', '100% Serialized Barcode Sync']
  },
  {
    industry: 'Healthcare & Medical Devices',
    spend: '$44M Annual Spend',
    headline: '100% GDP Compliance & 94% Reduction in Invoice Billing Errors',
    result: '$3.8M Overcharges Recovered',
    summary: 'Deployed automated freight audit across 16 international carrier contracts. Eradicated duplicate demurrage billing and established automated cold-chain telemetry compliance with global health ministries.',
    kpis: ['94% Reduction in Billing Errors', '$3.8M Recovered Annually', 'Zero Quality Non-Conformances']
  }
];

export const fourPlFaqs = [
  {
    q: 'How does a 4PL partner differ from our current 3PL freight forwarders and warehouse providers?',
    a: 'A 3PL is an asset-focused service provider that executes discrete functions (like moving a container or leasing warehouse racks). A 4PL (Lead Logistics Partner) acts as your non-asset strategic architect and general contractor. We manage, coordinate, and hold accountable all of your 3PLs, carriers, customs brokers, and suppliers under one integrated technology platform. Because we do not own physical transportation assets, our advice and carrier selections are 100% objective and carrier-neutral, solely focused on optimizing your total cost and service levels.'
  },
  {
    q: 'Do we have to fire our existing freight forwarders and warehouses to work with KPL 4PL?',
    a: 'No. KPL 4PL seamlessly integrates with your existing, vetted carriers and 3PL warehouses. We onboard your current suppliers into our unified Control Tower and TMS, audit their performance, benchmark their rates against global institutional market indices, and manage daily dispatch operations. If existing partners perform well and offer competitive rates, we retain them. If underperformance or inflated pricing is detected, we tender those lanes out to our pre-qualified global carrier base.'
  },
  {
    q: 'What is the commercial pricing model for KPL 4PL management services?',
    a: 'We offer flexible, aligned commercial models tailored to your enterprise. The most common structure is a Gain-Share Hybrid model, where KPL charges a modest management fee covering technology and dedicated control tower personnel, coupled with a performance incentive tied directly to hard verified logistics cost reductions (typically 18% to 24%). This ensures our financial interests are directly aligned with driving maximum savings for your business.'
  },
  {
    q: 'How long does a full 4PL Control Tower onboarding and ERP integration take?',
    a: 'Our proven 90-Day Rapid Deployment Framework minimizes operational disruption. Phase 1 (Days 1–30): Discovery, freight spend data baseline, and API/EDI connector configuration with your ERP (SAP, Oracle, or Microsoft Dynamics). Phase 2 (Days 31–60): Carrier rate card digitization, automated freight audit launch, and Control Tower pilot testing. Phase 3 (Days 61–90): Full operational cutover with live shipment orchestration and executive KPI reporting.'
  },
  {
    q: 'How does KPL ensure data security, confidentiality, and carrier neutrality?',
    a: 'KPL operates under rigorous SOC 2 Type II, ISO 27001, and GDPR compliance standards. Your commercial data, pricing contracts, supplier identities, and shipment manifests are encrypted in transit and at rest with enterprise-grade AES-256 encryption. We maintain strict non-disclosure agreements and institutional separation between client accounts. Our technology never monetizes or shares your proprietary supply chain data with third parties.'
  }
];

