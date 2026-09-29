const brands = [
  { 
    name: "Chanel", 
    slug: "chanel",
    country: "France", 
    flag: "🇫🇷",
    signature: "N°5",
    year: "1910",
    founder: "Coco Chanel",
    description: "Chanel is a Parisian fashion house founded in 1910 by Coco Chanel. The House of Chanel has become synonymous with luxury, elegance, and timeless style. Chanel N°5, created in 1921, remains the world's most iconic fragrance — a complex blend of aldehydes, ylang-ylang, and sandalwood that redefined modern perfumery.",
    notes: { top: "Aldehydes, Neroli, Ylang-Ylang", heart: "Rose, Jasmine, Iris", base: "Sandalwood, Vetiver, Vanilla" },
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop"
  },
  { 
    name: "Dior", 
    slug: "dior",
    country: "France", 
    flag: "🇫🇷",
    signature: "Sauvage",
    year: "1946",
    founder: "Christian Dior",
    description: "Christian Dior founded his eponymous fashion house in 1946, revolutionizing post-war fashion with his 'New Look.' Dior Sauvage, inspired by wide-open spaces, is a bold and noble fragrance built around raw, fresh ingredients — a powerful juxtaposition of rugged masculinity and refined elegance.",
    notes: { top: "Bergamot, Pepper", heart: "Lavender, Star Anise, Nutmeg", base: "Ambroxan, Cedar, Labdanum" },
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=600&auto=format&fit=crop",
    storyVideo: "/dior vdo/Say age By Dior.mp4"
  },
  { 
    name: "Gucci", 
    slug: "gucci",
    country: "Italy", 
    flag: "🇮🇹",
    signature: "Bloom",
    year: "1921",
    founder: "Guccio Gucci",
    description: "Founded in Florence in 1921, Gucci is one of the world's most prestigious luxury brands. Gucci Bloom captures the scent of a thriving garden brimming with life. A rich blend of natural tuberose, jasmine, and Rangoon creeper creates an unexpectedly bold white floral scent.",
    notes: { top: "Natural Tuberose", heart: "Jasmine Bud Extract", base: "Rangoon Creeper" },
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop"
  },
  { 
    name: "Tom Ford", 
    slug: "tom-ford",
    country: "United States", 
    flag: "🇺🇸",
    signature: "Black Orchid",
    year: "2006",
    founder: "Tom Ford",
    description: "Tom Ford launched his luxury brand in 2005 and immediately disrupted the fragrance world with Black Orchid in 2006. A luxurious and sensual fragrance of rich, dark accords and an alluring potion of black orchids and spice, it is the original Tom Ford icon — timeless, glamorous, and utterly distinctive.",
    notes: { top: "Black Truffle, Ylang-Ylang, Bergamot", heart: "Black Orchid, Lotus Wood", base: "Patchouli, Sandalwood, Dark Chocolate" },
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop"
  },
  { 
    name: "Versace", 
    slug: "versace",
    country: "Italy", 
    flag: "🇮🇹",
    signature: "Eros",
    year: "1978",
    founder: "Gianni Versace",
    description: "Gianni Versace founded his fashion empire in 1978 with a vision of bold glamour and Baroque-inspired opulence. Versace Eros is named after the Greek god of love — a fragrance designed to unleash desire. Fresh mint and green apple meet deep vanilla and tonka bean in a powerful, seductive blend.",
    notes: { top: "Mint, Green Apple, Lemon", heart: "Tonka Bean, Ambroxan, Geranium", base: "Vanilla, Vetiver, Oak Moss, Cedar" },
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=600&auto=format&fit=crop"
  },
  { 
    name: "YSL", 
    slug: "ysl",
    country: "France", 
    flag: "🇫🇷",
    signature: "Black Opium",
    year: "1961",
    founder: "Yves Saint Laurent",
    description: "Yves Saint Laurent launched his legendary fashion house in 1961, becoming one of the most influential designers of the 20th century. YSL Black Opium is a highly addictive feminine fragrance — the first fragrance built around coffee. A bold composition of black coffee, white flowers, and warm vanilla creates an intoxicating rock 'n' roll aura.",
    notes: { top: "Pink Pepper, Orange Blossom", heart: "Coffee, Jasmine", base: "Vanilla, Patchouli, Cedar" },
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=600&auto=format&fit=crop"
  },
  { 
    name: "Giorgio Armani", 
    slug: "giorgio-armani",
    country: "Italy", 
    flag: "🇮🇹",
    signature: "Acqua di Gio",
    year: "1975",
    founder: "Giorgio Armani",
    description: "Giorgio Armani established his fashion empire in 1975, redefining modern elegance with clean lines and understated luxury. Acqua di Gio Profondo is a modern reinterpretation of the iconic aquatic fragrance — a deep, intense composition inspired by the majesty of the ocean and the depths of its waters.",
    notes: { top: "Green Mandarin, Bergamot, Aquatic Notes", heart: "Rosemary, Cypress, Lavender", base: "Musk, Mineral Amber, Patchouli" },
    image: "/perfume vdo/Acqua di Gio Profondo - Lanzamiento 2020 _ Giorgio Armani.jpg"
  },
  { 
    name: "Paco Rabanne", 
    slug: "paco-rabanne",
    country: "France", 
    flag: "🇫🇷",
    signature: "Pure XS",
    year: "1966",
    founder: "Paco Rabanne",
    description: "Paco Rabanne burst onto the fashion scene in 1966 with his revolutionary designs using unconventional materials. Pure XS is an excessive, provocative fragrance that dares to go beyond. A clash of fresh and sensual, it combines ginger, vanilla, and myrrh in a composition that embodies pure excess and unapologetic boldness.",
    notes: { top: "Ginger, Thyme, Grapefruit", heart: "Vanilla, Cinnamon, Leather", base: "Myrrh, Cashmeran, Woodsy Accord" },
    image: "/perfume vdo/PACO RABANNE PURE XS FOR HER REVIEW - Pinkit_nl.jpg"
  },
  { 
    name: "Hugo Boss", 
    slug: "hugo-boss",
    country: "Germany", 
    flag: "🇩🇪",
    signature: "Boss Bottled",
    year: "1924",
    founder: "Hugo Boss",
    description: "Hugo Boss was founded in 1924 in Metzingen, Germany, and has evolved into a global symbol of sophisticated menswear and modern luxury. Boss Bottled Night is an elegant and refined fragrance — a woody and musky composition that captures the energy and confidence of a man ready to seize the evening.",
    notes: { top: "Lavender, Birch Leaf", heart: "African Violet, Louro Amarelo", base: "Musk, Woody Notes" },
    image: "/perfume vdo/Boss Bottled Night by Hugo Boss _ 100ml EDT _ Woody Aromatic Fragrance _ Gift for him, Fathers day.jpg"
  },
  { 
    name: "Calvin Klein", 
    slug: "calvin-klein",
    country: "United States", 
    flag: "🇺🇸",
    signature: "Eternity",
    year: "1968",
    founder: "Calvin Klein",
    description: "Calvin Klein launched his brand in 1968, defining American minimalism with clean, modern aesthetics. CK Eternity is a timeless romantic fragrance inspired by the concept of everlasting love. A refined floral composition of freesia, lily of the valley, and sandalwood that captures intimacy and devotion.",
    notes: { top: "Freesia, Mandarin, Sage", heart: "White Lily, Marigold, Narcissus", base: "Sandalwood, Amber, Musk, Patchouli" },
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop"
  },
  { 
    name: "Burberry", 
    slug: "burberry",
    country: "United Kingdom", 
    flag: "🇬🇧",
    signature: "Her",
    year: "1856",
    founder: "Thomas Burberry",
    description: "Founded in 1856 by Thomas Burberry, this iconic British house has defined heritage luxury for over 160 years. Burberry Her is a celebration of London's vibrant energy — a sparkling gourmand fragrance built around a heart of handpicked berries, jasmine, and violet, wrapped in warm amber and musk.",
    notes: { top: "Blackberry, Blackcurrant, Raspberry", heart: "Jasmine, Violet", base: "Amber, Musk, Dry Cocoa" },
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop"
  },
  { 
    name: "D&G", 
    slug: "dolce-gabbana",
    country: "Italy", 
    flag: "🇮🇹",
    signature: "Light Blue",
    year: "1985",
    founder: "Domenico Dolce & Stefano Gabbana",
    description: "Dolce & Gabbana was founded in 1985 by Domenico Dolce and Stefano Gabbana, becoming synonymous with Mediterranean glamour. Light Blue captures the sensuality of Mediterranean living — a refreshing, sparkling fragrance of Sicilian citron, bluebell, and cedarwood that evokes a sun-drenched Italian summer.",
    notes: { top: "Sicilian Citron, Apple, Bluebell", heart: "Jasmine, Bamboo, White Rose", base: "Cedar, Musk, Amber" },
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=600&auto=format&fit=crop"
  }
];

export default brands;
