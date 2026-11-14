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
import { UnifiedDigitalPortal } from './pages/UnifiedDigitalPortal';
import { EcommerceLogistics } from './pages/EcommerceLogistics';
import { ColdChainLogistics } from './pages/ColdChainLogistics';
import { LeadLogisticsPartner } from './pages/LeadLogisticsPartner';
import { ProjectCargoLogistics } from './pages/ProjectCargoLogistics';
import { SustainableLogistics } from './pages/SustainableLogistics';
import { ConsumerGoodsFmcg } from './pages/ConsumerGoodsFmcg';
import { FashionApparel } from './pages/FashionApparel';
import { RetailDistribution } from './pages/RetailDistribution';
import { ChemicalCargoHandling } from './pages/ChemicalCargoHandling';
import { AutomotiveLogistics } from './pages/AutomotiveLogistics';
import { TechnologyElectronics } from './pages/TechnologyElectronics';
import { PharmaHealthcare } from './pages/PharmaHealthcare';
import { PerishableShipments } from './pages/PerishableShipments';

import { AirplaneScrollbar } from './components/common/AirplaneScrollbar';

export default function App() {
  const getInitialRoute = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace(/^#\/?/, '').replace(/\/+$/, '').split('?')[0].trim().toLowerCase();
      if (hash) return hash;
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '').replace(/\/+$/, '').split('?')[0].trim().toLowerCase();
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
      const hash = window.location.hash.replace(/^#\/?/, '').replace(/\/+$/, '').split('?')[0].trim().toLowerCase();
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '').replace(/\/+$/, '').split('?')[0].trim().toLowerCase();
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
    if (
      currentRoute === 'unified-digital-portal' ||
      currentRoute === 'unified-digital-potal' ||
      currentRoute === 'digital-portal' ||
      currentRoute === 'digital-potal' ||
      currentRoute === 'unified-portal' ||
      currentRoute === 'unified-potal' ||
      currentRoute === 'logistics-management' ||
      currentRoute === 'logistics-portal' ||
      currentRoute === 'logistics-potal' ||
      currentRoute === 'potal'
    ) {
      return <UnifiedDigitalPortal onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === 'kpl-ecommerce-logistics' ||
      currentRoute === 'ecommerce-logistics' ||
      currentRoute === 'e-commerce-logistics' ||
      currentRoute === 'ecommerce' ||
      currentRoute === 'e-commerce' ||
      currentRoute === 'kpl-ecommerce' ||
      currentRoute === 'kpl-e-commerce'
    ) {
      return <EcommerceLogistics onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === 'cold-chain-logistics' ||
      currentRoute === 'cold-chain' ||
      currentRoute === 'coldchain' ||
      currentRoute === 'coldchain-logistics' ||
      currentRoute === 'reefer' ||
      currentRoute === 'temperature-controlled'
    ) {
      return <ColdChainLogistics onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === 'lead-supply-chain-4pl' ||
      currentRoute === 'lead-supply-chain' ||
      currentRoute === '4pl' ||
      currentRoute === '4pl-logistics' ||
      currentRoute === 'lead-logistics-partner' ||
      currentRoute === 'lead-logistics'
    ) {
      return <LeadLogisticsPartner onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === 'kpl-project-cargo-logistics' ||
      currentRoute === 'project-cargo-logistics' ||
      currentRoute === 'project-cargo' ||
      currentRoute === 'project-cagro' ||
      currentRoute === 'project-cagro-logistics' ||
      currentRoute === 'heavy-lift' ||
      currentRoute === 'breakbulk' ||
      currentRoute === 'industrial-projects'
    ) {
      return <ProjectCargoLogistics onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === 'sustainable-logistics-systems' ||
      currentRoute === 'sustainable-logistics' ||
      currentRoute === 'sustainable-logistics-system' ||
      currentRoute === 'sustainable-logistic-s-system' ||
      currentRoute === 'green-logistics' ||
      currentRoute === 'sustainability' ||
      currentRoute === 'carbon-neutral-logistics'
    ) {
      return <SustainableLogistics onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === 'consumer-goods-fmcg' ||
      currentRoute === 'consumers-goods-fmcg' ||
      currentRoute === 'consumer-goods' ||
      currentRoute === 'consumers-goods' ||
      currentRoute === 'consumer-good' ||
      currentRoute === 'fmcg' ||
      currentRoute === 'fmcg-logistics' ||
      currentRoute === 'consumer-goods-logistics' ||
      currentRoute === 'consumers-goods-logistics' ||
      currentRoute === 'consumer-packaged-goods' ||
      currentRoute === 'cpg' ||
      currentRoute === 'cpg-logistics' ||
      currentRoute === 'consumer-products' ||
      currentRoute === 'consumers-products' ||
      currentRoute === 'products/consumer-products'
    ) {
      return <ConsumerGoodsFmcg onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === 'fashion-and-apparel' ||
      currentRoute === 'fashion-apparel' ||
      currentRoute === 'fashion' ||
      currentRoute === 'apparel' ||
      currentRoute === 'fasion-and-apperal' ||
      currentRoute === 'fasion-and-apparel' ||
      currentRoute === 'fasion-apperal' ||
      currentRoute === 'fasion-apparel' ||
      currentRoute === 'fasion' ||
      currentRoute === 'fashion-and-apperal' ||
      currentRoute === 'fassion-and-apperal' ||
      currentRoute === 'fassion-and-apparel' ||
      currentRoute === 'fassion-apperal' ||
      currentRoute === 'fassion-apparel' ||
      currentRoute === 'fassion' ||
      currentRoute === 'apperal' ||
      currentRoute === 'textiles-and-apparel' ||
      currentRoute === 'textile-and-apparel' ||
      currentRoute === 'textiles' ||
      currentRoute === 'garments' ||
      currentRoute === 'garments-logistics' ||
      currentRoute === 'goh' ||
      currentRoute === 'garment-on-hanger'
    ) {
      return <FashionApparel onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === 'retail-and-distribution' ||
      currentRoute === 'retail-distribution' ||
      currentRoute === 'retail' ||
      currentRoute === 'distribution' ||
      currentRoute === 'retails' ||
      currentRoute === 'omnichannel-distribution' ||
      currentRoute === 'retail-logistics' ||
      currentRoute === 'store-replenishment' ||
      currentRoute === 'retail-fulfillment' ||
      currentRoute === 'b2b-retail' ||
      currentRoute === 'retail-and-distrubution' ||
      currentRoute === 'retail-distrubution' ||
      currentRoute === 'distrubution'
    ) {
      return <RetailDistribution onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === 'chemical-cargo-handling' ||
      currentRoute === 'chemical-cargo' ||
      currentRoute === 'chemicals' ||
      currentRoute === 'chemical-logistics' ||
      currentRoute === 'chemical' ||
      currentRoute === 'hazmat' ||
      currentRoute === 'hazmat-logistics' ||
      currentRoute === 'dangerous-goods' ||
      currentRoute === 'dg-cargo' ||
      currentRoute === 'iso-tank' ||
      currentRoute === 'iso-tanks' ||
      currentRoute === 'chemical-cagro-handling' ||
      currentRoute === 'chemical-cagro'
    ) {
      return <ChemicalCargoHandling onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === 'automotive-logistics' ||
      currentRoute === 'automotive' ||
      currentRoute === 'auto-logistics' ||
      currentRoute === 'auto' ||
      currentRoute === 'vehicles' ||
      currentRoute === 'vehicle-logistics' ||
      currentRoute === 'car-logistics' ||
      currentRoute === 'jit-logistics' ||
      currentRoute === 'ev-battery-logistics' ||
      currentRoute === 'automative-logistics' ||
      currentRoute === 'automative' ||
      currentRoute === 'automative-logistic' ||
      currentRoute === 'automatives' ||
      currentRoute === 'automaotive-logistics' ||
      currentRoute === 'automaotive' ||
      currentRoute === 'automaotive-logistic' ||
      currentRoute === 'automotive-logistic' ||
      currentRoute === 'automobile-logistics' ||
      currentRoute === 'automobile' ||
      currentRoute === 'automobiles' ||
      currentRoute === 'automotive-logistics-page'
    ) {
      return <AutomotiveLogistics onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === 'technology-and-electronics' ||
      currentRoute === 'technology-electronics' ||
      currentRoute === 'technology' ||
      currentRoute === 'electronics' ||
      currentRoute === 'tech-electronics' ||
      currentRoute === 'tech-logistics' ||
      currentRoute === 'tech' ||
      currentRoute === 'semiconductor-logistics' ||
      currentRoute === 'semiconductor' ||
      currentRoute === 'semiconductors' ||
      currentRoute === 'consumer-electronics' ||
      currentRoute === 'high-tech-logistics' ||
      currentRoute === 'electronics-logistics'
    ) {
      return <TechnologyElectronics onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === 'pharma-and-healthcare' ||
      currentRoute === 'pharma-healthcare' ||
      currentRoute === 'pharma' ||
      currentRoute === 'healthcare' ||
      currentRoute === 'pharmaceuticals' ||
      currentRoute === 'pharmaceutical-logistics' ||
      currentRoute === 'pharma-logistics' ||
      currentRoute === 'health-care' ||
      currentRoute === 'medical-logistics' ||
      currentRoute === 'clinical-logistics' ||
      currentRoute === 'life-sciences' ||
      currentRoute === 'biopharma'
    ) {
      return <PharmaHealthcare onNavigate={handleNavigate} />;
    }
    if (
      currentRoute === 'perishable-shipments' ||
      currentRoute === 'perishable' ||
      currentRoute === 'perishables' ||
      currentRoute === 'perishable-cargo' ||
      currentRoute === 'perishable-goods' ||
      currentRoute === 'perishable-logistics' ||
      currentRoute === 'fresh-produce' ||
      currentRoute === 'fresh-cargo' ||
      currentRoute === 'fresh-produce-logistics' ||
      currentRoute === 'horticulture-logistics' ||
      currentRoute === 'seafood-logistics' ||
      currentRoute === 'controlled-atmosphere' ||
      currentRoute === 'ca-logistics'
    ) {
      return <PerishableShipments onNavigate={handleNavigate} />;
    }
    if (currentRoute === 'register' || currentRoute === 'signup' || currentRoute === 'create-account') {
      return <Register onNavigate={handleNavigate} />;
    }
    if (currentRoute === 'support' || currentRoute === 'help' || currentRoute === 'help-center' || currentRoute === 'contact') {
      return <Support onNavigate={handleNavigate} />;
    }
    if (currentRoute === 'client-access-forgot' || currentRoute === 'forgot-password') {
      return <PortalLogin onNavigate={handleNavigate} type="client-access" initialForgot={true} />;
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


