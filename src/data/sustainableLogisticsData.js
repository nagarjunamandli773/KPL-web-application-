// Sustainable Logistics Systems Data Model
// KPL Sustainable Logistics — Carbon Tracking, Scope 3 Decarbonization & Green Corridors

export const sustainableHeroStats = [
  {
    id: 'abatement',
    value: '-42%',
    label: 'Average Supply Chain CO₂e Cut',
    sub: 'Achieved through modal shifting, insetting & eco-routing',
  },
  {
    id: 'audited-emissions',
    value: '1.8M+ MT',
    label: 'Scope 3 Emissions Audited',
    sub: 'GLEC & ISO 14083 certified leg-by-leg greenhouse reporting',
  },
  {
    id: 'biofuel-lanes',
    value: '140+ Corridors',
    label: 'Low-Carbon Transport Corridors',
    sub: 'SAF aviation, Bio-LNG / Methanol maritime & HVO100 drayage',
  },
  {
    id: 'compliance',
    value: '100% CSRD',
    label: 'EU CSRD & SBTi Audit-Ready',
    sub: 'Automated digital certificates compliant with global ESG disclosure',
  },
];

export const carbonCalculatorModes = [
  {
    id: 'mode-air',
    name: 'Air Freight (Standard vs. SAF Insetting)',
    baselineFactor: 602, // grams CO2e per ton-km
    ecoOption: 'Sustainable Aviation Fuel (SAF) Inset + Direct Routing',
    ecoFactor: 124, // grams CO2e per ton-km
    reductionRate: 0.79,
    description: 'Replaces fossil Jet-A with RSB-certified waste-oil SAF through verifiable Book & Claim.',
  },
  {
    id: 'mode-ocean',
    name: 'Maritime Container (HFO vs. Bio-Methanol / Bio-LNG)',
    baselineFactor: 32, // grams CO2e per ton-km
    ecoOption: 'Green Maritime Corridor (Bio-LNG / Dual-Fuel Methanol)',
    ecoFactor: 9.6, // grams CO2e per ton-km
    reductionRate: 0.70,
    description: 'Decarbonized ocean lanes utilizing ISCC-certified bio-feedstocks and slow-steaming algorithms.',
  },
  {
    id: 'mode-road',
    name: 'Long-Haul Road (Diesel vs. HVO100 & Electric Drayage)',
    baselineFactor: 145, // grams CO2e per ton-km
    ecoOption: '100% Hydrotreated Vegetable Oil (HVO100) + Battery Drayage',
    ecoFactor: 22, // grams CO2e per ton-km
    reductionRate: 0.85,
    description: 'Fossil-free road transport delivering up to 90% net lifecycle carbon abatement on port drayage.',
  },
  {
    id: 'mode-multimodal',
    name: 'Multimodal Shift (Air-to-Ocean / Electric Rail Bridge)',
    baselineFactor: 420, // grams CO2e per ton-km
    ecoOption: 'Optimized Sea-Air Hybrid + Electric Rail Intermodal',
    ecoFactor: 63, // grams CO2e per ton-km
    reductionRate: 0.85,
    description: 'Strategic modal shift cutting up to 85% carbon while keeping inventory transit times predictable.',
  },
];

export const carbonCalculatorVolumes = [
  {
    id: 'vol-sm',
    label: '100 – 500 Tons / Year',
    tonKmMultiplier: 2500000,
    enterpriseTier: 'Mid-Market Shipper',
  },
  {
    id: 'vol-md',
    label: '500 – 2,500 Tons / Year',
    tonKmMultiplier: 12000000,
    enterpriseTier: 'Regional Corporate',
  },
  {
    id: 'vol-lg',
    label: '2,500 – 10,000 Tons / Year',
    tonKmMultiplier: 55000000,
    enterpriseTier: 'Global Enterprise',
  },
  {
    id: 'vol-xl',
    label: '10,000+ Tons / Year',
    tonKmMultiplier: 180000000,
    enterpriseTier: 'Multinational Supply Chain',
  },
];

