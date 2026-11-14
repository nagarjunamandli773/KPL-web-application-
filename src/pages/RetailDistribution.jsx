import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import Magnet, { CARD_MAGNET_PROPS, TILE_MAGNET_PROPS } from '../components/common/Magnet';
import {
  retailHeroStats,
  retailFulfillmentTiers,
  retailReplenishmentModes,
  retailVolumeTiers,
  retailPillars,
  retailGallery,
  retailComplianceMatrix,
  retailCaseStudies,
  retailStandards,
  retailFaqs
} from '../data/retailDistributionData';
import {
  Store,
  Truck,
  Layers,
  CheckCircle2,
  Clock,
  RotateCcw,
  Tag,
  ShieldCheck,
  TrendingUp,
  Warehouse,
  ShoppingBag,
  SlidersHorizontal,
  Box,
  Globe,
  Zap,
  BarChart2,
  Check,
  CheckCheck,
  Award,
  RefreshCw,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  Sparkles,
  MapPin,
  Calendar,
  Building,
  DollarSign
} from 'lucide-react';

export const RetailDistribution = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  // Simulator State
  const [selectedTierId, setSelectedTierId] = useState('store-direct');
  const [selectedModeId, setSelectedModeId] = useState('mode-night-drop');
  const [selectedVolId, setSelectedVolId] = useState('vol-national');
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
    retailFulfillmentTiers.find((t) => t.id === selectedTierId) || retailFulfillmentTiers[0];
  const selectedMode =
    retailReplenishmentModes.find((m) => m.id === selectedModeId) || retailReplenishmentModes[0];
  const selectedVol =
    retailVolumeTiers.find((v) => v.id === selectedVolId) || retailVolumeTiers[1];

  const handleGenerateRoadmap = () => {
    setSimulatorToast({
      id: `RETAIL-DISPATCH-${Math.floor(100000 + Math.random() * 900000)}`,
      tier: selectedTier.name,
      mode: selectedMode.name,
      volume: selectedVol.label,
      turnaround: selectedTier.turnaround,
      slaScore: selectedTier.complianceScore,
      savings: selectedVol.annualSavings,
    });
  };

  const filteredGallery =
    galleryFilter === 'all'
      ? retailGallery
      : retailGallery.filter((item) =>
          item.category.toLowerCase().includes(galleryFilter.toLowerCase())
        );

  return (
    <div
      className="retail-distribution-page-root"
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
        .retail-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
          gap: 36px;
          align-items: center;
        }
        .retail-sim-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          gap: 32px;
          align-items: start;
        }
        .retail-4col-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        .retail-3col-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .retail-5col-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }
        .retail-scale-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }
        .retail-matrix-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr) minmax(0, 1.3fr);
          gap: 18px;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .retail-4col-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .retail-5col-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @media (max-width: 960px) {
          .retail-3col-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 900px) {
          .retail-hero-grid,
          .retail-sim-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        @media (max-width: 780px) {
          .retail-matrix-row {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
          }
        }
        @media (max-width: 580px) {
          .retail-4col-grid,
          .retail-3col-grid,
          .retail-5col-grid,
          .retail-scale-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
      {/* 1. Shared Global Link Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="retail-and-distribution"
        onNavigate={onNavigate}
      />

      <main style={{ position: 'relative' }}>
        {/* Symmetrical Top Space Between Navbar and Hero Banner */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />

        {/* =========================================================================
            SECTION 1: HERO BANNER (Light Orange with Retail Sapphire Accents)
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
              width: '560px',
              height: '560px',
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
              width: '480px',
              height: '480px',
              background: 'radial-gradient(circle, rgba(251, 146, 60, 0.12) 0%, transparent 65%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              filter: 'blur(40px)',
            }}
          />

          <div
            className="retail-hero-grid"
            style={{
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Left Column: Hero Content */}
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
                  ENTERPRISE LOGISTICS • INDUSTRY FOCUS: RETAIL & DISTRIBUTION
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
                Agile Retail Distribution & Omnichannel Store Replenishment
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
                Orchestrating global retail supply chains with sub-6h high-velocity cross-docking, 99.8% OTIF big-box compliance, and unified store + DTC fulfillment across 45,000+ retail doors globally. Zero dock delays. Zero retail chargebacks.
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
                    fontSize: '14px',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 6px 18px rgba(234, 88, 12, 0.3)',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <span>Request Retail Logistics Quote</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href="#retail-simulator-section"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '13px 22px',
                    borderRadius: '8px',
                    background: '#FFFFFF',
                    color: '#082653',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: '1px solid #FDBA74',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(234, 88, 12, 0.08)',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#FFFBEB')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
                >
                  <SlidersHorizontal size={14} color="#EA580C" />
                  <span>Configure Distribution Model</span>
                </a>
              </div>

              {/* Verified Trust Strip */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  fontSize: '12px',
                  color: '#334155',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={15} color="#EA580C" />
                  <span>Walmart SQEP & Target OTIF Certified</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={15} color="#EA580C" />
                  <span>GS1-128 EDI 856 Automated</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Truck size={15} color="#D97706" />
                  <span>Night-Drop Store Fleets</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase Frame */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #FED7AA',
                  boxShadow: '0 20px 45px rgba(234, 88, 12, 0.15)',
                  background: '#FFF7ED',
                }}
              >
                <img
                  src="/hero-logistics.jpg"
                  alt="High-Bay Automated Retail Distribution Hub"
                  style={{
                    width: '100%',
                    height: '340px',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'brightness(1.04) contrast(1.03)',
                  }}
                />

                {/* Overlay Badge 1: Top Right */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(255, 247, 237, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid #FDBA74',
                    borderRadius: '10px',
                    padding: '8px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Store size={14} color="#EA580C" />
                  <div>
                    <div style={{ fontSize: '10px', color: '#475569', fontWeight: '600', textTransform: 'uppercase' }}>
                      Retail Network
                    </div>
                    <div style={{ fontSize: '13px', color: '#0F172A', fontWeight: '800' }}>
                      45,000+ Direct Doors
                    </div>
                  </div>
                </div>

                {/* Overlay Badge 2: Bottom Floating Bar */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'rgba(255, 247, 237, 0.95)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid #FDBA74',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: 'rgba(234, 88, 12, 0.14)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Zap size={18} color="#EA580C" />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#475569', fontWeight: '600' }}>
                        Cross-Dock Flow
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: '800', color: '#0F172A' }}>
                        Sub-6h Container-to-Floor
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      background: '#FFEDD5',
                      color: '#C2410C',
                      border: '1px solid #FDBA74',
                    }}
                  >
                    100% OTIF SLA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: LIVE KPI METRICS BAR (4 Clean Cards Across Container)
            ========================================================================= */}
        <section style={{ margin: '24px 24px 0 24px' }}>
          <div
            className="retail-4col-grid"
            style={{
              gap: '16px',
              alignItems: 'stretch',
            }}
          >
            {retailHeroStats.map((stat, sIdx) => {
              const IconComp = stat.icon;
              return (
                <Magnet key={sIdx} {...TILE_MAGNET_PROPS}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      border: '1.5px solid #FDBA74',
                      borderRadius: '14px',
                      padding: '20px 22px',
                      boxShadow: '0 4px 16px rgba(234, 88, 12, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      height: '100%',
                      minWidth: 0,
                      boxSizing: 'border-box',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#EA580C';
                      e.currentTarget.style.boxShadow = '0 10px 24px rgba(234, 88, 12, 0.14)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#FDBA74';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(234, 88, 12, 0.06)';
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: '10px',
                        minHeight: '44px',
                        marginBottom: '10px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          color: '#64748B',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          lineHeight: '1.35',
                          minWidth: 0,
                        }}
                      >
                        {stat.label}
                      </span>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: `${stat.accent}12`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <IconComp size={16} color={stat.accent} />
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: '28px',
                        fontWeight: '800',
                        color: '#082653',
                        fontFamily: 'Georgia, serif',
                        fontVariantNumeric: 'lining-nums tabular-nums',
                        lineHeight: '1.15',
                        minHeight: '34px',
                        marginBottom: '6px',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#64748B', lineHeight: '1.45', fontWeight: '500' }}>
                      {stat.sub}
                    </div>
                  </div>
                </Magnet>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: INTERACTIVE RETAIL FULFILLMENT & VELOCITY SIMULATOR
            ========================================================================= */}
        <section
          id="retail-simulator-section"
          style={{
            margin: '36px 24px 0 24px',
            background: '#FFFFFF',
            border: '1.5px solid #FDBA74',
            borderRadius: '16px',
            padding: '36px 32px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 32px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#EA580C',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}
            >
              <SlidersHorizontal size={14} />
              <span>Interactive Omnichannel Dispatch Simulator</span>
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
              Configure Your Retail Store & DC Replenishment Matrix
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
              Select your distribution model, replenishment mode, and store network scale to instantly project cross-dock turnaround times, OTIF chargeback protection, and estimated supply chain savings.
            </p>
          </div>

          <div
            className="retail-sim-grid"
          >
            {/* Left Column: Interactive Selectors */}
            <div style={{ minWidth: 0 }}>
              {/* Step 1: Select Distribution Model */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#082653', marginBottom: '10px' }}>
                  Step 1: Select Distribution & Fulfillment Tier
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', alignItems: 'stretch' }}>
                  {retailFulfillmentTiers.map((tier) => {
                    const isSelected = tier.id === selectedTierId;
                    return (
                      <Magnet key={tier.id} {...TILE_MAGNET_PROPS}>
                        <div
                          onClick={() => setSelectedTierId(tier.id)}
                          style={{
                            padding: '14px 16px',
                            borderRadius: '10px',
                            border: isSelected ? '2px solid #EA580C' : '1px solid #FDBA74',
                            background: isSelected ? 'rgba(234, 88, 12, 0.05)' : '#FAFBFD',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            height: '100%',
                            minWidth: 0,
                            boxSizing: 'border-box',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                            <span
                              style={{
                                fontSize: '10.5px',
                                fontWeight: '700',
                                padding: '2px 8px',
                                borderRadius: '9999px',
                                background: tier.badgeBg,
                                color: tier.badgeColor,
                                border: `1px solid ${tier.badgeColor}35`,
                              }}
                            >
                              {tier.badge}
                            </span>
                            {isSelected && <Check size={14} color="#EA580C" strokeWidth={3} style={{ flexShrink: 0 }} />}
                          </div>
                          <div style={{ fontSize: '13.5px', fontWeight: '800', color: '#082653' }}>
                            {tier.name}
                          </div>
                          <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '4px' }}>
                            {tier.turnaround}
                          </div>
                        </div>
                      </Magnet>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Replenishment Mode */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#082653', marginBottom: '10px' }}>
                  Step 2: Select Store Receiving & Routing Mode
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {retailReplenishmentModes.map((mode) => {
                    const isSelected = mode.id === selectedModeId;
                    return (
                      <Magnet key={mode.id} {...TILE_MAGNET_PROPS} style={{ display: 'block', width: '100%' }}>
                        <div
                          onClick={() => setSelectedModeId(mode.id)}
                          style={{
                            padding: '12px 16px',
                            borderRadius: '8px',
                            border: isSelected ? '2px solid #EA580C' : '1px solid #FDBA74',
                            background: isSelected ? '#FFF7ED' : '#FFFFFF',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '12px',
                            boxSizing: 'border-box',
                            minWidth: 0,
                          }}
                        >
                          <div style={{ minWidth: 0 }}>
                            <div style={{ fontSize: '13px', fontWeight: '700', color: isSelected ? '#C2410C' : '#0F172A' }}>
                              {mode.name}
                            </div>
                            <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '2px' }}>
                              {mode.desc}
                            </div>
                          </div>
                          <span style={{ fontSize: '11px', fontWeight: '700', color: '#EA580C', whiteSpace: 'nowrap', flexShrink: 0 }}>
                            {mode.storeSla}
                          </span>
                        </div>
                      </Magnet>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Network Scale */}
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#082653', marginBottom: '10px' }}>
                  Step 3: Select Retail Footprint Scale
                </div>
                <div className="retail-scale-grid" style={{ alignItems: 'stretch' }}>
                  {retailVolumeTiers.map((vol) => {
                    const isSelected = vol.id === selectedVolId;
                    return (
                      <Magnet key={vol.id} {...TILE_MAGNET_PROPS}>
                        <div
                          onClick={() => setSelectedVolId(vol.id)}
                          style={{
                            padding: '12px 14px',
                            borderRadius: '8px',
                            border: isSelected ? '2px solid #EA580C' : '1px solid #FDBA74',
                            background: isSelected ? '#FFF7ED' : '#FFFFFF',
                            color: isSelected ? '#9A3412' : '#0F172A',
                            cursor: 'pointer',
                            textAlign: 'center',
                            height: '100%',
                            minWidth: 0,
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }}
                        >
                          <div style={{ fontSize: '12px', fontWeight: '700' }}>{vol.label}</div>
                          <div style={{ fontSize: '11px', color: isSelected ? '#EA580C' : '#64748B', marginTop: '3px' }}>
                            {vol.avgCostPerDrop}
                          </div>
                        </div>
                      </Magnet>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Calculated Cockpit Output Card */}
            <div
              style={{
                background: '#FAFBFD',
                border: '1.5px solid #FDBA74',
                borderRadius: '14px',
                padding: '28px 24px',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
                minWidth: 0,
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: '#EA580C',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <BarChart2 size={20} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                    Calculated Configuration
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: '#082653' }}>
                    {selectedTier.name}
                  </div>
                </div>
              </div>

              {/* Metric Breakdown Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '10px 12px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #FDBA74' }}>
                  <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: '600', flexShrink: 0 }}>Replenishment Window:</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#0F172A', textAlign: 'right' }}>{selectedTier.turnaround}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '10px 12px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #FDBA74' }}>
                  <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: '600', flexShrink: 0 }}>OTIF Compliance Score:</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#EA580C', textAlign: 'right' }}>{selectedTier.complianceScore}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '10px 12px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #FDBA74' }}>
                  <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: '600', flexShrink: 0 }}>Store Receiving SLA:</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#EA580C', textAlign: 'right' }}>{selectedMode.storeSla}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '10px 12px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #FDBA74' }}>
                  <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: '600', flexShrink: 0 }}>Projected Savings:</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#FF6F00', textAlign: 'right' }}>{selectedVol.annualSavings}</span>
                </div>
              </div>

              {/* Key Features List */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#082653', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Guaranteed Execution Features
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {selectedTier.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#334155', lineHeight: '1.4' }}>
                      <CheckCircle2 size={14} color="#EA580C" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleGenerateRoadmap}
                style={{
                  width: '100%',
                  padding: '13px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(234, 88, 12, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <span>Generate Retail Dispatch Roadmap</span>
                <ArrowRight size={15} />
              </button>

              {/* Generated Toast Notification */}
              {simulatorToast && (
                <div
                  style={{
                    marginTop: '16px',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: '#FFF7ED',
                    border: '1px solid #EA580C',
                    fontSize: '12px',
                    color: '#9A3412',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <strong>Ref #{simulatorToast.id}:</strong> Configured for {simulatorToast.volume}.
                  </div>
                  <button
                    onClick={() => setSimulatorToast(null)}
                    style={{ background: 'none', border: 'none', color: '#C2410C', cursor: 'pointer' }}
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: 4 CORE TECHNICAL RETAIL PILLARS (WITH IMAGES & METRICS)
            ========================================================================= */}
        <section style={{ margin: '36px 24px 0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 32px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#EA580C',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}
            >
              <Warehouse size={14} />
              <span>Engineered Retail Capabilities</span>
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
              Enterprise Logistics Pillars for Modern Retail
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
              Purpose-built systems engineered to eliminate big-box chargebacks, unify distributed stock pools, and compress dock-to-shelf transit.
            </p>
          </div>

          <div className="retail-4col-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
            {retailPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <Magnet key={pillar.id} {...CARD_MAGNET_PROPS}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      border: '1.5px solid #FDBA74',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      minWidth: 0,
                      boxSizing: 'border-box',
                      boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#EA580C';
                      e.currentTarget.style.boxShadow = `0 14px 30px ${pillar.accentColor}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#FDBA74';
                      e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.04)';
                    }}
                  >
                  <div style={{ minWidth: 0 }}>
                    {/* Pillar Card Image Banner */}
                    <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          filter: 'brightness(1.04) contrast(1.03)',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          background: 'rgba(234, 88, 12, 0.92)',
                          backdropFilter: 'blur(8px)',
                          borderRadius: '6px',
                          padding: '4px 10px',
                          fontSize: '11px',
                          fontWeight: '700',
                          color: '#FFFFFF',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                        }}
                      >
                        {pillar.badgeText}
                      </div>
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          right: '12px',
                          background: '#FFFFFF',
                          borderRadius: '6px',
                          padding: '3px 8px',
                          fontSize: '11px',
                          fontWeight: '800',
                          color: pillar.accentColor,
                        }}
                      >
                        {pillar.metric}
                      </div>
                    </div>

                    {/* Pillar Content Body */}
                    <div style={{ padding: '22px 20px 14px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minHeight: '44px', marginBottom: '8px' }}>
                        <div
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '6px',
                            background: `${pillar.accentColor}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <IconComp size={15} color={pillar.accentColor} />
                        </div>
                        <h3 style={{ fontSize: '16.5px', fontWeight: '800', color: '#082653', margin: 0, lineHeight: '1.25' }}>
                          {pillar.title}
                        </h3>
                      </div>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: pillar.accentColor, marginBottom: '10px', minHeight: '54px', lineHeight: '1.45' }}>
                        {pillar.tagline}
                      </div>
                      <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', marginBottom: '14px', minHeight: '118px' }}>
                        {pillar.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                        {pillar.points.map((pt, pIdx) => (
                          <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', fontSize: '12px', color: '#334155', lineHeight: '1.4' }}>
                            <Check size={13} color={pillar.accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Trigger */}
                  <div style={{ padding: '14px 20px 20px 20px' }}>
                    <button
                      onClick={() => openModal('quote')}
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '6px',
                        background: '#FAFBFD',
                        border: '1px solid #FDBA74',
                        color: '#082653',
                        fontSize: '12.5px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = pillar.accentColor;
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.borderColor = '#EA580C';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#FAFBFD';
                        e.currentTarget.style.color = '#082653';
                        e.currentTarget.style.borderColor = '#FDBA74';
                      }}
                    >
                      <span>Inquire About {pillar.title.split(' ')[0]}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
                </Magnet>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: HIGH-RESOLUTION 8-CARD SHOWCASE GALLERY
            ========================================================================= */}
        <section style={{ margin: '36px 24px 0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 28px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#EA580C',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}
            >
              <Store size={14} />
              <span>Omnichannel Distribution Showcase</span>
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
              High-Velocity Retail Logistics in Motion
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
              From high-bay ASRS automated fulfillment centers to dedicated multi-drop store trailers, explore our specialized retail infrastructure.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              marginBottom: '24px',
            }}
          >
            {[
              { id: 'all', label: 'All Operations' },
              { id: 'distribution', label: 'Distribution Centers' },
              { id: 'store', label: 'Store Fleets' },
              { id: 'grocery', label: 'Grocery & FMCG' },
              { id: 'intermodal', label: 'Port Intermodal' },
            ].map((tab) => {
              const active = galleryFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setGalleryFilter(tab.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    fontSize: '12.5px',
                    fontWeight: active ? '700' : '600',
                    background: active ? '#EA580C' : '#FFFFFF',
                    color: active ? '#FFFFFF' : '#475569',
                    border: active ? '1px solid #EA580C' : '1px solid #FDBA74',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* 8-Card Grid */}
          <div
            className="retail-4col-grid"
            style={{
              gap: '20px',
              alignItems: 'stretch',
            }}
          >
            {filteredGallery.map((item, gIdx) => (
              <Magnet key={gIdx} {...CARD_MAGNET_PROPS}>
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid #FDBA74',
                    overflow: 'hidden',
                    height: '100%',
                    minWidth: 0,
                    boxSizing: 'border-box',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(15, 23, 42, 0.1)';
                    e.currentTarget.style.borderColor = '#EA580C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                    e.currentTarget.style.borderColor = '#FDBA74';
                  }}
                >
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(234, 88, 12, 0.92)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      fontSize: '10.5px',
                      fontWeight: '700',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {item.category}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: '#FFFFFF',
                      color: '#EA580C',
                      fontSize: '10.5px',
                      fontWeight: '700',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {item.highlight}
                  </div>
                </div>

                <div style={{ padding: '16px 18px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#082653', margin: '0 0 6px 0', minHeight: '40px', lineHeight: '1.3' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.45', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
              </Magnet>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: BIG-BOX RETAIL COMPLIANCE & OTIF SPECIFICATIONS
            ========================================================================= */}
        <section
          style={{
            margin: '36px 24px 0 24px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1.5px solid #FDBA74',
            padding: '36px 32px',
            boxShadow: '0 6px 24px rgba(0, 0, 0, 0.03)',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 28px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#EA580C',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}
            >
              <ShieldCheck size={14} />
              <span>Zero-Chargeback Guarantee</span>
            </div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '28px',
                fontWeight: '700',
                color: '#082653',
                margin: '0 0 8px 0',
              }}
            >
              Major Retailer Compliance & Inbound Routing Matrix
            </h2>
            <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
              How KPL meets and exceeds the stringent supplier performance requirements of the world’s leading retail organizations.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {retailComplianceMatrix.map((item, cIdx) => (
              <div
                key={cIdx}
                className="retail-matrix-row"
                style={{
                  background: '#FAFBFD',
                  border: '1px solid #FDBA74',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                  <Building size={16} color="#EA580C" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '13.5px', fontWeight: '800', color: '#082653' }}>
                    {item.retailer}
                  </span>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '10.5px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                    Retailer Requirement:
                  </div>
                  <div style={{ fontSize: '12px', color: '#334155', marginTop: '2px', lineHeight: '1.4' }}>
                    {item.requirement}
                  </div>
                </div>
                <div style={{ borderLeft: '2px solid #EA580C', paddingLeft: '14px', minWidth: 0 }}>
                  <div style={{ fontSize: '10.5px', fontWeight: '700', color: '#EA580C', textTransform: 'uppercase' }}>
                    KPL Compliance Capability:
                  </div>
                  <div style={{ fontSize: '12px', color: '#9A3412', marginTop: '2px', lineHeight: '1.4', fontWeight: '500' }}>
                    {item.kplCapability}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: REAL-WORLD RETAIL CASE STUDIES (3 CARDS)
            ========================================================================= */}
        <section style={{ margin: '36px 24px 0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 28px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#EA580C',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}
            >
              <Award size={14} />
              <span>Proven Retail Performance</span>
            </div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '28px',
                fontWeight: '700',
                color: '#082653',
                margin: '0 0 8px 0',
              }}
            >
              Enterprise Retail Supply Chain Case Studies
            </h2>
            <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
              Real-world metrics demonstrating chargeback elimination, inventory synchronization, and nationwide rollout velocity.
            </p>
          </div>

          <div className="retail-3col-grid" style={{ gap: '20px', alignItems: 'stretch' }}>
            {retailCaseStudies.map((cs, csIdx) => (
              <Magnet key={csIdx} {...CARD_MAGNET_PROPS}>
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1.5px solid #FDBA74',
                    padding: '24px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    minWidth: 0,
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'inline-block', fontSize: '11px', fontWeight: '700', color: '#EA580C', background: '#FFF7ED', padding: '3px 8px', borderRadius: '4px', marginBottom: '8px' }}>
                      {cs.scale}
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#082653', margin: '0 0 10px 0', minHeight: '44px', lineHeight: '1.3' }}>
                      {cs.client}
                    </h3>
                    <div style={{ fontSize: '12.5px', color: '#475569', marginBottom: '14px', lineHeight: '1.45', minHeight: '58px' }}>
                      <strong>Challenge:</strong> {cs.challenge}
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#334155', marginBottom: '16px', lineHeight: '1.45', minHeight: '58px' }}>
                      <strong>Solution:</strong> {cs.solution}
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '14px' }}>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: '#EA580C', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Verified Results:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {cs.results.map((r, rIdx) => (
                        <div key={rIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '600', color: '#0F172A' }}>
                          <CheckCheck size={14} color="#EA580C" style={{ flexShrink: 0 }} />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Magnet>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: STANDARDS & ACCREDITATIONS
            ========================================================================= */}
        <section
          style={{
            margin: '36px 24px 0 24px',
            background: '#FAFBFD',
            borderRadius: '16px',
            border: '1px solid #FDBA74',
            padding: '28px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#082653', margin: '0 0 6px 0' }}>
              Accredited Retail Standards & EDI Protocols
            </h3>
            <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>
              Certified data transmission, barcode serialization, and physical security standards.
            </p>
          </div>
          <div className="retail-5col-grid" style={{ gap: '14px', alignItems: 'stretch' }}>
            {retailStandards.map((std, idx) => (
              <Magnet key={idx} {...TILE_MAGNET_PROPS}>
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '10px',
                    border: '1px solid #FDBA74',
                    padding: '16px',
                    textAlign: 'center',
                    height: '100%',
                    minWidth: 0,
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ fontSize: '14px', fontWeight: '800', color: '#082653' }}>{std.name}</div>
                  <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '4px', lineHeight: '1.35' }}>
                    {std.desc}
                  </div>
                </div>
              </Magnet>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: INTERACTIVE FAQ ACCORDION
            ========================================================================= */}
        <section
          style={{
            margin: '36px 24px 0 24px',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1.5px solid #FDBA74',
            padding: '36px 32px',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 28px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#EA580C',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '8px',
              }}
            >
              <span>Frequently Asked Questions</span>
            </div>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '28px',
                fontWeight: '700',
                color: '#082653',
                margin: '0 0 8px 0',
              }}
            >
              Retail & Distribution Logistics Inquiries
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '850px', margin: '0 auto' }}>
            {retailFaqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  style={{
                    border: '1px solid #FDBA74',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    background: isOpen ? '#FAFBFD' : '#FFFFFF',
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : fIdx)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{ fontSize: '14.5px', fontWeight: '700', color: '#082653' }}>
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={16} color="#EA580C" /> : <ChevronDown size={16} color="#94A3B8" />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 20px 16px 20px', fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: BOTTOM EXECUTIVE CTA BANNER (WITH 24PX SYMMETRICAL CLEARANCE)
            ========================================================================= */}
        <section
          style={{
            margin: '36px 24px 0 24px',
            background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 50%, #FFF7ED 100%)',
            border: '1px solid #FED7AA',
            borderRadius: '16px',
            padding: '48px 36px',
            color: '#082653',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(234, 88, 12, 0.08)',
          }}
        >
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '32px',
                fontWeight: '700',
                color: '#082653',
                margin: '0 0 14px 0',
              }}
            >
              Elevate Your Retail Distribution & Eliminate OTIF Chargebacks
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: '#334155',
                lineHeight: '1.6',
                margin: '0 0 28px 0',
              }}
            >
              Connect your production lines directly with Walmart, Target, Amazon, Costco, and supermarket docks with sub-6h cross-docking and guaranteed store replenishment.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => openModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 28px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 18px rgba(234, 88, 12, 0.35)',
                }}
              >
                <span>Request Custom Retail Proposal</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => openModal('quote')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  borderRadius: '8px',
                  background: '#FFFFFF',
                  color: '#082653',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: '1px solid #FED7AA',
                  cursor: 'pointer',
                }}
              >
                <span>Download Retail SLA Matrix</span>
              </button>
            </div>
          </div>
        </section>

        {/* Dedicated 24px Symmetrical Space Above Footer */}
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

export default RetailDistribution;

