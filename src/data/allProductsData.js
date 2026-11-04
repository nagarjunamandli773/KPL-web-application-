import {
  Leaf,
  ShieldCheck,
  Sparkles,
  Shirt,
  Settings,
  Award,
  CheckCircle,
  Coffee,
  Car,
  Factory,
  Cpu,
  ShoppingBag,
  Package,
  Droplets,
  Zap,
  Globe2,
  Clock,
  Layers,
  Scale,
  Flame,
  Sun,
  Truck
} from 'lucide-react';

// Local Product Images from Images folder
import freshMangoImg from '../../Images/product images/Fresh Alphonso Mangoes.png';
import basmatiRiceImg from '../../Images/product images/Organic Basmati Rice (1121).png';
import coconutOilImg from '../../Images/product images/Extra Virgin Coconut Oil.png';
import honeyImg from '../../Images/product images/Wild Forest Raw Honey.png';
import turmericImg from '../../Images/product images/Organic High-Curcumin Turmeric.png';
import cardamomImg from '../../Images/product images/Green Cardamom (Grade-A Bold).png';
import cashewImg from '../../Images/product images/Jumbo Whole Cashew Nuts (W-180).png';
import chiaSeedsImg from '../../Images/product images/Organic Black Chia Seeds.png';
import soybeansImg from '../../Images/product images/Non-GMO Organic Soybeans.png';
import nashikRedOnionsImg from '../../Images/product images/Nashik Red Onions (Export Grade 45-60mm).png';
import kabuliChickpeasImg from '../../Images/product images/Organic Kabuli Chickpeas (Dollar Size 11-12mm).png';

import cottonYarnImg from '../../Images/product images/Combed Organic Cotton Yarn.png';
import silkSareesImg from '../../Images/product images/Mulberry Silk Sarees & Fabric.png';
import duckCanvasImg from '../../Images/product images/Waterproof Cotton Duck Canvas.png';
import beddingImg from '../../Images/product images/Egyptian Cotton Luxury Bedding.png';
import athleticKnitImg from '../../Images/product images/Recycled Performance Athletic Knit.png';
import bambooTowelsImg from '../../Images/product images/Bamboo Fiber Hypoallergenic Towels.png';
import rawSelvedgeDenimImg from '../../Images/product images/Raw Selvedge Stretch Denim Fabric (13.5 Oz).png';
import hotelBedLinenImg from '../../Images/product images/Hospitality Hotel Bed Linen (400 TC Sateen).png';

import buddhaImg from '../../Images/product images/Handcrafted Brass Buddha Sculpture.png';
import silkCarpetImg from '../../Images/product images/Hand-Knotted Kashmiri Silk Carpet.png';
import woodFurnitureImg from '../../Images/product images/Carved Sheesham Wood Furniture.png';
import bluePotteryImg from '../../Images/product images/Jaipur Blue Pottery Vases & Urns.png';
import marbleInlayImg from '../../Images/product images/Pietra Dura Marble Inlay Plates.png';
import copperPitcherImg from '../../Images/product images/Hammered Ayurvedic Copper Pitcher Set.png';
import leatherBagImg from '../../Images/product images/Full-Grain Vintage Leather Travel Bags.png';
import dhokraCraftImg from '../../Images/product images/Dhokra Lost-Wax Bell Metal Artifacts.png';
import juteRugsImg from '../../Images/product images/Braided Natural Jute Area Rugs.png';
import terracottaUrnsImg from '../../Images/product images/Terracotta Ornamental Garden Urns.png';
import moradabadBrassTraysImg from '../../Images/product images/Embossed Moradabad Brass Serving Trays.png';
import madhubaniCanvasesImg from '../../Images/product images/Hand-Painted Madhubani Folk Art Canvases.png';

// Beverages & Spices images
import blackPepperImg from '../../Images/product images/Tellicherry Black Pepper (TGSEB).png';
import saffronImg from '../../Images/product images/Kashmiri Mongra Saffron (Grade-A1).png';
import ceylonCinnamonImg from '../../Images/product images/Ceylon Cinnamon True Quills (C5-Special).png';
import assamTeaImg from '../../Images/product images/Assam CTC Black Tea (BOP  BP).png';
import starAniseImg from '../../Images/product images/Star Anise Whole Pods (Handpicked).png';
import clovesImg from '../../Images/product images/Handpicked Whole Cloves (Lal Pari).png';
import cacaoBeansImg from '../../Images/product images/Raw Organic Cacao Beans & Nibs.png';
import nilgiriBlackTeaImg from '../../Images/product images/Nilgiri High-Grown Frost Black Tea (Orange Pekoe).png';

// Automobiles & Vehicles images
import alloyWheelsImg from '../../Images/product images/Forged Aluminum Alloy Wheel Sets (19-21).png';
import commercialAlternatorImg from '../../Images/product images/Heavy-Duty 24V Commercial Alternators.png';
import truckShockAbsorberImg from '../../Images/product images/Hydraulic Heavy Truck Shock Absorbers.png';
import agmBatteryImg from '../../Images/product images/Deep-Cycle Maintenance-Free AGM Batteries.png';
import crownPinionImg from '../../Images/product images/Automotive Transmission Crown & Pinion Sets.png';
import ledHeadlightImg from '../../Images/product images/Adaptive LED Vehicle Headlight Assemblies.png';
import brakePadsImg from '../../Images/product images/Heavy-Duty Commercial Brake Pads (ECE R90).png';
import vanPowertrainMotorImg from '../../Images/product images/Electric Commercial Van Powertrain Motors (90kW).png';

// Industrial Machinery images
import cncMachiningImg from '../../Images/product images/5-Axis CNC Vertical Machining Center.png';
import fiberLaserImg from '../../Images/product images/12kW Industrial Fiber Laser Sheet Cutter.png';
import liquidFillingImg from '../../Images/product images/Automatic Liquid Rotary Filling & Capping Line.png';
import injectionMoldingImg from '../../Images/product images/Servo Plastic Injection Molding Machine (250T).png';
import vibratorySifterImg from '../../Images/product images/Stainless Multi-Deck Vibratory Sifter (1200mm).png';
import roPlantImg from '../../Images/product images/Industrial Reverse Osmosis Water Plant (10,000 LPH).png';
import weldingArmImg from '../../Images/product images/6-Axis Industrial Robotic Welding Arm (2.0m).png';
import granulePackagingLineImg from '../../Images/product images/Automatic Granule VFFS Packaging Line.png';
import cncPressBrakeImg from '../../Images/product images/Hydraulic CNC Sheet Press Brake (200T  4m).png';

// Consumer Electronics images
import webcamImg from '../../Images/product images/4K Ultra-HD AI Enterprise Webcam.png';
import ganChargerImg from '../../Images/product images/Fast GaN 100W Multi-Port USB-C Desktop Charger.png';
import solarCctvCameraImg from '../../Images/product images/Outdoor Smart Solar CCTV Security Camera (4G  WiFi).png';

// FMCG & Retail Goods images
import springWaterImg from '../../Images/product images/Natural Volcanic Mineral Spring Water.png';
import wetWipesImg from '../../Images/product images/Flushable Biodegradable Plant-Fiber Wet Wipes.png';
import fruitJamsImg from '../../Images/product images/Artisan Whole Fruit Low-Sugar Jams.png';
import handWashImg from '../../Images/product images/Moisturizing Antibacterial Hand Wash (5L Bulk Refill).png';
import dryFruitMixImg from '../../Images/product images/Premium.png';
import laundryDetergentImg from '../../Images/product images/Plant-Based 3x.png';
import oliveOilImg from '../../Images/product images/Extra Virgin Olive Oil (500ml Bottled).png';
import cannedCoconutMilkImg from '../../Images/product images/Organic Coconut Milk (400ml Canned).png';
import sesameMassageOilImg from '../../Images/product images/Ayurvedic.png';
import himalayanSaltGrinderImg from '../../Images/product images/Himalayan Pink.png';



/* =========================================================================
   CATEGORY 1: AGRICULTURE & ORGANICS (12 Products)
   ========================================================================= */
export const agricultureProducts = [
  {
    id: 'agri-1',
    categoryId: 'agriculture',
    categoryName: 'Agriculture & Organics',
    name: 'Fresh Alphonso Mangoes',
    shortDescription: 'GI-tagged Ratnagiri Alphonso mangoes, renowned for rich saffron-colored pulp and intoxicating aroma.',
    fullDescription: 'Hand-harvested GI-tagged Alphonso mangoes sourced directly from certified orchards in Ratnagiri and Devgad. Each mango is hot-water treated, calibrated for sugar brix level above 18°, and packaged in ventilated export-grade cartons.',
    origin: 'India (Ratnagiri)',
    destination: 'UAE & Europe',
    moq: 'MOQ: 1,000 KG',
    image: freshMangoImg,
    fallbackImage: '/product-images/Fresh Alphonso Mangoes.png',
    badgeText: 'GI CERTIFIED\nORCHARD FRESH',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Farm Fresh', icon: Leaf },
      { label: 'Chemical Free', icon: CheckCircle },
      { label: 'Brix 18°+ Sweet', icon: Award },
    ],
    specs: {
      'Grade': 'Grade-A Export Export (250g - 300g per piece)',
      'Packaging': 'Vented corrugated box (3kg / 12 pieces)',
      'Treatment': 'Vapor Heat / Hot Water Treated (APEDA approved)',
      'Shelf Life': '14-18 days under cold chain (12°C - 14°C)',
      'Certifications': 'GlobalGAP, APEDA, FSSAI'
    }
  },
  {
    id: 'agri-2',
    categoryId: 'agriculture',
    categoryName: 'Agriculture & Organics',
    name: 'Organic Basmati Rice (1121)',
    shortDescription: 'Extra-long slender grain 1121 steam basmati rice aged 2 years for authentic aroma and elongation.',
    fullDescription: 'Cultivated in the fertile Himalayan foothills, our 1121 Traditional Basmati Rice elongates to over 22mm upon cooking. Naturally aged for 24 months to ensure non-sticky fluffy texture and authentic aroma.',
    origin: 'India (Punjab)',
    destination: 'Saudi Arabia & UK',
    moq: 'MOQ: 5,000 KG',
    image: basmatiRiceImg,
    fallbackImage: '/product-images/Organic Basmati Rice (1121).png',
    badgeText: '2 YRS AGED\nPREMIUM 1121',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Extra Long', icon: Award },
      { label: 'Rich Aroma', icon: Sparkles },
      { label: 'Aged 2 Years', icon: Clock },
    ],
    specs: {
      'Grain Length': '8.35 mm raw / 22 mm cooked',
      'Moisture': 'Under 12.5% max',
      'Broken Grains': 'Under 1% max',
      'Packaging': '10kg, 25kg, 50kg BOPP / Jute Bags',
      'Certifications': 'USDA Organic, ISO 22000, Halal'
    }
  },
  {
    id: 'agri-3',
    categoryId: 'agriculture',
    categoryName: 'Agriculture & Organics',
    name: 'Extra Virgin Coconut Oil',
    shortDescription: 'Cold-pressed raw unrefined virgin coconut oil produced from fresh mature coconut milk.',
    fullDescription: 'Centrifugally extracted within 2 hours of opening fresh coastal coconuts. Retains natural lauric acid, subtle floral coconut aroma, and light velvety texture without chemical bleaching or hydrogenation.',
    origin: 'India (Kerala)',
    destination: 'USA & Germany',
    moq: 'MOQ: 500 Liters',
    image: coconutOilImg,
    fallbackImage: '/product-images/Extra Virgin Coconut Oil.png',
    badgeText: 'COLD PRESSED\nRAW VIRGIN',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Lauric Acid 52%', icon: ShieldCheck },
      { label: '100% Raw', icon: Leaf },
      { label: 'Unrefined', icon: Droplets },
    ],
    specs: {
      'Processing': 'Centrifugal cold extraction (< 40°C)',
      'Free Fatty Acids': '< 0.1% max',
      'Moisture Content': '< 0.05%',
      'Packaging': '500ml glass bottles, 200L drums, IBC totes',
      'Certifications': 'EU Organic, USDA, Non-GMO Project Verified'
    }
  },
  {
    id: 'agri-4',
    categoryId: 'agriculture',
    categoryName: 'Agriculture & Organics',
    name: 'Wild Forest Raw Honey',
    shortDescription: 'Unpasteurized multi-floral raw honey collected sustainably from deep forest tribal belts.',
    fullDescription: 'Ethically harvested raw forest honey collected by traditional indigenous honey harvesters from wild Apis dorsata bee colonies. Untreated, unheated, and micro-filtered to preserve active pollen, antioxidants, and live enzymes.',
    origin: 'India (Sundarbans)',
    destination: 'Japan & France',
    moq: 'MOQ: 800 KG',
    image: honeyImg,
    fallbackImage: '/product-images/Wild Forest Raw Honey.png',
    badgeText: '100% RAW\nWILD FOREST',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Unpasteurized', icon: Award },
      { label: 'Live Enzymes', icon: Sparkles },
      { label: 'Pollen Rich', icon: Leaf },
    ],
    specs: {
      'Origin Floral': 'Multi-floral mangrove forest wild blossom',
      'HMF Level': '< 15 mg/kg (super fresh)',
      'Moisture': '< 18% max',
      'Packaging': 'Food-grade drums (300kg) or retail glass jars',
      'Certifications': 'NMR Tested, C4 Sugar Negative, FSSAI'
    }
  },
  {
    id: 'agri-5',
    categoryId: 'agriculture',
    categoryName: 'Agriculture & Organics',
    name: 'Organic High-Curcumin Turmeric',
    shortDescription: 'Certified organic Lakadong turmeric powder with exceptional 7.5% natural curcumin content.',
    fullDescription: 'Sourced from the pristine hills of Meghalaya, Lakadong turmeric is globally celebrated for containing the highest natural curcumin levels (7% - 8.5%). Sun-dried and cold-milled to retain therapeutic bio-actives and deep golden pigment.',
    origin: 'India (Meghalaya)',
    destination: 'USA & Australia',
    moq: 'MOQ: 1,500 KG',
    image: turmericImg,
    fallbackImage: '/product-images/Organic High-Curcumin Turmeric.png',
    badgeText: 'CURCUMIN 7.5%\nLAKADONG HILLS',
    badgeBg: '#D97706',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '7.5% Curcumin', icon: Award },
      { label: 'Heavy Metal Free', icon: ShieldCheck },
      { label: 'Cold Milled', icon: Sparkles },
    ],
    specs: {
      'Curcumin Content': '7.2% - 8.5% (HPLC tested)',
      'Mesh Size': '80 - 100 mesh fine powder',
      'Moisture': '< 8%',
      'Packaging': 'Vacuum-sealed 25kg multi-wall paper bags',
      'Certifications': 'USDA Organic, India Organic, BRCGS'
    }
  },
  {
    id: 'agri-6',
    categoryId: 'agriculture',
    categoryName: 'Agriculture & Organics',
    name: 'Green Cardamom (Grade-A Bold)',
    shortDescription: 'Extra-bold 8mm+ vibrant green cardamom pods bursting with intense camphoraceous aromatics.',
    fullDescription: 'Handpicked from shade-grown estates in the Idukki rainforest. Graded mechanically to select only 8mm+ whole green pods. Gently wood-fired in flue-curing barns to lock in essential volatile oils and vivid green color.',
    origin: 'India (Idukki, Kerala)',
    destination: 'Kuwait & UAE',
    moq: 'MOQ: 300 KG',
    image: cardamomImg,
    fallbackImage: '/product-images/Green Cardamom (Grade-A Bold).png',
    badgeText: '8MM BOLD\nQUEEN OF SPICES',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '8mm+ Diameter', icon: Award },
      { label: 'Volatile Oil 8%', icon: Droplets },
      { label: 'Natural Green', icon: Leaf },
    ],
    specs: {
      'Size Caliber': 'Extra Bold 8mm and above',
      'Volatile Oil': 'Min 7.5% - 9.0%',
      'Immature / Shriveled': '< 1.5%',
      'Packaging': 'Food-grade 5kg aluminum foil bags in Master cartons',
      'Certifications': 'Spices Board India, ISO 9001, HACCP'
    }
  },
  {
    id: 'agri-7',
    categoryId: 'agriculture',
    categoryName: 'Agriculture & Organics',
    name: 'Jumbo Whole Cashew Nuts (W-180)',
    shortDescription: 'King-sized W-180 white whole premium cashew kernels, perfectly roasted with buttery finish.',
    fullDescription: 'Selected from the top 5% of raw cashew harvest. W-180 kernels represent the largest commercial cashew size available globally (180 kernels per pound). Steam-roasted, mechanically shelled, and nitrogen-flushed to preserve crunch.',
    origin: 'India (Goa/Konkan)',
    destination: 'Canada & Netherlands',
    moq: 'MOQ: 1,000 KG',
    image: cashewImg,
    fallbackImage: '/product-images/Jumbo Whole Cashew Nuts (W-180).png',
    badgeText: 'JUMBO W-180\nWHITE WHOLE',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Grade W-180', icon: Award },
      { label: 'Zero Trans Fat', icon: ShieldCheck },
      { label: 'Crunchy & Sweet', icon: Sparkles },
    ],
    specs: {
      'Count': '170 - 180 nuts per pound (400 nuts/kg)',
      'Moisture': '< 4.5%',
      'Color Grade': 'White Wholes (no spotting)',
      'Packaging': 'Vacuum tin 10kg or 2x25 lb carton with inert gas',
      'Certifications': 'Cashew Export Council, FSSAI, ISO 22000'
    }
  },
  {
    id: 'agri-8',
    categoryId: 'agriculture',
    categoryName: 'Agriculture & Organics',
    name: 'Organic Black Chia Seeds',
    shortDescription: 'Triple-cleaned raw organic chia seeds rich in plant-based Omega-3, dietary fiber, and protein.',
    fullDescription: 'Purity-tested 99.9% clean black chia seeds cultivated under contract organic farming without pesticides. Excellent hydrophilic gelation ratio of 1:12, making them ideal for health foods, nutraceuticals, and functional beverages.',
    origin: 'India (Madhya Pradesh)',
    destination: 'UK & Germany',
    moq: 'MOQ: 1,000 KG',
    image: chiaSeedsImg,
    fallbackImage: '/product-images/Organic Black Chia Seeds.png',
    badgeText: 'OMEGA-3 RICH\n99.9% PURITY',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Omega-3 ALA', icon: ShieldCheck },
      { label: 'High Fiber', icon: Leaf },
      { label: 'Gluten Free', icon: CheckCircle },
    ],
    specs: {
      'Purity': '99.9% Optical Sorted',
      'Omega-3 Content': '20g per 100g',
      'Moisture': '< 7.5%',
      'Packaging': '25kg paper craft bags with inner polyethylene',
      'Certifications': 'USDA Organic, EU Organic, Kosher'
    }
  },
  {
    id: 'agri-9',
    categoryId: 'agriculture',
    categoryName: 'Agriculture & Organics',
    name: 'Non-GMO Organic Soybeans',
    shortDescription: 'Certified non-GMO whole yellow soybeans with 40%+ protein for tofu, soymilk, and oil.',
    fullDescription: 'High-protein whole yellow soybeans grown naturally in crop-rotated organic soil. Specifically graded for high water-absorption capacity, clear hilum, and superior yield in commercial soymilk and artisanal tofu processing.',
    origin: 'India (Maharashtra)',
    destination: 'Singapore & Japan',
    moq: 'MOQ: 10,000 KG',
    image: soybeansImg,
    fallbackImage: '/product-images/Non-GMO Organic Soybeans.png',
    badgeText: 'NON-GMO\nPROTEIN 40%+',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Non-GMO Project', icon: CheckCircle },
      { label: 'High Protein', icon: Award },
      { label: 'Clean Hilum', icon: Leaf },
    ],
    specs: {
      'Protein': 'Minimum 40.5% (dry basis)',
      'Oil Content': '18.5% - 20%',
      'Foreign Material': '< 0.5%',
      'Packaging': '50kg PP bags / 1MT Jumbo Big Bags',
      'Certifications': 'Non-GMO Verified, USDA Organic'
    }
  },
  {
    id: 'agri-10',
    categoryId: 'agriculture',
    categoryName: 'Agriculture & Organics',
    name: 'Fresh Cavendish Bananas',
    shortDescription: 'Uniform export-grade Cavendish bananas, ethylene-conditioned with extended transit life.',
    fullDescription: 'Grown along nutrient-rich riverbanks under precision drip irrigation. Harvested at the green mature stage (caliper 39-47, finger length 18cm+). Washed in food-grade citric alum baths and boxed in vacuum poly-lines for global reefers.',
    origin: 'India (Andhra Pradesh)',
    destination: 'Iran, Oman & UAE',
    moq: 'MOQ: 1x40ft Reefer (1,540 Boxes)',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/mangoes.jpg',
    badgeText: 'COLD-CHAIN\nEXPORT GRADE',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Length 18cm+', icon: Scale },
      { label: 'Reefer Sealed', icon: Truck },
      { label: 'Pesticide Safe', icon: CheckCircle },
    ],
    specs: {
      'Finger Length': '18 - 22 cm',
      'Caliper': '39 - 46 mm',
      'Box Net Weight': '13.5 kg / 7.0 kg telescopic carton',
      'Storage Temp': '13.5°C constant temperature',
      'Certifications': 'GlobalGAP, APEDA, FSSAI'
    }
  },
  {
    id: 'agri-11',
    categoryId: 'agriculture',
    categoryName: 'Agriculture & Organics',
    name: 'Nashik Red Onions (Export Grade 45-60mm)',
    shortDescription: 'Hand-graded high-pungency dry red onions with tight skins, cured for extended ocean container shipments.',
    fullDescription: 'Procured directly from certified farmers in Nashik and Lasalgaon. Solar-cured to achieve moisture levels below 14% with zero sprouting. Packed in breathable red leno mesh bags with phytosanitary compliance for global markets.',
    origin: 'India (Nashik, Maharashtra)',
    destination: 'Malaysia, UAE & Indonesia',
    moq: 'MOQ: 1x40ft Reefer (28 MT)',
    image: nashikRedOnionsImg,
    fallbackImage: '/product-images/Nashik Red Onions (Export Grade 45-60mm).png',
    badgeText: 'NASHIK GI ZONE\nSOLAR CURED',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Caliper 45-60mm', icon: Scale },
      { label: 'Leno Mesh Pack', icon: Package },
      { label: 'Sprout Free', icon: CheckCircle },
    ],
    specs: {
      'Bulb Diameter': '45 - 60 mm',
      'Moisture Content': '11 - 13.5% Max',
      'Packaging': '25 kg / 50 kg Red Leno Mesh Bags',
      'Storage': 'Temperature controlled 0-2°C / 65% RH',
      'Certifications': 'APEDA, GlobalGAP, Phytosanitary'
    }
  },
  {
    id: 'agri-12',
    categoryId: 'agriculture',
    categoryName: 'Agriculture & Organics',
    name: 'Organic Kabuli Chickpeas (Dollar Size 11-12mm)',
    shortDescription: 'Machine-cleaned, sortexed jumbo white Kabuli chickpeas with high protein content and zero foreign matter.',
    fullDescription: 'Organically cultivated in Madhya Pradesh and Rajasthan. Double-sortexed with count 40-42 per ounce. Free from chemical fumigants and certified compliant with EU pesticide regulations for human consumption.',
    origin: 'India (Indore, Madhya Pradesh)',
    destination: 'Turkey, Spain, Algeria & Egypt',
    moq: 'MOQ: 24 Metric Tons (1x20ft FCL)',
    image: kabuliChickpeasImg,
    fallbackImage: '/product-images/Organic Kabuli Chickpeas (Dollar Size 11-12mm).png',
    badgeText: 'JUMBO 11-12MM\nDOUBLE SORTEX',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Purity 99.5%', icon: CheckCircle },
      { label: 'Size 11-12mm', icon: Scale },
      { label: 'Zero Chemical', icon: ShieldCheck },
    ],
    specs: {
      'Grain Size': '11 - 12 mm',
      'Count / Ounce': '40 - 42 Count',
      'Purity Level': '99.5% Minimum',
      'Moisture Level': '10.5% Maximum',
      'Packaging': '25 kg / 50 kg PP Woven Bags'
    }
  }
];

