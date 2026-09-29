import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Bottle from './Bottle';

function ParticleField() {
  const pointsRef = useRef();

  const particleData = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 8;
      const sinPhi = Math.sin(phi);
      positions[i * 3] = r * sinPhi * Math.cos(theta);
      positions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta * 0.05;
      pointsRef.current.rotation.y -= delta * 0.07;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particleData, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          transparent
          color="#C9A84C"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </points>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-10" id="global-canvas-container">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 8, 5]} intensity={2.0} color="#fff8e7" />
        <spotLight position={[-6, 6, -4]} intensity={2.5} color="#F0D080" penumbra={0.8} />
        <pointLight position={[0, 0, 4]} intensity={1.5} color="#C9A84C" />
        <pointLight position={[3, -2, 2]} intensity={0.8} color="#e5c158" />
        <pointLight position={[-3, -3, -2]} intensity={0.5} color="#8a6f27" />
        
        <Bottle id="main-bottle" />
        <ParticleField />
      </Canvas>
    </div>
  );
}
