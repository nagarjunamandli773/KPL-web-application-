import {
  Laptop,
  Cpu,
  ShieldCheck,
  Zap,
  Lock,
  Layers,
  Server,
  Radio,
  CheckCircle2,
  Clock,
  RotateCcw,
  Sparkles,
  Award,
  Globe,
  Truck,
  Box,
  FileCheck2,
  Gauge,
  Activity,
  Workflow
} from 'lucide-react';

export const techHeroStats = [
  {
    label: 'TAPA Security Protocol',
    value: '100% Level A',
    sub: 'Armed Escort & Biometric Telematics Tracking',
    icon: ShieldCheck,
    accent: '#EA580C',
  },
  {
    label: 'High-Value Cargo Moved',
    value: '$4.8B+ / yr',
    sub: 'Microchips, AI Server Racks & Consumer Tech',
    icon: Laptop,
    accent: '#C2410C',
  },
  {
    label: 'Cleanroom ESD Control',
    value: '0.00% Defect',
    sub: 'ANSI/ESD S20.20-2021 Nitrogen Purge Sealed',
    icon: Zap,
    accent: '#D97706',
  },
  {
    label: 'Tarmac Direct Air SLA',
    value: '< 45 mins',
    sub: 'Fab-to-Aircraft Priority Bonded Corridors',
    icon: Clock,
    accent: '#FF6F00',
  },
];

export const techServiceTiers = [
  {
    id: 'tier-semiconductor-wafer',
    name: 'Precision Semiconductor & 300mm Silicon Wafer Logistics',
    turnaround: 'Dedicated Fab-to-Fab Secure Air Bridge',
    fleetType: 'Nitrogen-Purged Shock-Isolated Air-Ride Units',
    qualityStandard: 'Class 100 Cleanroom & Zero-Vibration FOUP Carriers',
    penaltyProtection: '$10M Single-Consignment Value Guarantee',
    description: 'Ultra-pure transportation of unpatterned and patterned silicon wafers, photolithography reticles, and microchip packaging between foundries and testing plants in Taiwan, Korea, Japan, and the USA.',
    image: '/electronics.jpg',
    badge: 'Class 100 Cleanroom & Nitrogen Sealed',
    badgeColor: '#C2410C',
    badgeBg: '#FFF7ED',
    highlights: [
      'FOUP and FOSB wafer carriers secured in active vibration-damped pneumatic cradles',
      'Continuous dry nitrogen purge maintaining <5% relative humidity preventing crystal oxidation',
      'Tarmac-direct aircraft belly apron transfer bypassing standard cargo sorting warehouses',
      'Continuous 3-axis triaxial accelerometer logging verifying sub-0.5G impact thresholds'
    ]
  },
  {
    id: 'tier-server-datacenter',
    name: 'Hyperscale AI Server Rack & Cloud Infrastructure Logistics',
    turnaround: 'Turnkey Datacenter White-Glove Deployment',
    fleetType: 'Heavy Hydraulic Tail-Lift Specialized Autoracks',
    qualityStandard: 'Zero-Tilt Anti-Static Enclosed Rigging',
    penaltyProtection: 'Comprehensive Enterprise Hardware Bond',
    description: 'Pre-racked, pre-cabled NVIDIA HGX GPU clusters, high-density blade servers, and modular enterprise storage arrays delivered directly onto live datacenter raised flooring with zero transit strain.',
    image: '/industrial.jpg',
    badge: 'White-Glove AI Server Deployment',
    badgeColor: '#C2410C',
    badgeBg: '#FFF7ED',
    highlights: [
      'Pneumatic air-ride van trailers equipped with internal overhead gantry rigging',
      'Real-time tilt, humidity, and temperature IoT sensor beacons linked to client portal',
      'Class A security clearance drivers trained in server de-crating and floor positioning',
      'Pre-scheduled off-peak dock reservations at major tier-4 global datacenter facilities'
    ]
  },
  {
    id: 'tier-consumer-electronics',
    name: 'High-Velocity Consumer Tech, Mobile & Wearable Devices',
    turnaround: 'Factory-to-Shelf Global Air Express Injection',
    fleetType: 'Charter Boeing 777F & Bonded High-Cube Fleets',
    qualityStandard: 'Tamper-Evident Geofenced Smart-Seal Verification',
    penaltyProtection: 'Guaranteed Worldwide Launch Day Delivery',
    description: 'Synchronized worldwide product launch distribution for smartphones, laptops, smart audio devices, and consumer wearables from Tier-1 contract manufacturing hubs to international retail channels.',
    image: '/air-freight.jpg',
    badge: 'Tamper-Evident GPS Biometric Seals',
    badgeColor: '#B45309',
    badgeBg: '#FFFBEB',
    highlights: [
      'Dedicated scheduled freighter charters for peak Q4 holiday and worldwide announcement launches',
      'Bonded electronic customs pre-clearance with EDI pre-lodgment eliminating port dwell',
      'Smart biometric electronic padlock seals with remote GSM geo-fencing authorization',
      'Direct-to-store retail replenishment and e-commerce micro-fulfillment center injection'
    ]
  },
  {
    id: 'tier-rma-reverse',
    name: 'Reverse Logistics, Serialized RMA & Certified Circular Recovery',
    turnaround: '24-Hour Return Triage & Diagnostic Sorting',
    fleetType: 'Consolidated LTL Reverse Logistics Network',
    qualityStandard: 'NIST SP 800-88 Cryptographic Sanitization',
    penaltyProtection: '100% Chain-of-Custody Digital Audit',
    description: 'End-to-end management of defective components, warranty returns, customer exchanges, and compliant e-waste reclamation with component-level serialized barcode tracking and data erasure.',
    image: '/track-shipment-hero.jpg',
    badge: 'NIST 800-88 Data Wipe & Circular R2v3',
    badgeColor: '#EA580C',
    badgeBg: '#FFF7ED',
    highlights: [
      'Automated RMA barcode generation with consumer doorstep pre-paid shipping kits',
      'Component-level diagnostic triage testing separating warranty repairs from scrap',
      'DoD 5220.22-M and NIST SP 800-88 certified cryptographic disk and SSD destruction',
      'R2v3 and e-Stewards certified raw precious metal reclamation from printed circuit boards'
    ]
  }
];

