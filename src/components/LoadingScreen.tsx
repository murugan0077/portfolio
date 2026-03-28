import { useState, useEffect, useRef } from 'react';
import { m } from 'framer-motion';

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);
    const hasCompleted = useRef(false);

    // Boot sequence text effect
    const bootTexts = [
        'INITIALISING KERNEL...',
        'LOADING ASSETS...',
        'ESTABLISHING SECURE CONNECTION...',
        'BUILDING INTERFACE...',
        'SYSTEM READY.',
    ];
    const [statusText, setStatusText] = useState(bootTexts[0]);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                const nextProgress = prev + (Math.random() * 8 + 2);

                // Update text based on progress thresholds
                if (nextProgress > 20) setStatusText(bootTexts[1]);
                if (nextProgress > 50) setStatusText(bootTexts[2]);
                if (nextProgress > 80) setStatusText(bootTexts[3]);

                if (nextProgress >= 100) {
                    clearInterval(timer);
                    setStatusText(bootTexts[4]);

                    if (!hasCompleted.current) {
                        hasCompleted.current = true;
                        // Delay before fading out to show "SYSTEM READY"
                        setTimeout(onComplete, 800);
                    }
                    return 100;
                }
                return nextProgress;
            });
        }, 80);

        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <m.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712] overflow-hidden"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* ── Ambient Background Glows ── */}
            <m.div
                className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none mix-blend-screen" />

            {/* ── Core Orbital Animation ── */}
            <div className="relative mb-16 flex items-center justify-center">
                {/* Center Core */}
                <m.div
                    className="absolute w-12 h-12 bg-cyan-400 rounded-full blur-[20px]"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <m.div
                    className="w-4 h-4 bg-white rounded-full z-10 shadow-[0_0_20px_4px_rgba(34,211,238,0.8)]"
                    animate={{ scale: [1, 0.8, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Orbit Ring 1 (Inner) */}
                <m.div
                    className="absolute w-32 h-32 rounded-full border border-cyan-500/30 border-t-cyan-400"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />

                {/* Orbit Ring 2 (Outer Reverse) */}
                <m.div
                    className="absolute w-48 h-48 rounded-full border border-blue-500/20 border-b-blue-400 border-l-transparent"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Scanner sweep line */}
                <m.div
                    className="absolute h-64 w-[1px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[1px]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
            </div>

            {/* ── Typography & Name ── */}
            <m.div className="relative text-center z-10 mb-8" style={{ perspective: 1000 }}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight flex items-center justify-center select-none overflow-hidden">
                    <m.span
                        className="text-white"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Murugan
                    </m.span>
                    <m.span
                        className="text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(135deg, #22d3ee, #3b82f6)' }}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        .dev
                    </m.span>
                </h1>
            </m.div>

            {/* ── Status Header ── */}
            <div className="w-64 sm:w-80 flex flex-col gap-3 relative z-10">
                <div className="flex justify-between items-end">
                    <span className="text-[10px] sm:text-xs font-mono font-semibold text-cyan-400 tracking-widest uppercase">
                        {statusText}
                    </span>
                    <span className="text-sm font-mono text-white tabular-nums font-bold">
                        {Math.floor(progress).toString().padStart(3, '0')}%
                    </span>
                </div>

                {/* ── Bar Container ── */}
                <div className="relative h-1.5 w-full bg-[#080e1a] rounded-full overflow-hidden border border-white/[0.05]">
                    {/* Progress Fill */}
                    <m.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-300 rounded-full"
                        style={{ width: `${progress}%` }}
                        layout
                        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    >
                        {/* Glow bleeding outwards */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[4px] opacity-80" />
                    </m.div>
                </div>
            </div>
        </m.div>
    );
}