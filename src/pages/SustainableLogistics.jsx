import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  sustainableHeroStats,
  carbonCalculatorModes,
  carbonCalculatorVolumes,
  carbonCalculatorStrategies,
  sustainablePillars,
  comparativeGreenMatrix,
  sustainableCaseStudies,
  sustainableAccreditations,
  sustainableFaqs,
} from '../data/sustainableLogisticsData';
import {
  Leaf,
  Globe,
  Truck,
  Ship,
  Plane,
  Zap,
  Award,
  ShieldCheck,
  Scale,
  CheckCircle2,
  Clock,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Check,
  FileText,
  Layers,
  Activity,
  BarChart3,
  RefreshCw,
  Sun,
  Recycle,
  TreePine,
  Droplets,
  Factory,
  Building2,
  Radio,
  Sliders,
} from 'lucide-react';

export const SustainableLogistics = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  // Carbon Calculator State
  const [selectedModeId, setSelectedModeId] = useState('mode-ocean');
  const [selectedVolumeId, setSelectedVolumeId] = useState('vol-md');
  const [selectedStrategyId, setSelectedStrategyId] = useState('strat-insetting');
  const [certToast, setCertToast] = useState(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const selectedMode =
    carbonCalculatorModes.find((m) => m.id === selectedModeId) ||
    carbonCalculatorModes[1];

  const selectedVolume =
    carbonCalculatorVolumes.find((v) => v.id === selectedVolumeId) ||
    carbonCalculatorVolumes[1];

  const selectedStrategy =
    carbonCalculatorStrategies.find((s) => s.id === selectedStrategyId) ||
    carbonCalculatorStrategies[1];

  // Calculations
  // Total baseline emissions in metric tons of CO2e
  const baselineTons = Math.round(
    (selectedVolume.tonKmMultiplier * selectedMode.baselineFactor) / 1000000
  );

  // Net reduction rate combination
  const combinedReductionRate = Math.min(
    1.0,
    selectedMode.reductionRate * (selectedStrategy.reductionMultiplier / 0.72)
  );

  const tonsAbated = Math.round(baselineTons * combinedReductionRate);
  const netEmissions = Math.max(0, baselineTons - tonsAbated);
  const percentSaved = Math.round((tonsAbated / (baselineTons || 1)) * 100);
  const equivalentTrees = Math.round(tonsAbated * 16.5);

  const handleGenerateCertificate = () => {
    setCertToast({
      certNumber: `KPL-ESG-${Math.floor(100000 + Math.random() * 900000)}`,
      mode: selectedMode.name,
      tier: selectedVolume.enterpriseTier,
      abated: `${tonsAbated.toLocaleString()} tCO₂e`,
      reductionPct: `${percentSaved}%`,
    });
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('carbon-calculator-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="sustainable-logistics-page-root"
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
        currentRoute="sustainable-logistics-systems"
        onNavigate={onNavigate}
      />

      <main style={{ position: 'relative' }}>
        {/* Space between Nav Bar and Hero Banner */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />

        {/* =========================================================================
            SECTION 1: HERO BANNER (Executive Slate Navy with Forest Emerald Glow)
            ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '50px 32px 50px 32px',
            background: 'linear-gradient(145deg, #041B2D 0%, #082653 50%, #031722 100%)',
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
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, transparent 70%)',
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
              background: 'radial-gradient(circle, rgba(5, 150, 105, 0.14) 0%, transparent 70%)',
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
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '5px',
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <Leaf size={12} strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#A7F3D0',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Logistics Management • Sustainable Logistics Systems
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
              Sustainable Logistics Systems
            </h1>

            {/* Subtitle exact description from card + ESG scope */}
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
              Carbon tracking and optimized routing models to reduce global emissions. Deploy ISO 14083 certified Scope 3 accounting, Sustainable Aviation Fuel (SAF) and Bio-LNG insetting, and multimodal green corridors to systematically decarbonize your global supply chain with verifiable corporate governance.
            </p>

            {/* Action Buttons */}
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
                <span>Request Green Corridor Audit</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={scrollToCalculator}
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
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
                }}
              >
                <BarChart3 size={16} color="#34D399" />
                <span>Calculate Scope 3 Reduction</span>
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
              {sustainableHeroStats.map((stat) => (
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
                      color: '#6EE7B7',
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
            SECTION 2: INTERACTIVE SCOPE 3 CARBON CALCULATOR & INSETTING ENGINE
            ========================================================================= */}
        <section
          id="carbon-calculator-section"
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
                  color: '#059669',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                <BarChart3 size={14} />
                <span>Interactive Decarbonization Engine</span>
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
                Scope 3 Freight Carbon Abatement Calculator
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
                Simulate your annual logistics emissions reduction potential across multimodal lanes using certified low-carbon fuels and ISO 14083 compliant insetting.
              </p>
            </div>

            {/* Calculator Grid */}
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
                {/* 1. Mode Selection */}
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
                    1. Select Transport Mode & Insetting Technology
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {carbonCalculatorModes.map((mode) => {
                      const isSelected = mode.id === selectedModeId;
                      return (
                        <div
                          key={mode.id}
                          onClick={() => setSelectedModeId(mode.id)}
                          style={{
                            padding: '12px 14px',
                            borderRadius: '10px',
                            background: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                            border: `2px solid ${isSelected ? '#059669' : '#E2E8F0'}`,
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            boxShadow: isSelected ? '0 4px 12px rgba(5, 150, 105, 0.12)' : 'none',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '13.5px', fontWeight: '700', color: isSelected ? '#065F46' : '#0F172A' }}>
                              {mode.name}
                            </div>
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: '700',
                                padding: '3px 8px',
                                borderRadius: '6px',
                                background: isSelected ? 'rgba(5, 150, 105, 0.15)' : '#E2E8F0',
                                color: isSelected ? '#065F46' : '#475569',
                              }}
                            >
                              -{Math.round(mode.reductionRate * 100)}% CO₂e
                            </span>
                          </div>
                          <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '4px' }}>
                            {mode.description}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Annual Volume Tier */}
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
                    2. Select Annual Freight Volume Tier
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {carbonCalculatorVolumes.map((vol) => {
                      const isSelected = vol.id === selectedVolumeId;
                      return (
                        <div
                          key={vol.id}
                          onClick={() => setSelectedVolumeId(vol.id)}
                          style={{
                            padding: '12px',
                            borderRadius: '10px',
                            background: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                            border: `2px solid ${isSelected ? '#059669' : '#E2E8F0'}`,
                            cursor: 'pointer',
                            textAlign: 'center',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          <div style={{ fontSize: '12.5px', fontWeight: '700', color: isSelected ? '#065F46' : '#0F172A' }}>
                            {vol.label}
                          </div>
                          <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px' }}>
                            {vol.enterpriseTier}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Decarbonization Strategy */}
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
                    3. Select Abatement Mechanism
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {carbonCalculatorStrategies.map((strat) => {
                      const isSelected = strat.id === selectedStrategyId;
                      return (
                        <div
                          key={strat.id}
                          onClick={() => setSelectedStrategyId(strat.id)}
                          style={{
                            padding: '12px 14px',
                            borderRadius: '10px',
                            background: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                            border: `2px solid ${isSelected ? '#059669' : '#E2E8F0'}`,
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '13px', fontWeight: '700', color: isSelected ? '#065F46' : '#0F172A' }}>
                              {strat.name}
                            </div>
                            <span
                              style={{
                                fontSize: '10.5px',
                                fontWeight: '700',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                background: isSelected ? 'rgba(5, 150, 105, 0.15)' : '#E2E8F0',
                                color: isSelected ? '#065F46' : '#475569',
                              }}
                            >
                              {strat.badge}
                            </span>
                          </div>
                          <div style={{ fontSize: '11px', color: '#64748B', marginTop: '4px' }}>
                            {strat.description}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Impact Results */}
              <div
                style={{
                  background: 'linear-gradient(145deg, #041B2D 0%, #082653 100%)',
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
                        background: 'rgba(16, 185, 129, 0.2)',
                        border: '1px solid rgba(16, 185, 129, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#6EE7B7',
                      }}
                    >
                      <Activity size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.06em' }}>
                        GHG Audit Estimate
                      </div>
                      <div style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF' }}>
                        Scope 3 Emission Impact
                      </div>
                    </div>
                  </div>

                  {/* Percent Reduction Pill */}
                  <div
                    style={{
                      textAlign: 'right',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{ fontSize: '10px', color: '#A7F3D0', textTransform: 'uppercase' }}>
                      Carbon Saved
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#34D399' }}>
                      -{percentSaved}%
                    </div>
                  </div>
                </div>

                {/* Key Outputs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '22px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div style={{ fontSize: '11px', color: '#94A3B8' }}>Baseline Emissions</div>
                      <div style={{ fontSize: '17px', fontWeight: '700', color: '#FFFFFF', marginTop: '2px' }}>
                        {baselineTons.toLocaleString()} <span style={{ fontSize: '11px', fontWeight: '400', color: '#94A3B8' }}>tCO₂e</span>
                      </div>
                    </div>

                    <div style={{ background: 'rgba(16, 185, 129, 0.12)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                      <div style={{ fontSize: '11px', color: '#A7F3D0' }}>Projected Abatement</div>
                      <div style={{ fontSize: '17px', fontWeight: '700', color: '#34D399', marginTop: '2px' }}>
                        {tonsAbated.toLocaleString()} <span style={{ fontSize: '11px', fontWeight: '400', color: '#A7F3D0' }}>tCO₂e</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                      Environmental Equivalence Benchmark
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#E2E8F0' }}>
                      <TreePine size={16} color="#34D399" />
                      <span>Equivalent to planting <strong>{equivalentTrees.toLocaleString()}</strong> tree seedlings grown for 10 years</span>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '12px 14px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                      Certification Standard
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#CBD5E1', lineHeight: '1.4' }}>
                      ISO 14083:2023 & Smart Freight Centre GLEC Framework with direct API ledger integration.
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <button
                  onClick={handleGenerateCertificate}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    color: '#FFFFFF',
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
                    boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)',
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
                  <span>Generate Audit-Ready ESG Insetting Ledger</span>
                </button>

                {/* Generated Toast */}
                {certToast && (
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
                      <span>Audit Certificate Reserved:</span>
                    </div>
                    <div>Ledger Ref: <strong style={{ color: '#FFFFFF' }}>{certToast.certNumber}</strong></div>
                    <div>Abatement Commitment: <strong style={{ color: '#FFFFFF' }}>{certToast.abated} ({certToast.reductionPct} Net Cut)</strong></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: FOUR CORE DECARBONIZATION PILLARS
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
                  color: '#059669',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                <Layers size={14} />
                <span>The Green Blueprint</span>
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
                Four Strategic Pillars of KPL Sustainable Systems
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
                We move beyond superficial offsets into structural, operational, and chemical emissions reduction across your entire global logistics footprint.
              </p>
            </div>

            {/* Pillars Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
              {sustainablePillars.map((pillar) => (
                <div
                  key={pillar.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = pillar.accentColor;
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(5, 150, 105, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.04)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          background: 'rgba(5, 150, 105, 0.1)',
                          color: pillar.accentColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {pillar.id === 'accounting' && <BarChart3 size={20} />}
                        {pillar.id === 'insetting' && <Droplets size={20} />}
                        {pillar.id === 'modal-shift' && <RefreshCw size={20} />}
                        {pillar.id === 'circular-warehousing' && <Recycle size={20} />}
                      </div>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '800',
                          color: '#94A3B8',
                          letterSpacing: '0.05em',
                        }}
                      >
                        STEP {pillar.step}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#082653', marginBottom: '6px' }}>
                      {pillar.title}
                    </h3>
                    <div style={{ fontSize: '12.5px', color: pillar.accentColor, fontWeight: '600', marginBottom: '16px' }}>
                      {pillar.subtitle}
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {pillar.points.map((point, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#475569', lineHeight: '1.45' }}>
                          <Check size={15} color={pillar.accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{point}</span>
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
            SECTION 4: COMPARATIVE MATRIX (STANDARD FREIGHT VS. KPL GREEN SYSTEMS)
            ========================================================================= */}
        <section
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
                  color: '#059669',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                <Scale size={14} />
                <span>Comparative Engineering</span>
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
                Conventional Freight vs. KPL Sustainable Logistics
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
                Understand the technical differences between standard legacy logistics and our audited green systems.
              </p>
            </div>

            {/* Matrix Table */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '220px 1fr 1fr',
                  background: '#082653',
                  color: '#FFFFFF',
                  padding: '16px 20px',
                  fontSize: '13px',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                <div>Evaluation Dimension</div>
                <div style={{ color: '#CBD5E1' }}>Standard Industry Practice</div>
                <div style={{ color: '#34D399' }}>KPL Sustainable Systems</div>
              </div>

              {comparativeGreenMatrix.map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '220px 1fr 1fr',
                    padding: '16px 20px',
                    borderBottom: idx !== comparativeGreenMatrix.length - 1 ? '1px solid #F1F5F9' : 'none',
                    background: idx % 2 === 0 ? '#FAFBFD' : '#FFFFFF',
                    fontSize: '13px',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <div style={{ fontWeight: '700', color: '#082653' }}>
                    {row.dimension}
                  </div>
                  <div style={{ color: '#64748B', lineHeight: '1.45' }}>
                    {row.standard}
                  </div>
                  <div style={{ color: '#065F46', fontWeight: '600', lineHeight: '1.45' }}>
                    {row.kplGreen}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: ENTERPRISE CASE STUDIES
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
                  color: '#059669',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                <Award size={14} />
                <span>Verified Decarbonization</span>
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
                Global Enterprise Case Studies
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
                Real-world implementations of Bio-LNG ocean lanes, SAF aviation insetting, and circular zero-waste packaging.
              </p>
            </div>

            {/* Case Studies Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
              {sustainableCaseStudies.map((study) => (
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
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 23, 42, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.04)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          color: '#059669',
                          background: 'rgba(5, 150, 105, 0.1)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                        }}
                      >
                        {study.industry}
                      </span>
                      <span style={{ fontSize: '11.5px', color: '#64748B' }}>{study.client}</span>
                    </div>

                    <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#082653', marginBottom: '8px' }}>
                      {study.headline}
                    </h3>

                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.55', marginBottom: '12px' }}>
                      {study.challenge}
                    </p>

                    <div style={{ background: '#FAFBFD', padding: '12px', borderRadius: '8px', border: '1px solid #F1F5F9', marginBottom: '16px' }}>
                      <div style={{ fontSize: '11px', fontWeight: '700', color: '#082653', textTransform: 'uppercase', marginBottom: '4px' }}>
                        Engineered Solution:
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#334155', lineHeight: '1.45' }}>
                        {study.solution}
                      </div>
                    </div>
                  </div>

                  {/* Metrics Strip */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', paddingTop: '14px', borderTop: '1px solid #F1F5F9', textAlign: 'center' }}>
                    {study.metrics.map((m, i) => (
                      <div key={i} style={{ background: '#FAFBFD', padding: '8px 4px', borderRadius: '6px' }}>
                        <div style={{ fontSize: '14px', fontWeight: '800', color: '#059669' }}>
                          {m.val}
                        </div>
                        <div style={{ fontSize: '10px', color: '#64748B', marginTop: '2px' }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: ESG & REGULATORY ACCREDITATIONS
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
              {sustainableAccreditations.map((std, idx) => (
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
                      background: 'rgba(5, 150, 105, 0.12)',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {std.icon === 'ShieldCheck' && <ShieldCheck size={18} />}
                    {std.icon === 'Award' && <Award size={18} />}
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
                  color: '#059669',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                <FileText size={14} />
                <span>Knowledge & Compliance Base</span>
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
                Key technical and regulatory insights into Scope 3 calculations, insetting vs. offsetting, and EU CSRD compliance.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {sustainableFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: '#FFFFFF',
                      border: `1px solid ${isOpen ? '#059669' : '#E2E8F0'}`,
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
                          background: isOpen ? 'rgba(5, 150, 105, 0.15)' : '#F1F5F9',
                          color: isOpen ? '#059669' : '#64748B',
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
            background: 'linear-gradient(135deg, #041B2D 0%, #082653 100%)',
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
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, transparent 70%)',
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
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                fontSize: '11.5px',
                fontWeight: '700',
                color: '#6EE7B7',
                marginBottom: '14px',
                textTransform: 'uppercase',
              }}
            >
              <Leaf size={13} />
              <span>Certified Scope 3 Supply Chain Decarbonization</span>
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
              Ready to Decarbonize Your Global Freight Corridors?
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
              Partner with KPL to unlock verified low-carbon fuel allocations, audit-proof ISO 14083 certifications, and multimodal route optimization for your enterprise.
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
                <span>Request Green Corridor Audit</span>
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
                <Radio size={15} color="#34D399" />
                <span>Track Active Shipment Carbon</span>
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

