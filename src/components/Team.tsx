import { User } from 'lucide-react';

const Team = () => {
    const roles = [
        "Technical Directors",
        "Certified Engineers",
        "Experienced Radio Technicians",
        "Solar and Power Specialists",
        "Operations Manager",
        "Administrative Support"
    ];

    return (
        <section id="team" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-blue-600 font-bold uppercase tracking-wider text-sm">Our People</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy-900 mt-2 mb-6">
                        The Team Behind the Success
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Konsut Limited is powered by a multidisciplinary team bringing a blend of field-tested expertise, agility, and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {roles.map((role, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-transparent hover:border-brand-blue-500 transition-all text-center group">
                            <div className="w-16 h-16 bg-brand-navy-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-navy-900 transition-colors">
                                <User className="text-brand-navy-900 group-hover:text-brand-blue-500 transition-colors" size={28} />
                            </div>
                            <h3 className="font-bold text-brand-navy-900">{role}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
