// Project Cargo & Heavy Lift Logistics Data Model
// KPL Project Cargo Logistics — Heavy Industrial, EPC & Breakbulk Engineering

export const projectCargoHeroStats = [
  {
    id: 'volume',
    value: '520,000+ MT',
    label: 'Heavy Industrial Cargo Mobilized',
    sub: 'Zero-incident project track record across 85+ countries',
  },
  {
    id: 'max-lift',
    value: '1,250 MT',
    label: 'Single-Piece Heavy Lift Record',
    sub: 'Tandem mobile crane & hydraulic gantry positioning',
  },
  {
    id: 'hse',
    value: '100% Zero-Loss',
    label: 'HSE Safety & Compliance Rating',
    sub: 'ISO 45001 & DNV-certified marine warranty surveying',
  },
  {
    id: 'fleet',
    value: '350+ SPMT Axles',
    label: 'Global Modular Platform Capacity',
    sub: 'Electronic multi-directional steering & wireless synchronization',
  },
];

export const heavyCargoCategories = [
  {
    id: 'power-energy',
    title: 'Energy & Power Generation',
    tagline: 'Transformers, Turbines & Substation Modules',
    icon: 'Zap',
    accentColor: '#D97706',
    bgLight: 'rgba(245, 158, 11, 0.08)',
    borderColor: 'rgba(245, 158, 11, 0.25)',
    description:
      'Turnkey factory-to-pad relocation of 765kV step-up transformers, steam turbines, stator generators, and modular switchgear rooms with continuous tri-axial shock monitoring.',
    keySpecs: [
      'G-Force Shock Logging: Live 3-axis sensors (< 0.5G thresholds)',
      'Schnabel Car & Girder Frame Rail Haulage',
      'Hydraulic Jacking & Precision Slide-In on Concrete Foundation',
      'Nitrogen purge & internal pressure preservation during transit',
    ],
    sampleUnits: ['500 MVA Generator Transformer (340 MT)', 'Gas Turbine & Generator Set (420 MT)', 'GIS Modular Substation (180 MT)'],
  },
  {
    id: 'renewables-wind',
    title: 'Renewables & Offshore Wind',
    tagline: 'Extra-Long Rotor Blades & Monopiles',
    icon: 'Wind',
    accentColor: '#EA580C',
    bgLight: 'rgba(234, 88, 12, 0.08)',
    borderColor: 'rgba(234, 88, 12, 0.25)',
    description:
      'Specialized transport configurations for 75m–95m composite rotor blades, tower segments (up to 6.5m base diameter), nacelles, and offshore transition pieces.',
    keySpecs: [
      'Hydraulic Blade Lifters: 60° tilt for steep mountain curves',
      'Telescopic steerable semi-lowbed trailers up to 70m extension',
      'Quayside Marshalling & Offshore Jack-Up Vessel Loading',
      'Swept-Path 3D Simulation for urban and mountain hairpins',
    ],
    sampleUnits: ['84m Offshore Wind Turbine Blade (26 MT)', 'Wind Turbine Nacelle with Drivetrain (120 MT)', 'Offshore Monopile Section (680 MT)'],
  },
  {
    id: 'oil-gas',
    title: 'Oil, Gas & Petrochemical',
    tagline: 'Reactors, Fractionation Columns & Pre-Assembled Units',
    icon: 'Flame',
    accentColor: '#C2410C',
    bgLight: 'rgba(194, 65, 12, 0.08)',
    borderColor: 'rgba(194, 65, 12, 0.25)',
    description:
      'Ocean breakbulk chartering, deep-water roll-on/roll-off (Ro-Ro) barge operations, and SPMT transport of giant hydrocrackers, distillation columns, and cryogenic heat exchangers.',
    keySpecs: [
      'Breakbulk Ocean Vessel twin-crane tandem loading (up to 800 MT)',
      'Marine Ro-Ro ballast calculations & tidal ramp engineering',
      'Civil bypass road engineering and bridge load propping',
      'Customs Project Import (PIR) duty-drawback facilitation',
    ],
    sampleUnits: ['Hydroprocessing Reactor Vessel (620 MT | 44m length)', 'Atmospheric Distillation Column (480 MT)', 'Cryogenic Cold Box Heat Exchanger (310 MT)'],
  },
  {
    id: 'mining-metals',
    title: 'Mining, Metals & Heavy EPC',
    tagline: 'Autoclaves, Ball Mills & Primary Gyratory Crushers',
    icon: 'Pickaxe',
    accentColor: '#D97706',
    bgLight: 'rgba(217, 119, 6, 0.08)',
    borderColor: 'rgba(217, 119, 6, 0.25)',
    description:
      'Overcoming extreme geographical challenges to deliver oversized mineral processing machinery, dragline components, and smelter crucibles to remote, high-altitude mine sites.',
    keySpecs: [
      'Dual-Trailer SPMT mechanically coupled or wireless linked',
      'Multi-engine push-pull heavy ballast tractor configurations',
      'Unpaved haul road compaction & gradient reinforcement',
      'Temporary bridge crossing modular girder deployment',
    ],
    sampleUnits: ['SAG Grinding Mill Shell (380 MT | 7.2m Diameter)', 'Primary Gyratory Crusher Mainframe (195 MT)', 'Autoclave Pressure Digester (550 MT)'],
  },
  {
    id: 'infrastructure-rail',
    title: 'Civil Infrastructure & Rail',
    tagline: 'Tunnel Boring Machines (TBM) & Steel Bridge Girders',
    icon: 'Train',
    accentColor: '#082653',
    bgLight: 'rgba(8, 38, 83, 0.08)',
    borderColor: 'rgba(8, 38, 83, 0.25)',
    description:
      'Precision urban midnight staging for mega infrastructure projects, subway expansions, metro train sets, and pre-stressed steel bridge arch segments.',
    keySpecs: [
      'Urban route clearances & overhead utility wire lifting crews',
      'Night-transit permits & specialized police highway escorts',
      'Shaft-head tandem crane lowering directly into underground launch pits',
      'Intermodal rail-to-road transshipment with heavy crawler cranes',
    ],
    sampleUnits: ['TBM Cutterhead & Main Drive (380 MT | 12.8m Diameter)', 'High-Speed Locomotive & Bogie Unit (140 MT)', 'Pre-Stressed Steel Truss Section (260 MT)'],
  },
  {
    id: 'industrial-machinery',
    title: 'Advanced Industrial Machinery',
    tagline: 'Hydraulic Forging Presses & Precision Extruders',
    icon: 'Cog',
    accentColor: '#EA580C',
    bgLight: 'rgba(234, 88, 12, 0.08)',
    borderColor: 'rgba(234, 88, 12, 0.25)',
    description:
      'Cleanroom-compatible indoor plant installation, specialized air-bearing skidding, and foundation anchoring of massive automotive stamping presses and aerospace machinery.',
    keySpecs: [
      'Hydraulic gantry lifting systems inside operating factories',
      'Low-ground-pressure heavy floor load distributing plates',
      'Millimeter-precision laser alignment to foundation anchor bolts',
      'Turnkey factory relocation & decommissioning service',
    ],
    sampleUnits: ['5,000-Ton Automotive Stamping Press Bed (220 MT)', 'Aluminum Extrusion Main Cylinder (160 MT)', 'Industrial Rotary Cement Kiln Tier (290 MT)'],
  },
];

