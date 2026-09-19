import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Torus, Box, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry() {
  const group = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1;
      group.current.rotation.x += (mouse.y * 0.2 - group.current.rotation.x) * 0.02;
      group.current.rotation.z += (mouse.x * 0.1 - group.current.rotation.z) * 0.02;
    }
  });

  return (
    <group ref={group}>
      {/* Central orb */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#6366f1"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.85}
          />
        </Sphere>
      </Float>

      {/* Orbiting torus */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <Torus args={[2.2, 0.08, 16, 100]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.5} transparent opacity={0.7} />
        </Torus>
      </Float>

      {/* Floating cubes */}
      {[
        { pos: [2.5, 1, -1] as [number, number, number], color: '#818cf8', scale: 0.2 },
        { pos: [-2.5, -1, 1] as [number, number, number], color: '#22d3ee', scale: 0.15 },
        { pos: [1.5, -2, 0.5] as [number, number, number], color: '#a5b4fc', scale: 0.18 },
        { pos: [-1.8, 2, -0.5] as [number, number, number], color: '#06b6d4', scale: 0.12 },
      ].map(({ pos, color, scale }, i) => (
        <Float key={i} speed={1 + i * 0.3} rotationIntensity={2} floatIntensity={1.5}>
          <Box args={[scale, scale, scale]} position={pos}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} transparent opacity={0.8} />
          </Box>
        </Float>
      ))}
    </group>
  );
}

function ParticleField() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#818cf8" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

interface HeroSceneProps {
  isDark: boolean;
}

export function HeroScene({ isDark }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      aria-hidden
    >
      <ambientLight intensity={isDark ? 0.3 : 0.6} />
      <pointLight position={[10, 10, 10]} intensity={isDark ? 1.2 : 0.8} color="#6366f1" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#22d3ee" />
      <Stars radius={80} depth={50} count={800} factor={3} saturation={0} fade speed={0.5} />
      <FloatingGeometry />
      <ParticleField />
    </Canvas>
  );
}
