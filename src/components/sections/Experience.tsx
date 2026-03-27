import { m } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Sparkles, ArrowRight, Star } from 'lucide-react';
import AnimatedSection from '../motion/AnimatedSection';

/* ─── Data ─────────────────────────────────────────────── */
const experiences = [
    {
        num: '01',
        type: 'work',
        role: 'Full Stack Developer',
        company: 'Pranion Technology',
        period: 'Apr 2024 – Present',
        duration: '1.7 yrs',
        location: 'Chennai, India',
        status: 'current',
        description:
            'Spearheading full-stack development for enterprise-grade applications. Architecting scalable microservices with Java & Spring Boot and building high-performance React UIs.',
        highlights: [
            'Galaxy Renewal — complex UI animations with Drupal CMS',
            'Tripuu — full travel-booking platform, Java + React',
            'Reduced build time 40% via CI/CD pipeline optimisation',
        ],
        skills: [
            { name: 'Java', level: 88 },
            { name: 'Spring Boot', level: 82 },
            { name: 'React', level: 90 },
            { name: 'SQL', level: 85 },
        ],
        accent: {
            from: '#22d3ee',
            to: '#3b82f6',
            glow: 'rgba(34,211,238,0.15)',
            badge: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300',
            ring: 'ring-cyan-500/30',
            dot: 'bg-cyan-400',
            bar: 'from-cyan-400 to-blue-500',
            icon: 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30',
            numColor: 'text-cyan-500/20',
            numGlow: 'text-cyan-400',
        },
    },
    {
        num: '02',
        type: 'education',
        role: 'B.Sc Computer Science',
        company: 'Ayya Nadar Janaki Ammal College',
        period: '2019 – 2022',
        duration: '3 yrs',
        location: 'Srivilliputtur, TN',
        status: 'completed',
        description:
            'Graduated with 75% — Specialised in web development, data structures, and software engineering. Demonstrated leadership and technical excellence throughout the programme.',
        highlights: [
            'Second place in college-level debugging competition',
            'Secretary — Nanotier CS Association',
            'Google Digital Marketing certified',
        ],
        skills: [
            { name: 'Data Structures', level: 85 },
            { name: 'Algorithms', level: 80 },
            { name: 'Web Dev', level: 88 },
            { name: 'OOP', level: 82 },
        ],
        accent: {
            from: '#818cf8',
            to: '#ec4899',
            glow: 'rgba(129,140,248,0.12)',
            badge: 'from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-300',
            ring: 'ring-indigo-500/30',
            dot: 'bg-indigo-400',
            bar: 'from-indigo-400 to-purple-500',
            icon: 'text-indigo-400 bg-indigo-500/10 border border-indigo-500/30',
            numColor: 'text-indigo-500/20',
            numGlow: 'text-indigo-400',
        },
    },
];

/* ─── Skill Bar ─────────────────────────────────────────── */
const SkillBar = ({
    name,
    level,
    bar,
    idx,
}: {
    name: string;
    level: number;
    bar: string;
    idx: number;
}) => (
    <div>
        <div className="flex justify-between items-center mb-1">
            <span className="text-[11px] font-medium text-slate-400">{name}</span>
            <span className="text-[11px] font-mono text-slate-500">{level}%</span>
        </div>
        <div
            className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={level}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${name} proficiency`}
        >
            <m.div
                className={`h-full rounded-full bg-gradient-to-r ${bar}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
        </div>
    </div>
);

