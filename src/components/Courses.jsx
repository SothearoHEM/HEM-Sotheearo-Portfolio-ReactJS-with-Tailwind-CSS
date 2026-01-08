import { BookOpen, Network, CheckCircle, MapPin, Calendar, Award } from 'lucide-react';

function Courses() {
  const courses = [
    {
      title: "2025 Youth Leadership Development Program",
      organization: "Possibilities World Training Center",
      location: "Siem Reap, Cambodia",
      period: "Sep 5 2025 – Oct 4 2025",
      icon: BookOpen,
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
    <section className='py-20 px-6 bg-linear-to-br from-slate-50 via-cyan-50 to-purple-50' id="courses">
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-900 via-purple-900 to-cyan-900'>Courses & Certifications</h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
            Continuous learning through professional courses and certification programs
          </p>
        </div>

        <div className='space-y-8'>
          {courses.map((course, index) => {
            const Icon = course.icon;
            const iconGradients = [
              'from-orange-600 to-red-600',
              'from-cyan-600 to-blue-600',
              'from-purple-600 to-pink-600'
            ];
            return (
              <div 
                key={index}
                className='bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300'
              >
                <div className='grid md:grid-cols-3 gap-6'>                  
                  <div className={`bg-linear-to-br ${iconGradients[index]} text-white p-8 flex flex-col items-center justify-center text-center`}>
                    <Icon className='w-16 h-16 mb-4' />
                    <div className='flex items-center gap-2 bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm shadow-lg'>
                      <CheckCircle className='w-4 h-4' />
                      <span>{course.status}</span>
                    </div>
                  </div>                  <div className='md:col-span-2 p-8'>
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-2xl text-transparent bg-clip-text bg-linear-to-r from-blue-900 to-purple-900 mb-2'>{course.title}</h3>
                        <p className='text-lg text-slate-700 mb-1'>{course.organization}</p>
                      </div>
                    </div>

                    <div className='flex flex-wrap gap-4 mb-4'>
                      <div className='flex items-center gap-2 text-slate-600'>
                        <MapPin className='w-4 h-4 text-purple-600' />
                        <span>{course.location}</span>
                      </div>
                      <div className='flex items-center gap-2 text-cyan-700'>
                        <Calendar className='w-4 h-4 text-cyan-600' />
                        <span>{course.period}</span>
                      </div>
                    </div>

                    <p className='text-slate-700 mb-4 leading-relaxed'>
                      {course.description}
                    </p>

                    <div>
                      <div className='flex items-center gap-2 mb-3'>
                        <Award className='w-5 h-5 text-orange-600' />
                        <h4 className='text-lg text-orange-900'>Key Learnings:</h4>
                      </div>
                      <div className='grid md:grid-cols-2 gap-x-6 gap-y-2'>
                        {course.learnings.map((learning, idx) => (
                          <div key={idx} className='flex items-start gap-2'>
                            <CheckCircle className='w-4 h-4 text-green-600 shrink-0 mt-1' />
                            <span className='text-slate-700'>{learning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>        <div className='mt-12 bg-linear-to-r from-blue-900 via-purple-900 to-indigo-900 text-white p-8 rounded-lg text-center shadow-2xl shadow-purple-500/30'>
          <Award className='w-12 h-12 text-cyan-400 mx-auto mb-4' />
          <h3 className='text-2xl mb-3'>Commitment to Professional Development</h3>
          <p className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
            I am dedicated to continuous learning and staying updated with the latest technologies and industry best practices. 
            These certifications represent my commitment to professional growth and technical excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Courses