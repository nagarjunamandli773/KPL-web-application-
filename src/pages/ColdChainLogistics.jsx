import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import Magnet, { CARD_MAGNET_PROPS, TILE_MAGNET_PROPS } from '../components/common/Magnet';
import {
  coldChainHeroStats,
  temperatureZones,
  coldChainOrigins,
  coldChainDestinations,
  coldChainServiceModes,
  coldChainPillars,
  coldChainCertifications,
  coldChainFaqs
} from '../data/coldChainData';
import {
  Truck,
  Snowflake,
  Thermometer,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  RotateCcw,
  FileCheck2,
  Warehouse,
  Layers,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Search,
  Sparkles,
  Check,
  MapPin,
  Sliders,
  DollarSign,
  AlertCircle,
  Radio,
  Activity,
  Compass,
  Cpu,
  Globe,
  Plane,
  Ship
} from 'lucide-react';

export const ColdChainLogistics = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  // Temperature Zone State
  const [activeZoneId, setActiveZoneId] = useState('chilled');

  // Route Estimator State
  const [originPort, setOriginPort] = useState('NLRTM');
  const [destPort, setDestPort] = useState('USNYC');
  const [selectedModeId, setSelectedModeId] = useState('ocean-reefer');
  const [bookingToast, setBookingToast] = useState(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const activeZone =
    temperatureZones.find((z) => z.id === activeZoneId) || temperatureZones[0];

  const activeOrigin =
    coldChainOrigins.find((o) => o.code === originPort) || coldChainOrigins[0];

  const activeDest =
    coldChainDestinations.find((d) => d.code === destPort) || coldChainDestinations[0];

  const activeMode =
    coldChainServiceModes.find((m) => m.id === selectedModeId) || coldChainServiceModes[0];

  const handleBookReefer = (mode) => {
    setBookingToast({
      modeName: mode.name,
      origin: activeOrigin.name.split('Reefer')[0].split('Cold')[0].trim(),
      destination: activeDest.name.split('Port')[0].split('Cold')[0].trim(),
      tempZone: activeZone.range,
      equipment: mode.equipment,
      bcn: `KPL-COLD-${Math.floor(10000000 + Math.random() * 90000000)}`,
    });
  };

  return (
    <div
      className="cold-chain-logistics-page-root"
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
      <style>{`
        .coldchain-4col-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: stretch;
        }
        .coldchain-3col-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: stretch;
        }
        .coldchain-modes-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        .coldchain-2col-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }
        @media (max-width: 1060px) {
          .coldchain-4col-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 960px) {
          .coldchain-3col-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .coldchain-modes-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        @media (max-width: 680px) {
          .coldchain-2col-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        @media (max-width: 560px) {
          .coldchain-4col-grid,
          .coldchain-3col-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>

      {/* 1. Shared Global Link Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="cold-chain-logistics"
        onNavigate={onNavigate}
      />

      <main style={{ position: 'relative' }}>
        {/* Space between Nav Bar and Hero Banner */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />

        {/* =========================================================================
            SECTION 1: HERO BANNER (Clean White with Frost Cyan & Sunset Orange Accents)
            ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '50px 32px 50px 32px',
            background: '#FFFFFF',
            borderTop: '1px solid #E2E8F0',
            borderBottom: '1px solid #E2E8F0',
            overflow: 'hidden',
          }}
        >
          {/* Ambient Warm Sunset Orange & Amber Radial Lighting */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-80px',
              left: '10%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(234, 88, 12, 0.06) 0%, transparent 70%)',
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
                background: 'rgba(234, 88, 12, 0.08)',
                border: '1px solid rgba(234, 88, 12, 0.25)',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '5px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <Truck size={12} strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#EA580C',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Logistics Management • Temperature-Controlled Cold Chain
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(32px, 3.8vw, 44px)',
                fontWeight: '700',
                color: '#082653',
                lineHeight: '1.15',
                letterSpacing: '-0.5px',
                marginBottom: '14px',
              }}
            >
              Cold Chain Logistics
            </h1>

            {/* Subtitle exact description from card */}
            <p
              style={{
                fontSize: '17px',
                fontWeight: '400',
                color: '#475569',
                lineHeight: '1.6',
                maxWidth: '780px',
                fontFamily: 'var(--font-body)',
                marginBottom: '26px',
              }}
            >
              End-to-end refrigerated transport for perishable pharmaceutical goods, active biologics, clinical trial samples, and fresh agricultural produce with unbroken temperature monitoring from source to doorstep.
            </p>

            {/* Hero Quick Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '36px',
              }}
            >
              <a
                href="#temperature-zones-section"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(234, 88, 12, 0.3)',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 26px rgba(234, 88, 12, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(234, 88, 12, 0.3)';
                }}
              >
                <span>Explore Temperature Spectrum</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>

              <a
                href="#reefer-calculator-section"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  borderRadius: '10px',
                  background: '#F8FAFC',
                  color: '#082653',
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  border: '1px solid #CBD5E1',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F1F5F9';
                  e.currentTarget.style.borderColor = '#94A3B8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F8FAFC';
                  e.currentTarget.style.borderColor = '#CBD5E1';
                }}
              >
                <Snowflake size={16} color="#EA580C" />
                <span>Reserve Smart Reefer Capacity</span>
              </a>

              <button
                onClick={() => openModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  background: 'transparent',
                  color: '#D97706',
                  fontSize: '13.5px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <Sparkles size={15} />
                <span>Request Validated GDP Pharma Audit</span>
              </button>
            </div>

            {/* KPI Metrics Quick Bar */}
            <div
              className="coldchain-4col-grid"
              style={{
                gap: '14px',
                paddingTop: '20px',
                borderTop: '1px solid #E2E8F0',
                alignItems: 'stretch',
              }}
            >
              {coldChainHeroStats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <Magnet key={idx} {...TILE_MAGNET_PROPS} axis="x" scale={1} padding={12} maxOffset={3} tilt={0.8}>
                    <div
                      style={{
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '12px',
                        padding: '14px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        minWidth: 0,
                        height: '100%',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: 'rgba(234, 88, 12, 0.1)',
                          border: '1px solid rgba(234, 88, 12, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#EA580C',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <IconComponent size={18} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: 'clamp(16px, 1.45vw, 19px)',
                            fontWeight: '800',
                            color: '#082653',
                            lineHeight: '1.2',
                            fontFamily: 'var(--font-heading)',
                            fontVariantNumeric: 'lining-nums tabular-nums',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {stat.value}
                        </div>
                        <div style={{ fontSize: '12px', fontWeight: '700', color: '#475569', marginTop: '2px', lineHeight: '1.3' }}>
                          {stat.label}
                        </div>
                        <div style={{ fontSize: '10.8px', color: '#64748B', marginTop: '2px', lineHeight: '1.35' }}>
                          {stat.sub}
                        </div>
                      </div>
                    </div>
                  </Magnet>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: INTERACTIVE TEMPERATURE SPECTRUM & CLIMATE COCKPIT
            ========================================================================= */}
        <section
          id="temperature-zones-section"
          style={{
            padding: '48px 28px 48px 28px',
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
                  color: '#EA580C',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '6px',
                }}
              >
                <Thermometer size={14} />
                <span>Validated Thermal Preservation Matrices</span>
              </div>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#082653',
                  marginBottom: '10px',
                }}
              >
                Precision Climate Spectrum & Active Packaging
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#64748B',
                  maxWidth: '720px',
                  margin: '0 auto',
                  lineHeight: '1.5',
                }}
              >
                Select a validated temperature bracket to inspect dedicated refrigeration machinery, sensor specifications, and real-time telemetry protocols.
              </p>
            </div>

            {/* Zone Selector Buttons */}
            <div
              className="coldchain-4col-grid"
              style={{
                gap: '12px',
                marginBottom: '24px',
                alignItems: 'stretch',
              }}
            >
              {temperatureZones.map((z) => {
                const isSelected = z.id === activeZoneId;
                return (
                  <Magnet key={z.id} {...TILE_MAGNET_PROPS} axis="x" scale={1} padding={10} maxOffset={3} tilt={0.8}>
                    <button
                      onClick={() => setActiveZoneId(z.id)}
                      style={{
                        width: '100%',
                        padding: '16px 14px',
                        borderRadius: '12px',
                        border: '2px solid',
                        borderColor: isSelected ? z.accent : '#E2E8F0',
                        background: isSelected ? z.badgeBg : '#FFFFFF',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.15s ease',
                        boxShadow: isSelected ? `0 6px 18px ${z.accent}20` : '0 2px 6px rgba(0,0,0,0.02)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minWidth: 0,
                        height: '100%',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
                        <span
                          style={{
                            fontSize: '18px',
                            fontWeight: '900',
                            color: isSelected ? z.accent : '#082653',
                            fontFamily: 'var(--font-heading)',
                            fontVariantNumeric: 'lining-nums tabular-nums',
                          }}
                        >
                          {z.range}
                        </span>
                        <Thermometer size={16} color={isSelected ? z.accent : '#94A3B8'} style={{ flexShrink: 0 }} />
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: isSelected ? '#0F172A' : '#475569' }}>
                        {z.label}
                      </div>
                    </button>
                  </Magnet>
                );
              })}
            </div>

            {/* Active Zone Detail Showcase Cockpit */}
            <div
              style={{
                background: '#FAFBFD',
                borderRadius: '16px',
                border: '1.5px solid #CBD5E1',
                padding: '28px 24px',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', borderBottom: '1px solid #E2E8F0', paddingBottom: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        background: activeZone.badgeBg,
                        color: activeZone.badgeColor,
                        border: `1px solid ${activeZone.badgeColor}40`,
                      }}
                    >
                      {activeZone.badge}
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: activeZone.accent, fontVariantNumeric: 'lining-nums tabular-nums' }}>
                      Validated Target Range: {activeZone.range}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#082653', marginTop: '6px' }}>
                    {activeZone.label}
                  </h3>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    background: '#FFF7ED',
                    border: '1px solid #FED7AA',
                    fontSize: '12.5px',
                    fontWeight: '700',
                    color: '#C2410C',
                    flexShrink: 0,
                  }}
                >
                  <Activity size={16} style={{ flexShrink: 0 }} />
                  <span>Continuous 60-Sec Sensor Telemetry</span>
                </div>
              </div>

              {/* Information Grid */}
              <div
                className="coldchain-modes-grid"
                style={{
                  gap: '16px',
                  marginBottom: '22px',
                }}
              >
                <Magnet {...TILE_MAGNET_PROPS} axis="x" scale={1} padding={10} maxOffset={3} tilt={0.8}>
                  <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E8F0', height: '100%', boxSizing: 'border-box', minWidth: 0 }}>
                    <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                      Target Commodity Profiles:
                    </div>
                    <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#0F172A', marginTop: '4px', lineHeight: '1.45' }}>
                      {activeZone.targetCommodities}
                    </div>
                  </div>
                </Magnet>

                <Magnet {...TILE_MAGNET_PROPS} axis="x" scale={1} padding={10} maxOffset={3} tilt={0.8}>
                  <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E8F0', height: '100%', boxSizing: 'border-box', minWidth: 0 }}>
                    <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                      Refrigeration & Insulation Machinery:
                    </div>
                    <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#0F172A', marginTop: '4px', lineHeight: '1.45' }}>
                      {activeZone.packagingTech}
                    </div>
                  </div>
                </Magnet>

                <Magnet {...TILE_MAGNET_PROPS} axis="x" scale={1} padding={10} maxOffset={3} tilt={0.8}>
                  <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E8F0', height: '100%', boxSizing: 'border-box', minWidth: 0 }}>
                    <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                      Optimal Transport Mode:
                    </div>
                    <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#C2410C', marginTop: '4px', lineHeight: '1.45' }}>
                      {activeZone.idealTransport}
                    </div>
                  </div>
                </Magnet>
              </div>

              {/* Technical Specifications Pills */}
              <div
                className="coldchain-4col-grid"
                style={{
                  gap: '10px',
                  paddingTop: '16px',
                  borderTop: '1px solid #E2E8F0',
                  alignItems: 'stretch',
                }}
              >
                {activeZone.specs.map((s, idx) => (
                  <Magnet key={idx} {...TILE_MAGNET_PROPS} axis="x" scale={1} padding={10} maxOffset={3} tilt={0.8}>
                    <div
                      style={{
                        background: '#FFFFFF',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #E2E8F0',
                        minWidth: 0,
                        height: '100%',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '600' }}>{s.k}</div>
                      <div style={{ fontSize: '13px', color: '#082653', fontWeight: '700', marginTop: '2px', fontVariantNumeric: 'lining-nums tabular-nums' }}>
                        {s.v}
                      </div>
                    </div>
                  </Magnet>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: REEFER CAPACITY BOOKING & ROUTE ESTIMATOR
            ========================================================================= */}
        <section
          id="reefer-calculator-section"
          style={{
            padding: '48px 28px 48px 28px',
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
                  color: '#EA580C',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '6px',
                }}
              >
                <Sliders size={14} />
                <span>Cold Chain Logistics Hub Matrix</span>
              </div>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#082653',
                  marginBottom: '10px',
                }}
              >
                Reserve Validated Temperature-Controlled Transit
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#64748B',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.5',
                }}
              >
                Choose certified reefer port hubs and multi-modal transport modes to secure guaranteed container power plug reservations and thermal logging.
              </p>
            </div>

            {/* Selection Controls Card */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1.5px solid #E2E8F0',
                padding: '24px',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.03)',
                marginBottom: '26px',
              }}
            >
              <div
                className="coldchain-2col-grid"
                style={{
                  marginBottom: '18px',
                }}
              >
                {/* Origin Selector */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#475569',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Origin Certified Cold Port / Hub
                  </label>
                  <select
                    value={originPort}
                    onChange={(e) => setOriginPort(e.target.value)}
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #CBD5E1',
                      background: '#FFFFFF',
                      color: '#0F172A',
                      fontSize: '13.5px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      outline: 'none',
                    }}
                  >
                    {coldChainOrigins.map((o) => (
                      <option key={o.code} value={o.code}>
                        {o.flag} {o.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Destination Selector */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#475569',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Destination Reefer Facility / Gateway
                  </label>
                  <select
                    value={destPort}
                    onChange={(e) => setDestPort(e.target.value)}
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #CBD5E1',
                      background: '#FFFFFF',
                      color: '#0F172A',
                      fontSize: '13.5px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      outline: 'none',
                    }}
                  >
                    {coldChainDestinations.map((d) => (
                      <option key={d.code} value={d.code}>
                        {d.flag} {d.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Status Ribbon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: '#FFF7ED',
                  border: '1px solid #FED7AA',
                  fontSize: '12.5px',
                  color: '#9A3412',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Zap size={15} color="#EA580C" />
                  <span>
                    Seaport Berth Plug Reservation: <strong>Guaranteed 440V / 32A Priority Socket</strong>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={15} color="#D97706" />
                  <span>
                    Continuous Genset Deployment: <strong>Active Clip-On Diesel Standby</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Instant Booking Toast */}
            {bookingToast && (
              <div
                style={{
                  marginBottom: '24px',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
                  border: '1.5px solid #FDBA74',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  boxShadow: '0 6px 18px rgba(234, 88, 12, 0.12)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#EA580C',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: '800', color: '#082653' }}>
                      Smart Reefer Allocation Secured • Ref #{bookingToast.bcn}
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#9A3412', marginTop: '2px' }}>
                      Mode: <strong>{bookingToast.modeName}</strong> | Route: <strong>{bookingToast.origin} → {bookingToast.destination}</strong> ({bookingToast.tempZone}) | Unit: <strong>{bookingToast.equipment}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => openModal('track')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '6px',
                      background: '#EA580C',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      fontWeight: '700',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Track Reefer Fleet
                  </button>
                  <button
                    onClick={() => setBookingToast(null)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '6px',
                      background: 'none',
                      border: '1px solid #FDBA74',
                      color: '#C2410C',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            {/* Service Modes Grid */}
            <div className="coldchain-modes-grid">
              {coldChainServiceModes.map((mode) => {
                const IconComponent = mode.icon;
                return (
                  <Magnet key={mode.id} {...CARD_MAGNET_PROPS} axis="x" scale={1} padding={12} maxOffset={3} tilt={0.8}>
                    <div
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        border: '1.5px solid #E2E8F0',
                        padding: '24px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                        minWidth: 0,
                        boxSizing: 'border-box',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#EA580C';
                        e.currentTarget.style.boxShadow = '0 12px 28px rgba(234, 88, 12, 0.14)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#E2E8F0';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        {/* Mode Icon & Transit */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '14px' }}>
                          <div
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '12px',
                              background: 'rgba(234, 88, 12, 0.12)',
                              color: '#EA580C',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <IconComponent size={22} />
                          </div>
                          <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#C2410C', background: '#FFF7ED', padding: '4px 10px', borderRadius: '9999px', border: '1px solid #FED7AA', flexShrink: 0, whiteSpace: 'nowrap', fontVariantNumeric: 'lining-nums tabular-nums' }}>
                            Est. Transit: {mode.transitSample}
                          </div>
                        </div>

                        <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#082653', marginBottom: '8px', lineHeight: '1.3', minHeight: '48px' }}>
                          {mode.name}
                        </h3>

                        <div style={{ fontSize: '12.5px', color: '#64748B', marginBottom: '14px', lineHeight: '1.4', minHeight: '36px' }}>
                          Equipment: <strong>{mode.equipment}</strong>
                        </div>

                        {/* Pricing Tag */}
                        <div
                          style={{
                            background: '#FAFBFD',
                            borderRadius: '10px',
                            padding: '12px 14px',
                            border: '1px solid #E2E8F0',
                            marginBottom: '16px',
                          }}
                        >
                          <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '600', textTransform: 'uppercase' }}>
                            Estimated Validated Slot Rate
                          </div>
                          <div style={{ fontSize: '20px', fontWeight: '900', color: '#082653', marginTop: '2px', fontFamily: 'var(--font-heading)', fontVariantNumeric: 'lining-nums tabular-nums' }}>
                            {mode.rateEstimate}
                          </div>
                          <div style={{ fontSize: '11px', color: '#EA580C', fontWeight: '700', marginTop: '2px', fontVariantNumeric: 'lining-nums tabular-nums' }}>
                            Operating Window: {mode.tempRange}
                          </div>
                        </div>

                        {/* Features */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
                          {mode.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '8px',
                                fontSize: '12px',
                                color: '#334155',
                                lineHeight: '1.4',
                              }}
                            >
                              <Check size={14} color="#EA580C" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Book Button */}
                      <button
                        onClick={() => handleBookReefer(mode)}
                        style={{
                          width: '100%',
                          padding: '11px',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                          color: '#FFFFFF',
                          fontSize: '13px',
                          fontWeight: '700',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: '0 3px 12px rgba(234, 88, 12, 0.3)',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#C2410C')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#EA580C')}
                      >
                        Reserve Cold Chain Slot
                      </button>
                    </div>
                  </Magnet>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: FOUR CORE CAPABILITY PILLARS
            ========================================================================= */}
        <section
          style={{
            padding: '48px 28px 44px 28px',
            background: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span
                style={{
                  color: '#EA580C',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Comprehensive Cold Chain Engineering
              </span>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#082653',
                  marginTop: '6px',
                  marginBottom: '10px',
                }}
              >
                The Four Pillars of KPL Refrigerated Transit
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#64748B',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.5',
                }}
              >
                Engineered to satisfy the world's most demanding health ministries, biotech research centers, and food safety standards.
              </p>
            </div>

            <div
              className="coldchain-4col-grid"
              style={{
                gap: '20px',
                alignItems: 'stretch',
              }}
            >
              {coldChainPillars.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <Magnet key={pillar.id} {...CARD_MAGNET_PROPS} axis="x" scale={1} padding={12} maxOffset={3} tilt={0.8}>
                    <div
                      style={{
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '16px',
                        padding: '24px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                        minWidth: 0,
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 12px 28px rgba(15, 23, 42, 0.08)';
                        e.currentTarget.style.borderColor = pillar.accent;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = '#E2E8F0';
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        {/* Icon */}
                        <div
                          style={{
                            width: '46px',
                            height: '46px',
                            borderRadius: '12px',
                            background: `${pillar.accent}15`,
                            color: pillar.accent,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '16px',
                            flexShrink: 0,
                          }}
                        >
                          <IconComp size={22} strokeWidth={2.2} />
                        </div>

                        <h3
                          style={{
                            fontSize: '18px',
                            fontWeight: '800',
                            color: '#082653',
                            marginBottom: '8px',
                            lineHeight: '1.25',
                            minHeight: '68px',
                            fontVariantNumeric: 'lining-nums tabular-nums',
                          }}
                        >
                          {pillar.title}
                        </h3>

                        <p
                          style={{
                            fontSize: '13px',
                            color: '#64748B',
                            lineHeight: '1.5',
                            marginBottom: '16px',
                            minHeight: '78px',
                          }}
                        >
                          {pillar.tagline}
                        </p>

                        {/* Feature Bullet points */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {pillar.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '8px',
                                fontSize: '12.5px',
                                color: '#334155',
                                lineHeight: '1.45',
                              }}
                            >
                              <Check size={14} color={pillar.accent} style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid #E2E8F0' }}>
                        <button
                          onClick={() => openModal('quote')}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            color: pillar.accent,
                            fontSize: '13px',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            cursor: 'pointer',
                          }}
                        >
                          <span>Inspect Protocols</span>
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </Magnet>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: REGULATORY & QUALITY CERTIFICATIONS GRID
            ========================================================================= */}
        <section
          style={{
            padding: '44px 28px 44px 28px',
            background: '#FFFFFF',
            color: '#082653',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ color: '#EA580C', fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                International Quality Standards
              </span>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#082653',
                  marginTop: '6px',
                  marginBottom: '10px',
                }}
              >
                Validated Healthcare & Food Safety Accreditations
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#64748B',
                  maxWidth: '680px',
                  margin: '0 auto',
                  lineHeight: '1.5',
                }}
              >
                Our global lanes, reefers, and cold store facilities are certified to the highest international quality, regulatory, and electronic data integrity standards.
              </p>
            </div>

            <div
              className="coldchain-3col-grid"
              style={{
                gap: '16px',
                alignItems: 'stretch',
              }}
            >
              {coldChainCertifications.map((item, idx) => (
                <Magnet key={idx} {...CARD_MAGNET_PROPS} axis="x" scale={1} padding={12} maxOffset={3} tilt={0.8}>
                  <div
                    style={{
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                      padding: '18px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      minWidth: 0,
                      height: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '10px',
                        marginBottom: '12px',
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          background: 'rgba(234, 88, 12, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#EA580C',
                          flexShrink: 0,
                        }}
                      >
                        <ShieldCheck size={18} />
                      </div>

                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          background: 'rgba(234, 88, 12, 0.1)',
                          color: '#C2410C',
                          border: '1px solid rgba(234, 88, 12, 0.25)',
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '15px', fontWeight: '800', color: '#082653', marginBottom: '4px', lineHeight: '1.25', minHeight: '22px', fontVariantNumeric: 'lining-nums tabular-nums' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.45' }}>
                        {item.standard}
                      </div>
                    </div>
                  </div>
                </Magnet>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: FREQUENTLY ASKED QUESTIONS
            ========================================================================= */}
        <section
          style={{
            padding: '44px 28px 44px 28px',
            background: '#FAFBFD',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span
                style={{
                  color: '#EA580C',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Clear Answers For Pharma & Perishables Shippers
              </span>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#082653',
                  marginTop: '6px',
                  marginBottom: '10px',
                }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {coldChainFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                      transition: 'border-color 0.2s ease',
                    }}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '18px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      <span style={{ fontSize: '15px', fontWeight: '700', color: '#0F172A', paddingRight: '16px' }}>
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp size={18} color="#EA580C" style={{ flexShrink: 0 }} />
                      ) : (
                        <ChevronDown size={18} color="#94A3B8" style={{ flexShrink: 0 }} />
                      )}
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: '0 20px 18px 20px',
                          fontSize: '14px',
                          color: '#475569',
                          lineHeight: '1.6',
                          borderTop: '1px solid #F1F5F9',
                          paddingTop: '14px',
                        }}
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: ENTERPRISE CALL TO ACTION
            ========================================================================= */}
        <section
          style={{
            padding: '48px 28px',
            background: '#FFFFFF',
            textAlign: 'center',
            color: '#082653',
            position: 'relative',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: '34px',
                fontWeight: '700',
                color: '#082653',
                marginBottom: '12px',
                lineHeight: '1.2',
              }}
            >
              Protect Your Temperature-Sensitive Cargo with KPL
            </h2>

            <p
              style={{
                fontSize: '15.5px',
                color: '#475569',
                lineHeight: '1.6',
                marginBottom: '26px',
              }}
            >
              Contact our validated cold chain engineering team today to reserve smart reefer slots, deploy cryogenic active packaging, and guarantee unbroken thermal compliance.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => openModal('quote')}
                style={{
                  padding: '12px 28px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  fontSize: '14.5px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(234, 88, 12, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>Request Validated Reefer Quotation</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigate && onNavigate('support')}
                style={{
                  padding: '12px 24px',
                  borderRadius: '10px',
                  background: '#F8FAFC',
                  color: '#082653',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: '1px solid #CBD5E1',
                  cursor: 'pointer',
                }}
              >
                <span>Speak with Cold Chain Specialist</span>
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