/* =========================================================================
   CATEGORY 2: TEXTILES & APPAREL (12 Products)
   ========================================================================= */
export const textilesProducts = [
  {
    id: 'text-1',
    categoryId: 'textiles',
    categoryName: 'Textiles & Apparel',
    name: 'Combed Organic Cotton Yarn',
    shortDescription: 'Ring-spun combed 30s-60s organic cotton yarn engineered for fine luxury apparel and knitwear.',
    fullDescription: 'Manufactured using 100% GOTS-certified long-staple Shankar-6 organic cotton on European high-speed ring frames. Minimal hairiness, high tensile strength, and uniform count CV% tailored for automated circular knitting.',
    origin: 'India (Gujarat)',
    destination: 'Vietnam & Bangladesh',
    moq: 'MOQ: 5,000 KG',
    image: cottonYarnImg,
    fallbackImage: '/product-images/Combed Organic Cotton Yarn.png',
    badgeText: 'GOTS ORGANIC\nRING SPUN',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'GOTS Certified', icon: Award },
      { label: 'Low Hairiness', icon: Sparkles },
      { label: 'High Tenacity', icon: ShieldCheck },
    ],
    specs: {
      'Counts Available': 'Ne 20s to Ne 60s combed single & double',
      'CSP Value': '3000+',
      'Fiber Staple': '29.5 - 31 mm',
      'Packaging': 'Paper cones (1.89kg) in seaworthy cartons / pallets',
      'Certifications': 'GOTS, OEKO-TEX Standard 100'
    }
  },
  {
    id: 'text-2',
    categoryId: 'textiles',
    categoryName: 'Textiles & Apparel',
    name: 'Mulberry Silk Sarees & Fabric',
    shortDescription: 'Pure hand-reeled Mulberry silk with traditional Jacquard gold zari borders and rich drape.',
    fullDescription: 'Handcrafted by generational master weavers on traditional pit looms. Made with 100% pure silk warp and weft, embellished with tested silver-gilt gold zari threads that reflect timeless elegance and heritage prestige.',
    origin: 'India (Varanasi / Kanchipuram)',
    destination: 'USA, UK & Malaysia',
    moq: 'MOQ: 50 Pieces',
    image: silkSareesImg,
    fallbackImage: '/product-images/Mulberry Silk Sarees & Fabric.png',
    badgeText: 'SILK MARK\nPURE HANDLOOM',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Silk Mark India', icon: Award },
      { label: 'Pure Gold Zari', icon: Sparkles },
      { label: 'Handwoven Art', icon: Shirt },
    ],
    specs: {
      'Fabric Composition': '100% Pure Mulberry Silk (Filature reeled)',
      'Zari Content': 'Tested Zari (Silver core with micro gold plate)',
      'Dimensions': '6.25 meters (includes unstitched blouse piece)',
      'Packaging': 'Protective muslin cloth wrap in luxury rigid box',
      'Certifications': 'Silk Mark Organization of India, Handloom Mark'
    }
  },
  {
    id: 'text-3',
    categoryId: 'textiles',
    categoryName: 'Textiles & Apparel',
    name: 'Sustainable European Linen Shirts',
    shortDescription: 'Tailored casual and resort-wear shirts crafted from 100% enzyme-washed French flax linen.',
    fullDescription: 'Breathable, thermoregulating men’s and women’s shirts constructed from certified Normandy flax. Pre-shrunk with organic stone enzyme washes for an ultra-soft drape that softens with every laundry cycle.',
    origin: 'India / Portugal',
    destination: 'Australia & USA',
    moq: 'MOQ: 300 Pcs',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/garments.jpg',
    badgeText: 'FRENCH FLAX\nECO ENZYME',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '100% Linen', icon: Leaf },
      { label: 'Breathable Fabric', icon: Sun },
      { label: 'Mother-of-Pearl', icon: Sparkles },
    ],
    specs: {
      'Fabric Weight': '155 GSM garment-dyed French flax',
      'Buttons': 'Genuine natural Mother-of-Pearl trocas shells',
      'Stitching': '18 stitches per inch clean single-needle tailoring',
      'Packaging': 'Compostable polybags with FSC hangtags',
      'Certifications': 'OEKO-TEX 100, European Flax Standard'
    }
  },
  {
    id: 'text-4',
    categoryId: 'textiles',
    categoryName: 'Textiles & Apparel',
    name: 'Raw Heavyweight Selvedge Denim',
    shortDescription: 'Authentic 13.5oz shuttle-loom selvedge denim fabric rolls dyed with natural indigo pigment.',
    fullDescription: 'Woven slowly on vintage shuttle looms to produce classic red-line edge selvedge denim. Ring-spun warp yarn dyed through a 12-dip rope dyeing system with natural indigo that fades to reveal rich vintage patina.',
    origin: 'India / Japan',
    destination: 'USA, Italy & Japan',
    moq: 'MOQ: 1,000 Meters',
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/garments.jpg',
    badgeText: '13.5 OZ RAW\nRED SELVEDGE',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Shuttle Woven', icon: Shirt },
      { label: 'Rope-Dyed Indigo', icon: Droplets },
      { label: 'Red ID Edge', icon: Award },
    ],
    specs: {
      'Fabric Weight': '13.5 oz / sq yard unwashed raw',
      'Width': '31-32 inches standard shuttle width',
      'Composition': '100% Long-Staple Cotton',
      'Packaging': 'Hard-rolled rolls with waterproof polyethylene wrapping',
      'Certifications': 'Better Cotton Initiative (BCI), OEKO-TEX'
    }
  },
  {
    id: 'text-5',
    categoryId: 'textiles',
    categoryName: 'Textiles & Apparel',
    name: 'Waterproof Cotton Duck Canvas',
    shortDescription: 'Heavy-duty 18oz plied cotton canvas treated with water-repellent and mildew-resistant coatings.',
    fullDescription: 'Tight plain weave heavy plied-yarn duck canvas tailored for industrial covers, marine applications, military tents, and rugged luggage. Formulated with fluorocarbon-free dry-wax waterproofing.',
    origin: 'India (Tamil Nadu)',
    destination: 'Germany & Canada',
    moq: 'MOQ: 1,500 Meters',
    image: duckCanvasImg,
    fallbackImage: '/product-images/Waterproof Cotton Duck Canvas.png',
    badgeText: '18 OZ DUCK\nWATER REPELLENT',
    badgeBg: '#082653',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Tear Resistant', icon: ShieldCheck },
      { label: 'Hydrophobic', icon: Droplets },
      { label: 'Heavy Plied', icon: Layers },
    ],
    specs: {
      'Weight': '18 oz / 610 GSM',
      'Hydrostatic Head': 'Over 800mm water column',
      'Width': '60 inches (152 cm)',
      'Packaging': '50-meter rolls on reinforced heavy paper cores',
      'Certifications': 'ISO 13934-1 Tensile Strength, REACH compliant'
    }
  },
  {
    id: 'text-6',
    categoryId: 'textiles',
    categoryName: 'Textiles & Apparel',
    name: 'Egyptian Cotton Luxury Bedding',
    shortDescription: 'Hotel-grade 800 thread count sateen sheets woven from certified extra-long staple Giza cotton.',
    fullDescription: 'Supplied directly to premier international luxury hotel chains. Silky soft sateen weave utilizing ultra-fine 100s single-ply Giza cotton yarns. Tested through 200+ commercial washings with minimal pilling.',
    origin: 'India / Egypt',
    destination: 'UAE, Switzerland & USA',
    moq: 'MOQ: 200 Sets',
    image: beddingImg,
    fallbackImage: '/product-images/Egyptian Cotton Luxury Bedding.png',
    badgeText: '800 TC SATEEN\nGIZA COTTON',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '800 Thread Count', icon: Award },
      { label: 'Single-Ply Yarn', icon: Sparkles },
      { label: 'Hotel Grade Durability', icon: ShieldCheck },
    ],
    specs: {
      'Set Includes': '1 Fitted Sheet, 1 Flat Sheet, 2 King Pillow Shams',
      'Yarn Count': '100s Single Ply Combed Giza ELS',
      'Finishing': 'Mercerized & Sanforized pre-shrunk',
      'Packaging': 'Custom branded magnetic gift boxes with ribbon',
      'Certifications': 'Cotton Egypt Association Gold Seal, OEKO-TEX'
    }
  },
  {
    id: 'text-7',
    categoryId: 'textiles',
    categoryName: 'Textiles & Apparel',
    name: 'Hand-Spun Cashmere Pashmina Shawls',
    shortDescription: 'Masterpiece 100% Changthangi mountain goat cashmere shawls with hand-embroidered Sozni motifs.',
    fullDescription: 'Hand-combed from high-altitude Changthangi goats grazing at 14,000ft in the Himalayas. Spun on traditional charkhas to an unbelievable 12-14 micron fineness and embellished with micro-needle needlework that takes months to complete.',
    origin: 'India (Kashmir)',
    destination: 'France, UK & UAE',
    moq: 'MOQ: 25 Pieces',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/garments.jpg',
    badgeText: '100% PASHMINA\nGI KASHMIR',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '13 Micron Softness', icon: Sparkles },
      { label: 'Sozni Needlework', icon: Award },
      { label: 'Feather Weight (180g)', icon: Scale },
    ],
    specs: {
      'Fiber Diameter': '12.5 - 14.5 Microns genuine Cashmere',
      'Dimensions': '100 cm x 200 cm (Full Stole / Wrap)',
      'Weight': '180 grams ultra-lightweight thermal insulator',
      'Packaging': 'Cedar-wood lined handcrafted keepsake boxes',
      'Certifications': 'GI Registry Kashmir, Craftmark Certified'
    }
  },
  {
    id: 'text-8',
    categoryId: 'textiles',
    categoryName: 'Textiles & Apparel',
    name: 'Recycled Performance Athletic Knit',
    shortDescription: 'Moisture-wicking, 4-way stretch circular knit fabric constructed from recycled ocean plastics.',
    fullDescription: 'Eco-conscious high-compression athletic performance fabric composed of 82% GRS recycled polyester and 18% Spandex. Treated with silver-ion antimicrobial finish and UPF 50+ sun protection for activewear and athleisure.',
    origin: 'India / Taiwan',
    destination: 'USA & Germany',
    moq: 'MOQ: 1,000 Meters',
    image: athleticKnitImg,
    fallbackImage: '/product-images/Recycled Performance Athletic Knit.png',
    badgeText: 'RECYCLED PET\n4-WAY STRETCH',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'UPF 50+ Sun Guard', icon: Sun },
      { label: 'Anti-Odor Silver', icon: ShieldCheck },
      { label: '82% Ocean PET', icon: Leaf },
    ],
    specs: {
      'Weight & Width': '260 GSM / 58-60 inches wide',
      'Composition': '82% Recycled Polyester (rPET) / 18% Elastane',
      'Wicking Rate': '< 2 seconds moisture absorption',
      'Packaging': 'Double plastic sealed rolls with tube core',
      'Certifications': 'Global Recycled Standard (GRS), OEKO-TEX'
    }
  },
  {
    id: 'text-9',
    categoryId: 'textiles',
    categoryName: 'Textiles & Apparel',
    name: 'Handloom Khadi Organic Cotton Shirts',
    shortDescription: 'Zero-carbon hand-spun and handwoven khadi cotton resort shirts with breathable organic textures.',
    fullDescription: 'Honoring India’s storied heritage of self-reliant textile artistry, each garment is made from hand-spun yarn woven on village wooden looms without electric power. Dyed exclusively with non-toxic natural plant and vegetable extracts.',
    origin: 'India (West Bengal)',
    destination: 'Denmark & Japan',
    moq: 'MOQ: 250 Pcs',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/garments.jpg',
    badgeText: 'ZERO CARBON\nHANDLOOM KHADI',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Hand Spun Yarn', icon: Shirt },
      { label: 'Natural Plant Dyes', icon: Leaf },
      { label: 'Zero Electricity', icon: Zap },
    ],
    specs: {
      'Fabric': '100% Hand-Spun Khadi Cotton (60s count)',
      'Colors': 'Natural Indigo, Madder Root, Turmeric Yellow',
      'Fit': 'Contemporary Relaxed Cuban Collar silhouette',
      'Packaging': 'Biodegradable cassava bags with seed paper tags',
      'Certifications': 'Khadi and Village Industries Commission (KVIC)'
    }
  },
  {
    id: 'text-10',
    categoryId: 'textiles',
    categoryName: 'Textiles & Apparel',
    name: 'Bamboo Fiber Hypoallergenic Towels',
    shortDescription: 'Ultra-absorbent 650 GSM plush bath towels blending 70% organic bamboo fiber with combed cotton.',
    fullDescription: 'Naturally antibacterial and mildew resistant, bamboo fiber towels absorb moisture 4 times faster than traditional terrycloth. Engineered with double-stitched reinforced borders to withstand rigorous commercial hotel laundering.',
    origin: 'India (Maharashtra)',
    destination: 'Canada & Spain',
    moq: 'MOQ: 500 Sets',
    image: bambooTowelsImg,
    fallbackImage: '/product-images/Bamboo Fiber Hypoallergenic Towels.png',
    badgeText: '650 GSM PLUSH\nBAMBOO BLEND',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '4x Absorbent', icon: Droplets },
      { label: 'Anti-Bacterial', icon: ShieldCheck },
      { label: 'Zero Linting', icon: Sparkles },
    ],
    specs: {
      'Weight': '650 GSM high density zero-twist pile',
      'Dimensions': 'Bath Sheet (90x150cm), Hand Towel (50x90cm)',
      'Composition': '70% Organic Bamboo Viscose / 30% Combed Cotton',
      'Packaging': 'Bulk export cartons with silica gel inserts',
      'Certifications': 'FSC Bamboo Certified, OEKO-TEX Class 1'
    }
  },
  {
    id: 'text-11',
    categoryId: 'textiles',
    categoryName: 'Textiles & Apparel',
    name: 'Raw Selvedge Stretch Denim Fabric (13.5 Oz)',
    shortDescription: 'Shuttle-loom woven raw indigo selvedge denim blended with 2% elastane for premium boutique workwear.',
    fullDescription: 'Rope-dyed with natural pure indigo using heritage narrow shuttle looms in Ahmedabad. Features classic red-line selvedge ID, deep crocking resistance, and heavy 13.5 oz construction for enduring heritage apparel.',
    origin: 'India (Ahmedabad, Gujarat)',
    destination: 'USA, Italy, Japan & Germany',
    moq: 'MOQ: 2,500 Meters',
    image: rawSelvedgeDenimImg,
    fallbackImage: '/product-images/Raw Selvedge Stretch Denim Fabric (13.5 Oz).png',
    badgeText: 'SHUTTLE LOOM\nRED SELVEDGE ID',
    badgeBg: '#7C3AED',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '13.5 Oz Heavy', icon: Scale },
      { label: 'Rope-Dyed Indigo', icon: Droplets },
      { label: 'Classic Selvedge', icon: Sparkles },
    ],
    specs: {
      'Weight': '13.5 Oz / Sq Yard',
      'Composition': '98% Cotton / 2% Elastane',
      'Weave Type': '3x1 Right Hand Twill',
      'Width': '32 Inches (Shuttle Loom Selvedge)',
      'Dye Method': 'Continuous Pure Indigo Rope Dyeing'
    }
  },
  {
    id: 'text-12',
    categoryId: 'textiles',
    categoryName: 'Textiles & Apparel',
    name: 'Hospitality Hotel Bed Linen (400 TC Sateen)',
    shortDescription: 'Commercial hotel collection 400 thread-count single-pick combed cotton sateen sheets and duvet sets.',
    fullDescription: 'Woven on air-jet looms using compact Egyptian cotton yarns. Mercerized and sanitized for bleach resistance and pill-free performance across 200+ industrial wash cycles. Tailored for 5-star hotel chains.',
    origin: 'India (Coimbatore, Tamil Nadu)',
    destination: 'UK, France, UAE & Australia',
    moq: 'MOQ: 1,000 Sets',
    image: hotelBedLinenImg,
    fallbackImage: '/product-images/Hospitality Hotel Bed Linen (400 TC Sateen).png',
    badgeText: '400 TC SATEEN\nCOMMERCIAL WASH',
    badgeBg: '#7C3AED',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '200+ Wash Life', icon: ShieldCheck },
      { label: 'Silky Sateen', icon: Sparkles },
      { label: 'Zero Pilling', icon: CheckCircle },
    ],
    specs: {
      'Thread Count': '400 TC (Single Pick)',
      'Weave': 'Lustrous Sateen Stripe (1cm)',
      'Yarn Type': '100% Long-Staple Combed Cotton 60s/1',
      'Wash Care': 'Withstands 90°C Commercial Laundering',
      'Certifications': 'OEKO-TEX Standard 100, BSCI'
    }
  }
];

/* =========================================================================
   CATEGORY 3: HERITAGE HANDICRAFTS (12 Products)
   ========================================================================= */
export const handicraftsProducts = [
  {
    id: 'craft-1',
    categoryId: 'handicrafts',
    categoryName: 'Heritage Handicrafts',
    name: 'Handcrafted Brass Buddha Sculpture',
    shortDescription: 'Solid cast antique brass Buddha sculpture with intricate hand-chiseled engraving and patina.',
    fullDescription: 'Cast using ancient lost-wax metallurgy by generational artisans in Moradabad. Features meditative dhyana mudra postures with hand-buffed verdigris highlight accents, sealed with microcrystalline wax to prevent tarnishing.',
    origin: 'India (Moradabad)',
    destination: 'USA & Germany',
    moq: 'MOQ: 20 Pieces',
    image: buddhaImg,
    fallbackImage: '/product-images/Handcrafted Brass Buddha Sculpture.png',
    badgeText: 'LOST-WAX CAST\nSOLID BRASS',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Solid Brass (5.2kg)', icon: Scale },
      { label: 'Hand Chiseled', icon: Sparkles },
      { label: 'Tarnish Resistant', icon: ShieldCheck },
    ],
    specs: {
      'Height & Weight': '18 inches (46 cm) / 5.2 kg net weight',
      'Material': 'High-tensile naval brass (65% Cu / 35% Zn)',
      'Finish': 'Antique antique dual-tone patina finish',
      'Packaging': 'High-density laser cut foam lined wooden crates',
      'Certifications': 'Export Inspection Council, Handmade Mark'
    }
  },
  {
    id: 'craft-2',
    categoryId: 'handicrafts',
    categoryName: 'Heritage Handicrafts',
    name: 'Hand-Knotted Kashmiri Silk Carpet',
    shortDescription: 'Heirloom 600 knots-per-square-inch hand-knotted pure silk carpet with classic medallion motif.',
    fullDescription: 'Crafted over 14 months of painstaking handwork on vertical looms in Srinagar. Features over 900,000 individual knots per square meter using botanical-dyed mulberry silk on a durable mercerized cotton warp foundation.',
    origin: 'India (Kashmir)',
    destination: 'Saudi Arabia & France',
    moq: 'MOQ: 5 Pieces',
    image: silkCarpetImg,
    fallbackImage: '/product-images/Hand-Knotted Kashmiri Silk Carpet.png',
    badgeText: '600 KPSI\nHEIRLOOM SILK',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '600 Knots/Sq. In.', icon: Award },
      { label: 'Vegetable Dyes', icon: Leaf },
      { label: 'Generational Craft', icon: Clock },
    ],
    specs: {
      'Size': '5 ft x 7 ft (152 cm x 213 cm) / Custom sizes available',
      'Pile / Warp': '100% Pure Silk Pile / High-Twist Cotton Warp',
      'Density': '600 - 650 KPSI museum-grade density',
      'Packaging': 'Multi-layer waterproof roll packing in wooden boxes',
      'Certifications': 'GI Silk Carpet Jammu & Kashmir, RugMark'
    }
  },
  {
    id: 'craft-3',
    categoryId: 'handicrafts',
    categoryName: 'Heritage Handicrafts',
    name: 'Carved Sheesham Wood Furniture',
    shortDescription: 'Sustainably sourced Indian rosewood coffee table set featuring traditional lattice jali woodwork.',
    fullDescription: 'Kiln-seasoned for 30 days to reach under 10% moisture content, preventing warping in dry overseas climates. Hand-carved with delicate geometric motifs by Saharanpur woodcarvers and finished with water-based polyurethane.',
    origin: 'India (Saharanpur)',
    destination: 'UK, Netherlands & USA',
    moq: 'MOQ: 15 Sets',
    image: woodFurnitureImg,
    fallbackImage: '/product-images/Carved Sheesham Wood Furniture.png',
    badgeText: 'FSC ROSEWOOD\nKILN DRIED',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Zero Warping (<10%)', icon: ShieldCheck },
      { label: '100% Solid Wood', icon: Layers },
      { label: 'Termite Protected', icon: CheckCircle },
    ],
    specs: {
      'Wood Species': 'Dalbergia sissoo (Indian Rosewood / Sheesham)',
      'Dimensions': 'Coffee Table: 110 x 60 x 45 cm + 2 End Stools',
      'Joinery': 'Traditional mortise-and-tenon interlocking joinery',
      'Packaging': 'Drop-test certified 5-ply honeycomb carton packaging',
      'Certifications': 'CITES Appendix II VRIKSH certified, FSC 100%'
    }
  },
  {
    id: 'craft-4',
    categoryId: 'handicrafts',
    categoryName: 'Heritage Handicrafts',
    name: 'Jaipur Blue Pottery Vases & Urns',
    shortDescription: 'Traditional quartz-stone handmade glazed blue pottery urns with cobalt floral arabesques.',
    fullDescription: 'Unique Egyptian-heritage pottery crafted without clay, using a blend of ground quartz stone, Fuller’s earth, and natural plant gum. Hand-painted with cobalt oxide and fired at low temperatures for distinctive gloss finish.',
    origin: 'India (Jaipur, Rajasthan)',
    destination: 'Australia & Italy',
    moq: 'MOQ: 50 Pieces',
    image: bluePotteryImg,
    fallbackImage: '/product-images/Jaipur Blue Pottery Vases & Urns.png',
    badgeText: 'GI JAIPUR\nNO-CLAY POTTERY',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Quartz Glaze', icon: Sparkles },
      { label: 'Hand Painted', icon: Award },
      { label: 'Non-Porous', icon: Droplets },
    ],
    specs: {
      'Height': '14 inches (35 cm) statement flower vase',
      'Materials': 'Quartz powder, glass, saji (soda), Fuller’s earth',
      'Pigments': 'Cobalt Blue & Copper Oxide turquoise green',
      'Packaging': 'Individual molded styrofoam boxes in master carton',
      'Certifications': 'GI Tag Jaipur Blue Pottery, Craft Council of India'
    }
  },
  {
    id: 'craft-5',
    categoryId: 'handicrafts',
    categoryName: 'Heritage Handicrafts',
    name: 'Pietra Dura Marble Inlay Plates',
    shortDescription: 'Makrana white marble tabletop plaque inlaid with genuine semi-precious lapis and malachite stones.',
    fullDescription: 'Continuing the Mughal architectural legacy of the Taj Mahal, master lapidaries in Agra carve precise micro-cavities into Makrana marble. Hundreds of cut slices of lapis lazuli, carnelian, and mother-of-pearl are set seamlessly.',
    origin: 'India (Agra)',
    destination: 'UAE, Switzerland & USA',
    moq: 'MOQ: 25 Pieces',
    image: marbleInlayImg,
    fallbackImage: '/product-images/Pietra Dura Marble Inlay Plates.png',
    badgeText: 'TAJ LEGACY\nGENUINE GEMS',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Makrana Marble', icon: Sparkles },
      { label: 'Lapis & Malachite', icon: Award },
      { label: 'Precision Fit', icon: ShieldCheck },
    ],
    specs: {
      'Diameter': '12 inches (30 cm) circular art plate with brass stand',
      'Marble Grade': 'Pure A-Grade Makrana White Translucent Marble',
      'Inlaid Gems': 'Lapis Lazuli, Malachite, Turquoise, Jasper, Shell',
      'Packaging': 'Velvet-lined presentation jewelry wooden chest',
      'Certifications': 'Certificate of Authenticity Agra Stone Guild'
    }
  },
  {
    id: 'craft-6',
    categoryId: 'handicrafts',
    categoryName: 'Heritage Handicrafts',
    name: 'Hammered Ayurvedic Copper Pitcher Set',
    shortDescription: '100% pure heavy-gauge hammered copper water pitcher with 4 matching tumblers for wellness living.',
    fullDescription: 'Hand-hammered from certified 99.7% virgin food-grade copper sheets. Designed to naturally ionize and alkalinize drinking water (Tamra Jal) in accordance with Ayurvedic traditions. Exterior clear coated to retain bright luster.',
    origin: 'India (Rajasthan)',
    destination: 'USA, Canada & Germany',
    moq: 'MOQ: 100 Sets',
    image: copperPitcherImg,
    fallbackImage: '/product-images/Hammered Ayurvedic Copper Pitcher Set.png',
    badgeText: '99.7% COPPER\nAYURVEDIC HEALTH',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '99.7% Pure Copper', icon: Award },
      { label: 'Alkaline Water', icon: Droplets },
      { label: 'Hand Hammered', icon: Sparkles },
    ],
    specs: {
      'Set Capacity': 'Jug: 1.8 Liters (60 oz) / 4 Tumblers: 300 ml each',
      'Material': 'Seamless Pure Copper (No lead, cadmium or alloys)',
      'Finish': 'Artisanal dimple hammered texture with brass handle',
      'Packaging': 'Foam-cushioned eco-craft gift box with care brochure',
      'Certifications': 'US FDA Food Contact compliant, SGS Lab Tested'
    }
  },
  {
    id: 'craft-7',
    categoryId: 'handicrafts',
    categoryName: 'Heritage Handicrafts',
    name: 'Full-Grain Vintage Leather Travel Bags',
    shortDescription: 'Handcrafted vegetable-tanned buffalo leather duffel bags with antique solid brass hardware.',
    fullDescription: 'Constructed using full-grain vegetable-tanned water buffalo leather treated with natural oils and beeswax. Features YKK heavy-gauge antique brass zippers, reinforced rivet stress points, and waterproof twill lining.',
    origin: 'India (Kanpur)',
    destination: 'UK, Australia & Norway',
    moq: 'MOQ: 50 Pieces',
    image: leatherBagImg,
    fallbackImage: '/product-images/Full-Grain Vintage Leather Travel Bags.png',
    badgeText: 'FULL GRAIN\nVEG TANNED',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Natural Patina', icon: Award },
      { label: 'YKK Brass Zips', icon: ShieldCheck },
      { label: 'Flight Carry-On', icon: Truck },
    ],
    specs: {
      'Dimensions': '55 x 28 x 28 cm (22 x 11 x 11 inches) 45L volume',
      'Leather Grade': '1.8mm Full Grain Pull-Up Buffalo Hide',
      'Lining': '12 oz heavy cotton twill with padded laptop sleeve',
      'Packaging': 'Dust-proof non-woven bag inside corrugated shipping carton',
      'Certifications': 'Leather Working Group (LWG) Gold Rated Tannery'
    }
  },
  {
    id: 'craft-8',
    categoryId: 'handicrafts',
    categoryName: 'Heritage Handicrafts',
    name: 'Dhokra Lost-Wax Bell Metal Artifacts',
    shortDescription: '4,000-year-old non-ferrous lost-wax metal casting tribal artwork figurines and centerpieces.',
    fullDescription: 'Tracing its unbroken lineage to the Dancing Girl of Mohenjo-Daro, Dhokra is cast by indigenous metalsmiths using beeswax threads, clay molds, and molten bell metal alloy. Every piece is an unrepeatable original artifact.',
    origin: 'India (Bastar, Chhattisgarh)',
    destination: 'Germany, Japan & USA',
    moq: 'MOQ: 30 Pieces',
    image: dhokraCraftImg,
    fallbackImage: '/product-images/Dhokra Lost-Wax Bell Metal Artifacts.png',
    badgeText: '4000 YR LEGACY\nTRIBAL ARTIFACT',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'One-of-a-Kind', icon: Sparkles },
      { label: 'Solid Bronze Alloy', icon: Scale },
      { label: 'Fair Trade Sourced', icon: Award },
    ],
    specs: {
      'Theme Options': 'Tribal Musician Series, Royal Elephant, Sun Chariot',
      'Alloy': 'Traditional Bell Metal (Bronze: 78% Copper, 22% Tin)',
      'Dimensions': 'Heights 20 cm - 35 cm / Weight 1.5 - 3.8 kg',
      'Packaging': 'Museum gift packaging with artisan biography card',
      'Certifications': 'GI Tag Bastar Dhokra, TRIFED Fairtrade'
    }
  },
  {
    id: 'craft-9',
    categoryId: 'handicrafts',
    categoryName: 'Heritage Handicrafts',
    name: 'Braided Natural Jute Area Rugs',
    shortDescription: 'Reversible hand-braided 100% golden jute organic floor rugs with minimalist coastal aesthetic.',
    fullDescription: 'Hand-plaited from sustainably cultivated Golden Bengal jute fibers. Heavyweight 2500 GSM construction provides natural sound dampening and durable foot comfort. Completely biodegradable with zero synthetic latex backing.',
    origin: 'India (Kolkata)',
    destination: 'USA, Sweden & Canada',
    moq: 'MOQ: 100 Pieces',
    image: juteRugsImg,
    fallbackImage: '/product-images/Braided Natural Jute Area Rugs.png',
    badgeText: 'GOLDEN JUTE\n100% ORGANIC',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '2500 GSM Heavy', icon: Layers },
      { label: '100% Biodegradable', icon: Leaf },
      { label: 'Reversible Dual-Side', icon: Award },
    ],
    specs: {
      'Sizes': 'Round: 150cm (5ft) / Rectangle: 180x270cm (6x9ft)',
      'Fiber Grade': 'TD-4 Premium White Tossah Golden Jute',
      'Thickness': '12 mm chunky braided profile',
      'Packaging': 'Heavy poly-wrapped rolls with reinforced end caps',
      'Certifications': 'GoodWeave Certified (Child Labor Free), ISO 14001'
    }
  },
  {
    id: 'craft-10',
    categoryId: 'handicrafts',
    categoryName: 'Heritage Handicrafts',
    name: 'Terracotta Ornamental Garden Urns',
    shortDescription: 'High-fire frost-resistant terracotta architectural planters with embossed classical motifs.',
    fullDescription: 'Hand-thrown on oversized potter’s wheels using alluvial clay rich in natural iron oxides. Fired in wood-burning kilns above 1,050°C to vitrify the porous matrix, conferring exceptional outdoor weather and frost resistance.',
    origin: 'India (Khurja / Gorakhpur)',
    destination: 'Spain, UK & France',
    moq: 'MOQ: 40 Pieces',
    image: terracottaUrnsImg,
    fallbackImage: '/product-images/Terracotta Ornamental Garden Urns.png',
    badgeText: 'FROST RESISTANT\nKILN FIRED',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '1050°C Kiln Fired', icon: Flame },
      { label: 'Frost Proof', icon: ShieldCheck },
      { label: 'Alluvial Terracotta', icon: Leaf },
    ],
    specs: {
      'Dimensions': 'Height: 65 cm / Rim Diameter: 50 cm / Weight: 18 kg',
      'Drainage': 'Pre-drilled base drainage with internal mesh filter',
      'Durability': 'Tested to -15°C freeze-thaw cycles without spalling',
      'Packaging': 'Shrink-wrapped and palletized in reinforced sea crates',
      'Certifications': 'GI Gorakhpur Terracotta, Export Quality Certified'
    }
  },
  {
    id: 'craft-11',
    categoryId: 'handicrafts',
    categoryName: 'Heritage Handicrafts',
    name: 'Embossed Moradabad Brass Serving Trays',
    shortDescription: 'Hand-engraved heavy-gauge brass charger plates and ornate serving platters with antique tarnish-resistant lacquer.',
    fullDescription: 'Artisan cast and hand-chiseled by master metalworkers in Moradabad. Coated with food-safe electroplated clear lacquer ensuring long-lasting mirror luster without tarnishing during global marine transit.',
    origin: 'India (Moradabad, Uttar Pradesh)',
    destination: 'USA, UK, Germany & UAE',
    moq: 'MOQ: 100 Sets',
    image: moradabadBrassTraysImg,
    fallbackImage: '/product-images/Embossed Moradabad Brass Serving Trays.png',
    badgeText: 'MORADABAD BRASS\nTARNISH PROOF',
    badgeBg: '#D97706',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Food-Safe Clear Coat', icon: ShieldCheck },
      { label: 'Solid Cast Brass', icon: Sparkles },
      { label: 'Hand Chiseled', icon: Award },
    ],
    specs: {
      'Base Material': '100% Solid Brass (70/30 Alloy)',
      'Dimensions': 'Platter: 45 cm Diameter / Tray: 55x35 cm',
      'Finish': 'Polished Antique Gold with Intricate Champlevé',
      'Surface Protection': 'Electro-lacquered Tarnish Resistance',
      'Packaging': 'Foam cushioned individual gift boxes in 5-ply cartons'
    }
  },
  {
    id: 'craft-12',
    categoryId: 'handicrafts',
    categoryName: 'Heritage Handicrafts',
    name: 'Hand-Painted Madhubani Folk Art Canvases',
    shortDescription: 'Traditional Mithila natural pigment hand-painted artworks on treated raw cotton canvas with GI certification.',
    fullDescription: 'Created by hereditary women artisans in Bihar using fine bamboo nibs and plant-extracted mineral colors. Depicting traditional tree-of-life and mythological motifs. Signed and certified with GI tags for collectors and gallery imports.',
    origin: 'India (Madhubani, Bihar)',
    destination: 'Canada, Japan, Australia & USA',
    moq: 'MOQ: 25 Paintings',
    image: madhubaniCanvasesImg,
    fallbackImage: '/product-images/Hand-Painted Madhubani Folk Art Canvases.png',
    badgeText: 'GI CERTIFIED\nNATURAL PIGMENTS',
    badgeBg: '#D97706',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '100% Organic Dyes', icon: Leaf },
      { label: 'Signed Artwork', icon: Award },
      { label: 'GI Authenticated', icon: CheckCircle },
    ],
    specs: {
      'Canvas Material': 'Hand-spun Unbleached Cotton Canvas (400 GSM)',
      'Pigments': 'Plant & Mineral Derived Natural Dyes',
      'Dimensions': 'Standard 24 x 36 Inches / 36 x 48 Inches',
      'Framing': 'Rolled in moisture-proof PVC shipping tubes',
      'Certifications': 'Geographical Indication (GI) Registered'
    }
  }
];

