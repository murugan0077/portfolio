import React, { useEffect, useRef } from 'react';

interface TerminalProps {
    output: string;
    state: string;
}

const Terminal: React.FC<TerminalProps> = ({ output, state }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [output]);

    return (
        <div className="flex flex-col h-full bg-[#0d1117] font-mono text-sm md:text-base overflow-hidden rounded-b-xl">
            <div className="flex-1 p-6 overflow-y-auto custom-scrollbar" ref={scrollRef}>
                <pre className="text-slate-300 whitespace-pre-wrap break-words leading-relaxed font-mono">
                    {output}
                    <span className={`inline-block w-2 h-5 bg-green-500 ml-1 align-middle ${state === 'typing' || state === 'idle' ? 'animate-pulse' : ''}`}></span>
                </pre>
            </div>
            <div className="px-4 py-2 bg-slate-800/30 border-t border-slate-700/30 text-slate-500 text-xs flex justify-between items-center">
                <span>Portfolio Compiler v1.0</span>
                <span>{state === 'idle' ? 'Ready' : 'Processing...'}</span>
            </div>
        </div>
    );
};

export default Terminal;