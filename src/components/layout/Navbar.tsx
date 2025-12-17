import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-slate-950/80 backdrop-blur-md shadow-lg py-4 border-b border-slate-800/50'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div
                    className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
                    onClick={() => scrollToSection('home')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Murugan.dev
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative text-sm font-medium transition-colors duration-300 ${activeSection === item.id ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                                }`}
                        >
                            {item.label}
                            {activeSection === item.id && (
                                <motion.span
                                    layoutId="activeSection"
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50"
                    >
                        <div className="flex flex-col space-y-4 p-6">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-left text-lg font-medium transition-colors duration-300 ${activeSection === item.id ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                                        }`}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
