import { useState } from 'react';
import { m, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    category: string;
    image: string;
    featured: boolean;
}

interface BookFlipCarouselProps {
    projects: Project[];
}

export default function BookFlipCarousel({ projects }: BookFlipCarouselProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 2;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const getCurrentProjects = () => {
        const start = currentPage * projectsPerPage;
        return projects.slice(start, start + projectsPerPage);
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const swipeThreshold = 50;
        if (info.offset.x > swipeThreshold) {
            handlePrev();
        } else if (info.offset.x < -swipeThreshold) {
            handleNext();
        }
    };

    const currentProjects = getCurrentProjects();

    return (
        <div className="w-full flex flex-col items-center gap-8">
            <m.div
                drag="x"
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                dragConstraints={{ left: 0, right: 0 }}
                className="w-full max-w-6xl perspective"
                style={{ perspective: '1000px' }}
            >
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <AnimatePresence mode="wait">
                        {currentProjects.map((project, index) => (
                            <m.div
                                key={`${currentPage}-${index}`}
                                initial={{ rotateY: 90, opacity: 0 }}
                                animate={{ rotateY: 0, opacity: 1 }}
                                exit={{ rotateY: -90, opacity: 0 }}
                                transition={{
                                    rotateY: { duration: 0.6, ease: 'easeOut' },
                                    opacity: { duration: 0.3 },
                                }}
                                style={{
                                    perspective: '1000px',
                                    transformStyle: 'preserve-3d',
                                } as React.CSSProperties}
                                className="h-full"
                            >
                                <div className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-colors h-full flex flex-col">
                                    <div className="relative overflow-hidden h-56 md:h-64">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                            <m.a
                                                href="#"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="View live project"
                                                className="p-3 bg-cyan-500 rounded-full text-slate-950"
                                            >
                                                <ExternalLink size={20} />
                                            </m.a>
                                            <m.a
                                                href="#"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="View GitHub source"
                                                className="p-3 bg-slate-800 rounded-full text-white"
                                            >
                                                <Github size={20} />
                                            </m.a>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                                {project.featured && (
                                                    <span className="px-2 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-md border border-cyan-500/20">
                                                        Featured
                                                    </span>
                                                )}
                                            </div>

                                            <p className="text-slate-400 text-sm mb-4">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </m.div>
                        ))}
                    </AnimatePresence>
                </div>
            </m.div>

            <div className="flex items-center justify-center gap-6">
                <m.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrev}
                    className="p-3 bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 rounded-full border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                    <ChevronLeft size={24} />
                </m.button>

                <div className="flex gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <m.button
                            key={i}
                            onClick={() => setCurrentPage(i)}
                            animate={{
                                scale: i === currentPage ? 1.2 : 1,
                                backgroundColor: i === currentPage ? '#06b6d4' : '#1e293b',
                            }}
                            className="w-2 h-2 rounded-full border border-slate-700 transition-colors"
                        />
                    ))}
                </div>

                <m.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                    className="p-3 bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 rounded-full border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                    <ChevronRight size={24} />
                </m.button>
            </div>

            <p className="text-slate-400 text-sm">
                Page {currentPage + 1} of {totalPages}
            </p>
        </div>
    );
}
