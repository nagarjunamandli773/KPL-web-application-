import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Header } from '../components/layout/Header';
import { ProductTrustRow } from '../components/portfolio/ProductTrustRow';
import { ProductCategoryGrid } from '../components/portfolio/ProductCategoryGrid';
import { PortfolioStatsBanner } from '../components/portfolio/PortfolioStatsBanner';
import { ProductTrustBar } from '../components/products/ProductTrustBar';
import { ProductCard } from '../components/products/ProductCard';
import { ProductDetailsModal } from '../components/products/ProductDetailsModal';
import { Footer } from '../components/layout/Footer';
import { TrackModal } from '../components/common/TrackModal';
import {
  portfolioTrustFeatures,
  portfolioStatistics,
} from '../data/globalPortfolioData';
import {
  productCategories,
  allProducts,
  agricultureProducts,
  textilesProducts,
  handicraftsProducts,
  beveragesProducts,
  automobilesProducts,
  machineryProducts,
  electronicsProducts,
  fmcgProducts
} from '../data/allProductsData';
import {
  Search,
  X,
  ArrowRight,
  Filter,
  Layers,
  Sparkles,
  CheckCircle,
  Package,
  RotateCcw
} from 'lucide-react';

export const Products = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('quote');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const productsSectionRef = useRef(null);

  // Check if category was selected via custom event or session storage
  useEffect(() => {
    const handleCategoryEvent = (e) => {
      if (e.detail) {
        setSelectedCategory(e.detail);
        if (productsSectionRef.current) {
          productsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('filter-product-category', handleCategoryEvent);

    const savedCat = sessionStorage.getItem('selectedProductCategory');
    if (savedCat) {
      setSelectedCategory(savedCat);
      sessionStorage.removeItem('selectedProductCategory');
      setTimeout(() => {
        if (productsSectionRef.current) {
          productsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    return () => window.removeEventListener('filter-product-category', handleCategoryEvent);
  }, []);

  const openModal = (type = 'quote') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setDetailsModalOpen(true);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    // Smooth scroll to products section
    if (productsSectionRef.current) {
      const topOffset = productsSectionRef.current.getBoundingClientRect().top + window.pageYOffset - 130;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  // Filter products based on selected category and search query
  const filteredProducts = useMemo(() => {
    let list = [];

    if (selectedCategory === 'all') {
      list = allProducts;
    } else {
      const foundCategory = productCategories.find(c => c.id === selectedCategory);
      list = foundCategory ? foundCategory.products : allProducts;
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(item => {
        return (
          item.name.toLowerCase().includes(q) ||
          item.categoryName.toLowerCase().includes(q) ||
          item.shortDescription.toLowerCase().includes(q) ||
          item.origin.toLowerCase().includes(q) ||
          item.destination.toLowerCase().includes(q) ||
          item.moq.toLowerCase().includes(q) ||
          (item.badgeText && item.badgeText.toLowerCase().includes(q))
        );
      });
    }

    return list;
  }, [selectedCategory, searchQuery]);

  // Active category object
  const activeCategoryObj = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return productCategories.find(c => c.id === selectedCategory);
  }, [selectedCategory]);

  return (
    <div
      className="products-page-root"
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
      {/* 1. Shared Global Link Header */}
      <Header
        onTrackClick={() => openModal('track')}
        onQuoteClick={() => openModal('quote')}
        currentRoute="products"
        onNavigate={onNavigate}
      />

      <main>
        {/* =========================================================================
            GLOBAL PRODUCT PORTFOLIO SECTION (Screen 10 Design Alignment)
            ========================================================================= */}
        <section
          id="global-portfolio-section"
          style={{
            position: 'relative',
            padding: '36px 28px 24px 28px',
            background: '#FAFBFD',
          }}
        >
          {/* Top Gold Label with decorative lines */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                width: '45px',
                height: '2px',
                backgroundColor: '#E8A52A',
                borderRadius: '1px',
              }}
            />
            <span
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#D99A1E',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
              }}
            >
              PREMIUM QUALITY. TRUSTED GLOBALLY
            </span>
            <div
              style={{
                width: '45px',
                height: '2px',
                backgroundColor: '#E8A52A',
                borderRadius: '1px',
              }}
            />
          </div>

          {/* Main Serif Heading */}
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '44px',
              fontWeight: '700',
              color: '#082653',
              lineHeight: '1.1',
              letterSpacing: '-0.5px',
              textAlign: 'center',
              marginBottom: '12px',
            }}
          >
            Explore Our Global Product Portfolio
          </h1>

          {/* Subtitle Description */}
          <p
            style={{
              maxWidth: '840px',
              margin: '0 auto 16px auto',
              fontSize: '15.5px',
              lineHeight: '1.45',
              fontWeight: '400',
              color: '#40516D',
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
            }}
          >
            Discover {allProducts.length} export-ready commodities across all 8 international trade categories. Click any category below to immediately view and filter verified products on this page.
          </p>

          {/* 5-Item Trust Features Row */}
          <ProductTrustRow items={portfolioTrustFeatures} />

          {/* 4 × 2 Interactive Product Category Grid */}
          <div style={{ marginTop: '24px', marginBottom: '32px' }}>
            <ProductCategoryGrid
              categories={productCategories}
              activeCategoryId={selectedCategory}
              onCategoryClick={(category) => handleCategorySelect(category.id)}
            />
          </div>

          {/* =========================================================================
              ACTIVE CATEGORIES & PRODUCTS CATALOG (Same Single Page)
              ========================================================================= */}
          <div
            ref={productsSectionRef}
            id="products-catalog-section"
            style={{
              paddingTop: '20px',
              borderTop: '1px solid #E2E8F0',
              marginTop: '10px',
            }}
          >
            {/* Search Bar & Quick Controls */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                marginBottom: '18px',
                backgroundColor: '#FFFFFF',
                padding: '16px 20px',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
              }}
            >
              {/* Search Box */}
              <div
                style={{
                  position: 'relative',
                  flex: '1 1 320px',
                  maxWidth: '520px',
                }}
              >
                <Search
                  size={18}
                  color="#64748B"
                  style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                  }}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products by name, origin, spec, keyword..."
                  aria-label="Search products"
                  style={{
                    width: '100%',
                    height: '42px',
                    padding: '0 40px 0 42px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '14px',
                    color: '#0F172A',
                    backgroundColor: '#F8FAFC',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#082653';
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(8, 38, 83, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#CBD5E1';
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: '#64748B',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Status and Active Filter Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '14px', color: '#64748B', fontWeight: '500' }}>
                  Showing <strong style={{ color: '#082653', fontWeight: '700' }}>{filteredProducts.length}</strong> of{' '}
                  <strong style={{ color: '#082653', fontWeight: '700' }}>{allProducts.length}</strong> Products
                </span>

                {(selectedCategory !== 'all' || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12.5px',
                      fontWeight: '600',
                      color: '#D97706',
                      backgroundColor: 'rgba(217, 119, 6, 0.1)',
                      border: '1px solid rgba(217, 119, 6, 0.3)',
                      padding: '6px 12px',
                      borderRadius: '100px',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(217, 119, 6, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(217, 119, 6, 0.1)';
                    }}
                  >
                    <RotateCcw size={13} />
                    <span>Reset All Filters</span>
                  </button>
                )}
              </div>
            </div>

            {/* Horizontal Filter Tabs (All 8 Categories + All Categories) */}
            <div className="category-tabs-container">
              {/* Option 1: All Categories (80) */}
              <button
                onClick={() => setSelectedCategory('all')}
                className={`category-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              >
                <Layers size={16} color={selectedCategory === 'all' ? '#FFFFFF' : '#EA580C'} />
                <span>All Categories</span>
                <span className="tab-count-badge">{allProducts.length}</span>
              </button>

              {/* The 8 Categories */}
              {productCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`category-tab-btn ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={16} color={isActive ? '#FFFFFF' : '#EA580C'} />
                    <span>{cat.name}</span>
                    <span className="tab-count-badge">{cat.count}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Category Banner Information */}
            <div
              style={{
                backgroundColor: activeCategoryObj ? '#FFFFFF' : '#F1F5F9',
                borderRadius: '12px',
                padding: '14px 20px',
                border: '1px solid #E2E8F0',
                margin: '12px 0 24px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: '#EA580C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  {activeCategoryObj ? (
                    <activeCategoryObj.icon size={22} color="#FFFFFF" />
                  ) : (
                    <Layers size={22} color="#FFFFFF" />
                  )}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: '800',
                      color: '#082653',
                      margin: '0 0 2px 0',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {activeCategoryObj ? activeCategoryObj.name : 'All Product Categories (Complete Portfolio)'}
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#64748B',
                      margin: 0,
                    }}
                  >
                    {activeCategoryObj
                      ? activeCategoryObj.description
                      : 'Showing verified global products spanning Agriculture, Textiles, Handicrafts, Beverages, Automotive, Machinery, Electronics & FMCG.'}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontSize: '12.5px',
                    fontWeight: '700',
                    color: '#082653',
                    backgroundColor: '#E2E8F0',
                    padding: '4px 12px',
                    borderRadius: '100px',
                  }}
                >
                  {filteredProducts.length} Available Items
                </span>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="products-catalog-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={handleViewDetails}
                    showOverlayBadges={false}
                    imageFit="cover"
                    imageAspectRatio="3 / 2"
                    buttonBg="#EA580C"
                    buttonHoverBg="#C2410C"
                    buttonTextColor="#FFFFFF"
                    buttonShadow="0 4px 12px rgba(234, 88, 12, 0.35)"
                  />
                ))}
              </div>
            ) : (
              /* No Results Empty State */
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '60px 24px',
                  textAlign: 'center',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  margin: '20px 0',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                    color: '#94A3B8',
                  }}
                >
                  <Search size={30} />
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#082653',
                    marginBottom: '8px',
                  }}
                >
                  No Products Found Matching "{searchQuery}"
                </h3>
                <p
                  style={{
                    fontSize: '14.5px',
                    color: '#64748B',
                    maxWidth: '460px',
                    margin: '0 auto 20px auto',
                    lineHeight: '1.5',
                  }}
                >
                  We couldn't find any products matching your search criteria in the selected category. Try searching with different keywords or reset your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  style={{
                    padding: '10px 24px',
                    backgroundColor: '#EA580C',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '700',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#C2410C')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#EA580C')}
                >
                  View All {allProducts.length} Products
                </button>
              </div>
            )}
          </div>

          {/* Centered Request Product Portfolio Quote CTA */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '36px', marginBottom: '16px' }}>
            <button
              onClick={() => openModal('quote')}
              className="portfolio-cta-btn"
              style={{
                width: '320px',
                height: '48px',
                backgroundColor: '#EA580C',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px',
                boxShadow: '0 4px 14px rgba(234, 88, 12, 0.35)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C2410C';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#EA580C';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Request Custom Trade Quote</span>
              <ArrowRight size={18} strokeWidth={2.5} color="#FFFFFF" />
            </button>
          </div>

          {/* Product Trust Bar */}
          <div style={{ marginTop: '24px' }}>
            <ProductTrustBar />
          </div>

          {/* Bottom Statistics Banner (White Theme for Products Page) */}
          <PortfolioStatsBanner statistics={portfolioStatistics} variant="white" />
        </section>
      </main>

      {/* 3. Shared Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Product Details Full Specifications Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={detailsModalOpen}
        onClose={() => setDetailsModalOpen(false)}
        onRequestQuote={(prod) => {
          setDetailsModalOpen(false);
          openModal('quote');
        }}
      />

      {/* Interactive Quotation / Tracking Modal */}
      <TrackModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultType={modalType}
      />
    </div>
  );
};
