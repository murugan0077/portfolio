import { useState, useEffect } from 'react';
import { m, useTransform, useScroll } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import HeroText from '../hero/HeroText';
import CompilerCard from '../hero/CompilerCard';
import HeroBackground from '../hero/HeroBackground';

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => { setIsMounted(true); }, []);

    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0"
        >
            <HeroBackground />

            <div className="container mx-auto px-5 sm:px-8 relative z-10 py-16 lg:py-0">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
                    {/* Left — Text */}
                    <div className="w-full lg:w-[48%] flex flex-col justify-center">
                        <HeroText />
                    </div>

                    {/* Right — Compiler */}
                    <div className="w-full lg:w-[52%] flex justify-center lg:justify-end items-center">
                        <CompilerCard isActive={isMounted} />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <m.div
                style={{ opacity }}
                aria-hidden="true"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">scroll</span>
                <m.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ willChange: 'transform' }}
                >
                    <ChevronDown size={16} className="text-slate-400" />
                </m.div>
            </m.div>
        </section>
    );
}