import React, { useState, useRef } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import Magnet, { CARD_MAGNET_PROPS, TILE_MAGNET_PROPS } from '../components/common/Magnet';
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
  const bookingConfirmRef = useRef(null);

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
    setSelectedTierId(tier.id);
    setBookingToast({
      tierId: tier.id,
      tierName: tier.name,
      origin: selectedOrigin.name.split('(')[0].trim(),
      destination: selectedDest.name,
      weight: parcelWeight,
      rate: getTierPrice(tier),
      transitDays: tier.transitDays,
      trackingNo: `KPL-ECOM-${Math.floor(10000000 + Math.random() * 90000000)}`,
    });
    requestAnimationFrame(() => {
      bookingConfirmRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
      <style>{`
        .ecom-4col-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: stretch;
        }
        .ecom-3col-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: stretch;
        }
        .ecom-hubs-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
          align-items: stretch;
        }
        @media (max-width: 1080px) {
          .ecom-4col-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 960px) {
          .ecom-3col-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        @media (max-width: 860px) {
          .ecom-hubs-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        @media (max-width: 560px) {
          .ecom-4col-grid,
          .ecom-3col-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
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
            SECTION 1: HERO BANNER (Clean White with Imperial Purple & Sunset Orange Accents)
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
          {/* Subtle Ambient Radial Glows */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(217, 119, 6, 0.07) 0%, transparent 70%)',
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
                <ShoppingBag size={12} strokeWidth={2.5} />
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
                Logistics Management • Cross-Border E-Commerce
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
              KPL E-Commerce Logistics
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
                <Warehouse size={16} color="#EA580C" />
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
                <CreditCard size={15} />
                <span>Request Custom Enterprise Volume Card</span>
              </button>
            </div>

            {/* KPI Metrics Quick Bar */}
            <div
              className="ecom-4col-grid"
              style={{
                gap: '14px',
                paddingTop: '20px',
                borderTop: '1px solid #E2E8F0',
                alignItems: 'stretch',
              }}
            >
              {ecommerceHeroStats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <Magnet key={idx} {...TILE_MAGNET_PROPS} axis="x" scale={1} padding={12} maxOffset={3} tilt={0.8}>
                    <div
                      style={{
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '12px',
                        padding: '14px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        height: '100%',
                        minWidth: 0,
                        boxSizing: 'border-box',
                      }}
                    >
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '10px',
                          background: 'rgba(234, 88, 12, 0.1)',
                          border: '1px solid rgba(234, 88, 12, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#EA580C',
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent size={19} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: 'clamp(17px, 1.65vw, 19px)',
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
                        <div style={{ fontSize: '12px', fontWeight: '700', color: '#475569', lineHeight: '1.3', marginTop: '2px' }}>
                          {stat.label}
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748B', lineHeight: '1.35', marginTop: '1px' }}>
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
                  color: '#EA580C',
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
                className="ecom-3col-grid"
                style={{
                  gap: '18px',
                  marginBottom: '20px',
                  alignItems: 'end',
                }}
              >
                {/* 1. Origin Dropdown */}
                <div style={{ minWidth: 0 }}>
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
                      boxSizing: 'border-box',
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
                <div style={{ minWidth: 0 }}>
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
                      boxSizing: 'border-box',
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
                <div style={{ minWidth: 0 }}>
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
                          borderColor: parcelWeight === w.key ? '#EA580C' : '#CBD5E1',
                          background: parcelWeight === w.key ? '#FFF7ED' : '#FFFFFF',
                          color: parcelWeight === w.key ? '#C2410C' : '#475569',
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
                  <Truck size={15} color="#EA580C" />
                  <span>
                    Last-Mile Carrier: <strong>{selectedDest.courier}</strong>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={15} color="#D97706" />
                  <span>
                    Duty-Free / Tax Rule: <strong>{selectedDest.deMinimis}</strong>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#C2410C', fontWeight: '700' }}>
                  <CheckCircle2 size={15} />
                  <span>Pre-Lodged DDP Enabled</span>
                </div>
              </div>
            </div>

            {/* Service Tiers Rate Grid */}
            <div
              className="ecom-4col-grid"
              style={{
                gap: '20px',
                alignItems: 'stretch',
              }}
            >
              {ecomServiceTiers.map((tier) => {
                const currentPrice = getTierPrice(tier);
                const isBooked = bookingToast?.tierId === tier.id && selectedTierId === tier.id;
                return (
                  <Magnet key={tier.id} {...CARD_MAGNET_PROPS} axis="x" scale={1} padding={12} maxOffset={3} tilt={0.8}>
                    <div
                      style={{
                        background: '#FFFFFF',
                        border: '1.5px solid',
                        borderColor: isBooked ? tier.badgeColor : '#E2E8F0',
                        borderRadius: '16px',
                        padding: '24px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                        minWidth: 0,
                        boxSizing: 'border-box',
                        boxShadow: isBooked ? `0 12px 28px ${tier.badgeColor}20` : '0 4px 16px rgba(0, 0, 0, 0.04)',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                        position: 'relative',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = tier.badgeColor;
                        e.currentTarget.style.boxShadow = `0 12px 28px ${tier.badgeColor}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = isBooked ? tier.badgeColor : '#E2E8F0';
                        e.currentTarget.style.boxShadow = isBooked ? `0 12px 28px ${tier.badgeColor}20` : '0 4px 16px rgba(0, 0, 0, 0.04)';
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
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

                        {/* 2. Tier Title (Uniform minHeight fits 3-line titles so Transit bar aligns across all 4 cards) */}
                        <h3
                          style={{
                            fontSize: '16.5px',
                            fontWeight: '800',
                            color: '#082653',
                            marginBottom: '12px',
                            lineHeight: '1.35',
                            minHeight: '70px',
                            display: 'flex',
                            alignItems: 'flex-start',
                            fontVariantNumeric: 'lining-nums tabular-nums',
                          }}
                        >
                          {tier.name}
                        </h3>

                        {/* 3. Dedicated Transit Schedule Banner (Single-line alignment with Clock icon) */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '6px',
                            padding: '8px 10px',
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
                              gap: '5px',
                              fontSize: '11px',
                              color: '#64748B',
                              fontWeight: '600',
                              whiteSpace: 'nowrap',
                              flexShrink: 0,
                            }}
                          >
                            <Clock size={12} color="#64748B" style={{ flexShrink: 0 }} />
                            <span>Transit Time:</span>
                          </div>
                          <span
                            style={{
                              fontSize: '11.5px',
                              fontWeight: '800',
                              color: '#0F172A',
                              whiteSpace: 'nowrap',
                              fontVariantNumeric: 'lining-nums tabular-nums',
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
                            minHeight: '96px',
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }}
                        >
                          <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '600', textTransform: 'uppercase', lineHeight: '1.35', minHeight: '30px', fontVariantNumeric: 'lining-nums tabular-nums' }}>
                            Estimated Doorstep Landed Rate ({parcelWeight})
                          </div>
                          <div
                            style={{
                              fontSize: 'clamp(20px, 2vw, 25px)',
                              fontWeight: '900',
                              color: tier.badgeColor,
                              lineHeight: '1.15',
                              marginTop: '3px',
                              fontFamily: 'var(--font-heading)',
                              fontVariantNumeric: 'lining-nums tabular-nums',
                            }}
                          >
                            {currentPrice}
                          </div>
                          <div style={{ fontSize: '11px', color: '#C2410C', fontWeight: '700', marginTop: '3px', lineHeight: '1.35' }}>
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
                        type="button"
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
                          transition: 'filter 0.15s ease, box-shadow 0.15s ease',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.filter = 'brightness(1.06)';
                          e.currentTarget.style.boxShadow = '0 6px 18px rgba(234, 88, 12, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.filter = 'none';
                          e.currentTarget.style.boxShadow = '0 3px 12px rgba(234, 88, 12, 0.3)';
                        }}
                      >
                        {isBooked ? '✓ Dispatch Tier Selected' : 'Book Dispatch Tier'}
                      </button>
                    </div>
                  </Magnet>
                );
              })}
            </div>

            {/* Instant Booking Confirmation Toast (Directly visible beneath clicked tier card) */}
            {bookingToast && (
              <div
                ref={bookingConfirmRef}
                style={{
                  marginTop: '24px',
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
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
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '15px', fontWeight: '800', color: '#082653', fontVariantNumeric: 'lining-nums tabular-nums' }}>
                      E-Commerce Dispatch Confirmed • Ref #{bookingToast.trackingNo}
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#9A3412', marginTop: '2px', fontVariantNumeric: 'lining-nums tabular-nums' }}>
                      Tier: <strong>{bookingToast.tierName}</strong> | Route: <strong>{bookingToast.origin} → {bookingToast.destination}</strong> ({bookingToast.weight}) | Transit: <strong>{bookingToast.transitDays}</strong> | Rate: <strong>{bookingToast.rate}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                  <button
                    type="button"
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
                    Track Dispatch
                  </button>
                  <button
                    type="button"
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
                  color: '#EA580C',
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
              className="ecom-hubs-grid"
              style={{
                gap: '20px',
                alignItems: 'stretch',
              }}
            >
              {/* Left Column: Hub Selector List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: 0 }}>
                {fulfillmentHubs.map((hub) => {
                  const isSelected = hub.id === selectedHubId;
                  return (
                    <Magnet key={hub.id} {...TILE_MAGNET_PROPS} axis="x" scale={1} padding={10} maxOffset={3} tilt={0.8} style={{ display: 'block', width: '100%' }}>
                      <div
                        onClick={() => setSelectedHubId(hub.id)}
                        style={{
                          padding: '16px 18px',
                          borderRadius: '12px',
                          background: isSelected ? '#FFFFFF' : '#F8FAFC',
                          border: '1.5px solid',
                          borderColor: isSelected ? '#EA580C' : '#E2E8F0',
                          boxShadow: isSelected ? '0 6px 18px rgba(234, 88, 12, 0.15)' : 'none',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '4px' }}>
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
                              whiteSpace: 'nowrap',
                              flexShrink: 0,
                            }}
                          >
                            {hub.size}
                          </span>
                        </div>
                        <div style={{ fontSize: '13px', color: '#475569', fontWeight: '600' }}>
                          {hub.location}
                        </div>
                        <div style={{ fontSize: '11.5px', color: '#C2410C', fontWeight: '600', marginTop: '6px' }}>
                          {hub.cutoff}
                        </div>
                      </div>
                    </Magnet>
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
                  minWidth: 0,
                  boxSizing: 'border-box',
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
                      <div style={{ fontSize: '13px', fontWeight: '600', color: '#C2410C', marginTop: '2px' }}>
                        {selectedHub.certifications}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
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
                  color: '#EA580C',
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
              className="ecom-4col-grid"
              style={{
                gap: '20px',
                alignItems: 'stretch',
              }}
            >
              {ecommercePillars.map((pillar) => {
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
                            fontSize: '17.5px',
                            fontWeight: '800',
                            color: '#082653',
                            marginBottom: '8px',
                            lineHeight: '1.25',
                            minHeight: '66px',
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
                            minHeight: '60px',
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
                  </Magnet>
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
            background: '#FFFFFF',
            color: '#082653',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ color: '#EA580C', fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                One-Click Store Connectivity
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
                Seamless Marketplace & Shopping Cart Plugins
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
                Sync products, real-time inventory levels, orders, and automated tracking webhooks with your favorite e-commerce platforms in minutes.
              </p>
            </div>

            <div
              className="ecom-4col-grid"
              style={{
                gap: '16px',
                alignItems: 'stretch',
              }}
            >
              {marketplaceIntegrations.map((item, idx) => (
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
                        <Store size={18} />
                      </div>

                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          background: 'rgba(234, 88, 12, 0.1)',
                          color: '#EA580C',
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
                        {item.category}
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
              Scale Your Cross-Border E-Commerce Business With KPL
            </h2>

            <p
              style={{
                fontSize: '15.5px',
                color: '#475569',
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
                  boxShadow: '0 6px 20px rgba(234, 88, 12, 0.35)',
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
                  background: '#F8FAFC',
                  color: '#082653',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: '1px solid #CBD5E1',
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

