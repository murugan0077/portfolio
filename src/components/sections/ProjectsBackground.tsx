import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Shape = ({ position, color, speed, distort }: { position: [number, number, number], color: string, speed: number, distort: number }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01 * speed;
            meshRef.current.rotation.y += 0.01 * speed;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 32, 32]} position={position}>
                <MeshDistortMaterial
                    color={color}
                    speed={speed}
                    distort={distort}
                    radius={1}
                />
            </Sphere>
        </Float>
    );
};

const Particles = ({ count = 30 }) => {
    const mesh = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);
    const positions = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 50;
            p[i * 3 + 1] = (Math.random() - 0.5) * 50;
            p[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        return p;
    }, [count]);

    useFrame(() => {
        particles.forEach((particle) => {
            const { factor, speed, xFactor, yFactor, zFactor } = particle;
            const t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);
            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            );
            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();
        });
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.1} color="#22d3ee" transparent opacity={0.4} />
        </points>
    );
};

export default function ProjectsBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas 
                camera={{ position: [0, 0, 20], fov: 75 }}
                // Disable continuous rendering for background elements
                frameloop="demand"
                dpr={[1, 2]} // Limit pixel ratio for performance
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Shape position={[-15, 10, -10]} color="#06b6d4" speed={1} distort={0.3} />
                <Shape position={[15, -10, -5]} color="#3b82f6" speed={1.5} distort={0.5} />
                <Shape position={[10, 15, -15]} color="#2dd4bf" speed={0.8} distort={0.2} />
                <Particles count={20} />
            </Canvas>
        </div>
    );
}
