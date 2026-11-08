// =========================================================================
// PHARMA & HEALTHCARE LOGISTICS DATA
// WHO GDP, IATA CEIV Pharma & FDA 21 CFR Part 11 Certified Cold-Chain Supply
// =========================================================================

export const pharmaHeroStats = [
  {
    value: '99.98%',
    label: 'Cold-Chain Integrity Rate',
    desc: 'Zero temperature excursion across 180,000+ critical clinical consignments',
    badge: 'ZERO EXCURSION SLA'
  },
  {
    value: 'WHO GDP',
    label: 'Certified GxP Quality System',
    desc: 'Audited compliance under WHO Technical Report Series 961 & EU GDP guidelines',
    badge: 'GLOBAL GxP COMPLIANT'
  },
  {
    value: '-196°C to +25°C',
    label: 'Full-Spectrum Thermal Control',
    desc: 'Cryogenic LN2, ultra-cold dry ice, chilled (+2°C/+8°C), and controlled CRT',
    badge: '4-TIER TEMPERATURE ZONES'
  },
  {
    value: '<30 mins',
    label: 'Tarmac Direct Green-Lane SLA',
    desc: 'Direct runway transfer and priority medical customs clearance at key global hubs',
    badge: 'EXPEDITED GREEN LANE'
  }
];

export const pharmaTempRanges = [
  {
    id: 'range-cryo',
    name: 'Cryogenic Deep Freeze',
    tempDisplay: '-196°C to -80°C',
    color: '#0284C7',
    bg: 'rgba(2, 132, 199, 0.08)',
    borderColor: 'rgba(2, 132, 199, 0.25)',
    description: 'Liquid Nitrogen (LN2) dry vapor shippers engineered for cell therapies, stem cell banks, and genetic bio-specimens.',
    keyPackaging: 'MVE Dry Vapor Dewars • Non-hazardous liquid nitrogen absorption • 10-day static hold time',
    targetCargo: 'Gene Therapies, Cellular Vectors, Tissue Grafts, Cryopreserved Bio-Samples',
    transitRisk: 'High-Value Irreplaceable Cargo'
  },
  {
    id: 'range-ultra-cold',
    name: 'Ultra-Low Frozen',
    tempDisplay: '-80°C to -20°C',
    color: '#06B6D4',
    bg: 'rgba(6, 182, 212, 0.08)',
    borderColor: 'rgba(6, 182, 212, 0.25)',
    description: 'Dry ice reinforced active containers and VIP boxes for mRNA vaccines, active biologics, and viral seed stocks.',
    keyPackaging: 'Active dry-ice replenishment • Multi-layer vacuum insulated panels (VIP) • Solid CO2 bunkers',
    targetCargo: 'mRNA Vaccines, Viral Antigens, Recombinant Proteins, Deep-Frozen Enzymes',
    transitRisk: 'Critical Time & Thermal Sensitivity'
  },
  {
    id: 'range-chilled',
    name: 'Validated Cold Chain',
    tempDisplay: '+2°C to +8°C',
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.08)',
    borderColor: 'rgba(16, 185, 129, 0.25)',
    description: 'The standard biopharmaceutical corridor: temperature-stabilized reefer fleets with redundant dual-compressor cooling.',
    keyPackaging: 'PCM (Phase Change Material) thermal packs • Validated 120-hour passive shippers • Active RKN/RAP units',
    targetCargo: 'Monoclonal Antibodies, Insulin, Pediatric Vaccines, Biologic Injections',
    transitRisk: 'Zero Freezing Tolerance'
  },
  {
    id: 'range-crt',
    name: 'Controlled Room Temp (CRT)',
    tempDisplay: '+15°C to +25°C',
    color: '#F59E0B',
    bg: 'rgba(245, 158, 11, 0.08)',
    borderColor: 'rgba(245, 158, 11, 0.25)',
    description: 'Climate-controlled distribution shielding finished dose pharmaceuticals and diagnostic instruments from seasonal spikes.',
    keyPackaging: 'Insulated thermal pallet covers • Climate-monitored air freighters • Temperature-governed linehaul',
    targetCargo: 'Finished Tablets, Liquid Syrups, Diagnostic Reagents, Medical Devices',
    transitRisk: 'Seasonal Heatwave & Frost Spikes'
  }
];

