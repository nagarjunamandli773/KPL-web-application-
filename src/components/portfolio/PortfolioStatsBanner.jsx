import React from 'react';

export const PortfolioStatsBanner = ({ statistics, variant = 'default' }) => {
  const isWhite = variant === 'white';

  return (
    <div
      className={`portfolio-stats-banner ${isWhite ? 'white-theme' : ''}`}
      style={{
        backgroundColor: isWhite ? '#FFFFFF' : '#082653',
        borderRadius: '18px',
        border: isWhite ? '1px solid #E2E8F0' : 'none',
        boxShadow: isWhite
          ? '0 4px 20px rgba(15, 23, 42, 0.06)'
          : '0 6px 20px rgba(8, 38, 83, 0.22)',
        padding: '20px 14px',
        width: '100%',
        margin: '24px auto 0 auto',
      }}
    >
      <div
        className="portfolio-stats-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          alignItems: 'center',
        }}
      >
        {statistics.map((stat, index) => {
          const Icon = stat.icon;
          const isLast = index === statistics.length - 1;

          return (
            <div
              key={stat.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '4px 10px',
                borderRight: isLast
                  ? 'none'
                  : isWhite
                  ? '1px solid #E2E8F0'
                  : '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  color: isWhite ? '#EA580C' : '#F5B73A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={34} strokeWidth={1.8} color={isWhite ? '#EA580C' : '#F5B73A'} />
              </div>

              {/* Value and Label */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '23px',
                    fontWeight: '700',
                    color: isWhite ? '#EA580C' : '#F5B73A',
                    lineHeight: '1.1',
                    letterSpacing: '-0.3px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: '500',
                    color: isWhite ? '#334155' : '#FFFFFF',
                    lineHeight: '1.25',
                    opacity: isWhite ? 1 : 0.95,
                    fontFamily: 'var(--font-body)',
                    marginTop: '2px',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
