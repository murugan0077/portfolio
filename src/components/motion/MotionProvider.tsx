/**
 * MotionProvider — wraps the app with LazyMotion + domAnimation.
 *
 * This is the single biggest Lighthouse Performance win:
 * it loads only the ~15 kB "domAnimation" feature set instead of
 * the full ~95 kB framer-motion bundle.
 *
 * IMPORTANT: Any component that currently uses `import { motion } from 'framer-motion'`
 * should switch to `import { m } from 'framer-motion'` and replace `<motion.*>` → `<m.*>`.
 * AnimatePresence, useInView, useScroll, useTransform, etc. are still imported
 * directly from 'framer-motion' as usual.
 */
import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

interface MotionProviderProps {
    children: React.ReactNode;
}

export default function MotionProvider({ children }: MotionProviderProps) {
    return (
        <LazyMotion features={domAnimation} strict>
            {children}
        </LazyMotion>
    );
}
