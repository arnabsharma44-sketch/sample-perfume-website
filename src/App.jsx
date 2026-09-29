import React, { useEffect, Component } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import CustomCursor from './components/layout/CustomCursor';
import SmoothScroll from './components/layout/SmoothScroll';
import Navigation from './components/layout/Navigation';
import Scene from './components/scene/Scene';

import HeroSection from './components/sections/HeroSection';
import ProductRevealSection from './components/sections/ProductRevealSection';
import ScentNotesSection from './components/sections/ScentNotesSection';
import BrandStorySection from './components/sections/BrandStorySection';
import CollectionGridSection from './components/sections/CollectionGridSection';
import FooterSection from './components/sections/FooterSection';
import ProductPage from './components/pages/ProductPage';

import { Routes, Route, useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("WebGL/Scene Error Caught:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return null; // Silently fail the 3D scene so the HTML overlay still works
    }
    return this.props.children; 
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll progress bar logic
    gsap.to('#progress-bar', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    // Refresh ScrollTrigger after a short delay to account for rendering
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [location.pathname]);

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      
      {/* Scroll Progress Bar */}
      <div 
        id="progress-bar" 
        className="fixed top-0 left-0 w-full h-[2px] bg-gold-primary z-[60] origin-left scale-x-0"
      />

      <main className="relative w-full">
        {/* The 3D Scene is fixed in the background */}
        <ErrorBoundary>
          <Scene />
        </ErrorBoundary>
        
        {/* DOM content scrolls over the scene */}
        <div className="relative z-20 mix-blend-normal">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ProductRevealSection />
                <ScentNotesSection />
                <FooterSection />
              </>
            } />
            <Route path="/collection" element={
              <div className="pt-20">
                <CollectionGridSection />
                <FooterSection />
              </div>
            } />
            <Route path="/collection/:slug" element={
              <>
                <ProductPage />
                <FooterSection />
              </>
            } />
            <Route path="/story" element={
              <div className="pt-20">
                <BrandStorySection />
                <FooterSection />
              </div>
            } />
            <Route path="/contact" element={
              <div className="pt-20">
                <FooterSection />
              </div>
            } />
          </Routes>
        </div>
      </main>
    </SmoothScroll>
  );
}

export default App;