/* ─── Experience Card ───────────────────────────────────── */
const ExperienceCard = ({
    exp,
    index,
}: {
    exp: (typeof experiences)[0];
    index: number;
}) => {
    const a = exp.accent;

    return (
        <m.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative"
        >
            {/* Glow halo on hover */}
            <div
                className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{
                    background: `linear-gradient(135deg, ${a.from}22, ${a.to}11)`,
                }}
                aria-hidden="true"
            />

            {/* Card */}
            <article
                className={`relative rounded-3xl border border-white/[0.07] bg-[#080e1a] overflow-hidden transition-all duration-500 group-hover:border-white/[0.14] group-hover:shadow-[0_24px_60px_${a.glow}]`}
            >
                {/* Top gradient bar */}
                <div
                    className="h-[3px] w-full"
                    style={{ background: `linear-gradient(to right, ${a.from}, ${a.to})` }}
                    aria-hidden="true"
                />

                <div className="p-7 sm:p-9">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-4 mb-7">
                        {/* Icon + type */}
                        <div className="flex items-center gap-3">
                            <div
                                className={`p-3 rounded-2xl ${a.icon} transition-all duration-300 group-hover:scale-110`}
                                aria-hidden="true"
                            >
                                {exp.type === 'work' ? (
                                    <Briefcase size={20} />
                                ) : (
                                    <GraduationCap size={20} />
                                )}
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                    {exp.type === 'work' ? 'Work Experience' : 'Education'}
                                </div>
                                {exp.status === 'current' && (
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                                            aria-hidden="true"
                                        />
                                        <span className="text-[10px] text-green-400 font-semibold">
                                            Current
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Period badge */}
                        <div
                            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold border bg-gradient-to-r ${a.badge} backdrop-blur-sm`}
                        >
                            {exp.period}
                        </div>
                    </div>

                    {/* Large number watermark */}
                    <div
                        className="absolute top-6 right-7 text-[5rem] font-black leading-none select-none pointer-events-none transition-all duration-500"
                        style={{
                            WebkitTextStroke: `1px ${a.from}22`,
                            color: 'transparent',
                        }}
                        aria-hidden="true"
                    >
                        {exp.num}
                    </div>

                    {/* Role + Company */}
                    <div className="mb-5 relative z-10">
                        <h3
                            className="text-2xl sm:text-3xl font-black text-white mb-1 leading-tight transition-all duration-300"
                            style={{
                                backgroundImage: `linear-gradient(135deg, #fff 60%, ${a.from})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                            <span className="font-semibold text-slate-300">{exp.company}</span>
                            <span
                                className="flex items-center gap-1 text-slate-500 text-xs"
                            >
                                <MapPin size={11} aria-hidden="true" />
                                {exp.location}
                            </span>
                            <span
                                className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-500"
                            >
                                {exp.duration}
                            </span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div
                        className="h-px mb-5 opacity-30"
                        style={{
                            background: `linear-gradient(to right, ${a.from}44, transparent)`,
                        }}
                        aria-hidden="true"
                    />

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <Star size={12} aria-hidden="true" style={{ color: a.from }} />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Highlights
                            </span>
                        </div>
                        <ul className="space-y-2">
                            {exp.highlights.map((h, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2.5 text-slate-400 text-sm"
                                >
                                    <ArrowRight
                                        size={12}
                                        className="mt-0.5 shrink-0 opacity-70"
                                        style={{ color: a.from }}
                                        aria-hidden="true"
                                    />
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Skill bars */}
                    <div className="mb-6 space-y-3">
                        <div className="flex items-center gap-2 mb-3">
                            <Sparkles size={12} aria-hidden="true" style={{ color: a.from }} />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Proficiency
                            </span>
                        </div>
                        {exp.skills.map((s, i) => (
                            <SkillBar
                                key={s.name}
                                name={s.name}
                                level={s.level}
                                bar={a.bar}
                                idx={i}
                            />
                        ))}
                    </div>

                    {/* Bottom tag row */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.05]">
                        {exp.skills.map((s) => (
                            <span
                                key={s.name}
                                className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/[0.04] border border-white/[0.07] text-slate-400 group-hover:border-white/[0.12] transition-colors"
                            >
                                {s.name}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </m.div>
    );
};

/* ─── Section ───────────────────────────────────────────── */
export default function Experience() {
    return (
        <section id="experience" className="py-24 sm:py-32 bg-[#030712] relative overflow-hidden">
            {/* Ambient background orbs */}
            <div
                className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-30"
                style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.08), transparent 70%)' }}
                aria-hidden="true"
            />
            <div
                className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-30"
                style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.08), transparent 70%)' }}
                aria-hidden="true"
            />

            <AnimatedSection>
                {/* Section heading */}
                <m.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16 sm:mb-20"
                >
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-5">
                        <Sparkles size={11} aria-hidden="true" />
                        Career Journey
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(135deg, #22d3ee 0%, #818cf8 50%, #ec4899 100%)',
                            }}
                        >
                            Experience
                        </span>
                        <br />
                        <span className="text-white">&amp; Education</span>
                    </h2>

                    <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                        A snapshot of where I've been, what I've built, and how I've grown.
                    </p>
                </m.div>

                {/* Cards grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {experiences.map((exp, i) => (
                        <ExperienceCard key={exp.num} exp={exp} index={i} />
                    ))}
                </div>

                {/* Bottom connector line */}
                <m.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-12 max-w-xs mx-auto h-px origin-left"
                    style={{
                        background:
                            'linear-gradient(to right, #22d3ee44, #818cf8, #ec489944)',
                    }}
                    aria-hidden="true"
                />
            </AnimatedSection>
        </section>
    );
}