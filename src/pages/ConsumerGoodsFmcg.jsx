import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
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
            SECTION 1: HERO BANNER (Luxury Navy with Amber/Sunset Gold Glow)
            ========================================================================= */}
        <section
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #061836 0%, #082653 45%, #0d3875 100%)',
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
              width: '520px',
              height: '520px',
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, rgba(234, 88, 12, 0.08) 45%, transparent 70%)',
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
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 65%)',
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
                background: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#F59E0B',
                  boxShadow: '0 0 10px #F59E0B',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#FDE68A',
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
                color: '#FFFFFF',
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
                color: 'rgba(255, 255, 255, 0.86)',
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
                  boxShadow: '0 10px 24px rgba(234, 88, 12, 0.35)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(234, 88, 12, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(234, 88, 12, 0.35)';
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
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                }}
              >
                <SlidersHorizontal size={16} color="#FDE68A" />
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
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
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
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    fontSize: '12px',
                    color: '#E2E8F0',
                  }}
                >
                  <CheckCheck size={13} color="#10B981" />
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
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              marginTop: '40px',
            }}
          >
            {fmcgHeroStats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '20px 18px',
                  backdropFilter: 'blur(12px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = stat.accent;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: '600' }}>
                    {stat.label}
                  </span>
                  <stat.icon size={18} color={stat.accent} />
                </div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  {stat.sub}
                </div>
              </div>
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
            border: '1px solid #E2E8F0',
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
                      <div
                        key={cat.id}
                        onClick={() => setSelectedCatId(cat.id)}
                        style={{
                          padding: '14px 16px',
                          borderRadius: '10px',
                          border: isSelected ? '2px solid #F59E0B' : '1px solid #E2E8F0',
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  {fmcgSimulatorChannels.map((ch) => {
                    const isSelected = selectedChannelId === ch.id;
                    return (
                      <div
                        key={ch.id}
                        onClick={() => setSelectedChannelId(ch.id)}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '10px',
                          border: isSelected ? '2px solid #082653' : '1px solid #E2E8F0',
                          background: isSelected ? '#F1F5F9' : '#FAFBFD',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <div style={{ fontSize: '13px', fontWeight: '700', color: '#082653', marginBottom: '2px' }}>
                          {ch.name}
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748B', lineHeight: '1.4' }}>
                          {ch.examples}
                        </div>
                      </div>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {fmcgSimulatorVolumes.map((vol) => {
                    const isSelected = selectedVolId === vol.id;
                    return (
                      <button
                        key={vol.id}
                        type="button"
                        onClick={() => setSelectedVolId(vol.id)}
                        style={{
                          padding: '12px 10px',
                          borderRadius: '8px',
                          border: isSelected ? '2px solid #FF6F00' : '1px solid #E2E8F0',
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
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Output Cockpit Card */}
            <div
              style={{
                background: 'linear-gradient(145deg, #082653 0%, #0d3875 100%)',
                borderRadius: '14px',
                padding: '28px',
                color: '#FFFFFF',
                boxShadow: '0 12px 35px rgba(8, 38, 83, 0.22)',
                position: 'sticky',
                top: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={18} color="#FDE68A" />
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#FDE68A', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Engine Simulation Results
                  </span>
                </div>
                <span
                  style={{
                    padding: '3px 8px',
                    borderRadius: '4px',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#6EE7B7',
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
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  marginBottom: '16px',
                }}
              >
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '4px' }}>
                  Projected On-Time In-Full (OTIF) Rate
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '36px', fontWeight: '800', color: '#10B981' }}>
                    {selectedCat.otif}
                  </span>
                  <span style={{ fontSize: '12px', color: '#A7F3D0' }}>
                    vs. {selectedChannel.otifTarget} Retail Mandate
                  </span>
                </div>
                <div style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.65)', marginTop: '4px' }}>
                  Compliant with {selectedChannel.ediProtocol}
                </div>
              </div>

              {/* Grid of Key Outputs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)' }}>Cross-Dock Turnaround</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#38BDF8', marginTop: '2px' }}>
                    {selectedCat.turnaround}
                  </div>
                  <div style={{ fontSize: '10.5px', color: 'rgba(255, 255, 255, 0.5)' }}>Port to dispatch</div>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)' }}>Shrink & Spoilage Risk</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#A78BFA', marginTop: '2px' }}>
                    {selectedCat.shrinkRisk}
                  </div>
                  <div style={{ fontSize: '10.5px', color: 'rgba(255, 255, 255, 0.5)' }}>Automated FEFO guard</div>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)' }}>Monthly Pallet Cadence</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#FDE68A', marginTop: '2px' }}>
                    {selectedVol.throughput}
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)' }}>Shelf-Life Buffer Added</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#FDE68A', marginTop: '2px' }}>
                    +{selectedVol.bufferDaysSaved}
                  </div>
                </div>
              </div>

              {/* Chargeback Savings Highlight Box */}
              <div
                style={{
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  borderRadius: '10px',
                  padding: '14px',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <ShieldCheck size={16} color="#F59E0B" />
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#FDE68A' }}>
                    Est. Annual Chargeback Savings
                  </span>
                </div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF' }}>
                  {selectedVol.baseChargebackSavings}
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '2px' }}>
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
                    background: '#061836',
                    borderRadius: '8px',
                    border: '1px solid #10B981',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={15} color="#10B981" />
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#10B981' }}>
                        Roadmap {simulatorToast.id} Ready
                      </span>
                    </div>
                    <button
                      onClick={() => setSimulatorToast(null)}
                      style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0 }}
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <p style={{ fontSize: '11.5px', color: '#E2E8F0', margin: '0 0 10px 0', lineHeight: '1.4' }}>
                    Configured for <strong>{simulatorToast.category}</strong> via <strong>{simulatorToast.channel}</strong>. Port turnaround locked at <strong>{simulatorToast.turnaround}</strong> with targeted OTIF <strong>{simulatorToast.otifTarget}</strong>.
                  </p>
                  <button
                    onClick={() => openModal('quote')}
                    style={{
                      width: '100%',
                      padding: '8px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid #10B981',
                      borderRadius: '6px',
                      color: '#6EE7B7',
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
            border: '1px solid #E2E8F0',
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
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
            }}
          >
            {fmcgPillars.map((pillar) => (
              <div
                key={pillar.id}
                style={{
                  background: '#FAFBFD',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = pillar.accentColor;
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.06)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
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
                          background: '#082653',
                          color: '#FFFFFF',
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
            border: '1px solid #E2E8F0',
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
                    border: isActive ? '1px solid #082653' : '1px solid #E2E8F0',
                    background: isActive ? '#082653' : '#FAFBFD',
                    color: isActive ? '#FFFFFF' : '#475569',
                    fontSize: '13px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <item.icon size={15} color={isActive ? '#FDE68A' : '#64748B'} />
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
              border: '1px solid #E2E8F0',
            }}
          >
            {/* Left Column: Descriptions & Operational Specs */}
            <div>
              <div style={{ display: 'inline-block', padding: '4px 10px', borderRadius: '4px', background: 'rgba(8, 38, 83, 0.08)', color: '#082653', fontSize: '11px', fontWeight: '800', marginBottom: '10px' }}>
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
                      border: '1px solid #CBD5E1',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#082653',
                    }}
                  >
                    <Check size={13} color="#10B981" />
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
                  background: '#082653',
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                background: '#FFFFFF',
                padding: '24px',
                borderRadius: '10px',
                border: '1px solid #E2E8F0',
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
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#059669', marginTop: '2px' }}>
                  {activeCategoryDetail.complianceSpecs}
                </div>
              </div>
            </div>
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
            border: '1px solid #E2E8F0',
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
              border: '1px solid #E2E8F0',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ background: '#082653', color: '#FFFFFF' }}>
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
                    <td style={{ padding: '16px 20px', fontSize: '12.5px', fontWeight: '700', color: '#0D9488' }}>
                      {row.kpi}
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '12px', color: '#DC2626', fontWeight: '600' }}>
                      {row.penaltyRisk}
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '12.5px', color: '#1E293B', fontWeight: '500' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={14} color="#10B981" style={{ flexShrink: 0 }} />
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
            border: '1px solid #E2E8F0',
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
                  border: '1px solid #E2E8F0',
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
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#DC2626' }}>The Friction: </span>
                    <span style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>{cs.challenge}</span>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#059669' }}>KPL Deployment: </span>
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
                    border: '1px solid #E2E8F0',
                    padding: '24px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '16px',
                  }}
                >
                  {cs.results.map((res, rIdx) => (
                    <div
                      key={rIdx}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '8px',
                        padding: '14px',
                        border: '1px solid #E2E8F0',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ fontSize: '24px', fontWeight: '800', color: '#082653', letterSpacing: '-0.02em' }}>
                        {res.val}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '600', marginTop: '2px' }}>
                        {res.metric}
                      </div>
                    </div>
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
            border: '1px solid #E2E8F0',
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {fmcgStandards.map((std) => (
              <div
                key={std.code}
                style={{
                  background: '#FAFBFD',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  padding: '20px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  transition: 'border-color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#082653')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E2E8F0')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={18} color="#FF6F00" />
                  <span style={{ fontSize: '14px', fontWeight: '800', color: '#082653' }}>{std.code}</span>
                </div>
                <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155' }}>{std.name}</div>
                <div style={{ fontSize: '11.5px', color: '#64748B', lineHeight: '1.45' }}>{std.desc}</div>
              </div>
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
            border: '1px solid #E2E8F0',
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
                    border: isOpen ? '1px solid #FF6F00' : '1px solid #E2E8F0',
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
            background: 'linear-gradient(135deg, #061836 0%, #082653 100%)',
            color: '#FFFFFF',
            borderRadius: '16px',
            margin: '0 24px',
            padding: '52px 48px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(8, 38, 83, 0.22)',
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
              background: 'radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, transparent 70%)',
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
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#FDE68A',
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
                color: '#FFFFFF',
                margin: '0 0 16px 0',
                letterSpacing: '-0.01em',
              }}
            >
              Accelerate Your FMCG Supply Chain to 99.4% OTIF
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.85)',
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
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
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

