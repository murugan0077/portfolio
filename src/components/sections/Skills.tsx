import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Layout,
    Server,
    Database,
    Wrench,
    Smartphone,
    Search,
    Layers
} from 'lucide-react';
import AnimatedSection from '../motion/AnimatedSection';
import { fadeInUp } from '../motion/variants';

const categories = [
    { id: 'all', label: 'All', icon: Layers },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'tools', label: 'Tools', icon: Wrench },
    // { id: 'mobile', label: 'Mobile Development', icon: Smartphone },
];

const skills = [
    { name: 'React.js', category: 'frontend', icon: '⚛️', description: 'Interactive UIs' },
    { name: 'TypeScript', category: 'frontend', icon: '📘', description: 'Type Safety' },
    { name: 'Java', category: 'backend', icon: '☕', description: 'Enterprise Backend' },
    { name: 'Spring Boot', category: 'backend', icon: '🍃', description: 'Microservices' },
    { name: 'SQL', category: 'database', icon: '🗄️', description: 'Data Querying' },
    { name: 'Tailwind', category: 'frontend', icon: '🎨', description: 'Utility Styling' },
    { name: 'PostgreSQL', category: 'database', icon: '🐘', description: 'Relational DB' },
    { name: 'Git', category: 'tools', icon: '🔀', description: 'Version Control' },
    { name: 'Docker', category: 'tools', icon: '🐳', description: 'Containerization' },
    { name: 'JavaScript', category: 'frontend', icon: '📜', description: 'ES6+ Features' },
    { name: 'HTML/CSS', category: 'frontend', icon: '🌐', description: 'Web Structure' },
    { name: 'MySQL', category: 'database', icon: '🐬', description: 'Database Design' },
    { name: 'React Native', category: 'mobile', icon: '📱', description: 'Cross-platform Apps' },
    { name: 'Expo', category: 'mobile', icon: '🚀', description: 'Rapid Mobile Dev' },
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
                <div className="container mx-auto px-4">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
                            My Skill Store
                        </h2>
                    </motion.div>

                    {/* Window Container */}
                    <motion.div
                        variants={fadeInUp}
                        className="max-w-6xl mx-auto bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]"
                    >
                        {/* Sidebar */}
                        <div className="w-full md:w-64 bg-slate-900/50 border-r border-slate-800 p-4 flex flex-col">
                            {/* Window Controls (Mobile hidden, Desktop visible) */}
                            <div className="hidden md:flex gap-2 mb-6 px-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>

                            {/* Search */}
                            <div className="relative mb-6">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-md pl-9 pr-3 py-1.5 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="text-xs font-semibold text-slate-500 mb-2 px-2 uppercase tracking-wider">
                                Categories
                            </div>

                            <div className="space-y-0.5 flex-1">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeCategory === category.id
                                            ? 'bg-cyan-500/10 text-cyan-400'
                                            : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                            }`}
                                    >
                                        <category.icon size={16} />
                                        {category.label}
                                    </button>
                                ))}
                            </div>

                            {/* User Profile */}
                            <div className="mt-auto pt-4 border-t border-slate-800 flex items-center gap-3 px-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-white">
                                    MS
                                </div>
                                <div className="text-sm">
                                    <div className="text-white font-medium">Murugan S</div>
                                    <div className="text-slate-500 text-xs">Developer</div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 bg-slate-950/30 p-6 md:p-8 overflow-y-scroll overflow-x-hidden custom-scrollbar">
                            <h2 className="text-2xl font-bold text-white mb-8">
                                {categories.find(c => c.id === activeCategory)?.label}
                            </h2>

                            {/* Featured Section - Only show on 'All' */}


                            {/* All Skills Grid */}
                            <div className="mb-4">
                                {/* <h3 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">
                                    {activeCategory === 'all' ? 'All Skills' : `${categories.find(c => c.id === activeCategory)?.label} Skills`}
                                </h3> */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredSkills.map((skill) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                            className="bg-slate-900 p-4 rounded-lg border border-slate-800 hover:border-cyan-500/30 transition-all hover:bg-slate-800 flex items-center gap-4 group"
                                        >
                                            <div className="text-2xl w-10 h-10 flex items-center justify-center bg-slate-950 rounded-md border border-slate-800 group-hover:border-cyan-500/20 transition-colors">
                                                {skill.icon}
                                            </div>
                                            <div>
                                                <div className="font-medium text-white text-sm group-hover:text-cyan-400 transition-colors">
                                                    {skill.name}
                                                </div>
                                                <div className="text-xs text-slate-500">
                                                    {skill.description}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {filteredSkills.length === 0 && (
                                    <div className="text-center py-12 text-slate-500">
                                        No skills found matching "{searchQuery}"
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </AnimatedSection>
        </section>
    );
}
