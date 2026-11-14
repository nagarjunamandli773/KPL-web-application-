import {
  Shirt,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
  Tag,
  RotateCcw,
  SlidersHorizontal,
  Scissors,
  Layers,
  Award,
  Globe,
  Truck,
  Box,
  Warehouse,
  ShoppingBag,
  Eye,
  Check,
  CheckCheck
} from 'lucide-react';

export const fashionHeroStats = [
  {
    label: 'Store Window On-Time Rate',
    value: '99.6%',
    sub: 'Strict Runway & Seasonal Drop SLA',
    icon: CheckCircle2,
    accent: '#EA580C',
  },
  {
    label: 'Garments-on-Hanger (GOH)',
    value: '18M+ / yr',
    sub: 'Wrinkle-Free Direct-to-Floor Rail Logistics',
    icon: Shirt,
    accent: '#D97706',
  },
  {
    label: 'Reverse Logistics Processing',
    value: '< 48 hrs',
    sub: 'Dock-to-Resale Inspection & Restock',
    icon: RotateCcw,
    accent: '#C2410C',
  },
  {
    label: 'Item-Level RFID Precision',
    value: '99.98%',
    sub: 'Real-Time Carton-to-Boutique Lineage',
    icon: Tag,
    accent: '#D84315',
  },
];

export const fashionSimulatorTiers = [
  {
    id: 'luxury-runway',
    name: 'Luxury Haute Couture & Silk Capsules',
    turnaround: '24 - 48 hrs Air Priority',
    gohCapability: 'Silk-Shield Velvet Bar GOH',
    lossProtection: '100% Tamper & Climate Monitored',
    idealCondition: '18°C – 22°C / 45-55% Humidity Controlled',
    description: 'Designer couture, pure mulberry silk, fine cashmere, and handcrafted leather requiring climate-sealed ocean/air pods and pristine store-ready delivery.',
    image: '/product-images/Mulberry Silk Sarees & Fabric.png',
    badge: 'Zero-Pressing Direct to Flagship'
  },
  {
    id: 'fast-fashion',
    name: 'High-Turnover Fast Fashion & Seasonal Drops',
    turnaround: '12 - 24 hrs Port Cross-Dock',
    gohCapability: 'Multi-Tier String & Solid Bar GOH',
    lossProtection: 'High-Velocity Carton Scanning',
    idealCondition: 'Ventilated Anti-Moisture Staging',
    description: 'Bi-weekly collections, trending tops, denim lines, and footwear requiring rapid deconsolidation from Asian textile hubs directly into regional mall networks.',
    image: '/garments.jpg',
    badge: 'Sub-24h Port-to-DC Velocity'
  },
  {
    id: 'athletic-performance',
    name: 'Technical Athleisure & Activewear',
    turnaround: '18 - 36 hrs Flow-Through',
    gohCapability: 'Flat-Pack Polybagged Automation',
    lossProtection: 'RFID Heat-Map Tracking',
    idealCondition: 'Odor-Shield Clean Ambient',
    description: 'Moisture-wicking knits, performance outerwear, and stretch compression apparel with high SKU variant counts by size/color and aggressive DTC e-commerce volume.',
    image: '/product-images/Recycled Performance Athletic Knit.png',
    badge: 'Omnichannel B2B + DTC Hybrid'
  },
  {
    id: 'denim-heritage',
    name: 'Premium Denim & Heavy Cotton Textiles',
    turnaround: '24 - 48 hrs Ocean Intermodal',
    gohCapability: 'Heavy-Duty Reinforced Bar GOH',
    lossProtection: 'Indigo Transfer & Moisture Guard',
    idealCondition: 'Desiccant-Enriched Dry Staging',
    description: 'Raw selvedge denim, heavy twill jackets, and workwear with heavy roll fabric imports, wash-treatment tracking, and direct distribution to specialty retail chains.',
    image: '/product-images/Raw Selvedge Stretch Denim Fabric (13.5 Oz).png',
    badge: 'Heavy-Cube Textile Stability'
  },
  {
    id: 'leather-footwear',
    name: 'Luxury Leather Goods & Footwear',
    turnaround: '24 - 36 hrs Bonded Air/Sea',
    gohCapability: 'Custom Foam-Cushioned Stacking',
    lossProtection: 'Anti-Theft Micro-Geofencing',
    idealCondition: '16°C – 20°C Humidity Regulated',
    description: 'Full-grain leather luggage, handcrafted footwear, and artisanal accessories requiring dust-bag inspection, serialized verification, and shock-absorbent palletization.',
    image: '/product-images/Full-Grain Vintage Leather Travel Bags.png',
    badge: 'High-Value Serialized Lineage'
  }
];

export const fashionSimulatorModes = [
  {
    id: 'goh-container',
    name: 'Garment-on-Hanger (GOH) Rail System',
    desc: '20ft/40ft ocean & dry van containers fitted with multi-tier hanging bars, eliminating folding, pressing, and box wrinkles.',
    storeReadyScore: '100% Floor Ready',
    speedMultiplier: 1.30,
    costSavings: '$1.45 / garment in pressing avoidance'
  },
  {
    id: 'flatpack-crossdock',
    name: 'Automated Flat-Pack Polybagged Cross-Dock',
    desc: 'High-density carton packing with barcoded polybags, automated sorting direct from ship container to store-destined pallets.',
    storeReadyScore: '85% Rapid Pre-Sort',
    speedMultiplier: 1.15,
    costSavings: '$0.85 / carton in cube optimization'
  },
  {
    id: 'omnichannel-rfid',
    name: 'RFID-Tagged Hybrid DC (Retail + DTC)',
    desc: 'Single-pool inventory dynamic allocation supporting both bulk boutique delivery and individual DTC consumer order picking.',
    storeReadyScore: '98% Inventory Availability',
    speedMultiplier: 1.25,
    costSavings: '32% reduction in safety stock holding'
  }
];

export const fashionSimulatorVolumes = [
  {
    id: 'vol-100k',
    label: '100,000 – 500,000 Units / Season',
    doorReach: '120 – 450 Retail Boutiques & Department Stores',
    estPressingSaved: '$280,000 – $520,000 / yr',
    bufferDays: '4.2 Days Saved'
  },
  {
    id: 'vol-500k',
    label: '500,000 – 2,000,000 Units / Season',
    doorReach: '450 – 1,800 Mall Stores & Wholesale Doors',
    estPressingSaved: '$920,000 – $1,850,000 / yr',
    bufferDays: '6.5 Days Saved'
  },
  {
    id: 'vol-2m',
    label: '2,000,000+ Units (Multinational Fashion Brand)',
    doorReach: '2,500+ Doors Worldwide + Global E-Commerce',
    estPressingSaved: '$3,400,000+ / yr',
    bufferDays: '8.8 Days Saved'
  }
];

