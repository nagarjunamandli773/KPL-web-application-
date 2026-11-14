import {
  Package,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
  BarChart3,
  Layers,
  ShoppingBag,
  Sparkles,
  Award,
  Scale,
  Warehouse,
  Truck,
  RotateCcw,
  SlidersHorizontal,
  QrCode,
  FileCheck2,
  HeartPulse,
  Coffee,
  Sparkle,
  Boxes,
  Activity,
  AlertCircle
} from 'lucide-react';

export const fmcgHeroStats = [
  {
    label: 'OTIF Delivery Compliance',
    value: '99.4%',
    sub: 'Walmart SQEP & Amazon 1P Benchmark',
    icon: CheckCircle2,
    accent: '#EA580C',
  },
  {
    label: 'Active FMCG SKUs Mobilized',
    value: '180,000+',
    sub: 'Ambient, Chilled & Liquid Fragile',
    icon: Package,
    accent: '#F59E0B',
  },
  {
    label: 'Port-to-Shelf Cross-Dock',
    value: '24 - 48 hrs',
    sub: 'Sub-24h Flow-Through Turnaround',
    icon: Zap,
    accent: '#C2410C',
  },
  {
    label: 'Inventory Shrink & Spoilage',
    value: '< 0.02%',
    sub: 'Automated FEFO / FIFO Batch Precision',
    icon: ShieldCheck,
    accent: '#D84315',
  },
];

export const fmcgSimulatorCategories = [
  {
    id: 'food-confectionery',
    name: 'Packaged Foods & Confectionery',
    turnaround: '18 - 24 hrs',
    otif: '99.6%',
    shrinkRisk: '0.015%',
    chargebackProtection: '99.8%',
    badge: 'FEFO Precision & Temp Stability',
    idealTemp: '15°C – 22°C Ambient / Humidity Controlled',
    description: 'Chocolates, dry groceries, premium snacks, and condiments requiring tight turnover and zero shelf-life erosion before reaching hypermarket gondolas.',
    keyChallenge: 'Preventing heat Bloom & managing strict retail expiration limits (minimum 75% remaining shelf life).'
  },
  {
    id: 'beauty-personal-care',
    name: 'Cosmetics & Personal Care',
    turnaround: '24 - 36 hrs',
    otif: '99.5%',
    shrinkRisk: '0.010%',
    chargebackProtection: '99.9%',
    badge: 'Lot-Controlled & High-Value Fragile',
    idealTemp: '18°C – 24°C Climate Regulated',
    description: 'Color cosmetics, skincare serums, perfumes, and hygiene essentials needing serial batch tracking, anti-tamper shrink seals, and premium retail presentation.',
    keyChallenge: 'Fragile glass containment, batch variance, and seasonal Black Friday / festive gift-set kitting.'
  },
  {
    id: 'beverage-liquids',
    name: 'Beverages & High-Density Liquids',
    turnaround: '12 - 24 hrs',
    otif: '99.2%',
    shrinkRisk: '0.025%',
    chargebackProtection: '99.5%',
    badge: 'Heavy-Cube & Breakage Shield',
    idealTemp: 'Ambient to Cold Storage (4°C – 18°C)',
    description: 'Bulk mineral waters, functional RTD beverages, cold brew concentrates, and kombuchas requiring floor-load container de-stuffing and automated slip-sheet handling.',
    keyChallenge: 'High pallet weight constraints, liquid slosh stabilization, and high volumetric turnover rates.'
  },
  {
    id: 'household-cleaning',
    name: 'Household & Cleaning Chemicals',
    turnaround: '24 - 48 hrs',
    otif: '99.3%',
    shrinkRisk: '0.012%',
    chargebackProtection: '99.7%',
    badge: 'Hazmat Segregation & Bulk Pallet',
    idealTemp: 'Standard Ventilated Ambient',
    description: 'Detergents, disinfectants, aerosols, and paper goods requiring segregated chemical classification, spill containment docks, and direct-to-RDC transport.',
    keyChallenge: 'UN Hazmat packaging compliance, corrosive leak prevention, and bulky carton stack integrity.'
  },
  {
    id: 'health-wellness',
    name: 'Consumer Health & OTC Wellness',
    turnaround: '18 - 30 hrs',
    otif: '99.8%',
    shrinkRisk: '0.008%',
    chargebackProtection: '99.9%',
    badge: 'cGMP Cleanroom & Serialization',
    idealTemp: '20°C – 25°C USP Controlled Room Temp',
    description: 'Vitamins, sports nutrition powders, and over-the-counter wellness remedies with GS1 Databar 2D barcodes and tamper-evident custody protocols.',
    keyChallenge: 'Strict regulatory audits, FDA cGMP compliance, and immediate quarantine recall capabilities.'
  }
];

