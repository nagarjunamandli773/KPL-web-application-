import {
  FlaskConical,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Droplets,
  Layers,
  ThermometerSnowflake,
  Activity,
  Zap,
  Globe,
  Truck,
  Ship,
  Box,
  FileText,
  BadgeAlert,
  Award,
  Clock,
  Sparkles,
  Search
} from 'lucide-react';

export const chemicalHeroStats = [
  {
    label: 'Incident-Free Safety Record',
    value: '99.99%',
    sub: 'Over 280,000 MT Transported Safely Worldwide',
    icon: ShieldCheck,
    accent: '#059669',
  },
  {
    label: 'Dedicated ISO Tank Fleet',
    value: '4,200+',
    sub: 'T11 – T50 Stainless & PTFE/Rubber-Lined Tanks',
    icon: FlaskConical,
    accent: '#0284C7',
  },
  {
    label: 'Emergency Hazmat Response',
    value: '< 15 mins',
    sub: '24/7 Global ChemTel & Spill Response Dispatch',
    icon: AlertTriangle,
    accent: '#EA580C',
  },
  {
    label: 'Regulatory Audit Compliance',
    value: '100%',
    sub: 'IMDG, ADR, IATA DGR, OSHA & SQAS Certified',
    icon: CheckCircle2,
    accent: '#10B981',
  },
];

export const chemicalHazmatClasses = [
  {
    id: 'class-3-flammable',
    name: 'Class 3: Flammable Liquids & Solvents',
    classCode: 'IMO Class 3 / UN Packing Group I, II, III',
    containment: 'T11/T14 ISO Tanks with Nitrogen Blanketing',
    tempStability: 'Ambient with Vapor Pressure Relief Valves',
    safetyProtocol: 'Full Grounding, Antistatic Lines & Flame Arrestors',
    description: 'Petrochemicals, industrial solvents, alcohols, paints, and polymer resins requiring static-dissipative transport, vapor recovery, and strict spark-proof terminal staging.',
    image: '/industrial.jpg',
    badge: 'Vapor-Sealed Nitrogen Blanketed',
    badgeColor: '#EA580C',
    badgeBg: '#FFF7ED',
    highlights: [
      'Positive-pressure Nitrogen pad prevention of explosive vapor headspaces',
      'Bottom-discharge stainless steel valves with triple-closure safety locks',
      'Electronic grounding continuity verification prior to product transfer',
      'Automated Dangerous Goods Declaration (DGD) and SDS pre-transmission'
    ]
  },
  {
    id: 'class-8-corrosive',
    name: 'Class 8: Corrosive Acids & Caustic Alkalis',
    classCode: 'IMO Class 8 / Corrosive Liquid Cargo',
    containment: 'PTFE / Chemically Fused Rubber-Lined T14 Tanks',
    tempStability: 'Thermal-Insulated Polyurethane Shells',
    safetyProtocol: 'Secondary Acid Catchment & Neutralization Kits',
    description: 'Sulfuric acid, hydrochloric acid, caustic soda, phosphoric acid, and etching chemicals handled in specially lined acid-grade tanks preventing container degradation.',
    image: '/ocean-freight.jpg',
    badge: 'PTFE/Rubber Anti-Acid Lining',
    badgeColor: '#0284C7',
    badgeBg: '#E0F2FE',
    highlights: [
      'Seamless PTFE fluoropolymer or vulcanized natural rubber protective lining',
      'Top-only discharge siphon tubes eliminating bottom-valve leak exposure',
      'Onboard emergency acid-neutralizing dry chemical containment bags',
      'Independent ultrasonic wall-thickness ultrasonic testing before each loading'
    ]
  },
  {
    id: 'class-6-toxic',
    name: 'Class 6.1 / 9: Toxic & Eco-Hazardous Chemicals',
    classCode: 'IMO Class 6.1 & 9 / Marine Pollutants',
    containment: 'UN-Rated Heavy-Duty Steel Drums & Certified Composite IBCs',
    tempStability: 'Climate-Monitored Segregated Vaults',
    safetyProtocol: 'Continuous Air Quality & Toxic Gas Telemetry',
    description: 'Agrochemicals, technical active ingredients, organic peroxides, and specialty industrial biocides requiring hermetic sealing and complete marine pollutant containment.',
    image: '/quality-assurance-hero.jpg',
    badge: 'Hermetic Zero-Emission Vaults',
    badgeColor: '#7C3AED',
    badgeBg: '#F3E8FF',
    highlights: [
      'UN-certified 1A1 tight-head steel drums and heavy-duty composite IBC totes',
      'Reinforced poly-pallet bunding with 110% total spill volume capacity',
      'Real-time IoT sensors transmitting container internal VOC and pressure data',
      'Pre-authorized emergency Hazmat response route filings with coastguards'
    ]
  },
  {
    id: 'specialty-non-dg',
    name: 'High-Purity Oleochemicals & Food-Grade Additives',
    classCode: 'Non-Hazardous Specialty Industrial Chemicals',
    containment: 'Dedicated Dedicated-Food / Pharma Grade 316L ISO Tanks',
    tempStability: 'Integrated Steam/Electric Heating Coils (45°C - 75°C)',
    safetyProtocol: 'Kosher, Halal & FDA Certified Clean Tank Wash Cycles',
    description: 'Vegetable fatty acids, glycerine, technical white oils, bio-lubricants, and cosmetic surfactants requiring steam-coil heating prior to discharge and zero cross-contamination.',
    image: '/track-shipment-hero.jpg',
    badge: '316L Stainless Steam-Heated',
    badgeColor: '#059669',
    badgeBg: '#ECFDF5',
    highlights: [
      'High-grade 316L mirror-finish electropolished stainless steel vessels',
      'Integrated longitudinal heating conduits for viscous oil liquefaction',
      'Class 100 clean-room computerized tank wash certificates (EFTCO standard)',
      'Tamper-evident numbered bolt seals with photographic chain-of-custody'
    ]
  }
];