export const techTransportModes = [
  {
    id: 'mode-tapa-convoy',
    name: 'TAPA Level-1 Armored Dedicated Convoy',
    protocol: 'Dual-Driver Team • Armed Security Escort',
    sla: 'Continuous GPS Telematics Tracking',
    bufferLead: 'Zero Unauthorized Stops Permitted',
    inspection: 'Biometric Smart-Lock Door Seals',
    suitability: 'High-Value Microprocessors, GPU Clusters & Gold-Bonded Dies',
    costIndex: 'Maximum Asset Protection'
  },
  {
    id: 'mode-air-charter',
    name: 'Tarmac-Direct Air Cargo Freighter Bridge',
    protocol: 'Nose-Loading Boeing 777F / 747-8F Charters',
    sla: 'Sub-45m Apron Customs Handover',
    bufferLead: 'Active Temperature & Shock Monitoring',
    inspection: 'Cleanroom Sealed Air ULD Containers',
    suitability: 'Critical Semiconductor Fab Shipments & Worldwide Device Launches',
    costIndex: 'Optimal Transit Speed'
  },
  {
    id: 'mode-bonded-intermodal',
    name: 'ESD-Shielded Climate Intermodal Carrier',
    protocol: 'Anti-Static Palletizing with Desiccant Barriers',
    sla: 'Scheduled Sealed Rail & Road Corridors',
    bufferLead: 'Humidity Regulated (<40% RH)',
    inspection: 'RFID Pallet Gate Scans & Sensor Check',
    suitability: 'Volume Finished Electronics, Power Adapters & Commercial Hardware',
    costIndex: 'Maximum Freight Efficiency'
  }
];

export const techVolumeScales = [
  {
    id: 'vol-prototype-wafer',
    name: 'Prototype & High-Value Wafer Run',
    units: '1 - 250 kg / $10M+ Value',
    bufferFootprint: 'Class 100 Cleanroom Vault',
    dedicatedShuttles: 'Armored Dedicated Van Escort',
    ediSupport: 'Direct API Fab MES Integration'
  },
  {
    id: 'vol-series-hardware',
    name: 'Commercial Series Production',
    units: '10,000 - 100,000 Units / mo',
    bufferFootprint: '5,000 m² TAPA-A Bonded Facility',
    dedicatedShuttles: 'Dedicated Daily Scheduled Fleets',
    ediSupport: 'Automated EDI 856 / 850 ASN Feed'
  },
  {
    id: 'vol-global-launch',
    name: 'Global Omnichannel Launch',
    units: '1,000,000+ Units / quarter',
    bufferFootprint: 'Multi-Hub Global Distribution Network',
    dedicatedShuttles: 'Full Aircraft Charter Program',
    ediSupport: 'Enterprise SAP / Oracle ERP Bridge'
  }
];

