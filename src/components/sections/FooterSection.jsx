import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Splitting from 'splitting';

export default function FooterSection() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      Splitting({ target: textRef.current, by: 'chars' });
      const chars = textRef.current.querySelectorAll('.char');

      gsap.fromTo(chars,
        { x: (i) => (i % 2 === 0 ? -100 : 100), opacity: 0 },
        {
          x: 0, opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <footer className="relative w-full h-screen flex flex-col items-center justify-center bg-background z-20 overflow-hidden">
      {/* Noise background overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="flex-1 flex flex-col items-center justify-center text-center w-full">
        <h2 ref={textRef} className="font-display text-[100px] md:text-[200px] text-gold-primary leading-none font-light tracking-widest pointer-events-none">
          AURUM
        </h2>
        <p className="font-body text-text-muted mt-8 mb-16 tracking-widest text-sm uppercase">
          Discover your signature scent.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <button className="px-10 py-4 bg-gold-primary text-background font-label text-[10px] uppercase tracking-widest hover:bg-gold-highlight transition-colors duration-300">
            Shop Now
          </button>
          <button className="px-10 py-4 border border-gold-primary text-gold-primary font-label text-[10px] uppercase tracking-widest hover:bg-gold-primary hover:text-background transition-colors duration-300">
            Book a Consultation
          </button>
        </div>
      </div>

      <div className="w-full p-8 flex flex-col md:flex-row justify-between items-center border-t border-text-primary/10 space-y-4 md:space-y-0 text-center md:text-left">
        <span className="font-label text-[10px] text-text-muted tracking-widest leading-loose">
          © 2026 AURUM. ALL RIGHTS RESERVED.<br/>
          WEBSITE CREATED AND DEVELOPED BY JINENDRA BANTHIA AND ARNAV SHRMA<br/>
          CONTACT: 9124483008 | JINENDRA.BANTHIA.ITER@GMAIL.COM
        </span>
        <div className="flex space-x-6">
          <a href="#" className="font-label text-[10px] text-text-primary tracking-widest uppercase hover:text-gold-primary transition-colors">Instagram</a>
          <a href="#" className="font-label text-[10px] text-text-primary tracking-widest uppercase hover:text-gold-primary transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
