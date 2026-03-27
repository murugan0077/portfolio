import { useEffect, useRef, useState } from 'react';
import { m } from 'framer-motion';

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [blobsReady, setBlobsReady] = useState(false);

    useEffect(() => {
        // Defer blob animations until browser is idle (or 1 s fallback)
        let idleHandle: number | ReturnType<typeof setTimeout>;

        const startBlobs = () => setBlobsReady(true);

        if ('requestIdleCallback' in window) {
            idleHandle = (window as Window & typeof globalThis).requestIdleCallback(startBlobs, { timeout: 1000 });
        } else {
            idleHandle = setTimeout(startBlobs, 1000);
        }

        return () => {
            if ('cancelIdleCallback' in window && typeof idleHandle === 'number') {
                (window as Window & typeof globalThis).cancelIdleCallback(idleHandle as number);
            } else {
                clearTimeout(idleHandle as ReturnType<typeof setTimeout>);
            }
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animFrameId: number;
        const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize, { passive: true });

        // Init particles
        for (let i = 0; i < 30; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.4 + 0.1,
            });
        }

        // Delay canvas draw until idle/1 s to avoid blocking LCP
        let startHandle: number | ReturnType<typeof setTimeout>;

        const beginDraw = () => {
            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw connections
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 120) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(34,211,238,${0.06 * (1 - dist / 120)})`;
                            ctx.lineWidth = 0.5;
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }

                // Draw & update particles
                particles.forEach(p => {
                    p.x += p.vx;
                    p.y += p.vy;
                    if (p.x < 0) p.x = canvas.width;
                    if (p.x > canvas.width) p.x = 0;
                    if (p.y < 0) p.y = canvas.height;
                    if (p.y > canvas.height) p.y = 0;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(34,211,238,${p.opacity})`;
                    ctx.fill();
                });

                animFrameId = requestAnimationFrame(draw);
            };
            draw();
        };

        if ('requestIdleCallback' in window) {
            startHandle = (window as Window & typeof globalThis).requestIdleCallback(beginDraw, { timeout: 1000 });
        } else {
            startHandle = setTimeout(beginDraw, 1000);
        }

        return () => {
            if ('cancelIdleCallback' in window && typeof startHandle === 'number') {
                (window as Window & typeof globalThis).cancelIdleCallback(startHandle as number);
            } else {
                clearTimeout(startHandle as ReturnType<typeof setTimeout>);
            }
            cancelAnimationFrame(animFrameId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Base dark background */}
            <div className="absolute inset-0 bg-[#030712]" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(34,211,238,1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Particle canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-60"
            />

            {/* Ambient glow blobs — mounted after idle/1 s */}
            {blobsReady && (
                <>
                    <m.div
                        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25], x: [0, 40, 0], y: [0, -20, 0] }}
                        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ willChange: 'transform, opacity' }}
                        className="absolute top-[5%] left-[10%] w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[120px]"
                    />
                    <m.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2], x: [0, -30, 0], y: [0, 40, 0] }}
                        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                        style={{ willChange: 'transform, opacity' }}
                        className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[130px]"
                    />
                    <m.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
                        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                        style={{ willChange: 'transform, opacity' }}
                        className="absolute top-[45%] left-[55%] w-[250px] h-[250px] rounded-full bg-indigo-500/15 blur-[80px]"
                    />
                </>
            )}

            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,transparent_60%,#030712_100%)]" />
        </div>
    );
}