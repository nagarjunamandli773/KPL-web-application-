import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { FreightServices } from './pages/FreightServices';
import { FeaturedProducts } from './pages/FeaturedProducts';
import { Procurement } from './pages/Procurement';
import { Documentation } from './pages/Documentation';
import { QualityAssurance } from './pages/QualityAssurance';
import { Services } from './pages/Services';
import { HowItWorks } from './pages/HowItWorks';
import { TrackShipment } from './pages/TrackShipment';
import { Products } from './pages/Products';
import { Buyers } from './pages/Buyers';
import { CustomsCompliance } from './pages/CustomsCompliance';
import { GlobalNetwork } from './pages/GlobalNetwork';
import { WhyBusinessesChooseUs } from './pages/WhyBusinessesChooseUs';
import { BusinessGlobal } from './pages/BusinessGlobal';
import { TrustedBusinesses } from './pages/TrustedBusinesses';
import { PortalLogin } from './pages/PortalLogin';
import { Register } from './pages/Register';
import { Support } from './pages/Support';

import { AirplaneScrollbar } from './components/common/AirplaneScrollbar';

export default function App() {
  const getInitialRoute = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      if (hash) return hash;
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '').trim();
      if (path && path !== 'index.html') return path;
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  const handleNavigate = (route) => {
    setCurrentRoute(route);
    if (typeof window !== 'undefined') {
      if (route === 'home') {
        history.replaceState(null, '', window.location.pathname);
      } else {
        window.location.hash = route;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '').trim();
      const target = hash || (path && path !== 'index.html' ? path : '') || 'home';
      setCurrentRoute(target);
    };

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const portalRoutes = [
    'client-access',
    'strategic-partners',
    'global-export',
    'global-import',
    'supplier-network',
    'logistics-operations',
    'enterprise-employee'
  ];

  const renderContent = () => {
    if (currentRoute === 'register' || currentRoute === 'signup' || currentRoute === 'create-account') {
      return <Register onNavigate={handleNavigate} />;
    }
    if (currentRoute === 'support' || currentRoute === 'help' || currentRoute === 'help-center' || currentRoute === 'contact') {
      return <Support onNavigate={handleNavigate} />;
    }
    if (portalRoutes.includes(currentRoute)) {
      return <PortalLogin onNavigate={handleNavigate} type={currentRoute} />;
    }

    if (currentRoute === 'trusted-businesses' || currentRoute === 'testimonials') {
      return <TrustedBusinesses onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'business-global' || currentRoute === 'cta') {
      return <BusinessGlobal onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'why-choose-us' || currentRoute === 'advantages') {
      return <WhyBusinessesChooseUs onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'network' || currentRoute === 'global-network') {
      return <GlobalNetwork onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'customs-compliance' || currentRoute === 'compliance' || currentRoute === 'services/customs-compliance') {
      return <CustomsCompliance onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'buyers' || currentRoute === 'global-buyers') {
      return <Buyers onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'track-shipment' || currentRoute === 'tracking' || currentRoute === 'warehousing') {
      return <TrackShipment onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'how-it-works' || currentRoute === 'how-global-link-works') {
      return <HowItWorks onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'quality' || currentRoute === 'quality-assurance') {
      return <QualityAssurance onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'documentation' || currentRoute === 'resources') {
      return <Documentation onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'procurement') {
      return <Procurement onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'services' || currentRoute === 'services-overview') {
      return <Services onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'freight') {
      return <FreightServices onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'products' || currentRoute === 'portfolio' || currentRoute === 'featured-products') {
      return <Products onNavigate={handleNavigate} />;
    }

    if (currentRoute === 'featured-products') {
      return <FeaturedProducts onNavigate={handleNavigate} />;
    }

    return <Home onNavigate={handleNavigate} />;
  };

  return (
    <>
      <AirplaneScrollbar />
      {renderContent()}
    </>
  );
}