export const carbonCalculatorStrategies = [
  {
    id: 'strat-routing',
    name: 'Eco-Routing & Load Factor Optimization',
    reductionMultiplier: 0.22,
    badge: 'Immediate ROI',
    description: 'Dynamic backhaul matching, container cube optimization, and slow-steaming corridors.',
  },
  {
    id: 'strat-insetting',
    name: 'Alternative Fuel Insetting (SAF / Bio-LNG / HVO)',
    reductionMultiplier: 0.72,
    badge: 'Direct Physical Abatement',
    description: 'Legally audited insetting certificates retired under the Smart Freight Centre GLEC standard.',
  },
  {
    id: 'strat-netzero',
    name: 'Full Net-Zero (Insetting + Verified Gold Standard Offsets)',
    reductionMultiplier: 1.0,
    badge: '100% Climate Neutral',
    description: 'Complete neutral balance backed by permanent high-durability carbon removal credits.',
  },
];

export const sustainablePillars = [
  {
    id: 'accounting',
    step: '01',
    title: 'ISO 14083 & GLEC Scope 3 Carbon Accounting',
    subtitle: 'Audit-Ready Digital Emissions Intelligence',
    icon: 'BarChart3',
    accentColor: '#EA580C',
    points: [
      'Well-to-Wheel (WTW) per-shipment emissions calculated down to the specific vessel, aircraft tail, and tractor engine.',
      'Fully compliant with the EU Corporate Sustainability Due Diligence Directive (CSDDD) and CSRD reporting.',
      'Automated API integration with corporate ERP and ESG platforms (SAP, Salesforce Net Zero Cloud, Persefoni).',
      'Granular breakdown across Scope 1, Scope 2, and upstream/downstream Scope 3 Category 4 & 9 logistics emissions.',
    ],
  },
  {
    id: 'insetting',
    step: '02',
    title: 'Low-Carbon Fuel Insetting (SAF, Bio-LNG & HVO100)',
    subtitle: 'Direct Supply Chain Decarbonization',
    icon: 'Droplets',
    accentColor: '#D97706',
    points: [
      'Book & Claim mechanism: Buy and retire verified bio-fuel attributes without altering physical operational carriers.',
      'Sustainable Aviation Fuel (SAF) sourced exclusively from non-food waste oils and certified by RSB and ISCC-EU.',
      'Maritime Bio-LNG and Green Methanol allocations deployed on premier transatlantic and transpacific trade lanes.',
      'HVO100 renewable diesel refueling network spanning 1,200+ European and North American drayage hubs.',
    ],
  },
  {
    id: 'modal-shift',
    step: '03',
    title: 'Algorithmic Eco-Routing & Multimodal Shift',
    subtitle: 'Optimizing Transit Times Against Carbon Footprints',
    icon: 'RefreshCw',
    accentColor: '#C2410C',
    points: [
      'Smart Sea-Air Hybrid routing delivers 60% carbon reduction compared to pure air at 35% of the freight cost.',
      'Electric rail intermodal connection directly into inland container depots, replacing long-distance diesel trucking.',
      'Algorithmic load cube maximization: Predictive software boosts container utilization from the industry 68% average to 92%.',
      'Congestion avoidance navigation preventing idling at major port chokepoints and border crossings.',
    ],
  },
  {
    id: 'circular-warehousing',
    step: '04',
    title: 'Circular Packaging & Net-Zero Green Warehousing',
    subtitle: 'Zero-Waste Facilities & Returnable Assets',
    icon: 'Recycle',
    accentColor: '#EA580C',
    points: [
      'LEED Platinum and BREEAM-certified fulfillment centers powered by on-site solar photovoltaic arrays.',
      '100% reusable smart IoT temperature-controlled totes and collapsible pallet sleeves eliminating single-use plastics.',
      'Electric forklift fleets and automated smart LED sensor grids reducing warehouse operational power draw by 45%.',
      'On-site cardboard shredding and closed-loop protective dunnage recycling systems.',
    ],
  },
];

