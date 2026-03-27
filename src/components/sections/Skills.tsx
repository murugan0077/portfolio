import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, Wrench, Search, Layers } from 'lucide-react';
import AnimatedSection from '../motion/AnimatedSection';
import { fadeInUp } from '../motion/variants';

const categories = [
    { id: 'all', label: 'All Skills', icon: Layers },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'tools', label: 'Dev Tools', icon: Wrench },
];

const skills = [
    { name: 'React.js', category: 'frontend', icon: '⚛️', description: 'Interactive UIs', level: 90 },
    { name: 'TypeScript', category: 'frontend', icon: '📘', description: 'Type Safety', level: 80 },
    { name: 'JavaScript', category: 'frontend', icon: '📜', description: 'ES6+ Features', level: 88 },
    { name: 'HTML/CSS', category: 'frontend', icon: '🌐', description: 'Web Structure', level: 92 },
    { name: 'Tailwind', category: 'frontend', icon: '🎨', description: 'Utility Styling', level: 90 },
    { name: 'Java', category: 'backend', icon: '☕', description: 'Enterprise Backend', level: 88 },
    { name: 'Spring Boot', category: 'backend', icon: '🍃', description: 'Microservices', level: 82 },
    { name: 'SQL', category: 'database', icon: '🗄️', description: 'Data Querying', level: 85 },
    { name: 'PostgreSQL', category: 'database', icon: '🐘', description: 'Relational DB', level: 80 },
    { name: 'MySQL', category: 'database', icon: '🐬', description: 'Database Design', level: 78 },
    { name: 'Git', category: 'tools', icon: '🔀', description: 'Version Control', level: 88 },
    { name: 'Docker', category: 'tools', icon: '🐳', description: 'Containerisation', level: 70 },
];

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredSkills = skills.filter(skill => {
        const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
        const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="skills" className="py-24 sm:py-32 bg-[#030712] relative">
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden="true" />

            <AnimatedSection>
                <m.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block">
                        My Skill Store
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </m.div>

                {/* App Window */}
                <m.div
                    variants={fadeInUp}
                    className="max-w-5xl mx-auto glass rounded-2xl border border-white/[0.07] shadow-2xl overflow-hidden flex flex-col md:flex-row"
                    style={{ minHeight: 540 }}
                >
                    {/* Sidebar */}
                    <div className="w-full md:w-56 bg-[#0a0f1a] border-b md:border-b-0 md:border-r border-white/[0.06] p-4 flex flex-col gap-4">
                        {/* Window chrome */}
                        <div className="hidden md:flex items-center gap-1.5 pb-2" aria-hidden="true">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                        </div>

                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                            <input
                                type="search"
                                placeholder="Search skills…"
                                aria-label="Search skills"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/[0.04] border border-white/[0.07] rounded-lg pl-8 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-500/40 focus:outline-none transition-colors"
                            />
                        </div>

                        {/* Category list */}
                        <nav aria-label="Skill categories">
                            <div className="text-[10px] font-bold text-slate-400 mb-2 px-1 uppercase tracking-widest">
                                Categories
                            </div>
                            <div className="space-y-0.5 flex md:flex-col flex-row flex-wrap gap-1 md:gap-0" role="list">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        aria-pressed={activeCategory === cat.id}
                                        role="listitem"
                                        className={`relative flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-left ${
                                            activeCategory === cat.id
                                                ? 'text-cyan-400'
                                                : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                                        }`}
                                    >
                                        {activeCategory === cat.id && (
                                            <m.span
                                                layoutId="sidebarActive"
                                                aria-hidden="true"
                                                className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20"
                                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        <cat.icon size={14} className="relative z-10 shrink-0" aria-hidden="true" />
                                        <span className="relative z-10">{cat.label}</span>
                                    </button>
                                ))}
                            </div>
                        </nav>

                        {/* User chip — desktop only */}
                        <div className="hidden md:flex mt-auto pt-4 border-t border-white/[0.06] items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-[10px] font-bold text-white shrink-0" aria-hidden="true">
                                MS
                            </div>
                            <div>
                                <div className="text-xs text-white font-semibold">Murugan S</div>
                                <div className="text-[10px] text-slate-400">Full Stack Dev</div>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 p-5 sm:p-7 overflow-y-auto custom-scrollbar">
                        {/* Section title */}
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-base font-semibold text-white">
                                {categories.find(c => c.id === activeCategory)?.label}
                            </h3>
                            <span className="text-xs text-slate-400 font-mono">{filteredSkills.length} skills</span>
                        </div>

                        {/* Skills grid */}
                        <AnimatePresence mode="popLayout">
                            <m.div
                                key={activeCategory + searchQuery}
                                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                {filteredSkills.map((skill, i) => (
                                    <m.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: i * 0.04, duration: 0.25 }}
                                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                        className="group bg-[#0a0f1a] rounded-xl p-4 border border-white/[0.06] hover:border-cyan-500/25 transition-all duration-200"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-9 h-9 flex items-center justify-center bg-white/[0.04] rounded-lg border border-white/[0.07] group-hover:border-cyan-500/20 transition-colors text-lg shrink-0" aria-hidden="true">
                                                {skill.icon}
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors truncate">
                                                    {skill.name}
                                                </div>
                                                <div className="text-[11px] text-slate-400">
                                                    {skill.description}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Skill bar */}
                                        <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} proficiency`}>
                                            <m.div
                                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                            />
                                        </div>
                                    </m.div>
                                ))}
                            </m.div>
                        </AnimatePresence>

                        {filteredSkills.length === 0 && (
                            <div className="text-center py-16 text-slate-400 text-sm" role="status">
                                No skills found for &ldquo;{searchQuery}&rdquo;
                            </div>
                        )}
                    </div>
                </m.div>
            </AnimatedSection>
        </section>
    );
}