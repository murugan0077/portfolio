import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    variants?: Variants;
    delay?: number;
    id?: string;
    width?: "full" | "contained";
}

const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
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
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div
            ref={ref}
            id={id}
            className={`relative ${width === "contained" ? "container mx-auto px-4 sm:px-6 lg:px-8" : "w-full"} ${className}`}
        >
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={variants}
                transition={{ delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default AnimatedSection;
