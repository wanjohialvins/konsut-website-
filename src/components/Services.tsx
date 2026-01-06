import { motion } from 'framer-motion';
import { Radio, Wifi, Camera, Command, Sun, GraduationCap, ClipboardCheck, ShoppingBag } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Radio size={32} />,
            title: "Two-Way Communication",
            desc: "Design, installation, and maintenance of VHF/UHF & digital radio systems. Motorola, Hytera, Base stations, Repeaters (SLR5500), and PoC (Push-to-Talk Over Cellular) solutions like WAVE PTX, Zello.",
        },
        {
            icon: <Wifi size={32} />,
            title: "Secure Network Infra",
            desc: "Secure wired & wireless networks. Firewall implementation, VPNs, encryption protocols, and remote access control for mission-critical IT environments.",
        },
        {
            icon: <Camera size={32} />,
            title: "CCTV Surveillance",
            desc: "End-to-end security monitoring. IP & Analog systems, PTZ cameras, remote viewing via mobile apps, motion detection analytics, and alerts.",
        },
        {
            icon: <Command size={32} />,
            title: "Control Room Setups",
            desc: "Turnkey setups for security & fleet. GPS tracking, Voice Dispatch, Event Monitoring. Platforms: TRBOnet, Hytera SmartDispatch, Motorola WAVE PTX.",
        },
        {
            icon: <Sun size={32} />,
            title: "Solar Power Systems",
            desc: "Design & supply for homes, institutions, and off-grid telecom. System sizing, battery backup, hybrid integration, and after-sales support.",
        },
        {
            icon: <GraduationCap size={32} />,
            title: "Technical Training",
            desc: "Hands-on capacity building for Radio systems, Solar deployment, CCTV operations, and Preventive maintenance protocols.",
        },
        {
            icon: <ClipboardCheck size={32} />,
            title: "Site Surveys & Assessments",
            desc: "Thorough surveys before deployment. Signal mapping, Power audits, Risk assessments, and Upgrade recommendations.",
        },
        {
            icon: <ShoppingBag size={32} />,
            title: "Equipment Supply",
            desc: "Stock and supply of Handheld/Mobile radios, Antennas, Power supplies, Batteries, CCTV components, Solar panels, and Inverters.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="services" className="py-12 md:py-20 bg-brand-navy-900 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-navy-600/20 rounded-full filter blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-blue-500 font-bold uppercase tracking-wider text-sm">Our Expertise</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-2 mb-6">
                        Comprehensive Services
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        From mission-critical communications to sustainable energy, we deliver integrated solutions tailored to your needs.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-brand-navy-800 p-6 rounded-xl border border-brand-navy-700 hover:border-brand-blue-500/50 hover:shadow-2xl hover:shadow-brand-blue-500/10 transition-all duration-300 group"
                        >
                            <div className="text-brand-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 min-h-[56px] flex items-center">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