/* =========================================================================
   CATEGORY 4: BEVERAGES & SPICES (12 Products)
   ========================================================================= */
export const beveragesProducts = [
  {
    id: 'bev-1',
    categoryId: 'beverages',
    categoryName: 'Beverages & Spices',
    name: 'First-Flush Darjeeling Black Tea (FTGFOP1)',
    shortDescription: 'The Champagne of Teas: Spring-harvested whole leaf Darjeeling tea with vibrant floral muscatel notes.',
    fullDescription: 'Hand-plucked in early April from high-altitude estates situated between 4,000 and 6,500 feet on the slopes of Kanchenjunga. Fineest Tippy Golden Flowery Orange Pekoe (FTGFOP1) yields a pale amber liquor with bright spring freshness.',
    origin: 'India (Darjeeling)',
    destination: 'Germany, Japan & UK',
    moq: 'MOQ: 200 KG',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/food.jpg',
    badgeText: 'FTGFOP1 GRADE\nFIRST FLUSH',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Single Estate', icon: Award },
      { label: 'Muscatel Notes', icon: Sparkles },
      { label: 'Spring Harvest', icon: Leaf },
    ],
    specs: {
      'Leaf Grade': 'FTGFOP1 (Fineest Tippy Golden Flowery Orange Pekoe 1)',
      'Elevation': '5,800 feet above sea level',
      'Liquor Profile': 'Bright golden amber with lively brisk floral palate',
      'Packaging': 'Alu-foil vacuum barrier bags inside wooden tea chests',
      'Certifications': 'Tea Board of India 100% Darjeeling GI, RainForest Alliance'
    }
  },
  {
    id: 'bev-2',
    categoryId: 'beverages',
    categoryName: 'Beverages & Spices',
    name: 'Shade-Grown Arabica Green Coffee',
    shortDescription: 'Specialty Grade-1 washed Arabica green coffee beans with balanced berry acidity and caramel aroma.',
    fullDescription: 'Sourced from biodiversity-rich coffee estates under the canopy of native forest trees in Chikmagalur. Screen 19 Plantation-AA coffee hand-sorted with zero primary defects, ready for commercial specialty coffee roasters.',
    origin: 'India (Chikmagalur / Coorg)',
    destination: 'Italy, USA & South Korea',
    moq: 'MOQ: 1,500 KG',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/food.jpg',
    badgeText: 'GRADE-1 ARABICA\nSCREEN 19 AA',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Screen 19 Bold', icon: Award },
      { label: 'SCA Score 85+', icon: Sparkles },
      { label: 'Shade Cultivated', icon: Leaf },
    ],
    specs: {
      'SCA Cupping Score': '85.5 Specialty Grade',
      'Screen Size': 'Screen 19 (7.5 mm round hole screen)',
      'Moisture Content': '10.5% - 11.5% stabilized',
      'Packaging': '60kg GrainPro hermetic barrier bags inside jute sacks',
      'Certifications': 'Specialty Coffee Association (SCA), UTZ Certified'
    }
  },
  {
    id: 'bev-3',
    categoryId: 'beverages',
    categoryName: 'Beverages & Spices',
    name: 'Tellicherry Black Pepper (TGSEB)',
    shortDescription: 'Tellicherry Garbled Special Extra Bold whole black pepper with minimum 4.75mm diameter berries.',
    fullDescription: 'Considered the gold standard of culinary peppercorns worldwide. TGSEB berries are allowed to ripen longest on the vine to develop deep complex piperine heat and high volatile essential oil content (min 3.5%).',
    origin: 'India (Malabar Coast, Kerala)',
    destination: 'USA, France & Germany',
    moq: 'MOQ: 1,000 KG',
    image: blackPepperImg,
    fallbackImage: '/product-images/Tellicherry Black Pepper (TGSEB).png',
    badgeText: 'TGSEB EXTRA BOLD\nMALABAR ORIGIN',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '4.75mm+ Berries', icon: Scale },
      { label: 'High Piperine (6%)', icon: Flame },
      { label: 'Clean Steam Washed', icon: ShieldCheck },
    ],
    specs: {
      'Grade Caliber': 'TGSEB (Tellicherry Garbled Special Extra Bold)',
      'Bulk Density': '580 - 600 g/l',
      'Piperine Content': '5.5% - 6.2%',
      'Packaging': '25kg multi-wall paper bags with inner poly liner',
      'Certifications': 'Spices Board of India, ASTA Clean, ISO 22000'
    }
  },
  {
    id: 'bev-4',
    categoryId: 'beverages',
    categoryName: 'Beverages & Spices',
    name: 'Kashmiri Mongra Saffron (Grade-A1)',
    shortDescription: 'Pure dark-red Mongra stigma saffron threads possessing extraordinary coloring strength (250+).',
    fullDescription: 'Grown on the high plateaus of Pampore, Kashmir. Mongra saffron consists solely of the deep crimson stigma tips without any yellow style attached. Tested for safranal (aroma), crocin (color), and picrocrocin (flavor).',
    origin: 'India (Pampore, Kashmir)',
    destination: 'UAE, Switzerland & Qatar',
    moq: 'MOQ: 1 KG',
    image: saffronImg,
    fallbackImage: '/product-images/Kashmiri Mongra Saffron (Grade-A1).png',
    badgeText: 'CROCIN 250+\nGRADE-A1 MONGRA',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Color Strength 250+', icon: Award },
      { label: '100% Pure Stigma', icon: Sparkles },
      { label: 'GI Tag Certified', icon: ShieldCheck },
    ],
    specs: {
      'Crocin (Coloring Power)': '255 - 270 (ISO 3632 Category I)',
      'Safranal (Aroma)': '42 (Highly aromatic)',
      'Purity': '100% all-red stigma tips with zero artificial dyes',
      'Packaging': '1g, 5g, 10g tamper-evident blister cards / 1kg airtight tins',
      'Certifications': 'Kashmir Saffron GI, ISO 3632-1 Class I certified'
    }
  },
  {
    id: 'bev-5',
    categoryId: 'beverages',
    categoryName: 'Beverages & Spices',
    name: 'Ceylon Cinnamon True Quills (C5-Special)',
    shortDescription: 'Delicate, paper-thin multi-layered Ceylon cinnamon quills with mild sweet floral flavor.',
    fullDescription: 'Hand-rolled true Cinnamomum verum quills graded C5-Special. Unlike coarse cassia, true Ceylon cinnamon contains near-zero coumarin (< 0.004%), ensuring complete liver safety and subtle sweet aroma for culinary and pharmaceutical uses.',
    origin: 'Sri Lanka / India',
    destination: 'USA, Germany & UK',
    moq: 'MOQ: 500 KG',
    image: ceylonCinnamonImg,
    fallbackImage: '/product-images/Ceylon Cinnamon True Quills (C5-Special).png',
    badgeText: 'TRUE CINNAMON\nC5 SPECIAL',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Ultra Low Coumarin', icon: ShieldCheck },
      { label: 'C5 Delicate Roll', icon: Layers },
      { label: 'Natural Sweetness', icon: Sparkles },
    ],
    specs: {
      'Quill Diameter': '10 - 12 mm compact tight sticks',
      'Coumarin Content': '< 0.004% (Safe for daily health intake)',
      'Volatile Oil': '2.0% - 2.8%',
      'Packaging': '25kg export bales or pre-cut 5-inch retail boxes',
      'Certifications': 'Ceylon Cinnamon Pure GI, USDA Organic, ISO 22000'
    }
  },
  {
    id: 'bev-6',
    categoryId: 'beverages',
    categoryName: 'Beverages & Spices',
    name: 'Assam CTC Black Tea (BOP / BP)',
    shortDescription: 'Strong, brisk, rich malty Assam CTC black tea crafted for commercial tea bags and milk chai blends.',
    fullDescription: 'Manufactured from selected clonals grown in the Brahmaputra valley. Broken Orange Pekoe (BOP) and Broken Pekoe (BP) CTC grades produce a dense mahogany-colored liquor with punchy strength and deep malty undertones.',
    origin: 'India (Upper Assam)',
    destination: 'Russia, Egypt & Iran',
    moq: 'MOQ: 3,000 KG',
    image: assamTeaImg,
    fallbackImage: '/product-images/Assam CTC Black Tea (BOP  BP).png',
    badgeText: 'STRONG & MALTY\nASSAM VALLEY',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Dense Mahogany Cup', icon: Droplets },
      { label: 'High Caffeine Punch', icon: Zap },
      { label: 'Fast Infusion', icon: Clock },
    ],
    specs: {
      'Grades': 'BOP (Broken Orange Pekoe), BP (Broken Pekoe), OF (Orange Fannings)',
      'Density': '420 - 460 g/l',
      'Moisture': '< 4.0%',
      'Packaging': '35kg multi-wall paper sacks with inner alu-foil moisture barrier',
      'Certifications': 'Trustea Certified, Ethical Tea Partnership, FSSAI'
    }
  },
  {
    id: 'bev-7',
    categoryId: 'beverages',
    categoryName: 'Beverages & Spices',
    name: 'Star Anise Whole Pods (Handpicked)',
    shortDescription: 'Perfect eight-pointed star anise pods with intact shiny seeds and sweet licorice aroma.',
    fullDescription: 'Hand-harvested from evergreen Illicium verum trees and sun-dried on bamboo mats until reddish-brown. Hand-sorted to guarantee over 90% whole intact stars with high concentrations of shikimic acid and trans-anethole.',
    origin: 'Vietnam / India',
    destination: 'France, USA & Netherlands',
    moq: 'MOQ: 1,000 KG',
    image: starAniseImg,
    fallbackImage: '/product-images/Star Anise Whole Pods (Handpicked).png',
    badgeText: 'WHOLE STARS 90%+\nSHIKIMIC ACID',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '90% Whole Stars', icon: Award },
      { label: 'Anethole Essential Oil', icon: Droplets },
      { label: 'Sun Dried', icon: Sun },
    ],
    specs: {
      'Whole Stars': 'Minimum 88% - 92% intact',
      'Diameter': '2.5 cm - 3.5 cm',
      'Moisture': '< 13.5%',
      'Packaging': '10kg carton with inner plastic liner / 25kg PP bags',
      'Certifications': 'Phytosanitary Certified, ISO 9001'
    }
  },
  {
    id: 'bev-8',
    categoryId: 'beverages',
    categoryName: 'Beverages & Spices',
    name: 'Organic Whole Hibiscus Calyces',
    shortDescription: 'Deep crimson dried hibiscus flower calyces producing refreshing tart ruby-red herbal tea infusions.',
    fullDescription: 'Sun-dried whole organic Hibiscus sabdariffa flowers. Hand-cleaned to eliminate grit and seeds. Naturally rich in anthocyanins, vitamin C, and organic fruit acids, making it a favorite for artisan beverage blenders.',
    origin: 'India / Nigeria',
    destination: 'Germany, USA & Canada',
    moq: 'MOQ: 800 KG',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/food.jpg',
    badgeText: 'VIBRANT RUBY\nORGANIC FLOWERS',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'High Vitamin C', icon: ShieldCheck },
      { label: 'Deep Ruby Color', icon: Sparkles },
      { label: 'Caffeine Free', icon: CheckCircle },
    ],
    specs: {
      'Form': 'Whole dried calyces without capsules',
      'Total Ash': '< 8.0%',
      'Moisture': '< 11.0%',
      'Packaging': '20kg compressed woven PP bags with inner liner',
      'Certifications': 'USDA Organic, EU Bio Organic, Kosher'
    }
  },
  {
    id: 'bev-9',
    categoryId: 'beverages',
    categoryName: 'Beverages & Spices',
    name: 'Handpicked Whole Cloves (Lal Pari)',
    shortDescription: 'Plump reddish-brown handpicked clove buds with intact flower heads and intense eugenol aroma.',
    fullDescription: 'Carefully harvested from the clove hills of Kanyakumari. Hand-graded to separate headless stems. Contains exceptional natural eugenol essential oil (over 18%), offering potent antiseptic properties and intense culinary spice.',
    origin: 'India (Kanyakumari / Zanzibar)',
    destination: 'UAE, Singapore & USA',
    moq: 'MOQ: 1,000 KG',
    image: clovesImg,
    fallbackImage: '/product-images/Handpicked Whole Cloves (Lal Pari).png',
    badgeText: 'LAL PARI HANDPICKED\nEUGENOL 18%+',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '18%+ Eugenol Oil', icon: Droplets },
      { label: 'Headless < 2%', icon: Award },
      { label: 'Zero Foreign Matter', icon: ShieldCheck },
    ],
    specs: {
      'Grade': 'Handpicked Lal Pari / Grade 1 Special',
      'Essential Oil': '18.0% - 21.0% volatile oil',
      'Moisture': '< 11.0%',
      'Packaging': '25kg jute bags or 50kg export cartons',
      'Certifications': 'Spices Board India, ISO 22000, HACCP'
    }
  },
  {
    id: 'bev-10',
    categoryId: 'beverages',
    categoryName: 'Beverages & Spices',
    name: 'Raw Organic Cacao Beans & Nibs',
    shortDescription: 'Sun-fermented Trinitario raw cacao beans and roasted nibs rich in flavonoids and chocolate aroma.',
    fullDescription: 'Cultivated under mixed canopy agroforestry in South India. Fermented in tiered cedar wood sweat-boxes for 6 days to develop complex notes of dark berries, tobacco, and cocoa butter without bitter astringency.',
    origin: 'India (Western Ghats)',
    destination: 'Belgium, Switzerland & USA',
    moq: 'MOQ: 1,000 KG',
    image: cacaoBeansImg,
    fallbackImage: '/product-images/Raw Organic Cacao Beans & Nibs.png',
    badgeText: 'TRINITARIO SINGLE\nFERMENTED 6-DAYS',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Cocoa Butter 52%', icon: Award },
      { label: 'Antioxidant Rich', icon: ShieldCheck },
      { label: 'Fair Trade Certified', icon: Leaf },
    ],
    specs: {
      'Variety': 'Trinitario & Criollo hybrid beans',
      'Bean Count': '90 - 100 beans per 100g',
      'Fermentation Degree': 'Over 85% fully fermented cut test',
      'Packaging': '60kg breathable jute sacks',
      'Certifications': 'Fairtrade, USDA Organic, Rainforest Alliance'
    }
  },
  {
    id: 'bev-11',
    categoryId: 'beverages',
    categoryName: 'Beverages & Spices',
    name: 'Guntur Sannam S4 Dry Red Chillies (Stemless)',
    shortDescription: 'Deep-red, high-capsaicin stemless sun-dried Guntur S4 chillies with strong pungency (SHU 35,000-45,000).',
    fullDescription: 'Sourced directly from the spice capital Guntur in Andhra Pradesh. Machine de-stemmed, cleaned, and moisture-controlled to under 11%. High ASTA color value (70-90) and potent heat tailored for global food processing and oleoresin extraction.',
    origin: 'India (Guntur, Andhra Pradesh)',
    destination: 'USA, Mexico, China & Thailand',
    moq: 'MOQ: 14 Metric Tons (1x40ft FCL)',
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/food.jpg',
    badgeText: 'SHU 35,000-45,000\nSTEMLESS CLEAN',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'High Capsaicin', icon: Flame },
      { label: 'ASTA 70-90', icon: Award },
      { label: 'Zero Aflatoxin', icon: ShieldCheck },
    ],
    specs: {
      'Variety': 'Guntur Sannam S4 (Capsicum annuum)',
      'Heat Level': '35,000 - 45,000 Scoville Heat Units (SHU)',
      'Moisture Content': '10.5% Maximum',
      'Extraneous Matter': 'Under 0.5% Stemless Cleaned',
      'Packaging': '25 kg Poly-woven sacks with outer Kraft lining'
    }
  },
  {
    id: 'bev-12',
    categoryId: 'beverages',
    categoryName: 'Beverages & Spices',
    name: 'Nilgiri High-Grown Frost Black Tea (Orange Pekoe)',
    shortDescription: 'Winter-harvested Nilgiri orthodox black tea boasting crisp floral notes, bright amber liquor, and sweet clarity.',
    fullDescription: 'Plucked at elevations exceeding 6,500 feet in the Blue Mountains during chilly winter mornings. Cold frost conditions concentrate natural sugars and floral aromatic oils, producing one of the world\'s most refreshing afternoon teas.',
    origin: 'India (Nilgiris, Tamil Nadu)',
    destination: 'UK, Germany, Japan & USA',
    moq: 'MOQ: 500 KG',
    image: nilgiriBlackTeaImg,
    fallbackImage: '/product-images/Nilgiri High-Grown Frost Black Tea (Orange Pekoe).png',
    badgeText: '6,500 FT ELEVATION\nFROST FLUSH',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '6,500+ Ft Pluck', icon: Sun },
      { label: 'Floral Amber', icon: Coffee },
      { label: 'High Volatiles', icon: Sparkles },
    ],
    specs: {
      'Tea Grade': 'Orthodox Orange Pekoe (OP)',
      'Elevation': '6,500 to 7,200 Feet Above Sea Level',
      'Harvest Season': 'Winter Frost Flush (Dec - Feb)',
      'Liquor Characteristic': 'Bright Golden Amber with Fruity Floral Bouquet',
      'Certifications': 'Tea Board of India, Ethical Tea Partnership, ISO 22000'
    }
  }
];