export const projectSimulatorCargoOptions = [
  {
    id: 'sim-transformer',
    name: '500kV Generator Step-Up Transformer',
    weight: '290 MT',
    dimensions: '9.4m L × 4.6m W × 5.1m H',
    industry: 'Power Generation',
    defaultCorridor: 'corridor-inland-bridges',
    recommendedPlatform: '18-Axle Goldhofer SPMT + Schnabel Frame',
    handlingPoints: 'Rigid lifting trunnions, nitrogen blanket, 3D shock data logging',
    basePermitDays: 14,
    complexityScore: 88,
  },
  {
    id: 'sim-reactor',
    name: 'Petrochemical Hydrocracker Reactor',
    weight: '640 MT',
    dimensions: '42.5m L × 5.8m W × 6.0m H',
    industry: 'Oil & Gas',
    defaultCorridor: 'corridor-intermodal-river',
    recommendedPlatform: '28-Axle Twin SPMT (Side-by-Side) + Ro-Ro Ballast Barge',
    handlingPoints: 'Custom saddle cradles, twin-crane tandem roll-on, civil bridge shoring',
    basePermitDays: 24,
    complexityScore: 96,
  },
  {
    id: 'sim-windblade',
    name: '88-Meter Offshore Wind Turbine Blade',
    weight: '28 MT',
    dimensions: '88.2m L × 4.5m W × 4.2m H',
    industry: 'Renewables',
    defaultCorridor: 'corridor-mountain-remote',
    recommendedPlatform: 'Telescopic Wing Blade Lifter with 60° Hydraulic Articulation',
    handlingPoints: 'Dynamic wind load stability, tree trimming & roundabout obstacle removal',
    basePermitDays: 12,
    complexityScore: 82,
  },
  {
    id: 'sim-ballmill',
    name: 'Autoclave Mineral Leaching Pressure Shell',
    weight: '490 MT',
    dimensions: '22.0m L × 6.2m W × 6.4m H',
    industry: 'Mining & Metals',
    defaultCorridor: 'corridor-coastal-flat',
    recommendedPlatform: '24-Axle Hydraulic Platform Trailer + 2x 680HP Ballast Push-Pulls',
    handlingPoints: 'Heavy haul road soil compaction, bypass culverts, high-altitude cooling',
    basePermitDays: 18,
    complexityScore: 91,
  },
];

