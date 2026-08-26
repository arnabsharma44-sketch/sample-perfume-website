import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0, ease: 'none' });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.15, ease: 'power2.out' });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'button' || target.closest('button')) {
        gsap.to(follower, { width: 60, height: 60, duration: 0.3 });
        setHoverText("View");
      }
    };
    
    const handleMouseOut = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'button' || target.closest('button')) {
        gsap.to(follower, { width: 32, height: 32, duration: 0.3 });
        setHoverText("");
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-gold-primary rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2" 
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-gold-primary opacity-50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-label text-[10px] text-gold-primary uppercase tracking-widest"
      >
        {hoverText && <span className="opacity-100 animate-fade-in">{hoverText}</span>}
      </div>
    </>
  );
}
