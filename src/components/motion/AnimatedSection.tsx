import React, { useRef } from 'react';
import { m, useInView, Variants } from 'framer-motion';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    variants?: Variants;
    delay?: number;
    id?: string;
    width?: "full" | "contained";
}

const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className = "",
    variants = defaultVariants,
    delay = 0,
    id,
    width = "contained"
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <div
            ref={ref}
            id={id}
            className={`relative ${width === "contained" ? "container mx-auto px-4 sm:px-6 lg:px-8" : "w-full"} ${className}`}
        >
            <m.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={variants}
                transition={{ delay }}
            >
                {children}
            </m.div>
        </div>
    );
};

export default AnimatedSection;