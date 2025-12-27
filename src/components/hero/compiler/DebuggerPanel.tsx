import React from 'react';
import { DEBUG_CONDITIONS } from '../../../utils/compilerSequence';
import { Check, AlertTriangle, XCircle } from 'lucide-react';

interface DebuggerPanelProps {
    visibleConditions: number;
}

const DebuggerPanel: React.FC<DebuggerPanelProps> = ({ visibleConditions }) => {
    return (
        <div className="p-6 bg-[#0d1117] h-full flex flex-col font-mono rounded-b-xl">
            <h3 className="text-cyan-400 font-semibold mb-4 text-sm md:text-base border-b border-cyan-500/20 pb-2">
                🔍 DEBUG MODE: ANALYZING CONDITIONS
            </h3>
            <div className="flex flex-col gap-3 flex-1 overflow-y-auto custom-scrollbar">
                {DEBUG_CONDITIONS.slice(0, visibleConditions).map((cond) => (
                    <div
                        key={cond.id}
                        className={`flex items-center gap-3 p-3 rounded-lg border border-l-4 animate-slideIn
                ${cond.status === 'PASS'
                                ? 'bg-green-500/10 border-green-500/20 border-l-green-500'
                                : 'bg-yellow-500/10 border-yellow-500/20 border-l-yellow-500'}`}
                    >
                        <span className="shrink-0">
                            {cond.status === 'PASS' ? <Check size={16} className="text-green-400" /> : <AlertTriangle size={16} className="text-yellow-400" />}
                        </span>
                        <span className="flex-1 text-slate-300 text-xs md:text-sm">{cond.label}</span>
                        <span className={`text-xs font-bold ${cond.status === 'PASS' ? 'text-green-400' : 'text-yellow-400'}`}>
                            {cond.status}
                        </span>
                    </div>
                ))}
            </div>
            {visibleConditions === DEBUG_CONDITIONS.length && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 font-bold text-center text-sm animate-fadeIn">
                    🎉 ALL CONDITIONS SUCCESS!
                </div>
            )}
        </div>
    );
};

export default DebuggerPanel;
