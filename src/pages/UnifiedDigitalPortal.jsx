import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  portalHeroStats,
  corePillars,
  availableOrigins,
  availableDestinations,
  mockCarrierQuotes,
  liveTelemetryShipments,
  platformIntegrations,
  portalFaqs,
} from '../data/unifiedPortalData';
import {
  Cpu,
  Globe,
  Ship,
  Plane,
  Truck,
  TrainFront,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Radio,
  Zap,
  Sliders,
  Sparkles,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Clock,
  Layers,
  Thermometer,
  Compass,
  FileCheck2,
  ExternalLink,
  Lock,
  RefreshCw,
  SlidersHorizontal,
  Check,
  MapPin,
  Calendar,
  DollarSign,
  AlertCircle,
  Database
} from 'lucide-react';

export const UnifiedDigitalPortal = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  // Booking Engine State
  const [origin, setOrigin] = useState('INNSA');
  const [destination, setDestination] = useState('NLRTM');
  const [freightMode, setFreightMode] = useState('fcl'); // fcl, lcl, air, rail
  const [bookingConfirmed, setBookingConfirmed] = useState(null);

  // Live Telemetry Radar State
  const [selectedShipmentId, setSelectedShipmentId] = useState('GL-882104-FCL');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleRefreshTelemetry = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  const selectedShipment =
    liveTelemetryShipments.find((s) => s.id === selectedShipmentId) ||
    liveTelemetryShipments[0];

  const handleBookCarrier = (carrierQuote) => {
    setBookingConfirmed({
      carrier: carrierQuote.carrier,
      rate: carrierQuote.rate,
      originName: availableOrigins.find((o) => o.code === origin)?.name || origin,
      destName: availableDestinations.find((d) => d.code === destination)?.name || destination,
      transit: carrierQuote.transitDays,
      bookingRef: `KPL-BCN-${Math.floor(100000 + Math.random() * 900000)}`,
    });
  };

  return (
    <div
      className="unified-portal-page-root"
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
        currentRoute="unified-digital-portal"
        onNavigate={onNavigate}
      />

      <main style={{ position: 'relative' }}>
        {/* Space between Nav Bar and Hero Banner */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />

        {/* =========================================================================
            SECTION 1: HERO BANNER (Executive Deep Navy & Sunset Orange Glow)
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
          {/* Subtle Ambient Radial Lighting */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, transparent 70%)',
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
              background: 'radial-gradient(circle, rgba(2, 132, 199, 0.12) 0%, transparent 70%)',
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
                background: 'rgba(234, 88, 12, 0.12)',
                border: '1px solid rgba(234, 88, 12, 0.35)',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '5px',
                  background: '#0284C7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <Cpu size={12} strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#FB923C',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Logistics Management • Cloud Platform
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
              Unified Digital Portal
            </h1>

            {/* Subtitle exact description */}
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
              Online dashboard for real-time tracking, multi-carrier bookings, and unified global supply chain orchestration across 350+ certified air, ocean, and ground transport lines.
            </p>

            {/* Action Buttons */}
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
                href="#booking-engine-section"
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
                <span>Launch Multi-Carrier Booking Engine</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>

              <a
                href="#telemetry-radar-section"
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
                <Radio size={16} color="#38BDF8" />
                <span>Live Fleet Radar Telemetry</span>
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
                <span>Request Enterprise Demo Access</span>
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
              {portalHeroStats.map((stat, idx) => {
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
                        borderRadius: '8px',
                        background: 'rgba(234, 88, 12, 0.15)',
                        border: '1px solid rgba(234, 88, 12, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FB923C',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={18} strokeWidth={2.2} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '20px',
                          fontWeight: '800',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-heading)',
                          lineHeight: '1.1',
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontSize: '11.5px',
                          color: 'rgba(255, 255, 255, 0.75)',
                          fontWeight: '500',
                          marginTop: '2px',
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: INTERACTIVE MULTI-CARRIER BOOKING ENGINE
            ========================================================================= */}
        <section
          id="booking-engine-section"
          style={{
            padding: '44px 28px 40px 28px',
            background: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            {/* Section Header */}
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
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
                  marginBottom: '8px',
                }}
              >
                <Sliders size={14} />
                <span>Real-Time Carrier Engine</span>
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
                Instant Multi-Carrier Rate & Capacity Booking
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
                Direct API integration with 350+ global ocean liners and air carriers. Compare verified spot rates, nautical schedules, and book instantly with guaranteed space allocation.
              </p>
            </div>

            {/* Booking Query Bar Card */}
            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
                marginBottom: '28px',
              }}
            >
              {/* Mode Selectors */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  onClick={() => setFreightMode('fcl')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '700',
                    border: '1px solid',
                    borderColor: freightMode === 'fcl' ? '#EA580C' : '#CBD5E1',
                    background: freightMode === 'fcl' ? '#FFF7ED' : '#FFFFFF',
                    color: freightMode === 'fcl' ? '#EA580C' : '#475569',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Ship size={15} />
                  <span>Ocean FCL (Full Container)</span>
                </button>

                <button
                  onClick={() => setFreightMode('lcl')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '700',
                    border: '1px solid',
                    borderColor: freightMode === 'lcl' ? '#EA580C' : '#CBD5E1',
                    background: freightMode === 'lcl' ? '#FFF7ED' : '#FFFFFF',
                    color: freightMode === 'lcl' ? '#EA580C' : '#475569',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Layers size={15} />
                  <span>Ocean LCL (Consolidation)</span>
                </button>

                <button
                  onClick={() => setFreightMode('air')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '700',
                    border: '1px solid',
                    borderColor: freightMode === 'air' ? '#EA580C' : '#CBD5E1',
                    background: freightMode === 'air' ? '#FFF7ED' : '#FFFFFF',
                    color: freightMode === 'air' ? '#EA580C' : '#475569',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Plane size={15} />
                  <span>Air Cargo Priority</span>
                </button>

                <button
                  onClick={() => setFreightMode('rail')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '700',
                    border: '1px solid',
                    borderColor: freightMode === 'rail' ? '#EA580C' : '#CBD5E1',
                    background: freightMode === 'rail' ? '#FFF7ED' : '#FFFFFF',
                    color: freightMode === 'rail' ? '#EA580C' : '#475569',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <TrainFront size={15} />
                  <span>Intermodal Rail</span>
                </button>
              </div>

              {/* Selector Inputs Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '16px',
                  alignItems: 'flex-end',
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
                    Origin Port / Inland Depot
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
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
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                      }}
                    >
                      {availableOrigins.map((orig) => (
                        <option key={orig.code} value={orig.code}>
                          {orig.flag} {orig.name} ({orig.code})
                        </option>
                      ))}
                    </select>
                  </div>
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
                    Destination Port / Gateway
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
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
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                      }}
                    >
                      {availableDestinations.map((dest) => (
                        <option key={dest.code} value={dest.code}>
                          {dest.flag} {dest.name} ({dest.code})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Cargo Ready Date */}
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
                    Target Cargo Ready Date
                  </label>
                  <div
                    style={{
                      height: '46px',
                      padding: '0 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #CBD5E1',
                      background: '#FFFFFF',
                      color: '#0F172A',
                      fontSize: '13.5px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Calendar size={16} color="#64748B" />
                    <span>Next Available Departure (Immediate)</span>
                  </div>
                </div>

                {/* Search Rates Button */}
                <div>
                  <button
                    onClick={() => {
                      // Trigger a quick visual bounce/refresh
                      const el = document.getElementById('quotes-container');
                      if (el) {
                        el.style.opacity = '0.5';
                        setTimeout(() => (el.style.opacity = '1'), 200);
                      }
                    }}
                    style={{
                      width: '100%',
                      height: '46px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #082653 0%, #03132D 100%)',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      fontWeight: '700',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 12px rgba(8, 38, 83, 0.25)',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#051A3B')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#082653')}
                  >
                    <Search size={16} />
                    <span>Query 350+ Live Carriers</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Booking Confirmation Toast / Banner if booked */}
            {bookingConfirmed && (
              <div
                style={{
                  background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
                  border: '1.5px solid #86EFAC',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(22, 101, 52, 0.1)',
                  animation: 'slideUp 0.3s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#16A34A',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: '800', color: '#14532D' }}>
                      Spot Booking Confirmed: {bookingConfirmed.bookingRef}
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#166534', marginTop: '2px' }}>
                      Carrier: <strong>{bookingConfirmed.carrier}</strong> | Rate: <strong>{bookingConfirmed.rate}</strong> | Route: {bookingConfirmed.originName} → {bookingConfirmed.destName}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => openModal('quote')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '6px',
                      background: '#16A34A',
                      color: '#FFFFFF',
                      fontSize: '12.5px',
                      fontWeight: '700',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Download e-Booking Note
                  </button>
                  <button
                    onClick={() => setBookingConfirmed(null)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '6px',
                      background: 'transparent',
                      color: '#166534',
                      fontSize: '12px',
                      fontWeight: '600',
                      border: '1px solid #86EFAC',
                      cursor: 'pointer',
                    }}
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            {/* Carrier Comparison Cards List */}
            <div id="quotes-container" style={{ display: 'flex', flexDirection: 'column', gap: '14px', transition: 'opacity 0.2s ease' }}>
              {mockCarrierQuotes.map((q) => (
                <div
                  key={q.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#EA580C';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(234, 88, 12, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.03)';
                  }}
                >
                  {/* Left: Carrier Identity & Route */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', minWidth: '260px' }}>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '10px',
                        background: '#082653',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '900',
                        fontSize: '11px',
                        letterSpacing: '0.05em',
                        textAlign: 'center',
                        padding: '4px',
                        flexShrink: 0,
                      }}
                    >
                      {q.logoText}
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '16px', fontWeight: '800', color: '#0F172A' }}>
                          {q.carrier}
                        </span>
                        <span
                          style={{
                            fontSize: '10.5px',
                            fontWeight: '700',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            background: '#EFF6FF',
                            color: '#1D4ED8',
                            border: '1px solid #BFDBFE',
                          }}
                        >
                          {q.badge}
                        </span>
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#64748B', marginTop: '2px' }}>
                        Service: <strong>{q.vesselService}</strong> • {q.routeType}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Transit & Schedule */}
                  <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase' }}>
                        Transit Time
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#0F172A', marginTop: '2px' }}>
                        {q.transitDays}
                      </div>
                      <div style={{ fontSize: '11px', color: '#16A34A', fontWeight: '600' }}>
                        {q.reliability} On-Time
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase' }}>
                        Departure
                      </div>
                      <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#334155', marginTop: '2px' }}>
                        {q.departure}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748B' }}>
                        {q.carbonCO2}
                      </div>
                    </div>
                  </div>

                  {/* Right: Price & Instant Book */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', minWidth: '200px', justifyContent: 'flex-end' }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '11px', color: '#94A3B8', textDecoration: 'line-through' }}>
                        {q.originalRate}
                      </div>
                      <div style={{ fontSize: '22px', fontWeight: '900', color: '#EA580C', lineHeight: '1.1' }}>
                        {q.rate}
                      </div>
                      <div style={{ fontSize: '10.5px', color: '#16A34A', fontWeight: '700' }}>
                        Guaranteed Spot Rate
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookCarrier(q)}
                      style={{
                        padding: '10px 18px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: '700',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 3px 10px rgba(234, 88, 12, 0.3)',
                        transition: 'all 0.15s ease',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#C2410C')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#EA580C')}
                    >
                      Book Carrier
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: REAL-TIME FLEET TELEMETRY & CONTAINER RADAR
            ========================================================================= */}
        <section
          id="telemetry-radar-section"
          style={{
            padding: '44px 28px 44px 28px',
            background: '#FAFBFD',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            {/* Section Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#0284C7',
                    fontSize: '12.5px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '6px',
                  }}
                >
                  <Radio size={14} />
                  <span>Real-Time Telematics & Satellite AIS</span>
                </div>
                <h2
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: '30px',
                    fontWeight: '700',
                    color: '#082653',
                  }}
                >
                  Live Fleet Radar & Container Condition Feeds
                </h2>
              </div>

              {/* Live Status indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    background: '#ECFDF5',
                    border: '1px solid #A7F3D0',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#059669',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#10B981',
                      boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.25)',
                    }}
                  />
                  <span>Live Satellite Telemetry Polling (Every 1.2s)</span>
                </div>

                <button
                  onClick={handleRefreshTelemetry}
                  disabled={isRefreshing}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#334155',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <RefreshCw size={13} style={{ animation: isRefreshing ? 'spin 1s linear infinite' : 'none' }} />
                  <span>Sync Telematics</span>
                </button>
              </div>
            </div>

            {/* Telemetry Layout: Left (Shipment List) & Right (Active Telemetry Cockpit) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '20px',
              }}
            >
              {/* Left Column: Shipment Selectors */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {liveTelemetryShipments.map((shipment) => {
                  const isSelected = shipment.id === selectedShipmentId;
                  return (
                    <div
                      key={shipment.id}
                      onClick={() => setSelectedShipmentId(shipment.id)}
                      style={{
                        padding: '16px',
                        borderRadius: '12px',
                        background: isSelected ? '#FFFFFF' : '#F8FAFC',
                        border: '1.5px solid',
                        borderColor: isSelected ? '#EA580C' : '#E2E8F0',
                        boxShadow: isSelected ? '0 6px 18px rgba(234, 88, 12, 0.15)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontSize: '14px', fontWeight: '800', color: '#082653' }}>
                          {shipment.id}
                        </span>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            padding: '3px 8px',
                            borderRadius: '9999px',
                            background: `${shipment.statusColor}15`,
                            color: shipment.statusColor,
                            border: `1px solid ${shipment.statusColor}30`,
                          }}
                        >
                          {shipment.status}
                        </span>
                      </div>

                      <div style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B' }}>
                        {shipment.origin.split(',')[0]} → {shipment.destination.split(',')[0]}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px', fontSize: '11.5px', color: '#64748B' }}>
                        <span>Carrier: <strong>{shipment.carrier}</strong></span>
                        <span>ETA: <strong>{shipment.eta.split('(')[0]}</strong></span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Detailed Telemetry Cockpit Card */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #CBD5E1',
                  padding: '24px',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Cockpit Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '16px', marginBottom: '18px' }}>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: '700', color: '#EA580C', textTransform: 'uppercase' }}>
                        Active Satellite Telemetry Feed
                      </div>
                      <div style={{ fontSize: '20px', fontWeight: '800', color: '#082653', marginTop: '2px' }}>
                        {selectedShipment.id} • {selectedShipment.mode}
                      </div>
                      <div style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>
                        Carrier: <strong>{selectedShipment.carrier}</strong> | Craft: <strong>{selectedShipment.vessel}</strong>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        background: '#FFF7ED',
                        border: '1px solid #FDBA74',
                        color: '#EA580C',
                        fontSize: '12px',
                        fontWeight: '700',
                      }}
                    >
                      {selectedShipment.lastPing}
                    </div>
                  </div>

                  {/* Visual Journey Progress Bar */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
                      <span>Origin: {selectedShipment.origin}</span>
                      <span>Progress: {selectedShipment.progress}%</span>
                      <span>Destination: {selectedShipment.destination}</span>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '8px',
                        background: '#F1F5F9',
                        borderRadius: '4px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: `${selectedShipment.progress}%`,
                          height: '100%',
                          background: 'linear-gradient(90deg, #FF6F00 0%, #EA580C 100%)',
                          borderRadius: '4px',
                          transition: 'width 0.4s ease',
                        }}
                      />
                    </div>
                  </div>

                  {/* 4 Sensor Telematics Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '12px',
                      marginBottom: '20px',
                    }}
                  >
                    <div style={{ background: '#F8FAFC', padding: '12px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '700', color: '#64748B' }}>
                        <Compass size={14} color="#0284C7" />
                        <span>GPS Coordinates</span>
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#0F172A', marginTop: '4px' }}>
                        {selectedShipment.coordinates}
                      </div>
                    </div>

                    <div style={{ background: '#F8FAFC', padding: '12px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '700', color: '#64748B' }}>
                        <Radio size={14} color="#16A34A" />
                        <span>Cruising Speed</span>
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#0F172A', marginTop: '4px' }}>
                        {selectedShipment.speed}
                      </div>
                    </div>

                    <div style={{ background: '#F8FAFC', padding: '12px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '700', color: '#64748B' }}>
                        <Thermometer size={14} color="#EA580C" />
                        <span>Internal Container Temp</span>
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#0F172A', marginTop: '4px' }}>
                        {selectedShipment.temperature}
                      </div>
                    </div>

                    <div style={{ background: '#F8FAFC', padding: '12px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '700', color: '#64748B' }}>
                        <ShieldCheck size={14} color="#7C3AED" />
                        <span>Container Integrity & Shock</span>
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#0F172A', marginTop: '4px' }}>
                        {selectedShipment.shock} (Zero Breach)
                      </div>
                    </div>
                  </div>

                  {/* Current Active Milestone Note */}
                  <div
                    style={{
                      background: 'rgba(2, 132, 199, 0.06)',
                      borderLeft: '4px solid #0284C7',
                      padding: '12px 14px',
                      borderRadius: '0 8px 8px 0',
                      marginBottom: '16px',
                    }}
                  >
                    <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#0369A1' }}>
                      Current Live Milestone:
                    </div>
                    <div style={{ fontSize: '13px', color: '#0F172A', marginTop: '2px', fontWeight: '500' }}>
                      {selectedShipment.currentMilestone}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid #F1F5F9' }}>
                  <div style={{ fontSize: '13px', color: '#64748B' }}>
                    Container No: <strong>{selectedShipment.containerNo}</strong>
                  </div>

                  <button
                    onClick={() => openModal('track')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '6px',
                      background: '#082653',
                      color: '#FFFFFF',
                      fontSize: '12.5px',
                      fontWeight: '700',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span>Full Audit Log</span>
                    <ExternalLink size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: CORE PILLARS & ARCHITECTURAL CAPABILITIES
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
                Comprehensive Platform Architecture
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
                The Four Pillars of Unified Digital Logistics
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
                Engineered to replace siloed logistics emails, spreadsheets, and manual carrier port calls with automated cloud workflows.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '20px',
              }}
            >
              {corePillars.map((pillar) => {
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
                        <span>Explore Capabilities</span>
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
            SECTION 5: ENTERPRISE ERP INTEGRATIONS & PROTOCOLS
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
              <span style={{ color: '#FB923C', fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Seamless System Connectivity
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
                Native Connectors for Your Enterprise Stack
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
                Bi-directional synchronization with your corporate ERP, WMS, and TMS systems via standardized RESTful APIs, EDIFACT, and ANSI X12 protocols.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px',
              }}
            >
              {platformIntegrations.map((item, idx) => (
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
                        background: 'rgba(2, 132, 199, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#38BDF8',
                      }}
                    >
                      <Database size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: '800', color: '#FFFFFF' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>
                        {item.type}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '4px 8px',
                      borderRadius: '9999px',
                      background: 'rgba(234, 88, 12, 0.2)',
                      color: '#FB923C',
                      border: '1px solid rgba(234, 88, 12, 0.35)',
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
                  color: '#EA580C',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Clear Answers For Shippers & Forwarders
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
              {portalFaqs.map((faq, idx) => {
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
              Ready to Modernize Your Global Logistics Operations?
            </h2>

            <p
              style={{
                fontSize: '15.5px',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: '1.6',
                marginBottom: '26px',
              }}
            >
              Get started with KPL Unified Digital Portal today. Unlock multi-carrier spot rates, instant vessel booking confirmations, and 24/7 satellite container tracking.
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
                <span>Request Custom Enterprise Portal Setup</span>
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
                <span>Contact Logistics Engineering Desk</span>
              </button>
            </div>
          </div>
        </section>

        {/* Space between Bottom Banner and Footer */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />
      </main>

      {/* 3. Shared Global Link Footer */}
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

