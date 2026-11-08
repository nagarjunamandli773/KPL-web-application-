import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
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
            SECTION 1: HERO BANNER (Deep Navy with Frost Cyan / Sunset Orange Glow)
            ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '50px 32px 50px 32px',
            background: 'linear-gradient(145deg, #051A3B 0%, #082653 50%, #03132D 100%)',
            borderTop: '1px solid rgba(8, 38, 83, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
          }}
        >
          {/* Ambient Frost Cyan & Warm Amber Radial Lighting */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(0, 188, 212, 0.16) 0%, transparent 70%)',
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
                background: 'rgba(0, 188, 212, 0.15)',
                border: '1px solid rgba(0, 188, 212, 0.4)',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '5px',
                  background: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
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
                  color: '#A5F3FC',
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
                color: '#FFFFFF',
                lineHeight: '1.15',
                letterSpacing: '-0.5px',
                marginBottom: '14px',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.45)',
              }}
            >
              Cold Chain Logistics
            </h1>

            {/* Subtitle exact description from card */}
            <p
              style={{
                fontSize: '17px',
                fontWeight: '400',
                color: 'rgba(255, 255, 255, 0.88)',
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
                  boxShadow: '0 6px 20px rgba(234, 88, 12, 0.4)',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 26px rgba(234, 88, 12, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(234, 88, 12, 0.4)';
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
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
                }}
              >
                <Snowflake size={16} color="#67E8F9" />
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
                  color: '#FFE082',
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
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '14px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              {coldChainHeroStats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(0, 188, 212, 0.25)',
                        border: '1px solid rgba(0, 188, 212, 0.45)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#A5F3FC',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={19} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '19px',
                          fontWeight: '800',
                          color: '#FFFFFF',
                          lineHeight: '1.2',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {stat.value}
                      </div>
                      <div style={{ fontSize: '12px', fontWeight: '700', color: '#CBD5E1', marginTop: '1px' }}>
                        {stat.label}
                      </div>
                      <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)' }}>
                        {stat.sub}
                      </div>
                    </div>
                  </div>
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
                  color: '#00BCD4',
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
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: '12px',
                marginBottom: '24px',
              }}
            >
              {temperatureZones.map((z) => {
                const isSelected = z.id === activeZoneId;
                return (
                  <button
                    key={z.id}
                    onClick={() => setActiveZoneId(z.id)}
                    style={{
                      padding: '16px 14px',
                      borderRadius: '12px',
                      border: '2px solid',
                      borderColor: isSelected ? z.accent : '#E2E8F0',
                      background: isSelected ? z.badgeBg : '#FFFFFF',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease',
                      boxShadow: isSelected ? `0 6px 18px ${z.accent}20` : '0 2px 6px rgba(0,0,0,0.02)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span
                        style={{
                          fontSize: '18px',
                          fontWeight: '900',
                          color: isSelected ? z.accent : '#082653',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {z.range}
                      </span>
                      <Thermometer size={16} color={isSelected ? z.accent : '#94A3B8'} />
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: isSelected ? '#0F172A' : '#475569' }}>
                      {z.label}
                    </div>
                  </button>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                    <span style={{ fontSize: '13px', fontWeight: '700', color: activeZone.accent }}>
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
                    background: '#ECFDF5',
                    border: '1px solid #A7F3D0',
                    fontSize: '12.5px',
                    fontWeight: '700',
                    color: '#059669',
                  }}
                >
                  <Activity size={16} />
                  <span>Continuous 60-Sec Sensor Telemetry</span>
                </div>
              </div>

              {/* Information Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '16px',
                  marginBottom: '22px',
                }}
              >
                <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                    Target Commodity Profiles:
                  </div>
                  <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#0F172A', marginTop: '4px', lineHeight: '1.45' }}>
                    {activeZone.targetCommodities}
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                    Refrigeration & Insulation Machinery:
                  </div>
                  <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#0F172A', marginTop: '4px', lineHeight: '1.45' }}>
                    {activeZone.packagingTech}
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                    Optimal Transport Mode:
                  </div>
                  <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#059669', marginTop: '4px', lineHeight: '1.45' }}>
                    {activeZone.idealTransport}
                  </div>
                </div>
              </div>

              {/* Technical Specifications Pills */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                  gap: '10px',
                  paddingTop: '16px',
                  borderTop: '1px solid #E2E8F0',
                }}
              >
                {activeZone.specs.map((s, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#FFFFFF',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '600' }}>{s.k}</div>
                    <div style={{ fontSize: '13px', color: '#082653', fontWeight: '700', marginTop: '2px' }}>
                      {s.v}
                    </div>
                  </div>
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
                  color: '#00BCD4',
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
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '18px',
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
                  background: '#F0FDFA',
                  border: '1px solid #CCFBF1',
                  fontSize: '12.5px',
                  color: '#0F766E',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Zap size={15} color="#0D9488" />
                  <span>
                    Seaport Berth Plug Reservation: <strong>Guaranteed 440V / 32A Priority Socket</strong>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={15} color="#0D9488" />
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
                  background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
                  border: '1.5px solid #10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  boxShadow: '0 6px 18px rgba(16, 185, 129, 0.15)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#10B981',
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
                    <div style={{ fontSize: '15px', fontWeight: '800', color: '#065F46' }}>
                      Smart Reefer Allocation Secured • Ref #{bookingToast.bcn}
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#047857', marginTop: '2px' }}>
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
                      background: '#047857',
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
                      border: '1px solid #059669',
                      color: '#065F46',
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
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                gap: '20px',
              }}
            >
              {coldChainServiceModes.map((mode) => {
                const IconComponent = mode.icon;
                return (
                  <div
                    key={mode.id}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1.5px solid #E2E8F0',
                      padding: '24px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#00BCD4';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 188, 212, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                    }}
                  >
                    <div>
                      {/* Mode Icon & Transit */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: 'rgba(0, 188, 212, 0.15)',
                            color: '#00BCD4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconComponent size={22} />
                        </div>
                        <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#059669', background: '#ECFDF5', padding: '4px 10px', borderRadius: '9999px', border: '1px solid #A7F3D0' }}>
                          Est. Transit: {mode.transitSample}
                        </div>
                      </div>

                      <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#082653', marginBottom: '8px' }}>
                        {mode.name}
                      </h3>

                      <div style={{ fontSize: '12.5px', color: '#64748B', marginBottom: '14px' }}>
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
                        <div style={{ fontSize: '20px', fontWeight: '900', color: '#082653', marginTop: '2px', fontFamily: 'var(--font-heading)' }}>
                          {mode.rateEstimate}
                        </div>
                        <div style={{ fontSize: '11px', color: '#00BCD4', fontWeight: '700', marginTop: '2px' }}>
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
                            <Check size={14} color="#00BCD4" style={{ flexShrink: 0, marginTop: '2px' }} />
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
                  color: '#00BCD4',
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
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '20px',
              }}
            >
              {coldChainPillars.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    style={{
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '24px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(15, 23, 42, 0.08)';
                      e.currentTarget.style.borderColor = pillar.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                    }}
                  >
                    <div>
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
            background: 'linear-gradient(145deg, #051A3B 0%, #082653 100%)',
            color: '#FFFFFF',
          }}
        >
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ color: '#67E8F9', fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                International Quality Standards
              </span>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  marginTop: '6px',
                  marginBottom: '10px',
                }}
              >
                Validated Healthcare & Food Safety Accreditations
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255, 255, 255, 0.82)',
                  maxWidth: '680px',
                  margin: '0 auto',
                  lineHeight: '1.5',
                }}
              >
                Our global lanes, reefers, and cold store facilities are certified to the highest international quality, regulatory, and electronic data integrity standards.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px',
              }}
            >
              {coldChainCertifications.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '12px',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(0, 188, 212, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#67E8F9',
                      }}
                    >
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: '800', color: '#FFFFFF' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>
                        {item.standard}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '4px 8px',
                      borderRadius: '9999px',
                      background: 'rgba(0, 188, 212, 0.2)',
                      color: '#67E8F9',
                      border: '1px solid rgba(0, 188, 212, 0.35)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
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
                  color: '#00BCD4',
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
                        <ChevronUp size={18} color="#00BCD4" style={{ flexShrink: 0 }} />
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
            background: 'linear-gradient(135deg, #082653 0%, #03132D 100%)',
            textAlign: 'center',
            color: '#FFFFFF',
            position: 'relative',
            borderBottom: '1px solid rgba(8, 38, 83, 0.12)',
          }}
        >
          <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <h2
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: '34px',
                fontWeight: '700',
                color: '#FFFFFF',
                marginBottom: '12px',
                lineHeight: '1.2',
              }}
            >
              Protect Your Temperature-Sensitive Cargo with KPL
            </h2>

            <p
              style={{
                fontSize: '15.5px',
                color: 'rgba(255, 255, 255, 0.85)',
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
                  boxShadow: '0 6px 20px rgba(234, 88, 12, 0.45)',
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
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
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