export const projectSimulatorCorridors = [
  {
    id: 'corridor-coastal-flat',
    name: 'Deep Sea Port → Coastal Industrial Zone',
    distance: '95 km',
    terrain: 'Flat 4-Lane Highway & Port Access Corridor',
    challenges: 'High-voltage overhead wire lifts (8 locations), bridge clearance verification',
    riskFactor: 1.05,
    leadTime: '7 - 10 Days',
    surveyType: 'Rapid Mobile LiDAR Corridor Scan',
  },
  {
    id: 'corridor-inland-bridges',
    name: 'Seaport → Inland Grid Substation / Refinery',
    distance: '380 km',
    terrain: 'Interstate Highway + 14 Reinforced Concrete Bridges',
    challenges: '6 bridge stress load calculations, 2 temporary bridge jump structures required',
    riskFactor: 1.35,
    leadTime: '16 - 21 Days',
    surveyType: 'Bridge Structural FEA (Finite Element Analysis) + Swept Path',
  },
  {
    id: 'corridor-mountain-remote',
    name: 'Regional Port → High-Altitude Wind / Mine Site',
    distance: '290 km',
    terrain: 'Mountain Pass, 12% Incline Gradients & Tight Hairpin Bends',
    challenges: 'Rotor blade sweep simulations, road widening, auxiliary push-pull tractors',
    riskFactor: 1.55,
    leadTime: '22 - 30 Days',
    surveyType: 'High-Density 3D UAV Drone LiDAR & Swept Path Simulation',
  },
  {
    id: 'corridor-intermodal-river',
    name: 'Deep Sea Anchorage → Inland River Ro-Ro → Site',
    distance: '720 km Multimodal',
    terrain: 'Ocean Breakbulk + River Ro-Ro Barge + Last-Mile 35 km SPMT',
    challenges: 'Tidal ramp ballast calculations, river depth hydrographic survey, roll-off staging',
    riskFactor: 1.4,
    leadTime: '20 - 26 Days',
    surveyType: 'Hydrographic Bathymetry + Quayside Load-Bearing Capacity Soil Test',
  },
];

