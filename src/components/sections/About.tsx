import { m } from 'framer-motion';
import { Award, Code2, Coffee, Zap, User, Fingerprint } from 'lucide-react';


export default function About() {
    return (
        <section id="about" className="py-24 sm:py-32 bg-[#030712] relative overflow-hidden">
            {/* Ambient Backgrounds */}
            <div
                className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-20"
                style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.1), transparent 70%)' }}
                aria-hidden="true"
            />
            <div
                className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-20"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.1), transparent 70%)' }}
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* ── Heading ── */}
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-5">
                        <Fingerprint size={12} aria-hidden="true" />
                        Who I Am
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
                        <span className="text-white">Behind the</span>{' '}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
                            }}
                        >
                            Code
                        </span>
                    </h2>
                </m.div>

                {/* ── Bento Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-6xl mx-auto">

                    {/* Left main card: Bio */}
                    <m.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-7 xl:col-span-8 group relative rounded-3xl overflow-hidden glass border border-white/[0.07] bg-[#0a0f1a] hover:border-cyan-500/30 transition-colors duration-500 p-8 sm:p-10 flex flex-col justify-center"
                    >
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                            style={{
                                background: 'radial-gradient(800px circle at right top, rgba(34,211,238,0.05), transparent 40%)',
                            }}
                            aria-hidden="true"
                        />
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 text-cyan-400">
                                <User size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-white">About Me</h3>
                        </div>

                        <div className="space-y-6 text-slate-400 leading-relaxed text-sm sm:text-base relative z-10">
                            <p>
                                I'm a passionate and results-driven Computer Science graduate who loves bridging the gap between elegant engineering and beautiful user experiences. I specialise in full-stack development, weaving together robust backend logic with highly interactive frontend interfaces.
                            </p>
                            <p>
                                My primary toolkit involves building scalable microservices with <span className="font-semibold text-white">Java &amp; Spring Boot</span>, and crafting high-performance, dynamic UIs with <span className="font-semibold text-white">React.js &amp; Tailwind CSS</span>.
                            </p>
                            <p>
                                I treat code not just as a set of instructions, but as a craft. When I'm not writing functions, orchestrating databases, or refining animations, I'm usually diving into new system architectures to constantly sharpen my skillset. I have a growing passion for <span className="font-semibold text-white">Artificial Intelligence</span>—recently earning my Anthropic AI Fluency certification with a perfect score—and I plan to take many more AI courses to integrate advanced smart features into my development stack.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2 relative z-10">
                            {['Creative Thinker', 'Problem Solver', 'AI Enthusiast', 'Clean Code Advocate'].map(t => (
                                <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/[0.04] text-slate-400 border border-white/[0.05] group-hover:border-cyan-500/20 transition-colors">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </m.div>

                    {/* Right column */}
                    <div className="md:col-span-5 xl:col-span-4 grid grid-rows-2 gap-5">
                        
                        {/* Top: Current Role */}
                        <m.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative rounded-3xl overflow-hidden glass border border-white/[0.07] bg-[#0a0f1a] hover:border-blue-500/30 transition-colors duration-500 p-7 lg:p-9 flex flex-col justify-center"
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(400px circle at left bottom, rgba(59,130,246,0.08), transparent 50%)',
                                }}
                                aria-hidden="true"
                            />
                            <div className="flex items-center justify-between mb-5 relative z-10">
                                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                    <Code2 size={20} />
                                </div>
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                                    Active
                                </span>
                            </div>
                            <div className="relative z-10">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Currently at</div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Pranion Technology</h3>
                                <p className="text-sm text-slate-400">
                                    Full Stack Developer
                                    <br />
                                    <span className="text-xs text-slate-500">April 2024 – Present</span>
                                </p>
                            </div>
                        </m.div>

                        {/* Bottom: Achievements */}
                        <m.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative rounded-3xl overflow-hidden glass border border-white/[0.07] bg-[#0a0f1a] hover:border-purple-500/30 transition-colors duration-500 p-7 lg:p-9 flex flex-col justify-center"
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(400px circle at top right, rgba(147,51,234,0.08), transparent 50%)',
                                }}
                                aria-hidden="true"
                            />
                            <div className="flex items-center gap-3 mb-5 relative z-10">
                                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                                    <Award size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">Achievements</h3>
                            </div>
                            <ul className="space-y-3 relative z-10">
                                {[
                                    'Anthropic: AI Fluency Certified (10/10)',
                                    '2nd place in debugging comp',
                                    'Secretary in Nanotier Assoc',
                                    'Google Digital Marketing Certified',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-purple-400 shrink-0" aria-hidden="true" />
                                        <span className="leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </m.div>
                    </div>

                </div>

                {/* ── Wide Stats Bar ── */}
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-5 max-w-6xl mx-auto flex flex-col md:flex-row gap-5"
                >
                    {[
                        { icon: Zap, value: '1.7+', label: 'Years Experience', color: 'text-cyan-400' },
                        { icon: Award, value: '8+', label: 'Successful Projects', color: 'text-blue-400' },
                        { icon: Coffee, value: '10k+', label: 'Lines of Code', color: 'text-purple-400' },
                    ].map((stat, i) => (
                        <div
                            key={stat.label}
                            className="flex-1 group glass bg-[#0a0f1a] border border-white/[0.07] rounded-3xl p-6 sm:p-8 flex items-center gap-5 hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] ${stat.color} group-hover:scale-110 group-hover:bg-white/[0.05] transition-all duration-300`}>
                                <stat.icon size={28} />
                            </div>
                            <div>
                                <div className={`text-2xl sm:text-3xl font-black mb-1 ${stat.color}`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </m.div>

            </div>
        </section>
    );
}