import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'
import edImg1 from '../assets/RUPP.jpg'
import edImg2 from '../assets/PUC.jpg'
import edImg3 from '../assets/PC.jpg'

function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Royal University of Phnom Penh",
      location: "Phnom Penh, Cambodia",
      period: "Feb 2024 – 2025",
      description: "Specializing in software development and web technologies. Coursework includes Data Structures, Algorithms, Database Management, Computer Networks, and Software Engineering.",
      image: edImg1,
      achievements: [
        "Dean's List - Multiple semesters",
        "Active participant in coding workshops",
        "Member of Computer Science Society"
      ]
    },
    {
      degree: "English IEAP Program",
      institution: "Parññāsiddha University of Cambodia",
      location: "Phnom Penh, Cambodia",
      period: "Feb 2023 – Sep 2024",
      description: "Intensive English for Academic Purposes program focusing on advanced communication skills, academic writing, and professional English.",
      image: edImg2,
      achievements: [
        "Advanced level certification",
        "Improved technical communication skills",
        "Enhanced academic writing abilities"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Pheam Cheang High School",
      location: "Tbong Khmum, Cambodia",
      period: "2020 – 2022",
      description: "Completed secondary education with focus on Science and Mathematics, building a strong foundation for higher education in technology.",
      image: edImg3,
      achievements: [
        "Graduated with honors",
        "Participated in science competitions",
        "Active in student organizations"
      ]
    }
  ];

  return (
    <section className='py-20 px-6 bg-[#0B1120]' id="education">
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 font-bold'>Education</h2>
          <p className='text-lg text-blue-200/70 max-w-2xl mx-auto'>
            My academic journey and educational background
          </p>
        </div>

        <div className='relative'>          <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-900/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]'></div>

          <div className='space-y-16'>
            {education.map((edu, index) => {
              const dotColors = [
                'from-blue-500 to-cyan-400',
                'from-cyan-400 to-indigo-500',
                'from-indigo-500 to-blue-500'
              ];
              const borderColors = [
                'border-cyan-500',
                'border-blue-500',
                'border-indigo-500'
              ];
              return (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >                  <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-linear-to-r ${dotColors[index]} rounded-full border-4 border-[#0B1120] shadow-[0_0_15px_rgba(6,182,212,0.6)] z-10`}></div>                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 block' : 'md:pl-12 block'}`}>
                    <div className={`bg-[#101827] rounded-2xl overflow-hidden border-l-[6px] ${borderColors[index]} shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 hover:-translate-y-1`}>
                      <div className='relative h-48 overflow-hidden group'>
                        <div className={`absolute inset-0 bg-linear-to-t from-[#101827] via-[#101827]/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80`}></div>
                        <img 
                          src={edu.image} 
                          alt={edu.institution} 
                          className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
                        />
                        <div className={`absolute bottom-4 left-6 z-20 shrink-0 bg-linear-to-r ${dotColors[index]} p-2.5 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm`}>
                          <GraduationCap className='w-6 h-6 text-white' />
                        </div>
                      </div>
                      
                      <div className='p-8 pt-4'>
                        <div className='mb-5 pb-5 border-b border-blue-900/40'>
                          <h3 className='text-2xl text-blue-50 font-semibold mb-2 leading-tight'>{edu.degree}</h3>
                          <p className='text-lg text-cyan-400/80 mb-1'>{edu.institution}</p>
                        </div>

                        <div className='space-y-3 mb-5'>
                          <div className='flex items-center gap-3 text-blue-200/70'>
                            <MapPin className='w-4 h-4 text-cyan-400' />
                            <span>{edu.location}</span>
                          </div>
                          <div className='flex items-center gap-3 text-blue-200/70'>
                            <Calendar className='w-4 h-4 text-cyan-400' />
                            <span>{edu.period}</span>
                          </div>
                        </div>

                        <p className='text-blue-100/80 mb-6 leading-relaxed text-sm md:text-base'>
                          {edu.description}
                        </p>

                        <div className='bg-[#0B1120]/50 p-4 rounded-xl border border-blue-900/30'>
                          <div className='flex items-center gap-2 mb-3'>
                            <Award className='w-5 h-5 text-blue-400' />
                            <h4 className='text-md font-medium text-blue-300'>Key Achievements:</h4>
                          </div>
                          <ul className='space-y-2'>
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className='text-sm text-blue-200/70 flex items-start gap-2'>
                                <span className='text-cyan-400 mt-0.5 font-bold'>✓</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education