export const pharmaCargoCategories = [
  {
    id: 'cat-biologics',
    name: 'Biologics & Biopharma',
    desc: 'Monoclonal antibodies, recombinant therapeutics, and peptide synthetics requiring strictly monitored non-vibrational transit.',
    defaultTemp: 'range-chilled',
    priority: 'Ultra-High SLA'
  },
  {
    id: 'cat-vaccines',
    name: 'Vaccines & Immunotherapies',
    desc: 'Global cold-chain distribution for seasonal, pediatric, and pandemic immunization programs with validated end-to-end tracing.',
    defaultTemp: 'range-ultra-cold',
    priority: 'High Volume Priority'
  },
  {
    id: 'cat-api',
    name: 'Active Pharmaceutical Ingredients (APIs)',
    desc: 'High-purity chemical and botanical active substances transported under strict humidity and atmospheric inerting.',
    defaultTemp: 'range-crt',
    priority: 'Bonded Security'
  },
  {
    id: 'cat-clinical-trials',
    name: 'Clinical Trial Supplies & Patient Kits',
    desc: 'Time-critical investigational medicinal products (IMPs) delivered direct to hospitals and global investigative research sites.',
    defaultTemp: 'range-cryo',
    priority: 'Direct-to-Site OBC'
  },
  {
    id: 'cat-medtech',
    name: 'Medical Devices & Surgical Implants',
    desc: 'ISO 13485 compliant sterilization-preserved logistics for diagnostic equipment, titanium implants, and hospital apparatus.',
    defaultTemp: 'range-crt',
    priority: 'Shock & Tilt Shielded'
  }
];

export const pharmaTransportProtocols = [
  {
    id: 'proto-priority-air',
    name: 'IATA CEIV Priority Air Charter',
    type: 'Air Freight Express',
    transitTime: '12 - 36 Hours',
    coverage: '180+ Global Gateways',
    features: [
      'Direct tarmac apron transfer bypassing warehouse temperature risk',
      'Active dry-ice re-icing hubs at Frankfurt, Dubai, Singapore, and Chicago',
      'Continuous 21 CFR Part 11 compliant live cellular & satellite data telemetry',
      'Pre-cleared regulatory customs green lane for expedited release'
    ]
  },
  {
    id: 'proto-pharma-reefer',
    name: 'Dual-Compressor Pharma Fleet',
    type: 'Dedicated Road & Intermodal',
    transitTime: '24 - 72 Hours',
    coverage: 'Cross-Border Regional Corridors',
    features: [
      'Dual autonomous cooling units with independent backup diesel power',
      'NIST-calibrated 6-point internal thermal matrix with live GPS reporting',
      'TAPA TSR-1 physical security locks with remote dispatch immobilization',
      'Pre-conditioned trailers with certified sanitization and air turnover'
    ]
  },
  {
    id: 'proto-onboard-courier',
    name: 'Critical On-Board Courier (OBC)',
    type: 'Dedicated Escort Hand-Carry',
    transitTime: '< 18 Hours Door-to-Door',
    coverage: 'Point-to-Point Worldwide',
    features: [
      'Dedicated medical logistics specialist accompanying shipment cabin-side',
      'Zero layover transfer risk with unbroken physical chain-of-custody',
      'Instant delivery signature and real-time biological condition audit',
      'Customs pre-cleared carnets for life-saving clinical trial emergencies'
    ]
  }
];