export const techPillars = [
  {
    id: 'pillar-tapa-security',
    title: 'TAPA Level-A Anti-Theft Security Architecture',
    tagline: 'Multi-Layered Asset Protection for Ultra-High-Value Electronics Cargo',
    icon: ShieldCheck,
    image: '/electronics.jpg',
    metric: '100% Zero-Loss Track Record',
    description: 'High-value tech components are the primary target for cargo theft syndicates. We implement TAPA FSR Level A certified facilities and TSR Level 1 trucking protocols featuring covert cellular trackers, route geofencing, and remote engine shutoffs.',
    desc: 'High-value tech components are the primary target for cargo theft syndicates. We implement TAPA FSR Level A certified facilities and TSR Level 1 trucking protocols featuring covert cellular trackers, route geofencing, and remote engine shutoffs.',
    points: [
      'Dual-driver non-stop convoys with dedicated armed satellite chase vehicles',
      'Electronic biometric locking systems opened only via remote command from KPL Security Operations Center',
      'Secondary covert cellular and satellite beacons embedded inside master carton packaging',
      '24/7 real-time monitoring of trailer door sensors, route adherence, and unauthorized stops'
    ],
    features: [
      'Dual-driver non-stop convoys with dedicated armed satellite chase vehicles',
      'Electronic biometric locking systems opened only via remote command from KPL Security Operations Center',
      'Secondary covert cellular and satellite beacons embedded inside master carton packaging',
      '24/7 real-time monitoring of trailer door sensors, route adherence, and unauthorized stops'
    ],
    accentColor: '#EA580C',
    badgeText: 'TAPA Level-A Certified'
  },
  {
    id: 'pillar-cleanroom-esd',
    title: 'ANSI/ESD S20.20 Cleanroom & Microclimate Control',
    tagline: 'Zero Electrostatic Discharge & Hermetic Barrier Protection for Silicon Wafers',
    icon: Zap,
    image: '/industrial.jpg',
    metric: '0.00% Electrostatic Loss',
    description: 'Sub-3nm microchips and 300mm silicon wafers cannot tolerate electrostatic discharge or particulate contamination. Our handling centers feature grounded dissipative flooring, ionized air showers, and nitrogen-purged moisture barrier packaging.',
    desc: 'Sub-3nm microchips and 300mm silicon wafers cannot tolerate electrostatic discharge or particulate contamination. Our handling centers feature grounded dissipative flooring, ionized air showers, and nitrogen-purged moisture barrier packaging.',
    points: [
      'ANSI/ESD S20.20-2021 certified static-dissipative workstations and conductive ground grids',
      'Hermetic nitrogen purging maintaining relative humidity under 5% to prevent wafer oxidation',
      'Triaxial accelerometer data loggers reporting shock, vibration, and angular tilt in real time',
      'Class 100 cleanroom air filtration for inspection, re-kitting, and packaging changeovers'
    ],
    features: [
      'ANSI/ESD S20.20-2021 certified static-dissipative workstations and conductive ground grids',
      'Hermetic nitrogen purging maintaining relative humidity under 5% to prevent wafer oxidation',
      'Triaxial accelerometer data loggers reporting shock, vibration, and angular tilt in real time',
      'Class 100 cleanroom air filtration for inspection, re-kitting, and packaging changeovers'
    ],
    accentColor: '#C2410C',
    badgeText: 'ANSI/ESD S20.20 Protected'
  },
  {
    id: 'pillar-ai-servers',
    title: 'Hyperscale AI Server Racks & Datacenter Deployments',
    tagline: 'Pneumatic Air-Ride Transport for NVIDIA HGX, Supercomputing & Blade Arrays',
    icon: Server,
    image: '/air-freight.jpg',
    metric: 'Pre-Cabled White Glove Delivery',
    description: 'Modern AI server racks weigh up to 3,500 lbs and contain hundreds of thousands of dollars in sensitive GPUs and high-speed optics. We provide specialized hydraulic tailgates, stair-climbers, and anti-vibration transit.',
    desc: 'Modern AI server racks weigh up to 3,500 lbs and contain hundreds of thousands of dollars in sensitive GPUs and high-speed optics. We provide specialized hydraulic tailgates, stair-climbers, and anti-vibration transit.',
    points: [
      'Pneumatic air-ride trailers engineered to maintain ultra-smooth transport over road undulations',
      'Custom interior load-lock straps and heavy-duty floor floor-loading load spreaders',
      'White-glove uncrating, raised-floor placement, and packaging removal inside datacenter suites',
      'Pre-booked off-peak security window management with global hyperscale operators'
    ],
    features: [
      'Pneumatic air-ride trailers engineered to maintain ultra-smooth transport over road undulations',
      'Custom interior load-lock straps and heavy-duty floor floor-loading load spreaders',
      'White-glove uncrating, raised-floor placement, and packaging removal inside datacenter suites',
      'Pre-booked off-peak security window management with global hyperscale operators'
    ],
    accentColor: '#D97706',
    badgeText: 'AI Infrastructure Transport'
  },
  {
    id: 'pillar-rma-lifecycle',
    title: 'Serialized RMA Reverse Logistics & Circular Tech Economy',
    tagline: 'Chip-Level Diagnostic Triage, Data Sanitization & R2v3 Certified Reclamation',
    icon: RotateCcw,
    image: '/track-shipment-hero.jpg',
    metric: 'Sub-24h RMA Processing',
    description: 'Maximizing the asset recovery value of returned consumer electronics and commercial hardware. We handle testing, refurbishment kitting, warranty verification, certified data erasure, and circular precious metal recycling.',
    desc: 'Maximizing the asset recovery value of returned consumer electronics and commercial hardware. We handle testing, refurbishment kitting, warranty verification, certified data erasure, and circular precious metal recycling.',
    points: [
      'Component-level serial number scanning matching customer returns with original sales records',
      'Automated testing diagnostics sorting items into restock, warranty repair, or recycling tiers',
      'NIST SP 800-88 cryptographic disk sanitization with tamper-proof certificates of destruction',
      'Zero-landfill R2v3 compliant recycling reclaiming gold, copper, and rare-earth components'
    ],
    features: [
      'Component-level serial number scanning matching customer returns with original sales records',
      'Automated testing diagnostics sorting items into restock, warranty repair, or recycling tiers',
      'NIST SP 800-88 cryptographic disk sanitization with tamper-proof certificates of destruction',
      'Zero-landfill R2v3 compliant recycling reclaiming gold, copper, and rare-earth components'
    ],
    accentColor: '#EA580C',
    badgeText: 'Circular Lifecycle R2v3'
  }
];

