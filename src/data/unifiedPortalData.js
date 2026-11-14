import {
  Cpu,
  Globe,
  Ship,
  Plane,
  Truck,
  TrainFront,
  ShieldCheck,
  Zap,
  BarChart3,
  Clock,
  Layers,
  FileCheck2,
  Lock,
  ArrowRight,
  Database,
  Cloud,
  CheckCircle2,
  Radio,
  Sliders,
  Sparkles
} from 'lucide-react';

export const portalHeroStats = [
  {
    label: 'Integrated Carriers',
    value: '350+',
    sub: 'Global Ocean & Air Lines',
    icon: Globe,
  },
  {
    label: 'Telemetry Latency',
    value: '< 1.2s',
    sub: 'Live AIS Satellite Polling',
    icon: Radio,
  },
  {
    label: 'Active Shipments',
    value: '48,900+',
    sub: 'Real-Time Monitored',
    icon: Ship,
  },
  {
    label: 'Instant Spot Booking',
    value: '< 45 Sec',
    sub: 'Multi-Carrier Rate Sync',
    icon: Zap,
  },
];

export const corePillars = [
  {
    id: 'booking-engine',
    title: 'Multi-Carrier Digital Booking Engine',
    tagline: 'Algorithmic rate discovery & guaranteed capacity across 350+ global carriers.',
    icon: Sliders,
    accent: '#EA580C',
    features: [
      'Instant spot rate benchmark across premier ocean liners and air freight fleets',
      'Contracted volume rates & allocations automatically synced with ERP purchase orders',
      'One-click multi-modal booking generation with instant booking confirmation numbers (BCN)',
      'Automated container equipment release orders and empty haul dispatch coordination'
    ]
  },
  {
    id: 'realtime-tracking',
    title: 'Live Fleet Radar & IoT Container Telemetry',
    tagline: 'Military-grade AIS satellite vessel tracking and live environmental condition telemetry.',
    icon: Radio,
    accent: '#D97706',
    features: [
      'Live AIS satellite vessel geolocation and dynamic nautical route trajectory projection',
      'Predictive arrival estimation (AI ETA) factoring in canal congestion and port dwell times',
      'Cold-chain IoT telemetry: continuous live monitoring of temperature, humidity, tilt and shock',
      'Automated geofence milestone triggers upon entry into terminal yards, berths and customs zones'
    ]
  },
  {
    id: 'edocumentation',
    title: 'Automated Customs & Smart e-Documentation',
    tagline: 'Frictionless digital Bills of Lading, smart e-AWB, and zero-paper customs clearing.',
    icon: FileCheck2,
    accent: '#C2410C',
    features: [
      'Electronic Bill of Lading (e-BL) with tamper-proof cryptographic audit provenance',
      'Automated Commercial Invoice, Packing List & Certificate of Origin digital generation',
      'Direct customs agency EDI electronic filing (US CBP ACE, EU Import Control System 2, India ICEGATE)',
      'Automated Harmonized System (HS Code) tariff classification with 99.4% accuracy'
    ]
  },
  {
    id: 'exception-ai',
    title: 'Predictive Exception Management & Control Tower',
    tagline: 'Machine learning mitigation engine to prevent demurrage, detention and supply chain delays.',
    icon: Cpu,
    accent: '#082653',
    features: [
      'Proactive delay early warning alerts up to 72 hours prior to carrier schedule slip',
      'Automated dynamic re-routing recommendations when feeder ports experience severe congestion',
      'Port dwell-time analytics and automatic detention/demurrage free-time expiration countdown',
      '24/7 dedicated control tower operations team standing by for immediate manual intervention'
    ]
  }
];

export const availableOrigins = [
  { code: 'INNSA', name: 'Nhava Sheva (JNPT), Mumbai', country: 'India', flag: '🇮🇳' },
  { code: 'CNSHA', name: 'Port of Shanghai', country: 'China', flag: '🇨🇳' },
  { code: 'AEJEA', name: 'Jebel Ali, Dubai', country: 'UAE', flag: '🇦🇪' },
  { code: 'NLRTM', name: 'Port of Rotterdam', country: 'Netherlands', flag: '🇳🇱' },
  { code: 'SGSIN', name: 'Port of Singapore', country: 'Singapore', flag: '🇸🇬' },
  { code: 'INDEL', name: 'Indira Gandhi Air Hub, Delhi', country: 'India', flag: '🇮🇳' },
  { code: 'USNYC', name: 'Port of New York / New Jersey', country: 'USA', flag: '🇺🇸' },
];