export const projectCargoPillars = [
  {
    step: '01',
    title: '3D Route Engineering & LiDAR Feasibility',
    subtitle: 'Zero Guesswork Before Mobilization',
    icon: 'Scan',
    color: '#D97706',
    points: [
      'Digital LiDAR 3D scanning maps overhead bridges, utility cables, signs, and tight radii down to 2mm accuracy.',
      'Swept-path kinematic simulation software models multi-axle trailer turning geometry and ground clearances.',
      'Structural bridge load capacity checks using Finite Element Analysis (FEA) to confirm axle weight distribution.',
      'Municipal, highway, and railway authority transit permits pre-negotiated months in advance.',
    ],
  },
  {
    step: '02',
    title: 'Heavy Lift & Marine Stowage Engineering',
    subtitle: 'IMO CSS & DNV MWS Certified Standards',
    icon: 'Anchor',
    color: '#EA580C',
    points: [
      'Custom 3D stowage plans, deck load calculations, and ballasting sequences for geared ocean vessels and barges.',
      'Rigging geometry analysis: Lifting lugs, spreader beam sizing, sling angle stresses, and center-of-gravity (CoG) verification.',
      'Marine Warranty Survey (MWS) documentation and on-site surveyor sign-off before departure.',
      'Dynamic sea-fastening and lashing calculations compliant with IMO CSS Code Annex 13.',
    ],
  },
  {
    step: '03',
    title: 'Multi-Axle SPMT & Specialized Fleet Rigging',
    subtitle: 'Heavy Modular Ground Movement',
    icon: 'Truck',
    color: '#EA580C',
    points: [
      'Self-Propelled Modular Transporters (SPMTs) capable of 360-degree carousel steering and crab-crawling.',
      'Hydraulic platform trailers (Goldhofer, Scheuerle) configurable up to 48 lines with side-by-side coupling.',
      'Heavy-duty ballast tractors (up to 800 HP) operating in synchronous push-pull arrangements for steep grades.',
      'Real-time load cell monitoring ensuring equalized axle weight distribution across uneven terrain.',
    ],
  },
  {
    step: '04',
    title: 'Quayside Ro-Ro & Intermodal Transshipment',
    subtitle: 'Seamless Waterway to Land Transition',
    icon: 'Ship',
    color: '#C2410C',
    points: [
      'Deep-water Roll-on/Roll-off (Ro-Ro) barge operations eliminating the need for expensive high-tonnage shore cranes.',
      'Internal ballast pumping synchronized with incoming tidal swells during vehicle roll-on / roll-off.',
      'Direct vessel-to-barge or vessel-to-trailer tandem discharge at congested commercial seaports.',
      'Dedicated quayside laydown, heavy-duty staging pads, and customs-bonded warehousing reserves.',
    ],
  },
  {
    step: '05',
    title: 'Hook-to-Foundation Site Positioning',
    subtitle: 'Millimeter-Accurate Final Set-Down',
    icon: 'HardHat',
    color: '#EA580C',
    points: [
      'Hydraulic jacking towers and strand jacks capable of vertical lifts exceeding 1,200 metric tons.',
      'Precision PTFE/Teflon slide-shoe skidding tracks positioning units over anchor bolts inside tight plant buildings.',
      'Grouting, leveling, and anchor bolting verification under engineer-of-record supervision.',
      'Full turn-key handover documentation including 3D tilt telemetry, pressure retention, and HSE sign-offs.',
    ],
  },
];

export const projectCargoCaseStudies = [
  {
    id: 'case-refinery',
    clientType: 'Global Energy EPC Contractor',
    projectTitle: '640 MT Hydrocracker Reactor Mobilization',
    location: 'Rotterdam Port (Netherlands) → Central Europe Refinery',
    cargoScope: '1x Hydrocracker (640 MT, 42.5m L) + 2x High-Pressure Columns (310 MT each)',
    solution:
      'Engineered an intermodal sequence: Heavy-lift ocean vessel discharge directly to ocean-going Ro-Ro deck barge, 420 km river navigation, tidal roll-off onto 28-axle Goldhofer SPMT, and 34 km night road haul requiring 2 temporary bridge jump spans.',
    results: [
      'Zero road surface or civil bridge structural damage across entire corridor',
      'Completed 4 days ahead of scheduled refinery turnaround shut-down window',
      '100% MWS surveyor approval on first-pass inspection',
    ],
    metricValue: '640 MT',
    metricLabel: 'Heaviest Single Unit',
  },
  {
    id: 'case-wind',
    clientType: 'Renewable Power Developer',
    projectTitle: '360 MW Mountain Wind Farm Expansion',
    location: 'Coastal Seaport → Alpine Ridge (1,850m Elevation)',
    cargoScope: '72x 82-Meter Rotor Blades, 24x 110 MT Nacelles, 96x Tower Segments',
    solution:
      'Utilized specialized hydraulic blade lifters capable of 60-degree upward tilt to negotiate 14 hairpin mountain curves without cutting ancient forestry or blasting rock faces. 3D swept path simulations ensured centimeter-level clearance.',
    results: [
      'Zero environmental fines and preserved protected alpine forest reserves',
      '42,000 MT total freight moved across 8-month construction cycle',
      'Zero lost-time incidents (LTI) in extreme sub-zero weather conditions',
    ],
    metricValue: '82 Meters',
    metricLabel: 'Blade Length Tilt-Hauled',
  },
  {
    id: 'case-tbm',
    clientType: 'Metropolitan Transit Authority',
    projectTitle: 'Downtown Subway Extension TBM Mobilization',
    location: 'Industrial Seaport → Central Downtown Launch Pit',
    cargoScope: '12.6m Diameter TBM Shield (410 MT), Cutterhead, and 6 Gantries',
    solution:
      'Engineered a 4-phase midnight transport convoy through dense urban streets with 16 escort vehicles. Utilized twin 600-ton crawler cranes operating in tandem to lower the 410 MT main shield 28 meters down into the launch chamber.',
    results: [
      'All urban street moves completed within strict 01:00 - 05:00 city curfew windows',
      'Lowered directly onto subterranean cradle with less than 3mm variance',
      'Municipal tram wire de-energization and restoration with zero transit disruption',
    ],
    metricValue: '410 MT',
    metricLabel: 'Underground Tandem Lift',
  },
];