export const pharmaPillars = [
  {
    id: 'pillar-gdp-compliance',
    title: 'WHO GDP & GxP Audited Operations',
    subtitle: 'Uncompromising Quality Management Systems',
    desc: 'Every terminal, vehicle, and partner in our pharma network is certified under WHO Good Distribution Practice (Technical Report Series 961) and EU GDP 2013/C 343/01 standards.',
    description: 'Every terminal, vehicle, and partner in our pharma network is certified under WHO Good Distribution Practice (Technical Report Series 961) and EU GDP 2013/C 343/01 standards.',
    points: [
      'Validated standard operating procedures (SOPs) for all thermal handling stages',
      'Annual third-party GDP audit trails with full CAPA (Corrective Action) logging',
      'Qualified temperature-mapped warehouses with computerized monitoring',
      'Mandatory GxP training and continuous certification for all handling personnel'
    ],
    features: [
      'Validated standard operating procedures (SOPs) for all thermal handling stages',
      'Annual third-party GDP audit trails with full CAPA (Corrective Action) logging',
      'Qualified temperature-mapped warehouses with computerized monitoring',
      'Mandatory GxP training and continuous certification for all handling personnel'
    ],
    image: '/quality-assurance-hero.jpg',
    metric: '100% GxP Audit Pass Rate',
    iconColor: '#00BCD4'
  },
  {
    id: 'pillar-active-cold-chain',
    title: 'Validated Cold-Chain & Packaging',
    subtitle: 'Engineered Thermal Resilience',
    desc: 'We utilize industry-leading active thermal containers (Envirotainer, CSafe) and pre-qualified passive PCM solutions engineered to maintain stability during extreme tarmac ambient exposures.',
    description: 'We utilize industry-leading active thermal containers (Envirotainer, CSafe) and pre-qualified passive PCM solutions engineered to maintain stability during extreme tarmac ambient exposures.',
    points: [
      'Active dry ice and compressor-powered RKN/RAP aviation containers',
      '120-hour qualification testing under severe summer and winter thermal profiles',
      'Global dry-ice replenishment and battery charging stations at major transit hubs',
      'Eco-friendly reusable packaging lifecycle management with sanitized return flows'
    ],
    features: [
      'Active dry ice and compressor-powered RKN/RAP aviation containers',
      '120-hour qualification testing under severe summer and winter thermal profiles',
      'Global dry-ice replenishment and battery charging stations at major transit hubs',
      'Eco-friendly reusable packaging lifecycle management with sanitized return flows'
    ],
    image: '/air-freight.jpg',
    metric: '120-Hour Passive Hold Time',
    iconColor: '#06B6D4'
  },
  {
    id: 'pillar-iot-telemetry',
    title: 'Real-Time 21 CFR Part 11 Telemetry',
    subtitle: 'Total Transparency & Excursion Defense',
    desc: 'Proprietary multi-sensor IoT devices provide live cloud tracking of temperature, humidity, shock, tilt, atmospheric pressure, and light exposure inside every shipping unit.',
    description: 'Proprietary multi-sensor IoT devices provide live cloud tracking of temperature, humidity, shock, tilt, atmospheric pressure, and light exposure inside every shipping unit.',
    points: [
      'NIST-traceable digital sensors reporting encrypted data via 5G and satellite',
      'Automated geofenced deviation alerts dispatching emergency intervention protocols',
      'FDA 21 CFR Part 11 compliant immutable audit trails and digital signatures',
      'Instant temperature graph and electronic batch release dossier export on arrival'
    ],
    features: [
      'NIST-traceable digital sensors reporting encrypted data via 5G and satellite',
      'Automated geofenced deviation alerts dispatching emergency intervention protocols',
      'FDA 21 CFR Part 11 compliant immutable audit trails and digital signatures',
      'Instant temperature graph and electronic batch release dossier export on arrival'
    ],
    image: '/track-shipment-hero.jpg',
    metric: '±0.1°C NIST Accuracy',
    iconColor: '#0284C7'
  },
  {
    id: 'pillar-green-lane-clearance',
    title: 'Expedited Medical Green-Lane Customs',
    subtitle: 'Zero-Delay Airport & Border Transit',
    desc: 'Specialized healthcare trade compliance teams expedite pre-clearance with health authorities (FDA, EMA, CDSCO) to eliminate customs holds on critical pharmaceuticals.',
    description: 'Specialized healthcare trade compliance teams expedite pre-clearance with health authorities (FDA, EMA, CDSCO) to eliminate customs holds on critical pharmaceuticals.',
    points: [
      'Pre-arrival electronic documentation upload and instant health authority submission',
      'Certified handling of UN 1845 Dry Ice and UN 3373 Biological Substances',
      'Airport tarmac direct apron access in 42 international tier-1 air hubs',
      '24/7 dedicated customs liaison on-site for immediate shipment release'
    ],
    features: [
      'Pre-arrival electronic documentation upload and instant health authority submission',
      'Certified handling of UN 1845 Dry Ice and UN 3373 Biological Substances',
      'Airport tarmac direct apron access in 42 international tier-1 air hubs',
      '24/7 dedicated customs liaison on-site for immediate shipment release'
    ],
    image: '/documentation-hero.jpg',
    metric: '<30 Min Customs Release',
    iconColor: '#10B981'
  }
];

