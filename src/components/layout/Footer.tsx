import { m } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const socialLinks = [
    { icon: Github, href: 'https://github.com/murugan0077', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/murugan', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:murugan25oct@gmail.com', label: 'Email' },
];

const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];

const ticker = ['React', 'Java', 'Spring Boot', 'TypeScript', 'PostgreSQL', 'Tailwind', 'Docker', 'Git', 'Full Stack', 'Clean Code'];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-[#030712] border-t border-white/[0.05] overflow-hidden" aria-label="Site footer">
            {/* Ticker strip */}
            <div className="border-b border-white/[0.04] py-3 overflow-hidden" aria-hidden="true">
                <div className="flex gap-8 animate-ticker whitespace-nowrap select-none">
                    {[...ticker, ...ticker].map((t, i) => (
                        <span key={i} className="text-xs font-mono text-slate-500 flex items-center gap-3">
                            <span className="w-1 h-1 rounded-full bg-cyan-500/40 inline-block" />
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-6xl mx-auto px-6 py-14 sm:py-16 relative z-10">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-14">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="text-2xl font-bold font-mono gradient-text">
                            &lt;Murugan /&gt;
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Crafting scalable digital solutions with modern web technologies. Focused on performance, accessibility, and user experience.
                        </p>
                        {/* Social icons */}
                        <div className="flex gap-2 pt-1">
                            {socialLinks.map((s) => (
                                <m.a
                                    key={s.label}
                                    href={s.href}
                                    target={s.href.startsWith('http') ? '_blank' : undefined}
                                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    aria-label={s.label}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors duration-200"
                                >
                                    <s.icon size={16} />
                                </m.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <nav aria-label="Footer navigation">
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Quick Links</h2>
                        <ul className="space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="group flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact info */}
                    <div>
                        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Contact</h2>
                        <div className="space-y-3">
                            <a
                                href="mailto:murugan25oct@gmail.com"
                                className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors group"
                                aria-label="Send email to Murugan"
                            >
                                <Mail size={13} className="shrink-0" />
                                murugan25oct@gmail.com
                                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a
                                href="tel:+918778987102"
                                className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors group"
                                aria-label="Call Murugan"
                            >
                                <span className="font-mono text-[11px]">📞</span>
                                +91 8778987102
                                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <span className="font-mono text-[11px]">📍</span>
                                Srivilliputtur, Tamil Nadu
                            </div>
                        </div>

                        {/* Availability pill */}
                        <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/8 border border-green-500/20 text-green-400 text-xs font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                            Available for work
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
                    <span>© {year} Murugan S. All rights reserved.</span>
                    <span className="font-mono">Built with React &amp; Framer Motion</span>
                </div>
            </div>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />
        </footer>
    );
}