export const fmcgSimulatorChannels = [
  {
    id: 'big-box',
    name: 'Tier-1 Big-Box Retail',
    examples: 'Walmart, Target, Costco, Carrefour',
    otifTarget: '≥ 99.0%',
    slaDesc: 'Strict Must-Arrive-By-Date (MABD) within 15-min delivery dock appointments',
    ediProtocol: 'EDI 856 (ASN), EDI 850 (PO), EDI 810 (Invoice)',
    savingsFactor: 1.35
  },
  {
    id: 'omnichannel',
    name: 'Omnichannel & E-Grocery Hubs',
    examples: 'Amazon 1P/3P, Instacart, Blinkit, Brand DTC',
    otifTarget: '≥ 99.5%',
    slaDesc: 'Same-day wave picking, custom SIOC (Ships-In-Own-Container) prep',
    ediProtocol: 'REST API Webhooks & Amazon Vendor Central Direct Fulfillment',
    savingsFactor: 1.25
  },
  {
    id: 'supermarket-cstore',
    name: 'Supermarket & Convenience Chains',
    examples: 'Kroger, Albertsons, 7-Eleven, Circle K',
    otifTarget: '≥ 98.8%',
    slaDesc: 'High-frequency split-case cross-docking (2 - 3 deliveries per week)',
    ediProtocol: 'Direct-Store-Delivery (DSD) scanning & mobile e-POD confirmation',
    savingsFactor: 1.15
  },
  {
    id: 'export-consortia',
    name: 'Global Export & Duty-Free Consortia',
    examples: 'Heinemann, Dufry, Southeast Asian Retail Consortia',
    otifTarget: '≥ 99.4%',
    slaDesc: 'Bonded cross-border staging with multi-language overlabeling in-transit',
    ediProtocol: 'Automated Phytosanitary & Customs Single-Window EDI Filing',
    savingsFactor: 1.40
  }
];

export const fmcgSimulatorVolumes = [
  {
    id: 'vol-50k',
    label: '50,000 – 250,000 Cases / Mo',
    throughput: '1,200 – 6,000 Pallets / Mo',
    baseChargebackSavings: '$380,000 – $640,000 / yr',
    bufferDaysSaved: '3.4 Days',
    recommendedMode: 'Regional Flow-Through Cross-Dock with Dedicated ASN Pre-Clearing'
  },
  {
    id: 'vol-250k',
    label: '250,000 – 1,000,000 Cases / Mo',
    throughput: '6,000 – 24,000 Pallets / Mo',
    baseChargebackSavings: '$1,250,000 – $2,400,000 / yr',
    bufferDaysSaved: '5.2 Days',
    recommendedMode: 'Automated Sortation Hub + Retail Pallet-Bypass Highway'
  },
  {
    id: 'vol-1m',
    label: '1,000,000+ Cases / Mo (Global Enterprise)',
    throughput: '25,000+ Pallets / Mo',
    baseChargebackSavings: '$3,800,000 – $6,200,000 / yr',
    bufferDaysSaved: '7.1 Days',
    recommendedMode: 'Dedicated Multi-Tier Control Tower with Autonomous Slip-Sheet Loading'
  }
];

