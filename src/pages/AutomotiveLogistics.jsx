import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import Magnet, { CARD_MAGNET_PROPS, TILE_MAGNET_PROPS } from '../components/common/Magnet';
import {
  autoHeroStats,
  autoServiceTiers,
  autoProductionModes,
  autoProductionVolumes,
  autoPillars,
  autoGallery,
  autoComplianceMatrix,
  autoCaseStudies,
  autoStandards,
  autoFaqs
} from '../data/automotiveLogisticsData';
import {
  Car,
  Truck,
  Ship,
  Layers,
  CheckCircle2,
  Clock,
  RotateCcw,
  Tag,
  ShieldCheck,
  TrendingUp,
  Warehouse,
  ShoppingBag,
  SlidersHorizontal,
  Box,
  Globe,
  Zap,
  BarChart2,
  Check,
  CheckCheck,
  Award,
  RefreshCw,
  Gauge,
  Cpu,
  Flame,
  BatteryCharging,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  Search,
  Building,
  Radio,
  FileCheck2,
  Eye,
  Activity
} from 'lucide-react';

export const AutomotiveLogistics = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  // Simulator State
  const [selectedTierId, setSelectedTierId] = useState('tier-jit-jis');
  const [selectedModeId, setSelectedModeId] = useState('mode-jis-carousel');
  const [selectedVolId, setSelectedVolId] = useState('vol-tier1-feeder');
  const [simulatorToast, setSimulatorToast] = useState(null);

  // Gallery Filter & Modal State
  const [activeCategory, setActiveCategory] = useState('All');
  const [previewImage, setPreviewImage] = useState(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const selectedTier = autoServiceTiers.find((t) => t.id === selectedTierId) || autoServiceTiers[0];
  const selectedMode = autoProductionModes.find((m) => m.id === selectedModeId) || autoProductionModes[0];
  const selectedVol = autoProductionVolumes.find((v) => v.id === selectedVolId) || autoProductionVolumes[0];

  const handleOpenModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleSimulateDispatch = () => {
    setSimulatorToast(`JIS Dispatch Spec Sheet generated for: ${selectedTier.name} (${selectedMode.name})`);
    setTimeout(() => {
      setSimulatorToast(null);
    }, 4500);
  };

  const filteredGallery =
    activeCategory === 'All'
      ? autoGallery
      : autoGallery.filter((item) =>
          item.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
          item.title.toLowerCase().includes(activeCategory.toLowerCase())
        );

  const galleryCategories = [
    'All',
    'EV Propulsion',
    'Chassis & Suspension',
    'Optics & Electronics',
    'Braking & Safety',
    'Electrical & Batteries',
    'Drivetrain & Gears'
  ];

  return (
    <div
      className="automotive-logistics-page-root"
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '100vh',
        background: '#FAFBFD',
        position: 'relative',
        boxShadow: '0 0 40px rgba(0,0,0,0.12)',
        overflowX: 'clip',
      }}
    >
      {/* 1. Shared Global Link Header */}
      <Header
        onTrackClick={() => handleOpenModal('tracking')}
        onQuoteClick={() => handleOpenModal('quote')}
        currentRoute="automotive-logistics"
        onNavigate={onNavigate}
      />

      {/* Main Content Area */}
      <main style={{ position: 'relative' }}>
        {/* Symmetrical Top Space Between Navbar and Hero Banner (24px clearance) */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />

        {/* =========================================================================
            SECTION 1: HERO BANNER (Light Orange with Automotive Performance Blue Accents)
            ========================================================================= */}
        <section
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 50%, #FFF7ED 100%)',
            color: '#082653',
            borderRadius: '16px',
            margin: '0 24px',
            padding: '56px 48px 48px',
            overflow: 'hidden',
            border: '1px solid #FED7AA',
            boxShadow: '0 20px 50px rgba(234, 88, 12, 0.08)',
          }}
        >
          {/* Subtle Ambient Radial Lighting */}
          <div
            style={{
              position: 'absolute',
              top: '-15%',
              right: '-8%',
              width: '560px',
              height: '560px',
              background: 'radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, rgba(234, 88, 12, 0.05) 50%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              filter: 'blur(40px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-25%',
              left: '-10%',
              width: '480px',
              height: '480px',
              background: 'radial-gradient(circle, rgba(251, 146, 60, 0.12) 0%, transparent 65%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              filter: 'blur(45px)',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.85fr)',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Headlines & Call-to-Actions */}
            <div>
              {/* Eyebrow Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '30px',
                  background: 'rgba(255, 255, 255, 0.75)',
                  border: '1px solid rgba(234, 88, 12, 0.35)',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#EA580C',
                    boxShadow: '0 0 8px rgba(234, 88, 12, 0.45)',
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '800',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#C2410C',
                  }}
                >
                  IATF 16949 CERTIFIED • INDUSTRY FOCUS: AUTOMOTIVE LOGISTICS
                </span>
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: '40px',
                  fontWeight: '800',
                  lineHeight: '1.16',
                  color: '#082653',
                  margin: '0 0 18px',
                  letterSpacing: '-0.02em',
                }}
              >
                Precision Assembly Lineside,{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #FF6F00 0%, #EA580C 50%, #D97706 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Zero Stoppage
                </span>{' '}
                SLA.
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.65',
                  color: '#334155',
                  margin: '0 0 24px',
                  maxWidth: '560px',
                }}
              >
                Engineered Just-in-Time (JIT) and Just-in-Sequence (JIS) line feeding matching OEM assembly takt-time down to the second. Delivering 1.4M+ finished vehicles globally with RoRo ocean carriers, enclosed multi-deck transporters, and UN 38.3 certified high-voltage EV battery corridors.
              </p>

              {/* Key Highlights Strip */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '32px',
                }}
              >
                {[
                  { text: 'Sub-15m Lineside Feeding Window', icon: Clock, color: '#EA580C' },
                  { text: 'EDI 866 MES Sequence Broadcast', icon: Cpu, color: '#EA580C' },
                  { text: 'Pure Car Carrier (RoRo) Vessels', icon: Ship, color: '#C2410C' },
                  { text: 'UN 38.3 EV Battery Corridors', icon: BatteryCharging, color: '#D97706' },
                ].map((pill, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '5px 12px',
                      borderRadius: '8px',
                      background: '#FFFFFF',
                      border: '1px solid #FED7AA',
                      fontSize: '12px',
                      color: '#082653',
                      fontWeight: '600',
                    }}
                  >
                    <pill.icon size={13} color={pill.color} />
                    <span>{pill.text}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  onClick={() => handleOpenModal('quote')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 28px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(234, 88, 12, 0.3)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(234, 88, 12, 0.42)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(234, 88, 12, 0.3)';
                  }}
                >
                  <Gauge size={17} />
                  <span>Request JIS Assembly Quote</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={() => handleOpenModal('tracking')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '13px 22px',
                    borderRadius: '12px',
                    background: '#FFFFFF',
                    color: '#082653',
                    fontSize: '14px',
                    fontWeight: '700',
                    border: '1px solid #FDBA74',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(234, 88, 12, 0.08)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFBEB';
                    e.currentTarget.style.borderColor = '#EA580C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#FDBA74';
                  }}
                >
                  <Radio size={15} color="#EA580C" />
                  <span>Track Live VIN Sequence</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Visual with Real Image and Live Telemetry Cockpit */}
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #FED7AA',
                boxShadow: '0 20px 45px rgba(234, 88, 12, 0.15)',
                background: '#FFF7ED',
                height: '380px',
              }}
            >
              <img
                src="/automotive.jpg"
                alt="Automotive Logistics Precision Hub"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 45%',
                  filter: 'brightness(1.04) contrast(1.03)',
                }}
              />

              {/* Floating Live Telemetry HUD Pill */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'rgba(255, 247, 237, 0.95)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid #FDBA74',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 24px rgba(28, 25, 23, 0.16)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#EA580C',
                      boxShadow: '0 0 10px rgba(234, 88, 12, 0.5)',
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '800', color: '#0F172A' }}>
                      BROADCAST: CHASSIS #GLK-AUTO-88492
                    </div>
                    <div style={{ fontSize: '10px', color: '#475569' }}>
                      EDI 866 MES: Station 14 Trim Line (58s Takt)
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '14px', fontWeight: '900', color: '#C2410C' }}>
                    99.98%
                  </div>
                  <div style={{ fontSize: '10px', color: '#EA580C', fontWeight: '700' }}>
                    BUFFER: 14m 20s
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'rgba(255, 247, 237, 0.95)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid #FDBA74',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 24px rgba(28, 25, 23, 0.16)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={16} color="#EA580C" />
                  <span style={{ fontSize: '11px', color: '#0F172A', fontWeight: '600' }}>
                    Lineside Kitting Relay: Direct Plant Injection Active
                  </span>
                </div>
                <span style={{ fontSize: '10px', color: '#C2410C', fontWeight: '800' }}>
                  JIS ACTIVE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: LIVE METRICS STRIP (KPI Bar)
            ========================================================================= */}
        <section style={{ margin: '24px 24px 0' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '16px',
              alignItems: 'stretch',
            }}
          >
            {autoHeroStats.map((stat, idx) => (
              <Magnet key={idx} {...TILE_MAGNET_PROPS}>
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '22px 20px 24px',
                    border: '1.5px solid #FDBA74',
                    boxShadow: '0 4px 16px rgba(234, 88, 12, 0.06)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    height: '100%',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = '#EA580C';
                    e.currentTarget.style.boxShadow = '0 10px 24px rgba(234, 88, 12, 0.14)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#FDBA74';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(234, 88, 12, 0.06)';
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      alignSelf: 'flex-start',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      background: 'rgba(234, 88, 12, 0.08)',
                      color: '#EA580C',
                      fontSize: '10px',
                      fontWeight: '800',
                      letterSpacing: '0.04em',
                      marginBottom: '10px',
                    }}
                  >
                    {stat.badge}
                  </div>

                  <div
                    style={{
                      fontSize: 'clamp(22px, 2vw, 27px)',
                      fontWeight: '900',
                      color: '#082653',
                      marginBottom: '6px',
                      letterSpacing: '-0.02em',
                      lineHeight: '1.15',
                      minHeight: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {stat.value}
                  </div>

                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: '700',
                      color: '#1E293B',
                      marginBottom: '6px',
                      minHeight: '36px',
                      lineHeight: '1.35',
                    }}
                  >
                    {stat.label}
                  </div>

                  <div
                    style={{
                      fontSize: '11px',
                      color: '#64748B',
                      lineHeight: '1.45',
                    }}
                  >
                    {stat.desc}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #EA580C 0%, #D97706 100%)',
                      opacity: 0.8,
                    }}
                  />
                </div>
              </Magnet>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: INTERACTIVE JUST-IN-SEQUENCE (JIS) SIMULATOR
            ========================================================================= */}
        <section
          style={{
            margin: '36px 24px 0',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #FDBA74',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(28, 25, 23, 0.05)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '28px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: '800',
                  color: '#EA580C',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                <SlidersHorizontal size={13} />
                <span>INTERACTIVE AUTOMOTIVE MANUFACTURING CONFIGURATOR</span>
              </div>
              <h2
                style={{
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#082653',
                  margin: 0,
                }}
              >
                Simulate Your Lineside Delivery & Production Sequencing
              </h2>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: 'rgba(234, 88, 12, 0.08)',
                color: '#EA580C',
                fontSize: '12px',
                fontWeight: '700',
              }}
            >
              <Cpu size={14} color="#EA580C" />
              <span>IATF 16949 / EDI 866 Validated Model</span>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '24px',
              marginBottom: '28px',
            }}
          >
            {/* Step 1: Assembly Supply Tier */}
            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: '800',
                  color: '#475569',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                1. Select Assembly Supply Tier
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {autoServiceTiers.map((tier) => {
                  const isSelected = selectedTierId === tier.id;
                  return (
                    <Magnet key={tier.id} {...TILE_MAGNET_PROPS} style={{ display: 'block', width: '100%' }}>
                      <div
                        onClick={() => setSelectedTierId(tier.id)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: isSelected ? '2px solid #EA580C' : '1px solid #FDBA74',
                          background: isSelected ? 'rgba(234, 88, 12, 0.06)' : '#FAFCFF',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'stretch', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '13px', fontWeight: '700', color: isSelected ? '#082653' : '#334155' }}>
                            {tier.name}
                          </span>
                          {isSelected && <CheckCircle2 size={16} color="#EA580C" />}
                        </div>
                        <div style={{ fontSize: '11px', color: '#EA580C', fontWeight: '700', marginTop: '2px' }}>
                          {tier.turnaround}
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748B', marginTop: '3px', lineHeight: '1.3' }}>
                          {tier.description}
                        </div>
                      </div>
                    </Magnet>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Production Delivery Mode */}
            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: '800',
                  color: '#475569',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                2. Select Line Feeding Mode
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {autoProductionModes.map((mode) => {
                  const isSelected = selectedModeId === mode.id;
                  return (
                    <Magnet key={mode.id} {...TILE_MAGNET_PROPS} style={{ display: 'block', width: '100%' }}>
                      <div
                        onClick={() => setSelectedModeId(mode.id)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: isSelected ? '2px solid #EA580C' : '1px solid #FDBA74',
                          background: isSelected ? 'rgba(234, 88, 12, 0.06)' : '#FAFCFF',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '13px', fontWeight: '700', color: '#082653' }}>
                            {mode.name}
                          </span>
                          {isSelected && <CheckCircle2 size={16} color="#EA580C" />}
                        </div>
                        <div style={{ fontSize: '11px', color: '#EA580C', fontWeight: '700', marginTop: '2px' }}>
                          Protocol: {mode.protocol}
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px', lineHeight: '1.35' }}>
                          {mode.desc}
                        </div>
                      </div>
                    </Magnet>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Manufacturing Volume Scale */}
            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: '800',
                  color: '#475569',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                3. Manufacturing Volume Tier
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {autoProductionVolumes.map((vol) => {
                  const isSelected = selectedVolId === vol.id;
                  return (
                    <Magnet key={vol.id} {...TILE_MAGNET_PROPS} style={{ display: 'block', width: '100%' }}>
                      <div
                        onClick={() => setSelectedVolId(vol.id)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: isSelected ? '2px solid #FF6F00' : '1px solid #FDBA74',
                          background: isSelected ? 'rgba(255, 111, 0, 0.06)' : '#FAFCFF',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '13px', fontWeight: '700', color: isSelected ? '#082653' : '#334155' }}>
                            {vol.name}
                          </span>
                          {isSelected && <CheckCircle2 size={16} color="#FF6F00" />}
                        </div>
                        <div style={{ fontSize: '11px', color: '#FF6F00', fontWeight: '700', marginTop: '2px' }}>
                          Volume: {vol.units} • {vol.costPerKit}
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px', lineHeight: '1.3' }}>
                          Throughput: {vol.throughputCapacity}
                        </div>
                      </div>
                    </Magnet>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Simulator Result Output Bar */}
          <div
            style={{
              background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
              border: '1px solid #FED7AA',
              color: '#082653',
              borderRadius: '12px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <div style={{ fontSize: '11px', color: '#EA580C', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                CONFIGURED AUTOMOTIVE JIT / JIS ARCHITECTURE
              </div>
              <div style={{ fontSize: '16px', fontWeight: '800', marginTop: '2px', color: '#082653' }}>
                {selectedTier.name} • <span style={{ color: '#EA580C' }}>{selectedMode.name}</span> • {selectedVol.name}
              </div>
              <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px' }}>
                Cadence: {selectedTier.turnaround} • Fleet: {selectedTier.fleetType} • Penalty: {selectedTier.penaltyProtection}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={handleSimulateDispatch}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '11px 20px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(234, 88, 12, 0.4)',
                }}
              >
                <FileCheck2 size={15} />
                <span>Generate JIS Dispatch Spec Sheet</span>
              </button>

              <button
                onClick={() => handleOpenModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '11px 18px',
                  borderRadius: '10px',
                  background: '#FFFFFF',
                  color: '#082653',
                  fontSize: '13px',
                  fontWeight: '700',
                  border: '1px solid #FED7AA',
                  cursor: 'pointer',
                }}
              >
                <span>Request Custom OEM SLA</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          {simulatorToast && (
            <div
              style={{
                marginTop: '16px',
                padding: '12px 18px',
                borderRadius: '8px',
                background: '#FFF7ED',
                border: '1px solid #FDE68A',
                color: '#C2410C',
                fontSize: '13px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <CheckCheck size={16} color="#EA580C" />
              <span>{simulatorToast}</span>
            </div>
          )}
        </section>

        {/* =========================================================================
            SECTION 4: 4 CORE AUTOMOTIVE PILLARS (Clean Standard 2x2 Grid)
            ========================================================================= */}
        <section style={{ margin: '48px 24px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: '800',
                color: '#EA580C',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              <ShieldCheck size={14} color="#EA580C" />
              <span>MANUFACTURING INTEGRATION PILLARS</span>
            </div>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '800',
                color: '#082653',
                margin: '0 0 10px',
              }}
            >
              Synchronized Just-in-Sequence Logistics for Global Automakers
            </h2>
            <p
              style={{
                fontSize: '14px',
                color: '#64748B',
                maxWidth: '620px',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
            >
              From subassembly lineside feeding in 15-minute windows to zero-blemish RoRo ocean shipping of finished vehicles, our supply chain operates under strict IATF 16949 and VDA 6.3 standards.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '24px',
            }}
          >
            {autoPillars.map((pillar) => {
              const featuresList = pillar.features || pillar.points || [];
              return (
                <Magnet key={pillar.id} {...CARD_MAGNET_PROPS}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid #FDBA74',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(28, 25, 23, 0.04)',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#EA580C';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(234, 88, 12, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#FDBA74';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(28, 25, 23, 0.04)';
                    }}
                  >
                  {/* Photo Header */}
                  <div
                    style={{
                      height: '180px',
                      position: 'relative',
                      overflow: 'hidden',
                      background: '#FFF7ED',
                    }}
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(1.05) contrast(1.04)',
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 62%, rgba(0, 0, 0, 0.25) 82%, rgba(0, 0, 0, 0.5) 100%)',
                      }}
                    />
                    {/* Top Metric Pill */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        right: '14px',
                        background: 'rgba(0, 0, 0, 0.65)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(251, 146, 60, 0.4)',
                        color: '#FED7AA',
                        fontSize: '11px',
                        fontWeight: '800',
                        padding: '4px 10px',
                        borderRadius: '20px',
                      }}
                    >
                      {pillar.metric}
                    </div>

                    {/* Bottom Title on Image */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '14px',
                        left: '16px',
                        right: '16px',
                      }}
                    >
                      <div style={{ fontSize: '11px', fontWeight: '700', color: '#FDE68A', letterSpacing: '0.04em', textShadow: '0 1px 3px rgba(0, 0, 0, 0.65)' }}>
                        {pillar.subtitle || pillar.badgeText}
                      </div>
                      <div style={{ fontSize: '18px', fontWeight: '800', color: '#FFFFFF', marginTop: '2px', textShadow: '0 1px 4px rgba(0, 0, 0, 0.65)' }}>
                        {pillar.title}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <p
                      style={{
                        fontSize: '13px',
                        lineHeight: '1.6',
                        color: '#475569',
                        margin: '0 0 16px',
                      }}
                    >
                      {pillar.desc || pillar.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {featuresList.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '12px',
                            color: '#334155',
                            lineHeight: '1.45',
                          }}
                        >
                          <div
                            style={{
                              width: '16px',
                              height: '16px',
                              borderRadius: '50%',
                              background: 'rgba(234, 88, 12, 0.12)',
                              color: '#EA580C',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}
                          >
                            <Check size={10} strokeWidth={3} />
                          </div>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                </Magnet>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: ULTRA-HIGH RESOLUTION PRODUCT & SUBSYSTEM SHOWCASE GALLERY
            ========================================================================= */}
        <section
          style={{
            margin: '48px 24px 0',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #FDBA74',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(28, 25, 23, 0.04)',
          }}
        >
          {/* Header & Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '28px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: '800',
                  color: '#EA580C',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                <Car size={13} color="#EA580C" />
                <span>VERIFIED ULTRA-HIGH RESOLUTION AUTOMOTIVE SHOWCASE</span>
              </div>
              <h2
                style={{
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#082653',
                  margin: 0,
                }}
              >
                Automotive Components & Finished Systems Transport Portfolio
              </h2>
            </div>

            {/* Filter Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              {galleryCategories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '7px 14px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '700',
                      border: isActive ? '1px solid #EA580C' : '1px solid #FDBA74',
                      background: isActive ? 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)' : '#FAFBFD',
                      color: isActive ? '#FFFFFF' : '#475569',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 8-Card Showcase Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '20px',
            }}
          >
            {filteredGallery.map((item) => (
              <Magnet key={item.id} {...CARD_MAGNET_PROPS}>
                <div
                  onClick={() => setPreviewImage(item)}
                  style={{
                    background: '#FAFBFD',
                    borderRadius: '12px',
                    border: '1px solid #FDBA74',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = '#EA580C';
                    e.currentTarget.style.boxShadow = '0 10px 24px rgba(234, 88, 12, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#FDBA74';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                {/* Image Frame with Ultra-High Resolution Rendering */}
                <div
                  style={{
                    height: '160px',
                    background: '#FFFFFF',
                    padding: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    borderBottom: '1px solid #F1F5F9',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  {/* Category Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(234, 88, 12, 0.92)',
                      color: '#FFFFFF',
                      fontSize: '10px',
                      fontWeight: '700',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {item.badge}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#EA580C',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Eye size={12} />
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#082653', lineHeight: '1.35', marginBottom: '6px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748B', lineHeight: '1.4' }}>
                      {item.spec}
                    </div>
                  </div>

                  <div style={{ marginTop: '12px', borderTop: '1px solid #E2E8F0', paddingTop: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '10px', color: '#EA580C', fontWeight: '700' }}>
                        {item.highlight}
                      </span>
                      <span style={{ fontSize: '10px', color: '#EA580C', fontWeight: '700' }}>
                        IATF PASSED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </Magnet>
            ))}
          </div>
        </section>

        {/* Modal: Full-Screen Ultra-High Res Preview */}
        {previewImage && (
          <div
            onClick={() => setPreviewImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(28, 25, 23, 0.78)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px 16px',
              overflowY: 'auto',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                maxWidth: '620px',
                width: '100%',
                maxHeight: 'min(90vh, 660px)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 25px 60px -15px rgba(28, 25, 23, 0.4), 0 0 0 1px rgba(226, 232, 240, 0.8)',
                position: 'relative',
                overflow: 'hidden',
                margin: 'auto',
              }}
            >
              <button
                onClick={() => setPreviewImage(null)}
                aria-label="Close preview"
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid #FDBA74',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 30,
                  transition: 'transform 0.2s ease, background 0.2s ease',
                }}
              >
                <X size={18} color="#082653" />
              </button>

              <div
                style={{
                  padding: '20px 24px 16px',
                  textAlign: 'center',
                  background: 'radial-gradient(ellipse at center, #F8FAFC 0%, #F1F5F9 100%)',
                  borderBottom: '1px solid #F1F5F9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  maxHeight: '220px',
                }}
              >
                <img
                  src={previewImage.image}
                  alt={previewImage.title}
                  style={{
                    maxHeight: '185px',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.08))',
                  }}
                />
              </div>

              <div
                style={{
                  padding: '22px 28px 24px',
                  overflowY: 'auto',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'rgba(234, 88, 12, 0.1)',
                    color: '#EA580C',
                    fontSize: '11px',
                    fontWeight: '800',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    alignSelf: 'flex-start',
                    marginBottom: '10px',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  }}
                >
                  {previewImage.badge} • {previewImage.category}
                </div>
                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: '800',
                    color: '#082653',
                    margin: '0 0 8px',
                    lineHeight: '1.3',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  }}
                >
                  {previewImage.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#64748B',
                    lineHeight: '1.6',
                    margin: '0 0 16px',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  }}
                >
                  {previewImage.spec}
                </p>

                <div
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid #FDBA74',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                    gap: '16px',
                    marginBottom: '20px',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '10.5px',
                        fontWeight: '800',
                        color: '#64748B',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        marginBottom: '4px',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      PACKAGING SPECIFICATION
                    </div>
                    <div
                      style={{
                        fontSize: '13.5px',
                        fontWeight: '700',
                        color: '#EA580C',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      {previewImage.highlight}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '10.5px',
                        fontWeight: '800',
                        color: '#64748B',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        marginBottom: '4px',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      OEM QUALITY APPROVAL
                    </div>
                    <div
                      style={{
                        fontSize: '13.5px',
                        fontWeight: '700',
                        color: '#EA580C',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      {previewImage.compliance}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                  <button
                    onClick={() => {
                      setPreviewImage(null);
                      handleOpenModal('quote');
                    }}
                    style={{
                      flex: 1,
                      padding: '12px 20px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: '700',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(234, 88, 12, 0.3)',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Request JIS Assembly Line Slot
                  </button>
                  <button
                    onClick={() => setPreviewImage(null)}
                    style={{
                      padding: '12px 24px',
                      borderRadius: '10px',
                      background: '#F1F5F9',
                      color: '#475569',
                      fontSize: '13px',
                      fontWeight: '700',
                      border: '1px solid #FDBA74',
                      cursor: 'pointer',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SECTION 6: OEM COMPLIANCE MATRIX
            ========================================================================= */}
        <section
          style={{
            margin: '48px 24px 0',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #FDBA74',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(28, 25, 23, 0.04)',
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: '800',
                color: '#EA580C',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              <Award size={14} color="#EA580C" />
              <span>OEM SPECIFICATION & QUALITY AUDITING FRAMEWORK</span>
            </div>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: '800',
                color: '#082653',
                margin: 0,
              }}
            >
              Automotive Manufacturer Standards Compliance Matrix
            </h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #E2E8F0', background: '#F8FAFC' }}>
                  <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '800', color: '#475569', textTransform: 'uppercase' }}>
                    OEM Quality Standard
                  </th>
                  <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '800', color: '#475569', textTransform: 'uppercase' }}>
                    Governing Entity
                  </th>
                  <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '800', color: '#475569', textTransform: 'uppercase' }}>
                    Scope of Application
                  </th>
                  <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '800', color: '#475569', textTransform: 'uppercase' }}>
                    Key Audited Controls
                  </th>
                  <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '800', color: '#475569', textTransform: 'uppercase' }}>
                    Network Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {autoComplianceMatrix.map((item, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid #F1F5F9',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#FFF7ED';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <td style={{ padding: '14px 16px', fontSize: '13px', fontWeight: '800', color: '#082653' }}>
                      {item.standard}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: '12px', color: '#EA580C', fontWeight: '700' }}>
                      {item.authority}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: '12px', color: '#475569', maxWidth: '280px', lineHeight: '1.4' }}>
                      {item.scope}
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: '12px', color: '#64748B', maxWidth: '260px', lineHeight: '1.4' }}>
                      {item.controls}
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          background: 'rgba(234, 88, 12, 0.1)',
                          color: '#EA580C',
                          fontSize: '11px',
                          fontWeight: '800',
                        }}
                      >
                        <Check size={12} strokeWidth={3} />
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: REAL-WORLD AUTOMOTIVE CASE STUDIES
            ========================================================================= */}
        <section style={{ margin: '48px 24px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: '800',
                color: '#EA580C',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              <BarChart2 size={14} color="#EA580C" />
              <span>PROVEN OEM ASSEMBLY LINE METRICS</span>
            </div>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '800',
                color: '#082653',
                margin: 0,
              }}
            >
              Automotive Logistics Case Studies
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '24px',
            }}
          >
            {autoCaseStudies.map((study) => (
              <Magnet key={study.id} {...CARD_MAGNET_PROPS}>
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #FDBA74',
                    padding: '24px',
                    boxShadow: '0 8px 24px rgba(28, 25, 23, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = '#EA580C';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(234, 88, 12, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#FDBA74';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(28, 25, 23, 0.04)';
                  }}
                >
                  <div>
                    <div style={{ fontSize: '11px', color: '#EA580C', fontWeight: '800', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      {study.client}
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#082653', margin: '8px 0 10px', lineHeight: '1.35' }}>
                      {study.headline}
                    </h3>
                    <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.55', margin: '0 0 20px' }}>
                      {study.summary}
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                        gap: '8px',
                        background: '#F8FAFC',
                        borderRadius: '10px',
                        padding: '12px',
                        marginBottom: '16px',
                      }}
                    >
                      {study.metrics.map((res, rIdx) => (
                        <div key={rIdx} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '14px', fontWeight: '900', color: '#082653' }}>{res.val}</div>
                          <div style={{ fontSize: '10px', color: '#64748B', marginTop: '2px' }}>{res.label}</div>
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        fontSize: '11px',
                        color: '#C2410C',
                        background: 'rgba(234, 88, 12, 0.08)',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        lineHeight: '1.45',
                        fontWeight: '600',
                      }}
                    >
                      <strong>OEM Milestone:</strong> {study.takeaway}
                    </div>
                  </div>
                </div>
              </Magnet>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: GLOBAL ACCREDITATIONS & STANDARDS STRIP
            ========================================================================= */}
        <section
          style={{
            margin: '48px 24px 0',
            background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 50%, #FFF7ED 100%)',
            border: '1px solid #FED7AA',
            borderRadius: '16px',
            padding: '28px 36px',
            color: '#082653',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <div style={{ fontSize: '11px', color: '#EA580C', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                CERTIFIED AUTOMOTIVE SUPPLY CHAIN NETWORK
              </div>
              <div style={{ fontSize: '18px', fontWeight: '800', marginTop: '4px', color: '#082653' }}>
                Accredited Under Global Automotive OEM & Dangerous Goods Frameworks
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {autoStandards.map((std, idx) => (
                <Magnet key={idx} padding={14} magnetStrength={12} maxOffset={3} scale={1.015} tilt={0.8}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      background: '#FFFFFF',
                      border: '1px solid #FED7AA',
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#082653',
                    }}
                  >
                    <CheckCircle2 size={13} color="#EA580C" />
                    <span>{std}</span>
                  </div>
                </Magnet>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: AUTOMOTIVE LOGISTICS FAQ ACCORDION
            ========================================================================= */}
        <section
          style={{
            margin: '48px 24px 0',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #FDBA74',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(28, 25, 23, 0.04)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: '800',
                color: '#EA580C',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              <Zap size={14} color="#EA580C" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: '800',
                color: '#082653',
                margin: 0,
              }}
            >
              Automotive Lineside Delivery & RoRo Freight Inquiries
            </h2>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {autoFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: '12px',
                    border: isOpen ? '1px solid #EA580C' : '1px solid #FDBA74',
                    background: isOpen ? '#FFF7ED' : '#FAFBFD',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '12px',
                    }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: '700', color: '#082653' }}>
                      {faq.q}
                    </span>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: isOpen ? '#EA580C' : '#E2E8F0',
                        color: isOpen ? '#FFFFFF' : '#475569',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 20px 18px',
                        fontSize: '13px',
                        lineHeight: '1.65',
                        color: '#475569',
                        borderTop: '1px solid rgba(234, 88, 12, 0.15)',
                        paddingTop: '12px',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: BOTTOM HIGH-IMPACT CTA BANNER
            ========================================================================= */}
        <section
          style={{
            margin: '48px 24px 0',
            background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 50%, #FFF7ED 100%)',
            border: '1px solid #FED7AA',
            color: '#082653',
            borderRadius: '16px',
            padding: '48px 40px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(234, 88, 12, 0.08)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-30%',
              right: '-10%',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <div style={{ maxWidth: '620px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: '800',
                  color: '#EA580C',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                <Car size={14} color="#EA580C" />
                <span>INTEGRATE YOUR AUTOMOTIVE SUPPLY CHAIN</span>
              </div>
              <h2
                style={{
                  fontSize: '28px',
                  fontWeight: '800',
                  margin: '0 0 10px',
                  color: '#082653',
                }}
              >
                Ready to Eliminate Assembly Line Stoppage Risk?
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#334155',
                  margin: 0,
                }}
              >
                Connect with our certified IATF 16949 automotive logistics directors to synchronize lineside EDI 866 broadcast sequencing, book global RoRo finished vehicle space, or mobilize 24/7 emergency VOR sprint vans.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleOpenModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(234, 88, 12, 0.35)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(234, 88, 12, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(234, 88, 12, 0.35)';
                }}
              >
                <Gauge size={17} />
                <span>Request Custom OEM JIT SLA</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => handleOpenModal('tracking')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 22px',
                  borderRadius: '12px',
                  background: '#FFFFFF',
                  color: '#082653',
                  fontSize: '14px',
                  fontWeight: '700',
                  border: '1px solid #FED7AA',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFF7ED';
                  e.currentTarget.style.borderColor = '#EA580C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#FED7AA';
                }}
              >
                <Radio size={15} color="#EA580C" />
                <span>Track Vehicle by VIN</span>
              </button>
            </div>
          </div>
        </section>

        {/* Dedicated Bottom Breathing Space (24px clearance above footer) */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />
      </main>

      {/* Global Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Track & Quote Modal */}
      <TrackModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTab={modalType}
      />
    </div>
  );
};

export default AutomotiveLogistics;