export const pharmaGallery = [
  {
    id: 'gal-saffron-api',
    title: 'Medicinal Grade Kashmiri Mongra Saffron (Grade-A1)',
    category: 'Biologics & APIs',
    image: '/product-images/Kashmiri Mongra Saffron (Grade-A1).png',
    badge: 'Phytomedicine API',
    spec: 'High-Crocin Bioactive Glycosides • HPLC Standardized Purity • Nitrogen Sealed',
    tempReq: '+15°C to +25°C Dark CRT',
    compliance: 'USP / Ph. Eur. Monograph Certified'
  },
  {
    id: 'gal-ayurvedic-oil',
    title: 'Therapeutic Herbal Formulations & Massage Oils',
    category: 'Clinical Formulations',
    image: '/product-images/Ayurvedic.png',
    badge: 'Topical Pharmacology',
    spec: 'Cold-Pressed Extraction • Amber Glass UV-Protected Packaging',
    tempReq: '+15°C to +25°C Dark CRT',
    compliance: 'WHO GxP Qualified Batch Release'
  },
  {
    id: 'gal-antiseptic-wash',
    title: 'Hospital-Grade Antibacterial Sanitization Fluid (5L Bulk)',
    category: 'Clinical Formulations',
    image: '/product-images/Moisturizing Antibacterial Hand Wash (5L Bulk Refill).png',
    badge: 'Clinical Antiseptic',
    spec: 'Hospital Sterilization Standard • Broad-Spectrum Microbial Elimination',
    tempReq: 'Ambient Climate Controlled',
    compliance: 'ISO 13485 & CE Clinical Disinfectant'
  },
  {
    id: 'gal-sterile-wipes',
    title: 'Sterile Plant-Fiber Cleanroom & Patient Wipes',
    category: 'Medical Consumables',
    image: '/product-images/Flushable Biodegradable Plant-Fiber Wet Wipes.png',
    badge: 'Medical Consumable',
    spec: 'Lint-Free Hypoallergenic Web • Autoclave-Ready Cleanroom Foil Packing',
    tempReq: 'Dry Ambient Shielded',
    compliance: 'ISO 14644 Cleanroom Class 100 Compatible'
  },
  {
    id: 'gal-curcumin-api',
    title: 'High-Purity 95% Curcumin Active Substance (API)',
    category: 'Biologics & APIs',
    image: '/product-images/Organic High-Curcumin Turmeric.png',
    badge: 'Pure Curcumin API',
    spec: '95% Pure Curcuminoids • High Bioavailability • HPLC Tested & Certified',
    tempReq: '+15°C to +25°C Nitrogen Purged',
    compliance: 'US & European Pharmacopoeia (USP/EP) Standard'
  },
  {
    id: 'gal-ro-water-plant',
    title: 'USP-Grade Water for Injection (WFI) RO Plant (10k LPH)',
    category: 'Aseptic Processing Equipment',
    image: '/product-images/Industrial Reverse Osmosis Water Plant (10,000 LPH).png',
    badge: 'WFI Water Plant',
    spec: '10,000 LPH Dual-Pass Reverse Osmosis • Pyrogen & Bioburden Free Output',
    tempReq: 'Industrial Skidded Transit',
    compliance: 'FDA 21 CFR Part 211 & cGMP Engineered'
  },
  {
    id: 'gal-rotary-filling',
    title: 'Aseptic Rotary Liquid Vial & Ampoule Filling Line',
    category: 'Aseptic Processing Equipment',
    image: '/product-images/Automatic Liquid Rotary Filling & Capping Line.png',
    badge: 'Aseptic Packaging',
    spec: 'Servo-Driven Precision Dosing • Laminar Airflow Hood Compatible',
    tempReq: 'Shock-Absorbent Heavy Lift',
    compliance: 'EU GMP Annex 1 Sterile Manufacturing'
  },
  {
    id: 'gal-vibratory-sifter',
    title: 'Sanitary Vibratory Granulation & Powder Sifter (1200mm)',
    category: 'Aseptic Processing Equipment',
    image: '/product-images/Stainless Multi-Deck Vibratory Sifter (1200mm).png',
    badge: 'Pharma Sifter',
    spec: '316L Mirror-Polished Stainless Steel • Tool-Free Quick-Clean Assembly',
    tempReq: 'Clean Skidded Cargo',
    compliance: 'cGMP / FDA Sanctioned Contact Surfaces'
  }
];