export const fmcgPillars = [
  {
    id: 'cross-dock',
    title: 'High-Velocity Flow-Through Cross-Docking',
    tagline: 'Sub-24h Port-to-DC Velocity with Zero Warehousing Dwell',
    icon: Zap,
    metric: '94% Shipped in <18h',
    description: 'Bypass conventional holding storage entirely. Incoming ocean containers and factory trailers are deconsolidated within minutes of dock arrival, automated dimensioned, barcoded, and sorted directly into outbound retail trailers.',
    points: [
      'Automated slip-sheet & clamp truck deconsolidation eliminates manual palletizing labor',
      'Dynamic cross-dock routing matching inbound POs directly with retailer store distribution lists',
      'Weigh-in-motion scanning detects weight discrepancies immediately to prevent retailer refusal',
      'Real-time dock appointment scheduling with geofenced yard management'
    ],
    accentColor: '#C2410C',
    badgeText: 'Speed & Agility'
  },
  {
    id: 'fefo-lot',
    title: 'Automated FEFO & Expiration Precision',
    tagline: 'Guaranteed Shelf-Life Integrity & Zero Product Write-Offs',
    icon: Clock,
    metric: '<0.02% Spoilage Rate',
    description: 'Never deliver aged product to a retailer again. Our WMS enforces strict First-Expired, First-Out (FEFO) algorithms tailored to each retailer’s shelf-life acceptance window (e.g., Walmart 75%, Costco 85%).',
    points: [
      'Automated lot lineage tracking from manufacturer batch to store pallet tag',
      'Integrated ambient, temperature & relative humidity sensor data logged per pallet',
      'Instant digital quarantine isolation capable of halting recalled lots in under 30 seconds',
      'Pre-expiry alerts trigger automated promotional channel redirection before aging occurs'
    ],
    accentColor: '#EA580C',
    badgeText: 'Quality Assurance'
  },
  {
    id: 'retail-compliance',
    title: 'Retail Compliance & Chargeback Elimination',
    tagline: '100% On-Time In-Full (OTIF) & MABD Reliability',
    icon: ShieldCheck,
    metric: '99.4% OTIF Rate',
    description: 'Eliminate punitive chargebacks and retailer vendor penalties. Every pallet is verified against retailer-specific compliance manuals (Walmart SQEP, Target, Amazon Vendor Central) before dispatch.',
    points: [
      'Automated EDI 856 Advanced Ship Notice (ASN) transmitted simultaneously at trailer seal',
      'GS1-128 barcode label placement automated with 100% optical readability verification',
      'Pallet overhang elimination and corner board protection to prevent transit crushing',
      'Direct carrier appointment management aligned to strict 15-minute MABD delivery slots'
    ],
    accentColor: '#F59E0B',
    badgeText: 'Zero-Penalty Shield'
  },
  {
    id: 'display-kitting',
    title: 'Omnichannel Display Kitting & Value-Add Co-Packing',
    tagline: 'Shelf-Ready Packaging (SRP) & Promotional Shippers',
    icon: Boxes,
    metric: '4.8M Units Kitted / Mo',
    description: 'Transform bulk production into market-ready retail merchandising. We design, assemble, and pack point-of-sale displays, variety packs, shrink-banded bundles, and seasonal gift sets at the distribution hub.',
    points: [
      'PDQ trays, sidekick displays, and full-pallet dump bin assembly ready for retail floors',
      'Multi-pack shrink wrapping and promotional twin-pack banding with custom promotional labels',
      'Amazon SIOC (Ships-in-Own-Container) certification testing and prep repackaging',
      'Multilingual country-specific overlabeling and ingredient compliance re-tagging'
    ],
    accentColor: '#D84315',
    badgeText: 'Value-Added Services'
  }
];

export const fmcgCategoryDetails = [
  {
    id: 'food-bev',
    category: 'Packaged Food & Beverages',
    icon: Coffee,
    activeVolume: '72,000+ Pallets / Mo',
    tempRange: '15°C – 22°C (Dry Ambient) / 4°C – 8°C (Reefer)',
    primaryChannels: 'Hypermarkets, Supermarket Chains, Club Stores, E-Grocery',
    complianceSpecs: 'HACCP, ISO 22000, FDA FSMA, GFSI Certified',
    description: 'High-turnover dry foods, canned specialties, snacks, coffee, juices, and confectionery. We manage strict allergen separation, pest-controlled ambient facilities, and rapid retail cross-docking.',
    highlights: ['Allergen-segregated clean storage', 'Pest-shielded hermetic docks', 'FEFO shelf-life guard', 'Slip-sheet heavy deconsolidation']
  },
  {
    id: 'beauty-cosmetics',
    category: 'Beauty, Cosmetics & Personal Care',
    icon: Sparkles,
    activeVolume: '45,000+ SKUs Maintained',
    tempRange: '18°C – 24°C Climate Regulated',
    primaryChannels: 'Department Stores, Beauty Retailers (Sephora, Ulta), Pharmacies, DTC',
    complianceSpecs: 'FDA cGMP, ISO 22716 Cosmetics GMP, REACH Compliant',
    description: 'Fragile perfumes, luxury serums, organic shampoo bars, and color palettes. High SKU variety with seasonal promotional spikes, demanding pristine pack appearance and serial number authentication.',
    highlights: ['Anti-theft high-security cages', 'Tamper-evident shrink kitting', 'Batch barcode verification', 'Delicate glass parcel packing']
  },
  {
    id: 'household-care',
    category: 'Household & Cleaning Essentials',
    icon: Warehouse,
    activeVolume: '54,000+ Cases Flow-Through / Day',
    tempRange: 'Controlled Ambient (Ventilated)',
    primaryChannels: 'Discount Retailers, Mass Merchants, Convenience Stores',
    complianceSpecs: 'OSHA Hazmat, UN Packaging Standard, EPA Compliant',
    description: 'Eco-friendly cleaning detergents, sanitizing wipes, laundry liquids, and paper commodities. Emphasizes cube optimization, leak-proof pallet stabilization, and direct-to-distribution-center line hauls.',
    highlights: ['Secondary spill containment', 'Aerosol flammability compliant', 'Heavy-weight pallet strapping', 'Direct trailer floor loading']
  },
  {
    id: 'consumer-health',
    category: 'Consumer Health & OTC Nutrition',
    icon: HeartPulse,
    activeVolume: '28,000+ Lots Monitored Live',
    tempRange: '20°C – 25°C USP Controlled Room Temp',
    primaryChannels: 'Retail Pharmacies, Wellness Centers, Hospital Gift Chains, Amazon Health',
    complianceSpecs: '21 CFR Part 111 cGMP, DSHEA, GS1 2D Databar',
    description: 'Over-the-counter wellness supplements, protein formulations, baby nutrition, and wellness botanicals. Full regulatory pedigree tracking, tamper seals, and pharmaceutical-grade hygiene standards.',
    highlights: ['Cleanroom kitting environments', 'Electronic batch records (EBR)', 'Tamper-evident verification', 'Instant FDA audit reporting']
  }
];

