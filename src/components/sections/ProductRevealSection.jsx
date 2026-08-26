import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Splitting from 'splitting';

export default function ProductRevealSection() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      Splitting({ target: textRef.current, by: 'words' });
      const words = textRef.current.querySelectorAll('.word');

      gsap.fromTo(words, 
        { opacity: 1, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.04, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: "#product-reveal",
            start: "top 60%",
            end: "center center",
            scrub: false,
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex z-20" id="product-reveal">
      <div className="w-1/2 h-full"></div>
      
      <div className="w-1/2 h-full flex flex-col justify-center pl-12 pr-24">
        <span className="font-label text-gold-primary text-[10px] uppercase tracking-widest mb-6 block">
          The Fragrance
        </span>
        
        <h2 ref={textRef} className="font-display text-5xl md:text-7xl text-text-primary leading-tight mb-8">
          Born from<br/>golden dusk.
        </h2>
        
        <p className="font-body text-text-muted text-lg max-w-md mb-12 leading-relaxed">
          A rare alchemy of oud, black amber, and white musk — distilled into a single breath of evening air.
        </p>
        
        <button className="self-start group relative px-8 py-3 border border-gold-primary overflow-hidden transition-colors duration-500 hover:text-background text-gold-primary font-body tracking-widest uppercase text-xs">
          <span className="relative z-10">Add to Collection</span>
          <div className="absolute inset-0 bg-gold-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
        </button>
      </div>
    </section>
  );
}
