import { useState, useEffect } from 'react';
import { m } from 'framer-motion';
import { ArrowRight, FileText, Sparkles, Github, Linkedin } from 'lucide-react';

const ROLES = [
    'Full Stack Developer',
    'Java Engineer',
    'React Specialist',
    'Spring Boot Expert',
];

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};
const item = {
    hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
    visible: {
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function HeroText() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [typing, setTyping] = useState(true);

    // Typewriter effect for role cycling
    useEffect(() => {
        const role = ROLES[roleIndex];
        let i = displayed.length;

        if (typing) {
            if (i < role.length) {
                const t = setTimeout(() => setDisplayed(role.slice(0, i + 1)), 60);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => setTyping(false), 2200);
                return () => clearTimeout(t);
            }
        } else {
            if (i > 0) {
                const t = setTimeout(() => setDisplayed(role.slice(0, i - 1)), 35);
                return () => clearTimeout(t);
            } else {
                setRoleIndex(r => (r + 1) % ROLES.length);
                setTyping(true);
            }
        }
    }, [displayed, typing, roleIndex]);

    return (
        <m.div
            className="text-left relative z-20 flex flex-col gap-5 md:gap-6"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {/* Badge */}
            <m.div variants={item}>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider border border-cyan-500/25 bg-cyan-500/8 text-cyan-400">
                    <Sparkles size={11} className="animate-pulse" aria-hidden="true" />
                    Available for opportunities
                </span>
            </m.div>

            {/* Main heading — single h1 */}
            <m.div variants={item} className="space-y-2">
                <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.05]">
                    <span className="text-white">Hi, I build</span>
                    <br />
                    <span
                        className="text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(135deg, #22d3ee 0%, #6366f1 50%, #3b82f6 100%)' }}
                    >
                        great software
                    </span>
                </h1>
            </m.div>

            {/* Animated role */}
            <m.div variants={item} className="flex items-center gap-2" aria-live="polite" aria-atomic="true">
                <span className="text-slate-400 text-base font-mono" aria-hidden="true">&gt;&gt;</span>
                <span className="text-base sm:text-lg font-mono text-cyan-300 min-h-[1.75rem]">
                    {displayed}
                    <span className="inline-block w-[2px] h-5 bg-cyan-400 ml-0.5 align-middle animate-pulse" aria-hidden="true" />
                </span>
            </m.div>

            {/* Description */}
            <m.p variants={item} className="text-slate-400 max-w-md leading-relaxed text-sm sm:text-base">
                Building{' '}
                <span className="text-slate-200 font-medium">scalable backend systems</span> with Java &amp; Spring Boot,
                and crafting{' '}
                <span className="text-slate-200 font-medium">high-performance UIs</span> with React &amp; TypeScript.
                Currently at <span className="text-cyan-400 font-medium">Pranion Technology</span>.
            </m.p>

            {/* Stats */}
            <m.div variants={item} className="flex items-center gap-5 sm:gap-7">
                {[
                    { value: '1.7+', label: 'Years' },
                    { value: '8+', label: 'Projects' },
                    { value: '10+', label: 'Technologies' },
                ].map(({ value, label }, i) => (
                    <div key={i} className="flex flex-col">
                        <span
                            className="text-xl sm:text-2xl font-bold font-mono text-transparent bg-clip-text"
                            style={{ backgroundImage: 'linear-gradient(135deg, #22d3ee, #3b82f6)' }}
                        >
                            {value}
                        </span>
                        <span className="text-[11px] text-slate-400 mt-0.5">{label}</span>
                    </div>
                )).flatMap((el, i, arr) =>
                    i < arr.length - 1 ? [el, <div key={`div-${i}`} className="w-px h-8 bg-white/[0.07]" aria-hidden="true" />] : [el]
                )}
            </m.div>

            {/* CTAs */}
            <m.div variants={item} className="flex flex-wrap gap-3 pt-1">
                <m.a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View resume — opens in new tab"
                    whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(34,211,238,0.35)' }}
                    whileTap={{ scale: 0.97 }}
                    style={{ 
                        background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
                        willChange: 'transform',
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#030712] shadow-lg shadow-cyan-500/20 transition-shadow"
                >
                    <FileText size={15} aria-hidden="true" />
                    View Resume
                </m.a>

                <m.a
                    href="#projects"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    aria-label="Jump to projects section"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-white/[0.12] text-white hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                >
                    Projects
                    <ArrowRight size={15} aria-hidden="true" />
                </m.a>
            </m.div>

            {/* Social links */}
            <m.div variants={item} className="flex items-center gap-3">
                <span className="text-[11px] text-slate-400 font-mono">find me →</span>
                <m.a
                    href="https://github.com/murugan0077"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit GitHub profile (opens in new tab)"
                    whileHover={{ y: -2, color: '#ffffff' }}
                    className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-400 hover:border-cyan-500/25 transition-all"
                >
                    <Github size={14} aria-hidden="true" />
                </m.a>
                <m.a
                    href="https://linkedin.com/in/murugan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn profile (opens in new tab)"
                    whileHover={{ y: -2, color: '#ffffff' }}
                    className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-400 hover:border-cyan-500/25 transition-all"
                >
                    <Linkedin size={14} aria-hidden="true" />
                </m.a>
                <div className="ml-1 flex items-center gap-1.5 text-[11px] text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                    Srivilliputtur, India
                </div>
            </m.div>
        </m.div>
    );
}