export const fmcgComplianceMatrix = [
  {
    retailer: 'Walmart Supply Chain',
    program: 'SQEP (Supplier Quality Excellence Program) & OTIF',
    kpi: '98.5% On-Time, 99.0% In-Full',
    penaltyRisk: '3% of COGS on non-compliant PO lines',
    kplCapability: '100% Automated ASN 856 with optical barcode verification; 99.6% Walmart OTIF track record.'
  },
  {
    retailer: 'Target Corporation',
    program: 'Vendor Performance Management & MABD',
    kpi: '95% On-Time Delivery Window',
    penaltyRisk: '$5 per carton chargeback + late dock delivery fines',
    kplCapability: 'Dedicated carrier slot management, dynamic pallet height enforcement, and RFID carton tags.'
  },
  {
    retailer: 'Amazon 1P Vendor Central',
    program: 'Direct Fulfillment & SIOC Compliance',
    kpi: 'Under 1% prep defects & 99.8% ASN accuracy',
    penaltyRisk: 'Chargeback fees per unit plus ASIN suspension',
    kplCapability: 'Certified APASS lab packaging, custom SIOC repacking, and EDI 850/855/856 integrated pipelines.'
  },
  {
    retailer: 'European & Global Supermarkets',
    program: 'Carrefour, Tesco, REWE & Metro Agility Protocols',
    kpi: 'Sub-24hr cross-docking from arrival ports',
    penaltyRisk: 'Full truckload turnaround refusal and delivery demurrage',
    kplCapability: 'Euro-pallet exchange pool management, localized EU 14-allergen multilingual labeling.'
  }
];

export const fmcgCaseStudies = [
  {
    client: 'Multinational Confectionery & Snack Conglomerate',
    scale: '14 Brands • 650 SKUs • 3,200 Retail Distribution Doors',
    challenge: 'Suffering $2.4M annually in Walmart & Target chargebacks due to barcode misreads, pallet overhang damage, and missed 15-minute delivery slots during peak holiday rush.',
    solution: 'Migrated 100% of US imports to KPL automated flow-through cross-docking with optical GS1-128 scanning, automated corner-board pallet strapping, and pre-scheduled MABD appointment dispatching.',
    results: [
      { metric: 'Chargeback Drop', val: '-94%' },
      { metric: 'OTIF Score', val: '99.7%' },
      { metric: 'Annual Savings', val: '$2.15M' },
      { metric: 'Turnaround Time', val: '18 hrs' }
    ],
    quote: 'KPL transformed our most stressful holiday retail season into our smoothest quarter on record. We went from hundreds of monthly retailer dispute claims to zero penalties.'
  },
  {
    client: 'High-Growth Clean Skincare & Beauty Enterprise',
    scale: 'Omnichannel: 4,500 Retail Doors (Sephora/Ulta/Target) + High-Volume DTC',
    challenge: 'Batch expiry dates were being shipped haphazardly by former 3PL, causing retail buyers to reject shipments with less than 12 months shelf-life remaining, while packaging was damaged in transit.',
    solution: 'Implemented KPL automated FEFO inventory rules engine linked directly to retailer specifications, accompanied by custom cleanroom holiday display kitting and anti-shock parcel packaging.',
    results: [
      { metric: 'Shelf-Life Erosion', val: '0.0%' },
      { metric: 'Display Pack Velocity', val: '65k/wk' },
      { metric: 'Retail Compliance', val: '100%' },
      { metric: 'Transit Damage', val: '<0.01%' }
    ],
    quote: 'The automated FEFO logic alone saved our brand tens of thousands in expired stock write-offs. Their promotional retail kitting team is the most agile we have ever worked with.'
  },
  {
    client: 'Leading Ready-To-Drink Organic Beverage Brand',
    scale: 'National Supermarket Distribution • 1.8M Cases Monthly Peak',
    challenge: 'Heavy-cube liquid freight was causing container demurrage fees at major coastal ports, and manual destuffing was taking 48 hours per container, leading to out-of-stocks at retail.',
    solution: 'Deployed KPL slip-sheet automated unloading clamps at coastal cross-docks, stripping inbound 40ft containers in 38 minutes and transloading directly to regional dry vans.',
    results: [
      { metric: 'Demurrage Cost', val: '$0.00' },
      { metric: 'Container Strip', val: '38 mins' },
      { metric: 'Out-of-Stock Rate', val: '<0.4%' },
      { metric: 'Freight Cost / Case', val: '-18.2%' }
    ],
    quote: 'Port congestion used to cripple our summer promotions. With KPL rapid slip-sheet cross-docking, our beverages are on supermarket shelves while competitors are still stuck in container yards.'
  }
];

