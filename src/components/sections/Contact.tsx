import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import AnimatedSection from '../motion/AnimatedSection';
import { fadeInUp, slideInLeft, slideInRight } from '../motion/variants';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
                    subject: 'New Contact Form Submission - Portfolio',
                    from_name: 'Portfolio Contact',
                    ...formData
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'murugan25oct@gmail.com',
            href: 'mailto:murugan25oct@gmail.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 8778987102',
            href: 'tel:+918778987102',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Srivilliputtur, Tamil Nadu',
            href: null,
        },
    ];

    return (
        <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
            <AnimatedSection>
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                        Let's work together on something great. Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div variants={slideInLeft} className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.href || undefined}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className={`flex items-center gap-4 bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors ${info.href ? 'cursor-pointer' : 'cursor-default'
                                    }`}
                            >
                                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                                    <info.icon size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400 mb-1">{info.label}</div>
                                    <div className="text-white font-medium">{info.value}</div>
                                </div>
                            </motion.a>
                        ))}

                        <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-xl border border-slate-800">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Open for Opportunities
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                I am currently available for freelance projects and full-time positions.
                                If you have a project that needs some creative touch, let's connect.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={slideInRight}>
                        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/30 p-8 rounded-2xl border border-slate-800">
                            <div className="relative">
                                <label className="text-sm text-slate-400 mb-2 block">Name</label>
                                <motion.input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    animate={{
                                        borderColor: focusedField === 'name' ? 'rgba(34, 211, 238, 0.5)' : 'rgba(30, 41, 59, 1)',
                                    }}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="relative">
                                <label className="text-sm text-slate-400 mb-2 block">Email</label>
                                <motion.input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    animate={{
                                        borderColor: focusedField === 'email' ? 'rgba(34, 211, 238, 0.5)' : 'rgba(30, 41, 59, 1)',
                                    }}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="relative">
                                <label className="text-sm text-slate-400 mb-2 block">Message</label>
                                <motion.textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    animate={{
                                        borderColor: focusedField === 'message' ? 'rgba(34, 211, 238, 0.5)' : 'rgba(30, 41, 59, 1)',
                                    }}
                                    rows={5}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none transition-colors resize-none"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className={`w-full py-4 rounded-lg font-semibold text-white shadow-lg flex items-center justify-center gap-2 transition-all ${isSubmitting
                                    ? 'bg-slate-700 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-500/25'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </motion.button>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-400"
                                >
                                    <CheckCircle size={20} />
                                    <span>Message sent successfully! I'll get back to you soon.</span>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400"
                                >
                                    <XCircle size={20} />
                                    <span>Something went wrong. Please try again later.</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </AnimatedSection>
        </section>
    );
}
