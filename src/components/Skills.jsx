import React from 'react'
import { Layout, Code, Wrench, Terminal, Database, MessageSquare, Lightbulb } from 'lucide-react';

function Skills() {
  const technicalSkillsWithProgress = [
    {
      category: "Front-End Development",
      icon: Layout,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: Code,
      skills: [
        { name: "React", level: 60 },
        { name: "Tailwind CSS", level: 75 },
      ]
    },
    {
      category: "Developer Tools",
      icon: Wrench,
      skills: [
        { name: "Git", level: 75 },
        { name: "GitHub", level: 80 },
        { name: "Chrome DevTools", level: 70 },
        { name: "VS Code", level: 85 },
      ]
    },
    {
      category: "Programming Languages",
      icon: Terminal,
      skills: [
        { name: "C", level: 70 },
        { name: "C++", level: 75 },
        { name: "Java", level: 65 },
      ]
    },
    {
      category: "Database & Networks",
      icon: Database,
      skills: [
        { name: "SQL", level: 70 },
        { name: "Computer Networking", level: 80 },
      ]
    }
  ];

  const softSkills = [
    { name: "Communication", description: "Clear and effective verbal and written communication", icon: MessageSquare },
    { name: "Teamwork", description: "Collaborative approach to problem-solving", icon: Lightbulb },
    { name: "Flexibility", description: "Adaptable to new technologies and methodologies", icon: Code },
    { name: "Open-minded", description: "Receptive to feedback and new ideas", icon: Wrench }
  ];

  const additionalSkills = [
    "Responsive Web Design",
    "Cross-browser Compatibility",
    "Web Performance Optimization",
    "Software Troubleshooting",
    "Hardware Maintenance",
    "Problem Solving",
    "Time Management",
    "Continuous Learning"
  ];

  return (
    <section className='py-20 px-6 bg-linear-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden' id="skills">      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4'>My Skills</h2>
          <p className='text-lg text-cyan-200 max-w-2xl mx-auto'>
            A comprehensive overview of my technical abilities and soft skills
          </p>
        </div>        <div className='mb-16'>
          <div className='flex items-center gap-3 mb-8 justify-center'>
            <Code className='w-8 h-8 text-cyan-400' />
            <h3 className='text-3xl'>Technical Skills</h3>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {technicalSkillsWithProgress.map((category, index) => {
              const Icon = category.icon;
              const gradients = [
                'from-cyan-500/20 to-blue-500/20',
                'from-purple-500/20 to-pink-500/20',
                'from-orange-500/20 to-red-500/20',
                'from-teal-500/20 to-cyan-500/20',
                'from-indigo-500/20 to-purple-500/20'
              ];
              const barGradients = [
                'from-cyan-400 to-blue-500',
                'from-purple-400 to-pink-500',
                'from-orange-400 to-red-500',
                'from-teal-400 to-cyan-500',
                'from-indigo-400 to-purple-500'
              ];
              return (
                <div key={index} className={`bg-linear-to-br ${gradients[index]} backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all hover:scale-105 shadow-xl`}>
                  <div className='flex items-center gap-3 mb-4'>
                    <Icon className='w-6 h-6 text-cyan-300' />
                    <h4 className='text-lg text-cyan-300'>{category.category}</h4>
                  </div>
                  <div className='space-y-4'>
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className='flex justify-between mb-2'>
                          <span>{skill.name}</span>
                          <span className='text-cyan-300'>{skill.level}%</span>
                        </div>
                        <div className='bg-white/10 rounded-full h-2'>
                          <div 
                            className={`bg-linear-to-r ${barGradients[index]} h-2 rounded-full transition-all duration-1000 shadow-lg`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>        <div className='mb-16'>
          <div className='flex items-center gap-3 mb-8 justify-center'>
            <MessageSquare className='w-8 h-8 text-purple-400' />
            <h3 className='text-3xl'>Soft Skills</h3>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              const gradients = [
                'from-cyan-500/30 to-blue-500/30',
                'from-purple-500/30 to-pink-500/30',
                'from-orange-500/30 to-red-500/30',
                'from-teal-500/30 to-cyan-500/30'
              ];
              return (
                <div 
                  key={index}
                  className={`bg-linear-to-br ${gradients[index]} backdrop-blur-sm p-6 rounded-lg text-center border border-white/10 hover:border-white/30 transition-all hover:scale-105 shadow-xl`}
                >
                  <Icon className='w-10 h-10 text-cyan-300 mx-auto mb-3' />
                  <h4 className='text-lg mb-2'>{skill.name}</h4>
                  <p className='text-sm text-cyan-200'>{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>        <div>
          <div className='flex items-center gap-3 mb-8 justify-center'>
            <Lightbulb className='w-8 h-8 text-orange-400' />
            <h3 className='text-3xl'>Additional Competencies</h3>
          </div>
          
          <div className='flex flex-wrap gap-3 justify-center'>
            {additionalSkills.map((skill, index) => {
              const colors = [
                'from-cyan-500 to-blue-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500',
                'from-teal-500 to-cyan-500',
                'from-indigo-500 to-purple-500',
                'from-pink-500 to-rose-500',
                'from-yellow-500 to-orange-500',
                'from-green-500 to-teal-500'
              ];
              return (
                <span 
                  key={index}
                  className={`bg-linear-to-r ${colors[index % colors.length]} px-6 py-3 rounded-full text-sm transition-all hover:scale-105 cursor-default shadow-lg text-white`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills