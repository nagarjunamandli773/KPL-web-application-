import {
  Truck,
  Snowflake,
  Thermometer,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  FileCheck2,
  Warehouse,
  Radio,
  Activity,
  Globe,
  Plane,
  Ship,
  Layers,
  Cpu
} from 'lucide-react';

export const coldChainHeroStats = [
  {
    label: 'Temperature Range',
    value: '-80°C to +25°C',
    sub: 'Cryogenic to Controlled Ambient',
    icon: Thermometer,
  },
  {
    label: 'Thermal Integrity SLA',
    value: '99.98%',
    sub: 'Zero Temperature Deviation',
    icon: ShieldCheck,
  },
  {
    label: 'Active Smart Reefers',
    value: '14,500+',
    sub: 'Continuous IoT Telematics',
    icon: Snowflake,
  },
  {
    label: 'Pharma Certifications',
    value: 'GDP & CEIV',
    sub: 'WHO & IATA Validated Lanes',
    icon: FileCheck2,
  },
];

export const temperatureZones = [
  {
    id: 'cryo',
    range: '-80°C to -20°C',
    label: 'Cryogenic & Ultra-Deep Freeze',
    badge: 'Ultra-Critical Biologics',
    badgeColor: '#0284C7',
    badgeBg: '#EFF6FF',
    accent: '#0284C7',
    targetCommodities: 'mRNA Vaccines, Cell & Gene Therapies, Clinical Trial Reagents, Active Blood Plasma',
    packagingTech: 'Liquid Nitrogen Dry Vapors, Carbon Dioxide Dry-Ice Bunkers, VIP Multi-Layer Shippers',
    telemetrySensor: 'Cryo-Probe Data Loggers (±0.1°C NIST Traceable Calibration)',
    idealTransport: 'Express Air Freighter with Active Envirotainer e2 Units / Rapid Highway Reefer',
    specs: [
      { k: 'Max Holdover Time', v: 'Up to 240 Hours Unassisted' },
      { k: 'Sensor Polling', v: 'Every 60 Seconds via Satellite IoT' },
      { k: 'Alarm Threshold', v: '±0.5°C Instant Control Tower Trigger' },
      { k: 'Packaging Qualification', v: 'ISTA 7D / 7E Summer & Winter Validated' }
    ]
  },
  {
    id: 'frozen',
    range: '-20°C to -10°C',
    label: 'Deep Frozen Cold Chain',
    badge: 'Frozen Biologics & Specialty Food',
    badgeColor: '#00BCD4',
    badgeBg: '#E0F7FA',
    accent: '#00BCD4',
    targetCommodities: 'Enzymatic Pharmaceutical Ingredients, Frozen Blood Fractions, High-Grade Sashimi Seafood, Premium Proteins',
    packagingTech: 'Carrier Transicold & Thermo King Smart Magnum Plus Reefers with Dual Compressor Redundancy',
    telemetrySensor: 'Multi-Point Air & Core Temperature Sensors + Remote Pre-Trip Inspection (e-PTI)',
    idealTransport: 'Integrated 40ft High-Cube Reefer Ocean Containers & Temperature-Controlled Rail Reefers',
    specs: [
      { k: 'Airflow Optimization', v: 'Bottom-Air Delivery 3,400 CFM' },
      { k: 'Genset Clip-On', v: 'Continuous Clip-On Generator During Rail & Road Transit' },
      { k: 'De-Humidification', v: 'Precision Low-Frost Defrost Cycle' },
      { k: 'Container Insulation', v: 'Polyurethane High-Density Cyclopentane Foam' }
    ]
  },
  {
    id: 'chilled',
    range: '+2°C to +8°C',
    label: 'Chilled Pharma & High-Value Perishables',
    badge: 'Most Widely Demanded Lane',
    badgeColor: '#059669',
    badgeBg: '#ECFDF5',
    accent: '#059669',
    targetCommodities: 'Insulin, Monoclonal Antibodies (mAbs), In-Vitro Diagnostics, Fresh Berries, Cherries, Specialty Dairy',
    packagingTech: 'Active Compressor Shippers (CSafe RAP / RKN, Envirotainer Releye) & Phase Change Materials (PCM)',
    telemetrySensor: 'Real-time Ambient, Return Air and Supply Air Differential Sensor Telemetry',
    idealTransport: 'Direct Airport Tarmac Reefer Dollies & Priority Berth Reefer Ocean Liners',
    specs: [
      { k: 'Thermal Stability', v: 'Within ±0.3°C Setpoint Window' },
      { k: 'Controlled Atmosphere', v: 'O2 & CO2 Gas Ratio Modulation (Extends Shelf-Life 3x)' },
      { k: 'Door Opening Alarm', v: 'Light & Magnetic Sensor Instant Detection' },
      { k: 'Tarmac Protection', v: 'Thermal Cargo Blankets for Ramp Transfers' }
    ]
  },
  {
    id: 'ambient',
    range: '+15°C to +25°C',
    label: 'Controlled Room Temperature (CRT)',
    badge: 'Standard Pharma & Specialty Cargo',
    badgeColor: '#D97706',
    badgeBg: '#FFFBEB',
    accent: '#D97706',
    targetCommodities: 'Oral Solid Tablets, Injectable Capsules, Medical Devices, Sensitive Cosmetics, Confectionery & Fine Wines',
    packagingTech: 'Insulated Thermal Liners, Pallet Quilts, Dual-Zone Refrigerated Box Trailers',
    telemetrySensor: 'Continuous Real-Time Bluetooth BLE Beacon Mesh Network',
    idealTransport: 'Scheduled Climate-Controlled Consolidation Less-than-Truckload (LTL) & Air Freight CRT',
    specs: [
      { k: 'Thermal Buffering', v: 'Prevents Thermal Shock during Seasonal Crossings' },
      { k: 'Humidity Regulation', v: 'Maintained below 60% Relative Humidity' },
      { k: 'Security Compliance', v: 'TAPA TSR Level 1 Anti-Theft GPS Enclosure' },
      { k: 'Auditing', v: 'Continuous GDP Electronic Trip Log Batch Release' }
    ]
  }
];

export const coldChainOrigins = [
  { code: 'NLRTM', name: 'Port of Rotterdam Reefer Terminal', country: 'Netherlands', flag: '🇳🇱' },
  { code: 'BEANR', name: 'Port of Antwerp-Bruges Cold Store', country: 'Belgium', flag: '🇧🇪' },
  { code: 'INBOM', name: 'Mumbai / JNPT Perishable Cold Hub', country: 'India', flag: '🇮🇳' },
  { code: 'DEFRK', name: 'Frankfurt Airport CargoCity Pharma Hub', country: 'Germany', flag: '🇩🇪' },
  { code: 'SGSIN', name: 'Singapore Tuas Biomedical Cold Hub', country: 'Singapore', flag: '🇸🇬' },
  { code: 'USCHI', name: 'Chicago O\'Hare International Healthcare Center', country: 'USA', flag: '🇺🇸' },
  { code: 'CHBSL', name: 'Basel Bio-Pharma Cold Gateway', country: 'Switzerland', flag: '🇨🇭' },
];

export const coldChainDestinations = [
  { code: 'USNYC', name: 'New York / New Jersey Port & JFK Pharma Gateway', country: 'USA', flag: '🇺🇸' },
  { code: 'DEHAM', name: 'Port of Hamburg Reefer Center', country: 'Germany', flag: '🇩🇪' },
  { code: 'AEJEA', name: 'Jebel Ali Cold Chain Logistics Center', country: 'UAE', flag: '🇦🇪' },
  { code: 'JPYOK', name: 'Yokohama / Tokyo Narita Cold Hub', country: 'Japan', flag: '🇯🇵' },
  { code: 'AUSYD', name: 'Sydney Airport & Port Botany Reefer Terminal', country: 'Australia', flag: '🇦🇺' },
  { code: 'INDEL', name: 'Delhi Indira Gandhi Air Cargo Pharma Hub', country: 'India', flag: '🇮🇳' },
  { code: 'GBFXT', name: 'London Heathrow / Felixstowe Temp Control Hub', country: 'UK', flag: '🇬🇧' },
];

