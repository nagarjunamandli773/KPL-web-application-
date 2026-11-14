import React, { useState, useRef, useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import Magnet from '../components/common/Magnet';
import { ALL_COUNTRIES } from '../data/countries';
import kplBackground4K from '../../Images/KPL_Background_4K.png';
import {
  UserPlus,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  Building2,
  Globe,
  FileText,
  Layers,
  ChevronDown,
  Check,
  ArrowRight,
  X,
} from 'lucide-react';

export const Register = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');
  const [legalDoc, setLegalDoc] = useState(null); // 'terms' | 'privacy' | null

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedAccountId, setGeneratedAccountId] = useState('');
  const [focusedField, setFocusedField] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null); // 'dial' | 'country' | 'accountType' | null
  const [countryQuery, setCountryQuery] = useState('');
  const [isFilteringCountry, setIsFilteringCountry] = useState(false);
  const [highlightedCountryIndex, setHighlightedCountryIndex] = useState(-1);

  const formRef = useRef(null);
  const countryFieldRef = useRef(null);
  const countryInputRef = useRef(null);
  const countryOptionRefs = useRef([]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    phoneNumber: '',
    companyName: '',
    gstNumber: '',
    country: '',
    accountType: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsFilteringCountry(false);
        setHighlightedCountryIndex(-1);
        return;
      }
      if (
        openDropdown === 'country' &&
        countryFieldRef.current &&
        !countryFieldRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
        setIsFilteringCountry(false);
        setHighlightedCountryIndex(-1);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setIsFilteringCountry(false);
        setHighlightedCountryIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openDropdown]);

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const dialCodes = [
    { code: '+91', label: 'India' },
    { code: '+1', label: 'US / Canada' },
    { code: '+971', label: 'UAE' },
    { code: '+44', label: 'United Kingdom' },
    { code: '+49', label: 'Germany' },
    { code: '+65', label: 'Singapore' },
    { code: '+61', label: 'Australia' },
    { code: '+966', label: 'Saudi Arabia' },
    { code: '+81', label: 'Japan' },
  ];

  const accountTypes = [
    { id: 'buyer', title: 'Global Buyer / Importer' },
    { id: 'exporter', title: 'Manufacturer / Exporter' },
    { id: 'logistics', title: 'Logistics & Fleet Partner' },
    { id: 'corporate', title: 'Enterprise Corporate Client' },
  ];

  const countryList = ALL_COUNTRIES;

  const normalizedCountryQuery = countryQuery.trim().toLowerCase();
  const filteredCountries =
    isFilteringCountry && normalizedCountryQuery
      ? [
          ...countryList.filter((c) => c.toLowerCase().startsWith(normalizedCountryQuery)),
          ...countryList.filter(
            (c) =>
              !c.toLowerCase().startsWith(normalizedCountryQuery) &&
              c.toLowerCase().includes(normalizedCountryQuery)
          ),
        ]
      : countryList;

  const openCountryDropdown = (keepFilter = false) => {
    setOpenDropdown('country');
    setFocusedField('country');
    if (!keepFilter) {
      setIsFilteringCountry(false);
      setCountryQuery(formData.country);
      const selectedIdx = formData.country ? countryList.indexOf(formData.country) : 0;
      setHighlightedCountryIndex(selectedIdx >= 0 ? selectedIdx : 0);
      requestAnimationFrame(() => {
        if (selectedIdx >= 0 && countryOptionRefs.current[selectedIdx]) {
          countryOptionRefs.current[selectedIdx].scrollIntoView({ block: 'nearest' });
        }
      });
    }
  };

  const handleSelectCountry = (countryName) => {
    handleInputChange('country', countryName);
    setCountryQuery(countryName);
    setIsFilteringCountry(false);
    setHighlightedCountryIndex(-1);
    setOpenDropdown(null);
    setFocusedField('');
  };

  const MIN_PASSWORD_LENGTH = 4;

  const passwordRules = [
    {
      id: 'uppercase',
      label: 'A-Z',
      title: 'At least one uppercase letter (A-Z)',
      errorLabel: '1 uppercase letter (A-Z)',
      met: /[A-Z]/.test(formData.password),
    },
    {
      id: 'lowercase',
      label: 'a-z',
      title: 'At least one lowercase letter (a-z)',
      errorLabel: '1 lowercase letter (a-z)',
      met: /[a-z]/.test(formData.password),
    },
    {
      id: 'number',
      label: '0-9',
      title: 'At least one number (0-9)',
      errorLabel: '1 number (0-9)',
      met: /[0-9]/.test(formData.password),
    },
    {
      id: 'special',
      label: '@#$%&',
      title: 'At least one special character (@, #, $, %, &)',
      errorLabel: '1 special character (@, #, $, %, &)',
      met: /[@#$%&]/.test(formData.password),
    },
    {
      id: 'length',
      label: '4+ chars',
      title: 'Minimum 4 characters',
      errorLabel: 'at least 4 characters',
      met: formData.password.length >= MIN_PASSWORD_LENGTH,
    },
  ];

  const passwordLength = formData.password.length;
  const metPasswordRulesCount = passwordRules.filter((rule) => rule.met).length;
  const allPasswordRulesMet = metPasswordRulesCount === passwordRules.length;
  const isConfirmPasswordMatched =
    formData.confirmPassword.length > 0 && formData.password === formData.confirmPassword;
  const isCreateAccountReady = allPasswordRulesMet && isConfirmPasswordMatched;
  const showPasswordPrompt =
    !errors.password &&
    (focusedField === 'password' || (passwordLength > 0 && !allPasswordRulesMet));

  const getPasswordStrength = () => {
    if (passwordLength === 0) {
      return { label: 'None', segments: 0, color: '#64748B', barColor: '#CBD5E1' };
    }
    if (metPasswordRulesCount <= 2) {
      return { label: 'Weak', segments: 1, color: '#DC2626', barColor: '#EF4444' };
    }
    if (metPasswordRulesCount <= 4) {
      return { label: 'Fair', segments: 2, color: '#C2410C', barColor: '#EA580C' };
    }
    if (passwordLength >= 8) {
      return { label: 'Strong', segments: 4, color: '#047857', barColor: '#059669' };
    }
    return { label: 'Good', segments: 3, color: '#059669', barColor: '#10B981' };
  };

  const passwordStrength = getPasswordStrength();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field] || (field === 'password' && errors.confirmPassword)) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        if (field === 'password' && value === formData.confirmPassword) {
          delete next.confirmPassword;
        }
        return next;
      });
    }
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Mobile number is required';
    } else if (formData.phoneNumber.replace(/\D/g, '').length < 7) {
      errs.phoneNumber = 'Please enter a valid mobile number';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.gstNumber.trim()) errs.gstNumber = 'GST number is required';
    if (!formData.country) errs.country = 'Please select your country';
    if (!formData.accountType) errs.accountType = 'Please select an account type';
    const unmetRules = passwordRules.filter((rule) => !rule.met);
    if (!formData.password) {
      errs.password = 'Password is required';
    } else if (unmetRules.length > 0) {
      errs.password = `Password must include: ${unmetRules.map((r) => r.errorLabel).join(', ')}`;
    }
    if (!formData.confirmPassword) {
      errs.confirmPassword = 'Please re-enter your password';
    } else if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeTerms) {
      errs.agreeTerms = 'Please agree to the KPL Terms of Service and Privacy Policy';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenDropdown(null);
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const accId = `KPL-${Math.floor(100000 + Math.random() * 900000)}`;
      setGeneratedAccountId(accId);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 900);
  };

  const getFieldMagnetProps = (fieldKey, isOpen = false) => ({
    padding: 36,
    magnetStrength: 10,
    maxOffset: 6,
    scale: 1.012,
    tilt: 1.5,
    disabled: isSubmitting || focusedField === fieldKey || openDropdown !== null,
    style: {
      display: 'block',
      width: '100%',
      position: 'relative',
      zIndex: isOpen ? 50 : 1,
    },
  });

  const getFieldWrapperStyle = (fieldName, activeOverride = false) => {
    const isActive = focusedField === fieldName || activeOverride;
    return {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      width: '100%',
      height: '44px',
      padding: '0 12px',
      borderRadius: '8px',
      backgroundColor: '#FFFFFF',
      border: errors[fieldName]
        ? '1px solid #EF4444'
        : isActive
          ? '1px solid #EA580C'
          : '1px solid #CBD5E1',
      boxShadow:
        isActive && !errors[fieldName]
          ? '0 0 0 3px rgba(234, 88, 12, 0.12)'
          : 'none',
      transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
      boxSizing: 'border-box',
    };
  };

  const iconSlotStyle = {
    width: '28px',
    height: '28px',
    borderRadius: '7px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  const orangeIconBadgeStyle = {
    ...iconSlotStyle,
    backgroundColor: '#FFF7ED',
    border: '1px solid #FFEDD5',
    color: '#EA580C',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: '700',
    color: '#082653',
    marginBottom: '6px',
    fontFamily: 'var(--font-body)',
  };

  const inputBaseStyle = {
    flex: 1,
    minWidth: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: '13.5px',
    color: '#0F172A',
    fontFamily: 'var(--font-body)',
  };

  const dropdownMenuStyle = {
    position: 'absolute',
    top: 'calc(100% + 6px)',
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    border: '1px solid #E2E8F0',
    borderRadius: '10px',
    boxShadow: '0 14px 32px rgba(15, 23, 42, 0.14)',
    padding: '6px',
    maxHeight: '220px',
    overflowY: 'auto',
    zIndex: 60,
  };

  const renderError = (field) =>
    errors[field] ? (
      <span style={{ display: 'block', fontSize: '11.5px', color: '#EF4444', marginTop: '4px' }}>
        {errors[field]}
      </span>
    ) : null;

  const selectedAccountTitle =
    accountTypes.find((t) => t.id === formData.accountType)?.title || '';

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
      <style>{`
        .kpl-register-input::placeholder {
          color: #64748B;
          opacity: 1;
        }
        .kpl-custom-dropdown-list {
          scrollbar-width: thin !important;
          scrollbar-color: #CBD5E1 transparent !important;
        }
        .kpl-custom-dropdown-list::-webkit-scrollbar {
          display: block !important;
          width: 6px !important;
        }
        .kpl-custom-dropdown-list::-webkit-scrollbar-thumb {
          background-color: #CBD5E1;
          border-radius: 999px;
        }
        .kpl-dropdown-option:hover {
          background-color: #FFF7ED !important;
          color: #EA580C !important;
        }
        @media (max-width: 640px) {
          .kpl-register-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
          .kpl-register-empty-cell {
            display: none !important;
          }
          .kpl-register-card {
            padding: 28px 20px !important;
          }
          .kpl-register-header {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* 1. Global Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="register"
        onNavigate={onNavigate}
      />

      {/* 2. Centered Registration Backdrop with 4K KPL Background Image */}
      <main
        style={{
          position: 'relative',
          padding: '40px 24px 60px',
          minHeight: '640px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F8FAFC',
          backgroundImage: `url(${kplBackground4K})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* 4K Global KPL Network Background Layer */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${kplBackground4K})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Centered Registration Card */}
        {isSubmitted ? (
          <div
            className="kpl-register-card"
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              maxWidth: '680px',
              background: '#FFFFFF',
              borderRadius: '18px',
              border: '1px solid #E2E8F0',
              padding: '44px 40px',
              textAlign: 'center',
              boxShadow: '0 16px 42px rgba(15, 23, 42, 0.08)',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 10px 24px rgba(16, 185, 129, 0.28)',
              }}
            >
              <Check size={32} strokeWidth={3} />
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '25px',
                fontWeight: '800',
                color: '#082653',
                margin: '0 0 8px 0',
              }}
            >
              Your KPL Account Is Created
            </h1>
            <p
              style={{
                fontSize: '14px',
                color: '#64748B',
                lineHeight: '1.6',
                margin: '0 auto 24px',
                maxWidth: '500px',
              }}
            >
              Registration reference{' '}
              <strong style={{ color: '#EA580C' }}>{generatedAccountId}</strong> has been created for{' '}
              <strong style={{ color: '#082653' }}>{formData.email}</strong>.
            </p>

            <div
              style={{
                background: '#FAFBFD',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '16px 20px',
                textAlign: 'left',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                gap: '12px',
                marginBottom: '26px',
                fontSize: '13px',
              }}
            >
              <div>
                <span style={{ color: '#64748B', display: 'block', fontSize: '11.5px' }}>Full Name</span>
                <strong style={{ color: '#082653' }}>{formData.fullName}</strong>
              </div>
              <div>
                <span style={{ color: '#64748B', display: 'block', fontSize: '11.5px' }}>Company</span>
                <strong style={{ color: '#082653' }}>{formData.companyName}</strong>
              </div>
              <div>
                <span style={{ color: '#64748B', display: 'block', fontSize: '11.5px' }}>GST Number</span>
                <strong style={{ color: '#082653' }}>{formData.gstNumber}</strong>
              </div>
              <div>
                <span style={{ color: '#64748B', display: 'block', fontSize: '11.5px' }}>Country</span>
                <strong style={{ color: '#082653' }}>{formData.country}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <Magnet padding={100} magnetStrength={2} maxOffset={12} scale={1.02}>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('client-access')}
                  style={{
                    background: 'linear-gradient(135deg, #FF7A00 0%, #EA580C 100%)',
                    color: '#FFFFFF',
                    padding: '12px 26px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 8px 20px rgba(234, 88, 12, 0.28)',
                  }}
                >
                  <span>Proceed to Login</span>
                  <ArrowRight size={16} />
                </button>
              </Magnet>

              <Magnet padding={80} magnetStrength={2} maxOffset={10} scale={1.02}>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  style={{
                    background: '#FFFFFF',
                    color: '#082653',
                    padding: '12px 20px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: '1px solid #CBD5E1',
                    cursor: 'pointer',
                  }}
                >
                  Back to Form
                </button>
              </Magnet>
            </div>
          </div>
        ) : (
          <div
            ref={formRef}
            className="kpl-register-card"
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              maxWidth: '720px',
              background: '#FFFFFF',
              borderRadius: '18px',
              border: '1px solid #E2E8F0',
              padding: '34px 40px 30px',
              boxShadow: '0 16px 42px rgba(15, 23, 42, 0.08)',
              boxSizing: 'border-box',
            }}
          >
            {/* Card Header */}
            <div
              className="kpl-register-header"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                marginBottom: '26px',
              }}
            >
              <Magnet padding={100} magnetStrength={2} maxOffset={14} tilt={10} scale={1.06} style={{ flexShrink: 0 }}>
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #FF7A00 0%, #EA580C 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    boxShadow: '0 8px 18px rgba(234, 88, 12, 0.28)',
                  }}
                >
                  <UserPlus size={26} strokeWidth={2} />
                </div>
              </Magnet>

              <div>
                <h1
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '27px',
                    fontWeight: '800',
                    color: '#082653',
                    lineHeight: '1.15',
                    margin: '0 0 4px 0',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Create Your KPL Account
                </h1>
                <p
                  style={{
                    fontSize: '13.5px',
                    color: '#64748B',
                    margin: 0,
                    lineHeight: '1.4',
                  }}
                >
                  Register to access KPL import &amp; export logistics services.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate>
              <div
                className="kpl-register-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                  columnGap: '20px',
                  rowGap: '15px',
                  alignItems: 'start',
                }}
              >
                {/* Row 1 Left: Full Name */}
                <div style={{ minWidth: 0 }}>
                  <label style={labelStyle}>
                    Full Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <Magnet {...getFieldMagnetProps('fullName')}>
                    <div style={getFieldWrapperStyle('fullName')}>
                      <div style={orangeIconBadgeStyle}>
                        <User size={15} color="#EA580C" />
                      </div>
                      <input
                        type="text"
                        className="kpl-register-input"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onFocus={() => {
                          setOpenDropdown(null);
                          setFocusedField('fullName');
                        }}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        style={inputBaseStyle}
                      />
                    </div>
                  </Magnet>
                  {renderError('fullName')}
                </div>

                {/* Row 1 Right: Email Address */}
                <div style={{ minWidth: 0 }}>
                  <label style={labelStyle}>
                    Email Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <Magnet {...getFieldMagnetProps('email')}>
                    <div style={getFieldWrapperStyle('email')}>
                      <div style={orangeIconBadgeStyle}>
                        <Mail size={15} color="#EA580C" />
                      </div>
                      <input
                        type="email"
                        className="kpl-register-input"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onFocus={() => {
                          setOpenDropdown(null);
                          setFocusedField('email');
                        }}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        style={inputBaseStyle}
                      />
                    </div>
                  </Magnet>
                  {renderError('email')}
                </div>

                {/* Row 2 Left: Mobile Number */}
                <div style={{ minWidth: 0, position: 'relative', zIndex: openDropdown === 'dial' ? 40 : 1 }}>
                  <label style={labelStyle}>
                    Mobile Number <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Magnet {...getFieldMagnetProps('phoneNumber', openDropdown === 'dial')}>
                      <div style={getFieldWrapperStyle('phoneNumber', openDropdown === 'dial')}>
                        <div style={orangeIconBadgeStyle}>
                          <Phone size={15} color="#EA580C" />
                        </div>
                        <button
                          type="button"
                          aria-label="Country Dial Code"
                          aria-expanded={openDropdown === 'dial'}
                          onClick={() => setOpenDropdown((prev) => (prev === 'dial' ? null : 'dial'))}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            background: 'transparent',
                            border: 'none',
                            padding: '4px 6px 4px 0',
                            fontSize: '13.5px',
                            fontWeight: '700',
                            color: '#082653',
                            cursor: 'pointer',
                            flexShrink: 0,
                          }}
                        >
                          <span>{formData.countryCode}</span>
                          <ChevronDown
                            size={13}
                            color="#082653"
                            style={{
                              transform: openDropdown === 'dial' ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.15s ease',
                            }}
                          />
                        </button>
                        <div style={{ width: '1px', height: '20px', backgroundColor: '#E2E8F0', flexShrink: 0 }} />
                        <input
                          type="tel"
                          className="kpl-register-input"
                          placeholder="Enter mobile number"
                          value={formData.phoneNumber}
                          onFocus={() => {
                            setOpenDropdown(null);
                            setFocusedField('phoneNumber');
                          }}
                          onBlur={() => setFocusedField('')}
                          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                          style={inputBaseStyle}
                        />
                      </div>
                    </Magnet>

                    {openDropdown === 'dial' && (
                      <div
                        className="kpl-custom-dropdown-list"
                        style={{
                          ...dropdownMenuStyle,
                          right: 'auto',
                          width: '195px',
                        }}
                      >
                        {dialCodes.map((item) => {
                          const isSelected = formData.countryCode === item.code;
                          return (
                            <button
                              key={item.code}
                              type="button"
                              className="kpl-dropdown-option"
                              onClick={() => {
                                handleInputChange('countryCode', item.code);
                                setOpenDropdown(null);
                              }}
                              style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '8px 10px',
                                borderRadius: '6px',
                                backgroundColor: isSelected ? '#FFF7ED' : 'transparent',
                                color: isSelected ? '#EA580C' : '#0F172A',
                                fontSize: '13px',
                                fontWeight: isSelected ? '700' : '500',
                                textAlign: 'left',
                                border: 'none',
                                cursor: 'pointer',
                              }}
                            >
                              <span>
                                <strong>{item.code}</strong> {item.label}
                              </span>
                              {isSelected && <Check size={14} color="#EA580C" />}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  {renderError('phoneNumber')}
                </div>

                {/* Row 2 Right: Company Name */}
                <div style={{ minWidth: 0 }}>
                  <label style={labelStyle}>
                    Company Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <Magnet {...getFieldMagnetProps('companyName')}>
                    <div style={getFieldWrapperStyle('companyName')}>
                      <div style={orangeIconBadgeStyle}>
                        <Building2 size={15} color="#EA580C" />
                      </div>
                      <input
                        type="text"
                        className="kpl-register-input"
                        placeholder="Enter your company name"
                        value={formData.companyName}
                        onFocus={() => {
                          setOpenDropdown(null);
                          setFocusedField('companyName');
                        }}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        style={inputBaseStyle}
                      />
                    </div>
                  </Magnet>
                  {renderError('companyName')}
                </div>

                {/* Row 3 Left: GST Number */}
                <div style={{ minWidth: 0 }}>
                  <label style={labelStyle}>
                    GST Number <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <Magnet {...getFieldMagnetProps('gstNumber')}>
                    <div style={getFieldWrapperStyle('gstNumber')}>
                      <div style={orangeIconBadgeStyle}>
                        <FileText size={15} color="#EA580C" />
                      </div>
                      <input
                        type="text"
                        className="kpl-register-input"
                        placeholder="Enter your GST number"
                        value={formData.gstNumber}
                        onFocus={() => {
                          setOpenDropdown(null);
                          setFocusedField('gstNumber');
                        }}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                        style={inputBaseStyle}
                      />
                    </div>
                  </Magnet>
                  {renderError('gstNumber')}
                </div>

                {/* Row 3 Right: Country (Searchable Bounded Combobox Dropdown) */}
                <div
                  ref={countryFieldRef}
                  style={{ minWidth: 0, position: 'relative', zIndex: openDropdown === 'country' ? 40 : 1 }}
                >
                  <label style={labelStyle}>
                    Country <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Magnet {...getFieldMagnetProps('country', openDropdown === 'country')}>
                      <div
                        style={{
                          ...getFieldWrapperStyle('country', openDropdown === 'country'),
                          cursor: 'text',
                        }}
                        onClick={() => {
                          if (openDropdown !== 'country') {
                            openCountryDropdown(false);
                          }
                          countryInputRef.current?.focus();
                        }}
                      >
                        <span style={orangeIconBadgeStyle}>
                          <Globe size={15} color="#EA580C" />
                        </span>
                        <input
                          ref={countryInputRef}
                          type="text"
                          role="combobox"
                          aria-autocomplete="list"
                          aria-expanded={openDropdown === 'country'}
                          aria-controls="register-country-listbox"
                          className="kpl-register-input"
                          placeholder="Select your country"
                          autoComplete="off"
                          value={
                            openDropdown === 'country' || isFilteringCountry
                              ? countryQuery
                              : formData.country
                          }
                          onFocus={() => {
                            openCountryDropdown(false);
                          }}
                          onBlur={() => {
                            setFocusedField('');
                            setTimeout(() => {
                              setOpenDropdown((prev) => (prev === 'country' ? null : prev));
                              setIsFilteringCountry(false);
                              setHighlightedCountryIndex(-1);
                              setCountryQuery((prevQuery) => {
                                const exact = countryList.find(
                                  (c) => c.toLowerCase() === prevQuery.trim().toLowerCase()
                                );
                                if (exact) {
                                  if (exact !== formData.country) {
                                    handleInputChange('country', exact);
                                  }
                                  return exact;
                                }
                                return formData.country;
                              });
                            }, 120);
                          }}
                          onChange={(e) => {
                            const nextVal = e.target.value;
                            setCountryQuery(nextVal);
                            setIsFilteringCountry(true);
                            setOpenDropdown('country');
                            setFocusedField('country');
                            setHighlightedCountryIndex(0);
                            if (!nextVal.trim()) {
                              handleInputChange('country', '');
                            } else {
                              const exactMatch = countryList.find(
                                (c) => c.toLowerCase() === nextVal.trim().toLowerCase()
                              );
                              if (exactMatch) {
                                handleInputChange('country', exactMatch);
                              }
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'ArrowDown') {
                              e.preventDefault();
                              if (openDropdown !== 'country') {
                                openCountryDropdown(false);
                                return;
                              }
                              setHighlightedCountryIndex((prev) => {
                                const next =
                                  filteredCountries.length > 0
                                    ? Math.min(prev + 1, filteredCountries.length - 1)
                                    : -1;
                                if (next >= 0) {
                                  countryOptionRefs.current[next]?.scrollIntoView({ block: 'nearest' });
                                }
                                return next;
                              });
                            } else if (e.key === 'ArrowUp') {
                              e.preventDefault();
                              setHighlightedCountryIndex((prev) => {
                                const next = Math.max(prev - 1, 0);
                                countryOptionRefs.current[next]?.scrollIntoView({ block: 'nearest' });
                                return next;
                              });
                            } else if (e.key === 'Enter' && openDropdown === 'country') {
                              if (filteredCountries.length > 0) {
                                e.preventDefault();
                                const targetIdx =
                                  highlightedCountryIndex >= 0 &&
                                  highlightedCountryIndex < filteredCountries.length
                                    ? highlightedCountryIndex
                                    : 0;
                                handleSelectCountry(filteredCountries[targetIdx]);
                              }
                            } else if (e.key === 'Escape') {
                              setOpenDropdown(null);
                              setIsFilteringCountry(false);
                              setCountryQuery(formData.country);
                            }
                          }}
                          style={{
                            ...inputBaseStyle,
                            cursor: 'text',
                          }}
                        />
                        <button
                          type="button"
                          tabIndex={-1}
                          aria-label="Toggle countries dropdown"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (openDropdown === 'country') {
                              setOpenDropdown(null);
                              setIsFilteringCountry(false);
                              setHighlightedCountryIndex(-1);
                            } else {
                              openCountryDropdown(false);
                              countryInputRef.current?.focus();
                            }
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            flexShrink: 0,
                          }}
                        >
                          <ChevronDown
                            size={16}
                            color="#0F172A"
                            style={{
                              flexShrink: 0,
                              transform: openDropdown === 'country' ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.15s ease',
                            }}
                          />
                        </button>
                      </div>
                    </Magnet>

                    {openDropdown === 'country' && (
                      <div
                        id="register-country-listbox"
                        role="listbox"
                        className="kpl-custom-dropdown-list"
                        style={dropdownMenuStyle}
                      >
                        {filteredCountries.length === 0 ? (
                          <div style={{ padding: '10px', fontSize: '13px', color: '#64748B', textAlign: 'center' }}>
                            No matching country found
                          </div>
                        ) : (
                          filteredCountries.map((countryName, idx) => {
                            const isSelected = formData.country === countryName;
                            const isHighlighted = highlightedCountryIndex === idx;
                            return (
                              <button
                                key={countryName}
                                ref={(el) => {
                                  countryOptionRefs.current[idx] = el;
                                }}
                                type="button"
                                role="option"
                                aria-selected={isSelected}
                                className="kpl-dropdown-option"
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  handleSelectCountry(countryName);
                                }}
                                onMouseEnter={() => setHighlightedCountryIndex(idx)}
                                style={{
                                  width: '100%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  padding: '8px 10px',
                                  borderRadius: '6px',
                                  backgroundColor:
                                    isSelected || isHighlighted ? '#FFF7ED' : 'transparent',
                                  color: isSelected || isHighlighted ? '#EA580C' : '#0F172A',
                                  fontSize: '13.5px',
                                  fontWeight: isSelected ? '700' : '500',
                                  textAlign: 'left',
                                  border: 'none',
                                  cursor: 'pointer',
                                }}
                              >
                                <span>{countryName}</span>
                                {isSelected && <Check size={14} color="#EA580C" />}
                              </button>
                            );
                          })
                        )}
                      </div>
                    )}
                  </div>
                  {renderError('country')}
                </div>

                {/* Row 4 Left: Account Type (Bounded Custom Dropdown) */}
                <div style={{ minWidth: 0, position: 'relative', zIndex: openDropdown === 'accountType' ? 40 : 1 }}>
                  <label style={labelStyle}>
                    Account Type <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Magnet {...getFieldMagnetProps('accountType', openDropdown === 'accountType')}>
                      <button
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded={openDropdown === 'accountType'}
                        onClick={() => setOpenDropdown((prev) => (prev === 'accountType' ? null : 'accountType'))}
                        style={{
                          ...getFieldWrapperStyle('accountType', openDropdown === 'accountType'),
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: 1 }}>
                          <span style={orangeIconBadgeStyle}>
                            <Layers size={15} color="#EA580C" />
                          </span>
                          <span
                            style={{
                              fontSize: '13.5px',
                              color: selectedAccountTitle ? '#0F172A' : '#64748B',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {selectedAccountTitle || 'Select account type'}
                          </span>
                        </span>
                        <ChevronDown
                          size={16}
                          color="#0F172A"
                          style={{
                            flexShrink: 0,
                            transform: openDropdown === 'accountType' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.15s ease',
                          }}
                        />
                      </button>
                    </Magnet>

                    {openDropdown === 'accountType' && (
                      <div role="listbox" className="kpl-custom-dropdown-list" style={dropdownMenuStyle}>
                        {accountTypes.map((type) => {
                          const isSelected = formData.accountType === type.id;
                          return (
                            <button
                              key={type.id}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              className="kpl-dropdown-option"
                              onClick={() => {
                                handleInputChange('accountType', type.id);
                                setOpenDropdown(null);
                              }}
                              style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '9px 10px',
                                borderRadius: '6px',
                                backgroundColor: isSelected ? '#FFF7ED' : 'transparent',
                                color: isSelected ? '#EA580C' : '#0F172A',
                                fontSize: '13.5px',
                                fontWeight: isSelected ? '700' : '500',
                                textAlign: 'left',
                                border: 'none',
                                cursor: 'pointer',
                              }}
                            >
                              <span>{type.title}</span>
                              {isSelected && <Check size={14} color="#EA580C" />}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  {renderError('accountType')}
                </div>

                {/* Row 4 Right: Empty spacer cell matching reference alignment */}
                <div className="kpl-register-empty-cell" />

                {/* Row 5 Left: Password */}
                <div style={{ minWidth: 0 }}>
                  <label style={labelStyle}>
                    Password <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <Magnet {...getFieldMagnetProps('password')}>
                    <div style={getFieldWrapperStyle('password')}>
                      <div style={orangeIconBadgeStyle}>
                        <Lock size={15} color="#EA580C" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="kpl-register-input"
                        placeholder="Create a password"
                        minLength={MIN_PASSWORD_LENGTH}
                        aria-describedby={showPasswordPrompt ? 'register-password-requirements' : undefined}
                        value={formData.password}
                        onFocus={() => {
                          setOpenDropdown(null);
                          setFocusedField('password');
                        }}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        style={inputBaseStyle}
                      />
                      <button
                        type="button"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        onClick={() => setShowPassword((prev) => !prev)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#334155',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '2px',
                          cursor: 'pointer',
                          flexShrink: 0,
                        }}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </Magnet>
                  {showPasswordPrompt && (
                    <div
                      id="register-password-requirements"
                      aria-live="polite"
                      style={{ marginTop: '6px' }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '8px',
                          marginBottom: '4px',
                          fontSize: '11px',
                        }}
                      >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <div
                            aria-hidden="true"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                          >
                            {[1, 2, 3, 4].map((segment) => (
                              <span
                                key={segment}
                                style={{
                                  width: '14px',
                                  height: '3.5px',
                                  borderRadius: '999px',
                                  backgroundColor:
                                    segment <= passwordStrength.segments
                                      ? passwordStrength.barColor
                                      : '#E2E8F0',
                                  transition: 'background-color 0.2s ease',
                                }}
                              />
                            ))}
                          </div>
                          <span style={{ fontWeight: '600', color: passwordStrength.color }}>
                            {passwordLength === 0 ? 'Add characters' : passwordStrength.label}
                          </span>
                        </div>
                        <span
                          style={{
                            fontWeight: '600',
                            color: passwordLength >= MIN_PASSWORD_LENGTH ? '#059669' : '#64748B',
                          }}
                        >
                          {passwordLength} {passwordLength === 1 ? 'char' : 'chars'}
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          gap: '4px 10px',
                          fontSize: '11px',
                          lineHeight: '1.35',
                        }}
                      >
                        {passwordRules.map((rule) => {
                          const isPending = passwordLength > 0 && !rule.met;
                          return (
                            <span
                              key={rule.id}
                              title={rule.title}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '3px',
                                fontWeight: rule.met ? '600' : '500',
                                color: rule.met
                                  ? '#059669'
                                  : isPending
                                    ? '#EA580C'
                                    : '#64748B',
                              }}
                            >
                              {rule.met ? (
                                <Check size={11} strokeWidth={2.75} />
                              ) : (
                                <span
                                  style={{
                                    width: '4px',
                                    height: '4px',
                                    borderRadius: '50%',
                                    backgroundColor: isPending ? '#EA580C' : '#94A3B8',
                                  }}
                                />
                              )}
                              <span>{rule.label}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {renderError('password')}
                </div>

                {/* Row 5 Right: Confirm Password */}
                <div style={{ minWidth: 0 }}>
                  <label style={labelStyle}>
                    Confirm Password <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <Magnet {...getFieldMagnetProps('confirmPassword')}>
                    <div style={getFieldWrapperStyle('confirmPassword')}>
                      <div style={orangeIconBadgeStyle}>
                        <Lock size={15} color="#EA580C" />
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        className="kpl-register-input"
                        placeholder="Re-enter your password"
                        value={formData.confirmPassword}
                        onFocus={() => {
                          setOpenDropdown(null);
                          setFocusedField('confirmPassword');
                        }}
                        onBlur={() => setFocusedField('')}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        style={inputBaseStyle}
                      />
                      <button
                        type="button"
                        aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#334155',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '2px',
                          cursor: 'pointer',
                          flexShrink: 0,
                        }}
                      >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </Magnet>
                  {!errors.confirmPassword && formData.confirmPassword.length > 0 && (
                    <div
                      aria-live="polite"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        marginTop: '6px',
                        fontSize: '11.5px',
                        fontWeight: '600',
                        color: isConfirmPasswordMatched ? '#047857' : '#DC2626',
                      }}
                    >
                      {isConfirmPasswordMatched ? (
                        <>
                          <Check size={13} strokeWidth={2.75} />
                          <span>Passwords match</span>
                        </>
                      ) : (
                        <>
                          <X size={13} strokeWidth={2.75} />
                          <span>Passwords do not match</span>
                        </>
                      )}
                    </div>
                  )}
                  {renderError('confirmPassword')}
                </div>
              </div>

              {/* Terms Checkbox */}
              <div style={{ marginTop: '18px', marginBottom: '18px' }}>
                <label
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                    style={{
                      width: '17px',
                      height: '17px',
                      accentColor: '#EA580C',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  />
                  <span style={{ fontSize: '13px', color: '#082653', fontWeight: '500' }}>
                    I agree to the KPL{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setLegalDoc('terms');
                      }}
                      style={{
                        color: '#EA580C',
                        fontWeight: '700',
                        fontSize: '13px',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                      }}
                    >
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setLegalDoc('privacy');
                      }}
                      style={{
                        color: '#EA580C',
                        fontWeight: '700',
                        fontSize: '13px',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                      }}
                    >
                      Privacy Policy.
                    </button>
                  </span>
                </label>
                {renderError('agreeTerms')}
              </div>

              {/* Primary Submit Button */}
              <Magnet
                padding={100}
                magnetStrength={2}
                maxOffset={12}
                scale={1.02}
                disabled={isSubmitting || !isCreateAccountReady || openDropdown !== null}
                style={{ display: 'block', width: '100%' }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting || !isCreateAccountReady}
                  title={
                    !isCreateAccountReady && !isSubmitting
                      ? 'Satisfy all password requirements and confirm matching password'
                      : undefined
                  }
                  style={{
                    width: '100%',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #FF7A00 0%, #EA580C 100%)',
                    color: '#FFFFFF',
                    fontSize: '15px',
                    fontWeight: '700',
                    border: 'none',
                    cursor: isSubmitting || !isCreateAccountReady ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 20px rgba(234, 88, 12, 0.3)',
                    opacity: isSubmitting ? 0.85 : 1,
                    transition: 'box-shadow 0.15s ease',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div
                        style={{
                          width: '17px',
                          height: '17px',
                          border: '2px solid #FFFFFF',
                          borderTopColor: 'transparent',
                          borderRadius: '50%',
                          animation: 'spin 0.8s linear infinite',
                        }}
                      />
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <UserPlus size={18} />
                      <span>Create Account</span>
                    </>
                  )}
                </button>
              </Magnet>

              {/* Footer Login Link */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginTop: '18px',
                }}
              >
                <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }} />
                <div style={{ fontSize: '13px', color: '#082653', fontWeight: '500', whiteSpace: 'nowrap' }}>
                  Already have an account?{' '}
                  <Magnet padding={60} magnetStrength={2} maxOffset={6} scale={1.03}>
                    <button
                      type="button"
                      onClick={() => onNavigate && onNavigate('client-access')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#EA580C',
                        fontWeight: '700',
                        fontSize: '13px',
                        cursor: 'pointer',
                        padding: '2px 4px',
                        marginLeft: '2px',
                      }}
                    >
                      Login
                    </button>
                  </Magnet>
                </div>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }} />
              </div>
            </form>
          </div>
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer onNavigate={onNavigate} />

      {/* 4. Global Track/Quote Modal */}
      <TrackModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />

      {/* 5. Terms / Privacy Lightweight Modal */}
      {legalDoc && (
        <div
          onClick={() => setLegalDoc(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.55)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '480px',
              background: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid #E2E8F0',
              padding: '24px',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '17px', fontWeight: '800', color: '#082653', margin: 0 }}>
                {legalDoc === 'terms' ? 'KPL Terms of Service' : 'KPL Privacy Policy'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalDoc(null)}
                style={{ color: '#64748B', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
              >
                <X size={18} />
              </button>
            </div>
            <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6', margin: '0 0 18px 0' }}>
              {legalDoc === 'terms'
                ? 'KPL import & export logistics accounts govern digital bookings, customs declarations, Incoterms compliance, and freight invoicing across our global network.'
                : 'KPL encrypts company tax/GST identifiers, contact credentials, and shipment records strictly for verified portal onboarding and cargo dispatch.'}
            </p>
            <button
              type="button"
              onClick={() => setLegalDoc(null)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #FF7A00 0%, #EA580C 100%)',
                color: '#FFFFFF',
                fontSize: '13.5px',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
