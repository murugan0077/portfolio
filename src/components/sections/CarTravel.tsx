import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        type: 'work',
        role: 'Full Stack Developer',
        company: 'Pranion Technology',
        period: 'April 2024 - Present',
        location: 'Chennai, India',
        description: 'Spearheading full-stack development for enterprise applications using Java, Spring Boot, and React.',
        projects: ['Galaxy Renewal Project', 'Tripuu (Travel Planning App)'],
        skills: ['Java', 'Spring Boot', 'React', 'SQL', 'Microservices'],
    },
    {
        type: 'education',
        role: 'B.Sc Computer Science',
        company: 'Ayya Nadar Janaki Ammal College',
        period: '2019 - 2022',
        location: 'Srivilliputtur, Tamil Nadu',
        description: 'Graduated with 75% - Specialized in web development, data structures, and software engineering.',
        projects: [],
        skills: ['Data Structures', 'Algorithms', 'Web Development'],
    },
];

export default function CarTravel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    const carX = useTransform(scrollYProgress, [0, 1], ['0%', '85%']);

    return (
        <section id="experience" className="py-20 bg-slate-950 relative" ref={containerRef}>
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                {/* Title */}
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
                        Experience & Education
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                {/* Timeline Section */}
                <div className="relative">
                    {/* Road Container */}
                    <div className="relative bg-gradient-to-b from-blue-950/30 to-cyan-950/30 border-y-2 border-dashed border-cyan-500/30 py-16 md:py-24 px-4 md:px-8">
                        {/* Road Lines */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <svg className="w-full h-20" preserveAspectRatio="none" viewBox="0 0 1000 100">
                                <line x1="0" y1="30" x2="1000" y2="30" stroke="#06b6d4" strokeWidth="2" opacity="0.3" />
                                <line x1="0" y1="70" x2="1000" y2="70" stroke="#06b6d4" strokeWidth="2" opacity="0.3" />
                                <line x1="0" y1="50" x2="1000" y2="50" stroke="white" strokeWidth="3" strokeDasharray="30,30" opacity="0.2" />
                            </svg>
                        </div>

                        {/* Animated Car - centered on road */}
                        <motion.div
                            style={{ x: carX }}
                            className="absolute w-20 md:w-28 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
                            animate={{ rotate: [0, 3, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                        >
                            <svg viewBox="0 0 100 60" className="w-full h-auto filter drop-shadow-xl">
                                {/* Car Shadow */}
                                <ellipse cx="50" cy="52" rx="38" ry="4" fill="black" opacity="0.3" />
                                
                                {/* Car Body */}
                                <rect x="10" y="35" width="80" height="15" rx="3" fill="#06b6d4" />
                                
                                {/* Car Top */}
                                <path d="M 25 35 L 30 20 L 70 20 L 75 35 Z" fill="#06b6d4" />
                                
                                {/* Windows */}
                                <rect x="32" y="23" width="12" height="10" fill="#0f172a" opacity="0.5" />
                                <rect x="56" y="23" width="12" height="10" fill="#0f172a" opacity="0.5" />
                                
                                {/* Front Lights */}
                                <circle cx="10" cy="37" r="2.5" fill="#fbbf24" />
                                <circle cx="10" cy="46" r="2.5" fill="#ef4444" opacity="0.7" />
                                
                                {/* Wheels */}
                                <circle cx="28" cy="50" r="7" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
                                <circle cx="72" cy="50" r="7" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
                                
                                {/* Wheel Centers */}
                                <circle cx="28" cy="50" r="3" fill="#06b6d4" />
                                <circle cx="72" cy="50" r="3" fill="#06b6d4" />
                            </svg>
                        </motion.div>

                        {/* Experience Cards */}
                        <div className="relative z-20 space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex gap-6 md:gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    viewport={{ once: false, margin: "-100px" }}
                                >
                                    {/* Stop Marker */}
                                    <div className="flex flex-col items-center flex-shrink-0 pt-2">
                                        <div className="w-6 h-6 md:w-8 md:h-8 bg-cyan-500 rounded-full border-4 border-slate-950 shadow-lg shadow-cyan-500/50 relative z-30" />
                                        <div className={`w-1 ${index === experiences.length - 1 ? 'h-0' : 'h-32 md:h-40'} bg-gradient-to-b from-cyan-500/50 to-transparent`} />
                                    </div>

                                    {/* Card Content */}
                                    <motion.div
                                        className="flex-1 bg-gradient-to-br from-slate-900/90 to-slate-900/50 backdrop-blur-md border border-slate-700 rounded-xl p-6 md:p-8 shadow-xl hover:border-cyan-500/50 transition-all duration-300 group"
                                        whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.15)' }}
                                    >
                                        {/* Type Badge */}
                                        <div className="inline-flex items-center gap-2 mb-4">
                                            <div className={`p-2 rounded-lg ${exp.type === 'work' ? 'bg-cyan-500/20' : 'bg-purple-500/20'}`}>
                                                {exp.type === 'work' ? (
                                                    <Briefcase size={18} className="text-cyan-400" />
                                                ) : (
                                                    <GraduationCap size={18} className="text-purple-400" />
                                                )}
                                            </div>
                                            <span className={`text-xs font-bold uppercase tracking-widest ${exp.type === 'work' ? 'text-cyan-400' : 'text-purple-400'}`}>
                                                {exp.type}
                                            </span>
                                        </div>

                                        {/* Main Title */}
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                            {exp.role}
                                        </h3>

                                        {/* Info Grid */}
                                        <div className="grid md:grid-cols-2 gap-3 mb-5 text-sm">
                                            <div className="flex items-center gap-2 text-slate-300">
                                                <Briefcase size={16} className="text-cyan-400 flex-shrink-0" />
                                                <span>{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-300">
                                                <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                                                <span>{exp.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-300">
                                                <Calendar size={16} className="text-cyan-400 flex-shrink-0" />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-slate-300 text-sm leading-relaxed mb-5 pb-5 border-b border-slate-700/50">
                                            {exp.description}
                                        </p>

                                        {/* Projects */}
                                        {exp.projects && exp.projects.length > 0 && (
                                            <div className="mb-5">
                                                <h4 className="text-xs font-bold text-cyan-400 mb-3 uppercase tracking-wider">🎯 Key Projects</h4>
                                                <ul className="space-y-2">
                                                    {exp.projects.map((proj, i) => (
                                                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                                                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                                                            <span>{proj}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Skills */}
                                        <div>
                                            <h4 className="text-xs font-bold text-cyan-400 mb-3 uppercase tracking-wider">⚡ Skills</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill, i) => (
                                                    <motion.span
                                                        key={i}
                                                        className="px-4 py-2 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {skill}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Info */}
                <motion.div 
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <p className="text-slate-400 text-sm">📍 Scroll down to drive the car through my journey</p>
                </motion.div>
            </div>
        </section>
    );
}
