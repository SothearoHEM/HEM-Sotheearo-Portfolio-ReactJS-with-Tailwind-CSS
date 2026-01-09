import React from 'react'
import { FiAlignJustify } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';


function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }  
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
  return (
    <div className='z-50 fixed top-0 left-0 right-0 px-4 md:px-6 bg-linear-to-r from-blue-900 via-purple-900 to-blue-900 h-15 shadow-lg shadow-black/20'>
        <nav className='max-w-7xl mx-auto flex items-center justify-between h-full'>
            <a href='#home' className='text-white text-2xl'><span className='text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500'>Hem</span> Sothearo</a>
            <div className='items-center md:flex hidden'>
                {navItems.map((item) => (
                    <a 
                        key={item.id} 
                        href={item.href} 
                        className='text-white mx-4 hover:text-blue-500 transition duration-300 border-b-2 border-transparent hover:border-blue-500'
                    >
                        {item.label}
                    </a>
                ))
                }
            </div>
            <button onClick={toggleMobileMenu} className='md:hidden block'>
                {mobileMenuOpen ? (<IoMdClose className='text-white w-6 h-6' />) : (<FiAlignJustify className='text-white w-6 h-6' />)}
            </button>
            {mobileMenuOpen && (
                <div className='absolute top-15 left-0 w-full bg-linear-to-r from-blue-900/80 via-purple-900/80 to-blue-900/80 flex flex-col items-center md:hidden'>
                    {navItems.map((item) => (
                        <a 
                            key={item.id} 
                            href={item.href}
                            className='text-white my-3 hover:text-blue-700 transition duration-300'
                            onClick={() => {
                                setMobileMenuOpen(false);
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    </div>
  )
}

export default NavBar