/* =========================================================================
   CATEGORY 5: AUTOMOBILES & VEHICLES (12 Products)
   ========================================================================= */
export const automobilesProducts = [
  {
    id: 'auto-1',
    categoryId: 'automobiles',
    categoryName: 'Automobiles & Vehicles',
    name: 'Commercial Electric Cargo Van (4.5T)',
    shortDescription: 'Zero-emission high-payload commercial urban logistics electric van with 280km operational range.',
    fullDescription: 'Engineered for last-mile urban logistics fleets. Powered by a 75 kWh liquid-cooled CATL Lithium Iron Phosphate (LFP) battery pack with CCS2 80kW DC fast charging (20% to 80% in 45 mins). Features 11.5 cubic meters of cargo volume.',
    origin: 'India / China',
    destination: 'UAE, South Africa & UK',
    moq: 'MOQ: 5 Units',
    image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/automotive.jpg',
    badgeText: 'ZERO EMISSION\n280KM RANGE',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '75 kWh LFP Battery', icon: Zap },
      { label: '1,650 kg Payload', icon: Scale },
      { label: 'Telematics GPS Ready', icon: ShieldCheck },
    ],
    specs: {
      'Motor Power': 'Peak 135 kW / 350 Nm permanent magnet motor',
      'Battery System': '75 kWh LFP with 8-year / 250,000 km warranty',
      'Cargo Dimensions': '3,400 x 1,800 x 1,900 mm (11.5 m³ volume)',
      'Charging': 'CCS2 DC 80kW / AC 11kW Three-Phase',
      'Certifications': 'ECE R100 EV Safety, WVTA European Homologation'
    }
  },
  {
    id: 'auto-2',
    categoryId: 'automobiles',
    categoryName: 'Automobiles & Vehicles',
    name: 'Heavy-Duty Freight Truck Chassis (6x4)',
    shortDescription: 'Severe-duty 40-ton multi-axle freight chassis equipped with 420 HP Euro-VI turbo-diesel powertrain.',
    fullDescription: 'Built on high-yield structural steel frame rails for long-haul intermodal shipping and construction haulage. Equipped with Bosch Common Rail injection, 12-speed automated transmission, and parabolic front suspension.',
    origin: 'India / Germany',
    destination: 'Saudi Arabia, Kenya & Oman',
    moq: 'MOQ: 2 Units',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/automotive.jpg',
    badgeText: '420 HP EURO-VI\n40-TON GVW',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '420 HP Turbo Engine', icon: Flame },
      { label: 'Euro-VI Clean Fleet', icon: Leaf },
      { label: 'Dual Circuit Air Brake', icon: ShieldCheck },
    ],
    specs: {
      'Engine': '11.0L In-line 6 Turbocharged Intercooled Diesel',
      'Transmission': '12-Speed Automated Manual Transmission (AMT)',
      'GVW / GCW': '28,000 kg / 49,000 kg with trailer',
      'Cab Type': 'Sleeper Cab with aerodynamic wind deflector',
      'Certifications': 'Euro-VI Step E, ISO 9001, GCC Standardization'
    }
  },
  {
    id: 'auto-3',
    categoryId: 'automobiles',
    categoryName: 'Automobiles & Vehicles',
    name: 'Forged Aluminum Alloy Wheel Sets (19-21")',
    shortDescription: 'Monoblock forged aerospace-grade 6061-T6 aluminum alloy wheels for luxury and performance vehicles.',
    fullDescription: 'Precision CNC-milled from 10,000-ton forged aluminum billets. Delivers 25% weight reduction over cast wheels while withstanding extreme radial impact loads. Available in customized bolt patterns, offsets, and finishes.',
    origin: 'India / Taiwan',
    destination: 'USA, Germany & Japan',
    moq: 'MOQ: 50 Sets (200 Pcs)',
    image: alloyWheelsImg,
    fallbackImage: '/product-images/Forged Aluminum Alloy Wheel Sets (19-21).png',
    badgeText: 'FORGED 6061-T6\nTUV CERTIFIED',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Aerospace 6061-T6', icon: Award },
      { label: '25% Lighter Weight', icon: Scale },
      { label: 'JWL / VIA Tested', icon: ShieldCheck },
    ],
    specs: {
      'Sizes': '19x8.5J to 22x11.5J custom wheel widths',
      'Material': '6061-T6 Aerospace Forged Aluminum Billets',
      'Testing': 'Dynamic radial fatigue, rotary bending, 13° impact',
      'Packaging': 'Flannel wheel covers in double reinforced export cartons',
      'Certifications': 'TÜV Germany, JWL/VIA Japan, DOT compliant'
    }
  },
  {
    id: 'auto-4',
    categoryId: 'automobiles',
    categoryName: 'Automobiles & Vehicles',
    name: 'Ceramic Composite Brake Pad & Rotor Kits',
    shortDescription: 'Zero-noise, low-dust carbon-ceramic formulated brake pads paired with slotted heat-treated rotors.',
    fullDescription: 'Engineered for severe duty, fleet operations, and performance SUVs. Copper-free ceramic friction matrix delivers stable friction coefficient (0.42μ) up to 650°C without brake fade or excessive disc wear.',
    origin: 'India / Italy',
    destination: 'USA, UK & Australia',
    moq: 'MOQ: 200 Sets',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/automotive.jpg',
    badgeText: 'LOW DUST CERAMIC\n650°C RESISTANT',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Stable at 650°C', icon: Flame },
      { label: 'Zero Noise Shims', icon: ShieldCheck },
      { label: 'Copper Free 2025', icon: Leaf },
    ],
    specs: {
      'Friction Coefficient': '0.40 - 0.45 μ (GG Rated)',
      'Rotor Metallurgy': 'G3000 Grey Cast Iron with Geomet rust coating',
      'Backing Plate': 'Laser-cut with rubberized multi-layer sound shims',
      'Packaging': 'Shrink-wrapped axle set in branded corrugated box',
      'Certifications': 'ECE R90 Certified, AMECA USA Registered'
    }
  },
  {
    id: 'auto-5',
    categoryId: 'automobiles',
    categoryName: 'Automobiles & Vehicles',
    name: 'Heavy-Duty 24V Commercial Alternators',
    shortDescription: 'High-output 150A 24V brushless alternators engineered for extreme temperature commercial engines.',
    fullDescription: 'Designed for commercial transport buses, marine auxiliary engines, and heavy construction equipment. Equipped with heavy-duty sealed roller bearings, avalanche diode rectifiers, and precision dynamic balancing.',
    origin: 'India (Pune)',
    destination: 'Germany, Brazil & UAE',
    moq: 'MOQ: 50 Pieces',
    image: commercialAlternatorImg,
    fallbackImage: '/product-images/Heavy-Duty 24V Commercial Alternators.png',
    badgeText: '24V / 150A OUTPUT\nBRUSHLESS DESIGN',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '150A High Output', icon: Zap },
      { label: 'Brushless Life', icon: Clock },
      { label: '-40°C to +125°C', icon: ShieldCheck },
    ],
    specs: {
      'Voltage & Current': '24 Volts / 150 Amperes continuous',
      'Mounting': 'J180 Hinge / Pad Mount standard',
      'Efficiency': '> 75% at 6,000 RPM',
      'Packaging': 'VCI corrosion-inhibiting bag in foam-lined master carton',
      'Certifications': 'ISO/TS 16949, SAE J56, CE Mark'
    }
  },
  {
    id: 'auto-6',
    categoryId: 'automobiles',
    categoryName: 'Automobiles & Vehicles',
    name: 'Hydraulic Heavy Truck Shock Absorbers',
    shortDescription: 'Twin-tube nitrogen gas-pressurized shock absorbers with multi-lip Viton seals for heavy fleets.',
    fullDescription: 'Custom-valved for rough road commercial trucking and mining haulers. Hard-chromed micro-polished 20mm piston rods paired with heat-resistant synthetic hydraulic oil guarantee consistent damping over 500,000 km.',
    origin: 'India / Turkey',
    destination: 'South Africa, Chile & Poland',
    moq: 'MOQ: 100 Pairs',
    image: truckShockAbsorberImg,
    fallbackImage: '/product-images/Hydraulic Heavy Truck Shock Absorbers.png',
    badgeText: 'NITROGEN CHARGED\n500K KM DURABILITY',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Gas Pressurized', icon: Award },
      { label: 'Anti-Foam Oil', icon: Droplets },
      { label: 'Viton Seal System', icon: ShieldCheck },
    ],
    specs: {
      'Cylinder Bore': '45 mm heavy bore / 20 mm induction-hardened rod',
      'Damping Force': 'Bounce: 3,500 N / Rebound: 8,200 N at 0.52 m/s',
      'Working Temp': '-35°C to +110°C continuous duty',
      'Packaging': 'Pairs packed in heavy-duty cardboard tubes',
      'Certifications': 'IATF 16949:2016, ISO 9001:2015'
    }
  },
  {
    id: 'auto-7',
    categoryId: 'automobiles',
    categoryName: 'Automobiles & Vehicles',
    name: 'Deep-Cycle Maintenance-Free AGM Batteries',
    shortDescription: 'Absorbent Glass Mat (AGM) 12V 120Ah commercial starting and cyclic auxiliary power batteries.',
    fullDescription: 'Engineered with 99.99% pure lead virgin grid plates and microporous glass mat separators. Offers 3x the cycle life of conventional flooded batteries, superior vibration resistance (V4 rating), and non-spillable leakproof design.',
    origin: 'India / Vietnam',
    destination: 'UAE, Canada & Nigeria',
    moq: 'MOQ: 100 Units',
    image: agmBatteryImg,
    fallbackImage: '/product-images/Deep-Cycle Maintenance-Free AGM Batteries.png',
    badgeText: '12V 120AH AGM\nV4 VIBRATION RESIST',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '900 CCA Cranking', icon: Zap },
      { label: '3x Cycle Life', icon: Clock },
      { label: '100% Non-Spillable', icon: ShieldCheck },
    ],
    specs: {
      'Capacity & CCA': '12V 120Ah (C20) / 900 Cold Cranking Amps (EN)',
      'Dimensions': '353 x 175 x 190 mm (Group 49 / H8 size)',
      'Cycle Durability': 'Over 800 cycles at 50% DOD',
      'Packaging': 'Dangerous Goods (UN2800 exempt) secure palletizing',
      'Certifications': 'UL Recognized, CE, ISO 14001, RoHS'
    }
  },
  {
    id: 'auto-8',
    categoryId: 'automobiles',
    categoryName: 'Automobiles & Vehicles',
    name: 'All-Steel Radial Commercial Truck Tires (315/80R22.5)',
    shortDescription: 'Premium all-position steer/trailer radial tires with deep 18mm tread and cut-and-chip compound.',
    fullDescription: 'Reinforced 4-belt steel carcass delivers outstanding casing retreadability and uniform ground contact footprint. Optimized shoulder sipes resist irregular wear while 4 zigzag longitudinal grooves provide superior wet grip.',
    origin: 'India / Thailand',
    destination: 'USA, Saudi Arabia & Mexico',
    moq: 'MOQ: 1x40ft Container (240 Tires)',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/automotive.jpg',
    badgeText: '315/80R22.5\n4-BELT STEEL',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '156/150K Load Index', icon: Scale },
      { label: 'Retreadable Casing', icon: Award },
      { label: 'Deep 18mm Tread', icon: ShieldCheck },
    ],
    specs: {
      'Size & Ply': '315/80R22.5 - 20 Ply Rating (PR)',
      'Load / Speed Index': '156/150K (4,000 kg single / 3,350 kg dual)',
      'Tread Depth': '18.0 mm deep anti-wear compound',
      'Packaging': 'Wrapped in protective plastic film or loose container load',
      'Certifications': 'US DOT, E-Mark (ECE 54), SmartWay Verified'
    }
  },
  {
    id: 'auto-9',
    categoryId: 'automobiles',
    categoryName: 'Automobiles & Vehicles',
    name: 'Automotive Transmission Crown & Pinion Sets',
    shortDescription: 'Precision CNC hypoid bevel gear drive sets case-hardened from 20CrMnTi structural alloy steel.',
    fullDescription: 'Manufactured on Gleason gear generators with sub-micron lapping for whisper-quiet differential engagement. Quenched and carburized to 58-62 HRC surface hardness with a ductile tough core that withstands extreme shock loads.',
    origin: 'India (Rajkot)',
    destination: 'Germany, Turkey & USA',
    moq: 'MOQ: 50 Sets',
    image: crownPinionImg,
    fallbackImage: '/product-images/Automotive Transmission Crown & Pinion Sets.png',
    badgeText: 'GLEASON LAPPED\n58-62 HRC TOUGH',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Sub-Micron Mesh', icon: Settings },
      { label: 'Case Hardened HRC 60', icon: ShieldCheck },
      { label: 'OEM Matched Pairs', icon: Award },
    ],
    specs: {
      'Material': '20CrMnTi / 8620 Alloy Gear Steel',
      'Gear Type': 'Hypoid Spiral Bevel Ratio 4.11 / 3.73 / 4.56',
      'Tooth Surface Quality': 'DIN Class 6 ground and lapped pairs',
      'Packaging': 'Oiled and wrapped in sealed cartons on wooden pallets',
      'Certifications': 'IATF 16949, ISO 9001:2015'
    }
  },
  {
    id: 'auto-10',
    categoryId: 'automobiles',
    categoryName: 'Automobiles & Vehicles',
    name: 'Adaptive LED Vehicle Headlight Assemblies',
    shortDescription: 'Full matrix LED headlamp system with dynamic sequential turn signals and auto-leveling projection.',
    fullDescription: 'OEM-grade direct replacement assemblies equipped with high-flux Osram LED chips generating 12,000 lumens per pair. IP68 waterproof sealed polycarbonate lenses with anti-UV hardening that prevent yellowing and condensation.',
    origin: 'India / South Korea',
    destination: 'USA, UK & Australia',
    moq: 'MOQ: 50 Pairs',
    image: ledHeadlightImg,
    fallbackImage: '/product-images/Adaptive LED Vehicle Headlight Assemblies.png',
    badgeText: '12,000 LUMENS\nMATRIX ADAPTIVE',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '12,000 Lumens', icon: Zap },
      { label: 'IP68 Waterproof', icon: Droplets },
      { label: 'Plug & Play CANbus', icon: CheckCircle },
    ],
    specs: {
      'Light Source': 'Automotive Matrix LED with bi-projection lenses',
      'Operating Voltage': '9V - 32V DC wide voltage range',
      'Color Temp': '6,000K Pure Diamond White daylight illumination',
      'Packaging': 'Custom foam cut-outs inside heavy export carton box',
      'Certifications': 'DOT SAE approved, E-Mark (E9), ISO 9001'
    }
  },
  {
    id: 'auto-11',
    categoryId: 'automobiles',
    categoryName: 'Automobiles & Vehicles',
    name: 'Heavy-Duty Commercial Brake Pads (ECE R90)',
    shortDescription: 'Low-wear, high-temperature semi-metallic brake pad sets engineered for heavy-duty commercial haulers.',
    fullDescription: 'Engineered using copper-free high-friction composite formulation with integrated noise dampening shims. Tested to ECE R90 standards to maintain stable friction coefficient (0.38 - 0.45) up to 650°C without brake fade.',
    origin: 'India (Chennai, Tamil Nadu)',
    destination: 'Germany, South Africa & Mexico',
    moq: 'MOQ: 200 Axle Sets',
    image: brakePadsImg,
    fallbackImage: '/product-images/Heavy-Duty Commercial Brake Pads (ECE R90).png',
    badgeText: 'ECE R90 CERTIFIED\nHEAT TO 650°C',
    badgeBg: '#2563EB',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Stable μ 0.42', icon: ShieldCheck },
      { label: 'Copper-Free Eco', icon: Leaf },
      { label: 'Zero Fade 650°C', icon: Flame },
    ],
    specs: {
      'Friction Rating': 'Class FF (μ = 0.38 - 0.45)',
      'Operating Temperature': 'Effective up to 650°C Peak',
      'Backing Plate': 'Anti-rust E-Coated High Tensile Steel',
      'Applications': 'Heavy Commercial Trucks, Haulers & Busses',
      'Certifications': 'ECE R90, ISO/TS 16949, SAE J661'
    }
  },
  {
    id: 'auto-12',
    categoryId: 'automobiles',
    categoryName: 'Automobiles & Vehicles',
    name: 'Electric Commercial Van Powertrain Motors (90kW)',
    shortDescription: 'High-efficiency permanent magnet synchronous EV traction motors with integrated liquid cooling for commercial fleet vans.',
    fullDescription: 'Designed for 3.5T to 7.5T electric delivery vans and urban buses. Delivers 90kW continuous (160kW peak) with 380 Nm torque. Compliant with ISO 26262 ASIL-D functional safety standards.',
    origin: 'India (Pune, Maharashtra)',
    destination: 'UK, Netherlands & Poland',
    moq: 'MOQ: 10 Units',
    image: vanPowertrainMotorImg,
    fallbackImage: '/product-images/Electric Commercial Van Powertrain Motors (90kW).png',
    badgeText: 'PMSM TRACTION\n96.5% EFFICIENCY',
    badgeBg: '#2563EB',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Peak 160 kW', icon: Zap },
      { label: '380 Nm Torque', icon: Settings },
      { label: 'Liquid Cooled', icon: Droplets },
    ],
    specs: {
      'Motor Architecture': 'Permanent Magnet Synchronous Motor (PMSM)',
      'Continuous / Peak Power': '90 kW Continuous / 160 kW Peak (30s)',
      'Max Output Torque': '380 Nm from 0-4,500 RPM',
      'Cooling Mechanism': 'Integrated Water-Glycol Enclosure (IP67)',
      'Certifications': 'ISO 26262 ASIL-D, ECE R10, ECE R85'
    }
  }
];

/* =========================================================================
   CATEGORY 6: INDUSTRIAL MACHINERY (12 Products)
   ========================================================================= */