export const fashionPillars = [
  {
    id: 'goh-logistics',
    title: 'Garment-on-Hanger (GOH) Specialized Fleet',
    tagline: 'Zero-Wrinkle, Floor-Ready Delivery Direct from Factory to Retail Gondola',
    icon: Shirt,
    image: '/garments.jpg',
    metric: '18M+ Units / yr',
    description: 'Transform transit into presentation. Our specialized GOH ocean containers and air-freight trollies preserve delicate garments on string or solid metal bars. Garments arrive at retail stores uncreased and ready for immediate display.',
    points: [
      'Multi-tier string, rope, and solid-bar configurations customized to garment length',
      'Anti-dust and humidity-sealed polyethylene protective container shielding',
      'Zero secondary steam pressing or ironing labor required at store back-rooms',
      'Direct-to-store specialized tail-lift trucks with interior hanging bar tracks'
    ],
    accentColor: '#EA580C',
    badgeText: 'Runway Quality'
  },
  {
    id: 'seasonal-agility',
    title: 'Agile Seasonal Drop & Capsule Fast-Track',
    tagline: 'Rapid Port-to-Boutique Flow-Through within 24 to 48 Hours',
    icon: Zap,
    image: '/product-images/Mulberry Silk Sarees & Fabric.png',
    metric: '99.6% Launch SLA',
    description: 'Fashion collections have strict calendar launch deadlines. We coordinate pre-clearance customs, express container deconsolidation, and overnight boutique distribution to guarantee launch date synchronicity globally.',
    points: [
      'Pre-arrival customs filing under HTS Chapter 61/62 for instant terminal release',
      'Store-allocated split sortation matching regional size/color allocation algorithms',
      'Mall security and off-peak night delivery appointments pre-booked',
      'Real-time control tower visibility alerting visual merchandisers of truck arrivals'
    ],
    accentColor: '#D97706',
    badgeText: 'Launch Precision'
  },
  {
    id: 'rfid-lineage',
    title: 'Item-Level RFID & Anti-Counterfeit Lineage',
    tagline: '99.98% Inventory Precision with Automated Tunnel Scanners',
    icon: Tag,
    image: '/product-images/Full-Grain Vintage Leather Travel Bags.png',
    metric: '99.98% Accuracy',
    description: 'Say goodbye to carton opening and manual barcode scanning. Integrated RFID readers scan up to 1,500 units per second as pallets glide through our automated distribution tunnels, securing serial authenticity.',
    points: [
      'Automated high-speed portal scanning verifying 100% carton contents in 3 seconds',
      'Item-level serialization preventing counterfeit substitution across global borders',
      'Instant electronic packing lists (EPL) synchronized with retail POS systems',
      'Real-time retail inventory transparency reducing out-of-stock sizes by 84%'
    ],
    accentColor: '#C2410C',
    badgeText: 'Digital Visibility'
  },
  {
    id: 'reverse-circularity',
    title: 'Circular Returns & 48h Restock Logistics',
    tagline: 'Rapid Inspection, Tag Replacement & Resale Channel Recovery',
    icon: RotateCcw,
    image: '/product-images/Recycled Performance Athletic Knit.png',
    metric: '<48h Dock-to-Stock',
    description: 'E-commerce fashion experiences return rates up to 30%. Our specialized apparel refurbishment centers inspect, steam, re-tag, and re-bag returned items back into active sellable stock within 48 hours.',
    points: [
      'Standardized 6-point quality inspection checking seams, zippers, and odors',
      'Professional ozone sanitization and industrial dry steam de-wrinkling',
      'Automated re-labeling, re-polybagging, and barcode re-association',
      'Secondary market liquidation routing for damaged or off-season garments'
    ],
    accentColor: '#D84315',
    badgeText: 'Circularity & Profit'
  }
];

export const fashionGallery = [
  {
    title: 'Luxury Silk & Runway Textiles',
    category: 'Haute Couture Logistics',
    image: '/product-images/Mulberry Silk Sarees & Fabric.png',
    desc: 'Fine Mulberry silks and artisanal embroideries handled under strict humidity-controlled sealed freight pods.',
    highlight: 'Zero-humidity moisture barrier'
  },
  {
    title: 'Garments-on-Hanger (GOH) Fleet',
    category: 'Store-Ready Presentation',
    image: '/garments.jpg',
    desc: 'Multi-tier hanging containers carrying suits, dresses, and trench coats straight from factory to department store racks.',
    highlight: '100% wrinkle-free floor ready'
  },
  {
    title: 'Premium Raw Selvedge Denim',
    category: 'Textile Fabric Logistics',
    image: '/product-images/Raw Selvedge Stretch Denim Fabric (13.5 Oz).png',
    desc: 'High-density denim rolls and finished jeans transported with anti-indigo dye bleed and heavy-duty strapping.',
    highlight: 'Color-stability protected'
  },
  {
    title: 'Full-Grain Leather & Footwear',
    category: 'Luxury Goods & Accessories',
    image: '/product-images/Full-Grain Vintage Leather Travel Bags.png',
    desc: 'Handcrafted leather luggage and shoes with temperature-stable transit, anti-scuff packing, and serialization.',
    highlight: 'High-security anti-theft cages'
  },
  {
    title: 'Recycled Athletic Performance Knit',
    category: 'Activewear & Athleisure',
    image: '/product-images/Recycled Performance Athletic Knit.png',
    desc: 'Sustainable technical fabrics mobilized for omnichannel DTC and sportswear retail drops with automated sorting.',
    highlight: 'Eco-certified transit channels'
  },
  {
    title: 'Combed Organic Cotton Yarn & Knit',
    category: 'Raw Material Mill Feeder',
    image: '/product-images/Combed Organic Cotton Yarn.png',
    desc: 'High-speed replenishment linking yarn spinning mills in India and Egypt directly to apparel manufacturing lines.',
    highlight: 'Just-in-Time factory supply'
  },
  {
    title: 'Egyptian Cotton Luxury Bedding',
    category: 'Home & Hospitality Textiles',
    image: '/product-images/Egyptian Cotton Luxury Bedding.png',
    desc: 'High-thread-count sateen linens and luxury boutique hotel bedding transported in airtight hermetic cartons.',
    highlight: 'Hermetic dust-sealed packing'
  },
  {
    title: 'Bamboo Fiber Hypoallergenic Towels',
    category: 'Sustainable Eco-Apparel',
    image: '/product-images/Bamboo Fiber Hypoallergenic Towels.png',
    desc: 'Organic bamboo fiber textiles mobilized under eco-conscious transport guidelines with zero plastic banding.',
    highlight: 'Biodegradable packaging verified'
  }
];

