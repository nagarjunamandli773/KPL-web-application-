// =========================================================================
// AUTOMOTIVE LOGISTICS DATA
// IATF 16949:2016 Certified Just-in-Time (JIT), Just-in-Sequence (JIS) & Finished Vehicle Logistics (FVL)
// =========================================================================

export const autoHeroStats = [
  {
    value: '99.98%',
    label: 'Just-in-Sequence (JIS) Precision',
    desc: 'Zero lineside assembly stoppages across 850,000+ OEM chassis broadcasts',
    badge: 'ZERO-STOPPAGE SLA'
  },
  {
    value: '1.4M+ / yr',
    label: 'Finished Vehicles Transported',
    desc: 'Pure Car Carrier RoRo vessels, bi-level autoracks, and multi-car transporters',
    badge: 'GLOBAL FVL VOLUME'
  },
  {
    value: '< 2 Hours',
    label: 'Emergency VOR Hot-Shot Dispatch',
    desc: '24/7 Vehicle-Off-Road rush courier reaching over 15,000 global dealership hubs',
    badge: 'CRITICAL VOR RESPONSE'
  },
  {
    value: 'IATF 16949',
    label: 'Certified Automotive Quality',
    desc: 'Audited compliance under VDA 6.2/6.3 and global OEM Tier-1 supplier standards',
    badge: 'OEM CERTIFIED EXCELLENCE'
  }
];

