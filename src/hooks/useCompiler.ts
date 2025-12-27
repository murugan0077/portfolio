import { useState, useEffect, useRef } from 'react';
import { SEQUENCE_STEPS, DEBUG_CONDITIONS } from '../utils/compilerSequence';

export const useCompiler = (isActive: boolean) => {
    const [output, setOutput] = useState('');
    const [state, setState] = useState<'idle' | 'typing' | 'compiling' | 'debugger' | 'success' | 'welcome'>('idle');
    const [visibleConditions, setVisibleConditions] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => { isMounted.current = false; };
    }, []);

    useEffect(() => {
        if (isActive && !isRunning && state === 'idle') {
            runSequence();
        }
    }, [isActive]);

    const typeText = async (text: string, speed: number = 80) => {
        for (let i = 0; i < text.length; i++) {
            if (!isMounted.current) return;
            setOutput((prev) => prev + text[i]);
            await new Promise((resolve) => setTimeout(resolve, speed));
        }
    };

    const showOutput = async (text: string, color: string = 'white', delay: number = 0) => {
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (!isMounted.current) return;
        setOutput((prev) => prev + text + '\n');
    };

    const runSequence = async () => {
        if (isRunning) return;
        setIsRunning(true);
        setOutput('');
        setState('idle');

        for (const step of SEQUENCE_STEPS) {
            if (!isMounted.current) break;

            if (step.type === 'prompt') {
                setOutput((prev) => prev + step.text);
                await new Promise((resolve) => setTimeout(resolve, 500));
            } else if (step.type === 'command') {
                setState('typing');
                await typeText(step.text, step.delay);
                await new Promise((resolve) => setTimeout(resolve, step.displayDuration));
            } else if (step.type === 'output') {
                setState('compiling');
                await showOutput(step.text, step.color);
                await new Promise((resolve) => setTimeout(resolve, step.displayDuration));
            } else if (step.type === 'debugger') {
                setState('debugger');
                await showDebugger();
            } else if (step.type === 'screen') {
                setState('welcome');
            } else if (step.type === 'newline') {
                setOutput((prev) => prev + '\n');
                await new Promise((resolve) => setTimeout(resolve, step.delay));
            }
        }

        if (isMounted.current) {
            setState('welcome');
            setIsRunning(false);
        }
    };

    const showDebugger = async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        for (let i = 1; i <= DEBUG_CONDITIONS.length; i++) {
            if (!isMounted.current) return;
            setVisibleConditions(i);
            await new Promise((resolve) => setTimeout(resolve, 600));
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
    };

    const reset = () => {
        setOutput('');
        setState('idle');
        setVisibleConditions(0);
        setIsRunning(false);
        // Small delay to allow state to reset before restarting if needed
        setTimeout(() => {
            if (isActive) runSequence();
        }, 100);
    };

    return {
        output,
        state,
        visibleConditions,
        isRunning,
        runSequence,
        reset,
    };
};
