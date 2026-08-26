import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';

export default function HeroSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      Splitting({ target: titleRef.current, by: 'chars' });
      
      const chars = titleRef.current.querySelectorAll('.char');
      
      gsap.fromTo(chars, 
        { opacity: 0, filter: 'blur(20px)', y: 40 },
        { 
          opacity: 1, 
          filter: 'blur(0px)', 
          y: 0, 
          stagger: 0.12, 
          duration: 1.5,
          ease: 'power3.out',
          delay: 0.5
        }
      );
    }

    if (subtitleRef.current) {
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, delay: 2.5, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center z-20" id="hero">
      {/* Top Left Label */}
      <div className="absolute top-8 left-8 font-label text-[10px] text-gold-primary uppercase tracking-widest">
        A U R U M
      </div>

      {/* Main Titles */}
      <div className="text-center pointer-events-none mt-32 mix-blend-difference">
        <h1 
          ref={titleRef} 
          className="font-display text-[120px] md:text-[180px] text-gold-primary font-light tracking-wide leading-none"
        >
          AURUM
        </h1>
        <p ref={subtitleRef} className="font-body text-text-primary text-sm md:text-base font-light tracking-[0.2em] uppercase mt-4">
          The Scent of Silence
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-12 flex flex-col items-center space-y-2 text-text-muted font-label text-[10px] uppercase tracking-widest">
        <span>Scroll to begin</span>
        <div className="w-px h-12 bg-gradient-to-b from-text-muted to-transparent animate-pulse" />
      </div>
    </section>
  );
}