export const machineryProducts = [
  {
    id: 'mach-1',
    categoryId: 'machinery',
    categoryName: 'Industrial Machinery',
    name: '5-Axis CNC Vertical Machining Center',
    shortDescription: 'High-speed precision 5-axis CNC machining center with 24,000 RPM direct-drive ceramic spindle.',
    fullDescription: 'Designed for high-precision aerospace, medical, and mold-making components. Built on a vibration-dampening mineral-cast bed, equipped with Heidenhain glass optical scales, 30-tool automatic changer, and Siemens 840D controller.',
    origin: 'India / Germany',
    destination: 'USA, Poland & UAE',
    moq: 'MOQ: 1 Unit',
    image: cncMachiningImg,
    fallbackImage: '/product-images/5-Axis CNC Vertical Machining Center.png',
    badgeText: '5-AXIS SIMULTANEOUS\n24,000 RPM SPINDLE',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '± 0.003mm Repeat', icon: Settings },
      { label: '30-Tool ATC Mag', icon: Award },
      { label: 'Siemens 840D CNC', icon: Cpu },
    ],
    specs: {
      'Axis Travel (X/Y/Z)': '650 x 750 x 500 mm with B (+30°/-120°) & C (360°)',
      'Spindle Specs': 'HSK-A63 / 24,000 RPM / 35 kW liquid cooled',
      'Table Capacity': 'Ø 600 mm rotary table / 500 kg max workpiece load',
      'Packaging': 'Vacuum moisture foil barrier inside steel-braced crate',
      'Certifications': 'CE Machine Directive 2006/42/EC, ISO 230-2 Accuracy'
    }
  },
  {
    id: 'mach-2',
    categoryId: 'machinery',
    categoryName: 'Industrial Machinery',
    name: 'CNC Hydraulic Press Brake (200T / 4M)',
    shortDescription: 'Synchronized electro-hydraulic 4-axis CNC metal sheet bending press with Delem DA-58T control.',
    fullDescription: 'Heavy-duty steel welded frame stress-relieved via shot blasting and vibration aging. Equipped with German Rexroth proportional hydraulic valves, Italian Givi optical encoders, and dynamic mechanical table crowning system.',
    origin: 'India / Turkey',
    destination: 'Canada, Australia & Saudi Arabia',
    moq: 'MOQ: 1 Unit',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/industrial.jpg',
    badgeText: '200 TON CAPACITY\n4-METER BENDING',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Rexroth Hydraulics', icon: ShieldCheck },
      { label: 'Auto Crowning', icon: Settings },
      { label: 'Delem Touch Control', icon: Cpu },
    ],
    specs: {
      'Bending Force': '2,000 kN (200 Metric Tons)',
      'Bending Length': '4,000 mm sheet width capacity',
      'Controlled Axes': 'Y1, Y2, X, R + CNC mechanical crowning',
      'Packaging': 'Heavy-duty seaworthy export skid with waterproof wrapping',
      'Certifications': 'CE Safety Standard, EN 12622 Press Brakes'
    }
  },
  {
    id: 'mach-3',
    categoryId: 'machinery',
    categoryName: 'Industrial Machinery',
    name: '12kW Industrial Fiber Laser Sheet Cutter',
    shortDescription: 'High-power 12,000W fiber laser cutting system with dual shuttle tables and auto nozzle changer.',
    fullDescription: 'Engineered for high-throughput cutting of carbon steel (up to 40mm), stainless steel (up to 30mm), and aluminum. Built with aerospace gantry cast-aluminum crossbeam, Raytools auto-focus cutting head, and IPG/Max laser source.',
    origin: 'India / Germany',
    destination: 'USA, Mexico & Brazil',
    moq: 'MOQ: 1 Unit',
    image: fiberLaserImg,
    fallbackImage: '/product-images/12kW Industrial Fiber Laser Sheet Cutter.png',
    badgeText: '12KW FIBER LASER\nDUAL SHUTTLE BED',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '12kW Raycus / IPG', icon: Zap },
      { label: '140 m/min Rapid', icon: Clock },
      { label: 'Up to 40mm Steel', icon: Layers },
    ],
    specs: {
      'Work Area': '3,000 x 1,500 mm (Optional 4,000 x 2,000 mm)',
      'Positioning Accuracy': '± 0.02 mm / Repositioning: ± 0.015 mm',
      'Max Acceleration': '2.0 G simultaneous motion',
      'Packaging': 'Split container loading (40ft Open Top container)',
      'Certifications': 'FDA Laser Class 1 Enclosure, CE, ISO 9001'
    }
  },
  {
    id: 'mach-4',
    categoryId: 'machinery',
    categoryName: 'Industrial Machinery',
    name: 'Automatic Liquid Rotary Filling & Capping Line',
    shortDescription: 'Sanitary CIP-capable stainless steel rotary bottle filler with servo-driven capping station.',
    fullDescription: 'Designed for pharmaceutical, dairy, and beverage packaging. Fully automated monobloc integrates bottle rinsing, piston/flow-meter filling (100ml - 1000ml), nitrogen flushing, and rotary torque-controlled screw capping.',
    origin: 'India (Ahmedabad)',
    destination: 'UK, Kenya & Nigeria',
    moq: 'MOQ: 1 Complete Line',
    image: liquidFillingImg,
    fallbackImage: '/product-images/Automatic Liquid Rotary Filling & Capping Line.png',
    badgeText: 'CIP CLEAN-IN-PLACE\n120 BOTTLES/MIN',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'SS316L Contact', icon: ShieldCheck },
      { label: '± 0.5% Accuracy', icon: Award },
      { label: '120 BPM High Speed', icon: Clock },
    ],
    specs: {
      'Speed Output': '60 to 120 bottles per minute (BPM)',
      'Contact Material': 'Pharmaceutical grade SS316L mirror polished',
      'Control System': 'Siemens PLC with 10" color HMI touch display',
      'Packaging': 'Fumigated export wooden crates with moisture silica',
      'Certifications': 'cGMP Compliant, 21 CFR Part 11 ready, CE'
    }
  },
  {
    id: 'mach-5',
    categoryId: 'machinery',
    categoryName: 'Industrial Machinery',
    name: 'Variable Speed Rotary Screw Compressor (75kW)',
    shortDescription: 'Energy-saving direct-drive rotary screw air compressor equipped with permanent magnet VFD motor.',
    fullDescription: 'Provides continuous clean compressed air for industrial plants. Integrated IE4 ultra-efficient permanent magnet motor and twin-screw air end deliver 13.8 m³/min output with 35% lower energy consumption during partial loads.',
    origin: 'India (Coimbatore)',
    destination: 'South Africa, Vietnam & UAE',
    moq: 'MOQ: 2 Units',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/industrial.jpg',
    badgeText: 'IE4 PERMANENT MAGNET\n35% ENERGY SAVINGS',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '13.8 m³/min Air', icon: Award },
      { label: 'Low Noise (68 dB)', icon: ShieldCheck },
      { label: 'Smart IoT Cloud', icon: Cpu },
    ],
    specs: {
      'Motor Power': '75 kW (100 HP) Permanent Magnet Synchronous',
      'Working Pressure': '7.5 - 10.0 bar adjustable',
      'Free Air Delivery': '3.2 to 13.8 m³/min modulated',
      'Packaging': 'Anti-vibration palletized plywood export crate',
      'Certifications': 'ISO 1217 Annex C, ASME pressure vessel certified, CE'
    }
  },
  {
    id: 'mach-6',
    categoryId: 'machinery',
    categoryName: 'Industrial Machinery',
    name: 'Electric Heavy-Duty Warehouse Forklift (3.5T)',
    shortDescription: 'AC dual-drive 3.5-ton electric forklift with 80V 460Ah lithium-ion fast-charging battery pack.',
    fullDescription: 'Built for emission-free high-density warehouse storage and container de-stuffing. Features 4.8-meter triplex full free lift mast, integrated side shifter, regenerative braking, and 2-hour opportunity fast charging.',
    origin: 'India / Japan',
    destination: 'Germany, UAE & Australia',
    moq: 'MOQ: 2 Units',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/industrial.jpg',
    badgeText: '80V LITHIUM-ION\n3.5 TON CAPACITY',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '3,500 kg Capacity', icon: Scale },
      { label: '2-Hr Fast Charge', icon: Zap },
      { label: '4.8M Triplex Mast', icon: Layers },
    ],
    specs: {
      'Rated Capacity': '3,500 kg at 500 mm load center',
      'Max Lift Height': '4,800 mm triplex container mast',
      'Battery System': '80V / 460Ah LiFePO4 with 5-year warranty',
      'Packaging': 'Fully assembled containerized with wheel chocks',
      'Certifications': 'ANSI / ITSDF B56.1, CE Machinery Directive'
    }
  },
  {
    id: 'mach-7',
    categoryId: 'machinery',
    categoryName: 'Industrial Machinery',
    name: 'Servo Plastic Injection Molding Machine (250T)',
    shortDescription: 'Energy-efficient 2500 kN toggle clamping injection molding machine with KEBA computer control.',
    fullDescription: 'Optimized for precision automotive, medical, and consumer plastics. Uses an Italian Phase servo pump system to reduce hydraulic energy usage by 60%. Equipped with bimetallic screw barrel for abrasive glass-filled resins.',
    origin: 'India / Austria',
    destination: 'USA, Turkey & Indonesia',
    moq: 'MOQ: 1 Unit',
    image: injectionMoldingImg,
    fallbackImage: '/product-images/Servo Plastic Injection Molding Machine (250T).png',
    badgeText: '250 TON TOGGLE\nSERVO HYDRAULIC',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '60% Power Savings', icon: Zap },
      { label: 'Bimetallic Barrel', icon: ShieldCheck },
      { label: 'KEBA Controller', icon: Cpu },
    ],
    specs: {
      'Clamping Force': '2,500 kN (250 Metric Tons)',
      'Shot Weight (PS)': '620 grams (21.8 oz)',
      'Tie Bar Distance': '580 x 580 mm',
      'Packaging': 'Split palletized sea shipment with rust inhibitor film',
      'Certifications': 'CE Standard EN 201, ISO 9001:2015'
    }
  },
  {
    id: 'mach-8',
    categoryId: 'machinery',
    categoryName: 'Industrial Machinery',
    name: 'Stainless Multi-Deck Vibratory Sifter (1200mm)',
    shortDescription: 'Triple-deck sanitary vibro-energy separator for precision powder screening and particle classification.',
    fullDescription: 'Constructed from food-grade AISI 304/316 stainless steel with mirror polish. Driven by an adjustable eccentric weight vibration motor that imparts 3-dimensional multi-plane motion for rapid screening down to 25 microns.',
    origin: 'India (Vadodara)',
    destination: 'Canada, Egypt & Malaysia',
    moq: 'MOQ: 2 Units',
    image: vibratorySifterImg,
    fallbackImage: '/product-images/Stainless Multi-Deck Vibratory Sifter (1200mm).png',
    badgeText: 'TRIPLE DECK SS316\n25 MICRON SCREEN',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '3-Plane Motion', icon: Settings },
      { label: 'Quick Clamp Rings', icon: Clock },
      { label: 'Food Grade Mirror', icon: ShieldCheck },
    ],
    specs: {
      'Diameter': '1,200 mm (48 inches) screening screen area',
      'Decks': '1 to 3 decks (yielding up to 4 separated fractions)',
      'Motor': '1.5 kW / 1,440 RPM heavy industrial vibration motor',
      'Packaging': 'Fumigated export wooden case with dust protection',
      'Certifications': 'FDA Compliant Gaskets, CE, ATEX Zone 22 Dust'
    }
  },
  {
    id: 'mach-9',
    categoryId: 'machinery',
    categoryName: 'Industrial Machinery',
    name: 'Industrial Reverse Osmosis Water Plant (10,000 LPH)',
    shortDescription: 'Containerized skid-mounted 10 m³/hr industrial RO plant with Dow FilmTec desalination membranes.',
    fullDescription: 'Engineered for industrial boiler feed, pharmaceutical preparation, and packaged bottled water plants. Features multi-media sand filters, activated carbon towers, twin antiscalant dosing systems, and Grundfos high-pressure pumps.',
    origin: 'India (Chennai)',
    destination: 'Kenya, Oman & Bangladesh',
    moq: 'MOQ: 1 System',
    image: roPlantImg,
    fallbackImage: '/product-images/Industrial Reverse Osmosis Water Plant (10,000 LPH).png',
    badgeText: '10,000 LPH OUTPUT\n99.5% SALT REJECTION',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '10 m³/hr Pure Water', icon: Droplets },
      { label: '99.5% Desalination', icon: ShieldCheck },
      { label: 'Automated PLC CIP', icon: Cpu },
    ],
    specs: {
      'Permeate Flow Rate': '10,000 Liters per hour (240 m³/day)',
      'Membranes': 'Dow / DuPont FilmTec BW30-400 (8 pieces)',
      'High Pressure Pump': 'Grundfos CRN stainless multi-stage pump',
      'Packaging': 'Containerized turnkey 20ft ISO high-cube container',
      'Certifications': 'ASME Pressure Vessel Code, NSF 61 Components'
    }
  },
  {
    id: 'mach-10',
    categoryId: 'machinery',
    categoryName: 'Industrial Machinery',
    name: '6-Axis Industrial Robotic Welding Arm (2.0m)',
    shortDescription: 'Precision 6-degree-of-freedom robotic welding cell with digital synergic MIG/TIG welding source.',
    fullDescription: 'Equipped with laser seam-tracking sensors and 2000mm radial reach. Features collision detection, intuitive teach pendant programming, and digital bus communication with Fronius/Lincoln welding power sources for spatter-free joints.',
    origin: 'India / Japan',
    destination: 'USA, Germany & Mexico',
    moq: 'MOQ: 1 Workstation',
    image: weldingArmImg,
    fallbackImage: '/product-images/6-Axis Industrial Robotic Welding Arm (2.0m).png',
    badgeText: '6-AXIS ARTICULATED\nLASER SEAM TRACK',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '± 0.05mm Repeat', icon: Settings },
      { label: '2.0m Working Radius', icon: Award },
      { label: 'Synergic MIG/TIG', icon: Flame },
    ],
    specs: {
      'Payload & Reach': '10 kg wrist payload / 2,010 mm maximum reach',
      'Repeatability': '± 0.05 mm path precision',
      'Welding Source': '500A Pulse MIG with water-cooled robotic torch',
      'Packaging': 'Industrial anti-static sealed wooden crating',
      'Certifications': 'ISO 10218-1 Robot Safety Standard, CE'
    }
  },
  {
    id: 'mach-11',
    categoryId: 'machinery',
    categoryName: 'Industrial Machinery',
    name: 'Automatic Granule VFFS Packaging Line',
    shortDescription: 'Multi-head weigher vertical form-fill-seal (VFFS) high-speed automated packaging machine for food & agro commodities.',
    fullDescription: 'Equipped with 14-head combination multi-head weigher and dual servo film-pulling system. Handles pillow, gusset, and flat-bottom bags at up to 80 packs/minute with ±0.5g precision. Features PLC touch screen and gas-flushing unit for modified atmosphere packing.',
    origin: 'India (Ahmedabad, Gujarat)',
    destination: 'Kenya, Nigeria, Saudi Arabia & UK',
    moq: 'MOQ: 1 Complete Line',
    image: granulePackagingLineImg,
    fallbackImage: '/product-images/Automatic Granule VFFS Packaging Line.png',
    badgeText: '80 PACKS / MIN\n14-HEAD WEIGHER',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '80 Bags / Min', icon: Zap },
      { label: '± 0.5g Precision', icon: Scale },
      { label: 'Touchscreen PLC', icon: Cpu },
    ],
    specs: {
      'Packaging Speed': '40 - 80 bags per minute variable',
      'Weighing System': '14-Head Combination Electronic Weigher',
      'Bag Format': 'Pillow, Gusseted, Quad-Seal Stand-Up Pouches',
      'Film Compatibility': 'BOPP, Poly, Metallized Foil Laminates',
      'Power Specs': '380V, 50/60Hz, 3-Phase, 5.5 kW'
    }
  },
  {
    id: 'mach-12',
    categoryId: 'machinery',
    categoryName: 'Industrial Machinery',
    name: 'Hydraulic CNC Sheet Press Brake (200T / 4m)',
    shortDescription: 'Electro-hydraulic synchro 4+1 axis CNC press brake with Delem controller for precision heavy plate bending.',
    fullDescription: 'Fabricated from stress-relieved heavy steel monolith frame. Features high-speed Y1/Y2 dual linear optical encoders, mechanical crowning system, and quick-clamp tooling. Delivers repeatable bending angle tolerance within ±0.3° for structural fabrication.',
    origin: 'India (Rajkot, Gujarat)',
    destination: 'UAE, Canada & Australia',
    moq: 'MOQ: 1 Unit',
    image: cncPressBrakeImg,
    fallbackImage: '/product-images/Hydraulic CNC Sheet Press Brake (200T  4m).png',
    badgeText: '200T CAPACITY\nDELEM 4+1 AXIS',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '200T Bending Force', icon: Settings },
      { label: '4,000mm Bed Length', icon: Award },
      { label: 'Auto Crowning', icon: CheckCircle },
    ],
    specs: {
      'Bending Tonnage': '2,000 kN (200 Metric Tons)',
      'Table Length': '4,000 mm working length',
      'Column Distance': '3,100 mm clear pass between housings',
      'CNC Controller': 'Delem DA-53T Multi-Axis Graphic Interface',
      'Backgauge System': 'High-precision Ball Screw X + R Axes'
    }
  }
];

/* =========================================================================
   CATEGORY 7: CONSUMER ELECTRONICS (12 Products)
   ========================================================================= */