export const availableDestinations = [
  { code: 'USLAX', name: 'Port of Los Angeles / Long Beach', country: 'USA', flag: '🇺🇸' },
  { code: 'DEHAM', name: 'Port of Hamburg', country: 'Germany', flag: '🇩🇪' },
  { code: 'GBFXT', name: 'Port of Felixstowe / London', country: 'UK', flag: '🇬🇧' },
  { code: 'BEANR', name: 'Port of Antwerp-Bruges', country: 'Belgium', flag: '🇧🇪' },
  { code: 'JPYOK', name: 'Yokohama / Tokyo Gateway', country: 'Japan', flag: '🇯🇵' },
  { code: 'AUMEL', name: 'Port of Melbourne', country: 'Australia', flag: '🇦🇺' },
  { code: 'DEFRK', name: 'Frankfurt CargoCity (FRA)', country: 'Germany', flag: '🇩🇪' },
];

export const mockCarrierQuotes = [
  {
    id: 'quote-1',
    carrier: 'Maersk Line',
    logoText: 'MAERSK',
    vesselService: 'AE-19 Lion Express',
    mode: 'Ocean FCL (40ft High Cube)',
    transitDays: '18 - 21 Days',
    departure: 'Departs: Every Tue & Fri',
    reliability: '98.8%',
    carbonCO2: '412 kg CO2e / TEU',
    rate: '$1,980',
    originalRate: '$2,350',
    badge: 'Best Value & Reliability',
    routeType: 'Direct Nautical Lane',
    spotValidity: 'Valid for 72h',
  },
  {
    id: 'quote-2',
    carrier: 'MSC Shipping',
    logoText: 'MSC',
    vesselService: 'Tiger Silk Way Service',
    mode: 'Ocean FCL (40ft High Cube)',
    transitDays: '21 - 24 Days',
    departure: 'Departs: Every Wednesday',
    reliability: '96.4%',
    carbonCO2: '438 kg CO2e / TEU',
    rate: '$1,840',
    originalRate: '$2,190',
    badge: 'Lowest Market Rate',
    routeType: '1 Transshipment (Salalah)',
    spotValidity: 'Valid for 48h',
  },
  {
    id: 'quote-3',
    carrier: 'CMA CGM Group',
    logoText: 'CMA CGM',
    vesselService: 'FAL-1 Global French Line',
    mode: 'Ocean FCL (40ft High Cube)',
    transitDays: '19 - 22 Days',
    departure: 'Departs: Every Saturday',
    reliability: '97.2%',
    carbonCO2: '385 kg CO2e (LNG Fuelled)',
    rate: '$2,090',
    originalRate: '$2,420',
    badge: 'Eco-Green LNG Fleet',
    routeType: 'Direct Nautical Lane',
    spotValidity: 'Valid for 96h',
  },
  {
    id: 'quote-4',
    carrier: 'Emirates SkyCargo / KPL Air',
    logoText: 'SKYCARGO',
    vesselService: 'EK-Priority Air Freight',
    mode: 'Air Cargo Priority Express',
    transitDays: '2 - 3 Days',
    departure: 'Departs: Daily Scheduled',
    reliability: '99.6%',
    carbonCO2: '1,120 kg CO2e / Ton',
    rate: '$4.25 / kg',
    originalRate: '$5.10 / kg',
    badge: 'Fastest Transit Time',
    routeType: 'Direct Air Corridor',
    spotValidity: 'Instant Lock',
  },
];

