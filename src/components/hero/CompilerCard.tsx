import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, RefreshCw, Bug, Settings, Volume2 } from 'lucide-react';
import { useCompiler } from '../../hooks/useCompiler';
import Terminal from './compiler/Terminal';
import DebuggerPanel from './compiler/DebuggerPanel';
import WelcomeScreen from './compiler/WelcomeScreen';

interface CompilerCardProps {
    isActive: boolean;
}

export default function CompilerCard({ isActive }: CompilerCardProps) {
    const { output, state, visibleConditions, reset } = useCompiler(isActive);
    const [debugMode, setDebugMode] = useState(true);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-2xl mx-auto md:mx-0 overflow-hidden rounded-xl border border-slate-700/50 bg-[#0d1117] shadow-2xl flex flex-col h-[500px]"
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700/50 shrink-0 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                    </div>
                    <div className="ml-2 flex items-center gap-2 text-xs text-slate-400 font-mono bg-slate-900/50 px-3 py-1 rounded-md border border-slate-700/30">
                        <TerminalIcon size={12} className="text-cyan-400" />
                        <span>Murugan.java</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={reset}
                        className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-all"
                        title="Reset Terminal"
                    >
                        <RefreshCw size={14} />
                    </button>
                    <button
                        onClick={() => setDebugMode(!debugMode)}
                        className={`p-1.5 rounded-md transition-all flex items-center gap-1.5 text-xs font-medium ${debugMode ? 'text-green-400 bg-green-400/10' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}
                        title="Toggle Debug Mode"
                    >
                        <Bug size={14} />
                        <span className="hidden sm:inline">{debugMode ? 'ON' : 'OFF'}</span>
                    </button>
                    <div className="w-px h-4 bg-slate-700/50 mx-1" />
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-all">
                        <Volume2 size={14} />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-md transition-all">
                        <Settings size={14} />
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative overflow-hidden bg-[#0d1117]">
                {state === 'welcome' ? (
                    <WelcomeScreen />
                ) : (
                    <>
                        <div className={`h-full transition-all duration-500 ${state === 'debugger' ? 'h-1/2' : 'h-full'}`}>
                            <Terminal output={output} state={state} />
                        </div>

                        {state === 'debugger' && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: '50%', opacity: 1 }}
                                className="border-t border-slate-700/50"
                            >
                                <DebuggerPanel visibleConditions={visibleConditions} />
                            </motion.div>
                        )}
                    </>
                )}
            </div>
        </motion.div>
    );
}