export const chemicalTransportModes = [
  {
    id: 'mode-iso-tank',
    name: 'Intermodal ISO Tank Container Rail & Ocean System',
    desc: 'Door-to-door bulk liquid transport using 24,000L – 26,000L intermodal tank containers seamlessly transferring between sea, rail, and road without re-drumming.',
    turnaround: 'Direct Port Intermodal Rail Injection',
    safetyGrade: 'Class 1 Heavy Intermodal Safety Lock'
  },
  {
    id: 'mode-dedicated-road',
    name: 'Dedicated ADR-Certified Hazmat Highway Linehaul',
    desc: 'Multi-axle liquid and package tanker trucks piloted by hazmat-certified professional teams with roll-stability control and automated lane collision avoidance.',
    turnaround: 'Daily Scheduled Highway Dispatches',
    safetyGrade: 'ADR-Trained Level 1 Hazardous Fleet'
  },
  {
    id: 'mode-climate-reefer',
    name: 'Temperature-Stabilized Chemical Reefer Units',
    desc: 'Self-powered refrigeration units providing precision cooling from -20°C to +25°C for heat-sensitive organic peroxides and monomers prone to self-polymerization.',
    turnaround: 'Precision Active Cooling ±0.5°C',
    safetyGrade: 'Ex-Proof Dual Compressor Redundancy'
  }
];

export const chemicalVolumeScales = [
  {
    id: 'vol-spot',
    label: '1 – 5 ISO Tanks (Spot / Trial Batch)',
    volumeCapacity: '24,000L – 120,000L Bulk Liquid',
    responseWindow: 'Immediate 24h Terminal Staging',
    protocolBenefit: 'Includes Turnkey SDS & Dangerous Goods Declarations'
  },
  {
    id: 'vol-campaign',
    label: '10 – 35 ISO Tanks / Month (Production Campaign)',
    volumeCapacity: '240,000L – 850,000L Continuous Flow',
    responseWindow: 'Dedicated Closed-Loop Tank Rotation',
    protocolBenefit: 'Saves 28% vs. Discardable IBC Drums & Disposal'
  },
  {
    id: 'vol-enterprise',
    label: '50+ Tanks / Month (Petrochemical Plant Linehaul)',
    volumeCapacity: '1,200,000L+ Enterprise Chemical Volume',
    responseWindow: 'Direct Factory Pipeline-to-Vessel Feeder',
    protocolBenefit: 'Full SQAS-Audited Dedicated Vessel Charter Options'
  }
];