export const autoServiceTiers = [
  {
    id: 'tier-jit-jis',
    name: 'Just-in-Time (JIT) & Just-in-Sequence (JIS) Feeding',
    turnaround: 'Continuous 15-Minute Broadcast Cadence',
    fleetType: 'Dedicated Lineside Shuttle Fleet',
    qualityStandard: 'Zero-Particulate Clean Packaging',
    penaltyProtection: '$50,000/min Assembly Stoppage Shield',
    description: 'Sequenced delivery of cockpits, dashboards, wiring harnesses, and powertrain subassemblies directly to OEM assembly plant workstations matching exact chassis build numbers.',
    image: '/automotive.jpg',
    badge: 'Sub-15m Lineside Feeding Window',
    badgeColor: '#EA580C',
    badgeBg: '#FFF7ED',
    highlights: [
      'EDI 866 Production Sequence messaging integrated directly into OEM plant MES',
      'Electronic RFID kitting carriages rolled straight into assembly line staging cells',
      'Buffer sequencing hubs located within 10 miles of major vehicle assembly plants',
      'Dedicated emergency hot-shot couriers on 24/7 standby for zero line-down risk'
    ],
    features: [
      'EDI 866 Production Sequence messaging integrated directly into OEM plant MES',
      'Electronic RFID kitting carriages rolled straight into assembly line staging cells',
      'Buffer sequencing hubs located within 10 miles of major vehicle assembly plants',
      'Dedicated emergency hot-shot couriers on 24/7 standby for zero line-down risk'
    ],
    points: [
      'EDI 866 Production Sequence messaging integrated directly into OEM plant MES',
      'Electronic RFID kitting carriages rolled straight into assembly line staging cells',
      'Buffer sequencing hubs located within 10 miles of major vehicle assembly plants',
      'Dedicated emergency hot-shot couriers on 24/7 standby for zero line-down risk'
    ]
  },
  {
    id: 'tier-fvl-roro',
    name: 'Finished Vehicle Logistics (FVL) & RoRo Shipping',
    turnaround: 'Zero-Scratch Multi-Modal Network',
    fleetType: 'Pure Car Carriers (PCTC) & Bi-Level Autorack',
    qualityStandard: '100% Photographic VIN Handover Audit',
    penaltyProtection: 'Comprehensive CBU Transit Marine Insurance',
    description: 'Door-to-door global distribution of completely built units (CBUs) including luxury sedans, commercial trucks, and electric vehicles from factory roll-off to dealership compounds.',
    image: '/land-freight.jpg',
    badge: 'Zero-Scratch White-Glove Handover',
    badgeColor: '#C2410C',
    badgeBg: '#FFF7ED',
    highlights: [
      'Multi-deck RoRo vessel charters with vehicle wheel-chock lashing systems',
      'GPS and impact sensor telemetry tracking chassis acceleration and tilt during ocean transit',
      'Port compound pre-delivery inspection (PDI), de-waxing, and accessory installation',
      'Enclosed multi-car transporters for prototype and exotic high-value vehicles'
    ],
    features: [
      'Multi-deck RoRo vessel charters with vehicle wheel-chock lashing systems',
      'GPS and impact sensor telemetry tracking chassis acceleration and tilt during ocean transit',
      'Port compound pre-delivery inspection (PDI), de-waxing, and accessory installation',
      'Enclosed multi-car transporters for prototype and exotic high-value vehicles'
    ],
    points: [
      'Multi-deck RoRo vessel charters with vehicle wheel-chock lashing systems',
      'GPS and impact sensor telemetry tracking chassis acceleration and tilt during ocean transit',
      'Port compound pre-delivery inspection (PDI), de-waxing, and accessory installation',
      'Enclosed multi-car transporters for prototype and exotic high-value vehicles'
    ]
  },
  {
    id: 'tier-ckd-skd',
    name: 'Completely Knocked Down (CKD / SKD) Global Kits',
    turnaround: 'Multi-Country Assembly Logistics',
    fleetType: 'Heavy-Cube Specialized Sea Containers',
    qualityStandard: 'VCI Moisture & Corrosion Barrier',
    penaltyProtection: 'Barcode-Scanned Part Guarantee',
    description: 'Consolidated packaging and global sea freight of completely knocked-down automotive sets, stamping panels, engines, and gearboxes for assembly in emerging markets.',
    image: '/track-shipment-hero.jpg',
    badge: '100% Complete Assembly Sets',
    badgeColor: '#B45309',
    badgeBg: '#FFFBEB',
    highlights: [
      'Precision density nesting algorithms maximizing container volumetric utilization',
      'VCI (Vapor Corrosion Inhibitor) packaging preventing rust during ocean transit',
      'Automated serial number scanning and customs bond documentation management',
      'Staging and sequencing at destination CKD hub prior to local plant delivery'
    ],
    features: [
      'Precision density nesting algorithms maximizing container volumetric utilization',
      'VCI (Vapor Corrosion Inhibitor) packaging preventing rust during ocean transit',
      'Automated serial number scanning and customs bond documentation management',
      'Staging and sequencing at destination CKD hub prior to local plant delivery'
    ],
    points: [
      'Precision density nesting algorithms maximizing container volumetric utilization',
      'VCI (Vapor Corrosion Inhibitor) packaging preventing rust during ocean transit',
      'Automated serial number scanning and customs bond documentation management',
      'Staging and sequencing at destination CKD hub prior to local plant delivery'
    ]
  },
  {
    id: 'tier-ev-batteries',
    name: 'High-Voltage EV Battery & Lithium Pack Logistics',
    turnaround: 'Active Thermal & Dangerous Goods Shield',
    fleetType: 'UN 38.3 Climate-Controlled Hazmat Units',
    qualityStandard: 'Class 9 Hazmat Thermal Runaway Defense',
    penaltyProtection: 'Certified Explosion-Resistant Containers',
    description: 'Specialized dangerous goods transport for high-capacity lithium-ion EV traction battery modules, cell assemblies, and gigafactory chemical raw materials under strict climate control.',
    image: '/industrial.jpg',
    badge: 'UN 38.3 Thermal-Runaway Certified',
    badgeColor: '#EA580C',
    badgeBg: '#FFF7ED',
    highlights: [
      'Certified Class 9 hazardous goods containment complying with ADR, IMDG, and 49 CFR',
      'PyroBubbles and ceramic thermal barrier packaging containing potential runaway events',
      'Continuous real-time telemetry reporting temperature, shock, and State-of-Charge (SoC)',
      'Specialized EV battery recycling and damaged-pack emergency reclamation services'
    ],
    features: [
      'Certified Class 9 hazardous goods containment complying with ADR, IMDG, and 49 CFR',
      'PyroBubbles and ceramic thermal barrier packaging containing potential runaway events',
      'Continuous real-time telemetry reporting temperature, shock, and State-of-Charge (SoC)',
      'Specialized EV battery recycling and damaged-pack emergency reclamation services'
    ],
    points: [
      'Certified Class 9 hazardous goods containment complying with ADR, IMDG, and 49 CFR',
      'PyroBubbles and ceramic thermal barrier packaging containing potential runaway events',
      'Continuous real-time telemetry reporting temperature, shock, and State-of-Charge (SoC)',
      'Specialized EV battery recycling and damaged-pack emergency reclamation services'
    ]
  }
];

