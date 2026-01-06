

import { motion } from 'framer-motion';

const Clients = () => {
    const clients = [
        { name: "Maasai Mara", logo: "/images/clients/maasai-mara.jpg" },
        { name: "Mara Conservancy", logo: "/images/clients/mara-conservancy.jpg" },
        { name: "Lewa Wildlife Conservancy", logo: "/images/clients/lewa.jpg" },
        { name: "Laragai House", logo: "/images/clients/laragai.jpg" },
        { name: "Kenya Wildlife Service", logo: "/images/clients/kws.jpg" },
        { name: "Zeitz Foundation", logo: "/images/clients/zeitz-foundation.jpg" },
        { name: "Tsavo Trust", logo: "/images/clients/tsavo-trust.jpg" },
        { name: "Sheldrick Wildlife Trust", logo: "/images/clients/sheldrick-trust.jpg" },
        { name: "Campi ya Kanzi", logo: "/images/clients/campi-ya-kanzi.jpg" },
        { name: "Chyulu Wilderness Camp", logo: "/images/clients/chyulu-wilderness.jpg" },
        { name: "Sirikoi", logo: "/images/clients/sirikoi.jpg" },
        { name: "Segera Retreat", logo: "/images/clients/segera.jpg" },
        { name: "4x4 Adventures", logo: "/images/clients/4x4-adventures.jpg" },
    ];

    return (
        <section id="clients" className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-display font-bold text-brand-navy-900 mb-12">Key Clients</h2>

                <div className="relative w-full overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                    <motion.div
                        className="flex items-center gap-12 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {[...clients, ...clients].map((client, idx) => (
                            <div key={idx} className="w-32 md:w-40 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500">
                                <img src={client.logo} alt={client.name} className="max-w-full h-20 object-contain mix-blend-multiply" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
