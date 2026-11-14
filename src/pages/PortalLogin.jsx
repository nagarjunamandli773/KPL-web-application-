import React, { useEffect, useState } from 'react';
import {
  Lock,
  Mail,
  Shield,
  Eye,
  EyeOff,
  KeyRound,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  AlertCircle,
  User,
  Briefcase,
  ArrowUpRight,
  ArrowDownLeft,
  Truck,
  Settings,
  Building,
} from 'lucide-react';
import kplLogo from '../../Images/KPL_Logo2.png';
import kplBackground4K from '../../Images/KPL_Background_4K.png';
import { Magnet } from '../components/common/Magnet';

const portalConfig = {
  'client-access': {
    title: 'Customer Access Portal',
    badge: 'Secure Login',
    subtitle: 'Authorized personnel access only',
    icon: User,
    color: '#FF6F00',
    bgGradient: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
  },
  'strategic-partners': {
    title: 'Strategic Partners Portal',
    badge: 'Partner Access',
    subtitle: 'Collaborate and align on global supply chain strategies.',
    icon: Briefcase,
    color: '#0277BD',
    bgGradient: 'linear-gradient(135deg, #E1F5FE 0%, #B3E5FC 100%)',
  },
  'global-export': {
    title: 'Global Export Portal',
    badge: 'Export Operations',
    subtitle: 'Streamline your international export documentation and operations.',
    icon: ArrowUpRight,
    color: '#2E7D32',
    bgGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
  },
  'global-import': {
    title: 'Global Import Portal',
    badge: 'Import Clearance',
    subtitle: 'Track inbound shipments and manage customs compliance.',
    icon: ArrowDownLeft,
    color: '#1565C0',
    bgGradient: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
  },
  'supplier-network': {
    title: 'Supplier & Vendor Network',
    badge: 'Vendor Access',
    subtitle: 'Manage inventory, purchase orders, and vendor performance.',
    icon: Truck,
    color: '#F57C00',
    bgGradient: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
  },
  'logistics-operations': {
    title: 'Logistics Operations',
    badge: 'Operations Hub',
    subtitle: 'Internal tools for routing, freight management, and dispatch.',
    icon: Settings,
    color: '#455A64',
    bgGradient: 'linear-gradient(135deg, #ECEFF1 0%, #CFD8DC 100%)',
  },
  'enterprise-employee': {
    title: 'Enterprise Employee Portal',
    badge: 'Corporate SSO',
    subtitle: 'Secure access to corporate resources and HR systems.',
    icon: Building,
    color: '#6A1B9A',
    bgGradient: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)',
  },
};

