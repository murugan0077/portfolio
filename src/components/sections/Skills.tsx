import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Wrench, Smartphone, Search, Code2, Server, Layout } from 'lucide-react';
import AnimatedSection from '../motion/AnimatedSection';
import { fadeInUp, staggerContainer, scaleIn } from '../motion/variants';

const categories = [
    { id: 'all', label: 'All Skills', icon: Code2 },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'tools', label: 'Tools', icon: Wrench },
];

const skills = [
    { name: 'React.js', category: 'frontend', icon: '⚛️', description: 'Building interactive UIs with modern hooks and patterns.' },
    { name: 'TypeScript', category: 'frontend', icon: '📘', description: 'Type-safe development for scalable applications.' },
    { name: 'Java', category: 'backend', icon: '☕', description: 'Enterprise-grade backend development.' },
    { name: 'Spring Boot', category: 'backend', icon: '🍃', description: 'Building robust microservices and REST APIs.' },
    { name: 'SQL', category: 'database', icon: '🗄️', description: 'Complex queries and database management.' },
    { name: 'Tailwind CSS', category: 'frontend', icon: '🎨', description: 'Rapid styling with utility-first framework.' },
    { name: 'PostgreSQL', category: 'database', icon: '🐘', description: 'Advanced relational database management.' },
    { name: 'Git', category: 'tools', icon: '🔀', description: 'Version control and collaboration.' },
    { name: 'Docker', category: 'tools', icon: '🐳', description: 'Containerization for consistent deployment.' },
    { name: 'JavaScript', category: 'frontend', icon: '📜', description: 'Modern ES6+ features and async programming.' },
    { name: 'HTML/CSS', category: 'frontend', icon: '🌐', description: 'Semantic markup and responsive design.' },
    { name: 'MySQL', category: 'database', icon: '🐬', description: 'Relational database design and optimization.' },
];

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredSkills = skills.filter(skill => {
        const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
        const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="skills" className="py-20 bg-slate-950 relative">
            <AnimatedSection>
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
                        Technical Arsenal
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
                    {/* Sidebar */}
                    <motion.div
                        variants={fadeInUp}
                        className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-6 sticky top-24"
                    >
                        <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search skills..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-slate-950/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                            />
                        </div>

                        <div className="space-y-1">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeCategory === category.id
                                            ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                                            : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                        }`}
                                >
                                    <category.icon size={18} />
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 gap-4"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredSkills.map((skill) => (
                                <motion.div
                                    layout
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    className="group bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors hover:bg-slate-800/50"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl p-2 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                                            {skill.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                                {skill.name}
                                            </h3>
                                            <p className="text-sm text-slate-400 leading-snug">
                                                {skill.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {filteredSkills.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-12 text-slate-500"
                            >
                                No skills found matching your search.
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </AnimatedSection>
        </section>
    );
}
