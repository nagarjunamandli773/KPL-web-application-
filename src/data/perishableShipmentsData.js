// =========================================================================
// PERISHABLE SHIPMENTS LOGISTICS DATA
// Farm-to-Table, Deep Frozen, Controlled Atmosphere (CA) & Fresh Produce Cold-Chain
// =========================================================================

export const perishableHeroStats = [
  {
    value: '99.96%',
    label: 'Freshness Retention Rate',
    desc: 'Zero spoilage across 240,000+ tons of fresh agricultural and maritime perishables',
    badge: 'FARM-TO-TABLE FRESHNESS'
  },
  {
    value: '<24 Hours',
    label: 'Harvest-to-Flight SLA',
    desc: 'Expedited vacuum pre-cooling and direct tarmac tarmac loading within hours of picking',
    badge: 'EXPEDITED HARVEST AIRLIFT'
  },
  {
    value: '-30°C to +15°C',
    label: 'Precision Thermal Chambers',
    desc: 'Sub-zero blast freezing, chilled produce zones, and controlled ambient ripening rooms',
    badge: 'MULTI-ZONE CLIMATE CONTROL'
  },
  {
    value: '0.00%',
    label: 'Quarantine Interceptions',
    desc: 'USDA-APHIS, EU TRACES, and FSSAI automated phytosanitary customs clearance',
    badge: 'PHYTOSANITARY GREEN LANE'
  }
];

export const perishableCommodityTiers = [
  {
    id: 'tier-exotic-fruits',
    name: 'Fresh Exotic Fruits & Vegetables',
    tempDisplay: '+0.5°C to +12°C',
    color: '#D84315',
    bg: 'rgba(216, 67, 21, 0.08)',
    borderColor: 'rgba(216, 67, 21, 0.25)',
    desc: 'Controlled Atmosphere (CA) containers with active O2/CO2 scrubbing for mangoes, avocados, berries, and table grapes.',
    features: [
      'Catalytic ethylene gas scrubbers preventing premature ripening',
      'Dynamic nitrogen purging to suppress cellular respiration',
      'Continuous relative humidity (RH 85-95%) moisture retention',
      'Calibrated pulp core temperature sensors with remote telemetry'
    ],
    points: [
      'Catalytic ethylene gas scrubbers preventing premature ripening',
      'Dynamic nitrogen purging to suppress cellular respiration',
      'Continuous relative humidity (RH 85-95%) moisture retention',
      'Calibrated pulp core temperature sensors with remote telemetry'
    ],
    idealFor: 'Alphonso Mangoes, Hass Avocados, Cherries, Table Grapes, Papayas'
  },
  {
    id: 'tier-seafood-aquaculture',
    name: 'Live & Ultra-Frozen Seafood',
    tempDisplay: '-30°C to -18°C / +2°C',
    color: '#0284C7',
    bg: 'rgba(2, 132, 199, 0.08)',
    borderColor: 'rgba(2, 132, 199, 0.25)',
    desc: 'Liquid nitrogen flash-frozen containers and oxygen-supplemented live wet-wells for sashimi-grade seafood.',
    features: [
      'Ultra-deep freezer reefers maintaining -30°C to preserve sashimi cellular structure',
      'Oxygenated temperature-stabilized live tanks for crustaceans and shellfish',
      'Gel-pack insulation with leakproof styrofoam aviation dry packs',
      'Mandatory HACCP marine hygiene and histamines testing pre-clearance'
    ],
    points: [
      'Ultra-deep freezer reefers maintaining -30°C to preserve sashimi cellular structure',
      'Oxygenated temperature-stabilized live tanks for crustaceans and shellfish',
      'Gel-pack insulation with leakproof styrofoam aviation dry packs',
      'Mandatory HACCP marine hygiene and histamines testing pre-clearance'
    ],
    idealFor: 'Yellowfin Tuna, Norwegian Salmon, Tiger Prawns, Live Lobsters'
  },
  {
    id: 'tier-floriculture',
    name: 'Cut Flowers & High-Value Foliage',
    tempDisplay: '+1°C to +4°C',
    color: '#16A34A',
    bg: 'rgba(22, 163, 74, 0.08)',
    borderColor: 'rgba(22, 163, 74, 0.25)',
    desc: 'Vacuum pre-cooled air freighters engineered to prevent botrytis bloom and maximize retail vase life.',
    features: [
      'Pre-shipment vacuum cooling lowering core temperature in under 25 minutes',
      'Anti-microbial hydration solution buckets with secure water-lock seals',
      'Priority tarmac apron cool-dollies eliminating ambient heat shock',
      'Direct auction-floor delivery to Aalsmeer, London, and Tokyo flower markets'
    ],
    points: [
      'Pre-shipment vacuum cooling lowering core temperature in under 25 minutes',
      'Anti-microbial hydration solution buckets with secure water-lock seals',
      'Priority tarmac apron cool-dollies eliminating ambient heat shock',
      'Direct auction-floor delivery to Aalsmeer, London, and Tokyo flower markets'
    ],
    idealFor: 'Dutch Roses, Cut Orchids, Chrysanthemums, Exotic Foliage'
  },
  {
    id: 'tier-meats-dairy',
    name: 'Chilled Meats & Artisanal Dairy',
    tempDisplay: '-2°C to +4°C',
    color: '#EA580C',
    bg: 'rgba(234, 88, 12, 0.08)',
    borderColor: 'rgba(234, 88, 12, 0.25)',
    desc: 'Strict multi-compartment climate linehauls preventing bacterial growth and enzyme breakdown in animal proteins.',
    features: [
      'Zero-defrost cycle fluctuation during ocean transit corridors',
      'Sanitized food-grade stainless steel interior lining with antimicrobial coatings',
      'Halal and Kosher segregated logistics compartments upon request',
      'Automated batch release and cold-store USDA-FSIS documentation'
    ],
    points: [
      'Zero-defrost cycle fluctuation during ocean transit corridors',
      'Sanitized food-grade stainless steel interior lining with antimicrobial coatings',
      'Halal and Kosher segregated logistics compartments upon request',
      'Automated batch release and cold-store USDA-FSIS documentation'
    ],
    idealFor: 'Wagyu Beef, Organic Butter, Aged Cheeses, Processed Poultry'
  }
];

