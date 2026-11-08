import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  chemicalHeroStats,
  chemicalHazmatClasses,
  chemicalTransportModes,
  chemicalVolumeScales,
  chemicalPillars,
  chemicalGallery,
  chemicalComplianceMatrix,
  chemicalCaseStudies,
  chemicalStandards,
  chemicalFaqs
} from '../data/chemicalCargoData';
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
  Search,
  SlidersHorizontal,
  Check,
  CheckCheck,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  Building,
  Radio,
  FileCheck2,
  RefreshCw
} from 'lucide-react';

export const ChemicalCargoHandling = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  // Simulator State
  const [selectedClassId, setSelectedClassId] = useState('class-3-flammable');
  const [selectedModeId, setSelectedModeId] = useState('mode-iso-tank');
  const [selectedVolId, setSelectedVolId] = useState('vol-campaign');
  const [simulatorToast, setSimulatorToast] = useState(null);

  // Gallery Active Filter
  const [galleryFilter, setGalleryFilter] = useState('all');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const selectedClass =
    chemicalHazmatClasses.find((c) => c.id === selectedClassId) || chemicalHazmatClasses[0];
  const selectedMode =
    chemicalTransportModes.find((m) => m.id === selectedModeId) || chemicalTransportModes[0];
  const selectedVol =
    chemicalVolumeScales.find((v) => v.id === selectedVolId) || chemicalVolumeScales[1];

  const handleGenerateProtocol = () => {
    setSimulatorToast({
      id: `CHEM-SAFETY-${Math.floor(100000 + Math.random() * 900000)}`,
      chemicalClass: selectedClass.name.split(':')[0],
      containment: selectedClass.containment,
      volume: selectedVol.label,
      responseTier: selectedVol.responseWindow,
      benefit: selectedVol.protocolBenefit,
    });
  };

  const filteredGallery =
    galleryFilter === 'all'
      ? chemicalGallery
      : chemicalGallery.filter((item) =>
          item.category.toLowerCase().includes(galleryFilter.toLowerCase())
        );

  return (
    <div
      className="chemical-cargo-page-root"
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
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="chemical-cargo-handling"
        onNavigate={onNavigate}
      />

      <main style={{ position: 'relative' }}>
        {/* Symmetrical Top Space Between Navbar and Hero Banner */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />

        {/* =========================================================================
            SECTION 1: HERO BANNER (Luxury Deep Navy with Chemical Emerald Ambient Glow)
            ========================================================================= */}
        <section
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #061836 0%, #082653 45%, #033220 100%)',
            color: '#FFFFFF',
            borderRadius: '16px',
            margin: '0 24px',
            padding: '56px 48px 48px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(8, 38, 83, 0.25)',
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
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(5, 150, 105, 0.12) 45%, transparent 70%)',
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
              background: 'radial-gradient(circle, rgba(2, 132, 199, 0.18) 0%, transparent 65%)',
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
              gridTemplateColumns: '1.25fr 0.75fr',
              gap: '36px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Hero Content */}
            <div>
              {/* Eyebrow Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '30px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.45)',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#34D399',
                    boxShadow: '0 0 10px #34D399',
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#A7F3D0',
                  }}
                >
                  ENTERPRISE LOGISTICS • INDUSTRY FOCUS: CHEMICAL CARGO HANDLING
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '38px',
                  lineHeight: '1.2',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  margin: '0 0 16px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                Certified Chemical Cargo Logistics & ISO Tank Intermodal Operations
              </h1>

              {/* Sub-headline */}
              <p
                style={{
                  fontSize: '15.5px',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.88)',
                  margin: '0 0 28px 0',
                  fontWeight: '400',
                }}
              >
                Engineered safety across global chemical supply chains with 4,200+ dedicated ISO tanks, 99.99% incident-free safety records, and 100% IMDG / ADR / IATA regulatory audit compliance. Zero contamination. Zero transit delays.
              </p>

              {/* Action Buttons & Trust Accents */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '28px',
                }}
              >
                <button
                  onClick={() => openModal('quote')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '13px 26px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 6px 18px rgba(234, 88, 12, 0.35)',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <span>Request Chemical Cargo Quote</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href="#chemical-simulator-section"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '13px 22px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
                >
                  <SlidersHorizontal size={14} color="#34D399" />
                  <span>Configure Hazmat Containment</span>
                </a>
              </div>

              {/* Verified Trust Strip */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.75)',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={15} color="#34D399" />
                  <span>IMDG, ADR & IATA DGR Certified</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <AlertTriangle size={15} color="#FBBF24" />
                  <span>24/7 Global ChemTel Response</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FlaskConical size={15} color="#38BDF8" />
                  <span>T11 - T50 ISO Tank Equipment</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase Frame */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
                  background: '#0B192C',
                }}
              >
                <img
                  src="/industrial.jpg"
                  alt="Industrial Chemical Plant & ISO Tank Staging"
                  style={{
                    width: '100%',
                    height: '340px',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'brightness(0.95)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(6, 24, 54, 0.9) 0%, rgba(6, 24, 54, 0.2) 60%, transparent 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Overlay Badge 1: Top Right */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(6, 24, 54, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(16, 185, 129, 0.45)',
                    borderRadius: '10px',
                    padding: '8px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <FlaskConical size={14} color="#34D399" />
                  <div>
                    <div style={{ fontSize: '10px', color: '#94A3B8', fontWeight: '600', textTransform: 'uppercase' }}>
                      Fleet Capacity
                    </div>
                    <div style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: '800' }}>
                      4,200+ ISO Tanks
                    </div>
                  </div>
                </div>

                {/* Overlay Badge 2: Bottom Floating Bar */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'rgba(8, 38, 83, 0.92)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: 'rgba(16, 185, 129, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ShieldCheck size={18} color="#10B981" />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '600' }}>
                        Safety Record
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: '800', color: '#FFFFFF' }}>
                        99.99% Incident-Free
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      background: 'rgba(16, 185, 129, 0.2)',
                      color: '#34D399',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                    }}
                  >
                    SQAS Audited
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: LIVE KPI METRICS BAR (4 Clean Cards Across Container)
            ========================================================================= */}
        <section style={{ margin: '24px 24px 0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
            }}
          >
            {chemicalHeroStats.map((stat, sIdx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={sIdx}
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '20px 22px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = stat.accent;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 10px 24px ${stat.accent}18`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {stat.label}
                    </span>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: `${stat.accent}12`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComp size={16} color={stat.accent} />
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '28px',
                        fontWeight: '800',
                        color: '#082653',
                        fontFamily: 'Georgia, serif',
                        lineHeight: '1.1',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '4px', fontWeight: '500' }}>
                      {stat.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: INTERACTIVE CHEMICAL FLEET & CONTAINMENT SIMULATOR
            ========================================================================= */}
        <section
          id="chemical-simulator-section"
          style={{
            margin: '36px 24px 0 24px',
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '16px',
            padding: '36px 32px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 32px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#059669',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}
            >
              <FlaskConical size={14} />
              <span>Interactive Hazmat Containment Simulator</span>
            </div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '30px',
                fontWeight: '700',
                color: '#082653',
                margin: '0 0 10px 0',
              }}
            >
              Configure Chemical Vessel Containment & Safety Protocols
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
              Select your substance hazard classification, specialized fleet configuration, and movement scale to project emergency response tiers, thermal stabilization windows, and regulatory compliance protocols.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: '32px',
              alignItems: 'start',
            }}
          >
            {/* Left Column: Interactive Selectors */}
            <div>
              {/* Step 1: Select Hazmat Class */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#082653', marginBottom: '10px' }}>
                  Step 1: Select Substance Classification & Containment Specification
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                  {chemicalHazmatClasses.map((item) => {
                    const isSelected = item.id === selectedClassId;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedClassId(item.id)}
                        style={{
                          padding: '14px 16px',
                          borderRadius: '10px',
                          border: isSelected ? '2px solid #059669' : '1px solid #E2E8F0',
                          background: isSelected ? 'rgba(5, 150, 105, 0.05)' : '#FAFBFD',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span
                            style={{
                              fontSize: '10.5px',
                              fontWeight: '700',
                              padding: '2px 8px',
                              borderRadius: '9999px',
                              background: item.badgeBg,
                              color: item.badgeColor,
                              border: `1px solid ${item.badgeColor}35`,
                            }}
                          >
                            {item.badge}
                          </span>
                          {isSelected && <Check size={14} color="#059669" strokeWidth={3} />}
                        </div>
                        <div style={{ fontSize: '13.5px', fontWeight: '800', color: '#082653' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '4px' }}>
                          {item.classCode}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Transport Mode */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#082653', marginBottom: '10px' }}>
                  Step 2: Select Dedicated Hazmat Fleet & Thermal Configuration
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {chemicalTransportModes.map((mode) => {
                    const isSelected = mode.id === selectedModeId;
                    return (
                      <div
                        key={mode.id}
                        onClick={() => setSelectedModeId(mode.id)}
                        style={{
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: isSelected ? '2px solid #059669' : '1px solid #E2E8F0',
                          background: isSelected ? '#ECFDF5' : '#FFFFFF',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: '700', color: isSelected ? '#065F46' : '#0F172A' }}>
                            {mode.name}
                          </div>
                          <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '2px' }}>
                            {mode.desc}
                          </div>
                        </div>
                        <span style={{ fontSize: '11px', fontWeight: '700', color: '#059669', whiteSpace: 'nowrap' }}>
                          {mode.safetyGrade}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Movement Scale */}
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#082653', marginBottom: '10px' }}>
                  Step 3: Select Chemical Volume Scale
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                  {chemicalVolumeScales.map((vol) => {
                    const isSelected = vol.id === selectedVolId;
                    return (
                      <div
                        key={vol.id}
                        onClick={() => setSelectedVolId(vol.id)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: isSelected ? '2px solid #082653' : '1px solid #E2E8F0',
                          background: isSelected ? '#082653' : '#FFFFFF',
                          color: isSelected ? '#FFFFFF' : '#0F172A',
                          cursor: 'pointer',
                          textAlign: 'center',
                        }}
                      >
                        <div style={{ fontSize: '12px', fontWeight: '700' }}>{vol.label}</div>
                        <div style={{ fontSize: '11px', color: isSelected ? '#93C5FD' : '#64748B', marginTop: '3px' }}>
                          {vol.volumeCapacity}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Calculated Cockpit Output Card */}
            <div
              style={{
                background: '#FAFBFD',
                border: '1.5px solid #CBD5E1',
                borderRadius: '14px',
                padding: '28px 24px',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: '#059669',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                    Calculated Hazmat Specification
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: '#082653' }}>
                    {selectedClass.name}
                  </div>
                </div>
              </div>

              {/* Metric Breakdown Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: '600' }}>Containment Vessel:</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#0F172A' }}>{selectedClass.containment}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: '600' }}>Thermal Stability:</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#0284C7' }}>{selectedClass.tempStability}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: '600' }}>Safety Rating:</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#059669' }}>{selectedMode.safetyGrade}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 12px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: '600' }}>Campaign Benefit:</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#EA580C' }}>{selectedVol.protocolBenefit}</span>
                </div>
              </div>

              {/* Key Features List */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#082653', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Mandatory Hazmat Protocols
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {selectedClass.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#334155', lineHeight: '1.4' }}>
                      <CheckCircle2 size={14} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleGenerateProtocol}
                style={{
                  width: '100%',
                  padding: '13px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(234, 88, 12, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <span>Generate Hazmat Safety Protocol</span>
                <ArrowRight size={15} />
              </button>

              {/* Generated Toast Notification */}
              {simulatorToast && (
                <div
                  style={{
                    marginTop: '16px',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: '#ECFDF5',
                    border: '1px solid #10B981',
                    fontSize: '12px',
                    color: '#065F46',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <strong>Ref #{simulatorToast.id}:</strong> Approved for {simulatorToast.chemicalClass} ({simulatorToast.volume}).
                  </div>
                  <button
                    onClick={() => setSimulatorToast(null)}
                    style={{ background: 'none', border: 'none', color: '#047857', cursor: 'pointer' }}
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: 4 CORE TECHNICAL CHEMICAL PILLARS (WITH IMAGES & METRICS)
            ========================================================================= */}
        <section style={{ margin: '36px 24px 0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 32px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#059669',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}
            >
              <ShieldCheck size={14} />
              <span>Engineered Chemical Capabilities</span>
            </div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '30px',
                fontWeight: '700',
                color: '#082653',
                margin: '0 0 10px 0',
              }}
            >
              Enterprise Hazmat Infrastructure & Safety Systems
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
              Specialized intermodal equipment, dangerous goods governance desks, active thermal stabilizers, and 24/7 spill defense.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {chemicalPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = pillar.accentColor;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = `0 14px 30px ${pillar.accentColor}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div>
                    {/* Pillar Card Image Banner */}
                    <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(8, 38, 83, 0.85) 0%, transparent 60%)',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          background: 'rgba(8, 38, 83, 0.85)',
                          backdropFilter: 'blur(8px)',
                          borderRadius: '6px',
                          padding: '4px 10px',
                          fontSize: '11px',
                          fontWeight: '700',
                          color: '#FFFFFF',
                          border: `1px solid ${pillar.accentColor}60`,
                        }}
                      >
                        {pillar.badgeText}
                      </div>
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          right: '12px',
                          background: '#FFFFFF',
                          borderRadius: '6px',
                          padding: '3px 8px',
                          fontSize: '11px',
                          fontWeight: '800',
                          color: pillar.accentColor,
                        }}
                      >
                        {pillar.metric}
                      </div>
                    </div>

                    {/* Pillar Content Body */}
                    <div style={{ padding: '22px 20px 14px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <div
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '6px',
                            background: `${pillar.accentColor}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconComp size={15} color={pillar.accentColor} />
                        </div>
                        <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#082653', margin: 0 }}>
                          {pillar.title}
                        </h3>
                      </div>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: pillar.accentColor, marginBottom: '10px' }}>
                        {pillar.tagline}
                      </div>
                      <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', marginBottom: '14px' }}>
                        {pillar.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        {pillar.points.map((pt, pIdx) => (
                          <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', fontSize: '12px', color: '#334155', lineHeight: '1.4' }}>
                            <Check size={13} color={pillar.accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Trigger */}
                  <div style={{ padding: '14px 20px 20px 20px' }}>
                    <button
                      onClick={() => openModal('quote')}
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '6px',
                        background: '#FAFBFD',
                        border: '1px solid #CBD5E1',
                        color: '#082653',
                        fontSize: '12.5px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = pillar.accentColor;
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.borderColor = pillar.accentColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#FAFBFD';
                        e.currentTarget.style.color = '#082653';
                        e.currentTarget.style.borderColor = '#CBD5E1';
                      }}
                    >
                      <span>Inquire About {pillar.title.split(' ')[0]}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: HIGH-RESOLUTION 8-CARD SHOWCASE GALLERY
            ========================================================================= */}
        <section style={{ margin: '36px 24px 0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 28px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#059669',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}
            >
              <FlaskConical size={14} />
              <span>Chemical Operations Showcase</span>
            </div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '30px',
                fontWeight: '700',
                color: '#082653',
                margin: '0 0 10px 0',
              }}
            >
              Chemical Cargo & Hazmat Infrastructure in Motion
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
              From ISO tank port storage terminals to ADR-certified highway tankers and analytical purity testing laboratories.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              marginBottom: '24px',
            }}
          >
            {[
              { id: 'all', label: 'All Operations' },
              { id: 'bulk', label: 'Bulk Liquids & Tanks' },
              { id: 'maritime', label: 'Maritime Dangerous Goods' },
              { id: 'highway', label: 'ADR Road Linehaul' },
              { id: 'testing', label: 'Testing & Telemetry' },
            ].map((tab) => {
              const active = galleryFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setGalleryFilter(tab.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    fontSize: '12.5px',
                    fontWeight: active ? '700' : '600',
                    background: active ? '#082653' : '#FFFFFF',
                    color: active ? '#FFFFFF' : '#475569',
                    border: active ? '1px solid #082653' : '1px solid #E2E8F0',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* 8-Card Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {filteredGallery.map((item, gIdx) => (
              <div
                key={gIdx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(15, 23, 42, 0.1)';
                  e.currentTarget.style.borderColor = '#059669';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(8, 38, 83, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      fontSize: '10.5px',
                      fontWeight: '700',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {item.category}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: '#FFFFFF',
                      color: '#059669',
                      fontSize: '10.5px',
                      fontWeight: '700',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {item.highlight}
                  </div>
                </div>

                <div style={{ padding: '16px 18px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#082653', margin: '0 0 6px 0' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.45', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: INTERNATIONAL DANGEROUS GOODS REGULATORY COMPLIANCE MATRIX
            ========================================================================= */}
        <section
          style={{
            margin: '36px 24px 0 24px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1.5px solid #E2E8F0',
            padding: '36px 32px',
            boxShadow: '0 6px 24px rgba(0, 0, 0, 0.03)',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 28px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#059669',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}
            >
              <ShieldCheck size={14} />
              <span>International Regulatory Protocols</span>
            </div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '28px',
                fontWeight: '700',
                color: '#082653',
                margin: '0 0 8px 0',
              }}
            >
              Global Dangerous Goods Compliance & Transport Standards
            </h2>
            <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
              How KPL meets and exceeds IMDG, ADR, US DOT 49 CFR, IATA DGR, and EFTCO clean tank standards worldwide.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {chemicalComplianceMatrix.map((item, cIdx) => (
              <div
                key={cIdx}
                style={{
                  background: '#FAFBFD',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.3fr 1.3fr',
                  gap: '18px',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={16} color="#059669" />
                  <span style={{ fontSize: '13.5px', fontWeight: '800', color: '#082653' }}>
                    {item.protocol}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: '10.5px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                    Regulatory Requirement:
                  </div>
                  <div style={{ fontSize: '12px', color: '#334155', marginTop: '2px', lineHeight: '1.4' }}>
                    {item.requirement}
                  </div>
                </div>
                <div style={{ borderLeft: '2px solid #059669', paddingLeft: '14px' }}>
                  <div style={{ fontSize: '10.5px', fontWeight: '700', color: '#059669', textTransform: 'uppercase' }}>
                    KPL Compliance Capability:
                  </div>
                  <div style={{ fontSize: '12px', color: '#065F46', marginTop: '2px', lineHeight: '1.4', fontWeight: '500' }}>
                    {item.kplCapability}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: REAL-WORLD CHEMICAL CASE STUDIES (3 CARDS)
            ========================================================================= */}
        <section style={{ margin: '36px 24px 0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 28px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#059669',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}
            >
              <Award size={14} />
              <span>Proven Industrial Safety</span>
            </div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '28px',
                fontWeight: '700',
                color: '#082653',
                margin: '0 0 8px 0',
              }}
            >
              Enterprise Chemical Supply Chain Case Studies
            </h2>
            <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
              Real-world accounts demonstrating drum-to-tank cost reductions, port DGD velocity, and semiconductor-grade purity maintenance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {chemicalCaseStudies.map((cs, csIdx) => (
              <div
                key={csIdx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1.5px solid #E2E8F0',
                  padding: '24px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'inline-block', fontSize: '11px', fontWeight: '700', color: '#059669', background: '#ECFDF5', padding: '3px 8px', borderRadius: '4px', marginBottom: '8px' }}>
                    {cs.scale}
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#082653', margin: '0 0 10px 0' }}>
                    {cs.client}
                  </h3>
                  <div style={{ fontSize: '12.5px', color: '#475569', marginBottom: '14px', lineHeight: '1.45' }}>
                    <strong>Challenge:</strong> {cs.challenge}
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#334155', marginBottom: '16px', lineHeight: '1.45' }}>
                    <strong>Solution:</strong> {cs.solution}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '14px' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#059669', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Verified Results:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {cs.results.map((r, rIdx) => (
                      <div key={rIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '600', color: '#0F172A' }}>
                        <CheckCheck size={14} color="#059669" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: STANDARDS & ACCREDITATIONS
            ========================================================================= */}
        <section
          style={{
            margin: '36px 24px 0 24px',
            background: '#FAFBFD',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            padding: '28px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#082653', margin: '0 0 6px 0' }}>
              Accredited Dangerous Goods Standards & Certifications
            </h3>
            <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>
              Certified global safety, emergency dispatch hotlines, and environmental management systems.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
            {chemicalStandards.map((std, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  padding: '16px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#082653' }}>{std.name}</div>
                <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '4px', lineHeight: '1.35' }}>
                  {std.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: INTERACTIVE FAQ ACCORDION
            ========================================================================= */}
        <section
          style={{
            margin: '36px 24px 0 24px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1.5px solid #E2E8F0',
            padding: '36px 32px',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 28px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#059669',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}
            >
              <span>Frequently Asked Questions</span>
            </div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '28px',
                fontWeight: '700',
                color: '#082653',
                margin: '0 0 8px 0',
              }}
            >
              Chemical Cargo & Dangerous Goods Inquiries
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '850px', margin: '0 auto' }}>
            {chemicalFaqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  style={{
                    border: '1px solid #E2E8F0',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    background: isOpen ? '#FAFBFD' : '#FFFFFF',
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : fIdx)}
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
                    }}
                  >
                    <span style={{ fontSize: '14.5px', fontWeight: '700', color: '#082653' }}>
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={16} color="#059669" /> : <ChevronDown size={16} color="#94A3B8" />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 20px 16px 20px', fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: BOTTOM EXECUTIVE CTA BANNER (WITH 24PX SYMMETRICAL CLEARANCE)
            ========================================================================= */}
        <section
          style={{
            margin: '36px 24px 0 24px',
            background: 'linear-gradient(135deg, #082653 0%, #033220 100%)',
            borderRadius: '16px',
            padding: '48px 36px',
            color: '#FFFFFF',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(8, 38, 83, 0.25)',
            borderBottom: '1px solid rgba(8, 38, 83, 0.12)',
          }}
        >
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '32px',
                fontWeight: '700',
                color: '#FFFFFF',
                margin: '0 0 14px 0',
              }}
            >
              Secure Your Chemical Cargo Supply Chain Today
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: '1.6',
                margin: '0 0 28px 0',
              }}
            >
              Deploy 4,200+ dedicated ISO tank containers with certified IMDG/ADR governance, 24/7 ChemTel emergency response, and active thermal stabilization worldwide.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => openModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 28px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 18px rgba(234, 88, 12, 0.35)',
                }}
              >
                <span>Request Custom Chemical Proposal</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => openModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  cursor: 'pointer',
                }}
              >
                <span>Download ISO Tank Fleet Specs</span>
              </button>
            </div>
          </div>
        </section>

        {/* Dedicated 24px Symmetrical Space Above Footer */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />
      </main>

      {/* Shared Global Link Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Interactive Quotation & Tracking Modal */}
      <TrackModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultType={modalType}
      />
    </div>
  );
};

export default ChemicalCargoHandling;

