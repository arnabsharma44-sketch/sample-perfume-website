import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Bottle(props) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Idle rotation when not scrolling will be handled by GSAP ScrollTrigger proxies later
    // but for now we can add a very slow idle rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {/* Placeholder Bottle Geometry */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 1, 3, 32]} />
        <meshPhysicalMaterial 
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.8}
          thickness={1}
        />
      </mesh>
      
      {/* Bottle Cap */}
      <mesh position={[0, 1.8, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.6, 32]} />
        <meshStandardMaterial color="#C9A84C" metalness={1} roughness={0.2} />
      </mesh>
      
      {/* Bottle Neck */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.2, 0.4, 0.2, 32]} />
        <meshStandardMaterial color="#F0D080" metalness={0.8} roughness={0.3} />
      </mesh>
    </group>
  );
}
