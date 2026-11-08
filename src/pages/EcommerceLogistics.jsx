import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  ecommerceHeroStats,
  ecomOriginCountries,
  ecomDestinationCountries,
  ecomServiceTiers,
  fulfillmentHubs,
  ecommercePillars,
  marketplaceIntegrations,
  ecomFaqs
} from '../data/ecommerceLogisticsData';
import {
  ShoppingBag,
  Globe,
  Truck,
  Plane,
  Ship,
  Package,
  Box,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  RotateCcw,
  Barcode,
  Store,
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
  Warehouse,
  Tag,
  RefreshCw,
  FileCheck2,
  CreditCard
} from 'lucide-react';

export const EcommerceLogistics = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  // Rate Calculator State
  const [originCountry, setOriginCountry] = useState('CN');
  const [destCountry, setDestCountry] = useState('US');
  const [parcelWeight, setParcelWeight] = useState('1kg'); // 500g, 1kg, 2kg, 5kg
  const [selectedTierId, setSelectedTierId] = useState('postal-injection');
  const [bookingToast, setBookingToast] = useState(null);

  // Hub Cockpit State
  const [selectedHubId, setSelectedHubId] = useState('hub-lax');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const selectedHub =
    fulfillmentHubs.find((h) => h.id === selectedHubId) || fulfillmentHubs[0];

  const selectedOrigin =
    ecomOriginCountries.find((o) => o.code === originCountry) || ecomOriginCountries[0];

  const selectedDest =
    ecomDestinationCountries.find((d) => d.code === destCountry) || ecomDestinationCountries[0];

  const getTierPrice = (tier) => {
    if (parcelWeight === '500g') return tier.baseRate500g;
    if (parcelWeight === '1kg') return tier.baseRate1kg;
    if (parcelWeight === '2kg') return tier.baseRate2kg;
    return tier.baseRate5kg;
  };

  const handleBookService = (tier) => {
    setBookingToast({
      tierName: tier.name,
      origin: selectedOrigin.name.split('(')[0].trim(),
      destination: selectedDest.name,
      weight: parcelWeight,
      rate: getTierPrice(tier),
      trackingNo: `KPL-ECOM-${Math.floor(10000000 + Math.random() * 90000000)}`,
    });
  };

  return (
    <div
      className="ecommerce-logistics-page-root"
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
        currentRoute="kpl-ecommerce-logistics"
        onNavigate={onNavigate}
      />

      <main style={{ position: 'relative' }}>
        {/* Space between Nav Bar and Hero Banner */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />

        {/* =========================================================================
            SECTION 1: HERO BANNER (Deep Navy & Imperial Purple / Sunset Orange Accents)
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
          {/* Subtle Ambient Radial Glows */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(156, 39, 176, 0.18) 0%, transparent 70%)',
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
              background: 'radial-gradient(circle, rgba(234, 88, 12, 0.14) 0%, transparent 70%)',
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
                background: 'rgba(156, 39, 176, 0.15)',
                border: '1px solid rgba(156, 39, 176, 0.4)',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '5px',
                  background: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                }}
              >
                <ShoppingBag size={12} strokeWidth={2.5} />
              </div>
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#E9D5FF',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Logistics Management • Cross-Border E-Commerce
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
              KPL E-Commerce Logistics
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
              Direct factory-to-door fulfillment and scalable cross-border parcel delivery. Accelerate your global DTC and marketplace brand with automated customs clearance, micro-fulfillment, and reliable last-mile domestic injection.
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
                href="#shipping-calculator-section"
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
                <span>Calculate Cross-Border Parcel Rates</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>

              <a
                href="#fulfillment-hubs-section"
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
                <Warehouse size={16} color="#C084FC" />
                <span>Explore Global Fulfillment Network</span>
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
                <span>Request Custom Enterprise Volume Card</span>
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
              {ecommerceHeroStats.map((stat, idx) => {
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
                        background: 'rgba(156, 39, 176, 0.25)',
                        border: '1px solid rgba(156, 39, 176, 0.45)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#E9D5FF',
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
            SECTION 2: INTERACTIVE PARCEL SHIPPING RATE & TRANSIT ENGINE
            ========================================================================= */}
        <section
          id="shipping-calculator-section"
          style={{
            padding: '44px 28px 48px 28px',
            background: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#9C27B0',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '6px',
                }}
              >
                <Sliders size={14} />
                <span>Transparent Cross-Border Parcel Matrix</span>
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
                Instant Cross-Border Delivery Rate Calculator
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
                Select your origin fulfillment hub, target destination country, and parcel weight class to discover instant transparent rates with zero hidden doorstep fees.
              </p>
            </div>

            {/* Interactive Control Cockpit Panel */}
            <div
              style={{
                background: '#FAFBFD',
                border: '1.5px solid #E2E8F0',
                borderRadius: '16px',
                padding: '24px',
                marginBottom: '28px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
              }}
            >
              {/* Controls Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '18px',
                  marginBottom: '20px',
                }}
              >
                {/* 1. Origin Dropdown */}
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
                    1. Origin Factory / Sourcing Hub
                  </label>
                  <select
                    value={originCountry}
                    onChange={(e) => setOriginCountry(e.target.value)}
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
                    {ecomOriginCountries.map((o) => (
                      <option key={o.code} value={o.code}>
                        {o.flag} {o.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Destination Dropdown */}
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
                    2. Destination Delivery Market
                  </label>
                  <select
                    value={destCountry}
                    onChange={(e) => setDestCountry(e.target.value)}
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
                    {ecomDestinationCountries.map((d) => (
                      <option key={d.code} value={d.code}>
                        {d.flag} {d.name} ({d.deMinimis})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Weight Pill Switcher */}
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
                    3. Parcel Weight Class
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                    {[
                      { key: '500g', label: '500g' },
                      { key: '1kg', label: '1.0 kg' },
                      { key: '2kg', label: '2.0 kg' },
                      { key: '5kg', label: '5.0 kg' },
                    ].map((w) => (
                      <button
                        key={w.key}
                        onClick={() => setParcelWeight(w.key)}
                        style={{
                          height: '46px',
                          borderRadius: '8px',
                          border: '1.5px solid',
                          borderColor: parcelWeight === w.key ? '#9C27B0' : '#CBD5E1',
                          background: parcelWeight === w.key ? '#F3E8FF' : '#FFFFFF',
                          color: parcelWeight === w.key ? '#7B1FA2' : '#475569',
                          fontWeight: '700',
                          fontSize: '13px',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        {w.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Destination Courier & Customs Helper Ribbon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  fontSize: '12.5px',
                  color: '#334155',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Truck size={15} color="#059669" />
                  <span>
                    Last-Mile Carrier: <strong>{selectedDest.courier}</strong>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={15} color="#0284C7" />
                  <span>
                    Duty-Free / Tax Rule: <strong>{selectedDest.deMinimis}</strong>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16A34A', fontWeight: '700' }}>
                  <CheckCircle2 size={15} />
                  <span>Pre-Lodged DDP Enabled</span>
                </div>
              </div>
            </div>

            {/* Instant Booking Confirmation Toast */}
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
                      E-Commerce Dispatch Confirmed • Ref #{bookingToast.trackingNo}
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#047857', marginTop: '2px' }}>
                      Tier: <strong>{bookingToast.tierName}</strong> | Route: <strong>{bookingToast.origin} → {bookingToast.destination}</strong> ({bookingToast.weight}) | Rate: <strong>{bookingToast.rate}</strong>
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
                    Track Dispatch
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

            {/* Service Tiers Rate Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
              }}
            >
              {ecomServiceTiers.map((tier) => {
                const currentPrice = getTierPrice(tier);
                return (
                  <div
                    key={tier.id}
                    style={{
                      background: '#FFFFFF',
                      border: '1.5px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '24px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = tier.badgeColor;
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = `0 12px 28px ${tier.badgeColor}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                    }}
                  >
                    <div>
                      {/* 1. Category Status Badge (Strict minHeight for horizontal alignment) */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          minHeight: '28px',
                          marginBottom: '12px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            padding: '4px 12px',
                            borderRadius: '9999px',
                            background: tier.badgeBg,
                            color: tier.badgeColor,
                            border: `1px solid ${tier.badgeColor}40`,
                            display: 'inline-flex',
                            alignItems: 'center',
                            whiteSpace: 'nowrap',
                            letterSpacing: '0.01em',
                            boxShadow: `0 1px 3px ${tier.badgeColor}15`,
                          }}
                        >
                          {tier.badge}
                        </span>
                      </div>

                      {/* 2. Tier Title (Uniform minHeight aligns transit schedule bar across all cards) */}
                      <h3
                        style={{
                          fontSize: '17px',
                          fontWeight: '800',
                          color: '#082653',
                          marginBottom: '12px',
                          lineHeight: '1.35',
                          minHeight: '46px',
                          display: 'flex',
                          alignItems: 'flex-start',
                        }}
                      >
                        {tier.name}
                      </h3>

                      {/* 3. Dedicated Transit Schedule Banner (Crisp status strip with Clock icon) */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          marginBottom: '16px',
                          minHeight: '36px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '11.5px',
                            color: '#64748B',
                            fontWeight: '600',
                          }}
                        >
                          <Clock size={13} color="#64748B" />
                          <span>Transit Time:</span>
                        </div>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: '800',
                            color: '#0F172A',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {tier.transitDays}
                        </span>
                      </div>

                      {/* 4. Estimated Price Display Box */}
                      <div
                        style={{
                          background: '#F8FAFC',
                          borderRadius: '10px',
                          padding: '12px 14px',
                          border: '1px solid #E2E8F0',
                          marginBottom: '16px',
                          minHeight: '88px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '600', textTransform: 'uppercase' }}>
                          Estimated Doorstep Landed Rate ({parcelWeight})
                        </div>
                        <div
                          style={{
                            fontSize: '26px',
                            fontWeight: '900',
                            color: tier.badgeColor,
                            lineHeight: '1.1',
                            marginTop: '2px',
                            fontFamily: 'var(--font-heading)',
                          }}
                        >
                          {currentPrice}
                        </div>
                        <div style={{ fontSize: '11px', color: '#059669', fontWeight: '700', marginTop: '2px' }}>
                          Includes Linehaul & Last-Mile Delivery
                        </div>
                      </div>

                      {/* 5. Feature Checklist */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          marginBottom: '18px',
                          minHeight: '144px',
                        }}
                      >
                        {tier.features.map((feat, fIdx) => (
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
                            <Check size={14} color={tier.badgeColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 6. Book Button */}
                    <button
                      onClick={() => handleBookService(tier)}
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
                      Book Dispatch Tier
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: GLOBAL FULFILLMENT & MICRO-WAREHOUSING HUBS
            ========================================================================= */}
        <section
          id="fulfillment-hubs-section"
          style={{
            padding: '48px 28px 48px 28px',
            background: '#FAFBFD',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#9C27B0',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '6px',
                }}
              >
                <Warehouse size={14} />
                <span>Distributed Micro-Fulfillment Topology</span>
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
                Strategic Global Fulfillment Centers
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
                Store bestselling inventory locally in bonded, high-velocity facilities adjacent to key national distribution airfields and container ports.
              </p>
            </div>

            {/* Hub Selector Grid & Active Showcase */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '20px',
              }}
            >
              {/* Left Column: Hub Selector List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {fulfillmentHubs.map((hub) => {
                  const isSelected = hub.id === selectedHubId;
                  return (
                    <div
                      key={hub.id}
                      onClick={() => setSelectedHubId(hub.id)}
                      style={{
                        padding: '16px 18px',
                        borderRadius: '12px',
                        background: isSelected ? '#FFFFFF' : '#F8FAFC',
                        border: '1.5px solid',
                        borderColor: isSelected ? '#9C27B0' : '#E2E8F0',
                        boxShadow: isSelected ? '0 6px 18px rgba(156, 39, 176, 0.15)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '14.5px', fontWeight: '800', color: '#082653' }}>
                          {hub.name}
                        </span>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            padding: '3px 8px',
                            borderRadius: '9999px',
                            background: `${hub.accent}15`,
                            color: hub.accent,
                            border: `1px solid ${hub.accent}30`,
                          }}
                        >
                          {hub.size}
                        </span>
                      </div>
                      <div style={{ fontSize: '13px', color: '#475569', fontWeight: '600' }}>
                        {hub.location}
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#059669', fontWeight: '600', marginTop: '6px' }}>
                        {hub.cutoff}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Detailed Hub Showcase Card */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1.5px solid #CBD5E1',
                  padding: '28px 24px',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '16px', marginBottom: '18px' }}>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: selectedHub.accent, textTransform: 'uppercase' }}>
                      {selectedHub.type}
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#082653', marginTop: '4px' }}>
                      {selectedHub.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748B', fontSize: '13.5px', marginTop: '4px' }}>
                      <MapPin size={15} color={selectedHub.accent} />
                      <span>{selectedHub.location}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '22px' }}>
                    <div style={{ background: '#FAFBFD', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                        Same-Day Fulfillment SLA:
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#0F172A', marginTop: '2px' }}>
                        {selectedHub.cutoff}
                      </div>
                    </div>

                    <div style={{ background: '#FAFBFD', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                        Regional Ground Delivery Coverage:
                      </div>
                      <div style={{ fontSize: '13.5px', color: '#334155', marginTop: '2px', lineHeight: '1.4' }}>
                        {selectedHub.coverage}
                      </div>
                    </div>

                    <div style={{ background: '#FAFBFD', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                        Security & Customs Certifications:
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: '#059669', marginTop: '2px' }}>
                        {selectedHub.certifications}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                  <div style={{ fontSize: '13px', color: '#64748B' }}>
                    Facility Capacity: <strong>Active & Accepting Inventory</strong>
                  </div>
                  <button
                    onClick={() => openModal('quote')}
                    style={{
                      padding: '10px 18px',
                      borderRadius: '8px',
                      background: '#082653',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: '700',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span>Request Inbound Slot</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
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
          <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span
                style={{
                  color: '#9C27B0',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Comprehensive Supply Chain Stack
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
                End-to-End Cross-Border Fulfillment Capabilities
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
                From manufacturing line pickups to automated customs clearance and reverse logistics, our modular infrastructure handles your complete cross-border journey.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '20px',
              }}
            >
              {ecommercePillars.map((pillar) => {
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
                        <span>Learn More</span>
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
            SECTION 5: SHOPPING CART & MARKETPLACE INTEGRATION APIS
            ========================================================================= */}
        <section
          style={{
            padding: '44px 28px 44px 28px',
            background: 'linear-gradient(145deg, #051A3B 0%, #082653 100%)',
            color: '#FFFFFF',
          }}
        >
          <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ color: '#E9D5FF', fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                One-Click Store Connectivity
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
                Seamless Marketplace & Shopping Cart Plugins
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
                Sync products, real-time inventory levels, orders, and automated tracking webhooks with your favorite e-commerce platforms in minutes.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px',
              }}
            >
              {marketplaceIntegrations.map((item, idx) => (
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
                        background: 'rgba(156, 39, 176, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#E9D5FF',
                      }}
                    >
                      <Store size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: '800', color: '#FFFFFF' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>
                        {item.category}
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
                  color: '#9C27B0',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Clear Answers For Global Sellers
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
              {ecomFaqs.map((faq, idx) => {
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
                        <ChevronUp size={18} color="#9C27B0" style={{ flexShrink: 0 }} />
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
              Scale Your Cross-Border E-Commerce Business With KPL
            </h2>

            <p
              style={{
                fontSize: '15.5px',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: '1.6',
                marginBottom: '26px',
              }}
            >
              Connect your online store today to unlock factory-direct parcel shipping, pre-cleared DDP customs, and local domestic returns across 220+ global countries and territories.
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
                <span>Request Custom Volume Rate Card</span>
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
                <span>Talk with E-Commerce Specialist</span>
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

