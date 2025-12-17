import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../motion/variants';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 2 }}
                    className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-cyan-500/10 blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-blue-600/10 blur-[120px]"
                />
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center px-6 max-w-5xl mx-auto"
            >
                <motion.div variants={fadeInUp} className="mb-4 inline-block">
                    <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20 backdrop-blur-sm">
                        Available for new opportunities
                    </span>
                </motion.div>

                <motion.h1
                    variants={fadeInUp}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white"
                >
                    Murugan S
                </motion.h1>

                <motion.h2
                    variants={fadeInUp}
                    className="text-2xl md:text-4xl font-medium text-slate-400 mb-8"
                >
                    Java + React Developer
                </motion.h2>

                <motion.p
                    variants={fadeInUp}
                    className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    With 1.7 years of experience building scalable web applications.
                    Specializing in full-stack development with Java, Spring Boot, and React.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex justify-center space-x-6 mb-12">
                    {[
                        { href: "https://github.com/murugan", icon: Github },
                        { href: "https://linkedin.com/in/murugan", icon: Linkedin },
                        { href: "mailto:murugan25oct@gmail.com", icon: Mail }
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 bg-slate-800/50 rounded-full text-cyan-400 hover:text-white hover:bg-cyan-500 transition-colors border border-slate-700 hover:border-cyan-500"
                        >
                            <item.icon className="w-6 h-6" />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-cyan-500 text-slate-950 rounded-full font-semibold text-lg hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/25"
                    >
                        Get In Touch
                    </motion.a>
                    <motion.a
                        href="/resume.pdf" // Placeholder for resume link
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-slate-800 text-white rounded-full font-semibold text-lg hover:bg-slate-700 transition-colors border border-slate-700 flex items-center justify-center gap-2"
                    >
                        <FileText size={20} />
                        View Resume
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.a
                href="#about"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-slate-500 hover:text-cyan-400 transition-colors"
            >
                <ChevronDown className="w-8 h-8" />
            </motion.a>
        </section>
    );
}
