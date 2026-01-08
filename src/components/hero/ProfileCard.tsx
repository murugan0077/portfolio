import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Sparkles } from 'lucide-react';

export default function ProfileCard() {
    return (
        <motion.div
            className="relative w-full max-w-md mx-auto"
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            {/* Abstract Background Shapes for the Card */}
            <motion.div
                className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            {/* Main Card */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 50 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.2
                        }
                    },
                    hover: {
                        scale: 1.02,
                        rotateY: 5,
                        rotateX: -5,
                        transition: { duration: 0.3 }
                    }
                }}
                className="relative z-10 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl overflow-hidden"
            >
                {/* Gradient Border Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 pointer-events-none" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-[2px]">
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                                <span className="text-2xl font-bold text-white">M</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-slate-900 rounded-full"></div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Murugan</h3>
                        <p className="text-cyan-400 text-sm font-medium">Full Stack Developer</p>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                        { icon: Layout, label: "React & Next.js", color: "text-cyan-400" },
                        { icon: Server, label: "Java & Spring", color: "text-orange-400" },
                        { icon: Database, label: "PostgreSQL", color: "text-blue-400" },
                        { icon: Code2, label: "TypeScript", color: "text-yellow-400" },
                    ].map((skill, index) => (
                        <div key={index} className="flex items-center gap-2 bg-slate-800/50 p-2 rounded-lg border border-slate-700/50">
                            <skill.icon size={16} className={skill.color} />
                            <span className="text-slate-300 text-xs font-medium">{skill.label}</span>
                        </div>
                    ))}
                </div>

                {/* Code Snippet Decoration */}
                <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 font-mono text-xs text-slate-400 relative overflow-hidden">
                    <div className="flex gap-1.5 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="space-y-1">
                        <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{'{'}</span></p>
                        <p className="pl-4">name: <span className="text-green-400">'Murugan'</span>,</p>
                        <p className="pl-4">exp: <span className="text-orange-400">1.7</span>,</p>
                        <p className="pl-4">passion: <span className="text-green-400">'Building Awesome UI'</span></p>
                        <p><span className="text-yellow-400">{'}'}</span>;</p>
                    </div>

                    {/* Subtle Shine Effect */}
                    <motion.div
                        className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                        animate={{ left: "200%" }}
                        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                    />
                </div>

                {/* Floating Badge */}
                <motion.div
                    className="absolute top-4 right-4"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Sparkles className="text-yellow-400/80" size={20} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
