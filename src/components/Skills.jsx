import { Layout, Code, Wrench, Terminal, Database, MessageSquare, Lightbulb } from 'lucide-react';

function Skills() {
  const technicalSkillsWithProgress = [
    {
      category: "Front-End Development",
      icon: Layout,
      skills: [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 },
        { name: "JavaScript", level: 60 },
        { name: "React", level: 70 },
        { name: "Tailwind CSS", level: 70 }
      ]
    },
    {
      category: "Back-End Development",
      icon: Terminal,
      skills: [
        { name: "PHP", level: 50 },
        { name: "Laravel", level: 60 },
      ]
    },
    {
      category: "Developer Tools",
      icon: Wrench,
      skills: [
        { name: "Git", level: 65 },
        { name: "GitHub", level: 70 },
        { name: "VS Code", level: 70 },
      ]
    },
    {
      category: "Programming Languages",
      icon: Terminal,
      skills: [
        { name: "C", level: 70 },
        { name: "C++", level: 70 },
        { name: "Java", level: 60 },
        { name: "C#", level: 60 },
      ]
    },
    {
      category: "Database & Networks",
      icon: Database,
      skills: [
        { name: "SQL", level: 75 },
        { name: "Computer Networking", level: 70 },
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
    <section className='py-20 px-6 bg-[#0B1120] text-blue-50 relative overflow-hidden min-h-screen' id="skills">      
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 font-bold'>My Skills</h2>
          <p className='text-lg text-blue-200/70 max-w-2xl mx-auto'>
            A comprehensive overview of my technical abilities and soft skills
          </p>
        </div>        <div className='mb-20'>
          <div className='flex items-center gap-3 mb-10 justify-center'>
            <Code className='w-10 h-10 text-cyan-400' />
            <h3 className='text-3xl font-semibold text-blue-50'>Technical Skills</h3>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {technicalSkillsWithProgress.map((category, index) => {
              const Icon = category.icon;
              const gradients = [
                'from-blue-600/10 to-cyan-500/10',
                'from-indigo-500/10 to-blue-500/10',
                'from-cyan-500/10 to-blue-600/10',
                'from-blue-500/10 to-indigo-500/10',
                'from-cyan-600/10 to-blue-500/10',
                'from-indigo-600/10 to-cyan-500/10'
              ];
              const barGradients = [
                'from-cyan-400 to-blue-500',
                'from-blue-400 to-indigo-500',
                'from-cyan-400 to-blue-500',
                'from-blue-400 to-indigo-500',
                'from-cyan-400 to-blue-500',
                'from-indigo-400 to-cyan-400'
              ];
              return (
                <div key={index} className={`relative bg-[#101827] bg-linear-to-br ${gradients[index]} backdrop-blur-md p-8 rounded-2xl border border-blue-900/40 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all hover:-translate-y-1 shadow-lg group overflow-hidden`}>
                  <div className='absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-linear-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 opacity-50'></div>
                  <div className='flex items-center gap-5 mb-8 pb-5 border-b border-blue-900/30 relative z-10'>
                    <div className='p-4 rounded-xl bg-[#0B1120] border border-blue-800/50 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 shadow-inner group-hover:-translate-y-1'>
                      <Icon className='w-8 h-8 text-cyan-400 group-hover:text-white transition-colors duration-300' />
                    </div>
                    <h4 className='text-xl font-bold text-blue-50 group-hover:text-cyan-300 transition-colors'>{category.category}</h4>
                  </div>
                  <div className='space-y-6 relative z-10'>
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className='flex justify-between mb-2'>
                          <span className='text-blue-200/80 font-medium'>{skill.name}</span>
                          <span className='text-cyan-400 font-bold'>{skill.level}%</span>
                        </div>
                        <div className='bg-[#0B1120] rounded-full h-2.5 border border-blue-900/50 overflow-hidden'>
                          <div 
                            className={`bg-linear-to-r ${barGradients[index]} h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(6,182,212,0.5)]`}
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
        </div>        <div className='mb-20'>
          <div className='flex items-center gap-3 mb-10 justify-center'>
            <MessageSquare className='w-10 h-10 text-indigo-400' />
            <h3 className='text-3xl font-semibold text-blue-50'>Soft Skills</h3>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index}
                  className={`bg-[#101827] backdrop-blur-sm p-8 rounded-2xl text-center border border-blue-900/40 hover:border-indigo-500/50 transition-all hover:scale-105 shadow-lg group hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]`}
                >
                  <div className='inline-flex p-4 rounded-full bg-[#0B1120] border border-blue-900/50 mb-5 group-hover:border-indigo-500/30 transition-colors'>
                    <Icon className='w-10 h-10 text-indigo-400 group-hover:scale-110 transition-transform' />
                  </div>
                  <h4 className='text-xl font-semibold text-blue-50 mb-3'>{skill.name}</h4>
                  <p className='text-blue-200/70 leading-relaxed'>{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>        <div>
          <div className='flex items-center gap-3 mb-10 justify-center'>
            <Lightbulb className='w-10 h-10 text-cyan-400' />
            <h3 className='text-3xl font-semibold text-blue-50'>Additional Competencies</h3>
          </div>
          
          <div className='flex flex-wrap gap-4 justify-center max-w-4xl mx-auto'>
            {additionalSkills.map((skill, index) => {
              const colors = [
                'bg-blue-600/10 border-blue-500/30 text-blue-200 hover:bg-blue-600/20 hover:border-blue-400',
                'bg-cyan-500/10 border-cyan-500/30 text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-400',
                'bg-indigo-500/10 border-indigo-500/30 text-indigo-200 hover:bg-indigo-500/20 hover:border-indigo-400'
              ];
              return (
                <span 
                  key={index}
                  className={`border backdrop-blur-sm px-6 py-3 rounded-xl text-md font-medium transition-all hover:-translate-y-1 cursor-default shadow-lg ${colors[index % colors.length]}`}
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