export const perishableAtmosphereTech = [
  {
    id: 'tech-ca',
    name: 'Controlled Atmosphere (CA) Smart Reefer',
    mode: 'Ocean Freight & Rail',
    transitWindow: '10 - 28 Days',
    oxygenControl: '3% - 5% O2',
    carbonControl: '4% - 6% CO2',
    summary: 'Slows down natural fruit respiration by modifying internal atmospheric composition, tripling transit shelf-life.',
    benefits: 'Enables maritime shipping for delicate fruits that previously required air freight, slashing logistics costs by 60%.'
  },
  {
    id: 'tech-fresh-air',
    name: 'Active Fresh Air Management (AFAM+)',
    mode: 'Intermodal Container',
    transitWindow: '3 - 14 Days',
    oxygenControl: 'Continuous Ambient Balance',
    carbonControl: 'Automated Micro-Vent Purge',
    summary: 'Microprocessor monitors gas levels inside the cargo box and automatically opens air vents when CO2 builds up.',
    benefits: 'Prevents produce asphyxiation and off-flavor development in high-respiration commodities like onions and garlic.'
  },
  {
    id: 'tech-air-cool-chain',
    name: 'Direct Runway Cool-Dolly Air Bridge',
    mode: 'Priority Air Freight',
    transitWindow: '< 24 Hours',
    oxygenControl: 'Atmospheric Pressurized Cabin',
    carbonControl: 'Thermal Blanket Insulation',
    summary: 'Insulated thermal covers and active refrigerated airport transfer dollies protect perishables from extreme runway heat.',
    benefits: 'Maintains unbroken +2°C to +4°C cool chain during 45°C equatorial airport tarmac layovers.'
  }
];

export const perishableVolumeScales = [
  {
    id: 'vol-air-charter',
    name: 'Seasonal Dedicated Air Freighter Charter',
    capacity: '60 - 110 Metric Tons',
    turnaround: '< 24h Flight SLA',
    description: 'Full aircraft charters (B777F / B747-8F) dedicated to seasonal harvest windows like mangoes or cherries.'
  },
  {
    id: 'vol-reefer-fcl',
    name: '40ft High-Cube Smart Reefer Container (FCL)',
    capacity: '24 - 28 Metric Tons',
    turnaround: 'Weekly Scheduled Loops',
    description: 'Dedicated high-cube refrigerated container with integrated telematics, dual gensets, and live temperature reporting.'
  },
  {
    id: 'vol-lcl-coldbox',
    name: 'Consolidated LCL Cold-Box Pallet (LCL)',
    capacity: '1 - 6 Metric Tons',
    turnaround: 'Bi-Weekly Regional Runs',
    description: 'Temperature-segregated LCL pallet space in multi-temp reefer consolidations for artisanal and boutique exporters.'
  }
];