export const PortalLogin = ({ type = 'client-access', onNavigate, initialForgot = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isForgotMode, setIsForgotMode] = useState(Boolean(initialForgot));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(true);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [authError, setAuthError] = useState('');
  const [resetSubmitted, setResetSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(timer);
  }, [type]);

  useEffect(() => {
    if (initialForgot) {
      setIsForgotMode(true);
    }
  }, [initialForgot]);

  const config = portalConfig[type] || portalConfig['client-access'];

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setAuthError('');
    if (!email.trim()) {
      setAuthError('Please enter your system email or username.');
      return;
    }
    if (!password.trim()) {
      setAuthError('Please enter your security password.');
      return;
    }

    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      setAuthSuccess(true);
      setTimeout(() => {
        if (onNavigate) {
          onNavigate('unified-digital-portal');
        }
      }, 1200);
    }, 900);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setAuthError('');
    if (!email.trim()) {
      setAuthError('Please enter your registered email address.');
      return;
    }
    setResetSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#F8FAFC',
        backgroundImage: `url(${kplBackground4K})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 16px',
        boxSizing: 'border-box',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Return to Home link */}
      <button
        onClick={() => onNavigate && onNavigate('home')}
        style={{
          position: 'absolute',
          top: '22px',
          left: '24px',
          zIndex: 30,
          background: 'rgba(255, 255, 255, 0.92)',
          border: '1.5px solid #E2E8F0',
          borderRadius: '100px',
          padding: '8px 18px',
          fontSize: '13px',
          fontWeight: '600',
          color: '#082653',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#FFFFFF';
          e.currentTarget.style.borderColor = '#EA580C';
          e.currentTarget.style.color = '#EA580C';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.92)';
          e.currentTarget.style.borderColor = '#E2E8F0';
          e.currentTarget.style.color = '#082653';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <ArrowLeft size={15} />
        <span>Return to Globalink Home</span>
      </button>



      {/* 4K Global KPL Network Background Layer */}
      <div
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

      {/* Faint Center Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '720px',
          height: '720px',
          background: 'radial-gradient(circle, rgba(255, 122, 0, 0.08) 0%, rgba(8, 38, 83, 0.03) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Main Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '450px',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Brand Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '8px' }}>
          {/* KPL Logo Image */}
          <img
            src={kplLogo}
            alt="KPL Global Trade"
            style={{
              height: '46px',
              width: 'auto',
              objectFit: 'contain',
              marginBottom: '4px',
            }}
          />

          {/* KPL GLOBAL TRADE text with decorative accent lines */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontSize: '11px',
              fontWeight: '800',
              letterSpacing: '0.22em',
              color: '#082653',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <span style={{ width: '28px', height: '1.5px', background: 'linear-gradient(90deg, transparent, #FF7A00)' }} />
            <span>KPL GLOBAL TRADE</span>
            <span style={{ width: '28px', height: '1.5px', background: 'linear-gradient(90deg, #FF7A00, transparent)' }} />
          </div>

          {/* Title Row with Shield Icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '4px',
            }}
          >
            {isForgotMode ? (
              /* Shield Icon with Key for Password Recovery */
              <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <path d="M17 1L3 6V17C3 26.5 9 34 17 37C25 34 31 26.5 31 17V6L17 1Z" stroke="#0052CC" strokeWidth="2.5" strokeLinejoin="round" fill="#FFFFFF"/>
                <circle cx="16" cy="19" r="4" stroke="#0052CC" strokeWidth="2.2"/>
                <path d="M19 22L23 26M21 24L23 22" stroke="#0052CC" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            ) : (
              /* Shield Icon with Padlock for Secure Login matching image */
              <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <path d="M17 1L3 6V17C3 26.5 9 34 17 37C25 34 31 26.5 31 17V6L17 1Z" stroke="#0052CC" strokeWidth="2.5" strokeLinejoin="round" fill="#FFFFFF"/>
                <rect x="11" y="18" width="12" height="10" rx="2" fill="#0052CC"/>
                <path d="M14 18V15C14 13.34 15.34 12 17 12C18.66 12 20 13.34 20 15V18" stroke="#0052CC" strokeWidth="2.2" strokeLinecap="round"/>
                <circle cx="17" cy="22.5" r="1.5" fill="#FFFFFF"/>
                <line x1="17" y1="23.5" x2="17" y2="25.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}

            <h1
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: '32px',
                fontWeight: '800',
                color: '#082653',
                margin: 0,
                letterSpacing: '-0.01em',
                lineHeight: 1.15,
              }}
            >
              {isForgotMode ? 'Password Recovery' : (type === 'client-access' ? 'Secure Login' : config.badge)}
            </h1>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '13.5px',
              color: '#64748B',
              fontWeight: '500',
              marginTop: '4px',
              marginBottom: '28px',
              textAlign: 'center',
            }}
          >
            {isForgotMode
              ? 'Authorized credential reset & account access'
              : (type === 'client-access' ? 'Authorized personnel access only' : config.subtitle)}
          </p>
        </div>

        {/* White Rounded Card with Orange Top Tab */}
        <div
          style={{
            width: '100%',
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1.5px solid #E2E8F0',
            boxShadow: '0 20px 45px rgba(8, 38, 83, 0.08), 0 2px 8px rgba(0, 0, 0, 0.03)',
            padding: '38px 34px 32px 34px',
            position: 'relative',
            boxSizing: 'border-box',
          }}
        >
          {/* Top Hanging Orange Ribbon Tab with White Lock matching image */}
          <div
            style={{
              position: 'absolute',
              top: '-18px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '66px',
              height: '34px',
              background: 'linear-gradient(135deg, #FF7A00 0%, #EA580C 100%)',
              borderRadius: '8px 8px 12px 12px',
              boxShadow: '0 6px 14px rgba(234, 88, 12, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 5,
            }}
          >
            {isForgotMode ? (
              <KeyRound size={16} color="#FFFFFF" strokeWidth={2.4} />
            ) : (
              <Lock size={16} color="#FFFFFF" strokeWidth={2.4} />
            )}
          </div>

          {/* Feedback messages */}
          {authError && (
            <div
              style={{
                marginBottom: '18px',
                padding: '10px 14px',
                backgroundColor: '#FEF2F2',
                border: '1px solid #FECACA',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                color: '#B91C1C',
                fontWeight: '500',
              }}
            >
              <AlertCircle size={16} color="#DC2626" style={{ flexShrink: 0 }} />
              <span>{authError}</span>
            </div>
          )}

          {authSuccess && (
            <div
              style={{
                marginBottom: '18px',
                padding: '10px 14px',
                backgroundColor: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                color: '#15803D',
                fontWeight: '600',
              }}
            >
              <CheckCircle2 size={16} color="#16A34A" style={{ flexShrink: 0 }} />
              <span>Authentication successful! Accessing workspace...</span>
            </div>
          )}

          {/* MODE 1: SECURE LOGIN FORM */}
          {!isForgotMode && (
            <form onSubmit={handleLoginSubmit}>
              {/* Field 1: SYSTEM EMAIL OR USERNAME */}
              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '11.5px',
                    fontWeight: '800',
                    color: '#082653',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  SYSTEM EMAIL OR USERNAME
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail
                    size={17}
                    color="#64748B"
                    style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    type="text"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 14px 0 44px',
                      background: '#F8FAFC',
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '10px',
                      fontSize: '14px',
                      color: '#082653',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#EA580C';
                      e.target.style.boxShadow = '0 0 0 3px rgba(234, 88, 12, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#CBD5E1';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Field 2: SECURITY PASSWORD + FORGOT? */}
              <div style={{ marginBottom: '16px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  <label
                    style={{
                      fontSize: '11.5px',
                      fontWeight: '800',
                      color: '#082653',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      margin: 0,
                    }}
                  >
                    SECURITY PASSWORD
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthError('');
                      setIsForgotMode(true);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#EA580C',
                      fontSize: '12px',
                      fontWeight: '800',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      padding: '2px 0',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C2410C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#EA580C')}
                  >
                    FORGOT?
                  </button>
                </div>
                <div style={{ position: 'relative' }}>
                  <Shield
                    size={17}
                    color="#64748B"
                    style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 44px 0 44px',
                      background: '#F8FAFC',
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '10px',
                      fontSize: '14px',
                      color: '#082653',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                      boxSizing: 'border-box',
                      letterSpacing: showPassword ? 'normal' : '0.15em',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#EA580C';
                      e.target.style.boxShadow = '0 0 0 3px rgba(234, 88, 12, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#CBD5E1';
                      e.target.style.boxShadow = 'none';
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
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#64748B',
                      padding: '4px',
                    }}
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Field 3: Remember Password Checkbox */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  marginBottom: '24px',
                }}
              >
                <input
                  type="checkbox"
                  id="remember-password-portal"
                  checked={rememberPassword}
                  onChange={(e) => setRememberPassword(e.target.checked)}
                  style={{
                    width: '16px',
                    height: '16px',
                    accentColor: '#EA580C',
                    cursor: 'pointer',
                    borderRadius: '4px',
                  }}
                />
                <label
                  htmlFor="remember-password-portal"
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#082653',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  Remember Password
                </label>
              </div>

              {/* Field 4: AUTHENTICATE Pill Button matching image - Full Width Alignment */}
              <div style={{ width: '100%' }}>
                <button
                  type="submit"
                  disabled={isAuthenticating}
                  style={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #FF7A00 0%, #EA580C 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    cursor: isAuthenticating ? 'wait' : 'pointer',
                    fontSize: '14.5px',
                    fontWeight: '800',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 10px 24px rgba(234, 88, 12, 0.38)',
                    transition: 'all 0.25s ease',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 14px 28px rgba(234, 88, 12, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 24px rgba(234, 88, 12, 0.38)';
                  }}
                >
                  <Lock size={17} color="#FFFFFF" strokeWidth={2.4} />
                  <span>{isAuthenticating ? 'AUTHENTICATING...' : 'AUTHENTICATE'}</span>
                </button>
              </div>
            </form>
          )}

          {/* MODE 2: FORGOT PASSWORD / RECOVERY FORM */}
          {isForgotMode && (
            <div>
              {!resetSubmitted ? (
                <form onSubmit={handleForgotSubmit}>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#475569',
                      lineHeight: '1.5',
                      marginBottom: '18px',
                    }}
                  >
                    Enter your registered corporate email or username. An encrypted reset link will be dispatched immediately.
                  </p>

                  {/* Recovery Email Input */}
                  <div style={{ marginBottom: '22px' }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '11.5px',
                        fontWeight: '800',
                        color: '#082653',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                      }}
                    >
                      SYSTEM EMAIL OR USERNAME
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail
                        size={17}
                        color="#64748B"
                        style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
                      />
                      <input
                        type="text"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          width: '100%',
                          height: '46px',
                          padding: '0 14px 0 44px',
                          background: '#F8FAFC',
                          border: '1.5px solid #CBD5E1',
                          borderRadius: '10px',
                          fontSize: '14px',
                          color: '#082653',
                          outline: 'none',
                          transition: 'all 0.2s ease',
                          boxSizing: 'border-box',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#EA580C';
                          e.target.style.boxShadow = '0 0 0 3px rgba(234, 88, 12, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Send Recovery Link Pill Button - Full Width Alignment */}
                  <div style={{ width: '100%', marginBottom: '16px' }}>
                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        height: '50px',
                        borderRadius: '9999px',
                        background: 'linear-gradient(135deg, #FF7A00 0%, #EA580C 100%)',
                        color: '#FFFFFF',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '800',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        boxShadow: '0 10px 24px rgba(234, 88, 12, 0.38)',
                        transition: 'all 0.25s ease',
                        boxSizing: 'border-box',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 14px 28px rgba(234, 88, 12, 0.45)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 24px rgba(234, 88, 12, 0.38)';
                      }}
                    >
                      <Mail size={17} color="#FFFFFF" strokeWidth={2.4} />
                      <span>SEND RECOVERY LINK</span>
                    </button>
                  </div>

                  {/* Return to Secure Login Link */}
                  <div style={{ textAlign: 'center' }}>
                    <button
                      type="button"
                      onClick={() => {
                        setAuthError('');
                        setIsForgotMode(false);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#082653',
                        fontSize: '13px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        padding: '6px 12px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#EA580C')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#082653')}
                    >
                      <ArrowLeft size={14} />
                      <span>Back to Secure Login</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Success View after Recovery Request */
                <div style={{ textAlign: 'center', padding: '8px 4px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: '#DCFCE7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      boxShadow: '0 4px 12px rgba(22, 163, 74, 0.18)',
                    }}
                  >
                    <CheckCircle2 size={30} color="#16A34A" />
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: '800',
                      color: '#082653',
                      marginBottom: '8px',
                    }}
                  >
                    Recovery Link Sent
                  </h3>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#64748B',
                      lineHeight: '1.5',
                      marginBottom: '24px',
                    }}
                  >
                    If an enterprise account exists for <strong style={{ color: '#082653' }}>{email || 'your email'}</strong>, instructions to reset your security credentials have been dispatched.
                  </p>

                  <div style={{ width: '100%' }}>
                    <button
                      type="button"
                      onClick={() => {
                        setIsForgotMode(false);
                        setResetSubmitted(false);
                      }}
                      style={{
                        width: '100%',
                        height: '48px',
                        borderRadius: '9999px',
                        background: 'linear-gradient(135deg, #FF7A00 0%, #EA580C 100%)',
                        color: '#FFFFFF',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '13.5px',
                        fontWeight: '700',
                        boxShadow: '0 8px 20px rgba(234, 88, 12, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <ArrowLeft size={16} />
                      <span>Return to Secure Login</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Bottom Enterprise Register Link */}
          <div
            style={{
              marginTop: '22px',
              paddingTop: '18px',
              borderTop: '1px solid #F1F5F9',
              textAlign: 'center',
              fontSize: '13px',
              color: '#64748B',
            }}
          >
            <span>Don't have an enterprise account? </span>
            <Magnet padding={50} magnetStrength={2} maxOffset={4} scale={1.03}>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('register')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#EA580C',
                  fontWeight: '700',
                  fontSize: '13px',
                  cursor: 'pointer',
                  padding: '2px 4px',
                }}
              >
                Register here
              </button>
            </Magnet>
          </div>

          {/* Security Badge */}
          <div
            style={{
              marginTop: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              color: '#94A3B8',
              fontSize: '11.5px',
              fontWeight: '500',
            }}
          >
            <ShieldCheck size={14} color="#64748B" />
            <span>256-bit AES Enterprise Encryption • Zero-Trust Access</span>
          </div>
        </div>
      </div>
    </div>
  );
};
