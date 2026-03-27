import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Globe, Server, Star, ArrowUpRight } from 'lucide-react';

/* ─── Data ──────────────────────────────────────────────── */
interface Project {
    id: number;
    num: string;
    title: string;
    description: string;
    tags: string[];
    category: string;
    image: string;
    featured: boolean;
    accentFrom: string;
    accentTo: string;
}

const projects: Project[] = [
    {
        id: 1,
        num: '01',
        title: 'Tripuu',
        description:
            'A comprehensive travel planning website built with React and Java backend. Features include itinerary management, booking integration, and interactive maps.',
        tags: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=900',
        featured: true,
        accentFrom: '#22d3ee',
        accentTo: '#3b82f6',
    },
    {
        id: 2,
        num: '02',
        title: 'Galaxy Renewal',
        description:
            'Responsive UI pages with complex animations. Integrated with Drupal for content management and optimised for high performance.',
        tags: ['React', 'Drupal', 'Framer Motion', 'Tailwind'],
        category: 'frontend',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=900',
        featured: false,
        accentFrom: '#818cf8',
        accentTo: '#ec4899',
    },
    {
        id: 3,
        num: '03',
        title: 'MLMS — Lead Management',
        description:
            'Enhanced admin CRM with bulk lead selection, reassignment, and multilingual support for automated updates.',
        tags: ['Laravel', 'MySQL', 'CRM', 'Automation'],
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900',
        featured: false,
        accentFrom: '#34d399',
        accentTo: '#3b82f6',
    },
    {
        id: 4,
        num: '04',
        title: 'OJPMS — Performance',
        description:
            'Continuous feedback and PIP system with customised filters using Livewire. Efficient bulk actions and approval workflows.',
        tags: ['Laravel', 'Livewire', 'Workflow'],
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=900',
        featured: false,
        accentFrom: '#f59e0b',
        accentTo: '#ef4444',
    },
    {
        id: 5,
        num: '05',
        title: 'E-Commerce Platform',
        description:
            'Full-featured Java e-commerce console application with cart, orders, and persistent PostgreSQL storage.',
        tags: ['Java', 'PostgreSQL'],
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=900',
        featured: false,
        accentFrom: '#a78bfa',
        accentTo: '#ec4899',
    },
    {
        id: 6,
        num: '06',
        title: 'Task Management',
        description:
            'Collaborative task management system with real-time Firebase updates and team collaboration features.',
        tags: ['React', 'Firebase', 'Tailwind'],
        category: 'frontend',
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=900',
        featured: false,
        accentFrom: '#22d3ee',
        accentTo: '#818cf8',
    },
    {
        id: 7,
        num: '07',
        title: 'Build My Own Jarvis',
        description:
            'Personal AI assistant capable of voice interaction, task automation, and system control built in Python.',
        tags: ['Python', 'NLP', 'Automation', 'Speech Recognition'],
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=900',
        featured: false,
        accentFrom: '#34d399',
        accentTo: '#22d3ee',
    },
    {
        id: 8,
        num: '08',
        title: 'Meenatchi Traders',
        description:
            'Live e-commerce site with real-time Firebase database, React UI, and dynamic inventory management.',
        tags: ['React', 'Firebase', 'Tailwind', 'Context API'],
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=900',
        featured: true,
        accentFrom: '#f59e0b',
        accentTo: '#ec4899',
    },
];

const filters = [
    { id: 'all', label: 'All', icon: Layers },
    { id: 'fullstack', label: 'Full Stack', icon: Server },
    { id: 'frontend', label: 'Frontend', icon: Globe },
];

