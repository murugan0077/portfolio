import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from '../motion/AnimatedSection';
import { fadeInUp } from '../motion/variants';

const projects = [
    {
        id: 1,
        title: 'Tripuu',
        description: 'A comprehensive travel planning website built with React and Java backend. Features include itinerary management, booking integration, and interactive maps.',
        tags: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
        featured: true
    },
    {
        id: 2,
        title: 'Galaxy Renewal',
        description: 'Responsive UI pages with complex animations. Integrated with Drupal for content management and optimized for high performance.',
        tags: ['React', 'Drupal', 'Framer Motion', 'Tailwind'],
        category: 'frontend',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        featured: false
    },
    {
        id: 3,
        title: 'MLMS - Lead Management',
        description: 'Enhanced admin CRM with bulk lead selection, reassignment, and multilingual support for automated updates.',
        tags: ['Laravel', 'MySQL', 'CRM', 'Automation'],
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        featured: false
    },
    {
        id: 4,
        title: 'OJPMS - Performance',
        description: 'Continuous feedback and PIP system with customized filters using Livewire. Implemented efficient bulk actions and approval workflows.',
        tags: ['Laravel', 'Livewire', 'Workflow'],
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
        featured: false
    },
    {
        id: 5,
        title: 'E-Commerce Platform',
        description: 'Full-featured e-commerce console application',
        tags: ['Java', 'postgresql'],
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
        featured: false
    },
    {
        id: 6,
        title: 'Task Management',
        description: 'Collaborative task management system with real-time updates and team collaboration features.',
        tags: ['React', 'Firebase', 'Tailwind'],
        category: 'frontend',
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800',
        featured: false
    },
    {
        id: 7,
        title: 'Build My Own Jarvis',
        description: 'Personal AI assistant capable of voice interaction, task automation, and system control.',
        tags: ['Python', 'NLP', 'Automation', 'Speech Recognition'],
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        featured: false
    },
    {
        id: 8,
        title: 'Meenatchi Traders',
        description: 'Live e-commerce site with real-time Firebase database, React UI, and dynamic inventory management.',
        tags: ['React', 'Firebase', 'Tailwind', 'Context API'],
        category: 'fullstack',
        image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800',
        featured: true
    }
];

const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' }
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="py-20 bg-slate-950 relative">
            <AnimatedSection>
                <motion.div variants={fadeInUp} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                {/* <motion.div variants={fadeInUp} className="mb-12">
                    <BookFlipCarousel projects={featuredProjects} />
                </motion.div> */}

                <motion.div variants={fadeInUp} className="flex justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.id
                                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </motion.div>

                <motion.div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-white">All Projects</h3>
                </motion.div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-colors"
                            >
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                        <motion.a
                                            href="#"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-cyan-500 rounded-full text-slate-950"
                                        >
                                            <ExternalLink size={20} />
                                        </motion.a>
                                        <motion.a
                                            href="#"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-slate-800 rounded-full text-white"
                                        >
                                            <Github size={20} />
                                        </motion.a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        {project.featured && (
                                            <span className="px-2 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-md border border-cyan-500/20">
                                                Featured
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </AnimatedSection>
        </section>
    );
}
