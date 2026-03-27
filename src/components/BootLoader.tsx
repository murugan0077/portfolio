import { useState, useEffect, useRef } from 'react';
import { m } from 'framer-motion';

interface BootLoaderProps {
    onComplete: () => void;
}

const bootLines = [
    "Initializing system kernel...",
    "Loading BIOS v2.4.1...",
    "Checking memory integrity... OK",
    "Mounting file systems...",
    "Loading drivers: [GPU, Audio, Network]...",
    "Establishing secure connection...",
    "Decrypting user data...",
    "Access granted.",
    "Starting interface...",
    "Welcome."
];

export default function BootLoader({ onComplete }: BootLoaderProps) {
    const [lines, setLines] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentIndex >= bootLines.length) {
            const timeout = setTimeout(() => {
                onComplete();
            }, 800);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setLines(prev => [...prev, bootLines[currentIndex]]);
            setCurrentIndex(prev => prev + 1);

            // Auto scroll to bottom
            if (containerRef.current) {
                containerRef.current.scrollTop = containerRef.current.scrollHeight;
            }
        }, Math.random() * 300 + 100); // Random delay between 100ms and 400ms

        return () => clearTimeout(timeout);
    }, [currentIndex, onComplete]);

    return (
        <m.div
            className="fixed inset-0 z-50 flex flex-col bg-black text-green-500 font-mono p-4 md:p-8 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
        >
            <div
                ref={containerRef}
                className="flex-1 overflow-y-auto scrollbar-hide"
            >
                {lines.map((line, index) => (
                    <m.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mb-1"
                    >
                        <span className="text-gray-500 mr-2">
                            [{new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]
                        </span>
                        {line}
                    </m.div>
                ))}
                <m.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-3 h-5 bg-green-500 ml-1 align-middle"
                />
            </div>

            <div className="mt-4 border-t border-green-900 pt-2 text-xs text-green-800">
                System Status: ONLINE | Memory: 64GB OK | CPU: OPTIMAL
            </div>
        </m.div>
    );
}