/* ─── Featured Hero Card ─────────────────────────────────── */
const FeaturedCard = ({ project, index }: { project: Project; index: number }) => (
    <m.div
        layout
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group relative md:col-span-2 rounded-3xl overflow-hidden cursor-pointer"
        style={{ minHeight: '380px' }}
    >
        {/* Full-bleed image */}
        <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            width="900"
            height="500"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
                background: `linear-gradient(135deg, rgba(3,7,18,0.96) 0%, rgba(3,7,18,0.75) 50%, rgba(3,7,18,0.4) 100%)`,
            }}
            aria-hidden="true"
        />

        {/* Accent border-glow */}
        <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
                boxShadow: `inset 0 0 0 1.5px ${project.accentFrom}55`,
            }}
            aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8 sm:p-10" style={{ minHeight: '380px' }}>
            {/* Top row */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <span
                        className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border"
                        style={{
                            color: project.accentFrom,
                            borderColor: `${project.accentFrom}44`,
                            background: `${project.accentFrom}11`,
                        }}
                    >
                        Featured
                    </span>
                    <span className="font-mono text-[10px] text-slate-500">{project.num}</span>
                </div>
                <div className="flex gap-2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live site for ${project.title}`}
                        className="p-2.5 rounded-xl backdrop-blur-md border border-white/10 bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                        <ExternalLink size={15} aria-hidden="true" />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${project.title} on GitHub`}
                        className="p-2.5 rounded-xl backdrop-blur-md border border-white/10 bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                        <Github size={15} aria-hidden="true" />
                    </a>
                </div>
            </div>

            {/* Bottom content */}
            <div>
                <h3
                    className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight group-hover:translate-x-1 transition-transform duration-300"
                    style={{
                        textShadow: `0 0 40px ${project.accentFrom}33`,
                    }}
                >
                    {project.title}
                    <ArrowUpRight
                        size={28}
                        className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: project.accentFrom }}
                        aria-hidden="true"
                    />
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 max-w-lg">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-sm border"
                            style={{
                                color: project.accentFrom,
                                borderColor: `${project.accentFrom}33`,
                                background: `${project.accentFrom}11`,
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </m.div>
);

/* ─── Regular Project Card ───────────────────────────────── */
const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <m.div
        layout
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93 }}
        transition={{ duration: 0.45, delay: index * 0.06 }}
        whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
        className="group relative bg-[#080e1a] rounded-2xl border border-white/[0.07] hover:border-white/[0.15] transition-colors duration-300 flex flex-col"
        style={{ '--accent-from': project.accentFrom } as React.CSSProperties}
    >
        {/* Gradient accent top bar */}
        <div
            className="h-[2px] w-full shrink-0 rounded-t-2xl"
            style={{ background: `linear-gradient(to right, ${project.accentFrom}, ${project.accentTo})` }}
            aria-hidden="true"
        />

        {/* ── Image zone ──────────────────────────────────────────
            Key fix: the overflow-hidden sits only on the img wrapper.
            The fade gradient is a SIBLING placed after it via
            negative margin-top so it overlaps the seam without being
            clipped. This eliminates the bottom-edge flicker entirely.
        ─────────────────────────────────────────────────────────── */}
        <div className="relative" style={{ height: '180px' }}>

            {/* Clip only the image — keep gradient outside this div */}
            <div
                className="absolute inset-0 overflow-hidden rounded-none"
                style={{ transform: 'translateZ(0)' }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width="900"
                    height="500"
                    className="w-full h-full object-cover"
                    style={{
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                        display: 'block',
                        transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
                    }}
                />
            </div>

            {/* Gradient — sibling of the overflow-hidden div, NOT clipped.
                Positioned absolutely over the zone, extending 2px below
                so it bleeds into the card body and seals the boundary. */}
            <div
                className="absolute inset-x-0 top-0 pointer-events-none z-10"
                aria-hidden="true"
                style={{
                    bottom: '-2px',
                    background: `linear-gradient(to top, #080e1a 18%, rgba(8,14,26,0.55) 55%, transparent 100%)`,
                }}
            />

            {/* Number watermark */}
            <span
                className="absolute top-3 left-3 font-black text-[2.5rem] leading-none select-none pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300 z-20"
                style={{ color: project.accentFrom }}
                aria-hidden="true"
            >
                {project.num}
            </span>

            {/* Action buttons */}
            <div className="absolute top-3 right-3 flex gap-1.5 z-20 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live site for ${project.title}`}
                    className="p-2 rounded-xl backdrop-blur-md bg-black/50 border border-white/10 text-white hover:bg-white/20 transition-colors"
                >
                    <ExternalLink size={13} aria-hidden="true" />
                </a>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub source for ${project.title}`}
                    className="p-2 rounded-xl backdrop-blur-md bg-black/50 border border-white/10 text-white hover:bg-white/20 transition-colors"
                >
                    <Github size={13} aria-hidden="true" />
                </a>
            </div>
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                    style={
                        {
                            '--tw-gradient-from': project.accentFrom,
                            '--tw-gradient-to': project.accentTo,
                        } as React.CSSProperties
                    }
                >
                    <span
                        className="group-hover:text-transparent group-hover:bg-clip-text"
                        style={{
                            backgroundImage: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
                        }}
                    >
                        {project.title}
                    </span>
                </h3>
                {project.featured && (
                    <Star
                        size={13}
                        className="shrink-0 mt-0.5"
                        style={{ color: project.accentFrom }}
                        fill={project.accentFrom}
                        aria-label="Featured project"
                    />
                )}
            </div>

            <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium border bg-white/[0.03] text-slate-400 border-white/[0.07] group-hover:border-white/[0.14] transition-colors"
                    >
                        {tag}
                    </span>
                ))}
                {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-medium text-slate-600">
                        +{project.tags.length - 3}
                    </span>
                )}
            </div>
        </div>

        {/* Bottom glow on hover */}
        <div
            className="absolute bottom-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-b-2xl"
            style={{
                background: `linear-gradient(to top, ${project.accentFrom}0d, transparent)`,
            }}
            aria-hidden="true"
        />
    </m.div>
);

/* ─── Section ────────────────────────────────────────────── */
export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filtered =
        activeFilter === 'all'
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    const featured = filtered.filter((p) => p.featured);
    const regular = filtered.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-24 sm:py-32 bg-[#030712] relative overflow-hidden">
            {/* Ambient orbs */}
            <div
                className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-20"
                style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.12), transparent 70%)' }}
                aria-hidden="true"
            />
            <div
                className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-20"
                style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.12), transparent 70%)' }}
                aria-hidden="true"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* ── Heading ── */}
                <m.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-14"
                >
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-5">
                        <Layers size={11} aria-hidden="true" />
                        {projects.length} Projects Shipped
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    'linear-gradient(135deg, #22d3ee 0%, #818cf8 50%, #ec4899 100%)',
                            }}
                        >
                            Featured
                        </span>{' '}
                        <span className="text-white">Projects</span>
                    </h2>

                    <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                        Real-world applications I've designed, built, and shipped.
                    </p>
                </m.div>

                {/* ── Filter bar ── */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex justify-center mb-12"
                    role="group"
                    aria-label="Filter projects by category"
                >
                    <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/[0.07]">
                        {filters.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => setActiveFilter(f.id)}
                                aria-pressed={activeFilter === f.id}
                                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                    activeFilter === f.id
                                        ? 'text-slate-950'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                {activeFilter === f.id && (
                                    <m.div
                                        layoutId="filterPill"
                                        className="absolute inset-0 rounded-xl"
                                        style={{
                                            background:
                                                'linear-gradient(135deg, #22d3ee, #3b82f6)',
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                        aria-hidden="true"
                                    />
                                )}
                                <f.icon size={14} className="relative z-10" aria-hidden="true" />
                                <span className="relative z-10">{f.label}</span>
                            </button>
                        ))}
                    </div>
                </m.div>

                {/* ── Project Grid ── */}
                <AnimatePresence mode="popLayout">
                    <m.div
                        key={activeFilter}
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {/* Featured cards — span 2 columns */}
                        {featured.map((p, i) => (
                            <FeaturedCard key={p.id} project={p} index={i} />
                        ))}

                        {/* Regular cards */}
                        {regular.map((p, i) => (
                            <ProjectCard key={p.id} project={p} index={i + featured.length} />
                        ))}
                    </m.div>
                </AnimatePresence>

                {/* ── Bottom stat bar ── */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16 text-center"
                >
                    {[
                        { value: '8+', label: 'Projects Shipped' },
                        { value: '3', label: 'Tech Stacks' },
                        { value: '100%', label: 'With Care' },
                    ].map(({ value, label }) => (
                        <div key={label}>
                            <div
                                className="text-3xl font-black text-transparent bg-clip-text mb-1"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(135deg, #22d3ee, #818cf8)',
                                }}
                            >
                                {value}
                            </div>
                            <div className="text-xs text-slate-500 font-medium">{label}</div>
                        </div>
                    ))}
                </m.div>
            </div>
        </section>
    );
}