export const autoProductionModes = [
  {
    id: 'mode-jis-carousel',
    name: 'Synchronized JIS Carousel Lineside Feed',
    protocol: 'EDI 866 JIS Broadcast Integration',
    bufferLead: '15-Min Buffer Lead Time',
    sla: '100% Sequence Accuracy',
    slaTarget: '100% Sequence Accuracy',
    desc: 'Direct subassembly sequencing delivering parts in the exact color and trim order of oncoming assembly line chassis with zero buffer stock.',
    efficiencyMetric: 'Eliminates 92% of lineside floor congestion'
  },
  {
    id: 'mode-vor-hotshot',
    name: 'Emergency VOR (Vehicle-Off-Road) Dealer Rush',
    protocol: 'Dedicated Sprint Van / Air Charter',
    bufferLead: '< 2-Hour Dispatch Window',
    sla: '< 2-Hour Dispatch SLA',
    slaTarget: '< 2-Hour Dispatch Window',
    desc: 'High-priority expedited air charter and sprint van delivery getting critical replacement parts to dealerships within hours to avoid customer buy-backs.',
    efficiencyMetric: '99.4% first-time repair rate for flagship dealers'
  },
  {
    id: 'mode-returnable-dunnage',
    name: 'Closed-Loop Returnable Dunnage Staging',
    protocol: 'RFID Stillage & Bin Telematics',
    bufferLead: 'Zero Component Dunnage Deficits',
    sla: '100% Bin Tracking',
    slaTarget: 'Zero Component Dunnage Deficits',
    desc: 'Automated tracking, cleaning, repair, and reverse backhaul of custom metal stillages, engine pallets, and plastic collapsible totes back to component suppliers.',
    efficiencyMetric: 'Saves $2.4M annually in disposable packaging'
  }
];

export const autoProductionVolumes = [
  {
    id: 'vol-tier1-feeder',
    name: 'Tier-1 Subsystem Feeder',
    units: '5,000 – 25,000 Sets / yr',
    label: '5,000 – 25,000 Sets / yr (Tier-1 Subsystem)',
    throughputCapacity: 'Daily Scheduled Sequenced Cross-Dock',
    costPerKit: '$18.50 / module delivery',
    annualSavings: '$180,000 – $420,000 in lineside handling'
  },
  {
    id: 'vol-oem-hub',
    name: 'OEM Assembly Plant Hub',
    units: '50,000 – 250,000 Units / yr',
    label: '50,000 – 250,000 Units / yr (OEM Assembly Plant)',
    throughputCapacity: '24/7 Dedicated Multi-Trailer Relay Fleet',
    costPerKit: '$11.80 / module delivery',
    annualSavings: '$1,400,000 – $3,200,000 in inventory holding'
  },
  {
    id: 'vol-global-conglomerate',
    name: 'Multinational Auto Group',
    units: '500,000+ Units / yr',
    label: '500,000+ Units (Multinational Automotive Group)',
    throughputCapacity: 'Integrated Intermodal Rail, RoRo & Air Network',
    costPerKit: '$8.20 / module delivery',
    annualSavings: '$6,500,000+ in supply chain optimization'
  }
];

