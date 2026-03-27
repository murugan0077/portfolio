import { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import {
    Terminal as TerminalIcon, RefreshCw, Bug, X, Minus, Maximize2,
    FileCode2, GitBranch, Wifi, CheckCircle2, Circle, ChevronRight,
    Zap, Coffee, Globe, Github, Linkedin, Mail, Star, Package
} from 'lucide-react';

// ─── Syntax-highlighted code lines ───────────────────────────────────────────
const CODE_LINES = [
    { tokens: [{ t: 'keyword', v: 'public class' }, { t: 'class', v: ' Developer' }, { t: 'plain', v: ' {' }] },
    { tokens: [] },
    { tokens: [{ t: 'comment', v: '    // 🚀 Core profile' }] },
    { tokens: [{ t: 'keyword', v: '    private final' }, { t: 'type', v: ' String' }, { t: 'plain', v: ' name = ' }, { t: 'string', v: '"Full Stack Developer"' }, { t: 'plain', v: ';' }] },
    { tokens: [{ t: 'keyword', v: '    private final' }, { t: 'type', v: ' double' }, { t: 'plain', v: ' experience = ' }, { t: 'number', v: '1.7' }, { t: 'plain', v: ';' }] },
    { tokens: [{ t: 'keyword', v: '    private final' }, { t: 'type', v: ' boolean' }, { t: 'plain', v: ' available = ' }, { t: 'bool', v: 'true' }, { t: 'plain', v: ';' }] },
    { tokens: [] },
    { tokens: [{ t: 'comment', v: '    // 🛠 Tech stack' }] },
    { tokens: [{ t: 'keyword', v: '    private' }, { t: 'type', v: ' String[]' }, { t: 'plain', v: ' stack = {' }] },
    { tokens: [{ t: 'string', v: '        "React"' }, { t: 'plain', v: ', ' }, { t: 'string', v: '"Java"' }, { t: 'plain', v: ', ' }, { t: 'string', v: '"Spring Boot"' }, { t: 'plain', v: ',' }] },
    { tokens: [{ t: 'string', v: '        "TypeScript"' }, { t: 'plain', v: ', ' }, { t: 'string', v: '"PostgreSQL"' }, { t: 'plain', v: ', ' }, { t: 'string', v: '"Docker"' }] },
    { tokens: [{ t: 'plain', v: '    };' }] },
    { tokens: [] },
    { tokens: [{ t: 'comment', v: '    // ⚡ Build method' }] },
    { tokens: [{ t: 'keyword', v: '    public' }, { t: 'type', v: ' void' }, { t: 'plain', v: ' ' }, { t: 'fn', v: 'build' }, { t: 'plain', v: '(' }, { t: 'type', v: 'String' }, { t: 'plain', v: ' project) {' }] },
    { tokens: [{ t: 'class', v: '        System' }, { t: 'plain', v: '.out.' }, { t: 'fn', v: 'println' }, { t: 'plain', v: '(' }, { t: 'string', v: '"Shipping: "' }, { t: 'plain', v: ' + project);' }] },
    { tokens: [{ t: 'plain', v: '        ' }, { t: 'fn', v: 'deployToProduction' }, { t: 'plain', v: '();' }] },
    { tokens: [{ t: 'plain', v: '    }' }] },
    { tokens: [] },
    { tokens: [{ t: 'comment', v: '    // 💡 Current focus' }] },
    { tokens: [{ t: 'keyword', v: '    public static' }, { t: 'type', v: ' String' }, { t: 'plain', v: ' ' }, { t: 'fn', v: 'getStatus' }, { t: 'plain', v: '() {' }] },
    { tokens: [{ t: 'keyword', v: '        return' }, { t: 'string', v: ' "Building awesome things @ Pranion Tech"' }, { t: 'plain', v: ';' }] },
    { tokens: [{ t: 'plain', v: '    }' }] },
    { tokens: [{ t: 'plain', v: '}' }] },
];

const TOKEN_COLORS: Record<string, string> = {
    keyword: '#cf8dfa',
    type: '#4ec9b0',
    class: '#4fc1ff',
    fn: '#dcdcaa',
    string: '#ce9178',
    number: '#b5cea8',
    bool: '#569cd6',
    comment: '#6a9955',
    plain: '#d4d4d4',
};

// ─── Terminal output sequence ─────────────────────────────────────────────────
const TERMINAL_LINES = [
    { text: '$ javac Developer.java', color: '#22d3ee', delay: 0 },
    { text: '  Compiling...', color: '#fbbf24', delay: 600 },
    { text: '  ✓ No errors found', color: '#4ade80', delay: 1200 },
    { text: '', color: '', delay: 1500 },
    { text: '$ java Developer', color: '#22d3ee', delay: 1700 },
    { text: '  [INFO] Loading Spring Boot...', color: '#94a3b8', delay: 2300 },
    { text: '  [INFO] React renderer ready', color: '#94a3b8', delay: 2700 },
    { text: '  [INFO] PostgreSQL connected ✓', color: '#94a3b8', delay: 3100 },
    { text: '', color: '', delay: 3400 },
    { text: '  🎯 Skills: VALIDATED', color: '#4ade80', delay: 3600 },
    { text: '  🚀 Experience: 1.7+ years', color: '#4ade80', delay: 3900 },
    { text: '  💼 Status: OPEN TO HIRE', color: '#4ade80', delay: 4200 },
    { text: '', color: '', delay: 4500 },
    { text: '  → Portfolio initialized successfully!', color: '#22d3ee', delay: 4800 },
];

// ─── Live stats bar ───────────────────────────────────────────────────────────
const STATS = [
    { label: 'Projects', value: '8+', icon: Package, color: '#22d3ee' },
    { label: 'Experience', value: '1.7y', icon: Coffee, color: '#fbbf24' },
    { label: 'Stack', value: '10+', icon: Zap, color: '#a78bfa' },
    { label: 'Available', value: 'Yes', icon: CheckCircle2, color: '#4ade80' },
];

// ─── Tech badges ──────────────────────────────────────────────────────────────
const TECH_BADGES = [
    { name: 'React', color: '#61dafb', bg: 'rgba(97,218,251,0.08)' },
    { name: 'Java', color: '#f89820', bg: 'rgba(248,152,32,0.08)' },
    { name: 'Spring Boot', color: '#6db33f', bg: 'rgba(109,179,63,0.08)' },
    { name: 'TypeScript', color: '#3178c6', bg: 'rgba(49,120,198,0.12)' },
    { name: 'PostgreSQL', color: '#336791', bg: 'rgba(51,103,145,0.12)' },
    { name: 'Docker', color: '#2496ed', bg: 'rgba(36,150,237,0.08)' },
    { name: 'Tailwind', color: '#38bdf8', bg: 'rgba(56,189,248,0.08)' },
    { name: 'Git', color: '#f05032', bg: 'rgba(240,80,50,0.08)' },
];

// ─── Main component ───────────────────────────────────────────────────────────
export default function CompilerCard({ isActive }: { isActive: boolean }) {
    const [activeTab, setActiveTab] = useState<'code' | 'terminal' | 'output'>('code');
    const [visibleLines, setVisibleLines] = useState(0);
    const [terminalLines, setTerminalLines] = useState<typeof TERMINAL_LINES>([]);
    const [cursor, setCursor] = useState(true);
    const [debugChecks, setDebugChecks] = useState(0);
    const [hasRun, setHasRun] = useState(false);
    const terminalRef = useRef<HTMLDivElement>(null);

    // Blinking cursor
    useEffect(() => {
        const id = setInterval(() => setCursor(c => !c), 530);
        return () => clearInterval(id);
    }, []);

    // Animate code lines on mount
    useEffect(() => {
        if (!isActive) return;
        let i = 0;
        const id = setInterval(() => {
            if (i < CODE_LINES.length) { setVisibleLines(++i); }
            else clearInterval(id);
        }, 60);
        return () => clearInterval(id);
    }, [isActive]);

    // Terminal sequence
    useEffect(() => {
        if (activeTab !== 'terminal' || hasRun) return;
        setHasRun(true);
        setTerminalLines([]);
        setDebugChecks(0);
        TERMINAL_LINES.forEach((line, i) => {
            setTimeout(() => {
                setTerminalLines(prev => [...prev, line]);
                if (terminalRef.current) terminalRef.current.scrollTop = 9999;
            }, line.delay);
        });
        // debug checks for output tab
        for (let i = 1; i <= 5; i++) {
            setTimeout(() => setDebugChecks(i), 3600 + i * 300);
        }
    }, [activeTab]);

    const resetTerminal = () => {
        setTerminalLines([]);
        setDebugChecks(0);
        setHasRun(false);
    };

    return (
        <m.div
            initial={{ opacity: 0, y: 60, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 1200 }}
            className="relative w-full max-w-[620px] mx-auto"
        >
            {/* Outer glow */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/20 blur-sm" />
            <div className="absolute -inset-3 rounded-3xl bg-cyan-500/5 blur-2xl" />

            {/* Main card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d1117] shadow-[0_32px_80px_rgba(0,0,0,0.8)]">

                {/* ── Title bar ── */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/[0.06]">
                    {/* Traffic lights */}
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <button className="group w-3 h-3 rounded-full bg-[#ff5f57] flex items-center justify-center">
                                <X size={6} className="opacity-0 group-hover:opacity-100 text-[#4d0000]" />
                            </button>
                            <button className="group w-3 h-3 rounded-full bg-[#febc2e] flex items-center justify-center">
                                <Minus size={6} className="opacity-0 group-hover:opacity-100 text-[#4d3000]" />
                            </button>
                            <button className="group w-3 h-3 rounded-full bg-[#28c840] flex items-center justify-center">
                                <Maximize2 size={5} className="opacity-0 group-hover:opacity-100 text-[#003d00]" />
                            </button>
                        </div>
                        {/* File pill */}
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono bg-[#0d1117]/70 px-2.5 py-1 rounded-md border border-white/[0.06]">
                            <FileCode2 size={11} className="text-[#f89820]" />
                            Developer.java
                            <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] ml-0.5" title="unsaved" />
                        </div>
                    </div>

                    {/* Right controls */}
                    <div className="flex items-center gap-1.5">
                        {/* Git branch */}
                        <div className="hidden sm:flex items-center gap-1 text-[10px] text-slate-500 font-mono px-2 py-1 rounded border border-white/[0.05] bg-white/[0.02]">
                            <GitBranch size={10} className="text-cyan-500" />
                            main
                        </div>
                        {/* Reset */}
                        <button
                            onClick={resetTerminal}
                            className="p-1.5 text-slate-500 hover:text-slate-200 hover:bg-white/[0.06] rounded-md transition-all"
                            title="Reset terminal"
                        >
                            <RefreshCw size={12} />
                        </button>
                        <button className="p-1.5 text-slate-500 hover:text-slate-200 hover:bg-white/[0.06] rounded-md transition-all">
                            <Bug size={12} />
                        </button>
                    </div>
                </div>

                {/* ── Tab bar ── */}
                <div className="flex items-center px-2 bg-[#0d1117] border-b border-white/[0.06]">
                    {(['code', 'terminal', 'output'] as const).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-4 py-2.5 text-[11px] font-medium font-mono capitalize transition-all duration-200 border-b-2 ${
                                activeTab === tab
                                    ? 'text-white border-cyan-400'
                                    : 'text-slate-500 border-transparent hover:text-slate-300'
                            }`}
                        >
                            {tab === 'terminal' && (
                                <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                            )}
                            {tab}
                        </button>
                    ))}
                    {/* Spacer + live indicator */}
                    <div className="ml-auto flex items-center gap-2 pr-3">
                        <span className="flex items-center gap-1 text-[10px] text-green-400 font-mono">
                            <Wifi size={10} />
                            live
                        </span>
                    </div>
                </div>

                {/* ── Content area ── */}
                <div className="h-[380px] overflow-hidden">
                    <AnimatePresence mode="wait">

                        {/* CODE TAB */}
                        {activeTab === 'code' && (
                            <m.div
                                key="code"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="h-full flex overflow-hidden"
                            >
                                {/* Line numbers */}
                                <div className="w-10 shrink-0 bg-[#0d1117] border-r border-white/[0.04] pt-3 pb-3 flex flex-col items-end pr-2 select-none">
                                    {CODE_LINES.slice(0, visibleLines).map((_, i) => (
                                        <span key={i} className="text-[11px] text-slate-600 font-mono leading-[1.75rem]">{i + 1}</span>
                                    ))}
                                </div>

                                {/* Code */}
                                <div className="flex-1 overflow-auto custom-scrollbar pt-3 pb-3 pl-4 pr-4">
                                    {CODE_LINES.slice(0, visibleLines).map((line, i) => (
                                        <m.div
                                            key={i}
                                            initial={{ opacity: 0, x: -6 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.12 }}
                                            className="text-[12px] font-mono leading-7 whitespace-pre"
                                        >
                                            {line.tokens.length === 0 ? '\u00A0' : line.tokens.map((tok, j) => (
                                                <span key={j} style={{ color: TOKEN_COLORS[tok.t] }}>{tok.v}</span>
                                            ))}
                                        </m.div>
                                    ))}
                                    {/* Blinking cursor at end */}
                                    {visibleLines >= CODE_LINES.length && (
                                        <div className="text-[12px] font-mono leading-7">
                                            <span style={{ color: '#d4d4d4' }}>{'}'}</span>
                                            <span className={`inline-block w-[7px] h-[14px] bg-cyan-400 ml-0.5 align-middle ${cursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                                        </div>
                                    )}
                                </div>
                            </m.div>
                        )}

                        {/* TERMINAL TAB */}
                        {activeTab === 'terminal' && (
                            <m.div
                                key="terminal"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="h-full bg-[#0a0e17] p-4 overflow-y-auto custom-scrollbar font-mono text-[12px]"
                                ref={terminalRef}
                            >
                                {/* Terminal header */}
                                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/[0.05]">
                                    <TerminalIcon size={12} className="text-cyan-400" />
                                    <span className="text-slate-500 text-[10px]">Portfolio Compiler v2.0 — zsh</span>
                                </div>

                                {terminalLines.map((line, i) => (
                                    <m.div
                                        key={i}
                                        initial={{ opacity: 0, y: 4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="leading-6"
                                        style={{ color: line.color || 'transparent', minHeight: '1.5rem' }}
                                    >
                                        {line.text}
                                    </m.div>
                                ))}

                                {/* Blinking cursor */}
                                {terminalLines.length > 0 && (
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="text-cyan-400">$</span>
                                        <span className={`inline-block w-2 h-4 bg-cyan-400 ${cursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                                    </div>
                                )}
                            </m.div>
                        )}

                        {/* OUTPUT TAB */}
                        {activeTab === 'output' && (
                            <m.div
                                key="output"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.2 }}
                                className="h-full overflow-y-auto custom-scrollbar bg-[#0d1117] p-4 space-y-4"
                            >
                                {/* Profile header */}
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-cyan-500/8 to-blue-500/8 border border-cyan-500/15">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-sm font-bold text-[#0d1117] shrink-0">
                                        MS
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm font-mono">Full Stack Developer</div>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                            <span className="text-green-400 text-[10px] font-mono">Available for hire</span>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                    </div>
                                </div>

                                {/* Debug checks */}
                                <div className="space-y-2">
                                    <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-2">// system.validate()</div>
                                    {[
                                        'Java syntax → valid',
                                        'React expertise → 1.7 years',
                                        'Full-stack capable → confirmed',
                                        'Clean code principles → applied',
                                        'Team collaboration → effective',
                                    ].map((check, i) => (
                                        <m.div
                                            key={i}
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={debugChecks > i ? { opacity: 1, x: 0 } : { opacity: 0.3, x: -8 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex items-center gap-2 text-[11px] font-mono"
                                        >
                                            <m.div animate={debugChecks > i ? { scale: [1.4, 1] } : {}}>
                                                {debugChecks > i
                                                    ? <CheckCircle2 size={13} className="text-green-400 shrink-0" />
                                                    : <Circle size={13} className="text-slate-700 shrink-0" />
                                                }
                                            </m.div>
                                            <span className={debugChecks > i ? 'text-slate-300' : 'text-slate-600'}>{check}</span>
                                        </m.div>
                                    ))}
                                </div>

                                {/* Tech badges */}
                                <div>
                                    <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-2">// stack.load()</div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {TECH_BADGES.map((badge, i) => (
                                            <m.span
                                                key={badge.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.06, duration: 0.2 }}
                                                className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium border"
                                                style={{ color: badge.color, background: badge.bg, borderColor: badge.color + '25' }}
                                            >
                                                {badge.name}
                                            </m.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-2 pt-1">
                                    {[
                                        { icon: Github, href: 'https://github.com/murugan', label: 'GitHub' },
                                        { icon: Linkedin, href: 'https://linkedin.com/in/murugan', label: 'LinkedIn' },
                                        { icon: Mail, href: 'mailto:murugan25oct@gmail.com', label: 'Email' },
                                        { icon: Globe, href: '#', label: 'Website' },
                                    ].map(link => (
                                        <m.a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ y: -2, scale: 1.1 }}
                                            className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                                        >
                                            <link.icon size={13} />
                                        </m.a>
                                    ))}
                                </div>
                            </m.div>
                        )}

                    </AnimatePresence>
                </div>

                {/* ── Status bar ── */}
                <div className="flex items-center justify-between px-4 py-1.5 bg-[#007acc] text-[10px] font-mono text-white/90">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                            <GitBranch size={9} />
                            main
                        </span>
                        <span>Java 17</span>
                        <span className="text-white/60">|</span>
                        <span>UTF-8</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                            <CheckCircle2 size={9} />
                            0 errors
                        </span>
                        <span>Ln {CODE_LINES.length}, Col 1</span>
                    </div>
                </div>
            </div>

            {/* ── Stats strip below card ── */}
            <m.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-3 grid grid-cols-4 gap-2"
            >
                {STATS.map((stat, i) => (
                    <m.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 + i * 0.1 }}
                        className="flex flex-col items-center gap-1 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/20 transition-colors group"
                    >
                        <stat.icon size={13} style={{ color: stat.color }} />
                        <span className="text-[13px] font-bold font-mono" style={{ color: stat.color }}>{stat.value}</span>
                        <span className="text-[9px] text-slate-600 uppercase tracking-wide">{stat.label}</span>
                    </m.div>
                ))}
            </m.div>

            {/* Floating badge - "Open to work" */}
            <m.div
                initial={{ opacity: 0, scale: 0.7, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
                className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-[10px] font-bold font-mono shadow-lg shadow-green-500/10"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to Work
            </m.div>

            {/* Floating "Java" tag */}
            <m.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-24 hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f89820]/10 border border-[#f89820]/25 text-[#f89820] text-[10px] font-mono font-bold shadow-lg"
            >
                <Coffee size={11} />
                Java 17
            </m.div>

            {/* Floating "React" tag */}
            <m.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-8 bottom-32 hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#61dafb]/8 border border-[#61dafb]/20 text-[#61dafb] text-[10px] font-mono font-bold shadow-lg"
            >
                <ChevronRight size={11} />
                React 18
            </m.div>
        </m.div>
    );
}