import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import Magnet, { CARD_MAGNET_PROPS, TILE_MAGNET_PROPS } from '../components/common/Magnet';
import {
  fourPlHeroStats,
  diagnosticSpendTiers,
  diagnosticCurrentModels,
  diagnosticPriorities,
  comparativeMatrix,
  fourPlPillars,
  fourPlCaseStudies,
  fourPlFaqs
} from '../data/fourPlData';
import {
  Network,
  Globe,
  Truck,
  Plane,
  Ship,
  Layers,
  Sliders,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  FileCheck2,
  Warehouse,
  Radio,
  Activity,
  TrendingUp,
  BarChart3,
  Database,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Check,
  MapPin,
  DollarSign,
  Sparkles,
  ExternalLink,
  Cpu,
  SlidersHorizontal,
  Search,
  Briefcase,
  Building2,
  Users2,
  Award,
  Scale,
  X
} from 'lucide-react';

export const LeadLogisticsPartner = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  // Diagnostic State
  const [selectedSpendId, setSelectedSpendId] = useState('spend-m');
  const [selectedModelId, setSelectedModelId] = useState('model-fragmented');
  const [selectedPriorityId, setSelectedPriorityId] = useState('prio-cost');
  const [diagnosticBlueprintToast, setDiagnosticBlueprintToast] = useState(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const currentSpend =
    diagnosticSpendTiers.find((s) => s.id === selectedSpendId) || diagnosticSpendTiers[1];

  const currentModel =
    diagnosticCurrentModels.find((m) => m.id === selectedModelId) || diagnosticCurrentModels[0];

  const currentPriority =
    diagnosticPriorities.find((p) => p.id === selectedPriorityId) || diagnosticPriorities[0];

  const handleGenerateBlueprint = () => {
    setDiagnosticBlueprintToast({
      spendTier: currentSpend.label,
      savingsRange: `${currentSpend.savingsLow} - ${currentSpend.savingsHigh}`,
      adminRelief: currentSpend.fteSaved,
      priorityFocus: currentPriority.label,
      blueprintRef: `KPL-4PL-BP-${Math.floor(100000 + Math.random() * 900000)}`,
    });
  };

  return (
    <div
      className="four-pl-logistics-page-root"
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
        .fourpl-4col-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: stretch;
        }
        .fourpl-3col-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: stretch;
        }
        @media (max-width: 1060px) {
          .fourpl-4col-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 960px) {
          .fourpl-3col-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        @media (max-width: 640px) {
          .fourpl-section {
            padding: 36px 20px !important;
          }
        }
        @media (max-width: 560px) {
          .fourpl-4col-grid,
          .fourpl-3col-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
      {/* 1. Shared Global Link Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="lead-supply-chain-4pl"
        onNavigate={onNavigate}
      />

      <main style={{ position: 'relative' }}>
        {/* Space between Nav Bar and Hero Banner */}
        <div style={{ height: '24px', width: '100%', background: '#FAFBFD' }} />

        {/* =========================================================================
            SECTION 1: HERO BANNER (Clean White with Executive Slate & Sunset Orange Accents)
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
          {/* Subtle Ambient Radial Lighting */}
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
                <Network size={12} strokeWidth={2.5} />
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
                Logistics Management • 4PL Supply Chain Orchestration
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
              Lead Supply Chain (4PL) Partner
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
              Fully outsourced planning, execution, and tracking of business supply chains. A strategic, non-asset lead logistics partner coordinating all your 3PLs, carriers, customs brokers, and distribution warehouses under one unified control tower.
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
                href="#four-pl-diagnostic-section"
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
                <span>Run 4PL Supply Chain Diagnostic</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>

              <a
                href="#comparative-matrix-section"
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
                <Layers size={16} color="#475569" />
                <span>4PL vs 3PL vs 2PL Comparison</span>
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
                <span>Schedule Executive 4PL Consultation</span>
              </button>
            </div>

            {/* KPI Metrics Quick Bar */}
            <div
              className="fourpl-4col-grid"
              style={{
                gap: '14px',
                paddingTop: '20px',
                borderTop: '1px solid #E2E8F0',
                alignItems: 'stretch',
              }}
            >
              {fourPlHeroStats.map((stat, idx) => {
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
            SECTION 2: INTERACTIVE 4PL SUPPLY CHAIN DIAGNOSTIC & ROI CALCULATOR
            ========================================================================= */}
        <section
          id="four-pl-diagnostic-section"
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
                  color: '#64748B',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '6px',
                }}
              >
                <Sliders size={14} />
                <span>Executive Diagnostic & Feasibility Matrix</span>
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
                Interactive 4PL Value & Cost Reduction Calculator
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
                Model your enterprise freight profile across annual spend, current organizational structure, and strategic priority to calculate estimated hard-dollar savings and headcount efficiency.
              </p>
            </div>

            {/* Diagnostic Input Cockpit */}
            <div
              style={{
                background: '#FAFBFD',
                borderRadius: '16px',
                border: '1.5px solid #CBD5E1',
                padding: '28px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                marginBottom: '24px',
              }}
            >
              {/* Step 1: Spend Tier */}
              <div style={{ marginBottom: '22px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#475569',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  Step 1: Select Total Annual Enterprise Freight Spend
                </label>
                <div className="fourpl-4col-grid" style={{ gap: '10px', alignItems: 'stretch' }}>
                  {diagnosticSpendTiers.map((tier) => {
                    const isSelected = tier.id === selectedSpendId;
                    return (
                      <Magnet key={tier.id} {...TILE_MAGNET_PROPS} axis="x" scale={1} padding={10} maxOffset={3} tilt={0.8}>
                        <button
                          onClick={() => setSelectedSpendId(tier.id)}
                          style={{
                            width: '100%',
                            height: '100%',
                            padding: '12px 14px',
                            borderRadius: '10px',
                            border: '2px solid',
                            borderColor: isSelected ? '#EA580C' : '#CBD5E1',
                            background: isSelected ? '#FFF7ED' : '#FFFFFF',
                            color: isSelected ? '#C2410C' : '#0F172A',
                            fontWeight: '700',
                            fontSize: '13.5px',
                            fontVariantNumeric: 'lining-nums tabular-nums',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            boxSizing: 'border-box',
                          }}
                        >
                          {tier.label}
                        </button>
                      </Magnet>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Current Operating Model */}
              <div style={{ marginBottom: '22px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#475569',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  Step 2: Select Current Logistics Operating Model
                </label>
                <div className="fourpl-4col-grid" style={{ gap: '10px', alignItems: 'stretch' }}>
                  {diagnosticCurrentModels.map((m) => {
                    const isSelected = m.id === selectedModelId;
                    return (
                      <Magnet key={m.id} {...TILE_MAGNET_PROPS} axis="x" scale={1} padding={10} maxOffset={3} tilt={0.8}>
                        <div
                          onClick={() => setSelectedModelId(m.id)}
                          style={{
                            padding: '14px',
                            borderRadius: '10px',
                            border: '1.5px solid',
                            borderColor: isSelected ? '#EA580C' : '#E2E8F0',
                            background: isSelected ? '#FFF7ED' : '#FFFFFF',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            height: '100%',
                            minWidth: 0,
                            boxSizing: 'border-box',
                          }}
                        >
                          <div style={{ fontSize: '13.5px', fontWeight: '800', color: isSelected ? '#C2410C' : '#082653', lineHeight: '1.3', minHeight: '36px' }}>
                            {m.label}
                          </div>
                          <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '4px', lineHeight: '1.35' }}>
                            {m.challenge}
                          </div>
                        </div>
                      </Magnet>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Primary Optimization Priority */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#475569',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  Step 3: Strategic Target & Optimization Focus
                </label>
                <div className="fourpl-4col-grid" style={{ gap: '10px', alignItems: 'stretch' }}>
                  {diagnosticPriorities.map((p) => {
                    const isSelected = p.id === selectedPriorityId;
                    return (
                      <Magnet key={p.id} {...TILE_MAGNET_PROPS} axis="x" scale={1} padding={10} maxOffset={3} tilt={0.8}>
                        <div
                          onClick={() => setSelectedPriorityId(p.id)}
                          style={{
                            padding: '14px',
                            borderRadius: '10px',
                            border: '1.5px solid',
                            borderColor: isSelected ? '#EA580C' : '#E2E8F0',
                            background: isSelected ? '#FFF7ED' : '#FFFFFF',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            height: '100%',
                            minWidth: 0,
                            boxSizing: 'border-box',
                          }}
                        >
                          <div style={{ fontSize: '13.5px', fontWeight: '800', color: isSelected ? '#C2410C' : '#082653', lineHeight: '1.3', minHeight: '36px' }}>
                            {p.label}
                          </div>
                          <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '4px', lineHeight: '1.35' }}>
                            {p.target}
                          </div>
                        </div>
                      </Magnet>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic ROI Calculation Showcase Banner */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  padding: '24px',
                  color: '#082653',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '20px',
                  border: '1.5px solid #CBD5E1',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
                }}
              >
                <div>
                  <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Projected 4PL Hard-Dollar Value & Headcount Relief
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: '900', color: '#082653', marginTop: '4px', fontFamily: 'var(--font-heading)', fontVariantNumeric: 'lining-nums tabular-nums' }}>
                    {currentSpend.savingsLow} – {currentSpend.savingsHigh} <span style={{ fontSize: '14px', fontWeight: '600', color: '#64748B' }}>/ Year in Net Savings</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#475569', marginTop: '4px' }}>
                    Estimated Admin Headcount Reclaimed: <strong>{currentSpend.fteSaved}</strong> • Neutral Rate Arbitrage: <strong>100%</strong>
                  </div>
                </div>

                <button
                  onClick={handleGenerateBlueprint}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                    color: '#FFFFFF',
                    fontSize: '13.5px',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(234, 88, 12, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span>Generate 4PL Blueprint</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Confirmation Banner */}
            {diagnosticBlueprintToast && (
              <div
                style={{
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
                      4PL Architecture Blueprint Generated • Ref #{diagnosticBlueprintToast.blueprintRef}
                    </div>
                    <div style={{ fontSize: '12.5px', color: '#9A3412', marginTop: '2px' }}>
                      Spend Profile: <strong>{diagnosticBlueprintToast.spendTier}</strong> | Target Savings: <strong>{diagnosticBlueprintToast.savingsRange}</strong> | Focus: <strong>{diagnosticBlueprintToast.priorityFocus}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => openModal('quote')}
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
                    Request Executive Dossier
                  </button>
                  <button
                    onClick={() => setDiagnosticBlueprintToast(null)}
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
            SECTION 3: COMPARATIVE MATRIX (4PL VS 3PL VS 2PL)
            ========================================================================= */}
        <section
          id="comparative-matrix-section"
          style={{
            padding: '48px 28px 48px 28px',
            background: '#FAFBFD',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span
                style={{
                  color: '#64748B',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Strategic Operating Model Evaluation
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
                The Evolution from Asset Broker to Lead Strategic Partner
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
                Understand why global enterprises transition from transactional freight forwarders (3PL) to a non-asset Lead Logistics Partner (4PL) holding single-source accountability.
              </p>
            </div>

            {/* Matrix Table */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1.5px solid #CBD5E1',
                overflowX: 'auto',
                boxShadow: '0 6px 22px rgba(15, 23, 42, 0.05)',
              }}
            >
              <table style={{ width: '100%', minWidth: '680px', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#F8FAFC', color: '#082653', borderBottom: '2px solid #E2E8F0' }}>
                    <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '800', width: '28%' }}>
                      Evaluation Dimension
                    </th>
                    <th style={{ padding: '16px 18px', fontSize: '13px', fontWeight: '700', color: '#475569', width: '22%' }}>
                      2PL (Asset Carrier)
                    </th>
                    <th style={{ padding: '16px 18px', fontSize: '13px', fontWeight: '700', color: '#475569', width: '24%' }}>
                      3PL (Freight Forwarder)
                    </th>
                    <th style={{ padding: '16px 20px', fontSize: '13.5px', fontWeight: '900', color: '#B45309', width: '26%', background: '#FFFBEB' }}>
                      KPL Lead 4PL Partner
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparativeMatrix.map((row, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: idx === comparativeMatrix.length - 1 ? 'none' : '1px solid #F1F5F9',
                        background: idx % 2 === 0 ? '#FFFFFF' : '#FAFBFD',
                      }}
                    >
                      <td style={{ padding: '16px 20px', fontSize: '13.5px', fontWeight: '800', color: '#082653' }}>
                        {row.feature}
                      </td>
                      <td style={{ padding: '16px 18px', fontSize: '12.5px', color: '#64748B' }}>
                        {row.twoPl}
                      </td>
                      <td style={{ padding: '16px 18px', fontSize: '12.5px', color: '#475569' }}>
                        {row.threePl}
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13px', fontWeight: '700', color: '#C2410C', background: 'rgba(234, 88, 12, 0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                          <CheckCircle2 size={16} color="#EA580C" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{row.fourPl}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  color: '#64748B',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Comprehensive Strategic Stack
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
                The Four Pillars of KPL 4PL Orchestration
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
                A unified architecture replacing fragmented shipping emails, conflicting freight bills, and manual forwarder phone calls with algorithmic cloud precision.
              </p>
            </div>

            <div
              className="fourpl-4col-grid"
              style={{
                gap: '20px',
                alignItems: 'stretch',
              }}
            >
              {fourPlPillars.map((pillar) => {
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
                            minHeight: '62px',
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
                                minWidth: 0,
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
                          <span>Explore Architecture</span>
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
            SECTION 5: ENTERPRISE PROOF OF VALUE & CASE STUDIES
            ========================================================================= */}
        <section
          style={{
            padding: '48px 28px 48px 28px',
            background: '#FFFFFF',
            color: '#082653',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ color: '#D97706', fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Proven Institutional Track Record
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
                Validated Enterprise Client Transformations
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
                How multinational manufacturers and consumer brands unlocked multi-million-dollar hard savings through KPL 4PL Lead Logistics orchestration.
              </p>
            </div>

            <div
              className="fourpl-3col-grid"
              style={{
                gap: '20px',
                alignItems: 'stretch',
              }}
            >
              {fourPlCaseStudies.map((cs, idx) => {
                const [metricAmount, ...metricWords] = cs.result.split(' ');
                const metricLabel = metricWords.join(' ');
                return (
                  <Magnet key={idx} {...CARD_MAGNET_PROPS} axis="x" scale={1} padding={12} maxOffset={3} tilt={0.8}>
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
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap', minHeight: '28px', marginBottom: '12px' }}>
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: '700',
                              padding: '3px 8px',
                              borderRadius: '9999px',
                              background: '#FFFBEB',
                              color: '#B45309',
                              border: '1px solid #FDE68A',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {cs.industry}
                          </span>
                          <div style={{ fontSize: '12px', color: '#64748B', whiteSpace: 'nowrap', fontVariantNumeric: 'lining-nums tabular-nums' }}>{cs.spend}</div>
                        </div>

                        <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#082653', marginBottom: '10px', lineHeight: '1.3', minHeight: '66px', fontVariantNumeric: 'lining-nums tabular-nums' }}>
                          {cs.headline}
                        </h3>

                        <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', marginBottom: '16px', minHeight: '80px' }}>
                          {cs.summary}
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px' }}>
                          {cs.kpis.map((kpi, kIdx) => (
                            <div key={kIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#334155' }}>
                              <CheckCircle2 size={13} color="#EA580C" style={{ flexShrink: 0 }} />
                              <span>{kpi}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div
                        style={{
                          paddingTop: '14px',
                          borderTop: '1px solid #E2E8F0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                          minHeight: '58px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div style={{ minWidth: 0 }}>
                          <div
                            style={{
                              fontSize: '18.5px',
                              fontWeight: '900',
                              color: '#EA580C',
                              fontFamily: 'var(--font-heading)',
                              fontVariantNumeric: 'lining-nums tabular-nums',
                              lineHeight: '1.15',
                            }}
                          >
                            {metricAmount}
                          </div>
                          {metricLabel && (
                            <div
                              style={{
                                fontSize: '11.5px',
                                fontWeight: '700',
                                color: '#EA580C',
                                lineHeight: '1.25',
                                marginTop: '2px',
                              }}
                            >
                              {metricLabel}
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => openModal('quote')}
                          style={{
                            padding: '8px 14px',
                            borderRadius: '6px',
                            background: '#FFFFFF',
                            color: '#082653',
                            fontSize: '12px',
                            fontWeight: '700',
                            border: '1px solid #CBD5E1',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                          }}
                        >
                          View Case Study
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
                  color: '#64748B',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Clear Answers For Supply Chain Executives
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
              {fourPlFaqs.map((faq, idx) => {
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
                        <ChevronUp size={18} color="#082653" style={{ flexShrink: 0 }} />
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
              Elevate Your Global Supply Chain to 4PL Leadership
            </h2>

            <p
              style={{
                fontSize: '15.5px',
                color: '#475569',
                lineHeight: '1.6',
                marginBottom: '26px',
              }}
            >
              Connect with our Chief Supply Chain Architects to schedule an executive supply chain diagnostic and benchmark your carrier rates against institutional global market indices.
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
                <span>Request Executive 4PL Diagnostic</span>
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
                <span>Talk with Lead Logistics Architect</span>
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