export const autoPillars = [
  {
    id: 'pillar-lineside-jit',
    title: 'Lineside JIT/JIS Sequencing & Broadcast Feeding',
    subtitle: 'Synchronized OEM Assembly Line Feeding',
    tagline: 'Synchronized Part Delivery Matching the OEM Assembly Line Beat Rate Down to the Second',
    iconColor: '#EA580C',
    image: '/automotive.jpg',
    metric: '99.98% Sequence Precision',
    description: 'An assembly line stoppage can cost an automotive manufacturer up to $50,000 per minute. Our intelligent sequencing centers kit parts in the exact chassis order, rolling them lineside at precise takt-time intervals.',
    desc: 'An assembly line stoppage can cost an automotive manufacturer up to $50,000 per minute. Our intelligent sequencing centers kit parts in the exact chassis order, rolling them lineside at precise takt-time intervals.',
    points: [
      'Direct API/EDI synchronization with OEM Manufacturing Execution Systems (MES)',
      'Pick-to-light and RFID barcode verification ensuring zero incorrect trim or engine parts',
      'Lineside kitting carts designed with ergonomic layout reducing operator handling fatigue',
      'Strategically positioned sequencing hubs within 10 miles of major vehicle assembly plants'
    ],
    features: [
      'Direct API/EDI synchronization with OEM Manufacturing Execution Systems (MES)',
      'Pick-to-light and RFID barcode verification ensuring zero incorrect trim or engine parts',
      'Lineside kitting carts designed with ergonomic layout reducing operator handling fatigue',
      'Strategically positioned sequencing hubs within 10 miles of major vehicle assembly plants'
    ],
    accentColor: '#EA580C',
    badgeText: 'JIT/JIS Feeding'
  },
  {
    id: 'pillar-fvl-roro',
    title: 'Finished Vehicle Logistics (FVL) & RoRo Operations',
    subtitle: 'Global Pure Car Carrier & Dealer Distribution',
    tagline: 'Global Pure Car Carrier Shipping, Bi-Level Autorack Rail, and Damage-Free Dealer Transport',
    iconColor: '#C2410C',
    image: '/land-freight.jpg',
    metric: '1.4M+ Vehicles Handled',
    description: 'From factory roll-off to final consumer handover, our finished vehicle logistics network guarantees zero cosmetic or mechanical damage across ocean RoRo vessels, inland railheads, and dealer transporters.',
    desc: 'From factory roll-off to final consumer handover, our finished vehicle logistics network guarantees zero cosmetic or mechanical damage across ocean RoRo vessels, inland railheads, and dealer transporters.',
    points: [
      'PCTC (Pure Car and Truck Carrier) ocean shipping with climate-controlled enclosed decks',
      'Full transit VIN tracking via passive RFID scanning at terminal entry and exit gates',
      'Port compound pre-delivery inspection (PDI), protective wrapping, and firmware updates',
      'Enclosed specialized car haulers for ultra-luxury, concept, and armored commercial vehicles'
    ],
    features: [
      'PCTC (Pure Car and Truck Carrier) ocean shipping with climate-controlled enclosed decks',
      'Full transit VIN tracking via passive RFID scanning at terminal entry and exit gates',
      'Port compound pre-delivery inspection (PDI), protective wrapping, and firmware updates',
      'Enclosed specialized car haulers for ultra-luxury, concept, and armored commercial vehicles'
    ],
    accentColor: '#C2410C',
    badgeText: 'Vehicle Logistics'
  },
  {
    id: 'pillar-ev-battery',
    title: 'High-Voltage EV Battery Cold-Chain & Hazmat Transport',
    subtitle: 'Certified Class 9 Lithium-Ion Logistics',
    tagline: 'Certified Class 9 Lithium-Ion Logistics with Thermal-Runaway Suppression Systems',
    iconColor: '#D84315',
    image: '/industrial.jpg',
    metric: 'UN 38.3 Certified',
    description: 'Electric vehicle traction packs require specialized hazardous cargo handling. We operate climate-stabilized transport corridors equipped with advanced fire-suppression barriers and live IoT temperature monitoring.',
    desc: 'Electric vehicle traction packs require specialized hazardous cargo handling. We operate climate-stabilized transport corridors equipped with advanced fire-suppression barriers and live IoT temperature monitoring.',
    points: [
      'Multi-layer thermal insulation and dry vapor-lock barrier cells preventing thermal propagation',
      'Real-time IoT cloud monitoring reporting battery temperature, humidity, and shock impacts',
      'Full regulatory compliance with UN 38.3, ADR Special Provision 376/377, and IMDG Code',
      'Certified Hazmat drivers and warehouse personnel trained in emergency high-voltage isolation'
    ],
    features: [
      'Multi-layer thermal insulation and dry vapor-lock barrier cells preventing thermal propagation',
      'Real-time IoT cloud monitoring reporting battery temperature, humidity, and shock impacts',
      'Full regulatory compliance with UN 38.3, ADR Special Provision 376/377, and IMDG Code',
      'Certified Hazmat drivers and warehouse personnel trained in emergency high-voltage isolation'
    ],
    accentColor: '#D84315',
    badgeText: 'EV Battery Hazmat'
  },
  {
    id: 'pillar-aftermarket-vor',
    title: 'Aftermarket Spare Parts & Emergency VOR Networks',
    subtitle: 'Sub-2h Emergency Dealer Dispatch',
    tagline: 'Sub-2h Emergency Dispatch Supplying Over 15,000 Dealerships and Service Centers',
    iconColor: '#D97706',
    image: '/track-shipment-hero.jpg',
    metric: '< 2h Dispatch Window',
    description: 'A Vehicle-Off-Road (VOR) damages customer loyalty. Our regional parts distribution centers maintain high-velocity inventory of collision, mechanical, and electrical components with guaranteed morning delivery.',
    desc: 'A Vehicle-Off-Road (VOR) damages customer loyalty. Our regional parts distribution centers maintain high-velocity inventory of collision, mechanical, and electrical components with guaranteed morning delivery.',
    points: [
      'Automated dealer replenishment with silent night-key lockbox delivery before 7:00 AM',
      'Critical hot-shot sprint vans and onboard courier air charters for mission-critical parts',
      'Centralized reverse logistics for warranty part inspection, core returns, and core credits',
      'AI demand forecasting minimizing obsolete slow-moving spare inventory carrying costs'
    ],
    features: [
      'Automated dealer replenishment with silent night-key lockbox delivery before 7:00 AM',
      'Critical hot-shot sprint vans and onboard courier air charters for mission-critical parts',
      'Centralized reverse logistics for warranty part inspection, core returns, and core credits',
      'AI demand forecasting minimizing obsolete slow-moving spare inventory carrying costs'
    ],
    accentColor: '#D97706',
    badgeText: 'Aftermarket & VOR'
  }
];

