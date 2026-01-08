import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroText from '../hero/HeroText';
import CompilerCard from '../hero/CompilerCard';
import HeroBackground from '../hero/HeroBackground';

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20 md:pt-0"
        >
            <HeroBackground />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left Side - Text */}
                    <motion.div
                        style={isMobile ? {} : { y: y1 }}
                        className="w-full lg:w-1/2 flex flex-col justify-center gap-8"
                    >
                        <HeroText />
                    </motion.div>

                    {/* Right Side - Compiler */}
                    <motion.div
                        style={isMobile ? {} : { y: y2 }}
                        className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center perspective-1000"
                    >
                        <CompilerCard isActive={isMounted} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