export const chemicalPillars = [
  {
    id: 'pillar-iso-tank',
    title: 'Engineered ISO Tank (T11–T50) Global Fleet',
    tagline: 'Standardized Bulk Liquid Intermodal Transit with Zero Product Transloading',
    icon: FlaskConical,
    image: '/industrial.jpg',
    metric: '4,200+ Tanks in Network',
    description: 'Bypass the waste and risk of intermediate repackaging. Our ISO tank fleet carries liquid chemicals seamlessly across ocean container ships, double-stack rail cars, and skeletal road chassis without opening the vessel.',
    points: [
      'Heavy-duty 316L stainless steel vessels with 21,000L to 26,000L gross capacity',
      'Specialized PTFE and rubber internal linings engineered for aggressive inorganic acids',
      'Steam-heating and electric warming systems for temperature-sensitive solidification control',
      'Dual top-and-bottom airline connections for safe nitrogen-pressurized closed-loop unloading'
    ],
    accentColor: '#0284C7',
    badgeText: 'Bulk Intermodal'
  },
  {
    id: 'pillar-hazmat-compliance',
    title: 'Certified IMDG, ADR & IATA Hazmat Governance',
    tagline: 'Complete International Dangerous Goods Declarations & Port Approvals',
    icon: ShieldCheck,
    image: '/ocean-freight.jpg',
    metric: '100% Audit Compliance',
    description: 'Navigating maritime and highway hazardous cargo regulations requires strict technical rigor. KPL’s DG safety advisors ensure every chemical classification, packaging group, and placarding requirement is flawless.',
    points: [
      'Pre-shipment verification of 16-section Safety Data Sheets (SDS / GHS compliant)',
      'Multi-modal Dangerous Goods Declaration (IMO DGD) pre-lodged with destination port authorities',
      'Strict container compatibility matrix verification preventing reactive chemical co-loading',
      'International UN certification markings and weather-proof high-contrast hazard diamond labeling'
    ],
    accentColor: '#059669',
    badgeText: 'Global Compliance'
  },
  {
    id: 'pillar-temperature-stabilization',
    title: 'Temperature Stabilization & Polymerization Control',
    tagline: 'Active Reefer Cooling and Heated Linehaul for Climate-Critical Compounds',
    icon: ThermometerSnowflake,
    image: '/quality-assurance-hero.jpg',
    metric: '±0.5°C Thermal Precision',
    description: 'Certain monomers and peroxides undergo runaway exothermic polymerization if exposed to elevated ambient heat. Our climate-stabilized chemical units ensure cargo remains within verified safe thermal windows.',
    points: [
      'ATEX / IECEx spark-proof explosion-proof refrigeration systems engineered for hazardous zones',
      'Dual independent cooling compressors ensuring continuous thermal operation in case of power loss',
      'Real-time IoT cloud temperature telemetry reporting temperature readings every 3 minutes',
      'Automated geofenced alarms alerting control centers to temperature deviations before critical thresholds'
    ],
    accentColor: '#7C3AED',
    badgeText: 'Active Thermal Control'
  },
  {
    id: 'pillar-emergency-response',
    title: '24/7 ChemTel Lineage & Rapid Spill Containment',
    tagline: 'Immediate Global Emergency Coordination and Turnkey Clean-Up Readiness',
    icon: AlertTriangle,
    image: '/land-freight.jpg',
    metric: '<15m Response Window',
    description: 'Chemical transit demands unbroken safety oversight. KPL provides 24/7 emergency telephone response coverage on all transport documents, paired with rapid-response Hazmat contractor teams in key international corridors.',
    points: [
      'Registered 24/7/365 emergency incident telephone hotline printed on all shipping manifests',
      'Direct coordination with international coastal authorities, fire brigades, and salvage teams',
      'Dedicated onboard chemical spill kits, neutralizers, and level-A Hazmat protective gear',
      'Full post-incident technical documentation, root-cause analysis, and liability mitigation'
    ],
    accentColor: '#EA580C',
    badgeText: 'Emergency Defense'
  }
];

