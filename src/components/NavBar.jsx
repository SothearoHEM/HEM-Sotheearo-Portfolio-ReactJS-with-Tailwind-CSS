import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'skills', label: 'Skills', href: '/skills' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'education', label: 'Education', href: '/education' },
  { id: 'volunteer', label: 'Volunteer', href: '/volunteer' },
  { id: 'courses', label: 'Courses', href: '/courses' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const activeSection = location.pathname;

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

  return (
    <div className={`z-50 fixed top-0 left-0 right-0 px-4 md:px-6 transition-all duration-300 h-20 ${
      scrolled
        ? 'backdrop-blur-md bg-[#0B1120]/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-blue-900/40'
        : 'bg-[#0B1120] shadow-[0_4px_20px_rgba(0,0,0,0.3)] border-b border-transparent'
    }`}>
      <nav className='max-w-7xl mx-auto flex items-center justify-between h-full'>
        <Link to='/' className='text-white text-2xl font-semibold tracking-tight group'>
          <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300'>HEM</span> Sothearo
        </Link>

        {/* Desktop Nav */}
        <div className='items-center md:flex hidden gap-x-6'>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 group ${
                activeSection === item.href
                  ? 'text-cyan-400'
                  : 'text-blue-200/70 hover:text-cyan-300'
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-300 ${
                  activeSection === item.href ? 'w-full shadow-[0_0_8px_rgba(34,211,238,0.6)]' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMobileMenu}
          className='md:hidden block text-cyan-400 w-10 h-10 items-center justify-center rounded-xl hover:bg-[#101827] border border-transparent hover:border-blue-900/50 transition-all focus:outline-none'
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <IoMdClose className='w-7 h-7 mx-auto' /> : <FiAlignJustify className='w-7 h-7 mx-auto' />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className='absolute top-full left-0 w-full backdrop-blur-xl bg-[#0B1120]/95 border-b border-blue-900/40 flex flex-col items-center py-6 md:hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-slideDown'
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-[90%] rounded-xl text-center py-3 px-6 my-1 transition-all duration-300 ${
                  activeSection === item.href
                    ? 'text-cyan-300 bg-[#101827] font-semibold border border-blue-900/50 shadow-inner'
                    : 'text-blue-200/80 hover:text-cyan-300 hover:bg-[#101827]/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar