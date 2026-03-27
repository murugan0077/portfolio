import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { Wand2, Shuffle } from 'lucide-react';

const COLORS = ["#ef4444", "#f97316", "#ffffff", "#eab308", "#22c55e", "#3b82f6"];

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

interface CubeletProps {
    position: [number, number, number];
    colors: {
        right: string | null;
        left: string | null;
        top: string | null;
        bottom: string | null;
        front: string | null;
        back: string | null;
    };
}

const Cubelet = ({ position, colors }: CubeletProps) => {
    return (
        <mesh position={position}>
            <boxGeometry args={[0.95, 0.95, 0.95]} />
            <meshStandardMaterial color="#1e293b" roughness={0.1} metalness={0.5} />

            {/* Right */}
            <mesh position={[0.51, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <planeGeometry args={[0.85, 0.85]} />
                <meshStandardMaterial color={colors.right || "#0f172a"} roughness={0.2} metalness={0.1} />
            </mesh>
            {/* Left */}
            <mesh position={[-0.51, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <planeGeometry args={[0.85, 0.85]} />
                <meshStandardMaterial color={colors.left || "#0f172a"} roughness={0.2} metalness={0.1} />
            </mesh>
            {/* Top */}
            <mesh position={[0, 0.51, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.85, 0.85]} />
                <meshStandardMaterial color={colors.top || "#0f172a"} roughness={0.2} metalness={0.1} />
            </mesh>
            {/* Bottom */}
            <mesh position={[0, -0.51, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.85, 0.85]} />
                <meshStandardMaterial color={colors.bottom || "#0f172a"} roughness={0.2} metalness={0.1} />
            </mesh>
            {/* Front */}
            <mesh position={[0, 0, 0.51]}>
                <planeGeometry args={[0.85, 0.85]} />
                <meshStandardMaterial color={colors.front || "#0f172a"} roughness={0.2} metalness={0.1} />
            </mesh>
            {/* Back */}
            <mesh position={[0, 0, -0.51]} rotation={[0, Math.PI, 0]}>
                <planeGeometry args={[0.85, 0.85]} />
                <meshStandardMaterial color={colors.back || "#0f172a"} roughness={0.2} metalness={0.1} />
            </mesh>
        </mesh>
    );
};

const RubiksCubeModel = ({ isInteracting, isSolved }: { isInteracting: boolean; isSolved: boolean }) => {
    const groupRef = useRef<THREE.Group>(null);
    const lastInteractionTime = useRef(Date.now());
    const [displayedState, setDisplayedState] = useState(isSolved);
    const spinSpeed = useRef(0);
    const isSpinning = useRef(false);

    // Trigger magic spin when isSolved changes
    useEffect(() => {
        if (isSolved !== displayedState) {
            isSpinning.current = true;

            const duration = 2000;
            const peak = 1000;
            const startTime = Date.now();
            let switched = false;

            const animate = () => {
                const elapsed = Date.now() - startTime;

                if (elapsed < peak) {
                    // Accelerate
                    spinSpeed.current = (elapsed / peak) * 20;
                    requestAnimationFrame(animate);
                } else if (elapsed < duration) {
                    // Switch colors at peak
                    if (!switched) {
                        setDisplayedState(isSolved);
                        switched = true;
                    }

                    // Decelerate
                    spinSpeed.current = 20 * (1 - (elapsed - peak) / (duration - peak));
                    requestAnimationFrame(animate);
                } else {
                    // End
                    spinSpeed.current = 0;
                    isSpinning.current = false;
                    setDisplayedState(isSolved);
                }
            };

            animate();
        }
    }, [isSolved, displayedState]);

    useFrame((_state, delta) => {
        if (groupRef.current) {
            if (isSpinning.current) {
                // Magic spin
                groupRef.current.rotation.y += delta * spinSpeed.current;
                groupRef.current.rotation.x += delta * (spinSpeed.current * 0.5);
                groupRef.current.rotation.z += delta * (spinSpeed.current * 0.2);
            } else if (!isInteracting && Date.now() - lastInteractionTime.current > 3000) {
                // Auto-rotate when idle
                groupRef.current.rotation.y += delta * 0.2;
                groupRef.current.rotation.x += delta * 0.1;
            } else if (isInteracting) {
                lastInteractionTime.current = Date.now();
            }
        }
    });

    // Scroll to spin effect
    useEffect(() => {
        const handleScroll = () => {
            if (groupRef.current && !isSpinning.current) {
                groupRef.current.rotation.y += 0.1;
                lastInteractionTime.current = Date.now();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrambledData = useMemo(() => {
        const data: { position: [number, number, number]; colors: CubeletProps['colors'] }[] = [];
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                for (let z = -1; z <= 1; z++) {
                    data.push({
                        position: [x, y, z],
                        colors: {
                            right: x === 1 ? getRandomColor() : null,
                            left: x === -1 ? getRandomColor() : null,
                            top: y === 1 ? getRandomColor() : null,
                            bottom: y === -1 ? getRandomColor() : null,
                            front: z === 1 ? getRandomColor() : null,
                            back: z === -1 ? getRandomColor() : null,
                        }
                    });
                }
            }
        }
        return data;
    }, []);

    const solvedData = useMemo(() => {
        const data: { position: [number, number, number]; colors: CubeletProps['colors'] }[] = [];
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                for (let z = -1; z <= 1; z++) {
                    data.push({
                        position: [x, y, z],
                        colors: {
                            right: x === 1 ? "#ef4444" : null,  // Red
                            left: x === -1 ? "#f97316" : null,  // Orange
                            top: y === 1 ? "#ffffff" : null,    // White
                            bottom: y === -1 ? "#eab308" : null,// Yellow
                            front: z === 1 ? "#22c55e" : null,  // Green
                            back: z === -1 ? "#3b82f6" : null,  // Blue
                        }
                    });
                }
            }
        }
        return data;
    }, []);

    const currentData = displayedState ? solvedData : scrambledData;

    return (
        <group ref={groupRef}>
            {currentData.map((data, i) => (
                <Cubelet key={i} position={data.position} colors={data.colors} />
            ))}
        </group>
    );
};

export default function RubiksCube() {
    const [isInteracting, setIsInteracting] = useState(false);
    const [isSolved, setIsSolved] = useState(false);

    return (
        <div className="relative w-full h-[300px] md:h-[300px] lg:h-[300px]">
            <div className="absolute top-4 right-4 z-10">
                <button
                    onClick={() => setIsSolved(!isSolved)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium hover:bg-cyan-500/20 transition-all shadow-lg hover:shadow-cyan-500/20"
                >
                    {isSolved ? (
                        <>
                            <Shuffle size={12} />
                            Magic Shuffle
                        </>
                    ) : (
                        <>
                            <Wand2 size={12} />
                            Magic Solve
                        </>
                    )}
                </button>
            </div>

            <div className="w-full h-full cursor-grab active:cursor-grabbing">
                <Canvas 
                    camera={{ position: [5, 5, 5], fov: 45 }}
                    // Only render when necessary to save CPU/Battery
                    frameloop="demand"
                    performance={{ min: 0.5 }}
                >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <RubiksCubeModel isInteracting={isInteracting} isSolved={isSolved} />
                    </Float>
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        onStart={() => setIsInteracting(true)}
                        onEnd={() => setIsInteracting(false)}
                    />
                    <Environment preset="city" />
                </Canvas>
            </div>
        </div>
    );
}