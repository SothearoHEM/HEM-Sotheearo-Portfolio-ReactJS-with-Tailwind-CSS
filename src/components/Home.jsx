import { useState, useEffect } from 'react';
import { Mail, Download, ChevronDown } from 'lucide-react';
import profileImg from '../assets/DSC02808-4.jpg';
import MyCv from '../assets/Hem Sothearo-CV.pdf';

function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [blink, setBlink] = useState(true);
  const fullText = 'Web Developer';
  const blinkcursor = '|';

   useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkTimer);
  }, []);
  return (
    <section id="home" className='bg-linear-to-br from-blue-900 via-purple-900 to-indigo-900 text-white pt-32 pb-24 px-6 min-h-screen flex items-center relative overflow-hidden'>
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-700'></div>
        <div className='absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      <div className='max-w-6xl mx-auto w-full relative z-10'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className='shrink-0 relative group'>
            <div className='absolute inset-0 bg-linear-to-r from-cyan-400 via-purple-400 to-orange-400 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse'></div>
            <div className='relative p-1 bg-gray-900 rounded-full' style={{ background: 'linear-gradient(45deg, #22d3ee, #a855f7, #fb923c)'}}>
              <img 
              src={profileImg} 
              alt="Hem Sothearo" 
              className='relative w-60 h-60 md:w-90 md:h-90 rounded-full object-cover border-gradient shadow-2xl'
            />
            </div>
          </div>
          
          <div className='text-center md:text-left flex-1 md:ml-10 ml-0 md:px-0 px-1'>
            <div className='mb-4'>
              <span className='inline-block bg-linear-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm'>
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className='text-4xl md:text-7xl mb-4'>
              Hi, I&apos;m <span className='text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-400 to-orange-400'>Sothearo</span>
            </h1>
            
            <h2 className='text-2xl md:text-4xl text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-purple-300 mb-6 h-12'>
              {displayedText}<span>{blink ? blinkcursor : ''}</span>
            </h2>
            
            <p className='text-md md:text-xl max-w-2xl leading-relaxed mb-4'>
              I am a third-year Computer Science student who enjoys building websites and web applications. I have experience using ReactJS for frontend and PHP Laravel for backend. I can create simple APIs, connect databases, and build responsive web pages. I am eager to improve my skills and gain real-world experience as a web developer intern.
            </p>
            
            <p className='text-md md:text-xl max-w-2xl leading-relaxed mb-8 text-cyan-200'>
              Feel free to explore my portfolio and reach out if you have any opportunities or questions!
            </p>
            
            <div className='md:flex flex-wrap md:space-y-0 space-y-4 gap-4 justify-center md:justify-start md:mb-8 mb-0'>
              <a 
                href="#contact" 
                className='bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-3 rounded-lg transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-purple-500/50 justify-center'
              >
                <Mail className='w-5 h-5' />
                Contact Me
              </a>
              <a 
                href="#projects" 
                className='border-2 border-cyan-400 hover:bg-cyan-400/20 text-white px-4 py-3 rounded-lg transition-all hover:scale-105 flex items-center gap-2 justify-center'
              >
                View Projects
              </a>
              <a 
                href={MyCv} 
                download
                className='border-2 flex gap-2 border-purple-400 hover:bg-purple-400/20 text-white px-4 py-3 rounded-lg transition-all hover:scale-105 justify-center'
                title="Download CV"
              >
                <Download className='w-5 h-5' />
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-16'>
          <a href="#about" className='animate-bounce'>
            <ChevronDown className='w-8 h-8 text-cyan-300' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home