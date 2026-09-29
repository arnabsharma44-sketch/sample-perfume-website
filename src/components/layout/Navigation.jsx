import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link to="/" className="font-display text-2xl text-gold-primary tracking-widest">
            AURUM
          </Link>
          
          <div className="hidden md:flex space-x-12">
            <Link to="/collection" className="font-label text-[10px] uppercase tracking-widest text-text-primary hover:text-gold-primary transition-colors">Collection</Link>
            <Link to="/story" className="font-label text-[10px] uppercase tracking-widest text-text-primary hover:text-gold-primary transition-colors">Story</Link>
            <Link to="/contact" className="font-label text-[10px] uppercase tracking-widest text-text-primary hover:text-gold-primary transition-colors">Contact</Link>
          </div>

          <button 
            className="md:hidden text-gold-primary z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="font-label text-[10px] uppercase tracking-widest">{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link to="/collection" onClick={() => setMenuOpen(false)} className="font-display text-4xl text-text-primary hover:text-gold-primary">Collection</Link>
        <Link to="/story" onClick={() => setMenuOpen(false)} className="font-display text-4xl text-text-primary hover:text-gold-primary">Story</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)} className="font-display text-4xl text-text-primary hover:text-gold-primary">Contact</Link>
      </div>
    </>
  );
}
