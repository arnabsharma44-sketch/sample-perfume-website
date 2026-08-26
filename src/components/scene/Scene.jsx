import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import Bottle from './Bottle';
import { useFrame } from '@react-three/fiber';

function ParticleField() {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(500 * 3), { radius: 10 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#C9A84C" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
      </Points>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-10" id="global-canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <spotLight position={[-5, 5, -5]} intensity={2} color="#F0D080" penumbra={1} />
        <pointLight position={[0, 0, 2]} intensity={0.5} color="#C9A84C" />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Bottle id="main-bottle" />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
