import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.7, ease: 'easeOut' }
    }
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.85, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -70, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
};

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 70, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
};

export const hoverScale: Variants = {
    hover: {
        scale: 1.05,
        transition: { duration: 0.2, ease: 'easeInOut' }
    },
    tap: { scale: 0.95 }
};

export const pageTransition: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

export const cardHover: Variants = {
    rest: { y: 0, boxShadow: '0 0 0px rgba(34,211,238,0)' },
    hover: {
        y: -6,
        boxShadow: '0 20px 40px rgba(34,211,238,0.12)',
        transition: { duration: 0.3, ease: 'easeOut' }
    }
};

export const glowPulse: Variants = {
    rest: { opacity: 0.2 },
    hover: {
        opacity: 0.7,
        transition: { duration: 0.4, ease: 'easeOut' }
    }
};