export const electronicsProducts = [
  {
    id: 'elec-1',
    categoryId: 'electronics',
    categoryName: 'Consumer Electronics',
    name: '65" 4K Quantum-Dot OLED Smart TV',
    shortDescription: 'Ultra-slim bezel-less 4K 120Hz QD-OLED smart display with Dolby Vision IQ and Dolby Atmos audio.',
    fullDescription: 'Delivers infinite contrast ratios and 99% DCI-P3 cinematic color spectrum. Powered by an AI neural processor with 4K upscaling, 4x HDMI 2.1 ports with VRR/ALLM for next-gen gaming, and integrated Google TV operating system.',
    origin: 'India / South Korea',
    destination: 'USA, UAE & UK',
    moq: 'MOQ: 50 Units',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/electronics.jpg',
    badgeText: '4K QD-OLED 120HZ\nDOLBY VISION IQ',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '120Hz Native VRR', icon: Zap },
      { label: 'Infinite Contrast', icon: Sparkles },
      { label: 'HDMI 2.1 eARC', icon: Award },
    ],
    specs: {
      'Panel Technology': '65-inch Quantum Dot OLED 3840 x 2160 pixels',
      'Peak Brightness': '1,500 nits peak HDR luminance',
      'Audio': '60W 4.2.2 channel integrated acoustic surface sound',
      'Packaging': 'Reinforced drop-resistant retail carton with foam bumpers',
      'Certifications': 'FCC, CE, Energy Star 8.0, RoHS compliant'
    }
  },
  {
    id: 'elec-2',
    categoryId: 'electronics',
    categoryName: 'Consumer Electronics',
    name: 'Active Noise Cancelling Wireless Headphones',
    shortDescription: 'Over-ear Bluetooth 5.3 hybrid ANC studio headphones with 40mm beryllium drivers and 65hr battery.',
    fullDescription: 'Custom-tuned acoustic chambers with dual-feedforward and feedback microphones delivering -43dB active noise cancellation. Features LDAC high-resolution audio streaming, plush protein memory foam earcups, and multipoint pairing.',
    origin: 'India / China',
    destination: 'Germany, Australia & USA',
    moq: 'MOQ: 200 Units',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/electronics.jpg',
    badgeText: '-43DB HYBRID ANC\n65HR PLAYTIME',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '-43dB Active Noise', icon: ShieldCheck },
      { label: 'Hi-Res Wireless LDAC', icon: Award },
      { label: '65-Hour Battery', icon: Clock },
    ],
    specs: {
      'Drivers': '40 mm Beryllium-coated dynamic transducers',
      'Frequency Response': '10 Hz - 40,000 Hz Hi-Res certified',
      'Battery Capacity': '800 mAh with 10-min quick charge (5 hrs playback)',
      'Packaging': 'Hard EVA zippered travel case inside retail packaging',
      'Certifications': 'Hi-Res Audio Wireless, Bluetooth SIG, CE, FCC'
    }
  },
  {
    id: 'elec-3',
    categoryId: 'electronics',
    categoryName: 'Consumer Electronics',
    name: 'Smart AMOLED Fitness & Health Watch',
    shortDescription: 'IP68 waterproof smartwatch with 1.43" AMOLED display, ECG monitor, SpO2, and dual-band GPS.',
    fullDescription: 'Features a lightweight aerospace aluminum alloy case with sapphire-coated crystal. Equipped with photoplethysmography sensors tracking continuous heart rate, blood oxygen, sleep phases, and 120+ sport modes with 14-day battery.',
    origin: 'India / Taiwan',
    destination: 'UK, France & Singapore',
    moq: 'MOQ: 300 Units',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/electronics.jpg',
    badgeText: 'AMOLED DISPLAY\nECG & DUAL GPS',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '14-Day Battery', icon: Clock },
      { label: '5 ATM Waterproof', icon: Droplets },
      { label: 'ECG Heart Monitor', icon: ShieldCheck },
    ],
    specs: {
      'Display': '1.43" AMOLED 466 x 466 pixels / 1,000 nits brightness',
      'Water Resistance': '5 ATM / 50 meters water immersion',
      'Sensors': 'Optical heart rate, SpO2, skin temp, 6-axis gyro, GPS',
      'Packaging': 'Rigid magnetic gift box with magnetic charging puck',
      'Certifications': 'CE, FCC, RoHS, FDA Class II wellness device'
    }
  },
  {
    id: 'elec-4',
    categoryId: 'electronics',
    categoryName: 'Consumer Electronics',
    name: '140W GaN-Fast Multi-Port Charger',
    shortDescription: 'Compact Gallium Nitride 3x USB-C + 1x USB-A PD 3.1 wall charger capable of fast-charging laptops.',
    fullDescription: 'Built with next-generation GaNFast power ICs to deliver 140W output at 45% smaller form factor. Full compatibility with USB Power Delivery 3.1, PPS, and Quick Charge protocols, safely powering 2 laptops and 2 phones at once.',
    origin: 'India / Vietnam',
    destination: 'USA, Japan & Germany',
    moq: 'MOQ: 500 Units',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/electronics.jpg',
    badgeText: '140W GAN III\nPD 3.1 LAPTOP FAST',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '140W PD 3.1 Output', icon: Zap },
      { label: 'Cool GaN Tech', icon: ShieldCheck },
      { label: 'Universal 4-Ports', icon: Award },
    ],
    specs: {
      'Total Output': '140W Max (Single port USB-C1 up to 140W 28V/5A)',
      'Dimensions': '75 x 75 x 32 mm / Weight: 260g',
      'Protection': 'Over-current, over-voltage, thermal sensing shutdown',
      'Packaging': 'Retail hanger box with braided 240W 1.5m USB-C cable',
      'Certifications': 'UL 62368-1, CB, CE, FCC, PSE (Japan)'
    }
  },
  {
    id: 'elec-5',
    categoryId: 'electronics',
    categoryName: 'Consumer Electronics',
    name: 'Ultra-Slim 14" Business Executive Laptop',
    shortDescription: 'Intel Core Ultra 7 lightweight 1.1kg carbon-aluminum laptop with 32GB RAM and 2.8K OLED screen.',
    fullDescription: 'Tailored for traveling enterprise professionals. Houses the Intel Core Ultra 7 processor with integrated NPU for offline AI workloads, 32GB LPDDR5X memory, 1TB NVMe PCIe 4.0 SSD, fingerprint security, and 18-hour battery.',
    origin: 'India / Taiwan',
    destination: 'USA, Canada & UAE',
    moq: 'MOQ: 30 Units',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/electronics.jpg',
    badgeText: 'CORE ULTRA 7\n1.1KG FEATHERWEIGHT',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Intel AI NPU Inside', icon: Cpu },
      { label: '2.8K 120Hz OLED', icon: Sparkles },
      { label: '18-Hr Long Life', icon: Clock },
    ],
    specs: {
      'Processor': 'Intel Core Ultra 7 155H (16 Cores, 22 Threads up to 4.8 GHz)',
      'Display': '14.0" 2.8K (2880 x 1800) OLED 120Hz 100% DCI-P3',
      'Memory & Storage': '32GB LPDDR5X 7467MHz / 1TB PCIe 4.0 SSD',
      'Packaging': 'FSC luxury retail gift box with 65W GaN adapter',
      'Certifications': 'Intel Evo Certified, Energy Star, EPEAT Gold, CE'
    }
  },
  {
    id: 'elec-6',
    categoryId: 'electronics',
    categoryName: 'Consumer Electronics',
    name: 'True Wireless IPX7 Sports Earbuds',
    shortDescription: 'Ergonomic secure-fit sports wireless earbuds with dynamic bass boost and 40-hour wireless case.',
    fullDescription: 'Engineered for high-intensity athletics. Soft silicone ear hooks provide zero fall-out security while IPX7 internal nano-coating defends against sweat and torrential rain. Equipped with Environmental Noise Cancellation (ENC) mics.',
    origin: 'India / China',
    destination: 'Australia, Spain & USA',
    moq: 'MOQ: 400 Units',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/electronics.jpg',
    badgeText: 'IPX7 SWEATPROOF\n40HR SPORT HOOKS',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'IPX7 Waterproof', icon: Droplets },
      { label: '40hr Battery Case', icon: Clock },
      { label: 'ENC Clear Calls', icon: ShieldCheck },
    ],
    specs: {
      'Acoustic Driver': '12 mm titanium diaphragm high-excursion driver',
      'Connectivity': 'Bluetooth 5.3 Low-Latency (45ms gaming mode)',
      'Case Charging': 'USB-C + Qi Wireless charging pad compatible',
      'Packaging': 'Retail box with 3 pairs silicone ear tips & USB-C cable',
      'Certifications': 'IPX7 Lab Certified, CE, FCC, RoHS, BQB'
    }
  },
  {
    id: 'elec-7',
    categoryId: 'electronics',
    categoryName: 'Consumer Electronics',
    name: '4K Ultra-HD AI Enterprise Webcam',
    shortDescription: 'Professional 4K Sony Starvis sensor conference webcam with dual AI auto-framing microphones.',
    fullDescription: 'Equipped with a large 1/2.8" Sony 4K sensor, producing razor-sharp video even in dim boardroom lighting. Hardware-level AI automatically tracks speakers as they move around the room, with beamforming noise-cancellation microphones.',
    origin: 'India / South Korea',
    destination: 'UK, Germany & USA',
    moq: 'MOQ: 100 Units',
    image: webcamImg,
    fallbackImage: '/product-images/4K Ultra-HD AI Enterprise Webcam.png',
    badgeText: '4K SONY STARVIS\nAI AUTO-FRAMING',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Sony 4K Sensor', icon: Award },
      { label: 'AI Auto-Focus & Track', icon: Sparkles },
      { label: 'Dual Mic Array', icon: ShieldCheck },
    ],
    specs: {
      'Resolution': '4K UHD at 30 fps / 1080p at 60 fps',
      'Field of View': 'Adjustable 90° / 78° / 65° diagonal FOV',
      'Mounting': 'Integrated monitor clamp + 1/4" tripod screw thread',
      'Packaging': 'Gift packaging with magnetic privacy shutter',
      'Certifications': 'Zoom Certified, Microsoft Teams compliant, CE, FCC'
    }
  },
  {
    id: 'elec-8',
    categoryId: 'electronics',
    categoryName: 'Consumer Electronics',
    name: 'Solar-Powered 4G Outdoor Security Camera',
    shortDescription: '100% wire-free PTZ security camera with 6W monocrystalline solar panel and PIR night vision.',
    fullDescription: 'Designed for remote farms, construction yards, and rural residences. Operates autonomously via integrated 4G-LTE SIM card and rechargeable 15,000mAh battery fed by solar energy. Features 360° pan, 90° tilt, and siren alarms.',
    origin: 'India / China',
    destination: 'South Africa, USA & Brazil',
    moq: 'MOQ: 80 Units',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/electronics.jpg',
    badgeText: '100% WIRE-FREE\nSOLAR + 4G LTE',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Solar Continuous', icon: Sun },
      { label: '4G LTE Cellular', icon: Globe2 },
      { label: 'Full Color Night Vision', icon: Sparkles },
    ],
    specs: {
      'Video Quality': '2K 4MP (2560 x 1440) QHD with color night spotlights',
      'Battery & Solar': '15,000 mAh Li-ion battery + 6W adjustable solar panel',
      'PTZ Rotation': 'Horizontal 355° / Vertical 95° panoramic coverage',
      'Packaging': 'Weatherproof master carton with mounting hardware',
      'Certifications': 'IP66 Weatherproof, FCC ID, CE, PTCRB 4G'
    }
  },
  {
    id: 'elec-9',
    categoryId: 'electronics',
    categoryName: 'Consumer Electronics',
    name: '30,000mAh 65W PD Heavy Power Bank',
    shortDescription: 'Airline-approved high-density power station capable of charging laptops, tablets, and phones simultaneously.',
    fullDescription: 'Equipped with premium automotive-grade 21700 lithium battery cells. Delivers full 65W Power Delivery through USB-C to charge MacBooks and ultrabooks, with a precision digital smart LED screen showing remaining percentage and wattage.',
    origin: 'India / China',
    destination: 'UAE, Canada & UK',
    moq: 'MOQ: 300 Units',
    image: 'https://images.unsplash.com/photo-1609592424368-80e55099f668?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/electronics.jpg',
    badgeText: '30,000MAH / 65W\nLAPTOP CHARGER',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '65W Fast Charge', icon: Zap },
      { label: 'Digital Watt Meter', icon: Award },
      { label: '21700 Safe Cells', icon: ShieldCheck },
    ],
    specs: {
      'Battery Capacity': '30,000 mAh / 111 Wh (Automotive Grade 21700)',
      'Outputs': '2x USB-C (Max 65W) + 2x USB-A (Max 22.5W QC3.0)',
      'Recharge Time': 'Under 2.5 hours via 65W USB-C input',
      'Packaging': 'Retail packaging with 100W E-marker cable included',
      'Certifications': 'UN38.3 Transport Tested, CE, FCC, RoHS, MSDS'
    }
  },
  {
    id: 'elec-10',
    categoryId: 'electronics',
    categoryName: 'Consumer Electronics',
    name: 'Smart HEPA-14 Air Purifier (CADR 500)',
    shortDescription: 'Room air purifier capturing 99.995% airborne particulates down to 0.1 microns with smart WiFi app.',
    fullDescription: 'Equipped with true medical-grade H14 HEPA filtration and a 1.2kg honeycomb activated carbon layer that neutralizes smoke, pet odors, VOCs, and pollen. Cleans rooms up to 650 sq ft every 12 minutes in whisper-quiet 24dB sleep mode.',
    origin: 'India / South Korea',
    destination: 'USA, Japan & Germany',
    moq: 'MOQ: 100 Units',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/electronics.jpg',
    badgeText: 'H14 MEDICAL HEPA\nCADR 500 M³/H',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '99.995% Filtration', icon: ShieldCheck },
      { label: 'Real-Time PM2.5 Meter', icon: Award },
      { label: 'Whisper 24dB Sleep', icon: Sparkles },
    ],
    specs: {
      'Clean Air Delivery Rate (CADR)': '500 m³/h (300 CFM)',
      'Filter Stages': 'Pre-filter + H14 True HEPA + Honeycomb Carbon + UV-C',
      'Smart Features': 'Tuya / SmartLife App, Alexa & Google Assistant control',
      'Packaging': 'Heavy shock-proof corrugated box with carry handles',
      'Certifications': 'AHAM Verified, CARB Certified (Zero Ozone), CE, ETL'
    }
  },
  {
    id: 'elec-11',
    categoryId: 'electronics',
    categoryName: 'Consumer Electronics',
    name: 'Fast GaN 100W Multi-Port USB-C Desktop Charger',
    shortDescription: 'Ultra-compact Gallium Nitride (GaN III) fast charger with 3x USB-C PD 3.0 and 1x USB-A QC 4.0 ports.',
    fullDescription: 'Powered by next-generation GaN III semiconductor chips for 40% cooler operation and 50% smaller form factor. Delivers 100W maximum single-port output to fast-charge laptops, tablets, and smartphones simultaneously with universal 100-240V AC input.',
    origin: 'India / Taiwan',
    destination: 'USA, Germany, UK & Singapore',
    moq: 'MOQ: 500 Units',
    image: ganChargerImg,
    fallbackImage: '/product-images/Fast GaN 100W Multi-Port USB-C Desktop Charger.png',
    badgeText: 'GaN III TECHNOLOGY\n100W PD DUAL-PORT',
    badgeBg: '#0284C7',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '100W Max PD 3.0', icon: Zap },
      { label: 'GaN III Cool Tech', icon: Cpu },
      { label: '4-Port Simultaneous', icon: Layers },
    ],
    specs: {
      'Total Output Power': '100W Maximum Shared Output',
      'Ports': '3x USB-C (PD 3.0 / PPS) + 1x USB-A (QC 4.0+)',
      'Input Voltage': 'AC 100-240V, 50/60Hz Global Standard',
      'Protections': 'Over-voltage, Over-current, Short-circuit & Thermal',
      'Certifications': 'CE, FCC, RoHS, UL Listed, UKCA'
    }
  },
  {
    id: 'elec-12',
    categoryId: 'electronics',
    categoryName: 'Consumer Electronics',
    name: 'Outdoor Smart Solar CCTV Security Camera (4G / WiFi)',
    shortDescription: 'Solar-powered 2K wire-free PTZ security camera with dual-band 4G LTE SIM, PIR motion detection and night vision.',
    fullDescription: 'Equipped with integrated 12W monocrystalline solar panel and 18,000mAh rechargeable lithium battery pack for 365-day uninterrupted surveillance. Features 360° pan, 120° tilt, IP66 weatherproof alloy casing, and AI human detection.',
    origin: 'India / South Korea',
    destination: 'Australia, South Africa & Brazil',
    moq: 'MOQ: 200 Sets',
    image: solarCctvCameraImg,
    fallbackImage: '/product-images/Outdoor Smart Solar CCTV Security Camera (4G  WiFi).png',
    badgeText: 'SOLAR POWERED 2K\n4G LTE WIRE-FREE',
    badgeBg: '#0284C7',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '2K QHD Resolution', icon: Award },
      { label: '18,000mAh Solar', icon: Sun },
      { label: 'IP66 Weatherproof', icon: ShieldCheck },
    ],
    specs: {
      'Video Resolution': '2K Super HD (2560 x 1440 at 25 fps)',
      'Power Source': '12W Solar Panel + 18,000 mAh Lithium-ion battery',
      'Connectivity': '4G LTE SIM slot + 2.4 GHz WiFi Dual Mode',
      'Pan & Tilt Angle': '355° Horizontal Pan / 120° Vertical Tilt',
      'Weather Resistance': 'IP66 Industrial Water & Dust Rating'
    }
  }
];

/* =========================================================================
   CATEGORY 8: FMCG & RETAIL GOODS (12 Products)
   ========================================================================= */
