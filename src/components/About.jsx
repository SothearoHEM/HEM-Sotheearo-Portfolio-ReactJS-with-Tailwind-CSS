import { User, Globe, Heart,Award, Target, Coffee} from 'lucide-react';
import personalImg from '../assets/DSC02809-3.jpg';

function About() {
    const stats = [
    { label: 'Years of Study', value: '3+', icon: Award },
    { label: 'Volunteer Events', value: '3', icon: Heart },
    { label: 'Certifications', value: '3', icon: Target },
    { label: 'Projects Completed', value: '5+', icon: Coffee },
  ];
  return (
     <section className='py-20 px-6 bg-[#0B1120] min-h-screen' id="about">
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 font-bold'>About Me</h2>
          <p className='text-lg text-blue-200/70 max-w-2xl mx-auto'>
            Passionate web developer dedicated to creating beautiful and functional digital experiences
          </p>
        </div>        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const gradients = [
              'from-blue-600 to-cyan-600',
              'from-blue-500 to-indigo-600',
              'from-cyan-600 to-blue-500',
              'from-indigo-500 to-blue-600'
            ];
            return (
              <div key={index} className={`bg-[#101827] border border-blue-900/40 bg-linear-to-br p-6 rounded-lg text-center hover:shadow-cyan-500/20 transition-all hover:scale-105 hover:border-blue-500/50 text-blue-50 shadow-lg`}>
                <div className={`inline-flex bg-linear-to-r ${gradients[index]} p-3 rounded-full mb-3 shadow-lg`}>
                  <Icon className='w-8 h-8 mx-auto text-white' />
                </div>
                <div className='text-3xl mb-1 font-bold'>{stat.value}</div>
                <div className='text-sm text-blue-200/70'>{stat.label}</div>
              </div>
            );
          })}
        </div>        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='order-2 md:order-1'>
            <div className='space-y-6'>
              <div className='flex gap-4 bg-[#101827] p-6 rounded-2xl border border-blue-900/40 shadow-lg'>
                <div className='shrink-0'>
                  <User className='w-8 h-8 text-blue-400' />
                </div>
                <div>
                  <h3 className='text-xl text-blue-50 font-semibold mb-2'>Background & Education</h3>
                  <p className='text-blue-200/70 leading-relaxed'>
                    I am currently studying Computer Science at Royal University of Phnom Penh. I am passionate about web development and enjoy learning new technologies.
                     I have experience working with ReactJS, Tailwind CSS, PHP Laravel, and SQL databases.
                    I am a fast learner, hardworking, and a team player. 
                    My goal is to become a professional full-stack developer and contribute to real-world projects.
                  </p>
                </div>
              </div>
              
              <div className='flex gap-4 bg-[#101827] p-6 rounded-2xl border border-blue-900/40 shadow-lg'>
                <div className='shrink-0'>
                  <Globe className='w-8 h-8 text-cyan-400' />
                </div>
                <div className='w-full'>
                  <h3 className='text-xl text-blue-50 font-semibold mb-3'>Languages</h3>
                  <div className='space-y-4'>
                    <div>
                      <div className='flex justify-between mb-1'>
                        <span className='text-blue-200/80'>Khmer</span>
                        <span className='text-cyan-300 text-sm border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 rounded-full'>Native</span>
                      </div>
                      <div className='bg-blue-950/50 rounded-full h-2 w-full'>
                        <div className='bg-linear-to-r from-blue-500 to-cyan-400 h-2 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]' style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between mb-1'>
                        <span className='text-blue-200/80'>English</span>
                        <span className='text-blue-300 text-sm border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 rounded-full'>Advanced</span>
                      </div>
                      <div className='bg-blue-950/50 rounded-full h-2 w-full'>
                        <div className='bg-linear-to-r from-blue-600 to-indigo-500 h-2 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]' style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='flex gap-4 bg-[#101827] p-6 rounded-2xl border border-blue-900/40 shadow-lg'>
                <div className='shrink-0'>
                  <Heart className='w-8 h-8 text-indigo-400' />
                </div>
                <div>
                  <h3 className='text-xl text-blue-50 font-semibold mb-2'>Hobbies & Interests</h3>
                  <p className='text-blue-200/70 mb-4'>
                    Beyond coding, I enjoy staying active and creative:
                  </p>
                  <div className='flex flex-wrap gap-3'>
                    <span className='bg-[#0B1120] border border-blue-800/50 text-blue-200 px-4 py-2 rounded-full text-sm shadow-sm hover:border-blue-500/50 transition-colors'>📚 Reading</span>
                    <span className='bg-[#0B1120] border border-blue-800/50 text-cyan-200 px-4 py-2 rounded-full text-sm shadow-sm hover:border-cyan-500/50 transition-colors'>🏐 Volleyball</span>
                    <span className='bg-[#0B1120] border border-blue-800/50 text-indigo-200 px-4 py-2 rounded-full text-sm shadow-sm hover:border-indigo-500/50 transition-colors'>🎵 Music</span>
                  </div>
                </div>
              </div>

              <div className='bg-[#101827] border border-blue-500/30 text-white p-6 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden'>
                <div className='absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent blur-2xl'></div>
                <h3 className='text-xl text-blue-50 font-semibold mb-3 relative z-10'>Career Objective</h3>
                <p className='leading-relaxed text-blue-200/80 relative z-10'>
                  I am a Computer Science student seeking a Web Developer Intern position where I can apply my skills in ReactJS and PHP Laravel to real-world projects.
                   I aim to improve my technical abilities, gain practical experience, and contribute to the growth of the organization.
                </p>
              </div>
            </div>
          </div>

          <div className='order-1 md:order-2'>
            <div className='relative group'>
              <div className='absolute inset-0 bg-linear-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-2xl transform rotate-3 flex items-center justify-center opacity-70 group-hover:rotate-6 transition-transform duration-500 blur-sm'></div>
              <img 
                src={personalImg} 
                alt="Hem Sothearo" 
                className='relative rounded-2xl shadow-2xl border border-blue-900 transform transition-transform duration-500 group-hover:-translate-y-2'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About