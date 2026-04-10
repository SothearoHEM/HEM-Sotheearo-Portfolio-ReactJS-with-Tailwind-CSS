import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#080d19] border-t border-blue-900/30 pt-16 pb-8 text-blue-50 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand/About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-300">
              Hem Sothearo
            </h3>
            <p className="text-blue-200/70 leading-relaxed max-w-sm">
              A passionate Web Developer and Computer Science student building clean, responsive, and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Skills', path: '/skills' },
                { name: 'Education', path: '/education' },
                { name: 'Contact', path: '/contact' },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-blue-200/70 hover:text-cyan-400 transition-colors w-max"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Connect With Me</h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/SothearoHEM"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#101827] border border-blue-800/50 flex flex-col items-center justify-center text-blue-200 hover:text-cyan-400 hover:border-cyan-400 transition-all hover:scale-110 shadow-lg hover:shadow-cyan-500/20"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sothearo-hem-9a862b3a2"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#101827] border border-blue-800/50 flex flex-col items-center justify-center text-blue-200 hover:text-indigo-400 hover:border-indigo-400 transition-all hover:scale-110 shadow-lg hover:shadow-indigo-500/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sothearohem@gmail.com"
                className="w-10 h-10 rounded-full bg-[#101827] border border-blue-800/50 flex flex-col items-center justify-center text-blue-200 hover:text-blue-400 hover:border-blue-400 transition-all hover:scale-110 shadow-lg hover:shadow-blue-500/20"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://t.me/HemSothearo"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#101827] border border-blue-800/50 flex flex-col items-center justify-center text-blue-200 hover:text-cyan-400 hover:border-cyan-400 transition-all hover:scale-110 shadow-lg hover:shadow-cyan-500/20"
                aria-label="Telegram"
              >
                <FaTelegram size={20} />
              </a>
            </div>
            <p className="text-blue-200/70 mt-6 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              Available for opportunities
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-900/30 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/50 text-sm text-center md:text-left">
            &copy; {year} Hem Sothearo. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-blue-200/50">
            <span>Built with React</span>
            <span className="text-cyan-400 px-1">&amp;</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;