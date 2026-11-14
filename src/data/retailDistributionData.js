import {
  Store,
  Truck,
  Layers,
  CheckCircle2,
  Clock,
  RotateCcw,
  Tag,
  ShieldCheck,
  TrendingUp,
  Warehouse,
  ShoppingBag,
  SlidersHorizontal,
  Box,
  Globe,
  Zap,
  BarChart2,
  Check,
  CheckCheck,
  Award,
  RefreshCw
} from 'lucide-react';

export const retailHeroStats = [
  {
    label: 'On-Time In-Full (OTIF) Rate',
    value: '99.8%',
    sub: 'Strict Big-Box Retail Compliance & Zero Chargebacks',
    icon: CheckCircle2,
    accent: '#EA580C',
  },
  {
    label: 'Active Retail Doors Served',
    value: '45,000+',
    sub: 'Direct Supermarket, Department & Mall Drop Delivery',
    icon: Store,
    accent: '#C2410C',
  },
  {
    label: 'Dock-to-Floor Cross-Dock Speed',
    value: '< 6 hrs',
    sub: 'Sub-6h Zero-Warehousing Direct Store Flow',
    icon: Zap,
    accent: '#FF6F00',
  },
  {
    label: 'Omnichannel Stock Accuracy',
    value: '99.95%',
    sub: 'Unified Single-Pool Inventory Across Store & DTC',
    icon: Tag,
    accent: '#D97706',
  },
];

export const retailFulfillmentTiers = [
  {
    id: 'store-direct',
    name: 'Direct Store Delivery (DSD) & Store Replenishment',
    turnaround: 'Daily Scheduled 2-Hour Windows',
    fulfillmentMode: 'Dedicated Route Multi-Drop Fleet',
    complianceScore: '100% Appointment SLA',
    chargebackProtection: '$0 Guarantee Under KPL SLA',
    description: 'Scheduled point-to-point delivery directly to retail store receiving docks, supermarkets, and boutique doors with off-peak silent night-drop capabilities.',
    image: '/land-freight.jpg',
    badge: 'Scheduled Morning & Night Drops',
    badgeColor: '#C2410C',
    badgeBg: '#FFF7ED',
    highlights: [
      'Tail-lift equipped box trucks with electric pallet jacks and roll-cage ramps',
      'Automated store staff ETA notification via live geofenced telemetry',
      'Direct backroom breakdown, pallet-to-shelf unbundling, and dunnage retrieval',
      'Full EDI 856 Advanced Shipping Notice (ASN) electronic receipt validation'
    ]
  },
  {
    id: 'central-crossdock',
    name: 'National Retail DC High-Velocity Cross-Dock',
    turnaround: 'Sub-6h Container-to-Outbound',
    fulfillmentMode: 'High-Density Flow-Through Staging',
    complianceScore: '99.9% Barcode Read Rate',
    chargebackProtection: '100% Pre-Audited Manifests',
    description: 'Rapid inbound deconsolidation of 40ft/53ft ocean and intermodal containers directly into store-sorted mixed pallets for Walmart, Target, Costco, and Carrefour regional DCs.',
    image: '/hero-logistics.jpg',
    badge: 'Sub-6h Zero-Warehousing Flow',
    badgeColor: '#C2410C',
    badgeBg: '#FFF7ED',
    highlights: [
      'Zero intermediate storage fees; cargo flows through dock in under 6 hours',
      'Automated slip-sheet and pallet inversion conforming to retail DC heights',
      'GS1-128 / UCC-128 carton labeling pre-verified with machine optical scanners',
      'Consolidated bill of lading (BOL) integration directly into buyer TMS'
    ]
  },
  {
    id: 'omnichannel-microhub',
    name: 'Omnichannel Micro-Fulfillment & Dark Store Node',
    turnaround: 'Same-Day / 2 - 4h Store & DTC Restock',
    fulfillmentMode: 'Shared-Pool Dynamic Allocation',
    complianceScore: '99.95% Inventory Accuracy',
    chargebackProtection: 'Zero Stockout Buffer',
    description: 'Urban micro-fulfillment centers positioned within 30 minutes of major shopping centers, unifying boutique store replenishment with rapid last-mile DTC customer delivery.',
    image: '/track-shipment-hero.jpg',
    badge: 'Unified Store + E-Commerce Pool',
    badgeColor: '#B45309',
    badgeBg: '#FFFBEB',
    highlights: [
      'Single inventory pool preventing costly split-stock buffers and dead capital',
      'Click-and-Collect (BOPIS) real-time automated reservation and staging',
      'Real-time API integrations with Shopify Plus, Manhattan WMS, SAP, and Blue Yonder',
      'Fast-track replenishment during promotional marketing surges and sales events'
    ]
  },
  {
    id: 'vmi-consignment',
    name: 'Vendor-Managed Inventory (VMI) & Concession Control',
    turnaround: 'Autonomous Replenishment Triggers',
    fulfillmentMode: 'Predictive POS Algorithmic Pull',
    complianceScore: '100% Shelf Availability',
    chargebackProtection: 'Full Ownership Tracking',
    description: 'End-to-end stock monitoring for brand concession corners, department store counters, and consumer electronics displays, triggering restock automatically based on point-of-sale sell-through.',
    image: '/consumer.jpg',
    badge: 'Autonomous POS-Triggered Restock',
    badgeColor: '#EA580C',
    badgeBg: '#FFEDD5',
    highlights: [
      'Automated EDI 852 (Product Activity) and EDI 855 (PO Acknowledgment) exchange',
      'Zero out-of-stock risk with proprietary dynamic reorder point forecasting',
      'Title ownership transfer synchronized down to the exact second of customer checkout',
      'Quarterly cycle counts and serialized RFID shrinkage elimination'
    ]
  }
];