export const perishablePillars = [
  {
    id: 'pillar-ca-ethylene',
    title: 'Controlled Atmosphere & Ethylene Scrubbing',
    subtitle: 'Cellular Respiration Suppression',
    desc: 'Our proprietary smart reefers dynamically regulate oxygen and carbon dioxide while continuously filtering out ripening hormones (ethylene gas).',
    description: 'Our proprietary smart reefers dynamically regulate oxygen and carbon dioxide while continuously filtering out ripening hormones (ethylene gas).',
    points: [
      'Nitrogen flushing systems that decrease O2 levels to dormant thresholds (3-5%)',
      'Potassium permanganate and catalytic scrubbers that destroy ethylene molecules',
      'Extends fresh agricultural export shelf-life by up to 300% on transoceanic routes',
      'Prevents skin pitting, flesh softening, and premature color degradation'
    ],
    features: [
      'Nitrogen flushing systems that decrease O2 levels to dormant thresholds (3-5%)',
      'Potassium permanganate and catalytic scrubbers that destroy ethylene molecules',
      'Extends fresh agricultural export shelf-life by up to 300% on transoceanic routes',
      'Prevents skin pitting, flesh softening, and premature color degradation'
    ],
    image: '/product-images/Fresh Alphonso Mangoes.png',
    metric: '+21 Days Extended Shelf Life',
    iconColor: '#D84315'
  },
  {
    id: 'pillar-runway-air-bridge',
    title: 'Priority Air Freight & Tarmac Cool-Dollies',
    subtitle: 'Zero Ambient Thermal Shock',
    desc: 'Perishable goods face their greatest risk during airport tarmac transfers. Global Link provides active refrigerated cool-dollies and insulated blankets for direct aircraft apron loading.',
    description: 'Perishable goods face their greatest risk during airport tarmac transfers. Global Link provides active refrigerated cool-dollies and insulated blankets for direct aircraft apron loading.',
    points: [
      'Airport tarmac air-conditioned dollies shielding cargo from 45°C ambient tarmac heat',
      'Vacuum pre-cooling facilities located within airport cargo villages',
      'Priority offloading with expedited transfer directly into airport perishable centers',
      'Nose-cargo high-volume loading for oversized agricultural pallet configurations'
    ],
    features: [
      'Airport tarmac air-conditioned dollies shielding cargo from 45°C ambient tarmac heat',
      'Vacuum pre-cooling facilities located within airport cargo villages',
      'Priority offloading with expedited transfer directly into airport perishable centers',
      'Nose-cargo high-volume loading for oversized agricultural pallet configurations'
    ],
    image: '/air-freight.jpg',
    metric: '<35 Min Tarmac Transfer SLA',
    iconColor: '#0284C7'
  },
  {
    id: 'pillar-phytosanitary-compliance',
    title: 'Automated Phytosanitary & Cold-Treatment Protocols',
    subtitle: 'Zero Quarantine Detention Guarantee',
    desc: 'We manage rigorous pre-export inspections, USDA-APHIS cold treatment (CT) programs, vapor heat treatment (VHT), and electronic phytosanitary certificates (e-Phyto).',
    description: 'We manage rigorous pre-export inspections, USDA-APHIS cold treatment (CT) programs, vapor heat treatment (VHT), and electronic phytosanitary certificates (e-Phyto).',
    points: [
      'USDA-calibrated pulp temperature probes positioned across three container zones',
      'In-transit cold treatment verification with continuous automated USDA telemetry logs',
      'Vapor Heat Treatment (VHT) coordination for fruit-fly quarantine compliance',
      'Instant e-Phyto customs green-lane documentation filing prior to vessel arrival'
    ],
    features: [
      'USDA-calibrated pulp temperature probes positioned across three container zones',
      'In-transit cold treatment verification with continuous automated USDA telemetry logs',
      'Vapor Heat Treatment (VHT) coordination for fruit-fly quarantine compliance',
      'Instant e-Phyto customs green-lane documentation filing prior to vessel arrival'
    ],
    image: '/quality-assurance-hero.jpg',
    metric: '100% Phytosanitary Pass Rate',
    iconColor: '#16A34A'
  },
  {
    id: 'pillar-ocean-reefer-iot',
    title: 'Next-Gen Ocean Reefer Fleet & Telemetry',
    subtitle: 'Real-Time Pulp & Humidity Transparency',
    desc: 'Equipped with Carrier Transicold PrimeLINE and Thermo King Magnum Plus cooling units, our ocean reefers provide autonomous generator backup and real-time cellular satellite monitoring.',
    description: 'Equipped with Carrier Transicold PrimeLINE and Thermo King Magnum Plus cooling units, our ocean reefers provide autonomous generator backup and real-time cellular satellite monitoring.',
    points: [
      'Automated trip pre-inspection (PTI) certifying compressor efficiency before packing',
      'Live satellite monitoring of supply air, return air, humidity, and power status',
      'Automated genset dual-fuel redundancy for multi-day intermodal inland haulage',
      'Food-grade de-odorized cargo compartments washed with approved sanitizing agents'
    ],
    features: [
      'Automated trip pre-inspection (PTI) certifying compressor efficiency before packing',
      'Live satellite monitoring of supply air, return air, humidity, and power status',
      'Automated genset dual-fuel redundancy for multi-day intermodal inland haulage',
      'Food-grade de-odorized cargo compartments washed with approved sanitizing agents'
    ],
    image: '/ocean-freight.jpg',
    metric: '0.00% Unplanned Thermal Drift',
    iconColor: '#EA580C'
  }
];

