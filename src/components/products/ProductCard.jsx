import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Leaf,
  Sparkles,
  Shirt,
  Settings,
  Coffee,
  Car,
  Factory,
  Cpu,
  ShoppingBag,
  Award,
  CheckCircle,
  Clock,
  ShieldCheck,
  Scale
} from 'lucide-react';

export const ProductCard = ({
  product,
  onViewDetails,
  showOverlayBadges = true,
  imageFit = 'cover',
  imageAspectRatio = null,
  buttonBg = '#E5A52A',
  buttonHoverBg = '#D99A1E',
  buttonTextColor = '#082653',
  buttonShadow = '0 3px 10px rgba(229, 165, 42, 0.3)',
}) => {
  const {
    name,
    origin,
    destination,
    moq,
    image,
    badgeText,
    badgeBg = '#082653',
    badgeTextColor = '#FAAE2B',
    badgePosition = 'top-left',
    benefits = [],
    shortDescription,
    categoryName,
    fallbackImage
  } = product;

  const [imgSrc, setImgSrc] = useState(image);

  useEffect(() => {
    setImgSrc(image);
  }, [image]);

  // Render badge icon based on category or product name
  const getBadgeIcon = () => {
    const cat = (product.categoryId || '').toLowerCase();
    const n = (name || '').toLowerCase();

    if (cat === 'agriculture' || n.includes('mango') || n.includes('rice') || n.includes('organic')) {
      return <Leaf size={12} color={badgeTextColor} />;
    }
    if (cat === 'textiles' || n.includes('garment') || n.includes('cotton') || n.includes('silk')) {
      return <Shirt size={12} color={badgeTextColor} />;
    }
    if (cat === 'handicrafts' || n.includes('decor') || n.includes('brass') || n.includes('carpet')) {
      return <Sparkles size={12} color={badgeTextColor} />;
    }
    if (cat === 'beverages' || n.includes('coffee') || n.includes('tea') || n.includes('spice')) {
      return <Coffee size={12} color={badgeTextColor} />;
    }
    if (cat === 'automobiles' || n.includes('auto') || n.includes('truck') || n.includes('van')) {
      return <Car size={12} color={badgeTextColor} />;
    }
    if (cat === 'machinery' || n.includes('machin') || n.includes('cnc') || n.includes('press')) {
      return <Factory size={12} color={badgeTextColor} />;
    }
    if (cat === 'electronics' || n.includes('smart') || n.includes('tv') || n.includes('laptop')) {
      return <Cpu size={12} color={badgeTextColor} />;
    }
    if (cat === 'fmcg' || n.includes('soap') || n.includes('water') || n.includes('oil')) {
      return <ShoppingBag size={12} color={badgeTextColor} />;
    }
    return <Award size={12} color={badgeTextColor} />;
  };

  // Badge positioning style
  const getBadgePositionStyle = () => {
    switch (badgePosition) {
      case 'bottom-right':
        return { bottom: '12px', right: '12px' };
      case 'right':
        return { top: '16px', right: '12px' };
      default:
        return { top: '12px', left: '12px' };
    }
  };

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #DDE1E6',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 3px 12px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        height: '100%',
      }}
      className="product-card"
    >
      {/* Product Image Area with responsive aspect ratio */}
      <div
        style={{
          width: '100%',
          ...(imageAspectRatio
            ? { aspectRatio: imageAspectRatio }
            : imageFit === 'contain'
              ? { aspectRatio: '3 / 2' }
              : { height: '210px' }),
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #EEF2F6',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={imgSrc}
          alt={name}
          onError={() => setImgSrc(fallbackImage || '/mangoes.jpg')}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: product.imageFit || imageFit || 'cover',
            objectPosition: product.imagePosition || 'center',
            display: 'block',
            transition: 'transform 0.3s ease',
          }}
          className="product-img-hover"
        />

        {/* Custom Overlay Badge */}
        {showOverlayBadges && badgeText && (
          <div
            style={{
              position: 'absolute',
              ...getBadgePositionStyle(),
              background: badgeBg,
              color: badgeTextColor,
              padding: '4px 9px',
              borderRadius: '6px',
              fontSize: '9.5px',
              fontWeight: '800',
              lineHeight: 1.15,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              letterSpacing: '0.04em',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
              zIndex: 2,
            }}
          >
            {getBadgeIcon()}
            <span style={{ whiteSpace: 'pre-line' }}>{badgeText}</span>
          </div>
        )}

        {/* Category Pill on top right if available */}
        {showOverlayBadges && categoryName && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'rgba(8, 38, 83, 0.85)',
              backdropFilter: 'blur(4px)',
              color: '#FFFFFF',
              padding: '3px 8px',
              borderRadius: '100px',
              fontSize: '10px',
              fontWeight: '600',
              zIndex: 2,
            }}
          >
            {categoryName}
          </div>
        )}
      </div>

      {/* Card Body Information */}
      <div
        style={{
          padding: '16px 14px 18px 14px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Product Name */}
          <h3
            style={{
              fontSize: '17px',
              fontWeight: '800',
              color: '#082653',
              textAlign: 'center',
              marginBottom: '6px',
              lineHeight: 1.25,
              minHeight: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 4px',
              width: '100%',
              wordBreak: 'break-word',
            }}
          >
            {name}
          </h3>

          {/* Short Description */}
          {shortDescription && (
            <p
              style={{
                fontSize: '12.5px',
                color: '#475569',
                textAlign: 'center',
                lineHeight: 1.35,
                margin: '0 0 10px 0',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                height: '34px',
                width: '100%',
              }}
              title={shortDescription}
            >
              {shortDescription}
            </p>
          )}

          {/* Origin → Destination */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              fontSize: '14.5px',
              fontWeight: '600',
              color: '#082653',
              marginBottom: '4px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
            }}
          >
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{origin}</span>
            <ArrowRight size={14} color="#FAAE2B" strokeWidth={3} style={{ flexShrink: 0 }} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{destination}</span>
          </div>

          {/* MOQ */}
          <div
            style={{
              fontSize: '13.5px',
              fontWeight: '700',
              color: '#D97706',
              marginBottom: '12px',
            }}
          >
            {moq}
          </div>

          {/* 3 Horizontal Product Benefits */}
          {benefits && benefits.length > 0 && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                width: '100%',
                gap: '4px',
                padding: '8px 0',
                borderTop: '1px solid #F0F2F5',
                borderBottom: '1px solid #F0F2F5',
                marginBottom: '14px',
              }}
            >
              {benefits.map((b, idx) => {
                const Icon = b.icon || Award;
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: '3px',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ color: '#FAAE2B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: '600',
                        color: '#34445C',
                        lineHeight: 1.15,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100%',
                      }}
                      title={b.label}
                    >
                      {b.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Card CTA Button */}
        <button
          onClick={() => onViewDetails && onViewDetails(product)}
          style={{
            height: '39px',
            width: '100%',
            maxWidth: '220px',
            backgroundColor: buttonBg,
            color: buttonTextColor,
            borderRadius: '6px',
            fontSize: '14.5px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: buttonShadow,
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            border: 'none',
            marginTop: 'auto',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = buttonHoverBg;
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(234, 88, 12, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = buttonBg;
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = buttonShadow;
          }}
        >
          <span>View Details</span>
          <ArrowRight size={15} strokeWidth={2.5} color={buttonTextColor} />
        </button>
      </div>
    </div>
  );
};