export const fmcgStandards = [
  {
    code: 'FDA cGMP 21 CFR',
    name: 'Current Good Manufacturing Practice',
    desc: 'Audited clean distribution facilities, ambient temperature logging, and tamper-evident storage for wellness & personal care goods.'
  },
  {
    code: 'HACCP & ISO 22000',
    name: 'Hazard Analysis & Food Safety Management',
    desc: 'Rigorous biological, chemical, and physical risk mitigation across all food-contact logistics and handling procedures.'
  },
  {
    code: 'BRCGS Storage & Distribution',
    name: 'Global Standard for Consumer Goods',
    desc: 'Recognized by the Global Food Safety Initiative (GFSI) ensuring world-class product integrity and hygiene.'
  },
  {
    code: 'GS1 Standards Certified',
    name: 'Global Barcode & Traceability Architecture',
    desc: 'Automated 1D/2D GS1-128, Databar, and EPC RFID encoding ensuring seamless compatibility with all international retail scanners.'
  }
];

export const fmcgFaqs = [
  {
    q: 'How does KPL eliminate retailer chargebacks and SQEP fines?',
    a: 'We attack the root causes of retailer penalties: ASN mismatches, barcode read failures, pallet overhang, and missed MABD appointment windows. Our automated packing systems verify GS1-128 labels with 100% optical scanners before loading. When trailer doors close, the electronic ASN 856 is instantaneously transmitted to the retailer EDI gateway. Deliveries are executed via dedicated appointment-priority carrier lanes, achieving 99.4% OTIF compliance.'
  },
  {
    q: 'How does your automated FEFO inventory management protect shelf life?',
    a: 'Unlike basic FIFO (First-In, First-Out), our warehouse management system tracks the exact manufacturer expiration date on every single master carton and pallet. We configure rules per customer: for instance, if a retailer requires 75% remaining shelf life, our system locks older lots from being allocated to that account and automatically reserves them for fast-turnaround clearance or promotional channels, driving inventory write-offs down to <0.02%.'
  },
  {
    q: 'Can you handle emergency retail peak spikes, such as Prime Day or Black Friday?',
    a: 'Yes. Our FMCG hubs feature elastic cross-dock capacity with multi-shift operations, rapid trailer staging yards, and modular value-added kitting lines capable of scaling up to 4x standard daily volume within 48 hours notice. We maintain pre-booked carrier contracts with priority appointment guarantees at major retail distribution centers across North America, Europe, and Asia.'
  },
  {
    q: 'Do you provide Shelf-Ready Packaging (SRP) and point-of-sale display assembly?',
    a: 'Absolutely. We assemble full-pallet dump bins, quarter-pallet displays, PDQ counter trays, and club-store multi-packs directly at our distribution facilities. This means you can ship bulk, unbundled goods overseas at lowest volumetric freight rates and perform high-margin promotional kitting right before delivery into retail distribution networks.'
  },
  {
    q: 'How does your system integrate with our ERP (SAP, Oracle, NetSuite)?',
    a: 'KPL connects directly via pre-built EDI standards (EDI 850, 856, 810, 940, 945) as well as modern RESTful JSON APIs and Webhooks. Inbound receipt notifications, live lot-level inventory counts, and signed digital Proofs of Delivery (e-POD) sync back into your enterprise ERP in real time with zero manual data entry.'
  }
];

