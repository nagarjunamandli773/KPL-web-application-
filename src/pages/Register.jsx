import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  Building2,
  Globe,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Ship,
  Factory,
  Truck,
  Briefcase,
  Sparkles,
  Check,
  AlertCircle,
  FileText,
  ChevronRight,
  HelpCircle,
  Clock,
  Award
} from 'lucide-react';

export const Register = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');

  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedAccountId, setGeneratedAccountId] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    accountType: 'buyer', // buyer, exporter, logistics, corporate
    fullName: '',
    email: '',
    countryCode: '+91',
    phoneNumber: '',
    companyName: '',
    country: 'India',
    businessType: 'Private Limited / Corporate',
    primarySector: 'Agriculture & Organics',
    taxId: '',
    shippingVolume: '5-20 Containers / Month',
    password: '',
    confirmPassword: '',
    agreeTerms: true,
    subscribeNewsletter: true,
  });

  const [errors, setErrors] = useState({});

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const accountTypes = [
    {
      id: 'buyer',
      title: 'Global Buyer / Importer',
      description: 'Source 96+ export commodities, request instant RFQs & book sea/air cargo.',
      icon: Ship,
      badge: 'POPULAR'
    },
    {
      id: 'exporter',
      title: 'Manufacturer / Exporter',
      description: 'List export catalog, manage customs clearance & international shipping.',
      icon: Factory,
      badge: 'VERIFIED EXIM'
    },
    {
      id: 'logistics',
      title: 'Logistics & Fleet Partner',
      description: 'Provide freight, container dispatch, bonded warehousing & port carting.',
      icon: Truck,
      badge: 'PARTNER'
    },
    {
      id: 'corporate',
      title: 'Enterprise Corporate Client',
      description: 'End-to-end multi-country supply chain contracts, SLA & trade finance.',
      icon: Building2,
      badge: 'ENTERPRISE'
    }
  ];

  const tradeSectors = [
    'Agriculture & Organics',
    'Textiles & Apparel',
    'Heritage Handicrafts',
    'Beverages & Spices',
    'Automobiles & Vehicles',
    'Industrial Machinery',
    'Consumer Electronics',
    'FMCG & Retail Goods',
    'Pharmaceuticals & Healthcare',
    'Chemicals & Minerals',
    'Other Diversified Trade'
  ];

  const countryList = [
    'India',
    'United States',
    'United Arab Emirates',
    'United Kingdom',
    'Germany',
    'Singapore',
    'Australia',
    'Canada',
    'Netherlands',
    'Saudi Arabia',
    'Japan',
    'South Africa',
    'France',
    'Italy',
    'Malaysia',
    'Vietnam',
    'Brazil',
    'Mexico'
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Password Strength Calculation
  const calculatePasswordStrength = (pwd) => {
    if (!pwd) return { score: 0, text: 'Empty', color: '#CBD5E1' };
    let score = 0;
    if (pwd.length >= 8) score += 1;
    if (pwd.length >= 12) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    if (score <= 2) return { score: 1, text: 'Weak', color: '#EF4444' };
    if (score <= 4) return { score: 2, text: 'Good', color: '#F59E0B' };
    return { score: 3, text: 'Strong', color: '#10B981' };
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const validateStep = (step) => {
    const errs = {};
    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
      if (!formData.email.trim()) {
        errs.email = 'Business email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errs.email = 'Please enter a valid email address';
      }
      if (!formData.phoneNumber.trim()) {
        errs.phoneNumber = 'Phone number is required';
      } else if (formData.phoneNumber.trim().length < 7) {
        errs.phoneNumber = 'Please enter a valid phone number';
      }
    }

    if (step === 2) {
      if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
      if (!formData.country.trim()) errs.country = 'Country is required';
    }

    if (step === 3) {
      if (!formData.password) {
        errs.password = 'Password is required';
      } else if (formData.password.length < 8) {
        errs.password = 'Password must be at least 8 characters long';
      }
      if (formData.password !== formData.confirmPassword) {
        errs.confirmPassword = 'Passwords do not match';
      }
      if (!formData.agreeTerms) {
        errs.agreeTerms = 'You must agree to the Terms of Trade';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const accId = `GLX-${Math.floor(100000 + Math.random() * 900000)}`;
      setGeneratedAccountId(accId);
      setIsSubmitted(true);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div
      className="register-page-root"
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
        currentRoute="register"
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
            <span>Account</span>
            <ChevronRight size={14} color="#94A3B8" />
            <span style={{ color: '#EA580C', fontWeight: '600' }}>Register New Enterprise Account</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#64748B' }}>Already have an enterprise account?</span>
            <button
              onClick={() => onNavigate && onNavigate('client-access')}
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
              Sign In to Portal →
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
              <linearGradient id="regWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0A4A91" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#1B73C9" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0A4A91" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M 0 120 Q 250 40 500 130 T 1000 110"
              fill="none"
              stroke="url(#regWaveGrad)"
              strokeWidth="1.8"
            />
            <path
              d="M 0 160 Q 300 220 550 140 T 1000 180"
              fill="none"
              stroke="url(#regWaveGrad)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 0 90 Q 350 150 700 80 T 1000 130"
              fill="none"
              stroke="url(#regWaveGrad)"
              strokeWidth="1.2"
            />
            <circle cx="250" cy="85" r="3.5" fill="#BFE7FF" />
            <circle cx="500" cy="130" r="4.5" fill="#FFFFFF" />
            <circle cx="750" cy="115" r="3.5" fill="#BFE7FF" />
          </svg>

          {/* Golden Glow Blob on Right */}
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
                GLOBALINK EXIM TRADING NETWORK
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
              Create Your Enterprise Trade Account
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
              Join 25,000+ verified global importers, exporters, and logistics operators across 120+ countries. Gain immediate access to wholesale trade catalogs, digital Bills of Lading, expedited customs clearance, and real-time container telemetry.
            </p>

            {/* Quick Trust Badges in Golden Glow Reference Style */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  background: 'rgba(3, 24, 59, 0.75)',
                  border: '1.5px solid #E8A52A',
                  boxShadow: '0 0 12px rgba(232, 165, 42, 0.25)',
                  padding: '7px 16px',
                  borderRadius: '100px',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <CheckCircle2 size={16} color="#F5B73A" strokeWidth={2.5} />
                <span>Verified Exim Network</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  background: 'rgba(3, 24, 59, 0.75)',
                  border: '1.5px solid #E8A52A',
                  boxShadow: '0 0 12px rgba(232, 165, 42, 0.25)',
                  padding: '7px 16px',
                  borderRadius: '100px',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <CheckCircle2 size={16} color="#F5B73A" strokeWidth={2.5} />
                <span>Instant Freight Quote Engine</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  background: 'rgba(3, 24, 59, 0.75)',
                  border: '1.5px solid #E8A52A',
                  boxShadow: '0 0 12px rgba(232, 165, 42, 0.25)',
                  padding: '7px 16px',
                  borderRadius: '100px',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <CheckCircle2 size={16} color="#F5B73A" strokeWidth={2.5} />
                <span>256-Bit Encrypted Security</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  background: 'rgba(3, 24, 59, 0.75)',
                  border: '1.5px solid #E8A52A',
                  boxShadow: '0 0 12px rgba(232, 165, 42, 0.25)',
                  padding: '7px 16px',
                  borderRadius: '100px',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <CheckCircle2 size={16} color="#F5B73A" strokeWidth={2.5} />
                <span>Direct Sourcing across 8 Sectors</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            REGISTRATION MAIN CONTAINER (Wizard Form + Benefits Sidebar)
            ========================================================================= */}
        {isSubmitted ? (
          /* Celebratory Success State */
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '60px 32px',
              textAlign: 'center',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                boxShadow: '0 10px 24px rgba(16, 185, 129, 0.35)',
              }}
            >
              <Check size={42} strokeWidth={3} />
            </div>

            <div
              style={{
                display: 'inline-block',
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#059669',
                padding: '6px 16px',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: '700',
                marginBottom: '16px',
              }}
            >
              REGISTRATION SUBMITTED SUCCESSFULLY
            </div>

            <h2
              style={{
                fontSize: '28px',
                fontWeight: '800',
                color: '#082653',
                marginBottom: '12px',
              }}
            >
              Welcome to Globalink Exim Trade Network!
            </h2>

            <p
              style={{
                fontSize: '15px',
                color: '#64748B',
                lineHeight: '1.6',
                maxWidth: '560px',
                margin: '0 auto 28px auto',
              }}
            >
              Your enterprise profile has been registered under reference ID{' '}
              <strong style={{ color: '#EA580C', letterSpacing: '0.04em' }}>{generatedAccountId}</strong>. A verification message and account credentials confirmation have been sent to{' '}
              <strong style={{ color: '#082653' }}>{formData.email}</strong>.
            </p>

            {/* Account Summary Card */}
            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '14px',
                padding: '20px',
                textAlign: 'left',
                maxWidth: '520px',
                margin: '0 auto 36px auto',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13.5px' }}>
                <div>
                  <span style={{ color: '#64748B', display: 'block', fontSize: '12px' }}>Account Name</span>
                  <strong style={{ color: '#0F172A' }}>{formData.fullName}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748B', display: 'block', fontSize: '12px' }}>Company</span>
                  <strong style={{ color: '#0F172A' }}>{formData.companyName}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748B', display: 'block', fontSize: '12px' }}>Account Role</span>
                  <strong style={{ color: '#EA580C', textTransform: 'capitalize' }}>{formData.accountType}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748B', display: 'block', fontSize: '12px' }}>Country / Region</span>
                  <strong style={{ color: '#0F172A' }}>{formData.country}</strong>
                </div>
              </div>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate && onNavigate('client-access')}
                style={{
                  backgroundColor: '#EA580C',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  fontSize: '15px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 6px 18px rgba(234, 88, 12, 0.3)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#C2410C')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#EA580C')}
              >
                <span>Proceed to Portal Login</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigate && onNavigate('products')}
                style={{
                  backgroundColor: '#082653',
                  color: '#FFFFFF',
                  padding: '14px 24px',
                  borderRadius: '10px',
                  fontSize: '15px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0B192C')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#082653')}
              >
                <span>Browse 96 Products Catalog</span>
              </button>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.8fr) minmax(320px, 1.1fr)',
              gap: '32px',
              alignItems: 'start',
            }}
            className="register-grid-layout"
          >
            {/* LEFT COLUMN: Registration Steps Wizard */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '18px',
                border: '1px solid #E2E8F0',
                padding: '32px',
                boxShadow: '0 4px 20px rgba(8, 38, 83, 0.05)',
              }}
            >
              {/* Step Progress Tracker */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '32px',
                  borderBottom: '1px solid #F1F5F9',
                  paddingBottom: '20px',
                }}
              >
                {[
                  { step: 1, title: 'Role & Contact' },
                  { step: 2, title: 'Trade & Business' },
                  { step: 3, title: 'Security & Access' },
                ].map((item, idx) => {
                  const isActive = currentStep === item.step;
                  const isDone = currentStep > item.step;

                  return (
                    <div
                      key={item.step}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: isDone ? 'pointer' : 'default',
                      }}
                      onClick={() => isDone && setCurrentStep(item.step)}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontWeight: '700',
                          backgroundColor: isActive
                            ? '#EA580C'
                            : isDone
                            ? '#10B981'
                            : '#F1F5F9',
                          color: isActive || isDone ? '#FFFFFF' : '#64748B',
                          transition: 'all 0.2s ease',
                          boxShadow: isActive ? '0 4px 12px rgba(234, 88, 12, 0.25)' : 'none',
                        }}
                      >
                        {isDone ? <Check size={18} strokeWidth={2.5} /> : item.step}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: '600', textTransform: 'uppercase' }}>
                          Step 0{item.step}
                        </span>
                        <span
                          style={{
                            fontSize: '13.5px',
                            fontWeight: isActive ? '700' : '500',
                            color: isActive ? '#082653' : '#64748B',
                          }}
                        >
                          {item.title}
                        </span>
                      </div>

                      {idx < 2 && (
                        <div
                          style={{
                            width: '40px',
                            height: '2px',
                            backgroundColor: isDone ? '#10B981' : '#E2E8F0',
                            marginLeft: '8px',
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit}>
                {/* -------------------------------------------------------------
                    STEP 1: Account Type & Contact Details
                    ------------------------------------------------------------- */}
                {currentStep === 1 && (
                  <div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#082653',
                        marginBottom: '8px',
                      }}
                    >
                      Select Your Account Role & Trade Profile
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#64748B', marginBottom: '20px' }}>
                      Choose your organizational function to receive customized import/export tools, freight calculations, and trade portals.
                    </p>

                    {/* Account Type Radio Cards Grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '14px',
                        marginBottom: '28px',
                      }}
                    >
                      {accountTypes.map((type) => {
                        const Icon = type.icon;
                        const isSelected = formData.accountType === type.id;

                        return (
                          <div
                            key={type.id}
                            onClick={() => handleInputChange('accountType', type.id)}
                            style={{
                              border: isSelected ? '2px solid #EA580C' : '1px solid #E2E8F0',
                              backgroundColor: isSelected ? 'rgba(234, 88, 12, 0.04)' : '#FFFFFF',
                              borderRadius: '12px',
                              padding: '16px',
                              cursor: 'pointer',
                              position: 'relative',
                              transition: 'all 0.2s ease',
                              boxShadow: isSelected ? '0 4px 14px rgba(234, 88, 12, 0.12)' : 'none',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                              <div
                                style={{
                                  width: '38px',
                                  height: '38px',
                                  borderRadius: '8px',
                                  backgroundColor: isSelected ? '#EA580C' : '#F1F5F9',
                                  color: isSelected ? '#FFFFFF' : '#082653',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <Icon size={20} />
                              </div>

                              <span
                                style={{
                                  fontSize: '10.5px',
                                  fontWeight: '800',
                                  letterSpacing: '0.04em',
                                  padding: '2px 8px',
                                  borderRadius: '100px',
                                  backgroundColor: isSelected ? '#EA580C' : '#F1F5F9',
                                  color: isSelected ? '#FFFFFF' : '#64748B',
                                }}
                              >
                                {type.badge}
                              </span>
                            </div>

                            <h4 style={{ fontSize: '14.5px', fontWeight: '700', color: '#082653', marginBottom: '4px' }}>
                              {type.title}
                            </h4>
                            <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.4' }}>
                              {type.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Contact Inputs */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      {/* Full Name */}
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                          Primary Contact / Representative Full Name *
                        </label>
                        <div style={{ position: 'relative' }}>
                          <User size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                          <input
                            type="text"
                            placeholder="e.g. Rajesh Kumar / Alexander Vance"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px 12px 42px',
                              borderRadius: '10px',
                              border: errors.fullName ? '1px solid #EF4444' : '1px solid #CBD5E1',
                              fontSize: '14px',
                              color: '#0F172A',
                              outline: 'none',
                              backgroundColor: '#FFFFFF',
                            }}
                          />
                        </div>
                        {errors.fullName && (
                          <span style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                            {errors.fullName}
                          </span>
                        )}
                      </div>

                      {/* Business Email */}
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                          Corporate / Work Email Address *
                        </label>
                        <div style={{ position: 'relative' }}>
                          <Mail size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                          <input
                            type="email"
                            placeholder="procurement@yourcompany.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px 12px 42px',
                              borderRadius: '10px',
                              border: errors.email ? '1px solid #EF4444' : '1px solid #CBD5E1',
                              fontSize: '14px',
                              color: '#0F172A',
                              outline: 'none',
                              backgroundColor: '#FFFFFF',
                            }}
                          />
                        </div>
                        {errors.email && (
                          <span style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                            {errors.email}
                          </span>
                        )}
                      </div>

                      {/* Phone Number with Country Code */}
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                          Direct Phone Number / WhatsApp for Cargo Alerts *
                        </label>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <select
                            value={formData.countryCode}
                            onChange={(e) => handleInputChange('countryCode', e.target.value)}
                            style={{
                              width: '110px',
                              padding: '12px 10px',
                              borderRadius: '10px',
                              border: '1px solid #CBD5E1',
                              fontSize: '14px',
                              color: '#0F172A',
                              backgroundColor: '#F8FAFC',
                              cursor: 'pointer',
                              outline: 'none',
                            }}
                          >
                            <option value="+91">+91 (IN)</option>
                            <option value="+1">+1 (US/CA)</option>
                            <option value="+971">+971 (AE)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+49">+49 (DE)</option>
                            <option value="+65">+65 (SG)</option>
                            <option value="+61">+61 (AU)</option>
                            <option value="+966">+966 (SA)</option>
                            <option value="+81">+81 (JP)</option>
                          </select>

                          <div style={{ position: 'relative', flex: 1 }}>
                            <Phone size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                              type="tel"
                              placeholder="98765 43210"
                              value={formData.phoneNumber}
                              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                              style={{
                                width: '100%',
                                padding: '12px 14px 12px 42px',
                                borderRadius: '10px',
                                border: errors.phoneNumber ? '1px solid #EF4444' : '1px solid #CBD5E1',
                                fontSize: '14px',
                                color: '#0F172A',
                                outline: 'none',
                                backgroundColor: '#FFFFFF',
                              }}
                            />
                          </div>
                        </div>
                        {errors.phoneNumber && (
                          <span style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                            {errors.phoneNumber}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Step 1 Actions */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        style={{
                          backgroundColor: '#EA580C',
                          color: '#FFFFFF',
                          padding: '12px 28px',
                          borderRadius: '8px',
                          fontSize: '14.5px',
                          fontWeight: '700',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          boxShadow: '0 4px 12px rgba(234, 88, 12, 0.25)',
                        }}
                      >
                        <span>Continue to Step 2: Trade & Business</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------------
                    STEP 2: Trade & Business Details
                    ------------------------------------------------------------- */}
                {currentStep === 2 && (
                  <div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#082653',
                        marginBottom: '8px',
                      }}
                    >
                      Company Profile & International Trade Details
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#64748B', marginBottom: '24px' }}>
                      Provide your legal company specifications to enable customs compliance checking and automated Incoterms pricing.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      {/* Company Name */}
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                          Registered Company / Enterprise Legal Name *
                        </label>
                        <div style={{ position: 'relative' }}>
                          <Building2 size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                          <input
                            type="text"
                            placeholder="e.g. Apex Global Trade Ltd."
                            value={formData.companyName}
                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px 12px 42px',
                              borderRadius: '10px',
                              border: errors.companyName ? '1px solid #EF4444' : '1px solid #CBD5E1',
                              fontSize: '14px',
                              color: '#0F172A',
                              outline: 'none',
                              backgroundColor: '#FFFFFF',
                            }}
                          />
                        </div>
                        {errors.companyName && (
                          <span style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                            {errors.companyName}
                          </span>
                        )}
                      </div>

                      {/* Country of Registration */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                            Country of Registration *
                          </label>
                          <div style={{ position: 'relative' }}>
                            <Globe size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                            <select
                              value={formData.country}
                              onChange={(e) => handleInputChange('country', e.target.value)}
                              style={{
                                width: '100%',
                                padding: '12px 14px 12px 42px',
                                borderRadius: '10px',
                                border: '1px solid #CBD5E1',
                                fontSize: '14px',
                                color: '#0F172A',
                                outline: 'none',
                                backgroundColor: '#FFFFFF',
                                cursor: 'pointer',
                              }}
                            >
                              {countryList.map((c) => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Primary Trade Commodity Sector */}
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                            Primary Commodity Sector *
                          </label>
                          <select
                            value={formData.primarySector}
                            onChange={(e) => handleInputChange('primarySector', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              borderRadius: '10px',
                              border: '1px solid #CBD5E1',
                              fontSize: '14px',
                              color: '#0F172A',
                              outline: 'none',
                              backgroundColor: '#FFFFFF',
                              cursor: 'pointer',
                            }}
                          >
                            {tradeSectors.map((sector) => (
                              <option key={sector} value={sector}>{sector}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* IEC Code / Tax ID & Monthly Shipping Volume */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                            IEC / VAT / Federal Tax ID <span style={{ color: '#94A3B8', fontWeight: '400' }}>(Optional)</span>
                          </label>
                          <div style={{ position: 'relative' }}>
                            <FileText size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                              type="text"
                              placeholder="e.g. 0519001234 / EU987654321"
                              value={formData.taxId}
                              onChange={(e) => handleInputChange('taxId', e.target.value)}
                              style={{
                                width: '100%',
                                padding: '12px 14px 12px 42px',
                                borderRadius: '10px',
                                border: '1px solid #CBD5E1',
                                fontSize: '14px',
                                color: '#0F172A',
                                outline: 'none',
                                backgroundColor: '#FFFFFF',
                              }}
                            />
                          </div>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                            Estimated Shipping Volume
                          </label>
                          <select
                            value={formData.shippingVolume}
                            onChange={(e) => handleInputChange('shippingVolume', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              borderRadius: '10px',
                              border: '1px solid #CBD5E1',
                              fontSize: '14px',
                              color: '#0F172A',
                              outline: 'none',
                              backgroundColor: '#FFFFFF',
                              cursor: 'pointer',
                            }}
                          >
                            <option value="1-4 Containers / Month">1 - 4 FCL/LCL / Month</option>
                            <option value="5-20 Containers / Month">5 - 20 Containers / Month</option>
                            <option value="21-50 Containers / Month">21 - 50 Containers / Month</option>
                            <option value="50+ Containers / Month">50+ Containers (High Volume Enterprise)</option>
                            <option value="Spot / Occasional Shipments">Occasional Spot Shipments</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 Actions */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        style={{
                          backgroundColor: '#F1F5F9',
                          color: '#475569',
                          padding: '12px 20px',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '600',
                          border: '1px solid #CBD5E1',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <ArrowLeft size={16} />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNextStep}
                        style={{
                          backgroundColor: '#EA580C',
                          color: '#FFFFFF',
                          padding: '12px 28px',
                          borderRadius: '8px',
                          fontSize: '14.5px',
                          fontWeight: '700',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          boxShadow: '0 4px 12px rgba(234, 88, 12, 0.25)',
                        }}
                      >
                        <span>Continue to Step 3: Security & Access</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------------
                    STEP 3: Security & Account Credentials
                    ------------------------------------------------------------- */}
                {currentStep === 3 && (
                  <div>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#082653',
                        marginBottom: '8px',
                      }}
                    >
                      Set Your Enterprise Security Credentials
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#64748B', marginBottom: '24px' }}>
                      Your portal credentials grant protected access to trade documentation, escrow transactions, and freight manifests.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      {/* Password */}
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                          Create Secure Password *
                        </label>
                        <div style={{ position: 'relative' }}>
                          <Lock size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="At least 8 characters (letters, numbers & symbols)"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 42px 12px 42px',
                              borderRadius: '10px',
                              border: errors.password ? '1px solid #EF4444' : '1px solid #CBD5E1',
                              fontSize: '14px',
                              color: '#0F172A',
                              outline: 'none',
                              backgroundColor: '#FFFFFF',
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                              position: 'absolute',
                              right: '12px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              background: 'none',
                              border: 'none',
                              color: '#94A3B8',
                              cursor: 'pointer',
                            }}
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>

                        {/* Password Strength Indicator */}
                        {formData.password && (
                          <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ flex: 1, height: '4px', backgroundColor: '#E2E8F0', borderRadius: '2px', overflow: 'hidden' }}>
                              <div
                                style={{
                                  width: `${(passwordStrength.score / 3) * 100}%`,
                                  height: '100%',
                                  backgroundColor: passwordStrength.color,
                                  transition: 'all 0.3s ease',
                                }}
                              />
                            </div>
                            <span style={{ fontSize: '11.5px', color: passwordStrength.color, fontWeight: '700' }}>
                              {passwordStrength.text} Strength
                            </span>
                          </div>
                        )}

                        {errors.password && (
                          <span style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                            {errors.password}
                          </span>
                        )}
                      </div>

                      {/* Confirm Password */}
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                          Confirm Password *
                        </label>
                        <div style={{ position: 'relative' }}>
                          <Lock size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Re-enter your password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 42px 12px 42px',
                              borderRadius: '10px',
                              border: errors.confirmPassword ? '1px solid #EF4444' : '1px solid #CBD5E1',
                              fontSize: '14px',
                              color: '#0F172A',
                              outline: 'none',
                              backgroundColor: '#FFFFFF',
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            style={{
                              position: 'absolute',
                              right: '12px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              background: 'none',
                              border: 'none',
                              color: '#94A3B8',
                              cursor: 'pointer',
                            }}
                          >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <span style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                            {errors.confirmPassword}
                          </span>
                        )}
                      </div>

                      {/* Agreements Checkboxes */}
                      <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={formData.agreeTerms}
                            onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                            style={{ accentColor: '#EA580C', width: '18px', height: '18px', marginTop: '2px', cursor: 'pointer' }}
                          />
                          <span style={{ fontSize: '13px', color: '#475569', lineHeight: '1.4' }}>
                            I agree to Globalink Exim's <a href="#" style={{ color: '#EA580C', fontWeight: '600' }}>Terms of Trade</a>, <a href="#" style={{ color: '#EA580C', fontWeight: '600' }}>Privacy Policy</a>, and International Anti-Bribery & Customs Compliance Declarations. *
                          </span>
                        </label>
                        {errors.agreeTerms && (
                          <span style={{ fontSize: '12px', color: '#EF4444' }}>
                            {errors.agreeTerms}
                          </span>
                        )}

                        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={formData.subscribeNewsletter}
                            onChange={(e) => handleInputChange('subscribeNewsletter', e.target.checked)}
                            style={{ accentColor: '#EA580C', width: '18px', height: '18px', marginTop: '2px', cursor: 'pointer' }}
                          />
                          <span style={{ fontSize: '13px', color: '#475569', lineHeight: '1.4' }}>
                            Send me international port congestion notices, freight rate benchmarks, and harvest export reports.
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Step 3 Actions (Submit) */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        style={{
                          backgroundColor: '#F1F5F9',
                          color: '#475569',
                          padding: '12px 20px',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '600',
                          border: '1px solid #CBD5E1',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <ArrowLeft size={16} />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          backgroundColor: '#EA580C',
                          color: '#FFFFFF',
                          padding: '14px 32px',
                          borderRadius: '8px',
                          fontSize: '15px',
                          fontWeight: '700',
                          border: 'none',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          boxShadow: '0 4px 16px rgba(234, 88, 12, 0.35)',
                          opacity: isSubmitting ? 0.75 : 1,
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <div
                              style={{
                                width: '18px',
                                height: '18px',
                                border: '2px solid #FFFFFF',
                                borderTopColor: 'transparent',
                                borderRadius: '50%',
                                animation: 'spin 0.8s linear infinite',
                              }}
                            />
                            <span>Provisioning Enterprise Account...</span>
                          </>
                        ) : (
                          <>
                            <span>Complete Registration & Activate Trade Access</span>
                            <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* RIGHT COLUMN: Benefits & Trust Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Card 1: What You Get with Globalink Account */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '24px',
                  boxShadow: '0 4px 16px rgba(8, 38, 83, 0.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(234, 88, 12, 0.1)',
                      color: '#EA580C',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Award size={20} />
                  </div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#082653' }}>
                    Enterprise Trade Pass Benefits
                  </h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#E8F5E9',
                        color: '#2E7D32',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '13.5px', color: '#0F172A' }}>
                        Direct Sourcing across 8 Sectors
                      </strong>
                      <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.4' }}>
                        Browse 96 verified export commodities spanning Agriculture, Machinery, Spices, Textiles & Electronics.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#E8F5E9',
                        color: '#2E7D32',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '13.5px', color: '#0F172A' }}>
                        Instant Digital Bills of Lading
                      </strong>
                      <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.4' }}>
                        Automated preparation for Certificates of Origin, Phytosanitary, Fumigation & commercial export invoices.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#E8F5E9',
                        color: '#2E7D32',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '13.5px', color: '#0F172A' }}>
                        Live Multimodal Vessel & Air Tracking
                      </strong>
                      <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.4' }}>
                        24/7 container telemetry, AIS ocean positioning, and customs gate pass status.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#E8F5E9',
                        color: '#2E7D32',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '13.5px', color: '#0F172A' }}>
                        Trade Finance & Escrow Advisory
                      </strong>
                      <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.4' }}>
                        Flexible Letter of Credit (LC) terms, escrow safety, and multi-currency foreign exchange hedging.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Exim Trade Network Numbers */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #082653 0%, #0F172A 100%)',
                  borderRadius: '16px',
                  padding: '24px',
                  color: '#FFFFFF',
                }}
              >
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#FFA000', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Network Scale & Reliability
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ borderLeft: '3px solid #EA580C', paddingLeft: '10px' }}>
                    <span style={{ fontSize: '22px', fontWeight: '800', display: 'block', color: '#FFFFFF' }}>25,000+</span>
                    <span style={{ fontSize: '12px', color: '#94A3B8' }}>Active Exim Clients</span>
                  </div>
                  <div style={{ borderLeft: '3px solid #10B981', paddingLeft: '10px' }}>
                    <span style={{ fontSize: '22px', fontWeight: '800', display: 'block', color: '#FFFFFF' }}>120+</span>
                    <span style={{ fontSize: '12px', color: '#94A3B8' }}>Trade Port Hubs</span>
                  </div>
                  <div style={{ borderLeft: '3px solid #0284C7', paddingLeft: '10px' }}>
                    <span style={{ fontSize: '22px', fontWeight: '800', display: 'block', color: '#FFFFFF' }}>99.5%</span>
                    <span style={{ fontSize: '12px', color: '#94A3B8' }}>Customs Clearance Rate</span>
                  </div>
                  <div style={{ borderLeft: '3px solid #F59E0B', paddingLeft: '10px' }}>
                    <span style={{ fontSize: '22px', fontWeight: '800', display: 'block', color: '#FFFFFF' }}>96</span>
                    <span style={{ fontSize: '12px', color: '#94A3B8' }}>Export Commodities</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Dedicated Support Helpline */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  padding: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <HelpCircle size={18} color="#EA580C" />
                  <strong style={{ fontSize: '14px', color: '#082653' }}>Need Onboarding Assistance?</strong>
                </div>
                <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '1.45', marginBottom: '14px' }}>
                  Our international trade desk specialists are available 24/7 to assist with business documentation, freight inquiries, or bulk contracts.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#082653' }}>+91 (0) 22 6890 4000</span>
                  <button
                    type="button"
                    onClick={() => openModal('quote')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#EA580C',
                      fontSize: '12.5px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    Request Callback →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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

