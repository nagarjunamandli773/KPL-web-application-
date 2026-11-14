import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import Magnet, { CARD_MAGNET_PROPS, TILE_MAGNET_PROPS } from '../components/common/Magnet';
import {
  fashionHeroStats,
  fashionSimulatorTiers,
  fashionSimulatorModes,
  fashionSimulatorVolumes,
  fashionPillars,
  fashionGallery,
  fashionComplianceMatrix,
  fashionCaseStudies,
  fashionStandards,
  fashionFaqs
} from '../data/fashionApparelData';
import {
  Shirt,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
  Tag,
  RotateCcw,
  SlidersHorizontal,
  Scissors,
  Layers,
  Award,
  Globe,
  Truck,
  Box,
  Warehouse,
  ShoppingBag,
  Eye,
  Check,
  CheckCheck,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  Sparkle
} from 'lucide-react';

export const FashionApparel = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  // Simulator State
  const [selectedTierId, setSelectedTierId] = useState('luxury-runway');
  const [selectedModeId, setSelectedModeId] = useState('goh-container');
  const [selectedVolId, setSelectedVolId] = useState('vol-500k');
  const [simulatorToast, setSimulatorToast] = useState(null);

  // Gallery Active Preview Filter
  const [galleryFilter, setGalleryFilter] = useState('all');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const selectedTier =
    fashionSimulatorTiers.find((t) => t.id === selectedTierId) || fashionSimulatorTiers[0];
  const selectedMode =
    fashionSimulatorModes.find((m) => m.id === selectedModeId) || fashionSimulatorModes[0];
  const selectedVol =
    fashionSimulatorVolumes.find((v) => v.id === selectedVolId) || fashionSimulatorVolumes[1];

  const handleGenerateRoadmap = () => {
    setSimulatorToast({
      id: `FASHION-DROP-${Math.floor(100000 + Math.random() * 900000)}`,
      tier: selectedTier.name,
      mode: selectedMode.name,
      volume: selectedVol.label,
      turnaround: selectedTier.turnaround,
      savings: selectedVol.estPressingSaved,
      floorScore: selectedMode.storeReadyScore,
    });
  };

  const filteredGallery =
    galleryFilter === 'all'
      ? fashionGallery
      : fashionGallery.filter((item) =>
          item.category.toLowerCase().includes(galleryFilter.toLowerCase())
        );

  return (
    <div
      className="fashion-apparel-page-root"
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
        currentRoute="fashion-and-apparel"
        onNavigate={onNavigate}
      />

      <main style={{ position: 'relative' }}>
        {/* Space between Nav Bar and Hero Banner */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />

        {/* =========================================================================
            SECTION 1: HERO BANNER (Light Orange with Fashion Magenta / Purple Accents)
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
              width: '540px',
              height: '540px',
              background: 'radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, rgba(234, 88, 12, 0.06) 45%, transparent 70%)',
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
              width: '460px',
              height: '460px',
              background: 'radial-gradient(circle, rgba(251, 146, 60, 0.12) 0%, transparent 65%)',
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
            {/* Left Column */}
            <div>
              {/* Eyebrow Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '30px',
                  background: 'rgba(255, 255, 255, 0.75)',
                  border: '1px solid rgba(234, 88, 12, 0.35)',
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
                  ENTERPRISE LOGISTICS • INDUSTRY FOCUS: FASHION & APPAREL
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '38px',
                  lineHeight: '1.2',
                  fontWeight: '700',
                  color: '#082653',
                  margin: '0 0 16px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                Agile Fashion Logistics & Garment-on-Hanger (GOH) Distribution
              </h1>

              {/* Sub-headline */}
              <p
                style={{
                  fontSize: '15.5px',
                  lineHeight: '1.6',
                  color: '#334155',
                  margin: '0 0 28px 0',
                  fontWeight: '400',
                }}
              >
                Orchestrating global fashion supply chains with wrinkle-free Garment-on-Hanger transport, 24h seasonal drop fast-tracking, and 48-hour circular reverse logistics across 18,000+ fashion doors globally. Zero showroom pressing delay. Zero lost sales windows.
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
                    fontSize: '14.5px',
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
                  <span>Schedule Seasonal Collection Audit</span>
                  <ArrowRight size={17} />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('fashion-simulator');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '13px 22px',
                    borderRadius: '8px',
                    background: '#FFFFFF',
                    color: '#082653',
                    fontSize: '14.5px',
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
                  <span>Launch Fashion Simulator</span>
                </button>
              </div>

              {/* Certifications & Compliances Pill Strip */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '8px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(234, 88, 12, 0.18)',
                }}
              >
                {['Garment-on-Hanger Certified', 'RFID EPC Gen2', 'OEKO-TEX Standard 100', 'GOTS Certified Organic'].map((badge) => (
                  <div
                    key={badge}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '4px 9px',
                      borderRadius: '6px',
                      background: '#FFFFFF',
                      border: '1px solid #FED7AA',
                      fontSize: '11.5px',
                      color: '#082653',
                    }}
                  >
                    <CheckCheck size={13} color="#EA580C" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Luxury Showcase Card */}
            <div
              style={{
                position: 'relative',
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #FED7AA',
                padding: '12px',
                boxShadow: '0 20px 40px rgba(234, 88, 12, 0.12)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '260px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/garments.jpg"
                  alt="Garment on Hanger Fleet"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(1.04) contrast(1.03)' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 76%, rgba(0, 0, 0, 0.35) 100%)',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    background: 'rgba(234, 88, 12, 0.92)',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: '800',
                    letterSpacing: '0.04em',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  GOH RAIL FLEET • ZERO WRINKLE
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    right: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#FFFFFF', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
                    Milan • Paris • New York • Tokyo
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '800',
                      color: '#FFFFFF',
                      background: 'rgba(234, 88, 12, 0.92)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      border: '1px solid rgba(254, 215, 170, 0.5)',
                    }}
                  >
                    99.6% ON-TIME
                  </span>
                </div>
              </div>

              {/* Inset Textile Swatch Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '10px',
                  padding: '8px 10px',
                  borderRadius: '8px',
                  background: '#FAFBFD',
                  border: '1px solid #FDBA74',
                }}
              >
                <img
                  src="/product-images/Mulberry Silk Sarees & Fabric.png"
                  alt="Mulberry Silk"
                  style={{ width: '40px', height: '40px', borderRadius: '6px', objectFit: 'cover', border: '1px solid #FDBA74' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#082653' }}>
                    Mulberry Silk & Runway Capsule Pods
                  </div>
                  <div style={{ fontSize: '11px', color: '#C2410C' }}>
                    Climate-regulated sealed freight transport
                  </div>
                </div>
              </div>
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
            {fashionHeroStats.map((stat) => (
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
            SECTION 2: VISUAL FASHION & TEXTILE GALLERY (Attractive High-Res Visuals)
            ========================================================================= */}
        <section
          style={{
            margin: '40px 24px',
            padding: '44px 40px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #FDBA74',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ maxWidth: '720px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  background: 'rgba(234, 88, 12, 0.1)',
                  border: '1px solid rgba(234, 88, 12, 0.25)',
                  color: '#EA580C',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '10px',
                }}
              >
                <Sparkles size={13} />
                <span>VISUAL SUPPLY CHAIN SHOWCASE</span>
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
                Runway to Retail: Specialized Fashion Cargo Capabilities
              </h2>
              <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
                From delicate handwoven mulberry silks to Garment-on-Hanger fleet trailers, inspect our high-touch packaging, moisture barriers, and retail display preparation.
              </p>
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { label: 'All Verticals', val: 'all' },
                { label: 'Haute Couture', val: 'couture' },
                { label: 'GOH Hanging', val: 'store-ready' },
                { label: 'Denim & Textiles', val: 'textile' },
                { label: 'Leather Goods', val: 'luxury' },
              ].map((btn) => {
                const isActive = galleryFilter === btn.val;
                return (
                  <button
                    key={btn.val}
                    onClick={() => setGalleryFilter(btn.val)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      border: isActive ? '1px solid #EA580C' : '1px solid #FDBA74',
                      background: isActive ? '#EA580C' : '#FAFBFD',
                      color: isActive ? '#FFFFFF' : '#475569',
                      fontSize: '12px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gallery Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '24px',
            }}
          >
            {filteredGallery.map((item, idx) => (
              <Magnet key={idx} {...CARD_MAGNET_PROPS}>
                <div
                  style={{
                    background: '#FAFBFD',
                    borderRadius: '14px',
                    border: '1px solid #FDBA74',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = '#EA580C';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(234, 88, 12, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#FDBA74';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                {/* Image Container with Luxury Overlay */}
                <div
                  style={{
                    position: 'relative',
                    height: '220px',
                    width: '100%',
                    background: '#FFF7ED',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(234, 88, 12, 0.92)',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: '700',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                    }}
                  >
                    {item.category}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(234, 88, 12, 0.92)',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: '800',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    }}
                  >
                    {item.highlight}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3
                      style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#082653',
                        margin: '0 0 8px 0',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.55', margin: '0 0 16px 0' }}>
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => openModal('quote')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'none',
                      border: 'none',
                      color: '#EA580C',
                      fontSize: '12.5px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <span>Request Packaging Specs</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
              </Magnet>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: INTERACTIVE FASHION VELOCITY & SEASONAL DROP SIMULATOR
            ========================================================================= */}
        <section
          id="fashion-simulator"
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
                background: 'rgba(234, 88, 12, 0.1)',
                border: '1px solid rgba(234, 88, 12, 0.25)',
                color: '#EA580C',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '10px',
              }}
            >
              <SlidersHorizontal size={13} />
              <span>COLLECTION VELOCITY SIMULATOR</span>
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
              Fashion Velocity & Floor-Ready Drop Calculator
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
              Select your apparel tier, transit packaging configuration, and seasonal unit volume to project store arrival velocity, floor-ready display scoring, and pressing labor cost elimination.
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
              {/* Step 1: Apparel Tier */}
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
                  Step 1 • Select Apparel & Textile Tier
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '10px' }}>
                  {fashionSimulatorTiers.map((tier) => {
                    const isSelected = selectedTierId === tier.id;
                    return (
                      <Magnet key={tier.id} {...TILE_MAGNET_PROPS} style={{ display: 'block', width: '100%' }}>
                        <div
                          onClick={() => setSelectedTierId(tier.id)}
                          style={{
                            padding: '14px 16px',
                            borderRadius: '10px',
                            border: isSelected ? '2px solid #EA580C' : '1px solid #FDBA74',
                            background: isSelected ? 'rgba(234, 88, 12, 0.04)' : '#FAFBFD',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '12px',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img
                              src={tier.image}
                              alt={tier.name}
                              style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '8px',
                                objectFit: 'cover',
                                border: '1px solid #FDBA74',
                                flexShrink: 0,
                              }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              <span style={{ fontSize: '13.5px', fontWeight: '700', color: isSelected ? '#082653' : '#1E293B' }}>
                                {tier.name}
                              </span>
                              <span style={{ fontSize: '11.5px', color: '#64748B' }}>
                                {tier.badge} • {tier.idealCondition}
                              </span>
                            </div>
                          </div>
                          <div
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              border: isSelected ? '6px solid #EA580C' : '2px solid #CBD5E1',
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

              {/* Step 2: Packaging Mode */}
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
                  Step 2 • Transit Packaging & Handling System
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '10px' }}>
                  {fashionSimulatorModes.map((mode) => {
                    const isSelected = selectedModeId === mode.id;
                    return (
                      <Magnet key={mode.id} {...TILE_MAGNET_PROPS} style={{ display: 'block', width: '100%' }}>
                        <div
                          onClick={() => setSelectedModeId(mode.id)}
                          style={{
                            padding: '12px 14px',
                            borderRadius: '10px',
                            border: isSelected ? '2px solid #EA580C' : '1px solid #FDBA74',
                            background: isSelected ? '#F1F5F9' : '#FAFBFD',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div>
                            <div style={{ fontSize: '13px', fontWeight: '700', color: '#082653', marginBottom: '2px' }}>
                              {mode.name}
                            </div>
                            <div style={{ fontSize: '11.5px', color: '#64748B' }}>
                              {mode.desc}
                            </div>
                          </div>
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: '700',
                              padding: '3px 8px',
                              borderRadius: '4px',
                              background: isSelected ? '#EA580C' : 'rgba(234, 88, 12, 0.1)',
                              color: isSelected ? '#FFFFFF' : '#EA580C',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {mode.storeReadyScore}
                          </span>
                        </div>
                      </Magnet>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Seasonal Volume */}
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
                  Step 3 • Seasonal Collection Unit Volume
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '10px' }}>
                  {fashionSimulatorVolumes.map((vol) => {
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
                            border: isSelected ? '2px solid #EA580C' : '1px solid #FDBA74',
                            background: isSelected ? 'rgba(234, 88, 12, 0.08)' : '#FAFBFD',
                            color: isSelected ? '#C2410C' : '#334155',
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
                    Fashion Drop Projection
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

              {/* Major KPI: Floor-Ready Store Score */}
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
                  Floor-Ready Presentation Score
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '36px', fontWeight: '800', color: '#EA580C' }}>
                    {selectedMode.storeReadyScore}
                  </span>
                  <span style={{ fontSize: '12px', color: '#C2410C', fontWeight: '600' }}>
                    Zero-Wrinkle Guarantee
                  </span>
                </div>
                <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '4px' }}>
                  {selectedTier.gohCapability}
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
                    <div style={{ fontSize: '11px', color: '#475569' }}>Transit Turnaround</div>
                    <div style={{ fontSize: '17px', fontWeight: '700', color: '#082653', marginTop: '2px' }}>
                      {selectedTier.turnaround}
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#64748B' }}>Port to flagship store</div>
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
                    <div style={{ fontSize: '11px', color: '#475569' }}>Lead Time Buffer</div>
                    <div style={{ fontSize: '17px', fontWeight: '700', color: '#D97706', marginTop: '2px' }}>
                      +{selectedVol.bufferDays}
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#64748B' }}>Ahead of runway drop</div>
                  </div>
                </Magnet>

                <Magnet {...TILE_MAGNET_PROPS} style={{ ...TILE_MAGNET_PROPS.style, gridColumn: 'span 2' }}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #FED7AA',
                      height: '100%',
                    }}
                  >
                    <div style={{ fontSize: '11px', color: '#475569' }}>Boutique & Retail Reach</div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#C2410C', marginTop: '2px' }}>
                      {selectedVol.doorReach}
                    </div>
                  </div>
                </Magnet>
              </div>

              {/* Pressing Cost Elimination Box */}
              <div
                style={{
                  background: '#FFF7ED',
                  border: '1px solid #FED7AA',
                  borderRadius: '10px',
                  padding: '14px',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <ShieldCheck size={16} color="#EA580C" />
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#C2410C' }}>
                    Est. Store Pressing Labor Eliminated
                  </span>
                </div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#082653' }}>
                  {selectedVol.estPressingSaved}
                </div>
                <div style={{ fontSize: '11px', color: '#475569', marginTop: '2px' }}>
                  Saves 20–45 mins of backroom steam-ironing per unit.
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
                <span>Generate Fashion Drop Roadmap</span>
                <ArrowRight size={16} />
              </button>

              {/* Toast View */}
              {simulatorToast && (
                <div
                  style={{
                    marginTop: '16px',
                    padding: '14px',
                    background: '#FFF7ED',
                    borderRadius: '8px',
                    border: '1px solid #EA580C',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={15} color="#EA580C" />
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#C2410C' }}>
                        Roadmap {simulatorToast.id} Generated
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
                    Configured for <strong>{simulatorToast.tier}</strong> via <strong>{simulatorToast.mode}</strong>. Floor-ready rating locked at <strong>{simulatorToast.floorScore}</strong> saving <strong>{simulatorToast.savings}</strong> in store labor.
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
                    Deploy Drop Plan with Fashion Specialist →
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: FOUR SPECIALIZED FASHION SUPPLY CHAIN PILLARS
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
                color: '#EA580C',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              FASHION LOGISTICS ARCHITECTURE
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
              Four Pillars of Haute Couture & Retail Apparel Mastery
            </h2>
            <p style={{ fontSize: '15px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
              Engineered specifically for the demands of short seasonal product lifecycles, garment-hanging integrity, and high-velocity omnichannel order fulfillment.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '24px',
            }}
          >
            {fashionPillars.map((pillar) => (
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
                <div>
                  {pillar.image && (
                    <div
                      style={{
                        height: '140px',
                        width: '100%',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        marginBottom: '18px',
                        position: 'relative',
                      }}
                    >
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(1.04) contrast(1.03)',
                        }}
                      />
                    </div>
                  )}

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
            SECTION 5: FASHION RETAILER & BOUTIQUE COMPLIANCE MATRIX
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
                color: '#EA580C',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              CHANNEL ADHERENCE
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
              Retail Vendor Compliance & Boutique Store Manuals
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
              Department stores and luxury flagships enforce strict ticketing, hanger types, and delivery dock protocols. Here is how KPL guarantees total alignment:
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
                  <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '700' }}>Retail Segment</th>
                  <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '700' }}>Packaging & Hanger Mandate</th>
                  <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '700' }}>Delivery Dock SLA</th>
                  <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '700' }}>KPL Guaranteed Execution</th>
                </tr>
              </thead>
              <tbody>
                {fashionComplianceMatrix.map((row, idx) => (
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
                      {row.requirement}
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '12.5px', fontWeight: '700', color: '#EA580C' }}>
                      {row.sla}
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '12.5px', color: '#1E293B', fontWeight: '500' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={14} color="#EA580C" style={{ flexShrink: 0 }} />
                        <span>{row.kplAdvantage}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: ENTERPRISE FASHION CASE STUDIES
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
                color: '#EA580C',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              REAL-WORLD PROOF
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
              Enterprise Case Studies in Fashion Agility
            </h2>
            <p style={{ fontSize: '15px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
              How luxury fashion houses, fast-fashion retailers, and sustainable denim leaders achieve flawless seasonal launches with KPL.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {fashionCaseStudies.map((cs, idx) => (
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
                <div>
                  <div style={{ fontSize: '11px', fontWeight: '800', color: '#EA580C', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    {cs.scale}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    {cs.image && (
                      <img
                        src={cs.image}
                        alt={cs.client}
                        style={{
                          width: '54px',
                          height: '54px',
                          borderRadius: '8px',
                          objectFit: 'cover',
                          border: '1px solid #FDBA74',
                          flexShrink: 0,
                        }}
                      />
                    )}
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#082653', margin: 0 }}>
                      {cs.client}
                    </h3>
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#B45309' }}>The Bottleneck: </span>
                    <span style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>{cs.challenge}</span>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#EA580C' }}>KPL Solution: </span>
                    <span style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>{cs.solution}</span>
                  </div>

                  <div
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: '#FAFBFD',
                      borderLeft: '3px solid #EA580C',
                      fontStyle: 'italic',
                      fontSize: '13px',
                      color: '#334155',
                      lineHeight: '1.5',
                    }}
                  >
                    "{cs.quote}"
                  </div>
                </div>

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
            SECTION 7: INDUSTRY STANDARDS & ETHICAL CERTIFICATIONS
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
                color: '#EA580C',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              ACCREDITED QUALITY & SUSTAINABILITY
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
              Global Textile & Ethical Trade Standards
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', margin: 0 }}>
              Our fashion warehousing, packaging lines, and cross-docks operate under strict global environmental, chemical, and ethical guidelines.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '16px' }}>
            {fashionStandards.map((std) => (
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
                    <Award size={18} color="#EA580C" />
                    <span style={{ fontSize: '13.5px', fontWeight: '800', color: '#082653' }}>{std.code}</span>
                  </div>
                  <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155' }}>{std.name}</div>
                  <div style={{ fontSize: '11.5px', color: '#64748B', lineHeight: '1.45' }}>{std.desc}</div>
                </div>
              </Magnet>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: TECHNICAL FASHION FAQ ACCORDION
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
                color: '#EA580C',
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
              Frequently Asked Questions: Fashion & Apparel
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', margin: 0 }}>
              Practical insights into GOH conversions, seasonal drop scheduling, reverse logistics restock, and RFID tunnels.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {fashionFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: '10px',
                    border: isOpen ? '1px solid #EA580C' : '1px solid #FDBA74',
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
                    {isOpen ? <ChevronUp size={18} color="#EA580C" /> : <ChevronDown size={18} color="#64748B" />}
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
              LAUNCH YOUR NEXT SEASON WITH KPL
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
              Ready to Upgrade Your Fashion Supply Chain?
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#334155',
                lineHeight: '1.6',
                margin: '0 0 32px 0',
              }}
            >
              Experience seamless Garment-on-Hanger transit, zero-wrinkle retail presentation, and 48-hour return turnaround across Milan, Paris, New York, London, and Tokyo.
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
                <span>Request Fashion Logistics Quote</span>
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
                <span>Download GOH Capability Sheet</span>
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
export default FashionApparel;