export const techGallery = [
  {
    title: '4K Ultra-HD AI Enterprise Webcam Systems',
    category: 'Enterprise Video Subsystems',
    image: '/product-images/4K Ultra-HD AI Enterprise Webcam.png',
    desc: 'High-precision optical sensors and neural processing chipsets shipped with anti-scratch lens shields and ESD protective foam packaging.',
    highlight: 'Optical anti-scratch barrier'
  },
  {
    title: 'Fast GaN 100W Multi-Port USB-C Desktop Chargers',
    category: 'Power Semiconductor Electronics',
    image: '/product-images/Fast GaN 100W Multi-Port USB-C Desktop Charger.png',
    desc: 'Gallium Nitride high-frequency power electronics palletized with thermal moisture-barrier foils and UN 38.3 electrical safety compliance.',
    highlight: 'GaN thermal protection'
  },
  {
    title: 'Outdoor Smart Solar CCTV Security Cameras (4G/WiFi)',
    category: 'IoT Security & Remote Telemetry',
    image: '/product-images/Outdoor Smart Solar CCTV Security Camera (4G  WiFi).png',
    desc: 'Integrated solar battery and wide-angle camera units secured in high-impact master export cartons with tamper-evident tape seals.',
    highlight: 'Weatherproof sealed packaging'
  },
  {
    title: 'Adaptive LED Matrix Vehicle Headlight Subsystems',
    category: 'High-Tech Automotive Optics',
    image: '/product-images/Adaptive LED Vehicle Headlight Assemblies.png',
    desc: 'Sensitive automotive matrix micro-LED headlight assemblies transported in anti-static cushioned master cartons with moisture absorbents.',
    highlight: 'ESD static shielded'
  },
  {
    title: '12kW Industrial Fiber Laser Sheet Cutters',
    category: 'Optoelectronic Laser Systems',
    image: '/product-images/12kW Industrial Fiber Laser Sheet Cutter.png',
    desc: 'High-wattage fiber laser cutting modules protected by nitrogen-filled sealed optical barrier envelopes and vibration-isolated framing.',
    highlight: 'Shock-isolated optical core'
  },
  {
    title: '5-Axis CNC Precision Vertical Machining Centers',
    category: 'Advanced Precision Electronics Tooling',
    image: '/product-images/5-Axis CNC Vertical Machining Center.png',
    desc: 'Semiconductor die-casting and chassis machining CNC equipment transported under heavy machinery intermodal tarps with desiccant seals.',
    highlight: 'Heavy-cube intermodal'
  },
  {
    title: '6-Axis Industrial Robotic Assembly Arms (2.0m)',
    category: 'Electronics Manufacturing Automation',
    image: '/product-images/6-Axis Industrial Robotic Welding Arm (2.0m).png',
    desc: 'High-speed cleanroom surface-mount and welding robotics secured in custom modular steel cradles with calibrated arm locking clamps.',
    highlight: 'Calibrated clamp locking'
  },
  {
    title: 'Servo High-Precision Plastic Injection Molding Machines',
    category: 'Electronics Enclosure Fabrication',
    image: '/product-images/Servo Plastic Injection Molding Machine (250T).png',
    desc: 'High-tonnage electric servo injection systems supplying laptop and smartphone casing lines with VCI anti-corrosion barrier wrapping.',
    highlight: 'VCI corrosion barrier'
  }
];

