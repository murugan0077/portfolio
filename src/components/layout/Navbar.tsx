import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    activeSection: string;
}

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
    };

    return (
        <>
            <m.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                aria-label="Main navigation"
                className={`fixed top-3 sm:top-5 left-0 right-0 mx-auto w-[94%] md:w-[88%] max-w-6xl z-50 rounded-2xl transition-all duration-500 ${
                    isScrolled
                        ? 'bg-[#030712]/80 backdrop-blur-2xl border border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] py-3'
                        : 'bg-[#030712]/30 backdrop-blur-xl border border-white/[0.04] shadow-none py-4'
                }`}
            >
                <div className="px-5 sm:px-7 flex justify-between items-center">
                    {/* Logo */}
                    <m.button
                        onClick={() => scrollToSection('home')}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        aria-label="Go to home section"
                        className="relative group"
                    >
                        <span className="text-xl sm:text-2xl font-bold font-mono gradient-text">
                            &lt;Murugan /&gt;
                        </span>
                        {/* Logo underline on hover */}
                        <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full" />
                    </m.button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1" role="menubar">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                role="menuitem"
                                aria-current={activeSection === item.id ? 'page' : undefined}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                                    activeSection === item.id
                                        ? 'text-cyan-400'
                                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                                }`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <m.span
                                        layoutId="navPill"
                                        className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20"
                                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <m.a
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open resume PDF in new tab"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 rounded-lg shadow-lg shadow-cyan-500/20 transition-shadow hover:shadow-cyan-500/40"
                        >
                            Resume
                        </m.a>

                        <m.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isMobileMenuOpen ? (
                                    <m.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <X size={20} />
                                    </m.span>
                                ) : (
                                    <m.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <Menu size={20} />
                                    </m.span>
                                )}
                            </AnimatePresence>
                        </m.button>
                    </div>
                </div>
            </m.nav>

            {/* Mobile Menu — full screen overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <m.div
                            className="fixed inset-0 z-40 bg-[#030712]/80 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            aria-hidden="true"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Panel */}
                        <m.div
                            id="mobile-menu"
                            role="menu"
                            aria-label="Mobile navigation"
                            className="fixed top-20 left-3 right-3 z-50 md:hidden rounded-2xl bg-[#0d1117] border border-white/[0.08] shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, y: -20, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.97 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="p-4 space-y-1">
                                {navItems.map((item, i) => (
                                    <m.button
                                        key={item.id}
                                        role="menuitem"
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05, duration: 0.3 }}
                                        onClick={() => scrollToSection(item.id)}
                                        aria-current={activeSection === item.id ? 'page' : undefined}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 ${
                                            activeSection === item.id
                                                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                                                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                                        }`}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full ${activeSection === item.id ? 'bg-cyan-400' : 'bg-slate-700'}`} />
                                        {item.label}
                                    </m.button>
                                ))}
                            </div>
                            <div className="px-4 pb-4">
                                <a
                                    href="/Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open resume PDF in new tab"
                                    className="block w-full text-center py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20"
                                >
                                    View Resume
                                </a>
                            </div>
                        </m.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}