export const chemicalGallery = [
  {
    title: 'Intermodal ISO Tank Fleet Yard',
    category: 'Bulk Liquid Logistics',
    image: '/industrial.jpg',
    desc: 'T11 and T14 ISO tank containers stacked and inspected at our port chemical terminal gateway.',
    highlight: '26,000L high-cube capacity'
  },
  {
    title: 'Hazmat Ocean Container Transport',
    category: 'Maritime Dangerous Goods',
    image: '/ocean-freight.jpg',
    desc: 'Segregated stowage aboard modern container vessels following strict IMDG class separation.',
    highlight: 'IMDG Class 3, 6, 8, 9 certified'
  },
  {
    title: 'Dedicated Chemical Highway Tankers',
    category: 'ADR Road Linehaul',
    image: '/land-freight.jpg',
    desc: 'Multi-compartment insulated stainless steel tankers with bottom-loading vapor recovery lines.',
    highlight: 'GPS geofenced security'
  },
  {
    title: 'Laboratory Quality & Purity Assurance',
    category: 'Chemical Testing & Analysis',
    image: '/quality-assurance-hero.jpg',
    desc: 'Pre-shipment gas chromatography, moisture titration, and contamination analysis.',
    highlight: 'COA verified testing'
  },
  {
    title: 'Rail Hazmat Corridors & Tank Cars',
    category: 'Heavy Industrial Rail',
    image: '/rail-freight.jpg',
    desc: 'High-volume chemical rail transit linking inland manufacturing plants to ocean ports.',
    highlight: 'Heavy-payload efficiency'
  },
  {
    title: 'Dangerous Goods Regulatory Desk',
    category: 'Global Trade Compliance',
    image: '/documentation-hero.jpg',
    desc: 'Automated electronic generation of Multimodal DGDs, SDS dossiers, and customs hazmat permits.',
    highlight: '100% paperless clearance'
  },
  {
    title: 'Real-Time Pressure & Temp Telemetry',
    category: 'IoT Fleet Intelligence',
    image: '/track-shipment-hero.jpg',
    desc: 'Solar-powered ATEX-certified IoT transponders monitoring internal tank pressure, temp, and location.',
    highlight: 'Satellite real-time alerts'
  },
  {
    title: 'Bonded Chemical Staging Facilities',
    category: 'Secure Hazmat Warehousing',
    image: '/hero-logistics.jpg',
    desc: 'Fire-suppression foam equipped bonded warehouses with epoxy-coated drainage spill retention basins.',
    highlight: 'Seveso III / OSHA compliant'
  }
];

export const chemicalComplianceMatrix = [
  {
    protocol: 'IMO IMDG Code (International Maritime Dangerous Goods)',
    scope: 'Maritime ocean container and ISO tank transport across international waters.',
    requirement: 'Strict packaging certification, class segregation (e.g. acids away from bases), and pre-approved stowage manifests.',
    kplCapability: '100% certified DG specialist pre-checks, automated segregation validation, and preferred dangerous goods booking with major container lines.'
  },
  {
    protocol: 'ADR / RID European Road & Rail Agreement',
    scope: 'Cross-border overland highway and rail freight across Europe, UK, and connecting corridors.',
    requirement: 'Vehicle orange hazard plate placarding, driver Hazmat certification cards, and onboard spill emergency equipment.',
    kplCapability: 'Dedicated fleet of ADR-certified vehicles, fully trained drivers, and route-planned avoiding populated tunnels and water protection zones.'
  },
  {
    protocol: 'US DOT 49 CFR & OSHA HazCom',
    scope: 'North American interstate highway, rail, and intermodal chemical movements.',
    requirement: 'UN specification packaging, GHS standardized Safety Data Sheets (16 sections), and registered emergency response phone numbers.',
    kplCapability: 'Full ChemTel registration, automated GHS label generation, and computerized BOL pre-auditing against 49 CFR tables.'
  },
  {
    protocol: 'IATA DGR (Dangerous Goods by Air Freight)',
    scope: 'High-priority critical chemical samples, agrochemical actives, and technical reagents.',
    requirement: 'Strict quantity limitations (PAX vs CAO), double-sealed inner packaging, and UN certified fiberboard drums.',
    kplCapability: 'IATA-certified dangerous goods acceptance staff, UN-certified packaging supply, and expedited airport customs pre-clearance.'
  },
  {
    protocol: 'EFTCO Clean Tank Certification',
    scope: 'Tank container washing and preparation between product loads.',
    requirement: 'Standardized European Cleaning Document (ECD) verifying removal of prior cargo residues and chemical neutralization.',
    kplCapability: 'Exclusively partner with audited SQAS-certified wash depots, providing digital ECD certificates before every ISO tank loading.'
  }
];

