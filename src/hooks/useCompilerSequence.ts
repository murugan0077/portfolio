import { useState, useEffect, useCallback } from 'react';
import { COMPILER_SEQUENCE } from '../utils/compilerMessages';

export type CompilerStage = 'idle' | 'typing' | 'compiling' | 'success' | 'running' | 'completed';

export const useCompilerSequence = (isActive: boolean) => {
    const [stage, setStage] = useState<CompilerStage>('idle');
    const [displayedCommand, setDisplayedCommand] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [outputLines, setOutputLines] = useState<string[]>([]);

    const startSequence = useCallback(() => {
        setStage('typing');
        setDisplayedCommand('');
        setOutputLines([]);
    }, []);

    // Cursor blinking effect
    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    // Main sequence logic
    useEffect(() => {
        if (!isActive && stage === 'idle') return;
        if (isActive && stage === 'idle') {
            // Start sequence after a small delay
            const timeout = setTimeout(startSequence, 1500);
            return () => clearTimeout(timeout);
        }

        if (stage === 'typing') {
            if (displayedCommand.length < COMPILER_SEQUENCE.command.length) {
                const timeout = setTimeout(() => {
                    setDisplayedCommand(COMPILER_SEQUENCE.command.slice(0, displayedCommand.length + 1));
                }, COMPILER_SEQUENCE.timing.typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                // Typing finished, move to compiling
                const timeout = setTimeout(() => {
                    setStage('compiling');
                    setOutputLines(prev => [...prev, `${COMPILER_SEQUENCE.prompt}${COMPILER_SEQUENCE.command}`]);
                }, 500);
                return () => clearTimeout(timeout);
            }
        }

        if (stage === 'compiling') {
            const timeout = setTimeout(() => {
                setStage('success');
                setOutputLines(prev => [...prev, COMPILER_SEQUENCE.compiling]);
            }, COMPILER_SEQUENCE.timing.compilationDuration);
            return () => clearTimeout(timeout);
        }

        if (stage === 'success') {
            const timeout = setTimeout(() => {
                setStage('running');
                setOutputLines(prev => [...prev, COMPILER_SEQUENCE.success]);
            }, 800);
            return () => clearTimeout(timeout);
        }

        if (stage === 'running') {
            const timeout = setTimeout(() => {
                setStage('completed');
                setOutputLines(prev => [
                    ...prev,
                    `${COMPILER_SEQUENCE.prompt}${COMPILER_SEQUENCE.running}`,
                    COMPILER_SEQUENCE.welcome
                ]);
            }, COMPILER_SEQUENCE.timing.successDelay);
            return () => clearTimeout(timeout);
        }

    }, [isActive, stage, displayedCommand, startSequence]);

    return {
        stage,
        displayedCommand,
        showCursor,
        outputLines,
        restart: startSequence
    };
};
