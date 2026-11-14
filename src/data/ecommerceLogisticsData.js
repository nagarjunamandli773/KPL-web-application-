import {
  ShoppingBag,
  Globe,
  Truck,
  Plane,
  Ship,
  Package,
  Box,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  RotateCcw,
  Barcode,
  Store,
  Layers,
  FileCheck2,
  Warehouse,
  Tag
} from 'lucide-react';

export const ecommerceHeroStats = [
  {
    label: 'Global Delivery Reach',
    value: '220+',
    sub: 'Countries & Direct Hubs',
    icon: Globe,
  },
  {
    label: 'On-Time Doorstep SLA',
    value: '99.4%',
    sub: 'Carrier Monitored Deliveries',
    icon: Clock,
  },
  {
    label: 'Monthly Parcel Volume',
    value: '2.4M+',
    sub: 'Processed Cross-Border',
    icon: Package,
  },
  {
    label: 'Factory Pick & Pack SLA',
    value: '< 24h',
    sub: 'Same-Day Dispatch Cutoff',
    icon: Zap,
  },
];

export const ecomOriginCountries = [
  { code: 'CN', name: 'China (Shenzhen / Yiwu / Guangzhou)', flag: '🇨🇳', defaultCity: 'Shenzhen' },
  { code: 'IN', name: 'India (Mumbai / Delhi NCR / Bangalore)', flag: '🇮🇳', defaultCity: 'Mumbai' },
  { code: 'VN', name: 'Vietnam (Ho Chi Minh City / Hanoi)', flag: '🇻🇳', defaultCity: 'Ho Chi Minh' },
  { code: 'TR', name: 'Turkey (Istanbul / Bursa)', flag: '🇹🇷', defaultCity: 'Istanbul' },
  { code: 'US', name: 'United States (Los Angeles / New York)', flag: '🇺🇸', defaultCity: 'Los Angeles' },
  { code: 'DE', name: 'Germany (Frankfurt / Hamburg)', flag: '🇩🇪', defaultCity: 'Frankfurt' },
];