export const techComplianceMatrix = [
  {
    standard: 'TAPA FSR 2023 Level A & TSR Level 1',
    scope: 'Facility & In-Transit Cargo Security',
    requirement: 'Physical perimeter intrusion defense, 90-day CCTV video archives, 24/7 armed GPS monitoring, and vetted driver credentials.',
    status: 'Certified Level A (Highest Tier)',
    auditCycle: 'Annual Independent Audit'
  },
  {
    standard: 'ANSI/ESD S20.20-2021 ESD Protection',
    scope: 'Electrostatic Discharge Control',
    requirement: 'Continuous grounding resistance verification (<1.0 x 10^9 ohms), static dissipative packaging, and humidity monitoring.',
    status: '100% Cleanroom Verified',
    auditCycle: 'Bi-Annual Calibration'
  },
  {
    standard: 'NIST SP 800-88 Rev 1 Data Sanitization',
    scope: 'RMA Storage & Media Overwrite',
    requirement: 'Cryptographic erasure, multi-pass bit overwrite, or physical degaussing/shredding of electronic memory units.',
    status: 'Certificates of Erasure Issued',
    auditCycle: 'Continuous per S/N'
  },
  {
    standard: 'C-TPAT Tier 3 / EU AEO-Full Certification',
    scope: 'Cross-Border Customs Green Corridors',
    requirement: 'Supply chain security validation granting minimum inspection rates and priority tarmac clearances at major world airports.',
    status: 'Tier 3 Validated',
    auditCycle: 'Triennial Review'
  },
  {
    standard: 'RoHS 3 & REACH SVHC Traceability',
    scope: 'Hazardous Substance Regulatory Checks',
    requirement: 'Pre-shipment verification confirming compliance with lead, mercury, and halogen restriction directives for global markets.',
    status: 'Compliant Documentation Pre-Filed',
    auditCycle: 'Per Manifest'
  },
  {
    standard: 'R2v3 Sustainable Electronics Recycling',
    scope: 'Circular Hardware Recovery & E-Waste',
    requirement: 'Downstream vendor traceability ensuring zero non-working electronics are diverted to domestic or foreign landfills.',
    status: 'R2v3 Certified Partner Facility',
    auditCycle: 'Annual Environmental Audit'
  }
];

