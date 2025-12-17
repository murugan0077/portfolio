import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';

interface LayoutProps {
    children: React.ReactNode;
    activeSection: string;
}

export default function Layout({ children, activeSection }: LayoutProps) {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
            {/* <Cursor /> */}
            <Navbar activeSection={activeSection} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