export const pharmaComplianceMatrix = [
  {
    standard: 'WHO GDP (TRS 961)',
    authority: 'World Health Organization',
    scope: 'Global pharmaceutical distribution quality systems & temperature validation',
    controls: 'Documented SOPs, temperature mapping, trained handling personnel',
    status: 'Certified Network'
  },
  {
    standard: 'FDA 21 CFR Part 11',
    authority: 'US Food & Drug Administration',
    scope: 'Electronic records, audit trails, and electronic signatures for digital loggers',
    controls: 'Encrypted telemetry, non-repudiation logging, system validation',
    status: 'Fully Compliant'
  },
  {
    standard: 'IATA CEIV Pharma',
    authority: 'International Air Transport Assoc.',
    scope: 'Aviation pharmaceutical handling excellence across airlines and ground handlers',
    controls: 'Tarmac ramp exposure minimization, cold-room validation, risk audit',
    status: 'Certified Gateways'
  },
  {
    standard: 'ISO 13485:2016',
    authority: 'International Organization for Standardization',
    scope: 'Quality management systems for medical devices and associated logistics',
    controls: 'Traceability, sterile packaging integrity, batch segregation',
    status: 'Accredited Facility'
  },
  {
    standard: 'EU GDP 2013/C 343/01',
    authority: 'European Medicines Agency (EMA)',
    scope: 'Guidelines on Good Distribution Practice of medicinal products for human use',
    controls: 'Qualified Person (QP) release coordination, CAPA protocols',
    status: 'Qualified Fleet'
  },
  {
    standard: 'UN 3373 & UN 1845',
    authority: 'ICAO / IMO Hazardous Regulations',
    scope: 'Safe carriage of Biological Substances Cat B & Carbon Dioxide, Solid (Dry Ice)',
    controls: 'Certified IATA DGR packaging, hazard labeling, emergency procedures',
    status: 'Licensed DG Operators'
  }
];

export const pharmaCaseStudies = [
  {
    id: 'case-mrna-vaccine',
    client: 'Multinational Vaccine Developer',
    headline: 'Multi-Continent Ultra-Cold (-70°C) mRNA Vaccine Distribution',
    summary: 'Orchestrated the continuous rapid airlift of 14.2 million doses of temperature-sensitive mRNA vaccine across 28 global destinations during winter peaks.',
    results: [
      { label: 'Doses Delivered', val: '14.2M' },
      { label: 'Temp Excursion Rate', val: '0.00%' },
      { label: 'Tarmac Transfer SLA', val: '<28 Mins' }
    ],
    highlight: 'Dry-ice monitoring sensors with automated re-icing stations ensured zero thermal drift over 42-hour transit corridors.'
  },
  {
    id: 'case-oncology-trials',
    client: 'Global Clinical Research Organization (CRO)',
    headline: 'Time-Critical Phase III Patient Kits Shipped Door-to-Hospital',
    summary: 'Delivered individualized biologic oncology therapies under validated +2°C to +8°C parameters directly to 140 investigative hospital clinics across 12 countries.',
    results: [
      { label: 'Hospitals Served', val: '140 Sites' },
      { label: 'On-Time Direct SLA', val: '99.94%' },
      { label: 'Chain-of-Custody', val: '100% GxP' }
    ],
    highlight: 'Dedicated On-Board Couriers with real-time biological telemetry guaranteed direct bedside handoff within 18 hours.'
  },
  {
    id: 'case-bulk-api',
    client: 'Tier-1 Pharmaceutical Manufacturer',
    headline: 'Trans-Oceanic Active Pharmaceutical Ingredient (API) Sea Reefer Bridge',
    summary: 'Converted sensitive antibiotic bulk API logistics from air to specialized climate-controlled ocean reefers, lowering logistics carbon footprint by 64% while maintaining 100% batch integrity.',
    results: [
      { label: 'Metric Tons Moved', val: '620 MT' },
      { label: 'Freight Cost Saved', val: '38.5%' },
      { label: 'Batch Release Pass', val: '100.0%' }
    ],
    highlight: 'Dual-compressor redundancy and live nitrogen inerting ensured zero degradation during a 24-day transpacific maritime voyage.'
  }
];