export const fmcgProducts = [
  {
    id: 'fmcg-1',
    categoryId: 'fmcg',
    categoryName: 'FMCG & Retail Goods',
    name: 'Cold-Processed Ayurvedic Neem & Aloe Soaps',
    shortDescription: 'All-natural artisan cold-processed bathing bars enriched with organic neem oil and fresh aloe vera.',
    fullDescription: 'Crafted in small batches with coconut oil, unrefined shea butter, and pure organic neem extract. Cured for 45 days without synthetic sulfates (SLS), parabens, or artificial hardeners. Gentle on sensitive and eczema-prone skin.',
    origin: 'India (Kerala)',
    destination: 'USA, UK & Canada',
    moq: 'MOQ: 1,000 Bars',
    image: 'https://images.unsplash.com/photo-1607006314185-3006d649a3cf?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/consumer.jpg',
    badgeText: 'COLD PROCESSED\n100% VEGAN',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Organic Neem Oil', icon: Leaf },
      { label: 'Zero SLS / Parabens', icon: ShieldCheck },
      { label: '45-Day Slow Cured', icon: Clock },
    ],
    specs: {
      'Bar Weight': '125 grams (4.4 oz) rectangular engraved bar',
      'TFM (Total Fatty Matter)': 'Minimum 76% Grade-1 Soap rating',
      'Fragrance': '100% Pure therapeutic-grade tea tree & lavender oil',
      'Packaging': 'Plastic-free recycled embossed craft paper box',
      'Certifications': 'Cruelty-Free Leaping Bunny, GMP Cosmetic, ISO 22716'
    }
  },
  {
    id: 'fmcg-2',
    categoryId: 'fmcg',
    categoryName: 'FMCG & Retail Goods',
    name: 'Extra Virgin Olive Oil (500ml Bottled)',
    shortDescription: 'First cold-pressed extra virgin Mediterranean olive oil with < 0.2% acidity and polyphenol richness.',
    fullDescription: 'Harvested from century-old olive groves and extracted mechanically within 4 hours at under 24°C. Packaged in dark UV-resistant Marasca green glass bottles with non-drip pour spouts to preserve antioxidant vitamin E.',
    origin: 'Spain / Greece',
    destination: 'India, UAE & Singapore',
    moq: 'MOQ: 2,400 Bottles (200 Cases)',
    image: oliveOilImg,
    fallbackImage: '/product-images/Extra Virgin Olive Oil (500ml Bottled).png',
    badgeText: 'ACIDITY < 0.2%\nFIRST COLD PRESS',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Ultra Low 0.2% FFA', icon: Award },
      { label: 'High Polyphenols', icon: ShieldCheck },
      { label: 'UV Shield Glass', icon: Sparkles },
    ],
    specs: {
      'Acidity (Oleic Acid)': '< 0.25% (Super-premium criteria)',
      'Peroxide Value': '< 6.5 meq O2/kg',
      'Packaging': '500ml / 750ml dark antique-green glass bottles with pourer',
      'Shelf Life': '24 months in cool dark storage',
      'Certifications': 'International Olive Council (IOC), PDO certified'
    }
  },
  {
    id: 'fmcg-3',
    categoryId: 'fmcg',
    categoryName: 'FMCG & Retail Goods',
    name: 'Biodegradable Bamboo Charcoal Toothbrushes',
    shortDescription: 'Eco-friendly oral care toothbrushes made with MOSO bamboo handles and charcoal-infused bristles.',
    fullDescription: '100% compostable ergonomic handle crafted from fast-growing, pesticide-free MOSO bamboo. Features BPA-free soft tapered bristles infused with activated binchotan charcoal for natural whitening and plaque removal.',
    origin: 'India / Vietnam',
    destination: 'Germany, USA & Netherlands',
    moq: 'MOQ: 5,000 Pieces',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&h=533&q=80',
    fallbackImage: '/consumer.jpg',
    badgeText: '100% MOSO BAMBOO\nACTIVATED CHARCOAL',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Compostable Handle', icon: Leaf },
      { label: 'BPA-Free Bristles', icon: ShieldCheck },
      { label: 'Natural Whitening', icon: Sparkles },
    ],
    specs: {
      'Handle Material': '100% Natural MOSO bamboo heat-treated and smooth polished',
      'Bristles': 'Tapered nylon-4 infused with binchotan charcoal',
      'Lifespan': '3 months standard dental recommendation',
      'Packaging': '100% recyclable Kraft paper boxes with soy ink',
      'Certifications': 'FSC 100% Bamboo, FDA Registered, Vegan Certified'
    }
  },
  {
    id: 'fmcg-4',
    categoryId: 'fmcg',
    categoryName: 'FMCG & Retail Goods',
    name: 'Organic Coconut Milk (400ml Canned)',
    shortDescription: 'Rich unsweetened organic coconut cooking milk with 18% fat content, zero emulsifiers, and BPA-free can.',
    fullDescription: 'Pressed from the white meat of organic certified coconuts. Free from synthetic guar gum, polysorbates, and chemical preservatives. Perfect for Thai curries, plant-based dairy substitutes, smoothies, and gourmet bakery recipes.',
    origin: 'India / Sri Lanka',
    destination: 'UK, Australia & Germany',
    moq: 'MOQ: 3,000 Cans (125 Trays)',
    image: cannedCoconutMilkImg,
    fallbackImage: '/product-images/Organic Coconut Milk (400ml Canned).png',
    badgeText: 'FAT 18% RICH\nBPA-FREE CANS',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '18% Natural Fat', icon: Award },
      { label: 'Zero Gum Additives', icon: ShieldCheck },
      { label: 'BPA-NI Lining', icon: CheckCircle },
    ],
    specs: {
      'Fat Content': '17% - 19% natural coconut cream fat',
      'Ingredients': 'Organic Coconut Extract (70%), Purified Water (30%)',
      'Can Size': '400 ml (13.5 fl oz) easy-open lid can with BPA-NI lining',
      'Shelf Life': '24 months ambient room temperature',
      'Certifications': 'USDA Organic, EU Organic, BRCGS, Kosher'
    }
  },
  {
    id: 'fmcg-5',
    categoryId: 'fmcg',
    categoryName: 'FMCG & Retail Goods',
    name: 'Natural Volcanic Mineral Spring Water',
    shortDescription: 'High-alkaline pH 8.2 natural mineral spring water bottled at the source in eco-friendly rPET bottles.',
    fullDescription: 'Filtered naturally through thousands of feet of volcanic basalt rock over decades. Enriched with bio-available silica, calcium, and magnesium electrolytes with a pristine low nitrate rating for silky crisp hydration.',
    origin: 'India (Himalayan Aquifer)',
    destination: 'UAE, Kuwait & Qatar',
    moq: 'MOQ: 5,000 Cases (12x1L)',
    image: springWaterImg,
    fallbackImage: '/product-images/Natural Volcanic Mineral Spring Water.png',
    badgeText: 'NATURAL PH 8.2\nSILICA RICH MINERALS',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Natural Alkaline pH 8.2', icon: Droplets },
      { label: '42 mg/L Silica', icon: Award },
      { label: '100% Recycled rPET', icon: Leaf },
    ],
    specs: {
      'TDS (Total Dissolved Solids)': '210 mg/L balanced electrolytes',
      'pH Level': 'Naturally alkaline pH 8.2 at source',
      'Bottle Volume': '500ml / 1000ml BPA-free 100% rPET bottles',
      'Packaging': 'Shrink-wrapped trays of 12 or 24 bottles on Euro pallets',
      'Certifications': 'US FDA Bottled Water Standards, ISO 22000, Halal'
    }
  },
  {
    id: 'fmcg-6',
    categoryId: 'fmcg',
    categoryName: 'FMCG & Retail Goods',
    name: 'Flushable Biodegradable Plant-Fiber Wet Wipes',
    shortDescription: '99% pure water hypoallergenic wet wipes crafted from 100% compostable wood-pulp plant fibers.',
    fullDescription: 'Formulated with organic chamomile flower extract and pure filtered water. Free from alcohol, parabens, chlorine, and synthetic plastic fibers. Independently certified flushable without clogging household municipal sewage lines.',
    origin: 'India / Turkey',
    destination: 'USA, UK & France',
    moq: 'MOQ: 5,000 Packs (80 wipes/pack)',
    image: wetWipesImg,
    fallbackImage: '/product-images/Flushable Biodegradable Plant-Fiber Wet Wipes.png',
    badgeText: 'PLASTIC FREE\nFLUSHABLE IWSFG',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '99% Pure Water', icon: Droplets },
      { label: '100% Plant Fiber', icon: Leaf },
      { label: 'Dermatologist Tested', icon: ShieldCheck },
    ],
    specs: {
      'Sheet Material': '60 GSM 100% Lenzing Lyocell wood fibers',
      'Wipe Count': '80 sheets with resealable moisture-lock flip lid',
      'Safety': 'Hypoallergenic, pediatric tested, pH balanced 5.5',
      'Packaging': 'Recyclable mono-material pouches in master shipping case',
      'Certifications': 'IWSFG Flushability Standard, OEKO-TEX Standard 100'
    }
  },
  {
    id: 'fmcg-7',
    categoryId: 'fmcg',
    categoryName: 'FMCG & Retail Goods',
    name: 'Artisan Whole Fruit Low-Sugar Jams',
    shortDescription: 'Traditional open-copper kettle cooked fruit preserves prepared with 75% whole fruit and pure cane sugar.',
    fullDescription: 'Handcrafted in Provence-style small copper kettles to preserve natural fruit chunks and vivid jewel colors. Free of high-fructose corn syrup, artificial coloring, or chemical pectin. Available in Fig, Wild Strawberry, and Apricot.',
    origin: 'India (Himachal Pradesh) / France',
    destination: 'Japan, Singapore & Canada',
    moq: 'MOQ: 1,500 Jars',
    image: fruitJamsImg,
    fallbackImage: '/product-images/Artisan Whole Fruit Low-Sugar Jams.png',
    badgeText: '75% WHOLE FRUIT\nCOPPER KETTLE',
    badgeBg: '#B45309',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: '75% Real Fruit', icon: Award },
      { label: 'Zero HFCS', icon: ShieldCheck },
      { label: 'Traditional Copper Pan', icon: Sparkles },
    ],
    specs: {
      'Fruit Content': '75g fruit per 100g finished product',
      'Brix': '52° low sugar profile',
      'Jar Volume': '340g (12 oz) faceted hexagonal glass jar with safety button',
      'Packaging': '12 jars per carton with corrugated dividers',
      'Certifications': 'BRCGS Food Global Standard, Non-GMO Project'
    }
  },
  {
    id: 'fmcg-8',
    categoryId: 'fmcg',
    categoryName: 'FMCG & Retail Goods',
    name: 'Moisturizing Antibacterial Hand Wash (5L Bulk Refill)',
    shortDescription: 'Hospital-grade pH-balanced liquid hand soap with aloe vera and vitamin E for commercial and retail refills.',
    fullDescription: 'Formulated with benzalkonium chloride and skin-loving emollients. Kills 99.99% of germs and bacteria within 15 seconds of washing while leaving hands soft and hydrated. Packaged in recyclable HDPE 5-liter jerrycans.',
    origin: 'India (Mumbai)',
    destination: 'UAE, South Africa & UK',
    moq: 'MOQ: 400 Cans (100 Cases)',
    image: handWashImg,
    fallbackImage: '/product-images/Moisturizing Antibacterial Hand Wash (5L Bulk Refill).png',
    badgeText: 'KILLS 99.99% GERMS\n5L BULK CANISTER',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '99.99% Kill Rate', icon: ShieldCheck },
      { label: 'Vitamin E & Aloe', icon: Droplets },
      { label: 'Bulk Refill Economy', icon: Scale },
    ],
    specs: {
      'Volume': '5.0 Liters (1.32 Gallons) ergonomic HDPE container',
      'Active Ingredient': '0.13% Benzalkonium Chloride antimicrobial',
      'Viscosity': '3,500 - 4,500 cPs thick pearlized lotion',
      'Packaging': '4 canisters per heavy-duty master shipping carton',
      'Certifications': 'EN 1499 Hygienic Handwash, EN 1276, FDA NDC registered'
    }
  },
  {
    id: 'fmcg-9',
    categoryId: 'fmcg',
    categoryName: 'FMCG & Retail Goods',
    name: 'Premium Roasted Dry Fruit Mix Pouches (500g)',
    shortDescription: 'Slow-roasted almonds, cashews, pistachios, and dried cranberries in nitrogen-flushed zip pouches.',
    fullDescription: 'Gently dry-roasted without excess oil and lightly dusted with unrefined pink Himalayan rock salt. Packed in multi-layer barrier foil pouches under nitrogen flushing to guarantee 12 months of fresh crunch and zero rancidity.',
    origin: 'India / USA',
    destination: 'Australia, UAE & UK',
    moq: 'MOQ: 2,000 Pouches',
    image: dryFruitMixImg,
    fallbackImage: '/product-images/Premium.png',
    imageFit: 'contain',
    badgeText: 'NITROGEN SEALED\nHIMALAYAN SALT',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Himalayan Pink Salt', icon: Sparkles },
      { label: 'Zero Added Oils', icon: ShieldCheck },
      { label: 'High Plant Protein', icon: Award },
    ],
    specs: {
      'Mix Ratio': 'Almonds (30%), Cashews (30%), Pistachios (20%), Cranberries (20%)',
      'Pouch Net Weight': '500 grams (17.6 oz) stand-up zip pouch',
      'Oxygen Level': '< 1.5% residual oxygen in sealed pouch',
      'Packaging': '20 pouches per retail shelf-ready display master box',
      'Certifications': 'FSSAI, ISO 22000, Halal Certified'
    }
  },
  {
    id: 'fmcg-10',
    categoryId: 'fmcg',
    categoryName: 'FMCG & Retail Goods',
    name: 'Plant-Based 3x Concentrated Laundry Detergent',
    shortDescription: 'Enzyme-powered eco laundry liquid detergent free from optical brighteners, phosphates, and synthetic dyes.',
    fullDescription: 'Triple-concentrated bio-enzymatic formula powered by protease and amylase enzymes that lift tough stains at low wash temperatures (30°C). Completely greywater and septic safe, packaged in 100% PCR recycled plastic bottles.',
    origin: 'India / Netherlands',
    destination: 'USA, Germany & Sweden',
    moq: 'MOQ: 1,500 Bottles (2 Liters)',
    image: laundryDetergentImg,
    fallbackImage: '/product-images/Plant-Based 3x.png',
    imageFit: 'contain',
    badgeText: '3X BIO ENZYMES\n100% RECYCLED PCR',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Effective at 30°C', icon: Sparkles },
      { label: 'Septic & Ocean Safe', icon: Leaf },
      { label: '66 Washes / 2L', icon: Award },
    ],
    specs: {
      'Concentration': '3X concentrated (30ml per standard 7kg wash load)',
      'Volume': '2.0 Liters (66 regular wash loads) with measuring dosing cap',
      'Biodegradability': '> 95% readily biodegradable in 28 days (OECD 301D)',
      'Packaging': '6 bottles per shipping box made of recycled paperboard',
      'Certifications': 'EU Ecolabel, USDA Certified Biobased Product (88%)'
    }
  },
  {
    id: 'fmcg-11',
    categoryId: 'fmcg',
    categoryName: 'FMCG & Retail Goods',
    name: 'Cold-Pressed Ayurvedic Sesame & Herbal Massage Oil',
    shortDescription: 'Traditionally extracted black sesame seed oil infused with 16 classical Ayurvedic botanicals for wellness and spa retail.',
    fullDescription: 'Extracted using traditional wooden expellers (Chekku) at temperatures below 40°C to preserve vital antioxidants and sesamol. Infused with bala, ashwagandha, and vetiver roots. Packed in UV-amber glass bottles with tamper-evident induction seals.',
    origin: 'India (Kerala & Tamil Nadu)',
    destination: 'USA, UK, UAE & Singapore',
    moq: 'MOQ: 1,200 Bottles (500ml)',
    image: sesameMassageOilImg,
    fallbackImage: '/product-images/Ayurvedic.png',
    imageFit: 'contain',
    badgeText: 'WOOD PRESSED\nAYUSH CERTIFIED',
    badgeBg: '#15803D',
    badgeTextColor: '#FFFFFF',
    badgePosition: 'top-left',
    benefits: [
      { label: 'Cold Wood Pressed', icon: Sparkles },
      { label: 'Zero Mineral Oil', icon: ShieldCheck },
      { label: 'Ayush Certified', icon: Award },
    ],
    specs: {
      'Extraction Method': 'Traditional cold wood expeller pressing (< 40°C)',
      'Volume': '500 ml (16.9 fl oz) UV-protected amber glass bottle',
      'Free Fatty Acids': '< 1.0% Oleic acid',
      'Packaging': '12 bottles per export corrugated master carton',
      'Certifications': 'AYUSH Premium Mark, GMP, ISO 22716, USDA Organic'
    }
  },
  {
    id: 'fmcg-12',
    categoryId: 'fmcg',
    categoryName: 'FMCG & Retail Goods',
    name: 'Natural Himalayan Pink Rock Salt Mill Grinders (200g)',
    shortDescription: 'Pure mineral-rich crystalline pink rock salt fitted with an adjustable ceramic rotary mill grinder for retail shelves.',
    fullDescription: 'Hand-mined from primordial rock salt deposits containing 84 natural trace minerals and electrolytes. Encased in clear food-grade glass jars fitted with multi-setting corrosion-proof ceramic grinders, shrink-band sealed for fresh retail display.',
    origin: 'India / Himalayas',
    destination: 'USA, Germany, UK & Australia',
    moq: 'MOQ: 3,000 Grinder Jars',
    image: himalayanSaltGrinderImg,
    fallbackImage: '/product-images/Himalayan Pink.png',
    imageFit: 'contain',
    badgeText: '84 TRACE MINERALS\nCERAMIC MILL TOP',
    badgeBg: '#082653',
    badgeTextColor: '#FAAE2B',
    badgePosition: 'top-left',
    benefits: [
      { label: '84 Trace Minerals', icon: Sparkles },
      { label: 'Ceramic Grinder', icon: Settings },
      { label: 'Food-Grade Glass', icon: ShieldCheck },
    ],
    specs: {
      'Net Weight': '200g (7.05 oz) net weight pink salt crystals',
      'Grinder Mechanism': 'Multi-stage adjustable coarse-to-fine ceramic core',
      'Container Material': 'Heavy lead-free clear flint glass with tamper seal',
      'Packaging': '24 grinder jars per retail display inner carton',
      'Certifications': 'FSSAI, ISO 22000, HACCP, Halal & Kosher'
    }
  }
];

/* =========================================================================
   CATEGORY METADATA & CONSOLIDATED ALL PRODUCTS (96 Products)
   ========================================================================= */
export const productCategories = [
  {
    id: 'agriculture',
    name: 'Agriculture & Organics',
    shortTitle: 'Agriculture',
    count: agricultureProducts.length,
    icon: Leaf,
    image: '/mangoes.jpg',
    description: 'Certified Fresh Produce, Grains, Superfoods & Organic Exports',
    color: '#15803D',
    bgColor: 'rgba(21, 128, 61, 0.1)',
    products: agricultureProducts
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    shortTitle: 'Textiles',
    count: textilesProducts.length,
    icon: Shirt,
    image: '/garments.jpg',
    description: 'Yarn, Pure Silk, Luxury Bedding, Denim & Performance Apparel',
    color: '#7C3AED',
    bgColor: 'rgba(124, 58, 237, 0.1)',
    products: textilesProducts
  },
  {
    id: 'handicrafts',
    name: 'Heritage Handicrafts',
    shortTitle: 'Handicrafts',
    count: handicraftsProducts.length,
    icon: Sparkles,
    image: '/decor.jpg',
    description: 'Artisan Metalcrafts, Silk Carpets, Marble Inlay & Carved Decor',
    color: '#D97706',
    bgColor: 'rgba(217, 119, 6, 0.1)',
    products: handicraftsProducts
  },
  {
    id: 'beverages',
    name: 'Beverages & Spices',
    shortTitle: 'Spices & Drinks',
    count: beveragesProducts.length,
    icon: Coffee,
    image: '/food.jpg',
    description: 'Single-Estate Teas, High-Altitude Arabica, Saffron & True Spices',
    color: '#B45309',
    bgColor: 'rgba(180, 83, 9, 0.1)',
    products: beveragesProducts
  },
  {
    id: 'automobiles',
    name: 'Automobiles & Vehicles',
    shortTitle: 'Automotive',
    count: automobilesProducts.length,
    icon: Car,
    image: '/automotive.jpg',
    description: 'Electric Vans, Commercial Trucks, Wheels & OEM Engineered Parts',
    color: '#2563EB',
    bgColor: 'rgba(37, 99, 235, 0.1)',
    products: automobilesProducts
  },
  {
    id: 'machinery',
    name: 'Industrial Machinery',
    shortTitle: 'Machinery',
    count: machineryProducts.length,
    icon: Factory,
    image: '/industrial.jpg',
    description: '5-Axis CNC, Laser Cutters, Packaging Plants & Heavy Automation',
    color: '#082653',
    bgColor: 'rgba(8, 38, 83, 0.1)',
    products: machineryProducts
  },
  {
    id: 'electronics',
    name: 'Consumer Electronics',
    shortTitle: 'Electronics',
    count: electronicsProducts.length,
    icon: Cpu,
    image: '/electronics.jpg',
    description: 'OLED Displays, Smart Wearables, ANC Audio & High-Tech Devices',
    color: '#0284C7',
    bgColor: 'rgba(2, 132, 199, 0.1)',
    products: electronicsProducts
  },
  {
    id: 'fmcg',
    name: 'FMCG & Retail Goods',
    shortTitle: 'FMCG Retail',
    count: fmcgProducts.length,
    icon: ShoppingBag,
    image: '/consumer.jpg',
    description: 'Ayurvedic Personal Care, Canned Organics, Mineral Water & FMCG',
    color: '#059669',
    bgColor: 'rgba(5, 150, 105, 0.1)',
    products: fmcgProducts
  }
];

export const allProducts = [
  ...agricultureProducts,
  ...textilesProducts,
  ...handicraftsProducts,
  ...beveragesProducts,
  ...automobilesProducts,
  ...machineryProducts,
  ...electronicsProducts,
  ...fmcgProducts
];