export const fashionComplianceMatrix = [
  {
    retailer: 'Luxury Department Stores (Nordstrom, Saks, Harrods)',
    requirement: 'Garment-on-Hanger (GOH), branded wooden hangers, black garment bags',
    sla: 'Strict dock delivery appointment window within 20 mins',
    kplAdvantage: '100% GOH specialized delivery with white-glove inside delivery options.'
  },
  {
    retailer: 'Fast-Fashion Chains (Zara, H&M, Mango)',
    requirement: 'Direct-to-store floor packs, pre-sorted by store department & size curve',
    sla: 'Sub-36hr port-to-mall distribution twice weekly',
    kplAdvantage: 'High-speed automated sortation hubs matching store replenishment lists.'
  },
  {
    retailer: 'Athletic Megastores (Nike, Lululemon, Foot Locker)',
    requirement: 'Item-level GS1 RFID tags encoded to EPC Gen2 standards',
    sla: '99.5% ASN 856 EDI accuracy with zero barcode misreads',
    kplAdvantage: 'High-volume RFID scanning tunnels with automated error rejection.'
  },
  {
    retailer: 'Global E-Commerce & DTC (Farfetch, SSENSE, Brand DTC)',
    requirement: 'Same-day pick & pack with luxury unboxing presentation & return slips',
    sla: 'Under 2-hour order-to-carrier injection for express transit',
    kplAdvantage: 'Cleanroom e-fulfillment lines with silk paper wrap and custom ribbon seals.'
  }
];

export const fashionCaseStudies = [
  {
    client: 'Historic Milanese Luxury Fashion House',
    image: '/product-images/Mulberry Silk Sarees & Fabric.png',
    scale: '180 Flagship Boutiques Across US, Europe & East Asia • Runway Capsules',
    challenge: 'Former 3PL shipped folded suits in boxes. Stores spent an average of 45 minutes per garment steam-ironing in cramped stockrooms, costing $1.2M annually in store labor and delaying runway collection debuts.',
    solution: 'Engineered dedicated Garment-on-Hanger (GOH) air-and-road logistics corridors with custom velvet-wrapped suspension bars and geofenced store-door arrival scheduling.',
    results: [
      { metric: 'Steam Ironing', val: '$0.00' },
      { metric: 'Store Prep Time', val: '-92%' },
      { metric: 'Launch On-Time', val: '100%' },
      { metric: 'Transit Creasing', val: '0.0%' }
    ],
    quote: 'Our dresses now roll straight off the KPL trucks onto the sales floor in pristine runway condition. The labor savings alone paid for the entire logistics program.'
  },
  {
    client: 'Fast-Growing Technical Athleisure Label',
    image: '/product-images/Recycled Performance Athletic Knit.png',
    scale: 'Omnichannel: 420 Specialty Retail Doors + 3.8M Direct-to-Consumer Orders / Year',
    challenge: 'E-commerce return rates hit 28%, causing $4.5M in inventory to sit uninspected in return holding zones for over 6 weeks during peak holiday selling seasons, forcing steep end-of-season markdowns.',
    solution: 'Set up KPL specialized Apparel Refurbishment Hubs with automated dry-steam finishing, RFID restock re-tagging, and 48-hour return-to-sellable-stock turnaround.',
    results: [
      { metric: 'Restock Speed', val: '36 hrs' },
      { metric: 'Markdown Loss', val: '-64%' },
      { metric: 'Inventory Recaptured', val: '$3.8M' },
      { metric: 'Customer NPS', val: '+24 pts' }
    ],
    quote: 'KPL turned our returns liability into our fastest profit driver. Getting returns back onto website inventory within 36 hours saved millions in full-price sales.'
  },
  {
    client: 'Pioneering Sustainable Organic Denim Brand',
    image: '/product-images/Raw Selvedge Stretch Denim Fabric (13.5 Oz).png',
    scale: 'Global Distribution: 850 Retail Doors • Transparent Farm-to-Jeans Supply Chain',
    challenge: 'Strict zero-plastic retail mandate required moving from polybags to reusable cotton ties, but garments suffered humidity and dye bleeding during long ocean transits.',
    solution: 'Designed ocean container moisture-trap liners with organic desiccant packs and custom reusable wooden GOH bar systems, backed by blockchain origin tracking.',
    results: [
      { metric: 'Single-Use Plastic', val: '0 lbs' },
      { metric: 'Moisture Damage', val: '<0.01%' },
      { metric: 'Carbon Footprint', val: '-34%' },
      { metric: 'Supply Chain Audit', val: '100% Pass' }
    ],
    quote: 'KPL proved that luxury sustainability and commercial scale can coexist effortlessly without a single garment being damaged by transit humidity.'
  }
];