export const comparativeGreenMatrix = [
  {
    dimension: 'Carbon Accounting Granularity',
    standard: 'Generic distance × average emission factor estimates with no leg breakdown',
    kplGreen: 'Leg-by-leg Well-to-Wheel (WTW) ISO 14083 certified primary telemetry data',
  },
  {
    dimension: 'Aviation Emissions Strategy',
    standard: 'Unregulated fossil jet fuel + low-credibility forestry offsets',
    kplGreen: 'RSB-certified Sustainable Aviation Fuel (SAF) insetting via Book & Claim',
  },
  {
    dimension: 'Ocean Freight Fuel Mix',
    standard: 'Standard High Sulfur / Low Sulfur Heavy Fuel Oil (HFO / VLSFO)',
    kplGreen: 'Direct Bio-LNG & Bio-Methanol allocations with ISCC-EU chain of custody',
  },
  {
    dimension: 'Overland Road Drayage',
    standard: 'Conventional diesel tractors with unmeasured idling penalties',
    kplGreen: '100% HVO100 renewable diesel + zero-emission battery electric port drayage',
  },
  {
    dimension: 'Packaging & Dunnage',
    standard: 'Single-use plastic shrink wraps, EPS styrofoam, and disposable timber pallets',
    kplGreen: 'Returnable IoT-tracked collapsible totes & 100% biodegradable corrugated dunnage',
  },
  {
    dimension: 'Regulatory Audit Readiness',
    standard: 'Manual annual Excel spreadsheets vulnerable to ESG greenwashing scrutiny',
    kplGreen: 'Automated digital audit certificates directly exportable for EU CSRD & SEC disclosures',
  },
];

export const sustainableCaseStudies = [
  {
    id: 'case-fmcg',
    industry: 'Consumer Goods & Retail',
    client: 'Multinational Retail & Apparel Group',
    headline: '68% Carbon Cut Across 24,000 TEU Transpacific Corridor',
    challenge:
      'Client faced stringent EU Corporate Sustainability Due Diligence mandates requiring verified Scope 3 emission reductions without disrupting tight seasonal retail launch timelines.',
    solution:
      'Implemented Bio-LNG container ship allocations on Shanghai-Rotterdam lanes coupled with 100% HVO100 electric drayage from port to regional automated distribution centers.',
    metrics: [
      { val: '38,400 tCO₂e', label: 'Net Carbon Abated' },
      { val: '68%', label: 'Corridor Emissions Cut' },
      { val: '100%', label: 'PwC ESG Audit Approved' },
    ],
  },
  {
    id: 'case-tech',
    industry: 'High-Tech & Electronics',
    client: 'Global Semiconductor & Server Manufacturer',
    headline: 'Transitioning 3,600 Tons from Air Freight to SAF Sea-Air Hybrid',
    challenge:
      'High-value server components had an unsustainable carbon intensity under pure air freight, while pure ocean shipping presented excessive lead-time volatility for production lines.',
    solution:
      'Engineered an optimized Sea-Air Bridge through Dubai and Singapore with 100% SAF insetting on the final flight legs, achieving 11-day transit times with an 58% carbon reduction.',
    metrics: [
      { val: '-58%', label: 'Emissions Per Consignment' },
      { val: '$4.2M', label: 'Annual Freight Cost Saved' },
      { val: '11 Days', label: 'Guaranteed Door Transit' },
    ],
  },
  {
    id: 'case-pharma',
    industry: 'Pharmaceuticals & Biologics',
    client: 'Life Sciences & Diagnostics Provider',
    headline: 'Zero-Emission Circular Packaging for Clinical Cold Chain',
    challenge:
      'Single-use polyurethane thermal shippers and dry ice generated 420 metric tons of hazardous landfill waste annually across clinical trial distribution networks.',
    solution:
      'Replaced all single-use shippers with KPL Smart Circular Returnable Totes equipped with vacuum-insulated panels (VIPs) and cellular reverse-logistics tracking.',
    metrics: [
      { val: '0 kg', label: 'Landfill Packaging Waste' },
      { val: '99.98%', label: 'Temperature Compliance' },
      { val: '28x', label: 'Asset Reuse Lifecycle' },
    ],
  },
];

