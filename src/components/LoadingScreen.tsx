import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState<'loading' | 'reveal'>('loading');

    const starGrid = Array.from({ length: 16 }, (_, i) => i);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setPhase('reveal'), 200);
                    setTimeout(onComplete, 900);
                    return 100;
                }
                const increment = Math.random() * 12 + 3;
                return Math.min(prev + increment, 100);
            });
        }, 90);
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <m.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712] overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            {/* Background grid */}
            <div className="absolute inset-0 bg-grid opacity-50" />

            {/* Star field */}
            {starGrid.map((star) => (
                <m.div
                    key={`star-${star}`}
                    className="absolute bg-white rounded-full opacity-60"
                    style={{
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        opacity: [0.1, 0.7, 0.1],
                        scale: [0.8, 1.4, 0.8],
                    }}
                    transition={{
                        duration: 2.5 + Math.random() * 2,
                        repeat: Infinity,
                    }}
                />
            ))}

            {/* Pulse scanline */}
            <m.div
                className="absolute inset-x-0 h-0.5 bg-cyan-300/30 blur-md"
                initial={{ y: '100%' }}
                animate={{ y: ['100%', '0%', '100%'] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'linear' }}
            />

            {/* Curtain reveal */}
            <AnimatePresence>
                {phase === 'reveal' && (
                    <>
                        <m.div
                            className="absolute inset-x-0 top-0 h-1/2 bg-[#030712] z-10"
                            initial={{ scaleY: 1, originY: 0 }}
                            animate={{ scaleY: 0 }}
                            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                        />
                        <m.div
                            className="absolute inset-x-0 bottom-0 h-1/2 bg-[#030712] z-10"
                            initial={{ scaleY: 1, originY: 1 }}
                            animate={{ scaleY: 0 }}
                            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                        />
                    </>
                )}
            </AnimatePresence>

            {/* Ambient glow */}
            <div className="absolute w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
            <div className="absolute w-64 h-64 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none translate-x-32 translate-y-32" />

            {/* Logo */}
            <m.div
                className="relative mb-12"
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="text-5xl md:text-7xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 select-none">
                    &lt;Murugan /&gt;
                </div>
                {/* Glow behind text */}
                <div className="absolute inset-0 text-5xl md:text-7xl font-bold font-mono text-cyan-400 opacity-20 blur-xl select-none pointer-events-none">
                    &lt;Murugan /&gt;
                </div>

                {/* Orbiting ring */}
                <m.div
                    className="absolute inset-[-10px] rounded-full border border-cyan-400/20"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                />

                {/* Orbiting spark */}
                <m.div
                    className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.8)]"
                    animate={{ x: [0, -8, 0], y: [0, -8, 0], opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
            </m.div>

            {/* Progress bar container */}
            <m.div
                className="w-64 md:w-80"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {/* Track */}
                <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                    {/* Fill */}
                    <m.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full relative"
                        style={{ width: `${progress}%` }}
                        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
                    >
                        {/* Shimmer on fill */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                        </div>

                        {/* Moving glow orb */}
                        <m.div
                            className="absolute -top-1 h-4 w-4 rounded-full bg-cyan-300/70 shadow-[0_0_20px_rgba(56,189,248,0.7)]"
                            animate={{
                                x: `${Math.max(0, Math.min(progress, 100))}%`,
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 0.7,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    </m.div>
                </div>

                {/* Counter */}
                <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-slate-600 font-mono tracking-widest uppercase">Loading</span>
                    <span className="text-sm font-mono text-cyan-400 tabular-nums">
                        {Math.round(progress).toString().padStart(3, '0')}%
                    </span>
                </div>
            </m.div>
        </m.div>
    );
}