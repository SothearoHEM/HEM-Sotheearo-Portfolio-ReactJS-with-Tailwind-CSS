import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Download, ChevronDown, User, Code, BookOpen, Briefcase, GraduationCap, Heart } from 'lucide-react';
import profileImg from '../assets/DSC02808-4.jpg';
import MyCv from '../assets/Resume_Hem_Sothearo_Web_Developer_Intern.pdf';

function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [blink, setBlink] = useState(true);
  const fullText = 'Web Developer | Computer Science Student';
  const blinkCursor = '|';

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
    <div className='w-full flex flex-col'>
      <section className='bg-[#0B1120] text-white min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden'>
        <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-700'></div>
      </div>

      <div className='max-w-6xl mx-auto w-full relative z-10 px-6 py-12'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className='shrink-0 relative group'>
            <div className='absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity animate-pulse'></div>
            <div className='relative p-1 bg-slate-800 rounded-full' style={{ background: 'linear-gradient(45deg, #3b82f6, #06b6d4)'}}>
              <img 
              src={profileImg} 
              alt="Hem Sothearo" 
              className='relative w-60 h-60 md:w-85 md:h-85 rounded-full object-cover border-4 border-slate-900 shadow-2xl'
            />
            </div>
          </div>
          
          <div className='text-center md:text-left flex-1 md:ml-10 ml-0 md:px-0 px-1'>
            <div className='mb-4'>
              <span className='inline-block bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium'>
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className='text-4xl md:text-7xl mb-4 font-semibold'>
              Hi, I&apos;m <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300'>Sothearo</span>
            </h1>
            
            <div className='flex items-center justify-center md:justify-start mb-6 h-12'>
              <h2 className='text-2xl md:text-3xl text-slate-300'>
                {displayedText}<span className='text-2xl md:text-3xl text-blue-400' style={{ opacity: blink ? 1 : 0 }}>{blinkCursor}</span>
              </h2>
            </div>
            
            <p className='text-base md:text-xl max-w-2xl leading-relaxed mb-4 text-slate-400'>
              I am a third-year Computer Science student who enjoys building websites and web applications. I have experience using ReactJS for frontend and PHP Laravel for backend. I can create simple APIs, connect databases, and build responsive web pages. I am eager to improve my skills and gain real-world experience as a web developer intern.
            </p>
            
            <p className='text-base md:text-xl max-w-2xl leading-relaxed mb-8 text-blue-300/80'>
              Feel free to explore my portfolio and reach out if you have any opportunities or questions!
            </p>
            
            <div className='flex flex-wrap gap-4 justify-center md:justify-start md:mb-8 mb-0'>
              <Link 
                to="/contact" 
                className='bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/20 justify-center font-medium'
              >
                <Mail className='w-5 h-5' />
                Contact Me
              </Link>
              <Link 
                to="/projects" 
                className='border border-slate-600 bg-slate-800/50 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-lg transition-all hover:scale-105 flex items-center gap-2 justify-center font-medium'
              >
                View Projects
              </Link>
              <a 
                href={MyCv} 
                download
                className='border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 px-6 py-3 rounded-lg transition-all hover:scale-105 flex gap-2 justify-center font-medium'
                title="Download CV"
              >
                <Download className='w-5 h-5' />
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-16'>
          <a href="#explore" className='animate-bounce bg-[#101827] p-2 rounded-full border border-blue-800/50 hover:bg-blue-900/30 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.1)]'>
            <ChevronDown className='w-6 h-6 text-cyan-400' />
          </a>
        </div>
      </div>
      </section>
      
      {/* Explore More Section */}
      <section id="explore" className='w-full bg-[#0B1120] border-t border-blue-900/30 relative z-20 py-20 px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300'>Explore More</h2>
            <p className='text-blue-200/70 mt-4 max-w-2xl mx-auto text-lg'>Discover my background, technical skills, projects, and experiences.</p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { path: '/about', name: 'About', icon: User, color: 'from-blue-500 to-cyan-400', desc: 'Learn more about my background, passion for web development, and personal journey.' },
              { path: '/skills', name: 'Skills', icon: Code, color: 'from-cyan-500 to-indigo-400', desc: 'Discover the technologies, frameworks, and programming languages I use.' },
              { path: '/projects', name: 'Projects', icon: Briefcase, color: 'from-indigo-500 to-blue-400', desc: 'Explore the web applications and software solutions I have built.' },
              { path: '/education', name: 'Education', icon: GraduationCap, color: 'from-blue-400 to-indigo-500', desc: 'View my academic background, degrees, and educational achievements.' },
              { path: '/courses', name: 'Courses', icon: BookOpen, color: 'from-cyan-400 to-blue-500', desc: 'Check out the certifications and additional training I have completed.' },
              { path: '/volunteer', name: 'Volunteer', icon: Heart, color: 'from-indigo-400 to-cyan-500', desc: 'Read about my community service and volunteer experiences.' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={index}
                  to={item.path} 
                  className='group flex flex-col bg-[#101827] p-8 rounded-2xl border border-blue-900/40 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg relative overflow-hidden'
                >
                  <div className='absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-linear-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 opacity-50'></div>
                  
                  <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-linear-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className='w-7 h-7 text-white' />
                  </div>
                  
                  <h3 className='text-xl text-white font-semibold mb-3 group-hover:text-cyan-400 transition-colors'>{item.name}</h3>
                  <p className='text-blue-200/70 text-sm mb-8 grow leading-relaxed'>{item.desc}</p>
                  
                  <div className='inline-flex items-center text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mt-auto'>
                    View {item.name}
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home