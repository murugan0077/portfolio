import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import AnimatedSection from '../motion/AnimatedSection';
import { fadeInUp, staggerContainer } from '../motion/variants';

const experiences = [
    {
        type: 'work',
        role: 'Full Stack Developer',
        company: 'Pranion Technology',
        period: 'April 2024 - Present',
        location: 'Chennai, India',
        description: 'Spearheading full-stack development for enterprise applications using Java, Spring Boot, and React.',
        projects: ['Galaxy Renewal Project', 'Tripuu (Travel Planning App)'],
        skills: ['Java', 'Spring Boot', 'React', 'SQL', 'Microservices']
    },
    {
        type: 'education',
        role: 'B.Sc Computer Science',
        company: 'Ayya Nadar Janaki Ammal College',
        period: '2019 - 2022',
        location: 'Srivilliputtur, Tamil Nadu',
        description: 'Graduated with 75% - Specialized in web development, data structures, and software engineering.',
        skills: ['Data Structures', 'Algorithms', 'Web Development']
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-slate-950 relative">
            <AnimatedSection>
                <motion.div
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
                        Experience & Education
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] -translate-x-[9px] md:-translate-x-1/2 z-10 ring-4 ring-slate-950" />

                                {/* Content Card */}
                                <motion.div
                                    variants={fadeInUp}
                                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group`}
                                >
                                    <div className="flex items-center gap-2 text-cyan-400 mb-2 text-sm font-medium">
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                        {exp.role}
                                    </h3>

                                    <div className="flex items-center gap-2 text-slate-400 mb-4 text-sm">
                                        {exp.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                                        <span>{exp.company}</span>
                                        <span className="mx-1">•</span>
                                        <MapPin size={14} />
                                        <span>{exp.location}</span>
                                    </div>

                                    <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>

                                    {exp.projects && (
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Projects:</h4>
                                            <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                                                {exp.projects.map((proj, i) => (
                                                    <li key={i}>{proj}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 text-xs rounded-md bg-slate-800 text-cyan-400 border border-slate-700"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}
