import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
    activeSection: string;
}

export default function Layout({ children, activeSection }: LayoutProps) {
    return (
        <div className="min-h-screen bg-[#030712] text-white">
            <Navbar activeSection={activeSection} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}