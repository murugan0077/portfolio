import { m } from 'framer-motion';
import { Award, MapPin, User, Code2 } from 'lucide-react';
import AnimatedSection from '../motion/AnimatedSection';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../motion/variants';

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <m.div variants={fadeInUp} className="text-center mb-16 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            {children}
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
    </m.div>
);

export default function About() {
    const achievements = [
        'Second place in debugging competition',
        'Secretary in Nanotier Association',
        'Google Digital Marketing Certified',
        'Website Design Certification (AJ)',
    ];

    return (
        <section id="about" className="py-24 sm:py-32 bg-[#030712] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" aria-hidden="true" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            <AnimatedSection className="relative z-10">
                <SectionHeading>About Me</SectionHeading>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-start">
                    {/* Left — Who I Am */}
                    <m.div variants={slideInLeft} className="relative group h-full">
                        <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/30 via-transparent to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                        <div className="relative glass rounded-2xl p-7 sm:p-8 h-full border border-white/[0.06] group-hover:border-cyan-500/20 transition-colors duration-500">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                                    <User size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Who I Am</h3>
                            </div>

                            <p className="text-slate-400 leading-relaxed mb-4 text-sm sm:text-base">
                                Passionate and results-driven Computer Science graduate specialising in full-stack development.
                                With expertise in modern web technologies including{' '}
                                <span className="text-cyan-400 font-medium">React.js</span>,{' '}
                                <span className="text-cyan-400 font-medium">Java</span>,{' '}
                                <span className="text-cyan-400 font-medium">Spring Boot</span>, and{' '}
                                <span className="text-cyan-400 font-medium">Tailwind CSS</span>, I create scalable and efficient solutions.
                            </p>
                            <p className="text-slate-400 leading-relaxed mb-6 text-sm sm:text-base">
                                Currently contributing to innovative projects at{' '}
                                <span className="text-white font-medium">Pranion Technology</span>, leveraging my
                                skills in Java, SQL, and application development to deliver high-quality software.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {['Full-Stack Dev', 'Java', 'React', 'Spring Boot', 'PostgreSQL'].map(t => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 text-sm">
                                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
                                <span className="text-slate-400">Srivilliputtur, Tamil Nadu</span>
                            </div>
                        </div>
                    </m.div>

                    {/* Right — Achievements + Stats */}
                    <m.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        {/* Achievements Card */}
                        <m.div variants={slideInRight} className="relative group">
                            <div className="absolute -inset-px bg-gradient-to-br from-blue-600/30 via-transparent to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                            <div className="relative glass rounded-2xl p-7 sm:p-8 border border-white/[0.06] group-hover:border-cyan-500/20 transition-colors duration-500">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                        <Award size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Achievements</h3>
                                </div>

                                <ul className="space-y-3.5">
                                    {achievements.map((achievement, index) => (
                                        <m.li
                                            key={index}
                                            variants={fadeInUp}
                                            className="flex items-start gap-3 group/item"
                                        >
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_6px_rgba(34,211,238,0.8)] group-hover/item:scale-150 transition-transform" aria-hidden="true" />
                                            <span className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-200 transition-colors">{achievement}</span>
                                        </m.li>
                                    ))}
                                </ul>
                            </div>
                        </m.div>

                        {/* Stats Cards */}
                        <m.div variants={fadeInUp} className="grid grid-cols-3 gap-3">
                            {[
                                { value: '1.7+', label: 'Years Exp' },
                                { value: '5+', label: 'Projects' },
                                { value: '2', label: 'Tech Stacks' },
                            ].map(({ value, label }) => (
                                <div
                                    key={label}
                                    className="glass rounded-xl p-4 sm:p-5 border border-white/[0.06] hover:border-cyan-500/20 transition-all duration-300 text-center group cursor-default"
                                >
                                    <div className="text-2xl sm:text-3xl font-bold gradient-text font-mono mb-1 group-hover:scale-110 transition-transform duration-200">
                                        {value}
                                    </div>
                                    <div className="text-slate-400 text-xs font-medium">{label}</div>
                                </div>
                            ))}
                        </m.div>

                        {/* Currently working on */}
                        <m.div variants={fadeInUp} className="glass rounded-xl p-5 border border-white/[0.06] flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 shrink-0">
                                <Code2 size={18} aria-hidden="true" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Currently at</div>
                                <div className="text-white font-semibold text-sm">Pranion Technology</div>
                                <div className="text-slate-400 text-xs mt-0.5">Full Stack Developer · April 2024 – Present</div>
                            </div>
                        </m.div>
                    </m.div>
                </div>
            </AnimatedSection>
        </section>
    );
}