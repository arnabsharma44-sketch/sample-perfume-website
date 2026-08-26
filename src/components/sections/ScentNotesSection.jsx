import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const notes = [
  { tier: "TOP NOTES", title: "Bergamot, Pink Pepper, Cardamom" },
  { tier: "HEART NOTES", title: "Oud, Rose Absolute, Iris" },
  { tier: "BASE NOTES", title: "Amber, White Musk, Sandalwood" }
];

export default function ScentNotesSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 80 },
        {
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1,
          duration: 1,
          ease: 'power3.out'
        }
      );

      // Vanilla JS 3D tilt effect for cards
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1000,
          ease: "power2.out",
          duration: 0.5
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          ease: "power2.out",
          duration: 0.5
        });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <section className="relative w-full py-32 flex flex-col items-center justify-center z-20 overflow-hidden" id="scent-notes">
      <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-8 max-w-6xl w-full px-8">
        {notes.map((note, index) => (
          <div 
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="flex-1 p-8 rounded-sm bg-white/5 backdrop-blur-md border border-gold-primary/20 hover:border-gold-primary transition-colors duration-500 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] relative overflow-hidden group"
          >
            {/* Dust effect canvas could go here, for now just a subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <h4 className="font-label text-gold-primary text-[10px] tracking-widest uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
              {note.tier}
            </h4>
            <h3 className="font-body text-text-primary text-xl font-light leading-relaxed">
              {note.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