export const autoGallery = [
  {
    id: 'gal-ev-motors',
    title: 'Electric Commercial Van Powertrain Motors (90kW)',
    category: 'EV Propulsion',
    image: '/product-images/Electric Commercial Van Powertrain Motors (90kW).png',
    badge: 'EV Propulsion Unit',
    spec: 'High-Voltage 90kW Inverter Integrated • Vibration-Damped Steel Skid • In-Transit Nitrogen Purge',
    compliance: 'ISO 26262 ASIL-D Validated Packaging',
    highlight: 'Shock-isolated transit',
    desc: 'High-voltage 90kW commercial van electric drive units transported under precision vibration-damped framing.'
  },
  {
    id: 'gal-forged-wheels',
    title: 'Forged Aluminum Alloy Wheel Sets (19"-21")',
    category: 'Chassis & Suspension',
    image: '/product-images/Forged Aluminum Alloy Wheel Sets (19-21).png',
    badge: 'Lightweight Alloy',
    spec: 'CNC Monoblock Forged • Protective Polyethylene Edge Guards • Anti-Blemish Interleaving Foam',
    compliance: 'TÜV / VIA Certified Rim Protection',
    highlight: 'Zero-blemish finish',
    desc: 'Premium CNC-machined alloy wheels packed with protective rim edge guards and scratch-resistant foam layers.'
  },
  {
    id: 'gal-adaptive-led',
    title: 'Adaptive LED Matrix Vehicle Headlight Assemblies',
    category: 'Optics & Electronics',
    image: '/product-images/Adaptive LED Vehicle Headlight Assemblies.png',
    badge: 'Smart Automotive Optics',
    spec: '84-Pixel Matrix Beam Assembly • Electrostatic Discharge (ESD) Shielding • Cleanroom Foam Trays',
    compliance: 'ECE R123 & SAE J2829 Automotive Standard',
    highlight: 'ESD static shielded',
    desc: 'Sensitive matrix LED automotive headlight units transported in anti-static cushioned master cartons.'
  },
  {
    id: 'gal-brake-pads',
    title: 'Heavy-Duty Commercial Brake Systems (ECE R90)',
    category: 'Braking & Safety',
    image: '/product-images/Heavy-Duty Commercial Brake Pads (ECE R90).png',
    badge: 'OEM Braking Friction',
    spec: 'Low-Metallic High-Friction Formulations • Moisture-Barrier Shrink Wrapped • Heavy-Cube Pallets',
    compliance: 'ECE R90 OEM Type Approval',
    highlight: 'Heavy-cube intermodal',
    desc: 'High-friction commercial vehicle brake sets strapped to heavy-duty export pallets with moisture-barrier film.'
  },
  {
    id: 'gal-agm-batteries',
    title: 'Deep-Cycle Maintenance-Free AGM Starter Batteries',
    category: 'Electrical & Batteries',
    image: '/product-images/Deep-Cycle Maintenance-Free AGM Batteries.png',
    badge: 'Class 8 Starting Power',
    spec: 'Absorbent Glass Mat (AGM) • Terminal Insulating Caps • Acid-Resistant Secondary Containment Spill Trays',
    compliance: 'UN 2800 / DOT Non-Spillable Certified',
    highlight: 'Hazmat compliant',
    desc: 'High-performance AGM commercial vehicle batteries with acid-proof secondary containment and terminal caps.'
  },
  {
    id: 'gal-shock-absorbers',
    title: 'Hydraulic Heavy Truck Shock Absorbers & Dampers',
    category: 'Chassis & Suspension',
    image: '/product-images/Hydraulic Heavy Truck Shock Absorbers.png',
    badge: 'Chassis Hydraulics',
    spec: 'Twin-Tube Nitrogen Pressurized • Heavy-Duty Returnable Steel Stillages • Anti-Piston Scoring Foam',
    compliance: 'DIN 74051 Heavy Vehicle Suspension',
    highlight: 'Returnable steel stillage',
    desc: 'Industrial-grade hydraulic dampening assemblies secured in modular returnable steel racking crates.'
  },
  {
    id: 'gal-transmission-gears',
    title: 'Automotive Transmission Crown & Pinion Gear Sets',
    category: 'Drivetrain & Gears',
    image: '/product-images/Automotive Transmission Crown & Pinion Sets.png',
    badge: 'Precision Hypoid Gears',
    spec: 'Case-Hardened Alloy Steel • Vapor Corrosion Inhibitor (VCI) Oil Immersion • Hermetically Sealed Bags',
    compliance: 'AGMA Quality Grade 12',
    highlight: 'VCI corrosion barrier',
    desc: 'Precision-ground alloy gear sets protected with VCI anti-rust oil immersion and heat-sealed barrier bags.'
  },
  {
    id: 'gal-commercial-alternators',
    title: 'Heavy-Duty 24V 150A Commercial Alternators',
    category: 'Electrical & Batteries',
    image: '/product-images/Heavy-Duty 24V Commercial Alternators.png',
    badge: 'Lineside Assembly Kit',
    spec: 'High-Output Brushless Rotor • JIS Kitting Trolley Compatible • Multi-Point Barcode Tracing',
    compliance: 'ISO 8854 Heavy Vehicle Alternators',
    highlight: 'Lineside sequence ready',
    desc: 'High-output commercial alternators pre-tested and kitted for Just-in-Sequence OEM assembly line injection.'
  }
];

export const autoComplianceMatrix = [
  {
    standard: 'Ford Motor Co. Q1 Quality',
    authority: 'Ford Global Purchasing',
    scope: 'Materials Management Operations Guideline (MMOG/LE), EDI 866 JIS broadcast, and <0.02% defect rate',
    controls: 'Automated EDI 866 broadcast integration, barcode scanning with 100% photographic lineside validation',
    status: 'Q1 Preferred Carrier'
  },
  {
    standard: 'Toyota Production System (TPS)',
    authority: 'Toyota Motor Corporation',
    scope: 'Heijunka production leveling, Kanban replenishment loops, and zero-waste logistics flow',
    controls: 'Automated 15-minute lineside shuttle runs with returnable dunnage RFID verification loops',
    status: 'TPS Level-A Certified'
  },
  {
    standard: 'BMW Group IATF 16949',
    authority: 'BMW Logistics & Quality Division',
    scope: 'Sequence delivery for high-precision cockpits, powertrains, and customized M-Sport chassis trims',
    controls: 'Error-proofed pick-to-light sequencing centers located within 12 minutes of vehicle assembly lines',
    status: 'Direct Tier-1 Sequencer'
  },
  {
    standard: 'Tesla Gigafactory UN 38.3',
    authority: 'Tesla Energy & Gigafactory Operations',
    scope: 'Hazardous transport of high-voltage structural battery packs, megawatt battery units, and cell trays',
    controls: 'Dedicated climate-controlled thermal trailers equipped with active fire-suppression foam barriers',
    status: 'Class 9 Hazmat Qualified'
  },
  {
    standard: 'Volkswagen Group Formel Q',
    authority: 'Volkswagen AG Group Quality',
    scope: 'Supply chain quality capability, VDA 6.3 process auditing, and complete parts traceability',
    controls: 'Continuous RFID batch scanning, electronic customs bonded staging, and automated delivery confirmation',
    status: 'Formel Q Konkret Pass'
  },
  {
    standard: 'Mercedes-Benz Heavy Trucks',
    authority: 'Daimler Truck AG Logistics',
    scope: 'Completely Built Unit (CBU) multi-modal transport and commercial heavy truck chassis shipping',
    controls: 'Specialized low-angle hydraulic vehicle haulers and wheel-harness lashing systems',
    status: 'Damage-Free Certified'
  }
];

