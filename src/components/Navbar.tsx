import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Who We Are', to: 'about' },
        { name: 'Services', to: 'services' },
        { name: 'Team', to: 'team' },
        { name: 'Clients', to: 'clients' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy-900 shadow-md py-2' : 'bg-brand-navy-900 py-4 shadow-sm'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Area */}
                <div className="flex items-center gap-2">
                    <img src="/images/logo.jpg" alt="Konsut Ltd" className="h-16 md:h-20 w-auto object-contain mix-blend-screen" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer font-medium hover:text-brand-blue-500 transition-colors text-white`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="bg-brand-blue-500 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg"
                    >
                        Get Solution
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-brand-blue-500"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-brand-navy-900 shadow-xl py-6 px-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-white text-lg font-medium border-b border-gray-700 pb-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
