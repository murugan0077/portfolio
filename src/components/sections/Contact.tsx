import { useState } from 'react';
import { m } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, XCircle, Zap } from 'lucide-react';
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
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
                    subject: 'New Contact Form Submission - Portfolio',
                    from_name: 'Portfolio Contact',
                    ...formData,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'murugan25oct@gmail.com', href: 'mailto:murugan25oct@gmail.com' },
        { icon: Phone, label: 'Phone', value: '+91 8778987102', href: 'tel:+918778987102' },
        { icon: MapPin, label: 'Location', value: 'Srivilliputtur, Tamil Nadu', href: null },
    ];

    const inputBase =
        'w-full bg-[#0a0f1a] border rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none transition-all duration-300 disabled:opacity-50';

    return (
        <section id="contact" className="py-24 sm:py-32 bg-[#030712] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-cyan-500/4 rounded-full blur-[100px] pointer-events-none" />

            <AnimatedSection>
                {/* Heading */}
                <m.div variants={fadeInUp} className="text-center mb-14 sm:mb-18">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block">
                        Get In Touch
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4" />
                    <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                        Let's work together on something great. Whether you have a question or just want to say hi — feel free to reach out!
                    </p>
                </m.div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-start">
                    {/* Left — Contact info + availability */}
                    <m.div variants={slideInLeft} className="space-y-4">
                        {contactInfo.map((info, i) => (
                            <m.a
                                key={i}
                                href={info.href || undefined}
                                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                className={`flex items-center gap-4 glass rounded-xl p-5 border border-white/[0.06] hover:border-cyan-500/25 transition-all duration-300 group ${info.href ? 'cursor-pointer' : 'cursor-default'}`}
                            >
                                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 group-hover:bg-cyan-500/15 transition-colors">
                                    <info.icon size={18} />
                                </div>
                                <div>
                                    <div className="text-[11px] text-slate-600 font-medium uppercase tracking-wider mb-0.5">{info.label}</div>
                                    <div className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">{info.value}</div>
                                </div>
                            </m.a>
                        ))}

                        {/* Availability card */}
                        <m.div
                            variants={fadeInUp}
                            className="glass rounded-xl p-6 border border-white/[0.06] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            <div className="flex items-start gap-3 relative z-10">
                                <div className="p-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 shrink-0 mt-0.5">
                                    <Zap size={18} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <h3 className="text-white font-bold text-base">Open for Opportunities</h3>
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Available for freelance projects and full-time positions. Have a project that needs a creative touch? Let's connect.
                                    </p>
                                </div>
                            </div>
                        </m.div>
                    </m.div>

                    {/* Right — Form */}
                    <m.div variants={slideInRight}>
                        <form
                            onSubmit={handleSubmit}
                            className="glass rounded-2xl p-6 sm:p-8 border border-white/[0.07] space-y-5"
                        >
                            {/* Name */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Your name"
                                    required
                                    disabled={isSubmitting}
                                    className={`${inputBase} ${
                                        focusedField === 'name'
                                            ? 'border-cyan-500/50 shadow-[0_0_0_3px_rgba(34,211,238,0.08)]'
                                            : 'border-white/[0.07] hover:border-white/[0.12]'
                                    }`}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="your@email.com"
                                    required
                                    disabled={isSubmitting}
                                    className={`${inputBase} ${
                                        focusedField === 'email'
                                            ? 'border-cyan-500/50 shadow-[0_0_0_3px_rgba(34,211,238,0.08)]'
                                            : 'border-white/[0.07] hover:border-white/[0.12]'
                                    }`}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Message
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Tell me about your project…"
                                    rows={5}
                                    required
                                    disabled={isSubmitting}
                                    className={`${inputBase} resize-none ${
                                        focusedField === 'message'
                                            ? 'border-cyan-500/50 shadow-[0_0_0_3px_rgba(34,211,238,0.08)]'
                                            : 'border-white/[0.07] hover:border-white/[0.12]'
                                    }`}
                                />
                            </div>

                            {/* Submit */}
                            <m.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={isSubmitting ? {} : { scale: 1.02, boxShadow: '0 0 30px rgba(34,211,238,0.3)' }}
                                whileTap={isSubmitting ? {} : { scale: 0.98 }}
                                className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                                    isSubmitting
                                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/20'
                                }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={16} />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} />
                                    </>
                                )}
                            </m.button>

                            {/* Status messages */}
                            {submitStatus === 'success' && (
                                <m.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/8 border border-green-500/20 text-green-400 text-sm"
                                >
                                    <CheckCircle size={18} className="shrink-0" />
                                    Message sent! I'll get back to you soon.
                                </m.div>
                            )}
                            {submitStatus === 'error' && (
                                <m.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/8 border border-red-500/20 text-red-400 text-sm"
                                >
                                    <XCircle size={18} className="shrink-0" />
                                    Something went wrong. Please try again.
                                </m.div>
                            )}
                        </form>
                    </m.div>
                </div>
            </AnimatedSection>
        </section>
    );
}