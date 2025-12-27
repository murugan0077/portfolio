import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react';

export default function HeroText() {
    return (
        <div className="text-left mb-4 md:mb-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-3"
            >
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20 backdrop-blur-sm">
                    Available for new opportunities
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-3 tracking-tight text-white"
            >
                Murugan S
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl font-medium text-slate-400 mb-6 flex items-center gap-3"
            >
                <span className="text-cyan-400">Java Developer</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span className="text-blue-400">React Engineer</span>
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-3 mb-6"
            >
                <a
                    href="#contact"
                    className="px-5 py-2.5 bg-cyan-500 text-slate-950 rounded-lg font-semibold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/25 flex items-center gap-2 text-sm"
                >
                    Get In Touch <ArrowRight size={16} />
                </a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="px-5 py-2.5 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors border border-slate-700 flex items-center gap-2 text-sm"
                >
                    <FileText size={16} /> View Resume
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex gap-4"
            >
                {[
                    { href: "https://github.com/murugan", icon: Github },
                    { href: "https://linkedin.com/in/murugan", icon: Linkedin },
                    { href: "mailto:murugan25oct@gmail.com", icon: Mail }
                ].map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                        <item.icon size={20} />
                    </a>
                ))}
            </motion.div>
        </div>
    );
}