export const chemicalCaseStudies = [
  {
    client: 'Global Specialty Petrochemical Manufacturer',
    scale: '120 ISO Tanks / Month (Asia & Europe Corridors)',
    challenge: 'High cost and safety risks associated with shipping volatile solvents in single-use 200L drums, causing frequent puncture leaks and high disposal fees.',
    solution: 'Engineered a closed-loop intermodal ISO tank rotation featuring T11 stainless containers with dedicated nitrogen blanketing and automated bottom-valve locks.',
    results: [
      'Eliminated 32,000 single-use steel drums annually',
      'Zero product leakage or contamination across 1,400+ maritime voyages',
      'Saved $1.85M in annual drum purchasing, disposal, and labor costs'
    ]
  },
  {
    client: 'Multinational Agrochemical & Pesticides Leader',
    scale: '450 Multi-Modal Shipments / Year (Class 6.1 & Class 9)',
    challenge: 'Encountered severe customs hold-ups and carrier rejections at port terminals due to missing Dangerous Goods Declarations and miscalculated segregation.',
    solution: 'Deployed KPL’s Dangerous Goods Digital Control Tower, integrating real-time SDS parsing, automated IMDG segregation checking, and terminal pre-approvals.',
    results: [
      'Port clearance dwell times dropped from 8.2 days to under 18 hours',
      '100% first-pass carrier acceptance with zero cargo rejections',
      'Reduced total demurrage and detention charges by 76%'
    ]
  },
  {
    client: 'Semiconductor Raw Chemical Supplier',
    scale: 'Ultra-High-Purity Hydrofluoric & Sulfuric Acid (Class 8)',
    challenge: 'Demanded mirror-finish zero-particulate acid delivery with zero trace metal leaching and continuous temperature stabilization.',
    solution: 'Supplied dedicated PTFE-lined T14 ISO tank containers with electro-polished siphon tubes, micro-filtered nitrogen purging, and satellite thermal telemetry.',
    results: [
      'Maintained 99.9999% chemical purity standards upon delivery to chip fabs',
      'Zero corrosion or lining failure incidents over 36 consecutive months',
      'Awarded Supplier Operational Excellence trophy by tier-1 chipmaker'
    ]
  }
];

export const chemicalStandards = [
  { name: 'IMDG Code Compliant', desc: 'Certified international maritime transport for hazardous classes 3, 6.1, 8, and 9.' },
  { name: 'SQAS Assessed', desc: 'Safety and Quality Assessment for Sustainability certified chemical transport nodes.' },
  { name: 'ISO 9001 & 14001', desc: 'Quality and Environmental Management certified across all hazmat transfer facilities.' },
  { name: 'ChemTel 24/7/365', desc: 'Contracted international emergency response call center coverage on all manifests.' },
  { name: 'C-TPAT Hazmat Tier', desc: 'Customs-Trade Partnership verified high-security hazardous supply chain vetting.' }
];

export const chemicalFaqs = [
  {
    q: 'Which Dangerous Goods (Hazmat) classes does KPL handle?',
    a: 'We specialize in Class 3 (Flammable Liquids), Class 6.1 (Toxic Substances), Class 8 (Corrosive Substances), and Class 9 (Miscellaneous & Marine Pollutants), as well as Non-Hazardous specialty chemicals, polymers, and food-grade liquids. For Class 1 (Explosives) or Class 7 (Radioactive), please contact our specialized projects desk directly.'
  },
  {
    q: 'What is an ISO Tank Container and what advantages does it offer over drums or IBCs?',
    a: 'An ISO tank is a 20-foot intermodal pressure vessel built inside an international standard frame. Carrying between 21,000L and 26,000L of bulk liquid, it transfers directly between ocean vessels, rail cars, and trucks without opening the container. This eliminates the expense and waste of 120+ steel drums, reduces handling labor, and provides superior structural protection.'
  },
  {
    q: 'How do you prevent contamination between different chemical shipments?',
    a: 'We enforce strict cleaning protocols using SQAS-certified wash depots. Each ISO tank receives a formal European Cleaning Document (ECD) certifying computerized caustic, acid, and steam cleaning, complete residue removal, and vacuum drying before any subsequent product is loaded.'
  },
  {
    q: 'What emergency response coverage is provided during transit?',
    a: 'All shipping manifests and Dangerous Goods Declarations display our 24/7/365 global emergency response hotline (ChemTel certified). In the event of any incident, our emergency response center immediately provides technical guidance to first responders and mobilizes certified Hazmat remediation teams.'
  },
  {
    q: 'How does nitrogen blanketing work for flammable liquids?',
    a: 'For volatile Class 3 chemicals, we displace the oxygen inside the tank with an inert dry nitrogen blanket before and after loading. Maintaining positive nitrogen pressure eliminates the risk of flammable vapor headspaces forming during maritime voyages or temperature variations.'
  },
  {
    q: 'Can KPL manage Dangerous Goods Declarations (DGD) and port approvals?',
    a: 'Yes. Our licensed Dangerous Goods Safety Advisors (DGSA) review your product Safety Data Sheets (SDS), generate fully compliant IMO Multimodal Dangerous Goods Declarations, coordinate carrier space approvals, and lodge advanced port authority notifications prior to vessel arrival.'
  }
];

