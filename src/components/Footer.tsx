import { Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-brand-navy-950 text-white border-t border-brand-navy-900 py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Globe className="text-brand-blue-500" size={24} />
                            <span className="font-display font-bold text-xl">KONSUT <span className="text-brand-blue-500">LIMITED</span></span>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Comprehensive solutions, boundless possibilities. Your trusted partner in IT&T and Solar Energy solutions across East Africa.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="text-gray-400 hover:text-brand-blue-500 transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="about" smooth={true} className="hover:text-brand-gold-500 cursor-pointer">Who We Are</Link></li>
                            <li><Link to="services" smooth={true} className="hover:text-brand-gold-500 cursor-pointer">Our Services</Link></li>
                            <li><Link to="team" smooth={true} className="hover:text-brand-gold-500 cursor-pointer">Our Team</Link></li>
                            <li><Link to="contact" smooth={true} className="hover:text-brand-gold-500 cursor-pointer">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Solar Power Systems</li>
                            <li>Two-Way Communication</li>
                            <li>CCTV Surveillance</li>
                            <li>Secure Networks</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-navy-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; 2025 Konsut Limited. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
