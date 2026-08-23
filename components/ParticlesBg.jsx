"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 800;

function Particles() {
  const mesh = useRef();
  const t = useRef(0);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const sz = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      sz[i] = Math.random() * 2.5 + 0.5;
    }
    return [pos, sz];
  }, []);

  useFrame((_, delta) => {
    t.current += delta * 0.12;
    mesh.current.rotation.y = t.current * 0.08;
    mesh.current.rotation.x = Math.sin(t.current * 0.05) * 0.12;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        color="#f5a623"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticlesBg() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 70 }}
        gl={{ antialias: false, alpha: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