export const techCaseStudies = [
  {
    client: 'Tier-1 Semiconductor Foundry Leader',
    headline: 'Zero-Defect 300mm Wafer Air Bridge: Hsinchu to Austin',
    metric: '99.99% On-Spec Yield',
    challenge: 'A global foundry needed to transport $45M worth of raw 300mm wafers monthly across 8,000 miles without vibration micro-fractures or nitrogen seal decay.',
    solution: 'KPL engineered custom pneumatic air-ride ULD containers with continuous dry-nitrogen purge and tarmac-direct Boeing 777F loading, maintaining sub-0.3G shock thresholds.'
  },
  {
    client: 'Hyperscale AI Cloud Infrastructure Provider',
    headline: 'Turnkey 48-Rack AI GPU Datacenter Cluster Deployment',
    metric: '< 36 Hours From Dock to Boot',
    challenge: 'Relocating fully populated 3,200 lb liquid-cooled AI server racks containing NVIDIA H100 systems with zero component reseating or optical cable disconnects.',
    solution: 'KPL deployed air-ride heavy-haul trailers with specialized floor-weight spreader plates and white-glove technicians, placing all 48 racks directly onto raised datacenter tiles.'
  },
  {
    client: 'Global Consumer Electronics Brand',
    headline: 'Synchronized Launch Day Delivery Across 38 Countries',
    metric: '1.2M Devices Cleared in 24h',
    challenge: 'Coordinating simultaneous international retail arrival of a flagship smartphone while preventing leaks, carton pilferage, and port customs delays.',
    solution: 'KPL orchestrated 14 dedicated air freighters with biometric geofenced smart-locks and C-TPAT Tier-3 bonded pre-clearance, achieving 100% on-shelf launch day execution.'
  }
];

export const techStandards = [
  'TAPA FSR Level A & TSR Level 1 Certified',
  'ANSI/ESD S20.20-2021 Static Dissipative Protocols',
  'C-TPAT Tier 3 & EU AEO-F Fast Customs Corridor',
  'ISO 27001:2022 Information Security Management',
  'NIST SP 800-88 Rev 1 Certified Media Sanitization'
];

export const techFaqs = [
  {
    q: 'How does KPL prevent theft and pilferage for high-value technology cargo?',
    a: 'We adhere strictly to TAPA FSR Level A facility security and TSR Level 1 transport requirements. All high-value consignments move via dual-driver teams with biometric smart locks that can only be unlocked remotely by our 24/7 Security Operations Center. In addition, covert secondary GSM and satellite tracking beacons are embedded inside master cartons to guarantee continuous line of sight.'
  },
  {
    q: 'What environmental controls are maintained for sensitive wafer and microchip transit?',
    a: 'For semiconductor wafers and unsealed die packages, we utilize hermetic nitrogen-purged containers that maintain relative humidity below 5% to eliminate oxidation risks. Our vehicles feature calibrated pneumatic air-ride suspension and 3-axis triaxial shock loggers that monitor G-force thresholds in real time, alerting our logistics control tower if vibrations exceed 0.5G.'
  },
  {
    q: 'How do you handle datacenter AI server rack logistics?',
    a: 'We provide specialized white-glove datacenter logistics for pre-populated and pre-cabled server racks up to 3,500 lbs. Our fleet features custom hydraulic tail-lifts, vibration-damped pneumatic air-ride suspension, anti-tilt brackets, and load-distribution plates that protect raised flooring inside clean datacenter suites.'
  },
  {
    q: 'What is the turnaround time for air tarmac direct customs clearance?',
    a: 'Leveraging our C-TPAT Tier-3 and AEO-Full accreditations, our technology air freight consignments benefit from advance electronic manifest pre-clearance. Upon flight touchdown, bonded tarmac transfers occur within 45 minutes, bypassing general airport warehouse congestion and eliminating dwelling exposure.'
  },
  {
    q: 'Can KPL manage our reverse logistics and RMA warranty return flows?',
    a: 'Yes. We operate complete serialized reverse logistics pipelines that scan item barcodes, perform chip-level electrical diagnostic testing, and sort returns into restocking, vendor return, or component repair streams. For decommissioned equipment, we provide NIST SP 800-88 cryptographic data erasure and certified R2v3 circular recycling.'
  },
  {
    q: 'Are your shipments covered by high-value cargo insurance?',
    a: 'Yes. We offer comprehensive all-risk door-to-door cargo insurance tailored specifically for high-value microelectronics, server hardware, and capital equipment, covering consignments up to $25M per trailer or aircraft ULD container with zero deductible liability options under KPL SLA contracts.'
  }
];

