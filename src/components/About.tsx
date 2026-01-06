import { Target, Eye, Heart, CheckCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const values = [
        { title: "Honesty & Transparency", desc: "We believe in being open, direct, and ethical in all our dealings.", icon: <CheckCircle className="text-green-500" /> },
        { title: "Commitment to Resolution", desc: "We stay on the ground until your issue is fully resolved.", icon: <Target className="text-red-500" /> },
        { title: "Professionalism", desc: "We uphold the highest standards in execution, reporting, and support.", icon: <ShieldIcon /> },
        { title: "Teamwork", desc: "We collaborate within and beyond our team to deliver results that matter.", icon: <Users className="text-blue-500" /> },
        { title: "Reliability", desc: "We deliver what we promise, and our track record proves it.", icon: <Heart className="text-brand-blue-500" /> },
    ];

    return (
        <section id="about" className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Who We Are */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <span className="text-brand-blue-600 font-bold uppercase tracking-wider text-sm">Who We Are</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy-900 mt-2 mb-6">
                        Forward-Thinking IT&T & Solar Solutions
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Certified and regulated by the Communications Authority of Kenya, we pride ourselves on delivering dependable, innovative, and sustainable services that empower businesses and communities across the region. Our integrated solutions in two-way communication and renewable energy ensure seamless connectivity and uninterrupted power even in the most remote locations.
                    </p>

                    {/* Image Showcase */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                        <img src="/images/solar.jpg" alt="Solar Energy" className="rounded-xl shadow-lg h-40 w-full object-cover hover:scale-105 transition-transform duration-500" />
                        <img src="/images/server.png" alt="IT Infrastructure" className="rounded-xl shadow-lg h-40 w-full object-cover hover:scale-105 transition-transform duration-500translate-y-4" />
                        <img src="/images/cctv.jpg" alt="Security Systems" className="rounded-xl shadow-lg h-40 w-full object-cover hover:scale-105 transition-transform duration-500" />
                        <img src="/images/radio.png" alt="Communication" className="rounded-xl shadow-lg h-40 w-full object-cover hover:scale-105 transition-transform duration-500 translate-y-4" />
                    </div>
                </motion.div>

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-brand-navy-50 p-8 rounded-2xl border-l-4 border-brand-blue-500"
                    >
                        <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mb-4">
                            <Eye className="text-brand-navy-900" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy-900 mb-4">Our Vision</h3>
                        <p className="text-gray-700 text-lg">
                            To be the most trusted and dependable provider of communication, security, and power solutions across East Africa.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-brand-navy-900 p-8 rounded-2xl border-l-4 border-brand-blue-500 text-white"
                    >
                        <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
                            <Target className="text-brand-blue-500" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-300 text-lg">
                            To deliver tailored, high-quality engineering and technical services that empower our clients through reliability, innovation, and integrity.
                        </p>
                    </motion.div>
                </div>

                {/* Core Values */}
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-brand-navy-900 mb-12">Core Values</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((val, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-4">{val.icon}</div>
                                <h4 className="font-bold text-brand-navy-900 text-lg mb-2">{val.title}</h4>
                                <p className="text-gray-600 text-sm">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

function ShieldIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-navy-600">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    )
}

export default About;