export const liveTelemetryShipments = [
  {
    id: 'GL-882104-FCL',
    origin: 'Nhava Sheva (JNPT), Mumbai',
    destination: 'Port of Rotterdam, Netherlands',
    carrier: 'Maersk Line',
    vessel: 'Maersk Mc-Kinney Møller (IMO 9619907)',
    mode: 'Ocean FCL (40ft High Cube)',
    containerNo: 'MSKU-8849201',
    status: 'In Transit',
    statusColor: '#D97706',
    progress: 72,
    speed: '18.6 Knots',
    coordinates: '27° 52\' N, 34° 19\' E (Suez Canal Northern Approach)',
    eta: '4 Days 12 Hrs (Nov 09, 2026)',
    temperature: 'Ambient (23.2°C)',
    humidity: '54% RH',
    shock: '0.02g (Nominal)',
    lastPing: '2 mins ago via Satellite AIS',
    currentMilestone: 'Navigating Gulf of Suez approach lane toward Port Said',
  },
  {
    id: 'GL-492011-AIR',
    origin: 'Dubai International (DXB), UAE',
    destination: 'Frankfurt CargoCity (FRA), Germany',
    carrier: 'Emirates SkyCargo',
    vessel: 'Boeing 777F (Flight EK-9921)',
    mode: 'Air Cargo Priority Pharma',
    containerNo: 'AWB #176-9938201',
    status: 'Customs Cleared',
    statusColor: '#EA580C',
    progress: 94,
    speed: '495 Knots',
    coordinates: '50° 02\' N, 08° 34\' E (Frankfurt Terminal 1 Airside)',
    eta: 'Today at 18:30 CET',
    temperature: '4.2°C (Cold-Chain Verified)',
    humidity: '42% RH',
    shock: '0.00g (Pristine)',
    lastPing: 'Real-time ground telematics',
    currentMilestone: 'Customs import audit cleared — staged for final mile refrigerated haul',
  },
  {
    id: 'GL-730194-LCL',
    origin: 'Port of Shanghai, China',
    destination: 'Port of Los Angeles (Pier 400), USA',
    carrier: 'MSC Mediterranean',
    vessel: 'MSC Gülsün (IMO 9839438)',
    mode: 'Ocean LCL Consolidated Cargo',
    containerNo: 'MEDU-3301982',
    status: 'Berthing at Port of LA',
    statusColor: '#C2410C',
    progress: 88,
    speed: '3.2 Knots (Tug Escort)',
    coordinates: '33° 43\' N, 118° 15\' W (San Pedro Bay Channel)',
    eta: 'Tomorrow at 06:00 PST',
    temperature: 'Ambient (19.8°C)',
    humidity: '61% RH',
    shock: '0.04g (Nominal)',
    lastPing: 'Port VTS radar beacon',
    currentMilestone: 'Pilot onboard — docking at Pier 400 container terminal quay 3',
  },
  {
    id: 'GL-194028-RL',
    origin: 'Hamburg Waltershof, Germany',
    destination: 'Milan Segrate Intermodal Hub, Italy',
    carrier: 'DB Cargo Logistics',
    vessel: 'Intermodal Freight Train ITX-4092',
    mode: 'Cross-Border Rail Container',
    containerNo: 'DBCU-5509214',
    status: 'On Rail Corridor',
    statusColor: '#082653',
    progress: 52,
    speed: '85 km/h',
    coordinates: '47° 16\' N, 11° 24\' E (Brenner Alpine Transit Pass)',
    eta: 'Tomorrow at 09:15 CET',
    temperature: 'Ambient (14.5°C)',
    humidity: '48% RH',
    shock: '0.08g (Normal Rail Vibration)',
    lastPing: 'European Rail Traffic Management (ERTMS)',
    currentMilestone: 'Traversing Austrian alpine rail corridor toward Italian customs terminal',
  },
];

export const platformIntegrations = [
  { name: 'SAP S/4HANA', type: 'Enterprise ERP', badge: 'Certified Native Connector' },
  { name: 'Oracle Cloud SCM', type: 'Supply Chain Cloud', badge: 'Automated Purchase Order Sync' },
  { name: 'Microsoft Dynamics 365', type: 'Corporate ERP', badge: 'Bi-Directional Webhooks' },
  { name: 'CargoWise One', type: 'Global Freight Forwarding', badge: 'Universal EDI Protocol' },
  { name: 'NetSuite OneWorld', type: 'Cloud Financials & Logistics', badge: 'Real-Time Invoice Sync' },
  { name: 'Blue Yonder TMS', type: 'Transport Management', badge: 'Dynamic Rate Injection' },
];

export const portalFaqs = [
  {
    q: 'How does the Unified Digital Portal connect with multiple carriers simultaneously?',
    a: 'Our portal utilizes direct RESTful microservice APIs and industry-standard EDI 301, 304, 310, and 214 protocols connected directly to over 350 ocean shipping lines, air cargo carriers, and road transport networks. When you enter route parameters, our booking algorithm queries real-time capacity and rates across all carrier lanes in sub-second intervals.'
  },
  {
    q: 'Can our enterprise integrate our existing SAP or Oracle ERP with the portal?',
    a: 'Yes. KPL Unified Digital Portal features pre-built, certified enterprise connectors for SAP S/4HANA, Oracle SCM, Microsoft Dynamics 365, and NetSuite. Your logistics and procurement teams can create purchase orders that automatically trigger booking requests and return live milestone tracking directly into your existing ERP screens.'
  },
  {
    q: 'How accurate is the real-time satellite tracking and AI arrival prediction?',
    a: 'We combine terrestrial AIS, satellite AIS from global constellation partners, and carrier terminal operating system (TOS) feeds with historical nautical machine learning models. Our system recalculates vessel ETAs dynamically considering weather fronts, maritime choke point queuing (such as Suez and Panama), and berth wait times, delivering 98.8% ETA accuracy.'
  },
  {
    q: 'How does digital customs clearing and electronic Bill of Lading (e-BL) work?',
    a: 'The portal is compliant with the Digital Container Shipping Association (DCSA) standards and UN/CEFACT electronic documentation frameworks. Our system automates generation of legal e-BLs, smart e-AWBs, and submits electronic declarations directly to customs portals worldwide (such as US CBP ACE, EU ICS2, and India ICEGATE).'
  },
  {
    q: 'What cold-chain and cargo safety monitoring capabilities are built into the platform?',
    a: 'For temperature-sensitive and high-value cargo, we deploy connected IoT smart seal sensors inside containers. The Unified Digital Portal visualizes live temperature, relative humidity, door openings, tilt, and shock. If temperatures deviate by even 0.5°C from set parameters, instant SMS, email, and automated carrier escalation alerts are triggered.'
  }
];

