import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import Magnet, { CARD_MAGNET_PROPS, TILE_MAGNET_PROPS } from '../components/common/Magnet';
import {
  fmcgHeroStats,
  fmcgSimulatorCategories,
  fmcgSimulatorChannels,
  fmcgSimulatorVolumes,
  fmcgPillars,
  fmcgCategoryDetails,
  fmcgComplianceMatrix,
  fmcgCaseStudies,
  fmcgStandards,
  fmcgFaqs
} from '../data/consumerGoodsFmcgData';
import {
  Package,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
  BarChart3,
  Layers,
  ShoppingBag,
  Sparkles,
  Award,
  Scale,
  Warehouse,
  Truck,
  RotateCcw,
  SlidersHorizontal,
  QrCode,
  FileCheck2,
  HeartPulse,
  Coffee,
  Boxes,
  Activity,
  AlertCircle,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Check,
  ExternalLink,
  Shield,
  DollarSign,
  Calendar,
  Building2,
  Users,
  CheckCheck,
  Globe,
  X
} from 'lucide-react';

export const ConsumerGoodsFmcg = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  // Simulator State
  const [selectedCatId, setSelectedCatId] = useState('food-confectionery');
  const [selectedChannelId, setSelectedChannelId] = useState('big-box');
  const [selectedVolId, setSelectedVolId] = useState('vol-250k');
  const [simulatorToast, setSimulatorToast] = useState(null);

  // Category Deep Dive Tab State
  const [activeTabId, setActiveTabId] = useState('food-bev');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const selectedCat =
    fmcgSimulatorCategories.find((c) => c.id === selectedCatId) || fmcgSimulatorCategories[0];
  const selectedChannel =
    fmcgSimulatorChannels.find((ch) => ch.id === selectedChannelId) || fmcgSimulatorChannels[0];
  const selectedVol =
    fmcgSimulatorVolumes.find((v) => v.id === selectedVolId) || fmcgSimulatorVolumes[1];

  const handleGenerateRoadmap = () => {
    setSimulatorToast({
      id: `FMCG-PLAN-${Math.floor(100000 + Math.random() * 900000)}`,
      category: selectedCat.name,
      channel: selectedChannel.name,
      volume: selectedVol.label,
      turnaround: selectedCat.turnaround,
      savings: selectedVol.baseChargebackSavings,
      otifTarget: selectedCat.otif
    });
  };

  const activeCategoryDetail =
    fmcgCategoryDetails.find((d) => d.id === activeTabId) || fmcgCategoryDetails[0];

  return (
    <div
      className="consumer-goods-fmcg-page-root"
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
        currentRoute="consumer-goods-fmcg"
        onNavigate={onNavigate}
      />

      <main style={{ position: 'relative' }}>
        {/* Space between Nav Bar and Hero Banner */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />

        {/* =========================================================================
            SECTION 1: HERO BANNER (Light Orange with Warm Executive Accents)
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
              width: '520px',
              height: '520px',
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.14) 0%, rgba(234, 88, 12, 0.06) 45%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              filter: 'blur(30px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-25%',
              left: '-10%',
              width: '440px',
              height: '440px',
              background: 'radial-gradient(circle, rgba(251, 146, 60, 0.12) 0%, transparent 65%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              filter: 'blur(40px)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Eyebrow Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid #FDBA74',
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
                  fontSize: '11.5px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#C2410C',
                }}
              >
                ENTERPRISE LOGISTICS • INDUSTRY FOCUS: CONSUMER GOODS & FMCG
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '40px',
                lineHeight: '1.2',
                fontWeight: '700',
                color: '#082653',
                maxWidth: '920px',
                margin: '0 0 16px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Ultra-Responsive FMCG Logistics & High-Velocity Retail Fulfillment
            </h1>

            {/* Sub-headline */}
            <p
              style={{
                fontSize: '16.5px',
                lineHeight: '1.6',
                color: '#334155',
                maxWidth: '860px',
                margin: '0 0 32px 0',
                fontWeight: '400',
              }}
            >
              Powering global consumer product leaders with sub-24h flow-through cross-docking, automated FEFO lot tracking, and 99.4% OTIF compliance across 14,000+ retail and omnichannel doors worldwide. Zero inventory write-offs. Zero MABD chargeback penalties.
            </p>

            {/* Action Buttons & Trust Accents */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '40px',
              }}
            >
              <button
                onClick={() => openModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 24px rgba(234, 88, 12, 0.3)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(234, 88, 12, 0.42)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(234, 88, 12, 0.3)';
                }}
              >
                <span>Request FMCG Distribution Audit</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('fmcg-simulator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 24px',
                  borderRadius: '8px',
                  background: '#FFFFFF',
                  color: '#082653',
                  fontSize: '15px',
                  fontWeight: '600',
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
                <SlidersHorizontal size={16} color="#EA580C" />
                <span>Launch Shelf-Life & Velocity Simulator</span>
              </button>
            </div>

            {/* Certifications & Compliances Pill Strip */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(234, 88, 12, 0.18)',
              }}
            >
              <span style={{ fontSize: '12px', color: '#475569', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Retail Compliance Certified:
              </span>
              {['Walmart SQEP Certified', 'Target MABD Guaranteed', 'Amazon 1P SIOC Lab', 'GS1-128 Verified', 'FDA cGMP Registered'].map((badge) => (
                <div
                  key={badge}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: '#FFFFFF',
                    border: '1px solid #FED7AA',
                    fontSize: '12px',
                    color: '#082653',
                  }}
                >
                  <CheckCheck size={13} color="#EA580C" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Stat Cards Strip */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '16px',
              marginTop: '40px',
              alignItems: 'stretch',
            }}
          >
            {fmcgHeroStats.map((stat) => (
              <Magnet key={stat.label} {...TILE_MAGNET_PROPS}>
                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #FDBA74',
                    borderRadius: '12px',
                    padding: '20px 18px',
                    boxShadow: '0 4px 14px rgba(234, 88, 12, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    gap: '6px',
                    height: '100%',
                    boxSizing: 'border-box',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#EA580C';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#FDBA74';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '8px',
                      minHeight: '34px',
                    }}
                  >
                    <span style={{ fontSize: '12px', color: '#475569', fontWeight: '600', lineHeight: '1.35' }}>
                      {stat.label}
                    </span>
                    <stat.icon size={18} color={stat.accent} style={{ flexShrink: 0, marginTop: '1px' }} />
                  </div>
                  <div
                    style={{
                      fontSize: '28px',
                      fontWeight: '800',
                      color: '#082653',
                      letterSpacing: '-0.02em',
                      lineHeight: '1.15',
                      minHeight: '34px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#64748B', lineHeight: '1.45' }}>
                    {stat.sub}
                  </div>
                </div>
              </Magnet>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: INTERACTIVE FMCG DISTRIBUTION VELOCITY & SHELF-LIFE SIMULATOR
            ========================================================================= */}
        <section
          id="fmcg-simulator"
          style={{
            margin: '40px 24px',
            padding: '40px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #FDBA74',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
          }}
        >
          {/* Section Header */}
          <div style={{ maxWidth: '850px', marginBottom: '32px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: '20px',
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                color: '#D97706',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '10px',
              }}
            >
              <SlidersHorizontal size={13} />
              <span>INTERACTIVE VELOCITY SIMULATOR</span>
            </div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '30px',
                fontWeight: '700',
                color: '#082653',
                margin: '0 0 10px 0',
                letterSpacing: '-0.01em',
              }}
            >
              FMCG Velocity & Retail Shelf-Life Retention Engine
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
              Select your consumer goods category, retail delivery channel, and monthly throughput to calculate projected On-Time In-Full (OTIF) compliance, port-to-shelf turnaround velocity, and estimated annual chargeback savings.
            </p>
          </div>

          {/* Simulator Controls Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '32px',
              alignItems: 'start',
            }}
          >
            {/* Left Column: Selectors */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Step 1: Product Category */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#082653',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Step 1 • Select Consumer Goods Vertical
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '10px' }}>
                  {fmcgSimulatorCategories.map((cat) => {
                    const isSelected = selectedCatId === cat.id;
                    return (
                      <Magnet key={cat.id} {...TILE_MAGNET_PROPS} style={{ display: 'block', width: '100%' }}>
                        <div
                          onClick={() => setSelectedCatId(cat.id)}
                          style={{
                            padding: '14px 16px',
                            borderRadius: '10px',
                            border: isSelected ? '2px solid #F59E0B' : '1px solid #FDBA74',
                            background: isSelected ? 'rgba(245, 158, 11, 0.04)' : '#FAFBFD',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <span style={{ fontSize: '14px', fontWeight: '700', color: isSelected ? '#082653' : '#1E293B' }}>
                              {cat.name}
                            </span>
                            <span style={{ fontSize: '12px', color: '#64748B' }}>
                              {cat.badge} • Temp: {cat.idealTemp}
                            </span>
                          </div>
                          <div
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              border: isSelected ? '6px solid #F59E0B' : '2px solid #CBD5E1',
                              background: '#FFFFFF',
                              flexShrink: 0,
                            }}
                          />
                        </div>
                      </Magnet>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Retail Channel */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#082653',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Step 2 • Primary Distribution Channel
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px' }}>
                  {fmcgSimulatorChannels.map((ch) => {
                    const isSelected = selectedChannelId === ch.id;
                    return (
                      <Magnet key={ch.id} {...TILE_MAGNET_PROPS}>
                        <div
                          onClick={() => setSelectedChannelId(ch.id)}
                          style={{
                            padding: '12px 14px',
                            borderRadius: '10px',
                            border: isSelected ? '2px solid #EA580C' : '1px solid #FDBA74',
                            background: isSelected ? '#F1F5F9' : '#FAFBFD',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            height: '100%',
                          }}
                        >
                          <div style={{ fontSize: '13px', fontWeight: '700', color: '#082653', marginBottom: '2px' }}>
                            {ch.name}
                          </div>
                          <div style={{ fontSize: '11px', color: '#64748B', lineHeight: '1.4' }}>
                            {ch.examples}
                          </div>
                        </div>
                      </Magnet>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Volume Tier */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#082653',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Step 3 • Monthly Case Throughput Volume
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '10px' }}>
                  {fmcgSimulatorVolumes.map((vol) => {
                    const isSelected = selectedVolId === vol.id;
                    return (
                      <Magnet key={vol.id} {...TILE_MAGNET_PROPS}>
                        <button
                          type="button"
                          onClick={() => setSelectedVolId(vol.id)}
                          style={{
                            width: '100%',
                            height: '100%',
                            padding: '12px 10px',
                            borderRadius: '8px',
                            border: isSelected ? '2px solid #FF6F00' : '1px solid #FDBA74',
                            background: isSelected ? 'rgba(255, 111, 0, 0.08)' : '#FAFBFD',
                            color: isSelected ? '#EA580C' : '#334155',
                            fontSize: '12px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            textAlign: 'center',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {vol.label}
                        </button>
                      </Magnet>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Output Cockpit Card */}
            <div
              style={{
                background: 'linear-gradient(145deg, #FFF7ED 0%, #FFEDD5 100%)',
                border: '1px solid #FED7AA',
                borderRadius: '14px',
                padding: '28px',
                color: '#082653',
                boxShadow: '0 12px 35px rgba(234, 88, 12, 0.1)',
                position: 'sticky',
                top: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={18} color="#EA580C" />
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#C2410C', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Engine Simulation Results
                  </span>
                </div>
                <span
                  style={{
                    padding: '3px 8px',
                    borderRadius: '4px',
                    background: '#FFF7ED',
                    border: '1px solid #FED7AA',
                    color: '#C2410C',
                    fontSize: '11px',
                    fontWeight: '700',
                  }}
                >
                  LIVE COMPUTED
                </span>
              </div>

              {/* Major KPI Metric: Projected OTIF */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '16px',
                  border: '1px solid #FED7AA',
                  marginBottom: '16px',
                }}
              >
                <div style={{ fontSize: '12px', color: '#475569', marginBottom: '4px' }}>
                  Projected On-Time In-Full (OTIF) Rate
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '36px', fontWeight: '800', color: '#EA580C' }}>
                    {selectedCat.otif}
                  </span>
                  <span style={{ fontSize: '12px', color: '#C2410C', fontWeight: '600' }}>
                    vs. {selectedChannel.otifTarget} Retail Mandate
                  </span>
                </div>
                <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '4px' }}>
                  Compliant with {selectedChannel.ediProtocol}
                </div>
              </div>

              {/* Grid of Key Outputs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px', marginBottom: '20px' }}>
                <Magnet {...TILE_MAGNET_PROPS}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #FED7AA',
                      height: '100%',
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#475569' }}>Cross-Dock Turnaround</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#082653', marginTop: '2px' }}>
                      {selectedCat.turnaround}
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#64748B' }}>Port to dispatch</div>
                  </div>
                </Magnet>

                <Magnet {...TILE_MAGNET_PROPS}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #FED7AA',
                      height: '100%',
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#475569' }}>Shrink & Spoilage Risk</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#D97706', marginTop: '2px' }}>
                      {selectedCat.shrinkRisk}
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#64748B' }}>Automated FEFO guard</div>
                  </div>
                </Magnet>

                <Magnet {...TILE_MAGNET_PROPS}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #FED7AA',
                      height: '100%',
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#475569' }}>Monthly Pallet Cadence</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#C2410C', marginTop: '2px' }}>
                      {selectedVol.throughput}
                    </div>
                  </div>
                </Magnet>

                <Magnet {...TILE_MAGNET_PROPS}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #FED7AA',
                      height: '100%',
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#475569' }}>Shelf-Life Buffer Added</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#C2410C', marginTop: '2px' }}>
                      +{selectedVol.bufferDaysSaved}
                    </div>
                  </div>
                </Magnet>
              </div>

              {/* Chargeback Savings Highlight Box */}
              <div
                style={{
                  background: '#FFFBEB',
                  border: '1px solid #FDE68A',
                  borderRadius: '10px',
                  padding: '14px',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <ShieldCheck size={16} color="#D97706" />
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#B45309' }}>
                    Est. Annual Chargeback Savings
                  </span>
                </div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#082653' }}>
                  {selectedVol.baseChargebackSavings}
                </div>
                <div style={{ fontSize: '11px', color: '#475569', marginTop: '2px' }}>
                  Based on eliminating ASN mismatches, MABD delays & barcode chargebacks.
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleGenerateRoadmap}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 20px rgba(234, 88, 12, 0.4)',
                  transition: 'transform 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <span>Generate Distribution Roadmap</span>
                <ArrowRight size={16} />
              </button>

              {/* Toast Confirmation / Blueprint View */}
              {simulatorToast && (
                <div
                  style={{
                    marginTop: '16px',
                    padding: '14px',
                    background: '#FFF7ED',
                    borderRadius: '8px',
                    border: '1px solid #EA580C',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={15} color="#EA580C" />
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#C2410C' }}>
                        Roadmap {simulatorToast.id} Ready
                      </span>
                    </div>
                    <button
                      onClick={() => setSimulatorToast(null)}
                      style={{ background: 'none', border: 'none', color: '#64748B', cursor: 'pointer', padding: 0 }}
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <p style={{ fontSize: '11.5px', color: '#334155', margin: '0 0 10px 0', lineHeight: '1.4' }}>
                    Configured for <strong>{simulatorToast.category}</strong> via <strong>{simulatorToast.channel}</strong>. Port turnaround locked at <strong>{simulatorToast.turnaround}</strong> with targeted OTIF <strong>{simulatorToast.otifTarget}</strong>.
                  </p>
                  <button
                    onClick={() => openModal('quote')}
                    style={{
                      width: '100%',
                      padding: '8px',
                      background: '#FFFFFF',
                      border: '1px solid #EA580C',
                      borderRadius: '6px',
                      color: '#C2410C',
                      fontSize: '11.5px',
                      fontWeight: '700',
                      cursor: 'pointer',
                    }}
                  >
                    Deploy Blueprint with FMCG Architect →
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: FOUR SPECIALIZED FMCG LOGISTICS PILLARS
            ========================================================================= */}
        <section
          style={{
            margin: '40px 24px',
            padding: '48px 40px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #FDBA74',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#FF6F00',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              CORE CAPABILITIES
            </span>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '32px',
                fontWeight: '700',
                color: '#082653',
                margin: '8px 0 12px 0',
                letterSpacing: '-0.01em',
              }}
            >
              Four Pillars of Enterprise FMCG Supply Chain Dominance
            </h2>
            <p style={{ fontSize: '15px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
              Engineered specifically to solve high inventory velocity, stringent retail vendor manuals, and rapid seasonal volume swings without increasing operational friction.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '24px',
            }}
          >
            {fmcgPillars.map((pillar) => (
              <Magnet key={pillar.id} {...CARD_MAGNET_PROPS}>
                <div
                  style={{
                    background: '#FAFBFD',
                    borderRadius: '14px',
                    border: '1px solid #FDBA74',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#EA580C';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#FDBA74';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                {/* Top Row: Icon, Badge & Metric */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        background: `${pillar.accentColor}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: pillar.accentColor,
                      }}
                    >
                      <pillar.icon size={22} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          padding: '4px 10px',
                          borderRadius: '20px',
                          background: `${pillar.accentColor}12`,
                          color: pillar.accentColor,
                          border: `1px solid ${pillar.accentColor}30`,
                        }}
                      >
                        {pillar.badgeText}
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '800',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: '#FFF7ED',
                          border: '1px solid #FDBA74',
                          color: '#C2410C',
                        }}
                      >
                        {pillar.metric}
                      </span>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: '19px',
                      fontWeight: '700',
                      color: '#082653',
                      margin: '0 0 6px 0',
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <div
                    style={{
                      fontSize: '12.5px',
                      fontWeight: '600',
                      color: pillar.accentColor,
                      marginBottom: '14px',
                    }}
                  >
                    {pillar.tagline}
                  </div>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#475569',
                      lineHeight: '1.6',
                      margin: '0 0 20px 0',
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>

                {/* Checklist Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #E2E8F0', paddingTop: '18px' }}>
                  {pillar.points.map((pt, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={15} color={pillar.accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '12.5px', color: '#334155', lineHeight: '1.45' }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
              </Magnet>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: INTERACTIVE FMCG SUB-CATEGORY DEEP DIVE TABS
            ========================================================================= */}
        <section
          style={{
            margin: '40px 24px',
            padding: '44px 40px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #FDBA74',
          }}
        >
          <div style={{ marginBottom: '28px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#FF6F00',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              SECTOR-SPECIFIC PROTOCOLS
            </span>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '30px',
                fontWeight: '700',
                color: '#082653',
                margin: '8px 0 10px 0',
              }}
            >
              FMCG Vertical Deep Dive & Handling Standards
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', margin: 0 }}>
              Inspect detailed temperature tolerances, active volume cadence, and channel certifications by consumer category.
            </p>
          </div>

          {/* Tab Navigation Pill Bar */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              paddingBottom: '20px',
              borderBottom: '1px solid #E2E8F0',
              marginBottom: '28px',
              overflowX: 'auto',
            }}
          >
            {fmcgCategoryDetails.map((item) => {
              const isActive = activeTabId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTabId(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    border: isActive ? '1px solid #EA580C' : '1px solid #FDBA74',
                    background: isActive ? '#EA580C' : '#FAFBFD',
                    color: isActive ? '#FFFFFF' : '#475569',
                    fontSize: '13px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <item.icon size={15} color={isActive ? '#FFFFFF' : '#64748B'} />
                  <span>{item.category}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Card */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '32px',
              alignItems: 'center',
              background: '#FAFBFD',
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid #FDBA74',
            }}
          >
            {/* Left Column: Descriptions & Operational Specs */}
            <div>
              <div style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '4px', background: '#FFF7ED', border: '1px solid #FED7AA', color: '#C2410C', fontSize: '11px', fontWeight: '800', marginBottom: '10px' }}>
                STANDARDIZED OPERATIONAL PROFILE
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#082653', margin: '0 0 12px 0' }}>
                {activeCategoryDetail.category}
              </h3>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                {activeCategoryDetail.description}
              </p>

              {/* Highlights Pill Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {activeCategoryDetail.highlights.map((hl, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '5px 12px',
                      borderRadius: '6px',
                      background: '#FFFFFF',
                      border: '1px solid #FDBA74',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#082653',
                    }}
                  >
                    <Check size={13} color="#EA580C" />
                    <span>{hl}</span>
                  </span>
                ))}
              </div>

              <button
                onClick={() => openModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>Request {activeCategoryDetail.category} SOP Document</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Right Column: Spec Grid */}
            <Magnet {...CARD_MAGNET_PROPS} maxOffset={4} tilt={1}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  background: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '10px',
                  border: '1px solid #FDBA74',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                }}
              >
              <div>
                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>
                  Active Volume Cadence
                </span>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#082653', marginTop: '2px' }}>
                  {activeCategoryDetail.activeVolume}
                </div>
              </div>

              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '10px' }}>
                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>
                  Climate & Thermal Stability
                </span>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#D97706', marginTop: '2px' }}>
                  {activeCategoryDetail.tempRange}
                </div>
              </div>

              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '10px' }}>
                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>
                  Primary Channels Serviced
                </span>
                <div style={{ fontSize: '13px', color: '#334155', marginTop: '2px', lineHeight: '1.4' }}>
                  {activeCategoryDetail.primaryChannels}
                </div>
              </div>

              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '10px' }}>
                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>
                  Regulatory Certifications
                </span>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#EA580C', marginTop: '2px' }}>
                  {activeCategoryDetail.complianceSpecs}
                </div>
              </div>
            </div>
            </Magnet>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: RETAIL COMPLIANCE & ZERO CHARGEBACK MATRIX
            ========================================================================= */}
        <section
          style={{
            margin: '40px 24px',
            padding: '44px 40px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #FDBA74',
          }}
        >
          <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#FF6F00',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              ZERO-PENALTY ARCHITECTURE
            </span>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '30px',
                fontWeight: '700',
                color: '#082653',
                margin: '8px 0 10px 0',
              }}
            >
              Retail Vendor Compliance & Penalty Shield Matrix
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
              Retailers levy severe penalties for packaging defects, missed dock appointments, and barcode errors. Here is how KPL neutralizes compliance risk at every distribution stage:
            </p>
          </div>

          <div
            style={{
              overflowX: 'auto',
              borderRadius: '12px',
              border: '1px solid #FDBA74',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ background: '#FFF7ED', color: '#082653', borderBottom: '2px solid #FED7AA' }}>
                  <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '700' }}>Retail Partner</th>
                  <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '700' }}>Compliance Mandate</th>
                  <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '700' }}>Target SLA</th>
                  <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '700' }}>Non-Compliance Penalty</th>
                  <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '700' }}>KPL Guaranteed Capability</th>
                </tr>
              </thead>
              <tbody>
                {fmcgComplianceMatrix.map((row, idx) => (
                  <tr
                    key={row.retailer}
                    style={{
                      borderBottom: '1px solid #E2E8F0',
                      background: idx % 2 === 0 ? '#FFFFFF' : '#FAFBFD',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#F1F5F9')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = idx % 2 === 0 ? '#FFFFFF' : '#FAFBFD')}
                  >
                    <td style={{ padding: '16px 20px', fontSize: '13.5px', fontWeight: '700', color: '#082653' }}>
                      {row.retailer}
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '12.5px', color: '#475569' }}>
                      {row.program}
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '12.5px', fontWeight: '700', color: '#EA580C' }}>
                      {row.kpi}
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '12px', color: '#B45309', fontWeight: '600' }}>
                      {row.penaltyRisk}
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '12.5px', color: '#1E293B', fontWeight: '500' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={14} color="#EA580C" style={{ flexShrink: 0 }} />
                        <span>{row.kplCapability}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: ENTERPRISE FMCG CASE STUDIES
            ========================================================================= */}
        <section
          style={{
            margin: '40px 24px',
            padding: '48px 40px',
            background: '#FAFBFD',
            borderRadius: '16px',
            border: '1px solid #FDBA74',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#FF6F00',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              PROVEN ENTERPRISE OUTCOMES
            </span>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '32px',
                fontWeight: '700',
                color: '#082653',
                margin: '8px 0 12px 0',
              }}
            >
              Enterprise Case Studies in FMCG Velocity
            </h2>
            <p style={{ fontSize: '15px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
              How global food, beauty, and beverage brands eliminated retail chargebacks and scaled omnichannel distribution with KPL.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {fmcgCaseStudies.map((cs, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1px solid #FDBA74',
                  padding: '32px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                  display: 'grid',
                  gridTemplateColumns: '1.4fr 1fr',
                  gap: '32px',
                  alignItems: 'center',
                }}
              >
                {/* Left: Narrative */}
                <div>
                  <div style={{ fontSize: '11px', fontWeight: '800', color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                    {cs.scale}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#082653', margin: '0 0 14px 0' }}>
                    {cs.client}
                  </h3>

                  <div style={{ marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#B45309' }}>The Friction: </span>
                    <span style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>{cs.challenge}</span>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#EA580C' }}>KPL Deployment: </span>
                    <span style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>{cs.solution}</span>
                  </div>

                  <div
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: '#FAFBFD',
                      borderLeft: '3px solid #FF6F00',
                      fontStyle: 'italic',
                      fontSize: '13px',
                      color: '#334155',
                      lineHeight: '1.5',
                    }}
                  >
                    "{cs.quote}"
                  </div>
                </div>

                {/* Right: Quantitative KPI Grid */}
                <div
                  style={{
                    background: '#FAFBFD',
                    borderRadius: '12px',
                    border: '1px solid #FDBA74',
                    padding: '24px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '16px',
                  }}
                >
                  {cs.results.map((res, rIdx) => (
                    <Magnet key={rIdx} {...TILE_MAGNET_PROPS}>
                      <div
                        style={{
                          background: '#FFFFFF',
                          borderRadius: '8px',
                          padding: '14px',
                          border: '1px solid #FDBA74',
                          textAlign: 'center',
                          height: '100%',
                        }}
                      >
                        <div style={{ fontSize: '24px', fontWeight: '800', color: '#082653', letterSpacing: '-0.02em' }}>
                          {res.val}
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '600', marginTop: '2px' }}>
                          {res.metric}
                        </div>
                      </div>
                    </Magnet>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: INDUSTRY STANDARDS & GLOBAL CERTIFICATIONS
            ========================================================================= */}
        <section
          style={{
            margin: '40px 24px',
            padding: '44px 40px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #FDBA74',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#FF6F00',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              ACCREDITED QUALITY ASSURANCE
            </span>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '28px',
                fontWeight: '700',
                color: '#082653',
                margin: '8px 0 10px 0',
              }}
            >
              Global Compliance & Hygiene Certifications
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', margin: 0 }}>
              Our FMCG distribution nodes are independently audited and certified by leading global health, hygiene, and trade authorities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '16px' }}>
            {fmcgStandards.map((std) => (
              <Magnet key={std.code} {...CARD_MAGNET_PROPS}>
                <div
                  style={{
                    background: '#FAFBFD',
                    borderRadius: '10px',
                    border: '1px solid #FDBA74',
                    padding: '20px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    height: '100%',
                    transition: 'border-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#EA580C')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#FDBA74')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Award size={18} color="#FF6F00" />
                    <span style={{ fontSize: '14px', fontWeight: '800', color: '#082653' }}>{std.code}</span>
                  </div>
                  <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155' }}>{std.name}</div>
                  <div style={{ fontSize: '11.5px', color: '#64748B', lineHeight: '1.45' }}>{std.desc}</div>
                </div>
              </Magnet>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: TECHNICAL FMCG FAQ ACCORDION
            ========================================================================= */}
        <section
          style={{
            margin: '40px 24px',
            padding: '44px 40px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #FDBA74',
          }}
        >
          <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#FF6F00',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              TECHNICAL EXPERTISE
            </span>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '28px',
                fontWeight: '700',
                color: '#082653',
                margin: '8px 0 10px 0',
              }}
            >
              Frequently Asked Questions: Consumer Goods & FMCG
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', margin: 0 }}>
              Direct answers regarding chargeback prevention, peak season elasticity, EDI integrations, and shelf-life guarantees.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {fmcgFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: '10px',
                    border: isOpen ? '1px solid #FF6F00' : '1px solid #FDBA74',
                    background: isOpen ? '#FAFBFD' : '#FFFFFF',
                    overflow: 'hidden',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#082653' }}>
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={18} color="#FF6F00" /> : <ChevronDown size={18} color="#64748B" />}
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 22px 20px',
                        fontSize: '14px',
                        color: '#475569',
                        lineHeight: '1.6',
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
            SECTION 9: BOTTOM EXECUTIVE CTA BANNER
            ========================================================================= */}
        <section
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 50%, #FFF7ED 100%)',
            border: '1px solid #FED7AA',
            color: '#082653',
            borderRadius: '16px',
            margin: '0 24px',
            padding: '52px 48px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(234, 88, 12, 0.08)',
            textAlign: 'center',
          }}
        >
          {/* Subtle Ambient Radial Lighting */}
          <div
            style={{
              position: 'absolute',
              top: '-30%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              filter: 'blur(30px)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px', margin: '0 auto' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '20px',
                background: '#FFFFFF',
                border: '1px solid #FED7AA',
                color: '#C2410C',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              PARTNER WITH KPL TODAY
            </span>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '34px',
                fontWeight: '700',
                color: '#082653',
                margin: '0 0 16px 0',
                letterSpacing: '-0.01em',
              }}
            >
              Accelerate Your FMCG Supply Chain to 99.4% OTIF
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#334155',
                lineHeight: '1.6',
                margin: '0 0 32px 0',
              }}
            >
              Eliminate retail chargebacks, reduce shelf-life loss, and experience real-time cross-dock agility across North America, Europe, and Asia.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => openModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 30px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 24px rgba(234, 88, 12, 0.4)',
                }}
              >
                <span>Schedule FMCG Diagnostic Review</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => openModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 26px',
                  borderRadius: '8px',
                  background: '#FFFFFF',
                  color: '#082653',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: '1px solid #FED7AA',
                  cursor: 'pointer',
                }}
              >
                <span>Download FMCG Playbook</span>
              </button>
            </div>
          </div>
        </section>

        {/* Space between Bottom Banner and Footer */}
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
export default ConsumerGoodsFmcg;

