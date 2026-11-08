import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  projectCargoHeroStats,
  heavyCargoCategories,
  projectSimulatorCargoOptions,
  projectSimulatorCorridors,
  projectCargoPillars,
  projectCargoCaseStudies,
  projectCargoStandards,
  projectCargoFaqs,
} from '../data/projectCargoData';
import {
  HardHat,
  Truck,
  Ship,
  Train,
  Zap,
  Wind,
  Flame,
  Pickaxe,
  Cog,
  Scan,
  Anchor,
  ShieldCheck,
  Award,
  Scale,
  CheckCircle2,
  Clock,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Check,
  AlertTriangle,
  FileText,
  Cpu,
  Layers,
  Compass,
  MapPin,
  Activity,
  Maximize2,
  Wrench,
  Building2,
  Radio,
} from 'lucide-react';

export const ProjectCargoLogistics = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  // Simulator State
  const [selectedCargoId, setSelectedCargoId] = useState('sim-transformer');
  const [selectedCorridorId, setSelectedCorridorId] = useState('corridor-inland-bridges');
  const [dossierToast, setDossierToast] = useState(null);

  // Active Category Tab
  const [activeCategoryTab, setActiveCategoryTab] = useState('power-energy');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const selectedCargo =
    projectSimulatorCargoOptions.find((c) => c.id === selectedCargoId) ||
    projectSimulatorCargoOptions[0];

  const selectedCorridor =
    projectSimulatorCorridors.find((c) => c.id === selectedCorridorId) ||
    projectSimulatorCorridors[1];

  const activeCategory =
    heavyCargoCategories.find((cat) => cat.id === activeCategoryTab) ||
    heavyCargoCategories[0];

  // Dynamic calculations based on cargo and corridor selection
  const calculatedPermitDays = Math.round(
    selectedCargo.basePermitDays * selectedCorridor.riskFactor
  );
  const dynamicFeasibilityScore = Math.max(
    86,
    Math.min(99, Math.round(100 - (100 - selectedCargo.complexityScore) * 0.45 * selectedCorridor.riskFactor))
  );

  const handleGenerateDossier = () => {
    setDossierToast({
      refNumber: `KPL-PC-${Math.floor(100000 + Math.random() * 900000)}`,
      cargoName: selectedCargo.name,
      corridorName: selectedCorridor.name,
      estimatedLead: `${calculatedPermitDays} Days`,
      feasibility: `${dynamicFeasibilityScore}%`,
    });
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('project-cargo-simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="project-cargo-page-root"
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
        currentRoute="kpl-project-cargo-logistics"
        onNavigate={onNavigate}
      />

      <main style={{ position: 'relative' }}>
        {/* Space between Nav Bar and Hero Banner */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />

        {/* =========================================================================
            SECTION 1: HERO BANNER (Executive Slate Navy with Industrial Amber / Gold Glow)
            ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '50px 32px 50px 32px',
            background: 'linear-gradient(145deg, #051A3B 0%, #082653 50%, #021226 100%)',
            borderTop: '1px solid rgba(8, 38, 83, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Ambient Radial Lighting */}
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-60px',
              width: '480px',
              height: '480px',
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-90px',
              left: '10%',
              width: '420px',
              height: '420px',
              background: 'radial-gradient(circle, rgba(234, 88, 12, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '1080px', margin: '0 auto' }}>
            {/* Top Eyebrow Tag matching the Mega Menu Card */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(245, 158, 11, 0.14)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '5px',
                  background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <HardHat size={12} strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#FDE68A',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Logistics Management • Specialized Project Cargo Logistics
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(32px, 3.8vw, 44px)',
                fontWeight: '700',
                color: '#FFFFFF',
                lineHeight: '1.15',
                letterSpacing: '-0.5px',
                marginBottom: '14px',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.45)',
              }}
            >
              KPL Project Cargo Logistics
            </h1>

            {/* Subtitle exact description from card + industrial engineering scope */}
            <p
              style={{
                fontSize: '17px',
                fontWeight: '400',
                color: 'rgba(255, 255, 255, 0.88)',
                lineHeight: '1.6',
                maxWidth: '820px',
                fontFamily: 'var(--font-body)',
                marginBottom: '26px',
              }}
            >
              Specialized logistics management for heavy industrial projects. We deliver turnkey out-of-gauge (OOG) heavy lift cargo, multimodal marine Ro-Ro barging, multi-axle SPMT transport, and millimeter-accurate hook-to-foundation installation with zero-loss safety.
            </p>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '38px' }}>
              <button
                onClick={() => openModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  padding: '12px 26px',
                  borderRadius: '10px',
                  fontSize: '14.5px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 18px rgba(234, 88, 12, 0.45)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 22px rgba(234, 88, 12, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(234, 88, 12, 0.45)';
                }}
              >
                <span>Request Project Lift & Route Study</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={scrollToSimulator}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  padding: '12px 22px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                  e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
                }}
              >
                <Compass size={16} color="#FBBF24" />
                <span>Simulate Route & Feasibility</span>
              </button>
            </div>

            {/* Hero Key Performance Metric Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '14px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              {projectCargoHeroStats.map((stat) => (
                <div
                  key={stat.id}
                  style={{
                    background: 'rgba(15, 23, 42, 0.45)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRadius: '12px',
                    padding: '16px 18px',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '25px',
                      fontWeight: '700',
                      color: '#FDE68A',
                      lineHeight: '1.1',
                      marginBottom: '4px',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '12.5px',
                      fontWeight: '600',
                      color: '#FFFFFF',
                      marginBottom: '3px',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      lineHeight: '1.35',
                    }}
                  >
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: INTERACTIVE ROUTE & HEAVY-LIFT FEASIBILITY SIMULATOR
            ========================================================================= */}
        <section
          id="project-cargo-simulator"
          style={{
            padding: '50px 32px',
            background: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#D97706',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                <Compass size={14} />
                <span>Heavy Lift Pre-Assessment Engine</span>
              </div>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(26px, 3.2vw, 34px)',
                  color: '#082653',
                  fontWeight: '700',
                  marginBottom: '10px',
                }}
              >
                Route Clearance & Engineering Feasibility Simulator
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#64748B',
                  maxWidth: '720px',
                  margin: '0 auto',
                  lineHeight: '1.6',
                }}
              >
                Test your oversized cargo specifications against real-world terrain constraints, bridge stress capacities, and specialized equipment configurations.
              </p>
            </div>

            {/* Simulator Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
                alignItems: 'start',
              }}
            >
              {/* Left Column: Input Selectors */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* 1. Cargo Selection */}
                <div
                  style={{
                    background: '#FAFBFD',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '20px',
                  }}
                >
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '700',
                      color: '#082653',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '12px',
                    }}
                  >
                    1. Select Industrial Cargo Profile
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {projectSimulatorCargoOptions.map((cargo) => {
                      const isSelected = cargo.id === selectedCargoId;
                      return (
                        <div
                          key={cargo.id}
                          onClick={() => setSelectedCargoId(cargo.id)}
                          style={{
                            padding: '12px 14px',
                            borderRadius: '10px',
                            background: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                            border: `2px solid ${isSelected ? '#D97706' : '#E2E8F0'}`,
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            boxShadow: isSelected ? '0 4px 12px rgba(217, 119, 6, 0.12)' : 'none',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '13.5px', fontWeight: '700', color: isSelected ? '#B45309' : '#0F172A' }}>
                              {cargo.name}
                            </div>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '700',
                                padding: '3px 8px',
                                borderRadius: '6px',
                                background: isSelected ? 'rgba(217, 119, 6, 0.15)' : '#E2E8F0',
                                color: isSelected ? '#B45309' : '#475569',
                              }}
                            >
                              {cargo.weight}
                            </span>
                          </div>
                          <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '4px' }}>
                            Dims: {cargo.dimensions} • Industry: {cargo.industry}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Corridor Selection */}
                <div
                  style={{
                    background: '#FAFBFD',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '20px',
                  }}
                >
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '700',
                      color: '#082653',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '12px',
                    }}
                  >
                    2. Select Transit Corridor & Terrain
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {projectSimulatorCorridors.map((corridor) => {
                      const isSelected = corridor.id === selectedCorridorId;
                      return (
                        <div
                          key={corridor.id}
                          onClick={() => setSelectedCorridorId(corridor.id)}
                          style={{
                            padding: '12px 14px',
                            borderRadius: '10px',
                            background: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                            border: `2px solid ${isSelected ? '#D97706' : '#E2E8F0'}`,
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            boxShadow: isSelected ? '0 4px 12px rgba(217, 119, 6, 0.12)' : 'none',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '13.5px', fontWeight: '700', color: isSelected ? '#B45309' : '#0F172A' }}>
                              {corridor.name}
                            </div>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '700',
                                padding: '3px 8px',
                                borderRadius: '6px',
                                background: isSelected ? 'rgba(217, 119, 6, 0.15)' : '#E2E8F0',
                                color: isSelected ? '#B45309' : '#475569',
                              }}
                            >
                              {corridor.distance}
                            </span>
                          </div>
                          <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '4px' }}>
                            {corridor.terrain}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Engineering Results */}
              <div
                style={{
                  background: 'linear-gradient(145deg, #051A3B 0%, #082653 100%)',
                  borderRadius: '16px',
                  padding: '28px',
                  color: '#FFFFFF',
                  boxShadow: '0 12px 32px rgba(8, 38, 83, 0.18)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'sticky',
                  top: '140px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(245, 158, 11, 0.2)',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FDE68A',
                      }}
                    >
                      <Activity size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#CBD5E1', letterSpacing: '0.06em' }}>
                        Engineering Output
                      </div>
                      <div style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF' }}>
                        Feasibility & Asset Matrix
                      </div>
                    </div>
                  </div>

                  {/* Feasibility Score Badge */}
                  <div
                    style={{
                      textAlign: 'right',
                      background: 'rgba(245, 158, 11, 0.15)',
                      border: '1px solid rgba(245, 158, 11, 0.4)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{ fontSize: '10px', color: '#FDE68A', textTransform: 'uppercase' }}>
                      Feasibility
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#FDE68A' }}>
                      {dynamicFeasibilityScore}%
                    </div>
                  </div>
                </div>

                {/* Key Outputs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '22px' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                      Recommended Prime Rigging Configuration
                    </div>
                    <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#FFFFFF' }}>
                      {selectedCargo.recommendedPlatform}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                      Required Route Engineering & Civil Prep
                    </div>
                    <div style={{ fontSize: '13px', color: '#E2E8F0', lineHeight: '1.45' }}>
                      {selectedCorridor.challenges}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px 12px', borderRadius: '8px' }}>
                      <div style={{ fontSize: '10.5px', color: '#94A3B8' }}>Est. Permitting Window</div>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#FDE68A', marginTop: '2px' }}>
                        {calculatedPermitDays} Days
                      </div>
                    </div>
                    <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px 12px', borderRadius: '8px' }}>
                      <div style={{ fontSize: '10.5px', color: '#94A3B8' }}>Survey Protocol</div>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: '#FFFFFF', marginTop: '2px' }}>
                        3D LiDAR Scan
                      </div>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '12px 14px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                      Cargo Special Handling
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#CBD5E1', lineHeight: '1.4' }}>
                      {selectedCargo.handlingPoints}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <button
                  onClick={handleGenerateDossier}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                    color: '#082653',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FileText size={16} />
                  <span>Generate Pre-Engineering Dossier</span>
                </button>

                {/* Generated Toast */}
                {dossierToast && (
                  <div
                    style={{
                      marginTop: '14px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      borderRadius: '8px',
                      padding: '12px',
                      fontSize: '12px',
                      color: '#A7F3D0',
                      lineHeight: '1.45',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700', marginBottom: '3px' }}>
                      <CheckCircle2 size={14} />
                      <span>Dossier Reference Generated:</span>
                    </div>
                    <div>Ref: <strong style={{ color: '#FFFFFF' }}>{dossierToast.refNumber}</strong></div>
                    <div>Permit & Route Mobilization: <strong style={{ color: '#FFFFFF' }}>{dossierToast.estimatedLead}</strong></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: HEAVY INDUSTRIAL SECTORS & BREAKBULK SPECIALIZATIONS
            ========================================================================= */}
        <section
          style={{
            padding: '50px 32px',
            background: '#FAFBFD',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#D97706',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                <Layers size={14} />
                <span>Sector-Specific Engineering</span>
              </div>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(26px, 3.2vw, 34px)',
                  color: '#082653',
                  fontWeight: '700',
                  marginBottom: '10px',
                }}
              >
                Heavy Industries We Mobilize Globally
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#64748B',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.6',
                }}
              >
                Every heavy industrial sector imposes distinct structural, metallurgical, and transport geometry constraints. Explore our specialized project cargo solutions.
              </p>
            </div>

            {/* Sector Tabs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
                marginBottom: '28px',
              }}
            >
              {heavyCargoCategories.map((cat) => {
                const isActive = cat.id === activeCategoryTab;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryTab(cat.id)}
                    style={{
                      padding: '10px 18px',
                      borderRadius: '9999px',
                      fontSize: '13px',
                      fontWeight: '600',
                      border: `1px solid ${isActive ? cat.accentColor : '#E2E8F0'}`,
                      background: isActive ? cat.accentColor : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#475569',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                    }}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>

            {/* Active Tab Detailed Card */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '32px',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
                {/* Left: Description & Specs */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div
                      style={{
                        padding: '8px',
                        borderRadius: '8px',
                        background: activeCategory.bgLight,
                        color: activeCategory.accentColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {activeCategory.id === 'power-energy' && <Zap size={20} />}
                      {activeCategory.id === 'renewables-wind' && <Wind size={20} />}
                      {activeCategory.id === 'oil-gas' && <Flame size={20} />}
                      {activeCategory.id === 'mining-metals' && <Pickaxe size={20} />}
                      {activeCategory.id === 'infrastructure-rail' && <Train size={20} />}
                      {activeCategory.id === 'industrial-machinery' && <Cog size={20} />}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#082653', margin: 0 }}>
                        {activeCategory.title}
                      </h3>
                      <span style={{ fontSize: '13px', color: activeCategory.accentColor, fontWeight: '600' }}>
                        {activeCategory.tagline}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', margin: '14px 0 20px 0' }}>
                    {activeCategory.description}
                  </p>

                  <h4 style={{ fontSize: '12.5px', fontWeight: '700', color: '#082653', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                    Engineering & Transit Criteria:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {activeCategory.keySpecs.map((spec, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#334155' }}>
                        <Check size={16} color={activeCategory.accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Sample Equipment Moved */}
                <div
                  style={{
                    background: '#FAFBFD',
                    borderRadius: '12px',
                    border: `1px solid ${activeCategory.borderColor}`,
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#082653', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                      Representative Project Cargo Units
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {activeCategory.sampleUnits.map((unit, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            borderRadius: '8px',
                            padding: '12px 14px',
                            fontSize: '13.5px',
                            fontWeight: '600',
                            color: '#0F172A',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          <HardHat size={15} color={activeCategory.accentColor} />
                          <span>{unit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: '22px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
                    <button
                      onClick={() => openModal('quote')}
                      style={{
                        width: '100%',
                        padding: '11px',
                        borderRadius: '8px',
                        background: activeCategory.accentColor,
                        color: '#FFFFFF',
                        border: 'none',
                        fontSize: '13.5px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                    >
                      <span>Inquire About {activeCategory.title}</span>
                      <ChevronRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: THE 5-STAGE TURNKEY ENGINEERING LIFECYCLE
            ========================================================================= */}
        <section
          style={{
            padding: '50px 32px',
            background: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#D97706',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                <Cpu size={14} />
                <span>The Heavy Lift Methodology</span>
              </div>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(26px, 3.2vw, 34px)',
                  color: '#082653',
                  fontWeight: '700',
                  marginBottom: '10px',
                }}
              >
                5-Stage Turnkey Project Engineering Lifecycle
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#64748B',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.6',
                }}
              >
                From initial 3D LiDAR route mapping to foundation set-down, our certified heavy-lift engineers oversee every critical path with zero-loss discipline.
              </p>
            </div>

            {/* Stages Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {projectCargoPillars.map((pillar) => (
                <div
                  key={pillar.step}
                  style={{
                    background: '#FAFBFD',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '24px 28px',
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '20px',
                    alignItems: 'center',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = pillar.color;
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Step Number Badge */}
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '12px',
                        background: 'rgba(8, 38, 83, 0.05)',
                        border: `1.5px solid ${pillar.color}`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                      }}
                    >
                      <span style={{ fontSize: '10px', fontWeight: '700', color: '#64748B' }}>STAGE</span>
                      <span style={{ fontSize: '18px', fontWeight: '800', color: pillar.color, lineHeight: '1.1' }}>
                        {pillar.step}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#082653', margin: 0 }}>
                        {pillar.title}
                      </h3>
                      <span
                        style={{
                          fontSize: '11.5px',
                          fontWeight: '600',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: 'rgba(8, 38, 83, 0.06)',
                          color: '#475569',
                        }}
                      >
                        {pillar.subtitle}
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px', marginTop: '10px' }}>
                      {pillar.points.map((pt, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '13px', color: '#475569', lineHeight: '1.45' }}>
                          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: pillar.color, marginTop: '7px', flexShrink: 0 }} />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: ENTERPRISE PROJECT CASE STUDIES
            ========================================================================= */}
        <section
          style={{
            padding: '50px 32px',
            background: '#FAFBFD',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#D97706',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                <Award size={14} />
                <span>Proven Mobilizations</span>
              </div>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(26px, 3.2vw, 34px)',
                  color: '#082653',
                  fontWeight: '700',
                  marginBottom: '10px',
                }}
              >
                Real-World Mega Project Benchmarks
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#64748B',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.6',
                }}
              >
                Verified project cargo deliveries executed across petrochemical refineries, offshore wind parks, and metropolitan subway networks.
              </p>
            </div>

            {/* Case Studies Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
              {projectCargoCaseStudies.map((study) => (
                <div
                  key={study.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 23, 42, 0.09)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.04)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          color: '#D97706',
                          background: 'rgba(217, 119, 6, 0.1)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                        }}
                      >
                        {study.clientType}
                      </span>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '16px', fontWeight: '800', color: '#082653', lineHeight: '1' }}>
                          {study.metricValue}
                        </div>
                        <div style={{ fontSize: '10px', color: '#64748B' }}>{study.metricLabel}</div>
                      </div>
                    </div>

                    <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#082653', marginBottom: '8px' }}>
                      {study.projectTitle}
                    </h3>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748B', marginBottom: '12px' }}>
                      <MapPin size={13} color="#D97706" />
                      <span>{study.location}</span>
                    </div>

                    <div style={{ background: '#FAFBFD', padding: '10px 12px', borderRadius: '8px', fontSize: '12.5px', color: '#334155', lineHeight: '1.45', marginBottom: '14px', border: '1px solid #F1F5F9' }}>
                      <strong>Scope:</strong> {study.cargoScope}
                    </div>

                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.55', marginBottom: '16px' }}>
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#082653', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Verified Results:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {study.results.map((res, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#166534' }}>
                          <CheckCircle2 size={13} color="#16A34A" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: HSE STANDARDS & REGULATORY ACCREDITATIONS
            ========================================================================= */}
        <section
          style={{
            padding: '42px 32px',
            background: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {projectCargoStandards.map((std, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FAFBFD',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(217, 119, 6, 0.12)',
                      color: '#D97706',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {std.icon === 'Award' && <Award size={18} />}
                    {std.icon === 'ShieldCheck' && <ShieldCheck size={18} />}
                    {std.icon === 'CheckCircle2' && <CheckCircle2 size={18} />}
                    {std.icon === 'Scale' && <Scale size={18} />}
                  </div>
                  <h4 style={{ fontSize: '14.5px', fontWeight: '700', color: '#082653', margin: 0 }}>
                    {std.title}
                  </h4>
                  <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.45', margin: 0 }}>
                    {std.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: TECHNICAL FAQ ACCORDION
            ========================================================================= */}
        <section
          style={{
            padding: '50px 32px',
            background: '#FAFBFD',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#D97706',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                <FileText size={14} />
                <span>Heavy Transport Knowledge Base</span>
              </div>
              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  color: '#082653',
                  fontWeight: '700',
                  marginBottom: '10px',
                }}
              >
                Frequently Asked Technical Questions
              </h2>
              <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: '1.5' }}>
                Key technical and regulatory insights into out-of-gauge permits, bridge engineering, and multi-modal project cargo mobilization.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {projectCargoFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: '#FFFFFF',
                      border: `1px solid ${isOpen ? '#D97706' : '#E2E8F0'}`,
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'border-color 0.15s ease',
                    }}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        background: 'none',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '14px',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ fontSize: '14.5px', fontWeight: '700', color: '#082653' }}>
                        {faq.question}
                      </span>
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: isOpen ? 'rgba(217, 119, 6, 0.15)' : '#F1F5F9',
                          color: isOpen ? '#D97706' : '#64748B',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: '0 20px 18px 20px',
                          fontSize: '13.5px',
                          color: '#475569',
                          lineHeight: '1.6',
                          borderTop: '1px solid #F1F5F9',
                          paddingTop: '12px',
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: BOTTOM EXECUTIVE CTA BANNER
            ========================================================================= */}
        <section
          style={{
            padding: '50px 32px',
            background: 'linear-gradient(135deg, #051A3B 0%, #082653 100%)',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid rgba(8, 38, 83, 0.12)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '320px',
              height: '320px',
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 12px',
                borderRadius: '9999px',
                background: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                fontSize: '11.5px',
                fontWeight: '700',
                color: '#FDE68A',
                marginBottom: '14px',
                textTransform: 'uppercase',
              }}
            >
              <HardHat size={13} />
              <span>Turnkey Industrial Project Execution</span>
            </div>

            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(26px, 3.4vw, 36px)',
                fontWeight: '700',
                color: '#FFFFFF',
                marginBottom: '14px',
                lineHeight: '1.2',
              }}
            >
              Planning an Out-of-Gauge Industrial Movement?
            </h2>

            <p
              style={{
                fontSize: '15.5px',
                color: 'rgba(255, 255, 255, 0.85)',
                maxWidth: '680px',
                margin: '0 auto 28px auto',
                lineHeight: '1.6',
              }}
            >
              From early FEED route surveys and bridge stress simulations to millimeter-precise foundation placement, KPL mobilizes heavy capital equipment on time and with zero-loss safety.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
              <button
                onClick={() => openModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  padding: '13px 28px',
                  borderRadius: '10px',
                  fontSize: '14.5px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 18px rgba(234, 88, 12, 0.45)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Request Technical Lift & Haul Proposal</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => openModal('track')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  padding: '13px 24px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <Radio size={15} color="#FBBF24" />
                <span>Track Active Project Shipment</span>
              </button>
            </div>
          </div>
        </section>

        {/* Space between Bottom Banner and Footer */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />
      </main>

      {/* 8. Shared Global Link Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Shared Track & Quote Modal */}
      <TrackModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
};

