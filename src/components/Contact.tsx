import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-brand-navy-900 text-white relative">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
                <div>
                    <span className="text-brand-blue-500 font-bold uppercase tracking-wider text-sm">Get In Touch</span>
                    <h2 className="text-4xl font-display font-bold mt-2 mb-6">Let's Discuss Your Project</h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Ready to upgrade your communication or power systems? Contact us today for a free consultation or site survey.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-brand-navy-800 p-3 rounded-lg">
                                <Phone className="text-brand-blue-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Call Us</h4>
                                <p className="text-gray-400">+254 700 420 897</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-brand-navy-800 p-3 rounded-lg">
                                <Mail className="text-brand-blue-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Email Us</h4>
                                <p className="text-gray-400">info@konsut.co.ke</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-brand-navy-800 p-3 rounded-lg">
                                <MapPin className="text-brand-blue-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Visit Us</h4>
                                <p className="text-gray-400">Ruiru, Kiambu – Off Thika Road, Kenya</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-8 text-brand-navy-900">
                    <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                    <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-brand-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