export const perishableGallery = [
  {
    id: 'gal-alphonso-mangoes',
    title: 'GI-Tagged Ratnagiri Alphonso Mangoes (Export Grade A1)',
    category: 'Fresh Fruits & Produce',
    image: '/product-images/Fresh Alphonso Mangoes.png',
    badge: 'GI-Tagged Export Grade',
    spec: 'Brix Sugar 19-21% • Vapor Heat Treated (VHT) • Hot Water Dip Tested',
    tempReq: '+12.5°C Controlled CA',
    packaging: 'Cushioned 3.5kg corrugated ventilation gift cartons'
  },
  {
    id: 'gal-nashik-onions',
    title: 'Controlled-Ventilated Nashik Red Onions (45-60mm)',
    category: 'Fresh Vegetables & Alliums',
    image: '/product-images/Nashik Red Onions (Export Grade 45-60mm).png',
    badge: 'High-Respiration Allium',
    spec: 'Field-Cured Outer Skins • Active De-Humidification • Low Pungency Drift',
    tempReq: '+0°C to +2°C with AFAM',
    packaging: '25kg UV-stabilized breathable red monofilament leno mesh bags'
  },
  {
    id: 'gal-jumbo-cashews',
    title: 'Organic King Jumbo Whole Cashew Nuts (W-180)',
    category: 'Specialty Agrifoods',
    image: '/product-images/Jumbo Whole Cashew Nuts (W-180).png',
    badge: 'Organic King Cashew',
    spec: 'Grade W-180 (160-180 nuts/lb) • Nitrogen Gas Flushed • Low Moisture <5%',
    tempReq: '+15°C to +20°C CRT Dry',
    packaging: 'Vacuum-sealed 50lb multi-layer poly-lined cartons'
  },
  {
    id: 'gal-kashmiri-saffron',
    title: 'Grade-A1 Kashmiri Mongra Pure Saffron (Vacuum Sealed)',
    category: 'Specialty Agrifoods',
    image: '/product-images/Kashmiri Mongra Saffron (Grade-A1).png',
    badge: 'Super-Premium Mongra',
    spec: 'Crocin Color Reading >250 • Deep Crimson Pistils • Free of Floral Waste',
    tempReq: '+10°C to +15°C Light Shielded',
    packaging: 'Hermetically sealed nitrogen-purged acrylic tins & glass jars'
  },
  {
    id: 'gal-wild-honey',
    title: 'Unpasteurized Wild Forest Raw Honey (Cold-Extracted)',
    category: 'Artisanal & Processed',
    image: '/product-images/Wild Forest Raw Honey.png',
    badge: 'Raw Forest Honey',
    spec: 'Enzymatically Active • Pollen Retained • Zero Antibiotic Contamination',
    tempReq: '+18°C to +22°C Ambient',
    packaging: 'Food-grade steel drum bulk IBC or tamper-sealed glass bottles'
  },
  {
    id: 'gal-olive-oil',
    title: 'First Cold-Pressed Extra Virgin Olive Oil (UV-Shielded)',
    category: 'Artisanal & Processed',
    image: '/product-images/Extra Virgin Olive Oil (500ml Bottled).png',
    badge: 'Extra Virgin Estate',
    spec: 'Acidity <0.3% • Cold Mechanically Pressed • High Polyphenol Profile',
    tempReq: '+14°C to +18°C Dark Refrig',
    packaging: 'Dark green UV-resistant glass bottles in partitioned sea cartons'
  },
  {
    id: 'gal-coconut-milk',
    title: 'Pure Organic Coconut Milk (Ultra-Clean Aseptic Pack)',
    category: 'Artisanal & Processed',
    image: '/product-images/Organic Coconut Milk (400ml Canned).png',
    badge: 'Aseptic Cold-Packed',
    spec: '18% Natural Fat Content • Thick Cream Consistency • Zero Emulsifiers',
    tempReq: '+15°C to +22°C CRT',
    packaging: 'BPA-NI lined aluminum cans in shrink-wrapped corrugated trays'
  },
  {
    id: 'gal-artisan-jams',
    title: 'Artisan Whole Fruit Low-Sugar Gourmet Jams',
    category: 'Artisanal & Processed',
    image: '/product-images/Artisan Whole Fruit Low-Sugar Jams.png',
    badge: 'Gourmet Preserves',
    spec: '70% Whole Fruit Content • Cane Sugar Balanced • Vacuum Cooked',
    tempReq: '+10°C to +15°C Ambient',
    packaging: 'Tamper-evident glass jars in shock-absorbing corrugated partitions'
  }
];

