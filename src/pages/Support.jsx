import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import Magnet, { TILE_MAGNET_PROPS } from '../components/common/Magnet';
import {
  Home,
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

  const [openFaqId, setOpenFaqId] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const [ticketForm, setTicketForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    bookingRef: '',
    department: 'Select Department',
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
    if (!ticketForm.phone.trim()) {
      errors.phone = 'Contact phone number is required';
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
        minHeight: '100vh',
        background: '#FAFBFD',
        position: 'relative',
        overflowX: 'clip',
      }}
    >
      <style>{`
        .support-hero-form-row4 {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }
        .support-hero-form-row3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        .support-4col-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }
        .support-qa-assistance-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        @media (max-width: 1040px) {
          .support-4col-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 980px) {
          .support-hero-form-row4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .support-hero-form-row3 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .support-qa-assistance-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        @media (max-width: 580px) {
          .support-4col-grid,
          .support-hero-form-row4,
          .support-hero-form-row3 {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>

      {/* 1. Global Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="support"
        onNavigate={onNavigate}
      />

      {/* =========================================================================
          HERO BANNER SECTION (Container Ship Sunset Port Backdrop with Overlapping Form)
          ========================================================================= */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          backgroundImage: "url('/support-hero-banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          padding: '28px 32px 130px 32px',
          overflow: 'hidden',
        }}
      >
        {/* Soft atmospheric gradient wash on left for maximum text contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 36%, rgba(255, 255, 255, 0.28) 58%, rgba(255, 255, 255, 0) 78%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1120px', margin: '0 auto' }}>
          {/* Breadcrumb Navigation Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              color: '#082653',
              marginBottom: '10px',
            }}
          >
            <Home size={14} color="#082653" />
            <button
              onClick={() => onNavigate && onNavigate('home')}
              style={{
                color: '#082653',
                fontWeight: '600',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontSize: '13px',
              }}
            >
              Home
            </button>
            <span style={{ color: '#64748B' }}>/</span>
            <span style={{ color: '#475569', fontWeight: '600' }}>Support</span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(32px, 3.8vw, 46px)',
              fontWeight: '700',
              color: '#082653',
              lineHeight: '1.15',
              letterSpacing: '-0.5px',
              margin: '0 0 6px 0',
            }}
          >
            Support Ticket
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '14.5px',
              color: '#334155',
              lineHeight: '1.45',
              margin: 0,
              fontWeight: '400',
              maxWidth: '560px',
            }}
          >
            We're here to help! Submit your request and our team will get back to you soon.
          </p>
        </div>
      </section>

      {/* =========================================================================
          OVERLAPPING FLOATING CARD: CREATE YOUR SUPPORT TICKET
          ========================================================================= */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1120px',
          margin: '-50px auto 40px auto',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 12px 36px rgba(8, 38, 83, 0.08)',
            padding: '28px 32px 32px 32px',
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

              <h3
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '22px',
                  fontWeight: '800',
                  color: '#082653',
                  marginBottom: '8px',
                }}
              >
                Support Request Logged
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: '#64748B',
                  maxWidth: '460px',
                  margin: '0 auto 24px auto',
                  lineHeight: '1.5',
                }}
              >
                Your support case has been opened under Reference ID{' '}
                <strong style={{ color: '#EA580C' }}>{ticketId}</strong>. A dedicated Exim trade coordinator will contact
                you at <strong style={{ color: '#082653' }}>{ticketForm.email}</strong> within 30 minutes.
              </p>

              <button
                onClick={() => {
                  setTicketSubmitted(false);
                  setTicketForm({
                    fullName: '',
                    email: '',
                    phone: '',
                    bookingRef: '',
                    department: 'Select Department',
                    priority: 'Normal - Standard Inquiry',
                    subject: '',
                    message: '',
                  });
                }}
                style={{
                  backgroundColor: '#FFF7ED',
                  color: '#C2410C',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  fontSize: '13.5px',
                  fontWeight: '700',
                  border: '1px solid #FDBA74',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleTicketSubmit}>
              {/* Card Title Header with Orange Accent Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '22px',
                }}
              >
                <div
                  style={{
                    width: '3.5px',
                    height: '18px',
                    backgroundColor: '#EA580C',
                    borderRadius: '2px',
                  }}
                />
                <h2
                  style={{
                    fontSize: '17.5px',
                    fontWeight: '800',
                    color: '#082653',
                    margin: 0,
                    letterSpacing: '-0.2px',
                  }}
                >
                  Create Your Support Ticket
                </h2>
              </div>

              {/* Row 1: 4-Column Grid */}
              <div className="support-hero-form-row4" style={{ marginBottom: '16px' }}>
                {/* 1. Full Name */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#082653',
                      marginBottom: '6px',
                    }}
                  >
                    Full Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Patel"
                    value={ticketForm.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 13px',
                      borderRadius: '8px',
                      border: formErrors.fullName ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#0F172A',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                      transition: 'border-color 0.15s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                    onBlur={(e) => (e.target.style.borderColor = formErrors.fullName ? '#EF4444' : '#CBD5E1')}
                  />
                  {formErrors.fullName && (
                    <span style={{ fontSize: '11px', color: '#EF4444', marginTop: '3px', display: 'block' }}>
                      {formErrors.fullName}
                    </span>
                  )}
                </div>

                {/* 2. Work Email Address */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#082653',
                      marginBottom: '6px',
                    }}
                  >
                    Work Email Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={ticketForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 13px',
                      borderRadius: '8px',
                      border: formErrors.email ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#0F172A',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                      transition: 'border-color 0.15s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                    onBlur={(e) => (e.target.style.borderColor = formErrors.email ? '#EF4444' : '#CBD5E1')}
                  />
                  {formErrors.email && (
                    <span style={{ fontSize: '11px', color: '#EF4444', marginTop: '3px', display: 'block' }}>
                      {formErrors.email}
                    </span>
                  )}
                </div>

                {/* 3. Contact Phone / WhatsApp */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#082653',
                      marginBottom: '6px',
                    }}
                  >
                    Contact Phone / WhatsApp <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={ticketForm.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 13px',
                      borderRadius: '8px',
                      border: formErrors.phone ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#0F172A',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                      transition: 'border-color 0.15s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                    onBlur={(e) => (e.target.style.borderColor = formErrors.phone ? '#EF4444' : '#CBD5E1')}
                  />
                  {formErrors.phone && (
                    <span style={{ fontSize: '11px', color: '#EF4444', marginTop: '3px', display: 'block' }}>
                      {formErrors.phone}
                    </span>
                  )}
                </div>

                {/* 4. Shipment / B/L Reference (Optional) */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#082653',
                      marginBottom: '6px',
                    }}
                  >
                    Shipment / B/L Reference (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. BL-984210 / CT-3401"
                    value={ticketForm.bookingRef}
                    onChange={(e) => handleInputChange('bookingRef', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 13px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#0F172A',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                      transition: 'border-color 0.15s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                    onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>
              </div>

              {/* Row 2: 3-Column Grid */}
              <div className="support-hero-form-row3" style={{ marginBottom: '16px' }}>
                {/* 1. Responsible Department */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#082653',
                      marginBottom: '6px',
                    }}
                  >
                    Responsible Department
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={ticketForm.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 36px 10px 13px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '13px',
                        color: '#0F172A',
                        backgroundColor: '#FFFFFF',
                        outline: 'none',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        cursor: 'pointer',
                        transition: 'border-color 0.15s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                      onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                    >
                      <option value="Select Department">Select Department</option>
                      <option value="Multimodal Freight & Cargo Operations">
                        Multimodal Freight & Cargo Operations
                      </option>
                      <option value="Customs Clearance & Documentation">Customs Clearance & Documentation</option>
                      <option value="Wholesale Procurement & Product Specs">
                        Wholesale Procurement & Product Specs
                      </option>
                      <option value="Letter of Credit & Escrow Billing">Letter of Credit & Escrow Billing</option>
                      <option value="Portal Access & Account Management">Portal Access & Account Management</option>
                    </select>
                    <ChevronDown
                      size={15}
                      color="#64748B"
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* 2. Urgency / Priority Level */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#082653',
                      marginBottom: '6px',
                    }}
                  >
                    Urgency / Priority Level
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={ticketForm.priority}
                      onChange={(e) => handleInputChange('priority', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 36px 10px 13px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '13px',
                        color: '#0F172A',
                        backgroundColor: '#FFFFFF',
                        outline: 'none',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        cursor: 'pointer',
                        transition: 'border-color 0.15s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                      onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                    >
                      <option value="Normal - Standard Inquiry">Normal - Standard Inquiry</option>
                      <option value="High - Active In-Transit Cargo">High - Active In-Transit Cargo</option>
                      <option value="Critical - Port Demurrage Risk">Critical - Port Demurrage Risk</option>
                    </select>
                    <ChevronDown
                      size={15}
                      color="#64748B"
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* 3. Subject / Brief Summary */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#082653',
                      marginBottom: '6px',
                    }}
                  >
                    Subject / Brief Summary <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Shipment status, documentation, customs clearance..."
                    value={ticketForm.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 13px',
                      borderRadius: '8px',
                      border: formErrors.subject ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                      fontSize: '13px',
                      color: '#0F172A',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                      transition: 'border-color 0.15s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                    onBlur={(e) => (e.target.style.borderColor = formErrors.subject ? '#EF4444' : '#CBD5E1')}
                  />
                  {formErrors.subject && (
                    <span style={{ fontSize: '11px', color: '#EF4444', marginTop: '3px', display: 'block' }}>
                      {formErrors.subject}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 3: Full Width Detailed Inquiry / Request */}
              <div style={{ marginBottom: '22px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#082653',
                    marginBottom: '6px',
                  }}
                >
                  Detailed Inquiry / Request <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Please provide shipment details, container numbers, or questions..."
                  value={ticketForm.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px 13px',
                    borderRadius: '8px',
                    border: formErrors.message ? '1.5px solid #EF4444' : '1px solid #CBD5E1',
                    fontSize: '13px',
                    color: '#0F172A',
                    backgroundColor: '#FFFFFF',
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: '75px',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.15s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#EA580C')}
                  onBlur={(e) => (e.target.style.borderColor = formErrors.message ? '#EF4444' : '#CBD5E1')}
                />
                {formErrors.message && (
                  <span style={{ fontSize: '11px', color: '#EF4444', marginTop: '3px', display: 'block' }}>
                    {formErrors.message}
                  </span>
                )}
              </div>

              {/* Row 4: Centered Submit Button */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                    color: '#FFFFFF',
                    padding: '11px 36px',
                    borderRadius: '9999px',
                    fontSize: '14.5px',
                    fontWeight: '700',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 16px rgba(234, 88, 12, 0.32)',
                    transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(234, 88, 12, 0.44)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(234, 88, 12, 0.32)';
                    }
                  }}
                >
                  <Send size={15} style={{ transform: 'rotate(0deg)' }} />
                  <span>{isSubmitting ? 'Submitting Support Ticket...' : 'Submit Support Ticket'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* =========================================================================
          MAIN SUPPORT PAGE CONTENT: CHANNELS, HUBS, FAQS + ASSISTANCE
          ========================================================================= */}
      <main style={{ padding: '0 24px 64px 24px', maxWidth: '1120px', margin: '0 auto' }}>
        {/* =========================================================================
            SECTION 1: 4 DIRECT SUPPORT CHANNELS (Symmetrically Aligned with Georgia Serif)
            ========================================================================= */}
        <div style={{ marginBottom: '44px' }}>
          <div className="support-4col-grid">
            {supportChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <Magnet key={channel.id} {...TILE_MAGNET_PROPS} axis="x" scale={1} padding={12} maxOffset={3} tilt={0.8}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid #E2E8F0',
                      padding: '24px',
                      boxShadow: '0 4px 16px rgba(8, 38, 83, 0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      boxSizing: 'border-box',
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
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '14px',
                        }}
                      >
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

                      {/* Title: Polished modern enterprise typography with equalized line-height and height */}
                      <h3
                        style={{
                          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                          fontSize: '16.5px',
                          fontWeight: '700',
                          color: '#082653',
                          lineHeight: '1.3',
                          minHeight: '46px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          letterSpacing: '-0.02em',
                          marginBottom: '6px',
                        }}
                      >
                        {channel.title}
                      </h3>

                      <p
                        style={{
                          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                          fontSize: '12.5px',
                          color: '#64748B',
                          lineHeight: '1.45',
                          minHeight: '52px',
                          marginBottom: '16px',
                        }}
                      >
                        {channel.subtitle}
                      </p>
                    </div>

                    <div>
                      <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '12px', marginBottom: '14px' }}>
                        <span
                          style={{
                            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                            fontSize: '14px',
                            fontWeight: '700',
                            color: '#0F172A',
                            display: 'block',
                            letterSpacing: '-0.01em',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {channel.detail}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                            fontSize: '11.5px',
                            color: '#64748B',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            marginTop: '2px',
                          }}
                        >
                          <Clock size={12} color="#64748B" />
                          {channel.timing}
                        </span>
                      </div>

                      {typeof channel.actionUrl === 'string' &&
                      (channel.actionUrl.startsWith('tel:') || channel.actionUrl.startsWith('mailto:')) ? (
                        <a
                          href={channel.actionUrl}
                          style={{
                            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            width: '100%',
                            height: '42px',
                            padding: '0 10px',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, #FFA24A 0%, #FF7F1A 100%)',
                            color: '#FFFFFF',
                            fontSize: '12.5px',
                            fontWeight: '700',
                            letterSpacing: '-0.01em',
                            whiteSpace: 'nowrap',
                            textDecoration: 'none',
                            boxShadow: '0 3px 10px rgba(255, 138, 0, 0.25)',
                            transition: 'all 0.18s ease',
                            boxSizing: 'border-box',
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
                          <span style={{ whiteSpace: 'nowrap' }}>{channel.actionText}</span>
                          <ArrowRight size={13} style={{ flexShrink: 0 }} />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={channel.actionUrl}
                          style={{
                            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            width: '100%',
                            height: '42px',
                            padding: '0 10px',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, #FFA24A 0%, #FF7F1A 100%)',
                            color: '#FFFFFF',
                            fontSize: '12.5px',
                            fontWeight: '700',
                            letterSpacing: '-0.01em',
                            whiteSpace: 'nowrap',
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 3px 10px rgba(255, 138, 0, 0.25)',
                            transition: 'all 0.18s ease',
                            boxSizing: 'border-box',
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
                          <span style={{ whiteSpace: 'nowrap' }}>{channel.actionText}</span>
                          <ArrowRight size={13} style={{ flexShrink: 0 }} />
                        </button>
                      )}
                    </div>
                  </div>
                </Magnet>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: REGIONAL TRADE SUPPORT HUBS DIRECTORY
            ========================================================================= */}
        <div style={{ marginBottom: '44px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h3
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: '22px',
                fontWeight: '800',
                color: '#082653',
                marginBottom: '4px',
                letterSpacing: '-0.3px',
              }}
            >
              Regional Trade Support Hubs
            </h3>
            <p style={{ fontSize: '13.5px', color: '#64748B' }}>
              Direct on-site port operations and customs assistance across our 4 global maritime gateways.
            </p>
          </div>

          <div className="support-4col-grid" style={{ gap: '16px' }}>
            {regionalHubs.map((hub) => (
              <Magnet key={hub.city} {...TILE_MAGNET_PROPS} axis="x" scale={1} padding={12} maxOffset={3} tilt={0.8}>
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    padding: '18px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                    height: '100%',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(8, 38, 83, 0.08)';
                    e.currentTarget.style.borderColor = '#CBD5E1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <MapPin size={16} color="#EA580C" />
                      <strong
                        style={{
                          fontSize: '14.5px',
                          color: '#082653',
                          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                          fontWeight: '700',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {hub.city}
                      </strong>
                    </div>
                    <span
                      style={{
                        fontSize: '12px',
                        color: '#EA580C',
                        fontWeight: '700',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      {hub.country}
                    </span>
                    <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.4', marginBottom: '10px' }}>
                      {hub.address}
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '8px', fontSize: '12px' }}>
                    <span style={{ color: '#0F172A', fontWeight: '600', display: 'block' }}>{hub.phone}</span>
                    <span style={{ color: '#64748B' }}>{hub.email}</span>
                  </div>
                </div>
              </Magnet>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SECTION 3: FREQUENTLY ASKED QUESTIONS & 24/7 ASSISTANCE DESK
            (Placed below Regional Trade Support Hubs Boxes matching provided image)
            ========================================================================= */}
        <div className="support-qa-assistance-grid" style={{ marginBottom: '24px' }}>
          {/* LEFT: Frequently Asked Questions Card with Accordion */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '24px 26px',
              boxShadow: '0 4px 18px rgba(8, 38, 83, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            {/* Title with Orange Question Mark Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  border: '2px solid #EA580C',
                  color: '#EA580C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: '14px',
                  flexShrink: 0,
                  lineHeight: '1',
                }}
              >
                ?
              </div>
              <h3
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: '20px',
                  fontWeight: '800',
                  color: '#082653',
                  margin: 0,
                  letterSpacing: '-0.3px',
                }}
              >
                Frequently Asked Questions
              </h3>
            </div>

            {/* Accordion Questions List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {faqList.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    style={{
                      border: isOpen ? '1px solid #EA580C' : '1px solid #E2E8F0',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      backgroundColor: '#FFFFFF',
                      transition: 'border-color 0.18s ease',
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
                        transition: 'background 0.15s ease',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: '700',
                          color: isOpen ? '#C2410C' : '#0F172A',
                          lineHeight: '1.4',
                        }}
                      >
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp size={16} color="#EA580C" style={{ flexShrink: 0 }} />
                      ) : (
                        <ChevronDown size={16} color="#334155" style={{ flexShrink: 0 }} />
                      )}
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: '10px 14px 14px 14px',
                          background: '#FFFFFF',
                          fontSize: '12.5px',
                          color: '#475569',
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
          </div>

          {/* RIGHT: Stacked Cards (Top: Need Assistance? | Bottom: Need Compliance Documentation?) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {/* Top Card: Need Assistance? with 24/7 Support Specialist & Maritime Port Backdrop */}
            <div
              style={{
                backgroundColor: '#F1F5F9',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                padding: '24px 26px',
                boxShadow: '0 4px 18px rgba(8, 38, 83, 0.04)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '185px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Photorealistic maritime assistance background image */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: "url('/support-assistance-banner.jpg')",
                  backgroundPosition: 'right center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  mixBlendMode: 'multiply',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              />

              {/* Soft light-gray gradient overlay ensuring high contrast on the left side text */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(90deg, #F1F5F9 0%, #F1F5F9 35%, rgba(241, 245, 249, 0.85) 46%, rgba(241, 245, 249, 0) 58%)',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
              />

              <div style={{ position: 'relative', zIndex: 3, maxWidth: '280px' }}>
                {/* Header with Orange Headset Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div
                    style={{
                      color: '#EA580C',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Headphones size={36} strokeWidth={2.4} />
                  </div>

                  <div
                    style={{
                      width: '1px',
                      height: '42px',
                      backgroundColor: '#E2E8F0',
                      flexShrink: 0,
                    }}
                  />

                  <div>
                    <h3
                      style={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        fontSize: '20px',
                        fontWeight: '800',
                        lineHeight: '1.2',
                        margin: 0,
                      }}
                    >
                      <span style={{ color: '#082653' }}>Need </span>
                      <span style={{ color: '#EA580C' }}>Assistance?</span>
                    </h3>
                    <p style={{ fontSize: '12px', color: '#475569', margin: '3px 0 0 0', fontWeight: '500' }}>
                      Our support team is here to help you 24/7.
                    </p>
                  </div>
                </div>

                {/* Contact Support Pill Button */}
                <button
                  type="button"
                  onClick={() => {
                    const formElement = document.querySelector('.support-hero-form-row4');
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                      window.scrollTo({ top: 320, behavior: 'smooth' });
                    }
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                    color: '#FFFFFF',
                    padding: '9px 22px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 3px 12px rgba(234, 88, 12, 0.3)',
                    transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 5px 16px rgba(234, 88, 12, 0.42)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 3px 12px rgba(234, 88, 12, 0.3)';
                  }}
                >
                  <span>Contact Support</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Bottom Card: NEED COMPLIANCE DOCUMENTATION? in Warm Sunset Cream */}
            <div
              style={{
                background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
                border: '1px solid #FDBA74',
                borderRadius: '20px',
                padding: '24px 26px',
                color: '#0F172A',
                boxShadow: '0 4px 16px rgba(234, 88, 12, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '165px',
              }}
            >
              <div>
                <h4
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: '16px',
                    fontWeight: '800',
                    color: '#C2410C',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    margin: '0 0 8px 0',
                  }}
                >
                  NEED COMPLIANCE DOCUMENTATION?
                </h4>
                <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.55', margin: '0 0 16px 0' }}>
                  Access standardized templates for Bills of Lading, Packing Lists, Certificates of Origin, and APEDA
                  phytosanitary certificates.
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigate) onNavigate('documentation');
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)',
                    color: '#FFFFFF',
                    padding: '9px 22px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 3px 12px rgba(234, 88, 12, 0.28)',
                    transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #FF9533 0%, #F56E0A 100%)';
                    e.currentTarget.style.boxShadow = '0 5px 16px rgba(234, 88, 12, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #FF6F00 0%, #EA580C 100%)';
                    e.currentTarget.style.boxShadow = '0 3px 12px rgba(234, 88, 12, 0.28)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>Browse Compliance Library</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
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
