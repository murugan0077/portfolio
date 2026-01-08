import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function HeroText() {
    return (
        <motion.div
            className="text-left relative z-20 flex flex-col gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Greeting */}
            <motion.div variants={itemVariants}>
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20 backdrop-blur-sm">
                    Hi, I’m Murugan 👋
                </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
            >
                Java & React <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Developer
                </span>
            </motion.h1>

            {/* Supporting Line */}
            <motion.h2
                variants={itemVariants}
                className="text-lg md:text-xl font-medium text-slate-300"
            >
                Building clean, reliable web experiences for 1.7+ years.
            </motion.h2>

            {/* Paragraph */}
            <motion.p
                variants={itemVariants}
                className="text-slate-400 max-w-lg leading-relaxed text-base md:text-lg"
            >
                I specialize in building scalable backend systems with Java and crafting intuitive, high-performance user interfaces with React. Passionate about clean code and modern web technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-2"
            >
                <motion.a
                    href="/Resume.pdf"
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-cyan-500 text-slate-950 rounded-lg font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/25 flex items-center gap-2"
                >
                    <FileText size={18} /> View Resume
                </motion.a>

                <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-transparent text-white rounded-lg font-semibold border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                    View Projects <ArrowRight size={18} />
                </motion.a>
            </motion.div>
        </motion.div>
    );
}