export const perishableComplianceMatrix = [
  {
    standard: 'USDA-APHIS Cold Treatment (CT)',
    authority: 'US Dept. of Agriculture (APHIS)',
    scope: 'In-transit quarantine sterilization of fruit fly pests via sustained cold exposure',
    protocols: '3 pulp sensors recording continuous core temps below +1.11°C for 14-16 days',
    complianceRate: '100% Certified Pass'
  },
  {
    standard: 'Codex Alimentarius HACCP',
    authority: 'FAO / World Health Organization',
    scope: 'Hazard Analysis Critical Control Point food safety across perishable supply chains',
    protocols: 'Sanitary pre-loading audits, microbial testing, allergen segregation',
    complianceRate: 'Audited Global Fleet'
  },
  {
    standard: 'EU TRACES NT & EFSA',
    authority: 'European Food Safety Authority',
    scope: 'Veterinary and phytosanitary border health clearances across all EU sea/air ports',
    protocols: 'Electronic health cert integration, pesticide maximum residue limit (MRL) checks',
    complianceRate: 'Expedited Green Lane'
  },
  {
    standard: 'IATA Perishable Cargo Regs (PCR)',
    authority: 'International Air Transport Assoc.',
    scope: 'Aviation handling standards, cool-dolly procedures, and packaging hold times',
    protocols: 'Standardized perishable cargo labeling, airport cold-room temperature mapping',
    complianceRate: 'CEIV Fresh Compliant'
  },
  {
    standard: 'GlobalG.A.P. Chain of Custody',
    authority: 'GlobalG.A.P. FoodPLUS',
    scope: 'Farm-to-fork traceability ensuring sustainable and transparent agricultural origins',
    protocols: 'Audited farm origin certificates, non-mingling batch tracking, social compliance',
    complianceRate: 'Certified Operations'
  },
  {
    standard: 'FDA Food Safety Modernization (FSMA)',
    authority: 'US Food and Drug Administration',
    scope: 'Sanitary Transportation of Human and Animal Food rules during highway and rail transit',
    protocols: 'Pre-cooling verification, documented trailer washouts, computerized temperature logs',
    complianceRate: 'Fully Implemented'
  }
];

