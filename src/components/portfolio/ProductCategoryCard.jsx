import React from 'react';

export const ProductCategoryCard = ({ category, onClick, isActive = false }) => {
  const Icon = category.icon;

  return (
    <div
      className={`portfolio-category-card ${isActive ? 'active-category-card' : ''}`}
      onClick={() => onClick && onClick(category)}
      style={{
        position: 'relative',
        height: '240px',
        width: '100%',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: isActive
          ? '0 8px 26px rgba(217, 119, 6, 0.28)'
          : '0 4px 14px rgba(8, 38, 83, 0.08)',
        cursor: 'pointer',
        transition: 'all 0.22s ease',
        backgroundColor: '#EA580C',
        outline: isActive ? '3px solid #EA580C' : '1px solid rgba(234, 88, 12, 0.15)',
        outlineOffset: isActive ? '2px' : '0',
        transform: isActive ? 'translateY(-3px)' : 'none',
      }}
    >
      {/* Category Image */}
      <img
        src={category.image}
        alt={category.title || category.name}
        className="portfolio-card-img"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          transition: 'transform 0.3s ease',
          filter: isActive ? 'brightness(1.05)' : 'none',
        }}
      />

      {/* Active Selection Badge */}
      {isActive && (
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: '#FFFFFF',
            color: '#EA580C',
            padding: '4px 10px',
            borderRadius: '100px',
            fontSize: '11px',
            fontWeight: '800',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <span>ACTIVE</span>
        </div>
      )}

      {/* Orange & White Bottom Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '66px',
          background: 'linear-gradient(135deg, #FF6F00 0%, #EA580C 55%, #C2410C 100%)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: '12px',
          borderBottomLeftRadius: '14px',
          borderBottomRightRadius: '14px',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          zIndex: 2,
        }}
      >
        {/* White Icon */}
        <div
          style={{
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon size={28} strokeWidth={2} color="#FFFFFF" />
        </div>

        {/* Title and Subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <h3
            style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#FFFFFF',
              lineHeight: '1.2',
              marginBottom: '2px',
              fontFamily: 'var(--font-body)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {category.title || category.name}
          </h3>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: '1.2',
              fontFamily: 'var(--font-body)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {category.description}
          </p>
        </div>
      </div>
    </div>
  );
};