export const retailReplenishmentModes = [
  {
    id: 'mode-night-drop',
    name: 'Off-Peak Silent Night-Drop Receiving',
    desc: 'Unassisted store dock delivery between 10 PM and 6 AM with electronic keycard access, allowing sales teams to arrive to fully restocked shelves.',
    storeSla: '100% Floor Ready by 8:00 AM',
    efficiencyBoost: '+38% faster store morning opening'
  },
  {
    id: 'mode-holiday-surge',
    name: 'Peak Season / Black Friday Dynamic Surge Routing',
    desc: 'High-frequency replenishment loops with dedicated standby drivers during Q4 holiday shopping spikes and omnichannel flash promotion drops.',
    storeSla: '4-Hour Emergency Hot-Shot Injection',
    efficiencyBoost: 'Zero missed sales during peak footfall'
  },
  {
    id: 'mode-floor-ready-pallets',
    name: 'Display-Ready Pallets & Gondola Drop Bins',
    desc: 'Pre-assembled promotional end-caps and quarter-pallets shrink-wrapped with high-impact branding, rolled directly into aisles without unboxing.',
    storeSla: 'Dock-to-Aisle in 5 Minutes',
    efficiencyBoost: '65% reduction in store labor handling'
  }
];

export const retailVolumeTiers = [
  {
    id: 'vol-regional',
    label: '50 – 250 Retail Stores (Regional Chain)',
    turnaroundTime: '24 - 48h Cross-Dock Cycle',
    avgCostPerDrop: '$48.50 / store delivery',
    annualSavings: '$140,000 – $320,000 in labor & handling'
  },
  {
    id: 'vol-national',
    label: '250 – 1,200 Retail Doors (National Retailer)',
    turnaroundTime: '12 - 24h Daily Routed Runs',
    avgCostPerDrop: '$34.20 / store delivery',
    annualSavings: '$780,000 – $1,950,000 in logistics consolidation'
  },
  {
    id: 'vol-enterprise',
    label: '1,200+ Doors (Multinational Big-Box & Grocery)',
    turnaroundTime: 'Continuous Flow Cross-Dock (<6h)',
    avgCostPerDrop: '$26.80 / store delivery',
    annualSavings: '$3,800,000+ in OTIF penalty elimination'
  }
];

export const retailPillars = [
  {
    id: 'pillar-omnichannel',
    title: 'Unified Omnichannel Inventory Architecture',
    tagline: 'One Single Stock Pool for Brick-and-Mortar Doors, Regional DCs, and Direct-to-Consumer',
    icon: Layers,
    image: '/hero-logistics.jpg',
    metric: '99.95% Inventory Accuracy',
    description: 'Eliminate fragmented stock pools. Our centralized WMS synchronizes store inventory, e-commerce orders, and wholesale allocation in real-time, preventing inventory lockup, dead capital, and duplicate buffer stocks.',
    points: [
      'Synchronous visibility across port bonded containers, central distribution centers, and store shelves',
      'Intelligent distributed order management (DOM) routing orders from the nearest cost-effective node',
      'Supports Click & Collect (BOPIS), Ship-from-Store, and direct showroom replenishment seamlessly',
      'Reduces total safety stock buffer requirements by an average of 34% across all SKUs'
    ],
    accentColor: '#EA580C',
    badgeText: 'Inventory Efficiency'
  },
  {
    id: 'pillar-otif',
    title: 'Big-Box Retail OTIF & Compliance Mastery',
    tagline: 'Zero Chargeback Guarantee for Walmart, Target, Amazon Vendor, Costco, and Carrefour',
    icon: ShieldCheck,
    image: '/land-freight.jpg',
    metric: '99.8% OTIF Compliance',
    description: 'Major retail chains impose harsh fines for late arrivals, missing ASNs, or incorrect pallet heights. KPL’s dedicated retail compliance team guarantees zero-defect shipments with 100% pre-scanned accuracy.',
    points: [
      'Strict automated ASN EDI 856 pre-lodgment transmitted prior to dock dispatch departure',
      'GS1-128 compliant serialization, case barcode verification, and thermal high-contrast labeling',
      'Pallet height, overhang, and banding precisely tailored to retailer-specific DC receiving criteria',
      'Dedicated compliance auditing desk providing photographic loading logs for every outbound trailer'
    ],
    accentColor: '#EA580C',
    badgeText: 'Chargeback Immunity'
  },
  {
    id: 'pillar-crossdock',
    title: 'High-Velocity Automated Cross-Docking',
    tagline: 'Inbound Ocean & Intermodal Freight Converted into Store Pallets in Under 6 Hours',
    icon: Zap,
    image: '/track-shipment-hero.jpg',
    metric: '< 6h Dock-to-Outbound',
    description: 'Bypass long-term warehousing costs. Inbound containers from overseas factories are deconsolidated at port gateways, scanned, dynamic-sorted, and loaded onto store-destined linehaul trucks within hours.',
    points: [
      'High-throughput sortation conveyors handling mixed cartons, slip-sheets, and heavy pallets',
      'Eliminates intermediate put-away and picking costs, saving up to $1.85 per carton in handling',
      'Multi-temperature zones accommodating dry ambient goods, consumer electronics, and packaged foods',
      'Direct linehaul injection into regional parcel networks, store replenishment routes, and wholesale depots'
    ],
    accentColor: '#D97706',
    badgeText: 'Velocity Acceleration'
  },
  {
    id: 'pillar-returns',
    title: 'Store Returns & Circular Reverse Logistics',
    tagline: 'Consolidated Return Sweeps, Carton Re-Grading, and Rapid Restock into Active Channels',
    icon: RotateCcw,
    image: '/decor.jpg',
    metric: '< 48h Restock Recovery',
    description: 'Customer returns and store overstock drain profitability if left unmanaged. Our scheduled return sweeps collect returns during delivery drops, bringing them into regional processing hubs for grading and restock.',
    points: [
      'Reverse backhaul logistics leveraging delivery trucks, minimizing incremental transportation costs',
      'Comprehensive 5-point inspection: packaging integrity, serial verification, damage grading, and sanitization',
      'Immediate return-to-vendor (RTV) consolidation, markdown channel routing, or active inventory restock',
      'Automated credit memo issuance and serial status tracking across your enterprise ERP'
    ],
    accentColor: '#D84315',
    badgeText: 'Revenue Recovery'
  }
];

export const retailGallery = [
  {
    title: 'Automated High-Bay Retail DCs',
    category: 'Distribution Infrastructure',
    image: '/hero-logistics.jpg',
    desc: 'High-density vertical distribution centers with automated automated storage and retrieval systems (ASRS) operating 24/7.',
    highlight: '45,000+ pallets dynamic capacity'
  },
  {
    title: 'Dedicated Retail Store Delivery Fleet',
    category: 'Store Replenishment Transport',
    image: '/land-freight.jpg',
    desc: 'Multi-axle box trucks equipped with hydraulic tail-lifts, electric pallet jacks, and low-noise refrigerated units.',
    highlight: 'Silent night-drop capable'
  },
  {
    title: 'Packaged Food & Supermarket Supply',
    category: 'Grocery & FMCG Retail',
    image: '/food.jpg',
    desc: 'High-turnover dry and chilled grocery distribution with batch-code traceability and FIFO inventory rotation.',
    highlight: 'Zero out-of-stock freshness'
  },
  {
    title: 'Consumer Electronics High-Value Cargo',
    category: 'Electronics & Tech Retail',
    image: '/electronics.jpg',
    desc: 'High-security geofenced transportation and serialized barcode lineage for enterprise laptops, phones, and peripherals.',
    highlight: 'Level-A TAPA security cages'
  },
  {
    title: 'Department Store Apparel & Fashion Drops',
    category: 'Fashion & Softlines Distribution',
    image: '/garments.jpg',
    desc: 'Store-ready garment-on-hanger and flat-pack seasonal drop distribution direct to shopping mall department stores.',
    highlight: 'Wrinkle-free gondola ready'
  },
  {
    title: 'Home Decor & Department Goods Freight',
    category: 'Hardlines & Furniture Retail',
    image: '/decor.jpg',
    desc: 'Fragile ceramics, furniture, and home textiles protected with shock-absorbent palletization and slip-sheet transfer.',
    highlight: 'Zero-damage transit guarantee'
  },
  {
    title: 'Global Ocean Container Inbound Flow',
    category: 'Intermodal Port Gateway',
    image: '/ocean-freight.jpg',
    desc: 'Direct rail-intermodal and ocean freight customs clearance feeding inland retail distribution nodes seamlessly.',
    highlight: 'Sub-24h customs release'
  },
  {
    title: 'Real-Time Retail WMS / EDI Control Tower',
    category: 'Digital Command Platform',
    image: '/track-shipment-hero.jpg',
    desc: 'Unified digital monitoring tower providing mile-by-mile trailer tracking, store ETA alerts, and instant POD retrieval.',
    highlight: 'Live GPS & electronic POD'
  }
];

export const retailComplianceMatrix = [
  {
    retailer: 'Walmart (Supply Chain Excellence Program - SQEP)',
    requirement: 'Strict barcode scannability (GS1-128), 98%+ OTIF on-time delivery window within 2 hours, pallet overhang zero tolerance.',
    kplCapability: 'Pre-audited barcode grading (Grade A/B), electronic ASN pre-lodgment, and guaranteed on-dock compliance with zero penalties.'
  },
  {
    retailer: 'Target Corporation (Retail Inbound Compliance)',
    requirement: 'Precise delivery appointment booking via Target Yard Management System, carton weight limits, and master-carton integrity.',
    kplCapability: 'Automated Target DC appointment scheduling, certified pallet stacking, and photographic bill-of-lading verification.'
  },
  {
    retailer: 'Amazon Vendor Central (Direct Inbound to FBA/AWD)',
    requirement: 'Strict ASN 856 compliance, Carrier Central appointment booking, box-level inventory manifests, and pallet height compliance.',
    kplCapability: 'Direct API Carrier Central integration, preferred carrier status at major Amazon fulfillment centers, and zero carton chargebacks.'
  },
  {
    retailer: 'Costco Wholesale (Cross-Dock & Depot Receiving)',
    requirement: 'Block-palletized floor-ready configurations, slip-sheet usage, heavy-duty stretch wrapping, and strict morning receiving cutoffs.',
    kplCapability: 'Costco-certified wooden block pallet exchange, heavy gauge 80-gauge stretch wrapping, and dedicated depot cross-docking.'
  },
  {
    retailer: 'Carrefour & International Hypermarket Chains',
    requirement: 'Multi-lingual label compliance, batch lot tracking, temperature logs for ambient/chilled lines, and consolidated store invoicing.',
    kplCapability: 'Pre-customs multi-lingual labeling, automated electronic batch reconciliation, and direct store delivery across global regions.'
  },
  {
    retailer: 'Best Buy & Specialized Electronics Chains',
    requirement: 'Serialized IMEI/MAC address capture at receiving, anti-theft security tape seals, and inside delivery to secure backrooms.',
    kplCapability: 'Full serialized dock scan verification, tamper-evident security tape, and bonded inside white-glove delivery teams.'
  }
];

export const retailCaseStudies = [
  {
    client: 'National Apparel & Lifestyle Retail Chain',
    scale: '850+ Stores Across North America',
    challenge: 'Suffering from 6.8% inventory mismatch between e-commerce orders and store replenishments, leading to high stockouts during seasonal drops.',
    solution: 'Implemented KPL Unified Micro-Hub topology and high-velocity cross-docking, consolidating online fulfillment and store delivery into a single stock pool.',
    results: [
      'Inventory accuracy elevated from 93.2% to 99.94%',
      'Store replenishment transit time compressed by 42%',
      'Eliminated $1.4M in annual split-stock safety inventory'
    ]
  },
  {
    client: 'Multinational Fast-Moving Consumer Goods Brand',
    scale: '12,000+ Supermarket & Hypermarket Accounts',
    challenge: 'Facing heavy Walmart SQEP and Target OTIF penalties averaging $420,000 per quarter due to carrier dock appointment delays and labeling errors.',
    solution: 'Deployed KPL Retail Compliance Control Tower with automated EDI 856 pre-validation, optical barcode grading, and preferred carrier dock reservations.',
    results: [
      'OTIF score soared to 99.85% across all regional DCs',
      'Zero retail vendor chargebacks incurred over 4 consecutive quarters',
      'Consolidated freight volume reduced overall linehaul costs by 18.5%'
    ]
  },
  {
    client: 'Direct-to-Consumer Beauty Brand Expanding to Retail',
    scale: 'First 450 Sephora & Ulta Store Doors',
    challenge: 'Zero prior experience with complex retail DC routing guides, pallet specifications, or multi-door appointment scheduling.',
    solution: 'KPL provided turnkey retail onboarding, transforming DTC warehouse inventory into store-compliant floor-ready master cartons and display end-caps.',
    results: [
      '100% on-time store rollout for nationwide product debut',
      'Zero initial launch chargebacks or inventory rejections',
      'Automated POS reorder replenishment active within 48 hours of sell-through'
    ]
  }
];

export const retailStandards = [
  { name: 'GS1 US Certified', desc: 'Global standards for barcodes, RFID, and electronic business data messaging.' },
  { name: 'ANSI X12 / EDI', desc: 'Electronic Data Interchange protocols for automated Purchase Orders (850), ASNs (856), and Invoices (810).' },
  { name: 'ISO 9001:2015', desc: 'Quality Management Systems certified across all fulfillment, sortation, and transport nodes.' },
  { name: 'C-TPAT Tier 2', desc: 'Customs-Trade Partnership Against Terrorism verified supply chain security.' },
  { name: 'TAPA FSR Level-A', desc: 'Transported Asset Protection Association gold standard for facility and transit high-value security.' }
];

export const retailFaqs = [
  {
    q: 'How does KPL guarantee zero chargebacks with major retailers like Walmart, Target, and Amazon?',
    a: 'We operate an active Retail Compliance Desk that rigorously validates shipments against retailer routing guides before trucks depart. We perform optical barcode grading (Grade A/B), automate EDI 856 ASN pre-transmission, enforce strict pallet overhang and banding tolerances, and book delivery appointments through preferred carrier portals.'
  },
  {
    q: 'Can KPL handle both store replenishment and direct-to-consumer (DTC) e-commerce orders from the same inventory?',
    a: 'Yes. Our Unified Omnichannel Architecture allows brands to maintain a single inventory pool. The same warehouse node dynamically fulfills store pallet replenishment and individual e-commerce parcel picking, eliminating the need to duplicate buffer stocks across separate warehouses.'
  },
  {
    q: 'What is your average turnaround time for Cross-Docking inbound international containers?',
    a: 'Our high-velocity cross-docking gateways deconsolidate 20ft, 40ft, and 53ft containers in under 6 hours from dock door to outbound linehaul trailer. Goods are scanned, sorted by destination store or regional DC, and dispatched with zero intermediate storage fees.'
  },
  {
    q: 'Do you offer off-peak silent night-drops for retail stores?',
    a: 'Yes. We provide scheduled night-drop services between 10 PM and 6 AM for retail chains with keycard or electronic gate access. Our drivers securely unload into backrooms using electric pallet jacks, so store staff arrive in the morning to fully restocked inventory ready for the sales floor.'
  },
  {
    q: 'How does Vendor-Managed Inventory (VMI) work with KPL?',
    a: 'Through automated EDI 852 feeds or direct API connections to your retail partners’ point-of-sale systems, our algorithms track sell-through rates daily. When inventory hits predetermined threshold reorder points, replenishment orders are automatically created, packed, and dispatched without manual purchase orders.'
  },
  {
    q: 'How do you handle store returns and damaged goods sweeps?',
    a: 'Our delivery trucks perform reverse sweeps during standard delivery runs. Returned merchandise, off-season stock, and recall items are backhauled to our regional inspection centers, where items are graded, cleaned, re-labeled, or liquidated, returning capital to your business within 48 hours.'
  }
];

