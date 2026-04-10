import { BookOpen, Network, CheckCircle, MapPin, Calendar, Award } from 'lucide-react';
import coursesImg1 from '../assets/Youth Leadership Development Program.jpg'
import coursesImg2 from '../assets/CCNA1.jpg'
import coursesImg3 from '../assets/CCNA2.jpg'

function Courses() {
  const courses = [
    {
      title: "2025 Youth Leadership Development Program",
      organization: "Possibilities World Training Center",
      location: "Siem Reap, Cambodia",
      period: "Sep 5 2025 – Oct 4 2025",
      icon: BookOpen,
      image: coursesImg1,
      description: "Comprehensive leadership training program designed to develop leadership skills, critical thinking, and professional competencies for young professionals.",
      learnings: [
        "Advanced leadership techniques",
        "Team management and collaboration",
        "Strategic thinking and planning",
        "Public speaking and presentation skills"
      ],
      status: "Completed"
    },
    {
      title: "CCNA: Introduction to Networks",
      organization: "Cisco Networking Academy",
      location: "RUPP, Phnom Penh, Cambodia",
      period: "Feb 2025 – Aug 2025",
      icon: Network,
      image: coursesImg2,
      description: "Foundational networking course covering network architecture, operations, security, and troubleshooting. Hands-on experience with network configuration and management.",
      learnings: [
        "Network fundamentals and protocols",
        "IP addressing and subnetting",
        "Network security basics",
        "Router and switch configuration",
        "Troubleshooting methodologies"
      ],
      status: "Completed"
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      organization: "Cisco Networking Academy",
      location: "RUPP, Phnom Penh, Cambodia",
      period: "Sep 2025 – Nov 2025",
      icon: Network,
      image: coursesImg3,
      description: "Advanced networking course focusing on switching technologies, routing protocols, and wireless network implementation. Includes practical labs and real-world scenarios.",
      learnings: [
        "Advanced routing protocols (OSPF, EIGRP)",
        "VLAN configuration and management",
        "Wireless network setup and security",
        "Network redundancy and optimization",
        "Enterprise network design"
      ],
      status: "Completed"
    }
  ];

  return (
    <section className='py-20 px-6 bg-[#0B1120]' id="courses">
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 font-bold'>Courses & Certifications</h2>
          <p className='text-lg text-blue-200/70 max-w-2xl mx-auto'>
            Continuous learning through professional courses and certification programs
          </p>
        </div>

        <div className='space-y-8'>
          {courses.map((course, index) => {
            const Icon = course.icon;
            const iconGradients = [
              'from-blue-600 to-cyan-500',
              'from-indigo-500 to-blue-500',
              'from-cyan-500 to-blue-600'
            ];
            return (
              <div 
                key={index}
                className='bg-[#101827] rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 border border-blue-900/40 hover:border-blue-500/50 group'
              >
                <div className='grid md:grid-cols-3 gap-0 items-stretch'>                  
                  <div className={`relative overflow-hidden group-hover:after:opacity-100 after:content-[''] after:absolute after:inset-0 after:bg-linear-to-br ${iconGradients[index]} after:opacity-80 after:transition-opacity after:duration-500 text-white flex flex-col items-center justify-center text-center h-48 md:h-full`}>
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className='absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0'
                    />
                    <div className='relative z-10 p-8 flex flex-col items-center justify-center w-full h-full bg-[#101827]/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none'>
                      <Icon className='w-16 h-16 mb-4 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]' />
                      <div className='flex items-center gap-2 bg-[#0B1120]/80 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/50 backdrop-blur-md shadow-[0_0_10px_rgba(6,182,212,0.3)]'>
                        <CheckCircle className='w-4 h-4' />
                        <span>{course.status}</span>
                      </div>
                    </div>
                  </div>                  <div className='md:col-span-2 p-8 bg-[#101827]'>
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-2xl text-blue-50 font-semibold mb-2 group-hover:text-cyan-300 transition-colors'>{course.title}</h3>
                        <p className='text-lg text-cyan-400/80 mb-1'>{course.organization}</p>
                      </div>
                    </div>

                    <div className='flex flex-wrap gap-4 mb-5 pb-5 border-b border-blue-900/40'>
                      <div className='flex items-center gap-2 text-blue-200/70'>
                        <MapPin className='w-4 h-4 text-cyan-400' />
                        <span>{course.location}</span>
                      </div>
                      <div className='flex items-center gap-2 text-blue-200/70'>
                        <Calendar className='w-4 h-4 text-cyan-400' />
                        <span>{course.period}</span>
                      </div>
                    </div>

                    <p className='text-blue-100/80 mb-6 leading-relaxed'>
                      {course.description}
                    </p>

                    <div>
                      <div className='flex items-center gap-2 mb-4'>
                        <Award className='w-5 h-5 text-blue-400' />
                        <h4 className='text-lg text-blue-300'>Key Learnings:</h4>
                      </div>
                      <div className='grid md:grid-cols-2 gap-x-6 gap-y-3'>
                        {course.learnings.map((learning, idx) => (
                          <div key={idx} className='flex items-start gap-2 bg-[#0B1120] p-2.5 rounded-lg border border-blue-900/30'>
                            <CheckCircle className='w-4 h-4 text-cyan-400 shrink-0 mt-0.5' />
                            <span className='text-blue-200/80 text-sm leading-snug'>{learning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>        <div className='mt-12 bg-[#101827] border border-blue-800/50 text-white p-10 rounded-xl text-center relative overflow-hidden'>
          <div className='absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent blur-3xl'></div>
          <Award className='w-12 h-12 text-cyan-400 mx-auto mb-4 relative z-10' />
          <h3 className='text-2xl mb-3 font-semibold relative z-10'>Commitment to Professional Development</h3>
          <p className='text-lg text-blue-200/70 max-w-3xl mx-auto leading-relaxed relative z-10'>
            I am dedicated to continuous learning and staying updated with the latest technologies and industry best practices. 
            These certifications represent my commitment to professional growth and technical excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Courses