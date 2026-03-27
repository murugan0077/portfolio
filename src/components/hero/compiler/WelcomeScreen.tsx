import React from 'react';
import { m } from 'framer-motion';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-full bg-[#0d1117] p-6 md:p-8 overflow-y-auto custom-scrollbar font-mono text-slate-300 rounded-b-xl"
        >
            <div className="text-center mb-8 pb-6 border-b border-slate-700/50">
                <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2 tracking-wide">👋 WELCOME TO MY PORTFOLIO</h1>
                <p className="text-slate-500 text-sm">System initialized successfully</p>
            </div>

            <div className="space-y-8">
                <section>
                    <h2 className="text-blue-400 text-sm font-bold uppercase mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span> About Me
                    </h2>
                    <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50 text-sm space-y-2">
                        <p><strong className="text-slate-200">Name:</strong> Murugan S</p>
                        <p><strong className="text-slate-200">Role:</strong> Full-Stack Developer</p>
                        <p><strong className="text-slate-200">Experience:</strong> 1.7+ years</p>
                        <p><strong className="text-slate-200">Status:</strong> <span className="text-green-400">✨ Open to Opportunities</span></p>
                    </div>
                </section>

                <section>
                    <h2 className="text-purple-400 text-sm font-bold uppercase mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span> Current Stack
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                            <h3 className="text-xs text-slate-400 uppercase mb-2">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Java', 'JavaScript', 'SQL'].map(tech => (
                                    <span key={tech} className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-md border border-purple-500/20">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                            <h3 className="text-xs text-slate-400 uppercase mb-2">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Tailwind CSS'].map(tech => (
                                    <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-md border border-blue-500/20">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                            <h3 className="text-xs text-slate-400 uppercase mb-2">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Spring Boot', 'Node.js'].map(tech => (
                                    <span key={tech} className="px-2 py-1 bg-green-500/10 text-green-300 text-xs rounded-md border border-green-500/20">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-orange-400 text-sm font-bold uppercase mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span> Featured Projects
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-slate-800/30 rounded-lg p-4 border-l-4 border-orange-400 hover:bg-slate-800/50 transition-colors">
                            <h3 className="text-orange-300 font-bold text-sm mb-1">Tripuu - Travel Planning Platform</h3>
                            <p className="text-xs text-slate-400 mb-2">React + Spring Boot | Interactive maps | Real-time booking</p>
                        </div>
                        <div className="bg-slate-800/30 rounded-lg p-4 border-l-4 border-orange-400 hover:bg-slate-800/50 transition-colors">
                            <h3 className="text-orange-300 font-bold text-sm mb-1">Galaxy Renewal Project</h3>
                            <p className="text-xs text-slate-400 mb-2">Enterprise system at Pranion Tech | Java backend optimization</p>
                        </div>
                    </div>
                </section>

                <section className="pt-4 border-t border-slate-700/50 text-center">
                    <h2 className="text-slate-400 text-xs font-bold uppercase mb-4">Let's Connect</h2>
                    <div className="flex justify-center gap-4">
                        <a href="https://github.com/murugan" target="_blank" rel="noreferrer" className="p-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/murugan" target="_blank" rel="noreferrer" className="p-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:murugan25oct@gmail.com" className="p-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                        <a href="#" className="p-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors">
                            <Globe size={20} />
                        </a>
                    </div>
                </section>
            </div>
        </m.div>
    );
};

export default WelcomeScreen;