export const ecomDestinationCountries = [
  { code: 'US', name: 'United States', flag: '🇺🇸', courier: 'USPS Priority / FedEx Home', deMinimis: '$800 (Section 321 Duty-Free)' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', courier: 'Royal Mail Tracked 24/48 / DPD', deMinimis: '£135 VAT Threshold (HMRC)' },
  { code: 'EU', name: 'European Union (Germany/France/NL)', flag: '🇪🇺', courier: 'DHL Paket / DPD / Colissimo', deMinimis: '€150 IOSS Duty-Free VAT' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪', courier: 'Emirates Post / Aramex Express', deMinimis: 'AED 300 De Minimis' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', courier: 'Australia Post eParcel / StarTrack', deMinimis: 'AUD 1,000 Low-Value Threshold' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', courier: 'Canada Post Expedited / Purolator', deMinimis: 'CAD 20 / CAD 150 CUSMA' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', courier: 'Sagawa Express / Yamato Transport', deMinimis: 'JPY 10,000 Duty Exemption' },
];

export const ecomServiceTiers = [
  {
    id: 'express-direct',
    name: 'KPL Air Express Direct',
    badge: 'Fastest Delivery',
    badgeColor: '#EA580C',
    badgeBg: '#FFF7ED',
    transitDays: '2 - 4 Business Days',
    customsModel: 'DDP Pre-Cleared (Zero Recipient Fee)',
    transport: 'Daily Dedicated Cargo Aircraft',
    tracking: 'Real-Time Mile-by-Mile Live GPS',
    baseRate500g: '$11.80',
    baseRate1kg: '$16.50',
    baseRate2kg: '$24.90',
    baseRate5kg: '$48.00',
    features: [
      'Daily direct airport-to-airport scheduled freighter injection',
      'Electronic advance data (EAD) pre-lodged with destination customs',
      'Doorstep signature confirmation and SMS delivery alerts',
      'Full cargo loss & damage insurance up to $1,000 included'
    ]
  },
  {
    id: 'postal-injection',
    name: 'KPL Cross-Border Postal Injection',
    badge: 'Most Popular for DTC Brands',
    badgeColor: '#C2410C',
    badgeBg: '#FFEDD5',
    transitDays: '5 - 8 Business Days',
    customsModel: 'Automated IOSS / Section 321 Exemption',
    transport: 'Consolidated Commercial Air Linehaul',
    tracking: 'End-to-End Last-Mile National Post Scan',
    baseRate500g: '$6.40',
    baseRate1kg: '$9.80',
    baseRate2kg: '$15.20',
    baseRate5kg: '$31.50',
    features: [
      'Bulk consolidated air charter linehaul direct to national post hubs',
      'Injected directly into USPS, Royal Mail, DHL Paket & Australia Post',
      'Optimized Section 321 and European IOSS automated compliance',
      'Zero customs clearance bottlenecks or recipient import surprises'
    ]
  },
  {
    id: 'economy-hybrid',
    name: 'KPL Smart Economy Line',
    badge: 'Lowest Volumetric Cost',
    badgeColor: '#D97706',
    badgeBg: '#FFFBEB',
    transitDays: '9 - 14 Business Days',
    customsModel: 'Consolidated Bulk Customs Clearance',
    transport: 'High-Speed Express Ocean + Ground Haul',
    tracking: 'Milestone Barcode Tracking',
    baseRate500g: '$3.90',
    baseRate1kg: '$5.80',
    baseRate2kg: '$9.40',
    baseRate5kg: '$19.20',
    features: [
      'High-speed ocean vessel priority berth dispatch (Matson / CMA CGM)',
      'Direct drayage to regional sorting centers for immediate decanting',
      'Ideal for heavy consumer goods, apparel, footwear and home goods',
      'Up to 65% cost savings compared to traditional air express'
    ]
  },
  {
    id: 'fba-wfs-prep',
    name: 'KPL B2B Marketplace & FBA Prep Direct',
    badge: 'Amazon & Walmart Compliant',
    badgeColor: '#EA580C',
    badgeBg: '#FFF7ED',
    transitDays: '10 - 16 Business Days',
    customsModel: 'Full Commercial Import (IOR / EOR Available)',
    transport: 'Multi-Modal Ocean / Air to Fulfillment Center',
    tracking: 'Pallet & Carton Level FNSKU Tracking',
    baseRate500g: 'B2B Flat Cartons',
    baseRate1kg: '$2.40 / kg',
    baseRate2kg: '$2.15 / kg',
    baseRate5kg: '$1.85 / kg',
    features: [
      'FNSKU barcode labeling, poly-bagging, suffocation warnings & carton labeling',
      'Pallet building to exact Amazon FBA, Walmart WFS and TikTok Shop specifications',
      'Carrier appointment scheduling via Amazon Carrier Central portal',
      'Zero rejection guarantee with automated compliance photo proof'
    ]
  }
];

export const fulfillmentHubs = [
  {
    id: 'hub-lax',
    name: 'North America Gateway Hub',
    location: 'Los Angeles (Ontario), CA, USA',
    size: '145,000 sq ft',
    type: 'Bonded E-Commerce Mega-Facility',
    cutoff: 'Same-Day Dispatch Cutoff: 4:00 PM PST',
    coverage: '1-Day Delivery across California, Nevada & Arizona. 2-Day Pan-USA Ground.',
    certifications: 'C-TPAT Certified • TSA Cargo Screening • FDA Registered',
    accent: '#EA580C',
  },
  {
    id: 'hub-fra',
    name: 'European Central Distribution Hub',
    location: 'Frankfurt-am-Main, Germany',
    size: '95,000 sq ft',
    type: 'Automated Pan-EU Sorting Terminal',
    cutoff: 'Same-Day Dispatch Cutoff: 3:30 PM CET',
    coverage: 'Next-day delivery to Germany, Benelux & France. 48h to Southern & Eastern EU.',
    certifications: 'AEO-F Certified • IOSS Compliant • TAPA TSR Level 1',
    accent: '#D97706',
  },
  {
    id: 'hub-szx',
    name: 'Asia Manufacturing Ingestion Center',
    location: 'Shenzhen (Baoan International), China',
    size: '260,000 sq ft',
    type: 'High-Velocity Factory Cross-Dock Hub',
    cutoff: 'Continuous 24/7 Factory Ingestion',
    coverage: 'Direct conveyor sorting for 250,000 parcels per day into direct airport linehauls.',
    certifications: 'Direct Airport Ramp Access • Automated High-Speed Optical Sorters',
    accent: '#C2410C',
  },
  {
    id: 'hub-dxb',
    name: 'Middle East DWC Free Zone Hub',
    location: 'Dubai South (DWC Logistics City), UAE',
    size: '110,000 sq ft',
    type: 'GCC Regional Fulfillment Center',
    cutoff: 'Same-Day Dispatch Cutoff: 5:00 PM GST',
    coverage: '4-hour delivery across Dubai & Abu Dhabi. 24-48h to Saudi Arabia, Qatar & Kuwait.',
    certifications: '100% Tax-Free Zone • Temperature-Controlled Automated Storage',
    accent: '#D97706',
  },
  {
    id: 'hub-bom',
    name: 'South Asia Export Processing Center',
    location: 'Navi Mumbai (JNPT Port Corridor), India',
    size: '125,000 sq ft',
    type: 'Apparel & Handicrafts Export Sorting Hub',
    cutoff: 'Same-Day Dispatch Cutoff: 4:00 PM IST',
    coverage: 'Integrated CSB-V electronic postal export clearing for global artisanal & DTC goods.',
    certifications: 'AEO Certified • Dedicated Customs X-Ray & Barcode Weighing Station',
    accent: '#EA580C',
  },
];

export const ecommercePillars = [
  {
    id: 'factory-to-consumer',
    title: 'Factory-to-Door Direct Injection',
    tagline: 'Bypass costly middlemen and slow central warehouses. Ingest goods direct from source assembly lines.',
    icon: Truck,
    accent: '#EA580C',
    features: [
      'Direct factory pickup in industrial manufacturing corridors across China, India, and Southeast Asia',
      'Automated optical scanning, dimension weighing, and regional courier barcode labeling at origin',
      'Bulk consolidated air manifest clearance upon arrival at destination gateway hubs',
      'Immediate local injection into domestic final-mile courier fleets within 2 hours of flight landing'
    ]
  },
  {
    id: 'ddp-tax-engine',
    title: 'Automated DDP Customs & Tax Engine',
    tagline: 'Eliminate surprise door tax invoices that drive customer cart abandonment and chargebacks.',
    icon: FileCheck2,
    accent: '#D97706',
    features: [
      'Real-time checkout API calculating exact duties, VAT, GST and customs processing fees',
      'Automated US Section 321 de minimis compliance allowing $800 daily duty-free imports per consumer',
      'Pre-registered European Union Import One-Stop Shop (IOSS) for seamless green-channel customs release',
      'Guaranteed Delivered Duty Paid (DDP) transit with zero paperwork friction for your buyers'
    ]
  },
  {
    id: 'marketplace-fba',
    title: 'Marketplace & FBA Palletization Services',
    tagline: 'Ship compliant cargo directly into Amazon, Walmart, TikTok Shop, and global wholesale centers.',
    icon: Store,
    accent: '#C2410C',
    features: [
      'Comprehensive inspection, bubble-wrapping, boxing, and Amazon-compliant FNSKU barcoding',
      'Automated pallet building with corner boards, shrink wrap, and gross weight compliance labels',
      'Direct carrier appointment bookings coordinated through Amazon Carrier Central scheduling portals',
      'Real-time carton-level EDI receipts confirming warehouse dock check-in and inventory allocation'
    ]
  },
  {
    id: 'reverse-logistics',
    title: 'Global Reverse Logistics & Returns Management',
    tagline: 'Local return addresses in 30+ countries to turn returns into a friction-free loyalty driver.',
    icon: RotateCcw,
    accent: '#EA580C',
    features: [
      'Pre-printed return shipping labels and QR codes generated instantly for overseas shoppers',
      'Local domestic return collection points in North America, Europe, Australia, and the Middle East',
      'Quality grading: automated photo proof, seal inspection, functional testing, and grade rating',
      'Smart liquidation, localized re-packaging for domestic resale, or cost-efficient aggregated return haul'
    ]
  }
];

export const marketplaceIntegrations = [
  { name: 'Shopify Plus', category: 'DTC E-Commerce', status: 'Live 2-Way Sync', badge: 'Official App' },
  { name: 'Amazon FBA / FBM', category: 'Global Marketplace', status: 'Automated FNSKU', badge: 'Certified SP-API' },
  { name: 'WooCommerce', category: 'WordPress DTC', status: 'Instant Label API', badge: 'Native Plugin' },
  { name: 'TikTok Shop', category: 'Social Commerce', status: 'Priority Dispatch SLA', badge: 'Approved Partner' },
  { name: 'Walmart Marketplace', category: 'US Retail Network', status: 'WFS Direct Injection', badge: 'API Connector' },
  { name: 'eBay Global', category: 'Cross-Border Marketplace', status: 'Tracked Postal Sync', badge: 'Certified Carrier' },
  { name: 'BigCommerce', category: 'Enterprise DTC', status: 'Multi-Location Inventory', badge: 'Enterprise App' },
  { name: 'Magento / Adobe Commerce', category: 'Enterprise Portal', status: 'RESTful Webhooks', badge: 'Cloud Native' },
];

export const ecomFaqs = [
  {
    q: 'How does US Section 321 duty-free clearance work for e-commerce shipments?',
    a: 'Under United States Customs and Border Protection (CBP) regulations (19 U.S.C. 1321), individual commercial shipments valued at $800 USD or less imported by one person on one day are free of duty and taxes. KPL E-Commerce Logistics leverages direct electronic Section 321 manifest filing (Type 86 entry), allowing overseas brands to legally clear consumer parcels with zero customs duty, faster clearance speeds, and drastically reduced landed costs.'
  },
  {
    q: 'Can KPL handle pre-shipment quality inspection and Amazon FBA carton labeling at origin?',
    a: 'Yes. Our origin hubs in Shenzhen, Yiwu, Mumbai, and Ho Chi Minh City feature specialized prep zones. Before export, our technicians inspect goods, apply Amazon FNSKU barcode stickers, insert user manuals, apply suffocation warning poly-bags, and build pallets to strict Amazon, Walmart WFS, or TikTok Shop requirements, ensuring 100% acceptance without penalties or warehouse rejections.'
  },
  {
    q: 'What is the difference between DDP (Delivered Duty Paid) and DDU (Delivered Duty Unpaid)?',
    a: 'With DDU, overseas buyers are often surprised by customs bills, handling fees, and delays before local post will release parcels, resulting in high return rates and poor brand reviews. With KPL DDP service, all import duties, taxes (like EU IOSS or UK VAT), and handling fees are calculated and paid upfront during order dispatch. Packages clear customs green channels immediately and are delivered to the recipient doorstep with zero fees requested.'
  },
  {
    q: 'How does KPL handle returns from overseas customers in North America and Europe?',
    a: 'KPL provides local domestic return hubs across the USA, UK, Germany, and Australia. Your customers receive a domestic prepaid return label to mail the package locally. Once received at our local hub, items are scanned, inspected, photographed, and graded. Depending on your instructions, items are either restocked in our local fulfillment center for future domestic orders, liquidated, or aggregated for bulk return.'
  },
  {
    q: 'What are the volume requirements and integration timelines for new e-commerce stores?',
    a: 'We support businesses ranging from growing DTC brands shipping 50 parcels per day to high-volume enterprises processing tens of thousands daily. Connecting your Shopify, WooCommerce, or marketplace store via our pre-built plugins or direct RESTful API takes less than 30 minutes, allowing automated order transmission and instant shipping label generation immediately.'
  }
];

