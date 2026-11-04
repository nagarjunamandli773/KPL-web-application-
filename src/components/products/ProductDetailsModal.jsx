import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ShieldCheck, Globe2, Award, Clock, CheckCircle, Package, Send } from 'lucide-react';

export const ProductDetailsModal = ({ product, isOpen, onClose, onRequestQuote, showOverlayBadges = false }) => {
  const [imgSrc, setImgSrc] = useState(product?.image);

  useEffect(() => {
    if (product) {
      setImgSrc(product.image);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const {
    name,
    categoryName,
    shortDescription,
    fullDescription,
    origin,
    destination,
    moq,
    benefits = [],
    specs = {},
    fallbackImage,
    badgeText
  } = product;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: 'rgba(8, 38, 83, 0.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div
        className="product-modal-scroll"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '18px',
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          direction: 'rtl',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
          border: '1px solid #E2E8F0',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-inner-content" style={{ direction: 'ltr', display: 'flex', flexDirection: 'column', width: '100%' }}>
        {/* Modal Header */}
        <div
          style={{
            padding: '20px 24px 16px 24px',
            borderBottom: '1px solid #EDF2F7',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '16px',
            position: 'sticky',
            top: 0,
            background: '#FFFFFF',
            zIndex: 10,
            borderRadius: '18px 18px 0 0',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#D97706',
                  backgroundColor: 'rgba(217, 119, 6, 0.1)',
                  padding: '3px 10px',
                  borderRadius: '100px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {categoryName || 'Global Export Product'}
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  color: '#082653',
                  backgroundColor: '#F1F5F9',
                  padding: '3px 8px',
                  borderRadius: '100px',
                }}
              >
                Verified Commodity
              </span>
            </div>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: '800',
                color: '#082653',
                fontFamily: 'var(--font-heading)',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {name}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#F1F5F9',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#475569',
              flexShrink: 0,
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E2E8F0';
              e.currentTarget.style.color = '#0F172A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F5F9';
              e.currentTarget.style.color = '#475569';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body Content */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {/* Top Info Grid (Image + Trade Essentials) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(260px, 320px) 1fr',
              gap: '24px',
              alignItems: 'start',
            }}
            className="modal-image-grid"
          >
            {/* Image Container */}
            <div
              style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                height: '240px',
                boxShadow: '0 4px 16px rgba(8, 38, 83, 0.1)',
                border: '1px solid #E2E8F0',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={imgSrc}
                alt={name}
                onError={() => setImgSrc(fallbackImage || '/mangoes.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: product?.imageFit || 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
              {showOverlayBadges && badgeText && (
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: '#082653',
                    color: '#FAAE2B',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '10px',
                    fontWeight: '800',
                    lineHeight: 1.2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {badgeText}
                </div>
              )}
            </div>

            {/* Trade Essentials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p
                style={{
                  fontSize: '14.5px',
                  color: '#334155',
                  lineHeight: '1.55',
                  margin: 0,
                  fontFamily: 'var(--font-body)',
                }}
              >
                {fullDescription || shortDescription}
              </p>

              {/* Trade Route Pills */}
              <div
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '12px',
                  padding: '14px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: '500' }}>Country of Origin:</span>
                  <span style={{ fontSize: '13.5px', color: '#082653', fontWeight: '700' }}>{origin}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: '500' }}>Primary Export Markets:</span>
                  <span style={{ fontSize: '13.5px', color: '#082653', fontWeight: '700' }}>{destination}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: '500' }}>Minimum Order Quantity:</span>
                  <span style={{ fontSize: '13.5px', color: '#D97706', fontWeight: '800' }}>{moq}</span>
                </div>
              </div>

              {/* Key Benefits */}
              {benefits && benefits.length > 0 && (
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {benefits.map((b, i) => {
                    const Icon = b.icon || CheckCircle;
                    return (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          backgroundColor: '#FFFBEB',
                          border: '1px solid #FDE68A',
                          borderRadius: '8px',
                          padding: '6px 10px',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#92400E',
                        }}
                      >
                        <Icon size={14} color="#D97706" />
                        <span>{b.label}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Technical Specifications Table */}
          {specs && Object.keys(specs).length > 0 && (
            <div>
              <h4
                style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#082653',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '10px',
                }}
              >
                Commercial Specifications & Compliance
              </h4>
              <div
                style={{
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  fontSize: '13px',
                }}
              >
                {Object.entries(specs).map(([key, value], idx) => (
                  <div
                    key={key}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '170px 1fr',
                      padding: '10px 14px',
                      backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                      borderBottom: idx === Object.keys(specs).length - 1 ? 'none' : '1px solid #EDF2F7',
                    }}
                  >
                    <span style={{ fontWeight: '600', color: '#475569' }}>{key}</span>
                    <span style={{ color: '#0F172A', fontWeight: '500' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Action Bar */}
        <div
          style={{
            padding: '16px 24px',
            borderTop: '1px solid #EDF2F7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#F8FAFC',
            borderRadius: '0 0 18px 18px',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '12.5px' }}>
            <ShieldCheck size={16} color="#10B981" />
            <span>Guaranteed Inspection & International Freight Forwarding</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onClose}
              style={{
                height: '42px',
                padding: '0 18px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                backgroundColor: '#FFFFFF',
                color: '#334155',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onRequestQuote) onRequestQuote(product);
              }}
              style={{
                height: '42px',
                padding: '0 22px',
                borderRadius: '8px',
                backgroundColor: '#EA580C',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '700',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#C2410C')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#EA580C')}
            >
              <span>Request Quote for {name}</span>
              <ArrowRight size={16} strokeWidth={2.5} color="#FFFFFF" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