export const autoCaseStudies = [
  {
    id: 'case-transatlantic-roro',
    client: 'German Luxury Automotive OEM',
    headline: 'Transatlantic RoRo Ocean Bridge: 48,000 Luxury Electric SUVs Moved with Zero Blemish',
    summary: 'Orchestrated the door-to-door maritime and inland rail transport of 48,000 premium luxury electric vehicles from Bremerhaven to North American dealership compounds.',
    metrics: [
      { label: 'Vehicles Handled', val: '48,000' },
      { label: 'Zero-Blemish Rate', val: '99.98%' },
      { label: 'Transit Days Saved', val: '4.5 Days' }
    ],
    takeaway: 'Specialized RoRo deck wheel chocking and pre-delivery inspection (PDI) port compounds ensured immediate showroom delivery.'
  },
  {
    id: 'case-jis-cockpit',
    client: 'Tier-1 Automotive Interior Subsystem Supplier',
    headline: 'Lineside JIT/JIS Cockpit Sequencing for 320,000 Vehicles with 100% On-Time Precision',
    summary: 'Constructed an automated sequencing cross-dock 4 miles from a high-volume SUV assembly plant, broadcasting cockpits in exact vehicle chassis build order on 15-minute takt intervals.',
    metrics: [
      { label: 'Cockpits Sequenced', val: '320,000' },
      { label: 'Line Stoppage Cost', val: '$0.00' },
      { label: 'Sequence Accuracy', val: '99.98%' }
    ],
    takeaway: 'Direct EDI 866 MES broadcast synchronization eliminated lineside warehouse staging requirements completely.'
  },
  {
    id: 'case-vor-dealer',
    client: 'Global Commercial Truck & Fleet Manufacturer',
    headline: 'Emergency VOR Hot-Shot Fleet Supplying 1,400 Dealerships in Under 2 Hours',
    summary: 'Created a centralized urgent-response parts network utilizing sprint vans and next-flight-out air couriers to deliver critical warranty and breakdown parts to fleet service centers.',
    metrics: [
      { label: 'Dealer Hubs Served', val: '1,400' },
      { label: 'Average Dispatch', val: '< 94 Mins' },
      { label: 'Customer Buy-Backs', val: '-84.5%' }
    ],
    takeaway: '24/7 dedicated fleet logistics dispatch centers prevented multi-day commercial vehicle downtime penalties.'
  }
];

