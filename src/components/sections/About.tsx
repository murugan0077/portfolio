import { motion } from 'framer-motion';
import { Award, MapPin, Code, User } from 'lucide-react';
import AnimatedSection from '../motion/AnimatedSection';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../motion/variants';

export default function About() {
    const achievements = [
        'Second place in debugging competition',
        'Secretary in Nanotier Association',
        'Google Digital Marketing Certified',
        'Website Design Certification (AJ)',
    ];

    return (
        <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
            <AnimatedSection className="relative z-10">
                <motion.div
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        variants={slideInLeft}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                        <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                                    <User size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
                            </div>

                            <p className="text-slate-300 leading-relaxed mb-6">
                                Passionate and results-driven Computer Science graduate specializing in full-stack development.
                                With expertise in modern web technologies including React.js, Java, Spring Boot, and Tailwind CSS,
                                I create scalable and efficient solutions.
                            </p>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Currently contributing to innovative projects at Pranion Technology, where I leverage my
                                skills in Java, SQL, and application development to deliver high-quality software solutions.
                            </p>

                            <div className="flex items-center gap-2 text-cyan-400 font-medium">
                                <MapPin className="w-5 h-5" />
                                <span>Srivilliputtur, Tamil Nadu</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <motion.div variants={slideInRight} className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                            <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                        <Award size={24} />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white">Achievements</h3>
                                </div>

                                <ul className="space-y-4">
                                    {achievements.map((achievement, index) => (
                                        <motion.li
                                            key={index}
                                            variants={fadeInUp}
                                            className="flex items-start gap-3 text-slate-300 group/item"
                                        >
                                            <span className="text-cyan-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover/item:scale-150 transition-transform" />
                                            <span className="group-hover/item:text-white transition-colors">{achievement}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors text-center group">
                                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">1.7+</div>
                                <div className="text-slate-400 text-sm font-medium">Years Experience</div>
                            </div>
                            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors text-center group">
                                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">15+</div>
                                <div className="text-slate-400 text-sm font-medium">Projects Completed</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </AnimatedSection>
        </section>
    );
}
