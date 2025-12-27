import { Suspense, useState, useEffect } from 'react';
import HeroText from '../hero/HeroText';
import CompilerCard from '../hero/CompilerCard';
import RubiksCube from '../hero/RubiksCube';

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-2 md:pt-0">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* Ambient Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 h-full">
                    {/* Left Side - Text & Cube */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
                        <HeroText />
                        <div className="w-full h-[180px] md:h-[250px] relative -mt-6 md:-mt-8">
                            <Suspense fallback={
                                <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
                                    Loading...
                                </div>
                            }>
                                <RubiksCube />
                            </Suspense>
                        </div>
                    </div>

                    {/* Right Side - Compiler */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
                        <CompilerCard isActive={isMounted} />
                    </div>
                </div>
            </div>
        </section>
    );
}

