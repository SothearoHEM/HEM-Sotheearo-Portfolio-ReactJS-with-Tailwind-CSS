import React from 'react'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Royal University of Phnom Penh",
      location: "Phnom Penh, Cambodia",
      period: "Feb 2024 – 2025",
      description: "Specializing in software development and web technologies. Coursework includes Data Structures, Algorithms, Database Management, Computer Networks, and Software Engineering.",
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
      achievements: [
        "Graduated with honors",
        "Participated in science competitions",
        "Active in student organizations"
      ]
    }
  ];

  return (
    <section className='py-20 px-6 bg-linear-to-br from-white to-purple-50' id="education">
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-900 via-purple-900 to-cyan-900'>Education</h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
            My academic journey and educational background
          </p>
        </div>

        <div className='relative'>          <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-cyan-300 via-purple-300 to-orange-300'></div>

          <div className='space-y-12'>
            {education.map((edu, index) => {
              const dotColors = [
                'bg-linear-to-r from-cyan-500 to-blue-500',
                'bg-linear-to-r from-purple-500 to-pink-500',
                'bg-linear-to-r from-orange-500 to-red-500'
              ];
              const borderColors = [
                'border-cyan-500',
                'border-purple-500',
                'border-orange-500'
              ];
              return (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >                  <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${dotColors[index]} rounded-full border-4 border-white shadow-lg z-10`}></div>                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`bg-linear-to-br from-white to-slate-50 p-6 rounded-lg border-l-4 ${borderColors[index]} hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                      <div className='flex items-start gap-4 mb-4'>
                        <div className={`shrink-0 bg-linear-to-r ${dotColors[index]} p-3 rounded-lg shadow-lg`}>
                          <GraduationCap className='w-8 h-8 text-white' />
                        </div>
                        <div className='flex-1'>
                          <h3 className='text-2xl text-blue-900 mb-2'>{edu.degree}</h3>
                          <p className='text-lg text-slate-700 mb-1'>{edu.institution}</p>
                        </div>
                      </div>

                      <div className='space-y-2 mb-4'>
                        <div className='flex items-center gap-2 text-slate-600'>
                          <MapPin className='w-4 h-4 text-purple-600' />
                          <span>{edu.location}</span>
                        </div>
                        <div className='flex items-center gap-2 text-cyan-700'>
                          <Calendar className='w-4 h-4 text-cyan-600' />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <p className='text-slate-700 mb-4 leading-relaxed'>
                        {edu.description}
                      </p>

                      <div>
                        <div className='flex items-center gap-2 mb-2'>
                          <Award className='w-4 h-4 text-orange-600' />
                          <h4 className='text-sm text-orange-900'>Key Achievements:</h4>
                        </div>
                        <ul className='space-y-1'>
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className='text-sm text-slate-600 flex items-start gap-2'>
                              <span className='text-blue-900 mt-1'>✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
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