export const autoStandards = [
  'IATF 16949:2016 Automotive Quality Management Certified',
  'VDA 6.2 & VDA 6.3 German Automotive Industry Audited',
  'UN 38.3 & ADR Class 9 Lithium-Ion Battery Certified',
  'ISO 9001:2015 & ISO 14001 Environmental Standard',
  'C-TPAT Tier 3 & AEO High-Security Automotive Trade Accreditation'
];

export const autoFaqs = [
  {
    q: 'How does your Just-in-Sequence (JIS) broadcasting ensure zero assembly line stoppages?',
    a: 'Our systems integrate directly with your assembly plant’s Manufacturing Execution System (MES) via EDI 866 or real-time API. When a vehicle chassis hits the trim line, the exact part sequence broadcast triggers automated pick-to-light kitting at our nearby sequencing hub. Kits are loaded onto dedicated shuttle trucks in reverse order and delivered directly lineside within your designated 15-minute takt-time window, fully backed by our zero-stoppage financial guarantee.'
  },
  {
    q: 'What protocols protect finished vehicles (CBUs) from damage during transport?',
    a: 'We operate Pure Car and Truck Carriers (PCTC) with climate-controlled enclosed decks and bi-level enclosed automotive railcars. Drivers wear belt-buckle guards and protective clothing. Vehicles undergo comprehensive high-definition photographic scanning at every handover point, with electronic VIN tracking and impact sensors monitoring acceleration and tilt.'
  },
  {
    q: 'How do you handle hazardous Class 9 Electric Vehicle (EV) battery transport?',
    a: 'EV battery modules and complete traction packs are transported in full compliance with UN 38.3, ADR Special Provisions 376/377, and IMDG code. We use climate-controlled trailers equipped with PyroBubbles thermal suppression barriers, continuous IoT temperature telemetry, and certified Hazmat drivers trained in emergency high-voltage isolation.'
  },
  {
    q: 'What is your response time for Emergency Vehicle-Off-Road (VOR) spare parts?',
    a: 'Our VOR emergency desk operates 24/7/365. Critical parts are dispatched within 2 hours via dedicated hot-shot sprint vans or booked on the next commercial flight out. For nationwide dealership networks, we also provide silent night-key delivery directly into dealership service lockboxes prior to 7:00 AM.'
  },
  {
    q: 'Can you manage Closed-Loop Returnable Dunnage and metal stillages?',
    a: 'Yes. We track returnable dunnage (custom metal stillages, engine pallets, collapsible plastic KLT totes) using RFID and barcode tracking across our entire fleet. Our hubs inspect, wash, repair, and stage packaging before backhauling it to component suppliers, eliminating disposable cardboard waste and packaging deficits.'
  },
  {
    q: 'Are your facilities and processes audited under automotive OEM quality standards?',
    a: 'Yes. All our automotive logistics hubs operate under certified IATF 16949:2016 quality management systems and are regularly audited under VDA 6.2 and VDA 6.3 standards. We maintain preferred carrier status with major American, German, and Japanese automotive OEMs.'
  }
];