export const sustainableAccreditations = [
  {
    title: 'GLEC Framework Accredited',
    desc: 'Certified alignment with Global Logistics Emissions Council standards for multimodal carbon accounting.',
    icon: 'ShieldCheck',
  },
  {
    title: 'ISO 14083:2023 Compliant',
    desc: 'International standard for quantification and reporting of greenhouse gas emissions from transport operations.',
    icon: 'Award',
  },
  {
    title: 'SBTi Verified Pathway',
    desc: 'Directly supports corporate Science Based Targets initiative (SBTi) 1.5°C net-zero trajectory milestones.',
    icon: 'CheckCircle2',
  },
  {
    title: 'SmartWay Transport Partner',
    desc: 'Registered EPA SmartWay carrier partner benchmarking supply chain environmental efficiency.',
    icon: 'Scale',
  },
];

export const sustainableFaqs = [
  {
    question: 'What is the difference between carbon insetting and carbon offsetting in logistics?',
    answer:
      'Carbon offsetting involves purchasing carbon credits from external projects (such as reforestation or renewable energy installations) outside your supply chain to compensate for emissions already emitted. Carbon insetting, by contrast, directly reduces or eliminates emissions within the actual freight transportation network—for example, by funding the purchase and injection of Sustainable Aviation Fuel (SAF) into aircraft pipelines or Bio-LNG into maritime vessels. Insetting is recognized by the GHG Protocol and SBTi as direct Scope 3 abatement.',
  },
  {
    question: 'How does KPL calculate and certify our Scope 3 Category 4 and 9 emissions?',
    answer:
      'We utilize the ISO 14083:2023 standard and the GLEC (Global Logistics Emissions Council) framework. Our automated data ingestion platform captures primary transport data—including actual GPS routing distance, vessel deadweight, engine type, load factor percentage, and fuel consumption. We deliver leg-by-leg Well-to-Wheel (WTW) carbon reports that are digitally signed, audit-proof, and directly exportable for EU CSRD, SEC, and CDP disclosures.',
  },
  {
    question: 'How does the Book & Claim system work for SAF and Bio-LNG?',
    answer:
      'Because low-carbon fuels cannot be physically isolated in common pipeline networks, the Book & Claim system enables shippers to purchase the environmental attributes of low-carbon fuels introduced into the network. For instance, when you book SAF insetting with KPL, an equivalent volume of neat SAF is injected into the airport hydrant system under RSB (Roundtable on Sustainable Biomaterials) supervision. You receive an independently audited certificate guaranteeing ownership of the emissions reduction without needing to fly on that specific aircraft.',
  },
  {
    question: 'Will switching to sustainable logistics increase our freight transit times or shipping costs?',
    answer:
      'Not necessarily. Our eco-routing optimization, container cube maximization, and multimodal shifts frequently reduce overall freight spend by eliminating empty backhauls and transferring unnecessary air cargo onto high-speed intermodal rail or hybrid Sea-Air lanes. Where alternative fuels (such as 100% SAF) are chosen, there is a green premium, but we offer tiered insetting options (from 20% to 100% blend rates) so you can match your budget and sustainability targets.',
  },
  {
    question: 'Can KPL assist with EU Corporate Sustainability Reporting Directive (CSRD) logistics compliance?',
    answer:
      'Yes. Beginning in 2024 and expanding through 2026, the EU CSRD mandates that enterprises disclose audited Scope 3 value chain emissions with strict penalties for unsubstantiated claims. KPL provides clients with third-party verified, machine-readable digital sustainability certificates complete with unique ledger reference numbers, Well-to-Wheel (WTW) greenhouse data, and emissions intensity per ton-kilometer.',
  },
];

