import React, { useEffect, useRef, useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'volunteer', label: 'Volunteer', href: '#volunteer' },
  { id: 'courses', label: 'Courses', href: '#courses' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setMobileMenuOpen(false);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className={`z-50 fixed top-0 left-0 right-0 px-4 md:px-6 transition-all duration-300 h-15 ${
      scrolled
        ? 'backdrop-blur-md bg-blue-950/80 shadow-lg shadow-black/30'
        : 'bg-linear-to-r from-blue-900 via-purple-900 to-blue-900 shadow-lg shadow-black/20'
    }`}>
      <nav className='max-w-7xl mx-auto flex items-center justify-between h-full'>
        <a href='#home' className='text-white text-2xl tracking-tight'>
          <span className='text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500'>HEM</span> Sothearo
        </a>

        {/* Desktop Nav */}
        <div className='items-center md:flex hidden gap-x-5'>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`relative px-1 py-0.5 text-sm transition duration-300 ${
                activeSection === item.id
                  ? 'text-cyan-400'
                  : 'text-white hover:text-blue-300'
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMobileMenu}
          className='md:hidden block text-white w-8 h-8 items-center justify-center rounded-lg hover:bg-white/10 transition-colors'
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <IoMdClose className='w-6 h-6' /> : <FiAlignJustify className='w-6 h-6' />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className='absolute top-full left-0 w-full backdrop-blur-md bg-blue-950/95 flex flex-col items-center py-4 md:hidden shadow-lg shadow-black/30 animate-slideDown'
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-6 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-white hover:text-blue-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar