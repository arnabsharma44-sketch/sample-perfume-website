import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import brands from '../../data/brands';

gsap.registerPlugin(ScrollTrigger);

export default function ProductPage() {
  const { slug } = useParams();
  const brand = brands.find(b => b.slug === slug);

  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const detailsRef = useRef(null);
  const notesRef = useRef(null);

  useEffect(() => {
    if (!brand) return;

    const ctx = gsap.context(() => {
      // Hero image parallax
      gsap.to(imageRef.current, {
        y: '15%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Title reveal
      gsap.fromTo(titleRef.current.children,
        { opacity: 0, y: 60, filter: 'blur(8px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)',
          stagger: 0.15,
          duration: 1.4,
          ease: 'power3.out',
          delay: 0.3
        }
      );

      // Details section fade in
      gsap.fromTo(detailsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          stagger: 0.12,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: detailsRef.current,
            start: 'top 80%'
          }
        }
      );

      // Notes cards
      const noteCards = notesRef.current?.querySelectorAll('.note-card');
      if (noteCards) {
        gsap.fromTo(noteCards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            stagger: 0.15,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: notesRef.current,
              start: 'top 80%'
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, [brand]);

  if (!brand) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-background z-20 relative pt-20">
        <div className="text-center">
          <h1 className="font-display text-6xl text-text-primary mb-4">404</h1>
          <p className="font-body text-text-muted mb-8">Brand not found.</p>
          <Link to="/collection" className="font-label text-xs uppercase tracking-widest text-gold-primary border border-gold-primary px-8 py-3 hover:bg-gold-primary hover:text-background transition-colors duration-300">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-20 bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[80vh] overflow-hidden">
        <div ref={imageRef} className="absolute inset-x-0 -top-[15%] w-full h-[115%]">
          <img 
            src={brand.image} 
            alt={brand.name}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-background pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div ref={titleRef} className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10">
          <span className="font-label text-gold-primary text-xs uppercase tracking-[0.3em] block mb-4">
            {brand.flag} {brand.country} · Est. {brand.year}
          </span>
          <h1 className="font-display text-6xl md:text-9xl text-white leading-none mb-4">
            {brand.name}
          </h1>
          <p className="font-body text-white/60 text-lg italic">
            {brand.signature}
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className={`relative w-full py-24 md:py-32 px-8 md:px-16 ${brand.storyVideo ? 'text-white bg-black' : 'bg-background'}`}>
        {brand.storyVideo && (
          <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center bg-black">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-contain opacity-60"
              src={brand.storyVideo}
            />
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />
          </div>
        )}
        
        <div ref={detailsRef} className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold-primary" />
            <span className="font-label text-gold-primary text-xs uppercase tracking-[0.3em]">The Story</span>
          </div>

          <h2 className={`font-display text-4xl md:text-6xl ${brand.storyVideo ? 'text-white' : 'text-text-primary'} mb-12 leading-tight`}>
            Founded by {brand.founder}
          </h2>

          <p className={`font-body ${brand.storyVideo ? 'text-white/80' : 'text-text-muted'} text-xl md:text-2xl leading-relaxed max-w-3xl mb-16`}>
            {brand.description}
          </p>

          {/* Divider */}
          <div className={`w-full h-px ${brand.storyVideo ? 'bg-white/20' : 'bg-text-primary/10'} mb-16`} />

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className={`font-label text-[10px] ${brand.storyVideo ? 'text-white/50' : 'text-text-muted'} uppercase tracking-widest block mb-2`}>House</span>
              <span className={`font-display text-2xl ${brand.storyVideo ? 'text-white' : 'text-text-primary'}`}>{brand.name}</span>
            </div>
            <div>
              <span className={`font-label text-[10px] ${brand.storyVideo ? 'text-white/50' : 'text-text-muted'} uppercase tracking-widest block mb-2`}>Origin</span>
              <span className={`font-display text-2xl ${brand.storyVideo ? 'text-white' : 'text-text-primary'}`}>{brand.country}</span>
            </div>
            <div>
              <span className={`font-label text-[10px] ${brand.storyVideo ? 'text-white/50' : 'text-text-muted'} uppercase tracking-widest block mb-2`}>Established</span>
              <span className="font-display text-2xl text-gold-primary">{brand.year}</span>
            </div>
            <div>
              <span className={`font-label text-[10px] ${brand.storyVideo ? 'text-white/50' : 'text-text-muted'} uppercase tracking-widest block mb-2`}>Icon</span>
              <span className={`font-display text-2xl ${brand.storyVideo ? 'text-white' : 'text-text-primary'} italic`}>{brand.signature}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scent Notes Section */}
      <section className="w-full py-24 md:py-32 px-8 md:px-16 bg-background">
        <div ref={notesRef} className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-gold-primary" />
            <span className="font-label text-gold-primary text-xs uppercase tracking-[0.3em]">Fragrance Profile</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Top Notes */}
            <div className="note-card group p-8 border border-text-primary/10 hover:border-gold-primary/40 transition-all duration-700 rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <span className="font-label text-[10px] text-gold-primary uppercase tracking-[0.3em] block mb-4">Top Notes</span>
                <div className="w-8 h-px bg-gold-primary/40 mb-6" />
                <p className="font-body text-text-primary text-lg leading-relaxed">{brand.notes.top}</p>
                <p className="font-body text-text-muted text-sm mt-4 italic">The first impression — bright, fresh, and fleeting.</p>
              </div>
            </div>

            {/* Heart Notes */}
            <div className="note-card group p-8 border border-text-primary/10 hover:border-gold-primary/40 transition-all duration-700 rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <span className="font-label text-[10px] text-gold-primary uppercase tracking-[0.3em] block mb-4">Heart Notes</span>
                <div className="w-8 h-px bg-gold-primary/40 mb-6" />
                <p className="font-body text-text-primary text-lg leading-relaxed">{brand.notes.heart}</p>
                <p className="font-body text-text-muted text-sm mt-4 italic">The soul of the fragrance — complex and lingering.</p>
              </div>
            </div>

            {/* Base Notes */}
            <div className="note-card group p-8 border border-text-primary/10 hover:border-gold-primary/40 transition-all duration-700 rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <span className="font-label text-[10px] text-gold-primary uppercase tracking-[0.3em] block mb-4">Base Notes</span>
                <div className="w-8 h-px bg-gold-primary/40 mb-6" />
                <p className="font-body text-text-primary text-lg leading-relaxed">{brand.notes.base}</p>
                <p className="font-body text-text-muted text-sm mt-4 italic">The lasting memory — warm, deep, and enduring.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-8 md:px-16 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-display text-3xl md:text-5xl text-text-primary mb-6">Experience {brand.name}</h3>
          <p className="font-body text-text-muted text-lg mb-12 max-w-lg mx-auto">
            Discover the artistry behind {brand.signature} and explore the full {brand.name} collection.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="group relative px-10 py-4 bg-gold-primary text-background font-label text-[10px] uppercase tracking-widest overflow-hidden hover:bg-gold-highlight transition-colors duration-300">
              Shop {brand.signature}
            </button>
            <Link 
              to="/collection" 
              className="px-10 py-4 border border-gold-primary text-gold-primary font-label text-[10px] uppercase tracking-widest hover:bg-gold-primary hover:text-background transition-colors duration-300"
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
