import { ArrowRight, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-navy-900">
            {/* Background Overlay */}
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                className="absolute inset-0 z-0 opacity-20 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
            ></motion.div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-navy-900 via-brand-navy-900/90 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white"
                >
                    <div className="inline-flex items-center gap-2 bg-brand-navy-800/50 border border-brand-navy-600 px-3 py-1 rounded-full text-brand-blue-400 text-sm font-semibold mb-6">
                        <span className="animate-pulse">●</span> Certified by Communications Authority of Kenya
                    </div>

                    <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
                        Comprehensive solutions, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-500 to-blue-200">
                            boundless possibilities.
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                        Konsut Limited is a forward-thinking IT&T and solar energy solutions provider. We empower businesses and communities with dependable, innovative, and sustainable services.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="services"
                            smooth={true}
                            className="cursor-pointer group bg-brand-blue-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-brand-blue-500/20"
                        >
                            Our Services
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            className="cursor-pointer border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>

                {/* Abstract Visuals */}
                <div className="hidden md:block relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            y: {
                                repeat: Infinity,
                                duration: 4,
                                ease: "easeInOut"
                            }
                        }}
                        className="relative z-10 bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                <Zap className="text-brand-blue-500 mb-4" size={32} />
                                <h3 className="text-white font-bold text-lg mb-2">Solar Energy</h3>
                                <p className="text-gray-400 text-sm">Sustainable power for off-grid reliability.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 translate-y-8 hover:bg-white/10 transition-colors">
                                <Shield className="text-blue-400 mb-4" size={32} />
                                <h3 className="text-white font-bold text-lg mb-2">Secure Comms</h3>
                                <p className="text-gray-400 text-sm">Mission-critical two-way radio systems.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
