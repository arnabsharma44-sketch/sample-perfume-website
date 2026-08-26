import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BrandStorySection() {
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // Parallax background
    gsap.to(bgRef.current, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: "#brand-story",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Text clip-path reveal
    const lines = textRef.current.querySelectorAll('span');
    gsap.fromTo(lines,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        stagger: 0.3,
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
        }
      }
    );

    // Line draw
    gsap.fromTo(lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 90%",
        }
      }
    );
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden z-20 flex flex-col justify-center items-center" id="brand-story">
      {/* Abstract dark smoke background */}
      <div 
        ref={bgRef}
        className="absolute inset-[-20%] w-[140%] h-[140%] bg-[url('https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 pointer-events-none origin-center"
      />
      
      <div className="absolute inset-0 bg-background/80" />

      <h2 ref={textRef} className="relative z-10 font-display text-5xl md:text-8xl text-center text-text-primary leading-tight">
        <span className="block opacity-70">Crafted in</span>
        <span className="block opacity-90">small batches.</span>
        <span className="block opacity-100">Never rushed.</span>
      </h2>

      <div ref={lineRef} className="absolute bottom-24 w-px h-24 md:w-48 md:h-px bg-gold-primary origin-left md:origin-center" />
    </section>
  );
}
