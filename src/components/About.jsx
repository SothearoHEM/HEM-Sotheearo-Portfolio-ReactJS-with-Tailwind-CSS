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
     <section className='py-20 px-6 bg-linear-to-br from-slate-50 to-cyan-50' id="about">
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-900 via-purple-900 to-blue-900'>About Me</h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
            Passionate web developer dedicated to creating beautiful and functional digital experiences
          </p>
        </div>        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const gradients = [
              'from-cyan-500 to-blue-500',
              'from-purple-500 to-pink-500',
              'from-orange-500 to-red-500',
              'from-teal-500 to-cyan-500'
            ];
            return (
              <div key={index} className={`bg-linear-to-br ${gradients[index]} p-6 rounded-lg text-center hover:shadow-2xl transition-all hover:scale-105 text-white`}>
                <Icon className='w-8 h-8 mx-auto mb-3' />
                <div className='text-3xl mb-1'>{stat.value}</div>
                <div className='text-sm'>{stat.label}</div>
              </div>
            );
          })}
        </div>        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='order-2 md:order-1'>
            <div className='space-y-6'>
              <div className='flex gap-4'>
                <div className='shrink-0'>
                  <User className='w-8 h-8 text-purple-600' />
                </div>
                <div>
                  <h3 className='text-xl text-transparent bg-clip-text bg-linear-to-r from-blue-900 to-purple-900 mb-2'>Background & Education</h3>
                  <p className='text-slate-700 leading-relaxed'>
                    Currently pursuing a Bachelor of Computer Science at Royal University of Phnom Penh 
                    (Feb 2024 – 2025). I am passionate about creating responsive and user-friendly web applications 
                    that provide excellent user experiences. My journey in tech started with a strong foundation 
                    in computer science fundamentals, and I&apos;ve been continuously expanding my skills in modern 
                    web development technologies.
                  </p>
                </div>
              </div>
              
              <div className='flex gap-4'>
                <div className='shrink-0'>
                  <Globe className='w-8 h-8 text-cyan-600' />
                </div>
                <div>
                  <h3 className='text-xl text-transparent bg-clip-text bg-linear-to-r from-blue-900 to-cyan-900 mb-2'>Languages</h3>
                  <div className='space-y-3'>
                    <div>
                      <div className='flex justify-between mb-1'>
                        <span className='text-slate-700'>Khmer</span>
                        <span className='text-purple-900'>Native</span>
                      </div>
                      <div className='bg-slate-200 rounded-full h-2 md:w-70'>
                        <div className='bg-linear-to-r from-purple-500 to-pink-500 h-2 rounded-full' style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between mb-1'>
                        <span className='text-slate-700'>English</span>
                        <span className='text-cyan-900'>Advanced</span>
                      </div>
                      <div className='bg-slate-200 rounded-full h-2 md:w-70'>
                        <div className='bg-linear-to-r from-cyan-500 to-blue-500 h-2 rounded-full' style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='flex gap-4'>
                <div className='shrink-0'>
                  <Heart className='w-8 h-8 text-red-500' />
                </div>
                <div>
                  <h3 className='text-xl text-blue-900 mb-2'>Hobbies & Interests</h3>
                  <p className='text-slate-700 mb-3'>
                    Beyond coding, I enjoy staying active and creative:
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <span className='bg-linear-to-r from-purple-100 to-purple-200 text-purple-900 px-4 py-2 rounded-full'>📚 Reading</span>
                    <span className='bg-linear-to-r from-cyan-100 to-cyan-200 text-cyan-900 px-4 py-2 rounded-full'>🏐 Volleyball</span>
                    <span className='bg-linear-to-r from-orange-100 to-orange-200 text-orange-900 px-4 py-2 rounded-full'>🎵 Music</span>
                  </div>
                </div>
              </div>

              <div className='bg-linear-to-r from-blue-900 via-purple-900 to-indigo-900 text-white p-6 rounded-lg shadow-xl shadow-purple-500/20'>
                <h3 className='text-xl mb-3'>Career Objective</h3>
                <p className='leading-relaxed'>
                  I am seeking an internship or entry-level position as a Front-End Developer where I can 
                  apply my technical skills, contribute to meaningful projects, and continue growing as a 
                  professional in a collaborative team environment.
                </p>
              </div>
            </div>
          </div>

          <div className='order-1 md:order-2'>
            <div className='relative'>
              <div className='absolute inset-0 bg-linear-to-r from-cyan-500 via-purple-500 to-orange-500 rounded-lg transform rotate-3'></div>
              <img 
                src={personalImg} 
                alt="Hem Sothearo" 
                className='relative rounded-lg shadow-2xl'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About