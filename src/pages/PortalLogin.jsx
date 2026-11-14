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
  LogIn,
  UserPlus,
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
        {/* Brand Header matching reference image */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4px' }}>
          {/* KPL Logo Image */}
          <img
            src={kplLogo}
            alt="KPL Global Trade"
            style={{
              height: '52px',
              width: 'auto',
              objectFit: 'contain',
              marginBottom: '10px',
            }}
          />

          {/* Title: Customer (Navy) Login (Orange) */}
          <h1
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: '32px',
              fontWeight: '800',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              textAlign: 'center',
            }}
          >
            {isForgotMode ? (
              <>
                <span style={{ color: '#082653' }}>Customer </span>
                <span style={{ color: '#EA580C' }}>Recovery</span>
              </>
            ) : type === 'client-access' ? (
              <>
                <span style={{ color: '#082653' }}>Customer </span>
                <span style={{ color: '#EA580C' }}>Login</span>
              </>
            ) : (
              <span style={{ color: '#082653' }}>{config.badge}</span>
            )}
          </h1>

          {/* Subtitle with accent line matching image */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '8px',
              marginBottom: '26px',
              padding: '0 8px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '13.5px',
                color: '#475569',
                fontWeight: '500',
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {isForgotMode
                ? 'Authorized credential reset & account access'
                : type === 'client-access'
                ? 'Track your shipments, manage your orders and stay connected globally'
                : config.subtitle}
            </p>
            {!isForgotMode && type === 'client-access' && (
              <span
                style={{
                  width: '36px',
                  height: '1.5px',
                  background: '#EA580C',
                  opacity: 0.7,
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        </div>

        {/* White Rounded Card with Orange Border & Orange Top Tab matching image */}
        <div
          style={{
            width: '100%',
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '2px solid #FF7A00',
            boxShadow: '0 20px 48px rgba(255, 122, 0, 0.08), 0 4px 18px rgba(8, 38, 83, 0.05)',
            padding: '38px 32px 28px 32px',
            position: 'relative',
            boxSizing: 'border-box',
          }}
        >
          {/* Top Hanging Folded Ribbon with Padlock matching exact user reference image */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              left: '50%',
              transform: 'translate(-50%, -15px)',
              width: '130px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <svg
              viewBox="-75 -16 150 52"
              width="130"
              height="52"
              style={{ overflow: 'visible', filter: 'drop-shadow(0 4px 8px rgba(234, 88, 12, 0.35))' }}
            >
              <defs>
                <linearGradient id="kplRibbonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFA12C" />
                  <stop offset="30%" stopColor="#FF7A00" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
                <linearGradient id="kplFoldDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C2410C" />
                  <stop offset="100%" stopColor="#8C2B04" />
                </linearGradient>
                <linearGradient id="kplCurlLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB347" />
                  <stop offset="100%" stopColor="#FF7A00" />
                </linearGradient>
                <linearGradient id="kplCurlRight" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFB347" />
                  <stop offset="100%" stopColor="#FF7A00" />
                </linearGradient>
              </defs>

              {/* 3D Rolled Ribbon Wings: Dark Under-Fold Shadows */}
              <path d="M -48 0 L -68 0 C -64 5, -56 7, -46 4 Z" fill="url(#kplFoldDark)" />
              <path d="M 48 0 L 68 0 C 64 5, 56 7, 46 4 Z" fill="url(#kplFoldDark)" />

              {/* 3D Rolled Ribbon Wings: Left & Right Upper Curls */}
              <path d="M -68 0 C -68 -6, -58 -9, -46 -9 C -52 -4, -48 0, -46 4 C -56 7, -64 5, -68 0 Z" fill="url(#kplCurlLeft)" />
              <path d="M 68 0 C 68 -6, 58 -9, 46 -9 C 52 -4, 48 0, 46 4 C 56 7, 64 5, 68 0 Z" fill="url(#kplCurlRight)" />

              {/* Main Hanging Ribbon Banner with Top Dome & Rounded U-shaped bottom */}
              <path
                d="M -46 -9 
                   C -28 -9, -20 -15, -12 -15 
                   C -6 -15, -6 -15, 0 -15 
                   C 6 -15, 6 -15, 12 -15 
                   C 20 -15, 28 -9, 46 -9 
                   C 49 -4, 50 1, 51 4 
                   C 49 19, 39 34, 0 34 
                   C -39 34, -49 19, -51 4 
                   C -50 1, -49 -4, -46 -9 Z"
                fill="url(#kplRibbonGrad)"
              />

              {/* The Lock / Key Style matching exact ribbon banner */}
              {isForgotMode ? (
                /* Password Recovery Mode: Key inside the exact ribbon (Enlarged) */
                <g transform="translate(0, 11) scale(1.35)">
                  <circle cx="-4" cy="0" r="5.5" fill="none" stroke="#FFFFFF" strokeWidth="2.6" />
                  <line x1="1.5" y1="0" x2="12" y2="0" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
                  <line x1="7.5" y1="0" x2="7.5" y2="4.5" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
                  <line x1="11" y1="0" x2="11" y2="3.5" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
                </g>
              ) : (
                /* Secure Login Mode: Exact Padlock from Image (Enlarged) */
                <g transform="translate(0, 1.5) scale(1.18)">
                  {/* 1. White Shackle loop */}
                  <path
                    d="M -5.5 8 L -5.5 4.5 C -5.5 1.5, -3.5 -0.5, 0 -0.5 C 3.5 -0.5, 5.5 1.5, 5.5 4.5 L 5.5 8"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />

                  {/* 2. Solid White Lock Body */}
                  <rect x="-9.5" y="7.5" width="19" height="14" rx="3" fill="#FFFFFF" />

                  {/* 3. Orange Keyhole Cutout */}
                  <circle cx="0" cy="12.5" r="1.9" fill="#EA580C" />
                  <polygon points="-1.2,13 1.2,13 1.6,17.5 -1.6,17.5" fill="#EA580C" />
                </g>
              )}
            </svg>
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

          {/* MODE 1: CUSTOMER LOGIN FORM */}
          {!isForgotMode && (
            <form onSubmit={handleLoginSubmit}>
              {/* Field 1: Email Address / Customer ID with Coloured Badge */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '8px' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF7A00 0%, #EA580C 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 3px 8px rgba(234, 88, 12, 0.35)',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
                      <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM12 14c-5.523 0-10 3.134-10 7 0 .553.448 1 1 1h18c.552 0 1-.447 1-1 0-3.866-4.477-7-10-7z"/>
                    </svg>
                  </div>
                  <label
                    style={{
                      fontSize: '13.5px',
                      fontWeight: '700',
                      color: '#082653',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Email Address / Customer ID
                  </label>
                </div>
                <div style={{ position: 'relative' }}>
                  <Mail
                    size={22}
                    color="#082653"
                    strokeWidth={1.8}
                    style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    type="text"
                    placeholder="Enter your email or customer ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 14px 0 50px',
                      background: '#FFFFFF',
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '12px',
                      fontSize: '13.5px',
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

              {/* Field 2: Password with Coloured Badge */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '8px' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF7A00 0%, #EA580C 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 3px 8px rgba(234, 88, 12, 0.35)',
                    }}
                  >
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="#FFFFFF">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                  </div>
                  <label
                    style={{
                      fontSize: '13.5px',
                      fontWeight: '700',
                      color: '#082653',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Password
                  </label>
                </div>
                <div style={{ position: 'relative' }}>
                  <Lock
                    size={24}
                    color="#082653"
                    strokeWidth={1.9}
                    style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 44px 0 50px',
                      background: '#FFFFFF',
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '12px',
                      fontSize: '13.5px',
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
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#082653',
                      padding: '4px',
                    }}
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <Eye size={20} strokeWidth={1.8} /> : <EyeOff size={20} strokeWidth={1.8} />}
                  </button>
                </div>
              </div>

              {/* Remember Me Checkbox & Underlined Forgot Password Link matching image */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="checkbox"
                    id="remember-me-portal"
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
                    htmlFor="remember-me-portal"
                    style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#082653',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    Remember Me
                  </label>
                </div>

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
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: '2px 0',
                    textDecoration: 'underline',
                    textUnderlineOffset: '2px',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C2410C')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#EA580C')}
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Pill Button with enter icon & right arrow matching image */}
              <div style={{ width: '100%' }}>
                <button
                  type="submit"
                  disabled={isAuthenticating}
                  style={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(90deg, #FF7A00 0%, #EA580C 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    cursor: isAuthenticating ? 'wait' : 'pointer',
                    fontSize: '16px',
                    fontWeight: '700',
                    letterSpacing: '0.01em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 8px 24px rgba(234, 88, 12, 0.4)',
                    transition: 'all 0.25s ease',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(234, 88, 12, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(234, 88, 12, 0.4)';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                  <span>{isAuthenticating ? 'Logging in...' : 'Login'}</span>
                  <span style={{ fontSize: '18px', lineHeight: 1, fontWeight: '700' }}>→</span>
                </button>
              </div>

              {/* OR Divider with subtle gradient lines matching image */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '18px 0 16px 0',
                  gap: '12px',
                }}
              >
                <div style={{ flex: 1, height: '1.5px', background: 'linear-gradient(90deg, #E2E8F0 0%, #FF7A00 100%)', opacity: 0.7 }} />
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: '800',
                    color: '#082653',
                    letterSpacing: '0.08em',
                  }}
                >
                  OR
                </span>
                <div style={{ flex: 1, height: '1.5px', background: 'linear-gradient(90deg, #FF7A00 0%, #E2E8F0 100%)', opacity: 0.7 }} />
              </div>

              {/* Create Account Pill Button with dual-colour icon matching image */}
              <div style={{ width: '100%' }}>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('register')}
                  style={{
                    width: '100%',
                    height: '48px',
                    borderRadius: '9999px',
                    background: '#FFFFFF',
                    border: '1.8px solid #FF7A00',
                    color: '#082653',
                    fontSize: '14.5px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFF7ED';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Dual-colour user-plus icon: Orange head, Navy body & plus */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="9" cy="7" r="4" fill="#FF7A00" stroke="#FF7A00" strokeWidth="1" />
                    <path d="M2 20c0-3.3 2.7-6 6-6h2c3.3 0 6 2.7 6 6" stroke="#082653" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="19" y1="8" x2="19" y2="14" stroke="#082653" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="16" y1="11" x2="22" y2="11" stroke="#082653" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                  <span>Create Account</span>
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
                    Enter your registered email address or customer ID. An encrypted reset link will be dispatched immediately.
                  </p>

                  {/* Recovery Email Input with Coloured Badge */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '8px' }}>
                      <div
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #FF7A00 0%, #EA580C 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 3px 8px rgba(234, 88, 12, 0.35)',
                        }}
                      >
                        <svg width="21" height="21" viewBox="0 0 24 24" fill="#FFFFFF">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <label
                        style={{
                          fontSize: '13.5px',
                          fontWeight: '700',
                          color: '#082653',
                          letterSpacing: '0.01em',
                        }}
                      >
                        Email Address / Customer ID
                      </label>
                    </div>
                    <div style={{ position: 'relative' }}>
                      <Mail
                        size={24}
                        color="#082653"
                        strokeWidth={1.9}
                        style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }}
                      />
                      <input
                        type="text"
                        placeholder="Enter your email or customer ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '0 14px 0 50px',
                          background: '#FFFFFF',
                          border: '1.5px solid #CBD5E1',
                          borderRadius: '12px',
                          fontSize: '13.5px',
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

                  {/* Send Recovery Link Pill Button */}
                  <div style={{ width: '100%', marginBottom: '14px' }}>
                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        height: '50px',
                        borderRadius: '9999px',
                        background: 'linear-gradient(90deg, #FF7A00 0%, #EA580C 100%)',
                        color: '#FFFFFF',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '0.01em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        boxShadow: '0 8px 24px rgba(234, 88, 12, 0.4)',
                        transition: 'all 0.25s ease',
                        boxSizing: 'border-box',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 12px 28px rgba(234, 88, 12, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(234, 88, 12, 0.4)';
                      }}
                    >
                      <Mail size={20} color="#FFFFFF" strokeWidth={2.4} />
                      <span>Send Recovery Link</span>
                      <span style={{ fontSize: '18px', lineHeight: 1, fontWeight: '700' }}>→</span>
                    </button>
                  </div>

                  {/* Return to Customer Login Link */}
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
                        gap: '7px',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#EA580C')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#082653')}
                    >
                      <ArrowLeft size={16} strokeWidth={2.4} />
                      <span>Back to Customer Login</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Success View after Recovery Request */
                <div style={{ textAlign: 'center', padding: '8px 4px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: '#DCFCE7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      boxShadow: '0 4px 14px rgba(22, 163, 74, 0.2)',
                    }}
                  >
                    <CheckCircle2 size={36} color="#16A34A" />
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: '800',
                      color: '#082653',
                      marginBottom: '8px',
                    }}
                  >
                    Recovery Link Dispatched
                  </h3>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#64748B',
                      lineHeight: '1.5',
                      marginBottom: '24px',
                    }}
                  >
                    If an account exists for <strong style={{ color: '#082653' }}>{email || 'your email'}</strong>, instructions to reset your security credentials have been dispatched.
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
                        background: 'linear-gradient(90deg, #FF7A00 0%, #EA580C 100%)',
                        color: '#FFFFFF',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '700',
                        boxShadow: '0 8px 20px rgba(234, 88, 12, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <ArrowLeft size={18} strokeWidth={2.4} />
                      <span>Return to Customer Login</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Security Badge */}
          <div
            style={{
              marginTop: '18px',
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