export const pharmaStandards = [
  'WHO Good Distribution Practice (TRS 961) Qualified',
  'IATA CEIV Pharma Certified Airport Network',
  'FDA 21 CFR Part 11 Validated Digital Thermal Monitoring',
  'ISO 13485:2016 Certified Medical Supply Chain',
  'EU GDP 2013/C 343/01 Compliant Fleet & Warehouses'
];

export const pharmaFaqs = [
  {
    q: 'How do you prevent temperature excursions during airport tarmac delays?',
    a: 'We mitigate tarmac risk through direct tarmac apron access passes, pre-conditioned active thermal containers (such as Envirotainer e2/RAP or CSafe units with autonomous compressors), and validated thermal blankets. Additionally, our dedicated ground logistics team performs real-time thermal monitoring and has dry-ice replenishing stations situated directly on airport grounds at all major international hub gateways.'
  },
  {
    q: 'What thermal ranges are supported for biological and cell-and-gene therapies?',
    a: 'We cover the entire clinical thermal spectrum: Cryogenic Liquid Nitrogen (-196°C to -80°C using certified dry vapor shippers with up to 10 days of holding time), Ultra-Low Frozen (-80°C to -20°C with monitored solid CO2 dry ice), Validated Cold Chain (+2°C to +8°C for monoclonal antibodies and vaccines), and Controlled Room Temperature (+15°C to +25°C for finished doses and diagnostics).'
  },
  {
    q: 'Are your thermal data logging devices compliant with FDA 21 CFR Part 11?',
    a: 'Yes. All data loggers and cloud-based IoT telemetry platforms generate non-editable, cryptographically signed electronic records with immutable audit trails. Timestamps, device serial numbers, calibrated sensor values, and digital signatures comply strictly with FDA 21 CFR Part 11 and EU Annex 11 electronic data integrity requirements.'
  },
  {
    q: 'How quickly can life-saving investigational trial kits be delivered door-to-door?',
    a: 'Through our specialized On-Board Courier (OBC) and Next-Flight-Out (NFO) medical escort service, urgent clinical trial materials and patient-specific therapies can be delivered door-to-hospital within 12 to 24 hours globally, accompanied continuously by a trained healthcare logistics specialist.'
  },
  {
    q: 'Can you handle dangerous goods shipments containing Dry Ice (UN 1845) or Biological Substances (UN 3373)?',
    a: 'Yes. Our logistics teams and dangerous goods dispatchers are certified under ICAO/IATA DGR and IMO IMDG codes. We prepare Shipper’s Declarations for Dangerous Goods, provide validated UN-specification packaging, and coordinate directly with airline and port safety officers to guarantee uninterrupted carriage.'
  },
  {
    q: 'What documentation is provided to our Quality Assurance (QA) team upon consignment delivery?',
    a: 'Immediately upon delivery, our digital system automatically issues an authenticated GxP Consignment Dossier. This package includes the unbroken NIST-traceable temperature curve from pickup to delivery, full chain-of-custody transfer signatures, packaging validation logs, customs clearance timestamps, and formal batch release certificates.'
  }
];