export const perishableCaseStudies = [
  {
    id: 'case-mango-airlift',
    client: 'Consortium of Indian Horticultural Exporters',
    headline: 'High-Volume Alphonso Mango Air Charter to London Heathrow & Dubai',
    summary: 'Orchestrated seasonal charter bridge delivering 540 metric tons of fresh Alphonso mangoes from Ratnagiri orchards to UK and UAE supermarket shelves within 28 hours of harvest.',
    metrics: [
      { label: 'Tons Transported', val: '540 MT' },
      { label: 'Harvest-to-Shelf SLA', val: '<28 Hours' },
      { label: 'Rejection Rate', val: '0.00%' }
    ],
    takeaway: 'Tarmac cool-dollies and pre-cleared e-Phyto documentation eliminated runway heat exposure and customs hold times.'
  },
  {
    id: 'case-ca-avocado',
    client: 'Multinational Agro-Conglomerate',
    headline: '24-Day Transoceanic Controlled Atmosphere (CA) Hass Avocado Sea Bridge',
    summary: 'Transported 1,400 metric tons of fresh Hass avocados in CA reefers from South American orchards to Rotterdam, keeping O2 at 4% and CO2 at 5% to halt ripening during sea voyage.',
    metrics: [
      { label: 'Reefer FEUs', val: '58 FEUs' },
      { label: 'Ocean Transit', val: '24 Days' },
      { label: 'Class-1 Grade Yield', val: '99.4%' }
    ],
    takeaway: 'Achieved 58% freight cost savings compared to air cargo while delivering avocados with perfect green-skin firmness.'
  },
  {
    id: 'case-sashimi-express',
    client: 'Premium Deep-Sea Fishery Alliance',
    headline: 'Ultra-Deep Frozen (-30°C) Bluefin Tuna & Tiger Prawns to Tokyo Toyosu',
    summary: 'Delivered deep-frozen sashimi grade yellowfin tuna and aquaculture tiger prawns across the Indian Ocean to Japan under continuous -30°C telemetry with zero ice crystal cellular rupture.',
    metrics: [
      { label: 'Core Temp Kept', val: '-30.4°C' },
      { label: 'Auction Grade', val: '100% Top Tier' },
      { label: 'Histamine Reading', val: 'Zero Detected' }
    ],
    takeaway: 'NIST-calibrated deep core probes provided instant auction release at Tokyo Toyosu Fish Market.'
  }
];

export const perishableStandards = [
  'USDA-APHIS Certified In-Transit Cold Treatment Protocol',
  'IATA CEIV Fresh Aviation Perishable Handling Network',
  'Codex Alimentarius HACCP Certified Supply Chain Fleet',
  'GlobalG.A.P. Chain of Custody Accredited Handling',
  'EU TRACES NT & EFSA Green-Lane Customs Registered'
];

export const perishableFaqs = [
  {
    q: 'How does Controlled Atmosphere (CA) technology delay fruit ripening?',
    a: 'Fresh fruits continue to "breathe" after harvest, consuming oxygen and producing carbon dioxide and ethylene gas (the ripening hormone). Our CA reefer containers dynamically purge atmospheric oxygen down to 3-5% using continuous nitrogen generators and introduce catalytic ethylene scrubbers. This puts the fruit into a dormant state, arresting senescence and preserving crispness for up to 28 days during ocean voyages.'
  },
  {
    q: 'How do you prevent perishables from spoiling during high-temperature airport tarmac transfers?',
    a: 'Tarmac apron transfers are protected using insulated thermal pallet blankets and active refrigerated cool-dollies that maintain an internal temperature of +2°C to +4°C even under 45°C direct sun. Furthermore, our air freight teams prioritize tarmac direct loading, reducing ambient tarmac exposure to less than 35 minutes.'
  },
  {
    q: 'What is USDA Cold Treatment (CT) and how does Global Link ensure compliance?',
    a: 'Cold Treatment is a quarantine requirement enforced by USDA-APHIS and other biosecurity authorities to eliminate fruit flies without chemical pesticides. It mandates that fruit pulp temperatures remain below a specific threshold (e.g., +1.11°C) continuously for 14 to 16 consecutive days. We install 3 calibrated USDA pulp probes per container and provide live satellite verification logs to guarantee seamless clearance upon arrival.'
  },
  {
    q: 'Can you handle delicate commodities like live lobsters or sashimi-grade tuna?',
    a: 'Yes. For live crustaceans, we utilize specialized oxygenated bio-containers with chilled seawater circulation and bio-filtration. For sashimi-grade tuna and salmon, our ultra-deep freeze reefers maintain -30°C to prevent lipid oxidation and flesh discoloration, accompanied by dry ice backup systems.'
  },
  {
    q: 'What documentation is required for international perishable exports?',
    a: 'International perishable consignments require an electronic Phytosanitary Certificate (for plant products) or Veterinary Health Certificate (for meats/seafood), a Certificate of Origin, Commercial Invoice, Packing List with batch numbers, and continuous temperature logging records. We pre-file all documentation through e-Phyto and TRACES NT prior to shipment arrival.'
  },
  {
    q: 'Do you offer seasonal charter capacity during peak harvest windows?',
    a: 'Yes. We contract dedicated Boeing 777F and 747-8F freighters during harvest windows (such as summer mango or winter cherry seasons), offering up to 100 metric tons of payload per flight with guaranteed departure slots and direct customs green-lane processing.'
  }
];

