import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/murugan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/murugan', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:murugan25oct@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Murugan.dev
            </h3>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Crafting scalable digital solutions with modern web technologies.
              Focused on performance, accessibility, and user experience.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-cyan-500 transition-colors border border-slate-800 hover:border-cyan-500"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="space-y-2 text-slate-400">
              <a href="mailto:murugan25oct@gmail.com" className="block hover:text-cyan-400 transition-colors">
                murugan25oct@gmail.com
              </a>
              <a href="tel:+918778987102" className="block hover:text-cyan-400 transition-colors">
                +91 8778987102
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Murugan S. All rights reserved.</p>
          {/* <p className="flex items-center gap-2">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Framer Motion
          </p> */}
        </div>
      </div>
    </footer>
  );
}