export const fashionStandards = [
  {
    code: 'OEKO-TEX Standard 100',
    name: 'Toxic-Free Textile Safety',
    desc: 'Audited freight and warehousing environments ensuring zero cross-contamination with toxic dyes, formaldehyde, or heavy metals.'
  },
  {
    code: 'GOTS Certified Organic',
    name: 'Global Organic Textile Standard',
    desc: 'Chain of custody verification preserving certified organic cotton and fiber integrity from ginning mill to retail shelves.'
  },
  {
    code: 'Sedex SMETA & WRAP',
    name: 'Ethical & Social Logistics Compliance',
    desc: 'Independent audits confirming fair labor practices, safe distribution facilities, and environmental sustainability standards.'
  },
  {
    code: 'GS1 EPC Gen2 RFID Certified',
    name: 'Item-Level Fashion Serialization',
    desc: 'Certified high-speed RFID encoding and reading compliant with major global retailer automated inventory mandates.'
  }
];

export const fashionFaqs = [
  {
    q: 'How does your Garment-on-Hanger (GOH) logistics eliminate retail store pressing costs?',
    a: 'Traditional flat-packing crushes delicate garments under heavy carton weight, requiring retail store associates to unbox, hang, and steam-iron every single garment for 20 to 45 minutes before putting it on display. KPL GOH containers use engineered suspension bar systems where garments remain hanging naturally throughout international transit. Delivery trucks dock at stores, and rolling racks roll garments straight from the trailer to the retail gondola with zero wrinkles.'
  },
  {
    q: 'How do you handle rapid seasonal collection drops and fashion launch dates?',
    a: 'We work backwards from your global launch date. Our fashion control tower coordinates pre-arrival customs entry filings under HTS Chapters 61 and 62, books priority container drayage slots at ports, and executes pre-scheduled nighttime mall delivery appointments. Every regional store receives its full size and color allocation simultaneously, ensuring no market lags behind.'
  },
  {
    q: 'What is your process for fashion reverse logistics and e-commerce returns?',
    a: 'Returned garments arrive at our specialized apparel fulfillment centers and undergo a standardized 6-point inspection: checking stitching, seams, buttons, zippers, odor, and stains. Clean items are professionally sanitized, dry-steamed, re-tagged with GS1 barcodes, re-polybagged, and restored to live sellable inventory within 24 to 48 hours, maximizing full-price inventory recovery.'
  },
  {
    q: 'Can you handle delicate luxury fabrics like silk, cashmere, and fine leather?',
    a: 'Yes. Our luxury textile corridors utilize climate-controlled, humidity-regulated shipping pods maintained at 18°C–22°C and 45–55% relative humidity to prevent silk moisture spotting, cashmere pilling, or leather dryness. We also provide tamper-evident micro-geofenced seals and high-security locked wire cages for haute couture and fine leather goods.'
  },
  {
    q: 'How does item-level RFID tracking help our fashion brand?',
    a: 'RFID eliminates human scanning errors. When containers or pallets pass through our automated RFID tunnels, thousands of garments are verified within seconds with 99.98% accuracy. This ensures that every retail store receives the exact size, color, and style variants ordered, virtually eliminating retail compliance chargebacks and out-of-stock sizes.'
  }
];