export const coldChainServiceModes = [
  {
    id: 'ocean-reefer',
    name: 'Ocean Reefer FCL (Smart Container)',
    icon: Ship,
    equipment: '40ft High-Cube Smart Reefer with Genset',
    tempRange: '-35°C to +30°C',
    transitSample: '18 - 22 Days',
    rateEstimate: '$3,850 - $4,600 / Container',
    features: [
      'Pre-trip inspected (e-PTI) Carrier Transicold PrimeLINE unit',
      'Continuous dedicated clip-on diesel generator for highway/rail drayage',
      'Controlled Atmosphere (CA) equipped for extended perishables shelf life',
      'Guaranteed reefer plug-in priority at origins, transshipment hubs, and destination berths'
    ]
  },
  {
    id: 'air-pharma',
    name: 'Air Cargo Priority Pharma Express',
    icon: Plane,
    equipment: 'Envirotainer e2 / CSafe RAP Active Aircraft Container',
    tempRange: '-20°C to +25°C',
    transitSample: '1 - 3 Days',
    rateEstimate: '$8.40 - $12.50 / kg',
    features: [
      'Active compressor-driven thermal aircraft unit with built-in battery power',
      'Tarmac thermal dolly transport ensuring zero exposure during aircraft loading',
      'IATA CEIV Pharma certified handling with priority customs inspection clearance',
      'End-to-end dry-ice recharging facilities at key global hub airports'
    ]
  },
  {
    id: 'inland-reefer',
    name: 'Dedicated Inland Reefer Trailer Fleet',
    icon: Truck,
    equipment: '53ft Multi-Temperature Refrigerated Box Trailer',
    tempRange: '-25°C to +20°C',
    transitSample: 'Same-Day / Next-Day',
    rateEstimate: '$2.85 - $3.45 / Mile',
    features: [
      'Multi-compartment movable bulkhead trailers supporting dual-temp cargo simultaneously',
      'Thermo King Precedent S-600 Tier 4 Final ultra-low emission refrigeration engines',
      'Dual remote fuel & battery telematics preventing unexpected unit shutdowns',
      'Team-driver continuous haul avoiding mandatory driver rest temperature stops'
    ]
  }
];

export const coldChainPillars = [
  {
    id: 'gdp-ceiv-compliance',
    title: 'GDP & CEIV Pharma Qualified Lanes',
    tagline: 'Stringent pharmaceutical regulatory compliance adhering to WHO and EU Guidelines.',
    icon: ShieldCheck,
    accent: '#00BCD4',
    features: [
      'Lane risk assessments conducted across 1,200+ global trade corridors',
      'Formal Temperature Mapping and Thermal Profiling documentation for every vessel and trailer',
      '21 CFR Part 11 electronic data logs providing unbroken audit provenance for health authorities',
      'Dedicated Qualified Person (QP) and Good Distribution Practice (GDP) trained handlers'
    ]
  },
  {
    id: 'active-passive-packaging',
    title: 'Advanced Active & Passive Packaging',
    tagline: 'State-of-the-art cold preservation containers engineered for extreme ambient climates.',
    icon: Snowflake,
    accent: '#0284C7',
    features: [
      'Active climate units: Envirotainer Releye, CSafe RAP/RKN with rechargeable electric compressors',
      'Passive shippers: Vacuum Insulated Panels (VIP) and Phase Change Materials (PCM) up to 168h hold',
      'Liquid nitrogen dry-vapor dewars for gene therapy transit maintaining -150°C to -196°C safely',
      'Certified dry-ice top-up and replenishment hubs located across major international crossroads'
    ]
  },
  {
    id: 'iot-telematics-radar',
    title: '24/7 Control Tower & Predictive Telematics',
    tagline: 'Live satellite monitoring with automated 15-minute emergency escalation protocols.',
    icon: Radio,
    accent: '#059669',
    features: [
      'Continuous wireless sensor feeds measuring internal core temp, supply air, ambient and humidity',
      'Light and magnetic container door sensors detecting unauthorized openings instantly',
      'AI predictive thermal algorithms forecasting temperature drift 4 hours before threshold is breached',
      'Dedicated 24/7/365 Cold Chain Intervention Squad with immediate emergency technician dispatch'
    ]
  },
  {
    id: 'port-priority-handling',
    title: 'Priority Reefer Plug-In & Port Pre-Cooling',
    tagline: 'Eliminating container dwell risks with pre-booked electrical plugs and pre-cooling cycles.',
    icon: Warehouse,
    accent: '#EA580C',
    features: [
      'Mandatory 24-hour cargo pre-cooling prior to container stuffing to remove field heat',
      'Dedicated power plug reservations at seaport container yards with live voltage monitoring',
      'Direct vessel-to-truck rapid discharge agreements bypassing slow general terminal stacks',
      'Backup diesel generator sets (gensets) mounted on every cross-country rail and highway move'
    ]
  }
];

