import { Users, Heart, Home, MapPin, Calendar, Award } from 'lucide-react'
import volounteerImg1 from '../assets/National-Business-for-Youth-2022.jpg'
import volounteerImg2 from '../assets/TogetherYouth-and-Community.JPG'
import volounteerImg3 from '../assets/Together-for-100-Families.jpg'

function Volunteer() {
 const volunteer = [
    {
      title: "National Business for Youth 2022",
      organization: "CamPot Enterprise",
      location: " ITC, Phnom Penh, Cambodia",
      date: "21 Sep 2022",
      icon: Users,
      image: volounteerImg1,
      description: "Participated in a national youth business program aimed at developing entrepreneurial skills among high school students. Collaborated with teams to develop business ideas and presentations.",
      impact: [
        "Third Place Winner in National Competition",
        "Gained practical experience in business planning and teamwork",
        "Enhanced communication and presentation skills",
        "Contributed to community development through youth empowerment"
      ]
    },
    {
      title: "Together Youth and Community",
      organization: "Parññāsiddha University of Cambodia",
      location: "Iour Sat High School, Kampot",
      date: "17 Aug 2024",
      icon: Heart,
      image: volounteerImg2,
      description: "Community service project focused on supporting local schools and underprivileged students. Engaged in activities such as donating supplies and building infrastructure.",
      impact: [
        "Donated educational materials",
        "Inspired students to pursue higher education",
        "Built gates for local schools",
        "Built connections with rural communities"
      ]
    },
    {
      title: "Together for 100 Families",
      organization: "Parññāsiddha University of Cambodia",
      location: "Kampong Speu Province, Cambodia",
      date: "06 Jul 2024",
      icon: Home,
      image: volounteerImg3,
      description: "Large-scale community service initiative providing support and resources to 100 underprivileged families. Participated in distribution of essential supplies and community engagement activities.",
      impact: [
        "Supported 100+ families in need",
        "Organized resource distribution",
        "Strengthened community bonds"
      ]
    }
  ];

  return (
    <section className='py-20 px-6 bg-[#0B1120] text-blue-50 relative overflow-hidden min-h-screen' id="volunteer">      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-10 right-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-10 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-700'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 font-bold'>Volunteer & Community Service</h2>
          <p className='text-lg text-blue-200/70 max-w-2xl mx-auto'>
            Giving back to the community through meaningful volunteer work and social initiatives
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {volunteer.map((item, index) => {
            const Icon = item.icon;
            const gradients = [
              'from-blue-600 to-cyan-500',
              'from-indigo-600 to-blue-500',
              'from-cyan-600 to-indigo-500'
            ];
            const bgGradients = [
              'from-blue-900/10 to-cyan-900/10',
              'from-indigo-900/10 to-blue-900/10',
              'from-cyan-900/10 to-indigo-900/10'
            ];
            return (
              <div 
                key={index}
                className={`bg-[#101827] bg-linear-to-br ${bgGradients[index]} backdrop-blur-md rounded-2xl overflow-hidden border border-blue-900/40 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg group`}
              >                
                <div className='relative h-48 overflow-hidden'>
                  <div className={`absolute inset-0 bg-linear-to-t from-[#101827] via-[#101827]/60 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70`}></div>
                  <div className={`absolute inset-0 transition-opacity duration-500 bg-linear-to-br ${gradients[index]} opacity-30 mix-blend-overlay z-10`}></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
                  />
                  
                  <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                    <Icon className='w-10 h-10 text-white mb-3 shadow-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] group-hover:-translate-y-1 transition-transform duration-300' />
                    <h3 className='text-xl mb-1 text-white font-semibold leading-snug drop-shadow-md'>{item.title}</h3>
                    <p className='text-cyan-300 font-medium text-sm drop-shadow-md'>{item.organization}</p>
                  </div>
                </div>                

                <div className='p-6 pt-4'>
                  <div className='space-y-3 mb-5'>
                    <div className='flex items-start gap-2 text-sm'>
                      <MapPin className='w-4 h-4 text-cyan-400 shrink-0 mt-0.5' />
                      <span className='text-blue-200/80'>{item.location}</span>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                      <Calendar className='w-4 h-4 text-indigo-400 shrink-0' />
                      <span className='text-blue-200/80'>{item.date}</span>
                    </div>
                  </div>

                  <p className='text-blue-100/70 mb-6 text-sm leading-relaxed'>
                    {item.description}
                  </p>

                  <div className='bg-[#0B1120]/50 p-4 rounded-xl border border-blue-900/30'>
                    <div className='flex items-center gap-2 mb-3'>
                      <Award className='w-4 h-4 text-blue-400' />
                      <h4 className='text-sm font-medium text-blue-300'>Impact & Contributions:</h4>
                    </div>
                    <ul className='space-y-2'>
                      {item.impact.map((point, idx) => (
                        <li key={idx} className='text-sm text-blue-200/70 flex items-start gap-2'>
                          <span className='text-cyan-400 mt-1 font-bold'>•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>        <div className='mt-16 bg-[#101827] border border-blue-800/50 text-white p-10 rounded-2xl text-center shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden'>
          <div className='absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent blur-2xl'></div>
          <Heart className='w-12 h-12 text-cyan-400 mx-auto mb-4 relative z-10 animate-pulse' />
          <h3 className='text-3xl mb-4 font-semibold text-blue-50 relative z-10'>Commitment to Community</h3>
          <p className='text-lg text-blue-200/80 max-w-3xl mx-auto leading-relaxed relative z-10'>
            I believe in using my skills and time to make a positive impact in the community. 
            Through volunteer work, I&apos;ve learned the importance of giving back and helping others, 
            which has shaped me into a more compassionate and socially responsible individual.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Volunteer