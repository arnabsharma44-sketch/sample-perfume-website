import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import brands from '../../data/brands';

gsap.registerPlugin(ScrollTrigger);

export default function CollectionGridSection() {
  const gridRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Animate the header
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        }
      }
    );

    // Stagger animate cards with a premium reveal
    const cards = gridRef.current.querySelectorAll('.brand-card');
    gsap.fromTo(cards,
      { 
        y: 80, 
        opacity: 0,
        filter: 'blur(6px)'
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        stagger: {
          each: 0.08,
          from: "start"
        },
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );

    // Animate the golden line decoration
    gsap.fromTo('.collection-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section className="w-full py-32 px-8 z-20 relative bg-background" id="collection">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-20 text-center">
          <span className="font-label text-gold-primary tracking-[0.3em] text-xs uppercase block mb-4">
            Curated Houses
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-text-primary mb-6">
            The Collection
          </h2>
          <div className="collection-line w-24 h-px bg-gold-primary mx-auto origin-center" />
          <p className="font-body text-text-muted text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            The world's most iconic fragrance houses, each with a legacy of artistry and elegance.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {brands.map((brand, idx) => (
            <Link 
              to={`/collection/${brand.slug}`}
              key={idx} 
              className="brand-card group relative cursor-pointer block"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-5 rounded-sm">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[900ms] ease-out grayscale group-hover:grayscale-0" 
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                
                {/* Flag badge */}
                <div className="absolute top-4 right-4 text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {brand.flag}
                </div>

                {/* Bottom card info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-xl md:text-2xl text-white mb-1 tracking-wide">
                    {brand.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="font-label text-[10px] text-white/50 uppercase tracking-widest">
                      {brand.country}
                    </p>
                    <span className="font-body text-gold-primary text-xs italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {brand.signature}
                    </span>
                  </div>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 border border-gold-primary/0 group-hover:border-gold-primary/30 transition-all duration-700 rounded-sm pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

