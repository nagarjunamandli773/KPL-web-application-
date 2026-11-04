import React, { useState, useMemo } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  Headphones,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  FileText,
  Globe,
  MapPin,
  Search,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  AlertCircle,
  ArrowRight,
  Send,
  Check,
  Sparkles,
  Ship,
  Building2
} from 'lucide-react';

export const Support = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const [ticketForm, setTicketForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    bookingRef: '',
    department: 'Multimodal Freight & Cargo Operations',
    priority: 'Normal - Standard Inquiry',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleInputChange = (field, value) => {
    setTicketForm((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!ticketForm.fullName.trim()) errors.fullName = 'Full name is required';
    if (!ticketForm.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(ticketForm.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!ticketForm.subject.trim()) errors.subject = 'Subject is required';
    if (!ticketForm.message.trim()) errors.message = 'Please describe your request';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedId);
      setTicketSubmitted(true);
    }, 1000);
  };

  // Support Channels
  const supportChannels = [
    {
      id: 'phone',
      title: '24/7 Cargo Dispatch Hotline',
      subtitle: 'Instant phone routing for active ocean, air & road shipments.',
      detail: '+91 (0) 22 6890 4000',
      timing: '24 Hours / 7 Days Live Desk',
      icon: Phone,
      actionText: 'Call Dispatch Desk',
      actionUrl: 'tel:+912268904000',
      badge: 'URGENT DISPATCH'
    },
    {
      id: 'customs',
      title: 'Customs & Tariff Advisory',
      subtitle: 'HS codes, duty calculations, port carting & phytosanitary permits.',
      detail: 'customs@globalinkexim.com',
      timing: 'Avg. Response: < 30 Minutes',
      icon: FileText,
      actionText: 'Email Customs Team',
      actionUrl: 'mailto:customs@globalinkexim.com',
      badge: 'COMPLIANCE'
    },
    {
      id: 'trade',
      title: 'Wholesale Trade & RFQ Desk',
      subtitle: 'Commercial contracts, bulk orders & certified supplier audits.',
      detail: 'trade@globalinkexim.com',
      timing: 'Dedicated Account Managers',
      icon: Ship,
      actionText: 'Request Wholesale Quote',
      actionUrl: () => openModal('quote'),
      badge: 'COMMERCIAL'
    },
    {
      id: 'tracking',
      title: 'Multimodal Cargo Telemetry',
      subtitle: 'Live AIS vessel positioning, container demurrage & airway bills.',
      detail: 'Real-time GPS Tracking',
      timing: 'Live Container Status',
      icon: Globe,
      actionText: 'Track Active Shipment',
      actionUrl: () => {
        if (onNavigate) onNavigate('track-shipment');
        else openModal('track');
      },
      badge: 'TELEMETRY'
    }
  ];

  // Frequently Asked Questions
  const faqList = [
    {
      id: 1,
      question: 'How do I track my ocean container or air cargo shipment in real time?',
      answer: 'You can track active shipments by entering your Bill of Lading (B/L), Container Number, or Airway Bill (AWB) on our Track Cargo page. Our system integrates directly with ocean carrier AIS satellite feeds and port gate telemetry to provide real-time coordinates, transshipment hubs, and projected port arrivals.'
    },
    {
      id: 2,
      question: 'What documentation is required for international agricultural and organic exports?',
      answer: 'Standard export commodities require: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin (COO), Phytosanitary Certificate issued by quarantine authorities, and Fumigation/Test Reports (e.g. APEDA, FDA, or SGS). Globalink Exim prepares and verifies all documentation automatically through our digital trade portal.'
    },
    {
      id: 3,
      question: 'How does Globalink assist with customs clearance and tariff classification?',
      answer: 'Our in-house licensed customs brokers assist with accurate 8-digit and 10-digit Harmonized System (HS) code assignment, import duty optimization, anti-dumping regulation compliance, and customs bonded warehouse carting at all major seaports and air cargo terminals worldwide.'
    },
    {
      id: 4,
      question: 'What happens if a vessel or air flight experiences port congestion or delay?',
      answer: 'Our 24/7 logistics desk monitors global maritime notices and airport delays. If port congestion or feeder vessel rollovers occur, our automated system triggers alternative transshipment routing, re-schedules demurrage buffers, and sends immediate notifications to your logistics dashboard.'
    },
    {
      id: 5,
      question: 'What international payment terms and escrow protections are supported?',
      answer: 'We support multiple international payment mechanisms including Irrevocable Letters of Credit (LC at Sight / Usance LC), Telegraphic Transfer (TT with milestone escrow), Document against Payment (DP), and verified third-party trade escrow solutions to ensure zero-risk transactions.'
    }
  ];

  // Filtered FAQs based on user search query
  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqList;
    const q = searchQuery.toLowerCase().trim();
    return faqList.filter(
      (item) => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Regional Hubs
  const regionalHubs = [
    {
      city: 'Mumbai & Chennai',
      country: 'India (Headquarters)',
      address: 'Exim Trade Tower, Bandra Kurla Complex & Nhava Sheva Port Terminal',
      phone: '+91 (0) 22 6890 4000',
      email: 'india.desk@globalinkexim.com'
    },
    {
      city: 'Dubai (Jebel Ali Freezone)',
      country: 'United Arab Emirates',
      address: 'JAFZA Gateway Tower 4, Jebel Ali Port Terminal 2',
      phone: '+971 4 881 9200',
      email: 'uae.desk@globalinkexim.com'
    },
    {
      city: 'New Jersey / Long Beach',
      country: 'United States',
      address: 'Port Newark Logistics Center, Building 14, Newark, NJ',
      phone: '+1 800 592 4680',
      email: 'usa.desk@globalinkexim.com'
    },
    {
      city: 'Rotterdam Gateway',
      country: 'Netherlands / EU',
      address: 'Maasvlakte Trade Complex, Haven 9200, Rotterdam',
      phone: '+31 10 798 4400',
      email: 'eu.desk@globalinkexim.com'
    }
  ];

  return (
    <div
      className="support-page-root"
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
      {/* 1. Global Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="support"
        onNavigate={onNavigate}
      />

      <main style={{ padding: '0 16px 64px 16px' }}>
        {/* Breadcrumb Navigation Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 8px',
            fontSize: '13px',
            color: '#64748B',
            borderBottom: '1px solid #E2E8F0',
            marginBottom: '24px',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => onNavigate && onNavigate('home')}
              style={{ color: '#082653', fontWeight: '600', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
            >
              Home
            </button>
            <ChevronRight size={14} color="#94A3B8" />
            <span>Customer Service</span>
            <ChevronRight size={14} color="#94A3B8" />
            <span style={{ color: '#EA580C', fontWeight: '600' }}>Global Trade Support & Help Desk</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: '#64748B' }}>Need live container status?</span>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('track-shipment');
                else openModal('track');
              }}
              style={{
                color: '#EA580C',
                fontWeight: '700',
                background: 'rgba(234, 88, 12, 0.08)',
                border: '1px solid rgba(234, 88, 12, 0.25)',
                padding: '5px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(234, 88, 12, 0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(234, 88, 12, 0.08)')}
            >
              Track Cargo Live →
            </button>
          </div>
        </div>

        {/* Hero Header Banner (Styled to reference design) */}
        <div
          style={{
            background: 'linear-gradient(180deg, #020F2D 0%, #03183B 50%, #061B43 100%)',
            borderRadius: '20px',
            padding: '40px 32px',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '32px',
            boxShadow: '0 12px 36px rgba(2, 15, 45, 0.4)',
            border: '1px solid rgba(232, 165, 42, 0.15)',
          }}
        >
          {/* Background Network Wave SVG matching reference design */}
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 0,
              opacity: 0.35,
            }}
            preserveAspectRatio="none"
            viewBox="0 0 1000 300"
          >
            <defs>
              <linearGradient id="supWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0A4A91" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#1B73C9" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0A4A91" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M 0 120 Q 250 40 500 130 T 1000 110"
              fill="none"
              stroke="url(#supWaveGrad)"
              strokeWidth="1.8"
            />
            <path
              d="M 0 160 Q 300 220 550 140 T 1000 180"
              fill="none"
              stroke="url(#supWaveGrad)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 0 90 Q 350 150 700 80 T 1000 130"
              fill="none"
              stroke="url(#supWaveGrad)"
              strokeWidth="1.2"
            />
            <circle cx="250" cy="85" r="3.5" fill="#BFE7FF" />
            <circle cx="500" cy="130" r="4.5" fill="#FFFFFF" />
            <circle cx="750" cy="115" r="3.5" fill="#BFE7FF" />
          </svg>

          {/* Golden Glow Highlight */}
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(232, 165, 42, 0.22) 0%, rgba(232, 165, 42, 0) 70%)',
              filter: 'blur(35px)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '840px' }}>
            {/* Top Gold Label with decorative lines matching reference */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '14px',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '2px',
                  backgroundColor: '#E8A52A',
                  borderRadius: '1px',
                }}
              />
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#E8A52A',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)',
                }}
              >
                24/7 GLOBAL EXIM TRADE DESK
              </span>
              <div
                style={{
                  width: '32px',
                  height: '2px',
                  backgroundColor: '#E8A52A',
                  borderRadius: '1px',
                }}
              />
            </div>

            {/* Main Serif Heading matching reference */}
            <h1
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: '35px',
                fontWeight: '700',
                color: '#FFFFFF',
                lineHeight: '1.2',
                letterSpacing: '-0.4px',
                marginBottom: '12px',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              }}
            >
              How Can Our Global Trade Specialists Assist You?
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '15.5px',
                color: 'rgba(255, 255, 255, 0.90)',
                lineHeight: '1.55',
                marginBottom: '26px',
                fontFamily: 'var(--font-body)',
              }}
            >
              Connect with dedicated logistics coordinators, licensed customs documentation officers, and multimodal freight specialists across 120+ international trade ports. Get immediate assistance for live cargo dispatches, tariff compliance, or wholesale commodity orders.
            </p>

            {/* Support Search Input with Gold Accents */}
            <div
              style={{
                position: 'relative',
                maxWidth: '560px',
              }}
            >
              <Search
                size={18}
                color="#F5B73A"
                style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="text"
                placeholder="Search support topics, customs clearance FAQs, B/L questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 46px',
                  borderRadius: '12px',
                  border: '1.5px solid #E8A52A',
                  background: 'rgba(3, 24, 59, 0.85)',
                  fontSize: '14.5px',
                  color: '#FFFFFF',
                  outline: 'none',
                  boxShadow: '0 0 14px rgba(232, 165, 42, 0.22), 0 4px 16px rgba(0, 0, 0, 0.25)',
                  backdropFilter: 'blur(8px)',
                }}
              />
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 1: 4 DIRECT SUPPORT CHANNELS
            ========================================================================= */}
        <div style={{ marginBottom: '40px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '18px',
            }}
          >
            {supportChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    padding: '24px',
                    boxShadow: '0 4px 16px rgba(8, 38, 83, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(234, 88, 12, 0.12)';
                    e.currentTarget.style.borderColor = '#EA580C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(8, 38, 83, 0.05)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(234, 88, 12, 0.1)',
                          color: '#EA580C',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <span
                        style={{
                          fontSize: '10px',
                          fontWeight: '800',
                          letterSpacing: '0.04em',
                          padding: '3px 8px',
                          borderRadius: '100px',
                          backgroundColor: '#F1F5F9',
                          color: '#475569',
                        }}
                      >
                        {channel.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#082653', marginBottom: '6px' }}>
                      {channel.title}
                    </h3>

                    <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.45', marginBottom: '16px' }}>
                      {channel.subtitle}
                    </p>
                  </div>

                  <div>
                    <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '12px', marginBottom: '14px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: '#0F172A', display: 'block' }}>
                        {channel.detail}
                      </span>
                      <span style={{ fontSize: '11.5px', color: '#10B981', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                        <Clock size={12} />
                        {channel.timing}
                      </span>
                    </div>

                    {typeof channel.actionUrl === 'string' && (channel.actionUrl.startsWith('tel:') || channel.actionUrl.startsWith('mailto:')) ? (
                      <a
                        href={channel.actionUrl}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          width: '100%',
                          padding: '11px 16px',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #FFA24A 0%, #FF7F1A 100%)',
                          color: '#FFFFFF',
                          fontSize: '13.5px',
                          fontWeight: '700',
                          textDecoration: 'none',
                          boxShadow: '0 3px 10px rgba(255, 138, 0, 0.25)',
                          transition: 'all 0.18s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #FF9533 0%, #F56E0A 100%)';
                          e.currentTarget.style.boxShadow = '0 5px 14px rgba(255, 138, 0, 0.38)';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #FFA24A 0%, #FF7F1A 100%)';
                          e.currentTarget.style.boxShadow = '0 3px 10px rgba(255, 138, 0, 0.25)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <span>{channel.actionText}</span>
                        <ArrowRight size={14} />
                      </a>
                    ) : (
                      <button
                        onClick={channel.actionUrl}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          width: '100%',
                          padding: '11px 16px',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #FFA24A 0%, #FF7F1A 100%)',
                          color: '#FFFFFF',
                          fontSize: '13.5px',
                          fontWeight: '700',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: '0 3px 10px rgba(255, 138, 0, 0.25)',
                          transition: 'all 0.18s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #FF9533 0%, #F56E0A 100%)';
                          e.currentTarget.style.boxShadow = '0 5px 14px rgba(255, 138, 0, 0.38)';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #FFA24A 0%, #FF7F1A 100%)';
                          e.currentTarget.style.boxShadow = '0 3px 10px rgba(255, 138, 0, 0.25)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <span>{channel.actionText}</span>
                        <ArrowRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: 2-COLUMN TICKET FORM & FAQS
            ========================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(320px, 1fr)',
            gap: '32px',
            alignItems: 'start',
            marginBottom: '48px',
          }}
          className="support-grid-layout"
        >
          {/* LEFT: Support Ticket Submission Form */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '18px',
              border: '1px solid #E2E8F0',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(8, 38, 83, 0.05)',
            }}
          >
            {ticketSubmitted ? (
              <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#E8F5E9',
                    color: '#2E7D32',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto',
                  }}
                >
                  <Check size={36} strokeWidth={3} />
                </div>

                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#059669',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: '700',
                    marginBottom: '12px',
                  }}
                >
                  TICKET LOGGED SUCCESSFULLY
                </span>

                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#082653', marginBottom: '8px' }}>
                  Support Request Logged
                </h3>

                <p style={{ fontSize: '14px', color: '#64748B', maxWidth: '440px', margin: '0 auto 24px auto', lineHeight: '1.5' }}>
                  Your support case has been opened under Reference ID <strong style={{ color: '#EA580C' }}>{ticketId}</strong>. A dedicated Exim trade coordinator will contact you at <strong style={{ color: '#082653' }}>{ticketForm.email}</strong> within 30 minutes.
                </p>

                <button
                  onClick={() => {
                    setTicketSubmitted(false);
                    setTicketForm({
                      fullName: '',
                      email: '',
                      phone: '',
                      bookingRef: '',
                      department: 'Multimodal Freight & Cargo Operations',
                      priority: 'Normal - Standard Inquiry',
                      subject: '',
                      message: '',
                    });
                  }}
                  style={{
                    backgroundColor: '#082653',
                    color: '#FFFFFF',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleTicketSubmit}>
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#082653', marginBottom: '6px' }}>
                    Open an Official Support Ticket
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.4' }}>
                    Submit detailed inquiries regarding active shipments, Bill of Lading documentation, customs holds, or trade financing.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Name and Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Patel"
                        value={ticketForm.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: formErrors.fullName ? '1px solid #EF4444' : '1px solid #CBD5E1',
                          fontSize: '13.5px',
                          color: '#0F172A',
                          outline: 'none',
                          backgroundColor: '#FFFFFF',
                        }}
                      />
                      {formErrors.fullName && (
                        <span style={{ fontSize: '11px', color: '#EF4444', marginTop: '3px', display: 'block' }}>
                          {formErrors.fullName}
                        </span>
                      )}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={ticketForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: formErrors.email ? '1px solid #EF4444' : '1px solid #CBD5E1',
                          fontSize: '13.5px',
                          color: '#0F172A',
                          outline: 'none',
                          backgroundColor: '#FFFFFF',
                        }}
                      />
                      {formErrors.email && (
                        <span style={{ fontSize: '11px', color: '#EF4444', marginTop: '3px', display: 'block' }}>
                          {formErrors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Phone & Booking/BL Reference */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                        Contact Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={ticketForm.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '13.5px',
                          color: '#0F172A',
                          outline: 'none',
                          backgroundColor: '#FFFFFF',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                        Shipment / B/L Reference <span style={{ color: '#94A3B8' }}>(Optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. BL-984210 / CT-3401"
                        value={ticketForm.bookingRef}
                        onChange={(e) => handleInputChange('bookingRef', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '13.5px',
                          color: '#0F172A',
                          outline: 'none',
                          backgroundColor: '#FFFFFF',
                        }}
                      />
                    </div>
                  </div>

                  {/* Department & Priority */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                        Responsible Department
                      </label>
                      <select
                        value={ticketForm.department}
                        onChange={(e) => handleInputChange('department', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '13.5px',
                          color: '#0F172A',
                          backgroundColor: '#FFFFFF',
                          outline: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        <option value="Multimodal Freight & Cargo Operations">Multimodal Freight & Cargo Operations</option>
                        <option value="Customs Clearance & Documentation">Customs Clearance & Documentation</option>
                        <option value="Wholesale Procurement & Product Specs">Wholesale Procurement & Product Specs</option>
                        <option value="Letter of Credit & Escrow Billing">Letter of Credit & Escrow Billing</option>
                        <option value="Portal Access & Account Management">Portal Access & Account Management</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                        Urgency / Priority Level
                      </label>
                      <select
                        value={ticketForm.priority}
                        onChange={(e) => handleInputChange('priority', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '13.5px',
                          color: '#0F172A',
                          backgroundColor: '#FFFFFF',
                          outline: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        <option value="Normal - Standard Inquiry">Normal - Standard Inquiry</option>
                        <option value="High - Active In-Transit Cargo">High - Active In-Transit Cargo</option>
                        <option value="Critical - Port Demurrage Risk">Critical - Port Demurrage Risk</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                      Subject / Brief Summary *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Phytosanitary Certificate verification for European shipment"
                      value={ticketForm.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: formErrors.subject ? '1px solid #EF4444' : '1px solid #CBD5E1',
                        fontSize: '13.5px',
                        color: '#0F172A',
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                      }}
                    />
                    {formErrors.subject && (
                      <span style={{ fontSize: '11px', color: '#EF4444', marginTop: '3px', display: 'block' }}>
                        {formErrors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                      Detailed Inquiry / Request *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please provide shipment details, container numbers, or questions..."
                      value={ticketForm.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: formErrors.message ? '1px solid #EF4444' : '1px solid #CBD5E1',
                        fontSize: '13.5px',
                        color: '#0F172A',
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                      }}
                    />
                    {formErrors.message && (
                      <span style={{ fontSize: '11px', color: '#EF4444', marginTop: '3px', display: 'block' }}>
                        {formErrors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div style={{ marginTop: '8px' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        width: '100%',
                        padding: '14px',
                        background: 'linear-gradient(135deg, #FFA24A 0%, #FF7F1A 100%)',
                        color: '#FFFFFF',
                        borderRadius: '8px',
                        fontSize: '14.5px',
                        fontWeight: '700',
                        border: 'none',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 14px rgba(255, 138, 0, 0.28)',
                        transition: 'all 0.18s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #FF9533 0%, #F56E0A 100%)';
                          e.currentTarget.style.boxShadow = '0 6px 18px rgba(255, 138, 0, 0.4)';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #FFA24A 0%, #FF7F1A 100%)';
                          e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 138, 0, 0.28)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }
                      }}
                    >
                      {isSubmitting ? (
                        <span>Logging Ticket with Trade Desk...</span>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Submit Official Support Ticket</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT: FAQ Accordion & Quick Guides */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '18px',
                border: '1px solid #E2E8F0',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(8, 38, 83, 0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <HelpCircle size={20} color="#EA580C" />
                <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#082653' }}>
                  Frequently Asked Questions
                </h3>
              </div>

              {filteredFaqs.length === 0 ? (
                <p style={{ fontSize: '13px', color: '#64748B', padding: '16px 0' }}>
                  No matching FAQ found for "{searchQuery}". Try submitting a ticket above.
                </p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {filteredFaqs.map((faq) => {
                    const isOpen = openFaqId === faq.id;
                    return (
                      <div
                        key={faq.id}
                        style={{
                          border: isOpen ? '1px solid #EA580C' : '1px solid #E2E8F0',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            background: isOpen ? 'rgba(234, 88, 12, 0.04)' : '#FFFFFF',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '12px',
                            cursor: 'pointer',
                            textAlign: 'left',
                          }}
                        >
                          <span style={{ fontSize: '13.5px', fontWeight: '700', color: isOpen ? '#EA580C' : '#0F172A' }}>
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp size={16} color="#EA580C" style={{ flexShrink: 0 }} />
                          ) : (
                            <ChevronDown size={16} color="#94A3B8" style={{ flexShrink: 0 }} />
                          )}
                        </button>

                        {isOpen && (
                          <div
                            style={{
                              padding: '12px 14px 14px 14px',
                              background: '#FAFBFD',
                              borderTop: '1px solid #F1F5F9',
                              fontSize: '13px',
                              color: '#64748B',
                              lineHeight: '1.55',
                            }}
                          >
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick Document Downloads Callout */}
            <div
              style={{
                background: 'linear-gradient(135deg, #082653 0%, #0F172A 100%)',
                borderRadius: '16px',
                padding: '24px',
                color: '#FFFFFF',
              }}
            >
              <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#FFA000', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Need Compliance Documentation?
              </h4>
              <p style={{ fontSize: '12.5px', color: '#CBD5E1', lineHeight: '1.45', marginBottom: '16px' }}>
                Access standardized templates for Bills of Lading, Packing Lists, Certificates of Origin, and APEDA phytosanitary certificates.
              </p>
              <button
                onClick={() => {
                  if (onNavigate) onNavigate('documentation');
                }}
                style={{
                  background: 'linear-gradient(135deg, #FFA24A 0%, #FF7F1A 100%)',
                  color: '#FFFFFF',
                  padding: '9px 18px',
                  borderRadius: '6px',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 3px 10px rgba(255, 138, 0, 0.25)',
                  transition: 'all 0.18s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FF9533 0%, #F56E0A 100%)';
                  e.currentTarget.style.boxShadow = '0 5px 14px rgba(255, 138, 0, 0.38)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FFA24A 0%, #FF7F1A 100%)';
                  e.currentTarget.style.boxShadow = '0 3px 10px rgba(255, 138, 0, 0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Browse Compliance Library</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 3: REGIONAL TRADE SUPPORT HUBS DIRECTORY
            ========================================================================= */}
        <div style={{ marginTop: '16px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#082653', marginBottom: '4px' }}>
              Regional Trade Support Hubs
            </h3>
            <p style={{ fontSize: '13.5px', color: '#64748B' }}>
              Direct on-site port operations and customs assistance across our 4 global maritime gateways.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px',
            }}
          >
            {regionalHubs.map((hub) => (
              <div
                key={hub.city}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                  padding: '18px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <MapPin size={16} color="#EA580C" />
                  <strong style={{ fontSize: '14px', color: '#082653' }}>{hub.city}</strong>
                </div>
                <span style={{ fontSize: '12px', color: '#EA580C', fontWeight: '700', display: 'block', marginBottom: '6px' }}>
                  {hub.country}
                </span>
                <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.4', marginBottom: '10px' }}>
                  {hub.address}
                </p>
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '8px', fontSize: '12px' }}>
                  <span style={{ color: '#0F172A', fontWeight: '600', display: 'block' }}>{hub.phone}</span>
                  <span style={{ color: '#64748B' }}>{hub.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 2. Global Footer */}
      <Footer onNavigate={onNavigate} />

      {/* 3. Global Track/Quote Modal */}
      <TrackModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
};