export const coldChainCertifications = [
  { name: 'WHO GDP Certified', standard: 'Good Distribution Practice for Healthcare Products', badge: 'Global Gold Standard' },
  { name: 'IATA CEIV Pharma', standard: 'Center of Excellence for Independent Validators in Pharma', badge: 'Aviation Validated' },
  { name: 'ISO 9001:2015', standard: 'Quality Management System for Temperature Transport', badge: 'Audited Annually' },
  { name: 'FDA 21 CFR Part 11', standard: 'Electronic Records and Signatures Compliance', badge: 'US Compliant' },
  { name: 'HACCP Certified', standard: 'Hazard Analysis Critical Control Point Food Safety', badge: 'Perishables Safe' },
  { name: 'TAPA TSR Level 1', standard: 'Trucking Security Requirements for High-Value Healthcare', badge: 'Anti-Theft High Security' },
];

export const coldChainFaqs = [
  {
    q: 'What contingency protocols are deployed if a reefer container loses electrical power during transit?',
    a: 'Every KPL Smart Reefer is equipped with dual-fuel hybrid capability and continuous telemetry. If port or vessel power is interrupted, our system triggers an automated alert to our 24/7 Control Tower within 60 seconds. High-density cyclopentane insulation maintains safe internal temperature for up to 12 hours unassisted. In addition, backup diesel generator sets (gensets) with automatic failover engines are mounted on long-haul legs, and on-dock emergency power intervention squads are mobilized within 15 minutes.'
  },
  {
    q: 'How does KPL validate and document temperature compliance for pharmaceutical regulatory audits?',
    a: 'We operate in strict accordance with WHO Good Distribution Practice (GDP) and FDA 21 CFR Part 11 standards. High-precision NIST-traceable wireless sensors measure internal cargo and ambient temperatures throughout the voyage. Upon delivery, the customer receives an automated, tamper-proof cryptographic PDF audit certificate detailing minute-by-minute temperature graphs, GPS coordinates, door opening timestamps, and quality certification sign-offs.'
  },
  {
    q: 'What is the difference between active and passive cold chain packaging?',
    a: 'Active packaging solutions (such as Envirotainer and CSafe units) utilize motorized compressors, heating elements, and rechargeable battery banks to actively regulate internal temperatures regardless of outside weather conditions. Passive systems use high-grade insulation (like Vacuum Insulated Panels) combined with pre-conditioned Phase Change Materials (PCM) or dry ice to absorb heat. Active units are preferred for multi-day air cargo and multi-pallet shipments, while passive shippers are ideal for smaller parcel biologics.'
  },
  {
    q: 'Why is pre-cooling essential before loading fresh agricultural produce into reefer containers?',
    a: 'Reefer containers are engineered to maintain temperature, not rapidly extract latent heat from warm bulk cargo. Loading uncooled agricultural produce creates an internal thermal surge, causing condensation, moisture build-up, and mold growth. KPL enforces mandatory pre-cooling at our origin cold stores using hydro-cooling or forced-air cooling chambers to bring produce to its exact target pulp temperature prior to loading, guaranteeing maximum freshness.'
  },
  {
    q: 'How are cryogenic and dry-ice shipments handled across international air corridors?',
    a: 'Dry ice is classified by IATA as a Dangerous Good (UN 1845) due to carbon dioxide sublimation. KPL logistics teams ensure full dangerous goods declarations (DGD), net quantity labeling, and venting compliance. We maintain certified dry-ice re-icing hubs across international stopover airports (including Frankfurt, Dubai, Singapore, and Chicago) to top up refrigerant bunkers during transit, ensuring unbroken holdover times for gene therapies and mRNA vaccines.'
  }
];

