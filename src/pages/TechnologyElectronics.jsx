import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  techHeroStats,
  techServiceTiers,
  techTransportModes,
  techVolumeScales,
  techPillars,
  techGallery,
  techComplianceMatrix,
  techCaseStudies,
  techStandards,
  techFaqs
} from '../data/technologyElectronicsData';
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
  Workflow,
  SlidersHorizontal,
  Check,
  CheckCheck,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  Search,
  Building,
  Eye
} from 'lucide-react';

export const TechnologyElectronics = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  // Simulator State
  const [selectedTierId, setSelectedTierId] = useState('tier-semiconductor-wafer');
  const [selectedModeId, setSelectedModeId] = useState('mode-tapa-convoy');
  const [selectedVolId, setSelectedVolId] = useState('vol-series-hardware');
  const [simulatorToast, setSimulatorToast] = useState(null);

  // Gallery Filter & Modal State
  const [activeCategory, setActiveCategory] = useState('All');
  const [previewImage, setPreviewImage] = useState(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const selectedTier = techServiceTiers.find((t) => t.id === selectedTierId) || techServiceTiers[0];
  const selectedMode = techTransportModes.find((m) => m.id === selectedModeId) || techTransportModes[0];
  const selectedVol = techVolumeScales.find((v) => v.id === selectedVolId) || techVolumeScales[0];

  const handleOpenModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleSimulateDispatch = () => {
    setSimulatorToast(`High-Tech Security Dispatch Sheet generated for: ${selectedTier.name} (${selectedMode.name})`);
    setTimeout(() => {
      setSimulatorToast(null);
    }, 4500);
  };

  const filteredGallery =
    activeCategory === 'All'
      ? techGallery
      : techGallery.filter((item) =>
          item.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
          item.title.toLowerCase().includes(activeCategory.toLowerCase())
        );

  const galleryCategories = [
    'All',
    'Enterprise Video Subsystems',
    'Power Semiconductor Electronics',
    'IoT Security & Remote Telemetry',
    'High-Tech Automotive Optics',
    'Optoelectronic Laser Systems',
    'Advanced Precision Electronics Tooling'
  ];

  // Map each compliance standard to a dedicated Lucide icon
  const getComplianceIcon = (idx) => {
    switch (idx) {
      case 0:
        return ShieldCheck; // TAPA
      case 1:
        return Zap;         // ANSI/ESD
      case 2:
        return Lock;        // NIST Data Sanitization
      case 3:
        return Award;       // C-TPAT / AEO
      case 4:
        return FileCheck2;  // RoHS / REACH
      case 5:
        return RotateCcw;   // R2v3 Recycling
      default:
        return ShieldCheck;
    }
  };

  return (
    <div
      className="technology-electronics-page-root"
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
        currentRoute="technology-and-electronics"
        onNavigate={onNavigate}
      />

      {/* Main Content Area */}
      <main style={{ position: 'relative' }}>
        {/* Symmetrical Top Space Between Navbar and Hero Banner (24px clearance) */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />

        {/* =========================================================================
            SECTION 1: HERO BANNER (Luxury Deep Navy with Tech Emerald / Teal Glow)
            ========================================================================= */}
        <section
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #031b2e 0%, #082653 45%, #064e3b 100%)',
            color: '#FFFFFF',
            borderRadius: '16px',
            margin: '0 24px',
            padding: '56px 48px 48px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(8, 38, 83, 0.28)',
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
              background: 'radial-gradient(circle, rgba(13, 148, 136, 0.28) 0%, rgba(6, 95, 70, 0.12) 45%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              filter: 'blur(35px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-25%',
              left: '-10%',
              width: '480px',
              height: '480px',
              background: 'radial-gradient(circle, rgba(2, 132, 199, 0.2) 0%, transparent 65%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              filter: 'blur(40px)',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.85fr)',
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
                  background: 'rgba(13, 148, 136, 0.2)',
                  border: '1px solid rgba(45, 212, 191, 0.45)',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#2DD4BF',
                    boxShadow: '0 0 10px #2DD4BF',
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '800',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#99F6E4',
                  }}
                >
                  TAPA LEVEL A • ANSI/ESD S20.20 • INDUSTRY FOCUS: TECHNOLOGY & ELECTRONICS
                </span>
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: '40px',
                  fontWeight: '800',
                  lineHeight: '1.16',
                  color: '#FFFFFF',
                  margin: '0 0 18px',
                  letterSpacing: '-0.02em',
                }}
              >
                High-Value Tech Logistics &{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #99F6E4 0%, #2DD4BF 50%, #38BDF8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Cleanroom Freight
                </span>
                .
              </h1>

              {/* Sub-headline */}
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.65',
                  color: '#CBD5E1',
                  margin: '0 0 28px',
                  maxWidth: '560px',
                }}
              >
                Engineered for semiconductor foundries, hyperscale AI datacenter operators, and global consumer technology brands.
                We provide TAPA Level-A armored transit, ANSI/ESD S20.20 nitrogen packaging, sub-45m tarmac air freight, and certified NIST SP 800-88 reverse logistics.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
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
                  <span>Request High-Value Cargo SLA</span>
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
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '700',
                    border: '1px solid rgba(45, 212, 191, 0.35)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.borderColor = '#2DD4BF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.35)';
                  }}
                >
                  <Radio size={15} color="#2DD4BF" />
                  <span>Track Active Telemetry</span>
                </button>
              </div>

              {/* Verified Trust Badges */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="#2DD4BF" />
                  <span style={{ fontSize: '12px', color: '#CBD5E1', fontWeight: '600' }}>TAPA FSR Level A & TSR 1</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Zap size={16} color="#38BDF8" />
                  <span style={{ fontSize: '12px', color: '#CBD5E1', fontWeight: '600' }}>ANSI/ESD S20.20-2021 Certified</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={16} color="#FBBF24" />
                  <span style={{ fontSize: '12px', color: '#CBD5E1', fontWeight: '600' }}>C-TPAT Tier 3 / EU AEO-F</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual with Real Image and Floating Badges */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.35)',
                  position: 'relative',
                  height: '380px',
                  background: '#041B2E',
                }}
              >
                <img
                  src="/electronics.jpg"
                  alt="KPL Technology & Electronics Logistics Operations"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 45%',
                    filter: 'brightness(1.02) contrast(1.04)',
                  }}
                />
                {/* Subtle edge-only vignette for maximum clarity while ensuring HUD legibility */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(4, 27, 46, 0.4) 0%, transparent 22%, transparent 72%, rgba(4, 27, 46, 0.5) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Top Overlay Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'rgba(4, 27, 46, 0.88)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(45, 212, 191, 0.45)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#2DD4BF',
                        boxShadow: '0 0 10px #2DD4BF',
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: '800', color: '#FFFFFF' }}>
                        TAPA ESCORT: CONVOY #KPL-TECH-9921
                      </div>
                      <div style={{ fontSize: '10px', color: '#94A3B8' }}>
                        Cleanroom Nitrogen Pod • Route Active (Zero Alert)
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '14px', fontWeight: '900', color: '#99F6E4' }}>
                      100.00%
                    </div>
                    <div style={{ fontSize: '10px', color: '#2DD4BF' }}>
                      ZERO LOSS SLA
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'rgba(4, 27, 46, 0.86)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Activity size={16} color="#2DD4BF" />
                    <span style={{ fontSize: '11px', color: '#E2E8F0', fontWeight: '600' }}>
                      Semiconductor & Wafer Air Bridge: Active Tarmac Direct
                    </span>
                  </div>
                  <span style={{ fontSize: '10px', color: '#99F6E4', fontWeight: '800' }}>
                    TAPA LEVEL-A
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: LIVE KPI METRICS BAR (4 Clean Cards Across Container)
            ========================================================================= */}
        <section style={{ margin: '24px 24px 0' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
            }}
          >
            {techHeroStats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '22px 20px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 16px rgba(8, 38, 83, 0.04)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = '#0D9488';
                    e.currentTarget.style.boxShadow = '0 10px 24px rgba(13, 148, 136, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(8, 38, 83, 0.04)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: 'rgba(13, 148, 136, 0.08)',
                        color: '#0D9488',
                        fontSize: '10.5px',
                        fontWeight: '800',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {stat.label}
                    </span>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: `${stat.accent}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComp size={16} color={stat.accent} />
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '28px',
                      fontWeight: '900',
                      color: '#082653',
                      marginBottom: '4px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {stat.value}
                  </div>

                  <div
                    style={{
                      fontSize: '11px',
                      color: '#64748B',
                      lineHeight: '1.45',
                    }}
                  >
                    {stat.sub}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #0D9488 0%, #38BDF8 100%)',
                      opacity: 0.8,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: INTERACTIVE CLEANROOM & HIGH-VALUE TECH SIMULATOR
            ========================================================================= */}
        <section
          id="tech-simulator-section"
          style={{
            margin: '36px 24px 0',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(8, 38, 83, 0.05)',
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
                  color: '#0D9488',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                <SlidersHorizontal size={13} />
                <span>INTERACTIVE CLEANROOM & ASSET CONFIGURATOR</span>
              </div>
              <h2
                style={{
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#082653',
                  margin: 0,
                }}
              >
                Configure High-Value Electronics, Wafer & Datacenter Logistics
              </h2>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: 'rgba(13, 148, 136, 0.08)',
                color: '#0D9488',
                fontSize: '12px',
                fontWeight: '700',
              }}
            >
              <Cpu size={14} color="#0D9488" />
              <span>TAPA FSR Level A / ANSI/ESD S20.20 Validated</span>
            </div>
          </div>

          {/* 3 Symmetrical Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginBottom: '28px',
            }}
          >
            {/* Step 1: Technology Service Tier */}
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
                1. Select Technology Freight Tier
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {techServiceTiers.map((tier) => {
                  const isSelected = selectedTierId === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: isSelected ? '2px solid #0D9488' : '1px solid #E2E8F0',
                        background: isSelected ? 'rgba(13, 148, 136, 0.06)' : '#FAFCFF',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '13px', fontWeight: '700', color: isSelected ? '#082653' : '#334155' }}>
                          {tier.name}
                        </span>
                        {isSelected && <CheckCircle2 size={16} color="#0D9488" />}
                      </div>
                      <div style={{ fontSize: '11px', color: '#0D9488', fontWeight: '700', marginTop: '2px' }}>
                        {tier.turnaround}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748B', marginTop: '3px', lineHeight: '1.3' }}>
                        {tier.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: In-Transit Telematics Escort */}
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
                2. Select Security Escort Protocol
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {techTransportModes.map((mode) => {
                  const isSelected = selectedModeId === mode.id;
                  return (
                    <div
                      key={mode.id}
                      onClick={() => setSelectedModeId(mode.id)}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: isSelected ? '2px solid #0284C7' : '1px solid #E2E8F0',
                        background: isSelected ? 'rgba(2, 132, 199, 0.06)' : '#FAFCFF',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '13px', fontWeight: '700', color: '#082653' }}>
                          {mode.name}
                        </span>
                        {isSelected && <CheckCircle2 size={16} color="#0284C7" />}
                      </div>
                      <div style={{ fontSize: '11px', color: '#0284C7', fontWeight: '700', marginTop: '2px' }}>
                        Protocol: {mode.protocol}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px', lineHeight: '1.35' }}>
                        {mode.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Production Scale & Velocity */}
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
                3. Rollout Volume & Scale Tier
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {techVolumeScales.map((vol) => {
                  const isSelected = selectedVolId === vol.id;
                  return (
                    <div
                      key={vol.id}
                      onClick={() => setSelectedVolId(vol.id)}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: isSelected ? '2px solid #FF6F00' : '1px solid #E2E8F0',
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
                        Scale: {vol.units} • {vol.costPerKit}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px', lineHeight: '1.3' }}>
                        Capacity: {vol.throughputCapacity}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Simulator Result Output Bar */}
          <div
            style={{
              background: 'linear-gradient(135deg, #031B2E 0%, #082653 100%)',
              color: '#FFFFFF',
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
              <div style={{ fontSize: '11px', color: '#2DD4BF', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                CONFIGURED TECHNOLOGY & CLEANROOM SLA PROFILE
              </div>
              <div style={{ fontSize: '16px', fontWeight: '800', marginTop: '2px' }}>
                {selectedTier.name} • <span style={{ color: '#2DD4BF' }}>{selectedMode.name}</span> • {selectedVol.name}
              </div>
              <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>
                Cadence: {selectedTier.turnaround} • Barrier: {selectedTier.qualityStandard} • Liability Shield: {selectedTier.penaltyProtection}
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
                  background: 'linear-gradient(135deg, #0D9488 0%, #0F766E 100%)',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(13, 148, 136, 0.4)',
                }}
              >
                <FileCheck2 size={15} />
                <span>Generate High-Tech Spec Sheet</span>
              </button>

              <button
                onClick={() => handleOpenModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '11px 18px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: '700',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                }}
              >
                <span>Request Custom Security SLA</span>
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
                background: '#F0FDFA',
                border: '1px solid #99F6E4',
                color: '#0F766E',
                fontSize: '13px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <CheckCheck size={16} color="#0D9488" />
              <span>{simulatorToast}</span>
            </div>
          )}
        </section>

        {/* =========================================================================
            SECTION 4: 4 CORE TECHNICAL TECHNOLOGY PILLARS
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
                color: '#0D9488',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              <Cpu size={14} color="#0D9488" />
              <span>FULL LIFECYCLE HIGH-TECH ARCHITECTURE</span>
            </div>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '800',
                color: '#082653',
                margin: '0 0 10px',
              }}
            >
              Four Pillars of Technology & Electronics Logistics Excellence
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
              From silicon wafer fab corridors to high-density AI server deployments and circular RMA recovery, we deliver audited end-to-end reliability.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
            }}
          >
            {techPillars.map((pillar) => {
              const featuresList = pillar.features || pillar.points || [];
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(8, 38, 83, 0.04)',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = '#0D9488';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(13, 148, 136, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(8, 38, 83, 0.04)';
                  }}
                >
                  {/* Photo Header */}
                  <div
                    style={{
                      height: '180px',
                      position: 'relative',
                      overflow: 'hidden',
                      background: '#041B2E',
                    }}
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.9)',
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
                        background: 'linear-gradient(180deg, rgba(8, 38, 83, 0.2) 0%, rgba(8, 38, 83, 0.85) 100%)',
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
                        border: '1px solid rgba(45, 212, 191, 0.4)',
                        color: '#99F6E4',
                        fontSize: '11px',
                        fontWeight: '800',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <IconComp size={13} color="#2DD4BF" />
                      <span>{pillar.metric}</span>
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
                      <div style={{ fontSize: '11px', fontWeight: '700', color: '#99F6E4', letterSpacing: '0.04em' }}>
                        {pillar.badgeText}
                      </div>
                      <div style={{ fontSize: '18px', fontWeight: '800', color: '#FFFFFF', marginTop: '2px' }}>
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
                              background: 'rgba(13, 148, 136, 0.12)',
                              color: '#0D9488',
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
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: HIGH-RESOLUTION 8-CARD SHOWCASE GALLERY
            ========================================================================= */}
        <section
          style={{
            margin: '48px 24px 0',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(8, 38, 83, 0.04)',
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
                  color: '#0D9488',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                <Laptop size={13} color="#0D9488" />
                <span>VERIFIED HIGH-RESOLUTION ELECTRONICS SHOWCASE</span>
              </div>
              <h2
                style={{
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#082653',
                  margin: 0,
                }}
              >
                Technology Hardware & Subsystems Transport Portfolio
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
                      border: isActive ? '1px solid #0D9488' : '1px solid #E2E8F0',
                      background: isActive ? 'linear-gradient(135deg, #0D9488 0%, #0F766E 100%)' : '#FAFBFD',
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
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
          >
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setPreviewImage(item)}
                style={{
                  background: '#FAFBFD',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#0D9488';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(13, 148, 136, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Image Frame with High Resolution Rendering */}
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
                      background: 'rgba(8, 38, 83, 0.85)',
                      color: '#FFFFFF',
                      fontSize: '10px',
                      fontWeight: '700',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {item.highlight}
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
                      color: '#0D9488',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Eye size={12} />
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: '#0D9488', fontWeight: '700', marginBottom: '4px' }}>
                      {item.category}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#082653', lineHeight: '1.35', marginBottom: '6px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748B', lineHeight: '1.4' }}>
                      {item.desc}
                    </div>
                  </div>

                  <div style={{ marginTop: '12px', borderTop: '1px solid #E2E8F0', paddingTop: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '10px', color: '#0D9488', fontWeight: '700' }}>
                        ESD CLEANROOM TESTED
                      </span>
                      <span style={{ fontSize: '10px', color: '#059669', fontWeight: '700' }}>
                        PASSED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
              background: 'rgba(5, 24, 56, 0.82)',
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
                boxShadow: '0 25px 60px -15px rgba(5, 24, 56, 0.4), 0 0 0 1px rgba(226, 232, 240, 0.8)',
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
                  border: '1px solid #E2E8F0',
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
                  background: 'radial-gradient(ellipse at center, #F8FAFC 0%, #EEF2F6 100%)',
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
                    background: 'rgba(13, 148, 136, 0.1)',
                    color: '#0D9488',
                    fontSize: '11px',
                    fontWeight: '800',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    alignSelf: 'flex-start',
                    marginBottom: '10px',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  }}
                >
                  {previewImage.category} • {previewImage.highlight}
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
                  {previewImage.desc}
                </p>

                <div
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
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
                      PACKAGING PROTOCOL
                    </div>
                    <div
                      style={{
                        fontSize: '13.5px',
                        fontWeight: '700',
                        color: '#0D9488',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      ANSI/ESD S20.20-2021 Shielded
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
                      SECURITY ESCORT TIER
                    </div>
                    <div
                      style={{
                        fontSize: '13.5px',
                        fontWeight: '700',
                        color: '#059669',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      TAPA Level A Armored Corridor
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
                      background: 'linear-gradient(135deg, #0D9488 0%, #0F766E 100%)',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: '700',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(13, 148, 136, 0.3)',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Request Route & Cleanroom Protocol
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
                      border: '1px solid #E2E8F0',
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
            SECTION 6: HIGH-TECH REGULATORY COMPLIANCE MATRIX (USER FOCUSED FIX!)
            Organized with dedicated icon badge, status pill on top bar, full-width
            titles with consistent height, clean scope pills, and active status footer!
            ========================================================================= */}
        <section
          style={{
            margin: '48px 24px 0',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(8, 38, 83, 0.04)',
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: '800',
                color: '#0D9488',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              <ShieldCheck size={14} color="#0D9488" />
              <span>AUDITED GLOBAL ELECTRONICS SECURITY & ESD COMPLIANCE</span>
            </div>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '800',
                color: '#082653',
                margin: '0 0 10px',
              }}
            >
              Global Electronics Quality & Asset Security Matrix
            </h2>
            <p
              style={{
                fontSize: '14px',
                color: '#64748B',
                maxWidth: '640px',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
            >
              Our dedicated technology freight networks and cleanroom logistics hubs operate in strict alignment with international security, electrostatic, and regulatory mandates.
            </p>
          </div>

          {/* 6 Perfectly Aligned Cards in 3x2 Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
          >
            {techComplianceMatrix.map((item, idx) => {
              const IconComp = getComplianceIcon(idx);
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '24px',
                    boxShadow: '0 4px 16px rgba(8, 38, 83, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = '#0D9488';
                    e.currentTarget.style.boxShadow = '0 14px 28px rgba(13, 148, 136, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(8, 38, 83, 0.04)';
                  }}
                >
                  <div>
                    {/* Top Bar: Icon on Left, Status Pill on Right (Never Collides With Title!) */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '14px',
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: 'rgba(13, 148, 136, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#0D9488',
                        }}
                      >
                        <IconComp size={18} />
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          padding: '4px 10px',
                          borderRadius: '20px',
                          background: 'rgba(13, 148, 136, 0.08)',
                          border: '1px solid rgba(20, 184, 166, 0.35)',
                          color: '#0F766E',
                          fontSize: '11px',
                          fontWeight: '800',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <Check size={12} strokeWidth={3} color="#0D9488" />
                        <span>{item.status}</span>
                      </div>
                    </div>

                    {/* Standard Title (Full Width with Consistent Height for Symmetrical Baseline) */}
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: '800',
                        color: '#082653',
                        lineHeight: '1.35',
                        margin: '0 0 12px',
                        minHeight: '44px',
                        display: 'flex',
                        alignItems: 'flex-start',
                      }}
                    >
                      {item.standard}
                    </h3>

                    {/* High-Tech Scope Pill */}
                    <div
                      style={{
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        marginBottom: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '800',
                          color: '#64748B',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}
                      >
                        Scope:
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          color: '#0D9488',
                          lineHeight: '1.2',
                        }}
                      >
                        {item.scope}
                      </span>
                    </div>

                    {/* Audited Requirement Description */}
                    <p
                      style={{
                        fontSize: '12.5px',
                        color: '#475569',
                        lineHeight: '1.55',
                        margin: '0 0 18px',
                      }}
                    >
                      {item.requirement}
                    </p>
                  </div>

                  {/* Card Bottom: Audit Cycle & Status Footer */}
                  <div
                    style={{
                      borderTop: '1px solid #F1F5F9',
                      paddingTop: '12px',
                      marginTop: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#64748B', fontWeight: '600' }}>
                      <Clock size={12} color="#0D9488" />
                      <span>{item.auditCycle}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#059669', fontWeight: '800' }}>
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#10B981',
                          boxShadow: '0 0 6px rgba(16, 185, 129, 0.6)',
                          display: 'inline-block',
                        }}
                      />
                      <span>COMPLIANT</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: REAL-WORLD TECH CASE STUDIES (3 CARDS)
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
                color: '#0D9488',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              <Activity size={14} color="#0D9488" />
              <span>PROVEN HIGH-TECH FIELD RESULTS</span>
            </div>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '800',
                color: '#082653',
                margin: 0,
              }}
            >
              Real-World High-Tech Case Studies & Deployment Metrics
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {techCaseStudies.map((study, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '24px',
                  boxShadow: '0 8px 24px rgba(8, 38, 83, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#0D9488';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(13, 148, 136, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(8, 38, 83, 0.04)';
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', color: '#0D9488', fontWeight: '800', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    {study.client}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#082653', margin: '8px 0 10px', lineHeight: '1.35', minHeight: '44px' }}>
                    {study.headline}
                  </h3>
                  <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.55', margin: '0 0 20px' }}>
                    <strong style={{ color: '#082653' }}>Challenge:</strong> {study.challenge}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      background: '#F0FDFA',
                      border: '1px solid #99F6E4',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      marginBottom: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#0F766E',
                      fontSize: '12px',
                      fontWeight: '800',
                    }}
                  >
                    <Activity size={14} color="#0D9488" />
                    <span>{study.metric}</span>
                  </div>

                  <div
                    style={{
                      fontSize: '11.5px',
                      color: '#1E293B',
                      background: '#F8FAFC',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      lineHeight: '1.45',
                    }}
                  >
                    <strong style={{ color: '#082653' }}>Execution:</strong> {study.solution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: STANDARDS & ACCREDITATIONS (LUXURY DEEP NAVY STRIP)
            ========================================================================= */}
        <section
          style={{
            margin: '48px 24px 0',
            background: 'linear-gradient(135deg, #031B2E 0%, #082653 100%)',
            borderRadius: '16px',
            padding: '28px 36px',
            color: '#FFFFFF',
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
              <div style={{ fontSize: '11px', color: '#2DD4BF', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                CERTIFIED HIGH-TECH LOGISTICS NETWORK
              </div>
              <div style={{ fontSize: '18px', fontWeight: '800', marginTop: '4px' }}>
                Accredited Under Global Technology Security & Cleanroom Standards
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {techStandards.map((std, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(45, 212, 191, 0.3)',
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#E0F2FE',
                  }}
                >
                  <CheckCircle2 size={13} color="#2DD4BF" />
                  <span>{std}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: INTERACTIVE FAQ ACCORDION
            ========================================================================= */}
        <section
          style={{
            margin: '48px 24px 0',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(8, 38, 83, 0.04)',
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
                color: '#0D9488',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              <Zap size={14} color="#0D9488" />
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
              Technology & Cleanroom Electronics Freight Inquiries
            </h2>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {techFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: '12px',
                    border: isOpen ? '1px solid #0D9488' : '1px solid #E2E8F0',
                    background: isOpen ? '#F0FDFA' : '#FAFBFD',
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
                        background: isOpen ? '#0D9488' : '#E2E8F0',
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
                        borderTop: '1px solid rgba(13, 148, 136, 0.15)',
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
            SECTION 10: BOTTOM HIGH-IMPACT EXECUTIVE CTA BANNER
            ========================================================================= */}
        <section
          style={{
            margin: '48px 24px 0',
            background: 'linear-gradient(135deg, #031B2E 0%, #082653 50%, #064E3B 100%)',
            color: '#FFFFFF',
            borderRadius: '16px',
            padding: '48px 40px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(8, 38, 83, 0.25)',
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
              background: 'radial-gradient(circle, rgba(13, 148, 136, 0.25) 0%, transparent 70%)',
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
                  color: '#99F6E4',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                <ShieldCheck size={14} color="#2DD4BF" />
                <span>INTEGRATE YOUR HIGH-TECH SUPPLY CHAIN</span>
              </div>
              <h2
                style={{
                  fontSize: '28px',
                  fontWeight: '800',
                  margin: '0 0 10px',
                  color: '#FFFFFF',
                }}
              >
                Ready to Safeguard Your High-Value Technology Supply Chain?
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#CBD5E1',
                  margin: 0,
                }}
              >
                Speak directly with an enterprise technology logistics director to conduct an ESD cleanroom audit, arrange TAPA Level-1 armed escorts, or establish tarmac-direct air freight corridors.
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
                <span>Request Custom Tech SLA</span>
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
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '700',
                  border: '1px solid rgba(45, 212, 191, 0.35)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.borderColor = '#2DD4BF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.35)';
                }}
              >
                <Radio size={15} color="#2DD4BF" />
                <span>Track High-Value Tech Cargo</span>
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

export default TechnologyElectronics;
