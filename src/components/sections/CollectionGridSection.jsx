import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const products = [
  { name: "AURUM NOIR", size: "50ml", price: "₹4,200", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop" },
  { name: "AURUM BLANC", size: "30ml", price: "₹3,100", image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=600&auto=format&fit=crop" },
  { name: "AURUM ÉTÉ", size: "100ml", price: "₹6,800", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop" }
];

export default function CollectionGridSection() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current.querySelectorAll('.product-card');
    gsap.fromTo(cards,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1, opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section className="w-full py-32 px-8 z-20 relative bg-background" id="collection">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-text-primary">The Collection</h2>
          <span className="font-label text-gold-primary tracking-widest text-[10px] uppercase hidden md:block">Explore</span>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="product-card group relative cursor-pointer block">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 font-label text-[10px] text-gold-primary uppercase tracking-widest whitespace-nowrap">
                  View Details
                </div>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-body text-text-primary text-lg">{product.name}</h3>
                  <p className="font-label text-text-muted text-[10px] uppercase tracking-widest mt-1">{product.size}</p>
                </div>
                <span className="font-body text-gold-primary">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
