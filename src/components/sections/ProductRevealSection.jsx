import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Splitting from 'splitting';

export default function ProductRevealSection() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      Splitting({ target: textRef.current, by: 'words' });
      const words = textRef.current.querySelectorAll('.word');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#product-reveal",
          start: "top 60%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo('.reveal-label', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      )
      .fromTo(words, 
        { opacity: 0, y: 30, filter: 'blur(8px)' },
        { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          stagger: 0.08, 
          duration: 1.5,
          ease: 'power3.out'
        },
        "-=0.8"
      )
      .fromTo('.reveal-text', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
        "-=1"
      )
      .fromTo('.reveal-btn', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
        "-=1"
      );
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex z-20" id="product-reveal">
      <div className="w-1/2 h-full"></div>
      
      <div className="w-1/2 h-full flex flex-col justify-center pl-12 pr-24">
        <span className="reveal-label font-label text-gold-primary text-xs uppercase tracking-widest mb-6 block">
          The Fragrance
        </span>
        
        <h2 ref={textRef} className="font-display text-6xl md:text-8xl text-text-primary leading-tight mb-8">
          Born from<br/>golden dusk.
        </h2>
        
        <p className="reveal-text font-body text-text-muted text-xl md:text-2xl max-w-lg mb-12 leading-relaxed">
          A rare alchemy of oud, black amber, and white musk — distilled into a single breath of evening air.
        </p>
        
        <button className="reveal-btn self-start group relative px-8 py-3 border border-gold-primary overflow-hidden transition-colors duration-500 hover:text-background text-gold-primary font-body tracking-widest uppercase text-sm">
          <span className="relative z-10">Add to Collection</span>
          <div className="absolute inset-0 bg-gold-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
        </button>
      </div>
    </section>
  );
}
