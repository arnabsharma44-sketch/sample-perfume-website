import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BrandStorySection() {
  const sectionRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    // We create a ScrollTrigger timeline for the pinning and scaling effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%", // Scroll distance
        scrub: 1,
        pin: true,
      }
    });

    // Use clip-path for a perfectly smooth, layout-independent reveal
    // This keeps the video's crop consistent while expanding to full screen
    const isMobile = window.innerWidth < 768;
    const initialClip = isMobile 
      ? "inset(25% 20% 25% 20% round 8px)" 
      : "inset(20% 35% 20% 35% round 8px)";

    tl.fromTo(videoWrapperRef.current, {
      clipPath: initialClip,
    }, {
      clipPath: "inset(0% 0% 0% 0% round 0px)",
      duration: 1,
      ease: "power2.inOut"
    }, 0);

    // Add a premium un-zoom effect to the video itself
    tl.fromTo(videoRef.current, {
      scale: 1.3
    }, {
      scale: 1,
      duration: 1,
      ease: "power2.inOut"
    }, 0);

    // Fade out and move text horizontally towards the center
    tl.to(leftTextRef.current, {
      x: "15vw",
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }, 0);
    
    tl.to(rightTextRef.current, {
      x: "-15vw",
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }, 0);

    // Fade out the bottom paragraph
    tl.to(pRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.in"
    }, 0);

    return () => {
      // Cleanup scroll triggers on unmount
      tl.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-background text-text-primary z-20 overflow-hidden" id="brand-story">
      <div className="absolute inset-0 flex items-center justify-center w-full h-full">
        
        {/* Large Text Container */}
        <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16 pointer-events-none z-30 w-full overflow-hidden mix-blend-difference">
          <h1 ref={leftTextRef} className="font-display text-[10vw] leading-none whitespace-nowrap tracking-tight uppercase text-gold-primary">
            WE CLOSE
          </h1>
          <h1 ref={rightTextRef} className="font-display text-[10vw] leading-none whitespace-nowrap tracking-tight uppercase text-right text-gold-primary">
            THE GAP
          </h1>
        </div>

        {/* Video Container (FullScreen with Clip-Path) */}
        <div ref={videoWrapperRef} className="absolute inset-0 z-20 w-full h-full overflow-hidden">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            src="/perfume vdo/perfume vdos.mp4"
          />
          <div className="absolute inset-0 bg-background/10 mix-blend-overlay pointer-events-none" />
        </div>

        {/* Bottom Paragraph */}
        <div ref={pRef} className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-xl text-center z-30">
          <p className="font-body text-text-muted text-sm md:text-base leading-relaxed tracking-wider">
            Your scent is where people decide if you're unforgettable. We take what makes you irreplaceable, shape the entire essence around it, and make sure they feel that before a word is spoken.
          </p>
        </div>
      </div>
    </section>
  );
}