export const projectCargoStandards = [
  {
    title: 'LEEA & Rigging Certified',
    desc: 'All heavy rigging engineers and lift supervisors certified under Lifting Equipment Engineers Association standards.',
    icon: 'Award',
  },
  {
    title: 'DNV / MWS Approved',
    desc: 'Marine Warranty Surveyor approved lashing, securing, stability and sea-fastening calculations for all ocean charters.',
    icon: 'ShieldCheck',
  },
  {
    title: 'ISO 45001 & 14001',
    desc: 'International occupational health, safety, and environmental management certifications applied across every project site.',
    icon: 'CheckCircle2',
  },
  {
    title: '$250M+ Risk Indemnity',
    desc: 'Comprehensive project cargo and public liability insurance coverage covering high-value capital equipment.',
    icon: 'Scale',
  },
];

export const projectCargoFaqs = [
  {
    question: 'How far in advance should we engage KPL for an Out-of-Gauge (OOG) industrial project?',
    answer:
      'For complex industrial projects involving super-heavy equipment (> 150 MT) or ultra-long components (> 40m), we recommend engaging KPL at the FEED (Front-End Engineering Design) or procurement stage—typically 4 to 9 months before mobilization. This allows sufficient lead time to conduct comprehensive 3D LiDAR route surveys, perform bridge structural engineering checks, negotiate utility shutdowns, and secure oversize/overweight permits from regional highway and municipal authorities.',
  },
  {
    question: 'What is the maximum weight and dimension KPL can mobilize?',
    answer:
      'Through our global heavy-transport partner network and modular equipment inventory, KPL routinely manages single pieces up to 1,250 metric tons using synchronized multi-file Self-Propelled Modular Transporters (SPMTs) and heavy-lift gantry cranes. Our marine breakbulk partners operate geared vessels with combinable shipboard cranes capable of tandem lifts exceeding 800 metric tons.',
  },
  {
    question: 'How do you handle bridge load restrictions and overhead route obstacles?',
    answer:
      'Our in-house civil engineering team performs detailed Finite Element Analysis (FEA) on every bridge along the planned corridor. If a bridge exceeds its standard allowable capacity, we engineer solutions such as dynamic axle re-distribution across 24–36 SPMT axle lines, utilizing steel plate bridging, or deploying temporary modular bridge jump-spans that transfer the load directly to the bridge abutments. For overhead obstacles, our utility coordination team manages bucket trucks for lifting high-voltage electrical lines and removing street furniture.',
  },
  {
    question: 'Can KPL handle customs clearance for imported capital goods under Project Import regulations?',
    answer:
      'Yes. KPL specializes in Customs Project Import Regulations (PIR) and Concessional Duty schemes. We prepare comprehensive project documentation, bond declarations, and advance rulings that allow multi-consignment project shipments arriving over several months to be cleared under a unified concessional duty tariff. We also manage ATA Carnets for specialized temporary tooling, lifting spreader beams, and test rigs.',
  },
  {
    question: 'What happens if unforeseen route bottlenecks or bad weather arise during transit?',
    answer:
      'Every KPL project execution plan incorporates a pre-approved Contingency & Risk Matrix. For marine segments, dynamic weather routing systems avoid severe swell and squalls, with designated safe havens and holding anchorages identified in advance. For overland transport, secondary bypass corridors are surveyed and permitted beforehand. Additionally, 24/7 project control rooms monitor live GPS tracking, axle hydraulic pressure, and 3-axis G-force impact logs to pause movement immediately if abnormal readings occur.',
  },
];

