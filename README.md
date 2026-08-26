# AURUM — Luxury Perfume Brand Website

> "The Scent of Silence." A rare alchemy of oud, black amber, and white musk — distilled into a single breath of evening air.

AURUM is a highly interactive, 3D, scroll-driven web experience for a luxury perfume brand. Designed with a dark maximalist aesthetic, it leverages modern web technologies to create a cinematic and immersive journey.

## 🌟 Features

- **Global 3D Canvas:** A persistent 3D perfume bottle built with React Three Fiber that reacts to scroll position and transitions seamlessly across sections.
- **Cinematic Scroll Animations:** Powered by GSAP and ScrollTrigger, featuring staggered reveals, text splitting, pinned sections, and parallax layers.
- **Smooth Scrolling:** Utilizes Lenis for buttery smooth, physics-based scrolling.
- **Interactive Micro-animations:** Magnetic buttons, custom 3D glass card tilts on hover, and an expanding custom crosshair cursor.
- **Dark Luxury Aesthetic:** Carefully crafted UI using a custom color palette (`#080608` deep violet-black background and `#C9A84C` gold highlights), paired with modern typography (`Cormorant Garamond`, `Neue Montreal`, `Geist Mono`).

## 🛠 Tech Stack

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS + Vanilla CSS
- **3D Rendering:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations:** GSAP (ScrollTrigger), Splitting.js
- **Scroll Engine:** `@studio-freight/lenis`

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd sample-perfume-website
```

2. Install the dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`.

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── CustomCursor.jsx    # Custom gold follower cursor
│   │   ├── Navigation.jsx      # Glassmorphic top navbar
│   │   └── SmoothScroll.jsx    # Lenis wrapper setup
│   ├── scene/
│   │   ├── Bottle.jsx          # 3D Perfume Bottle Mesh
│   │   └── Scene.jsx           # R3F Canvas, Lighting, & Particles
│   └── sections/
│       ├── HeroSection.jsx           # Pinned hero with text reveal
│       ├── ProductRevealSection.jsx  # Split layout with scroll scrub
│       ├── ScentNotesSection.jsx     # 3D tilt glass cards
│       ├── BrandStorySection.jsx     # Cinematic image parallax
│       ├── CollectionGridSection.jsx # Waterfall grid entry
│       └── FooterSection.jsx         # Magnetic CTAs & giant logo
├── App.jsx                     # Component composition & Scroll proxies
├── index.css                   # Tailwind directives & global font config
└── main.jsx                    # React entry point
```

## 🎨 Customization (Adding your own 3D Model)

By default, the project uses a primitive dark glass cylinder to represent the perfume bottle. 

To add a real 3D model (e.g., from [Spline](https://spline.design/) or [Sketchfab](https://sketchfab.com/)):
1. Export your model as a `.glb` file.
2. Place it in the `public/` directory.
3. Use the `@react-three/drei` `useGLTF` hook inside `src/components/scene/Bottle.jsx` to load and render it.

## 📄 License

This project is open-source and available under the MIT License.
