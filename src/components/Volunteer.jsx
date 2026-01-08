import React from 'react'
import { Users, Heart, Home, MapPin, Calendar, Award } from 'lucide-react'

function Volunteer() {
 const volunteer = [
    {
      title: "National Business for Youth 2022",
      organization: "Angkor Enterprise",
      location: "Pheam Cheang High School, Tboung Khmum Province",
      date: "21 Sep 2022",
      icon: Users,
      description: "Participated in a national youth business program aimed at developing entrepreneurial skills among high school students. Collaborated with teams to develop business ideas and presentations.",
      impact: [
        "Mentored 20+ students in business concepts",
        "Developed teamwork and leadership skills",
        "Enhanced presentation and communication abilities"
      ]
    },
    {
      title: "Together Youth and Community",
      organization: "Parññāsiddha University of Cambodia",
      location: "Iour Sat High School, Kampot",
      date: "17 Aug 2024",
      icon: Heart,
      description: "Community outreach program focused on youth empowerment and education. Engaged with local students to promote higher education and career development opportunities.",
      impact: [
        "Inspired students to pursue higher education",
        "Shared knowledge about technology careers",
        "Built connections with rural communities"
      ]
    },
    {
      title: "Together for 100 Families",
      organization: "Parññāsiddha University of Cambodia",
      location: "Kampong Speu Province, Cambodia",
      date: "06 Jul 2024",
      icon: Home,
      description: "Large-scale community service initiative providing support and resources to 100 underprivileged families. Participated in distribution of essential supplies and community engagement activities.",
      impact: [
        "Supported 100+ families in need",
        "Organized resource distribution",
        "Strengthened community bonds"
      ]
    }
  ];

  return (
    <section className='py-20 px-6 bg-linear-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-hidden' id="volunteer">      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-10 right-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-10 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-700'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4'>Volunteer & Community Service</h2>
          <p className='text-lg text-cyan-200 max-w-2xl mx-auto'>
            Giving back to the community through meaningful volunteer work and social initiatives
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {volunteer.map((item, index) => {
            const Icon = item.icon;
            const gradients = [
              'from-cyan-600 to-blue-600',
              'from-purple-600 to-pink-600',
              'from-orange-600 to-red-600'
            ];
            const bgGradients = [
              'from-cyan-500/20 to-blue-500/20',
              'from-purple-500/20 to-pink-500/20',
              'from-orange-500/20 to-red-500/20'
            ];
            return (
              <div 
                key={index}
                className={`bg-linear-to-br ${bgGradients[index]} backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-2xl`}
              >                <div className={`bg-linear-to-r ${gradients[index]} p-6 border-b border-white/10`}>
                  <Icon className='w-12 h-12 text-white mb-4' />
                  <h3 className='text-xl mb-2 text-white'>{item.title}</h3>
                  <p className='text-cyan-100 text-sm'>{item.organization}</p>
                </div>                <div className='p-6'>
                  <div className='space-y-3 mb-4'>
                    <div className='flex items-start gap-2 text-sm'>
                      <MapPin className='w-4 h-4 text-cyan-300 shrink-0 mt-0.5' />
                      <span className='text-cyan-100'>{item.location}</span>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                      <Calendar className='w-4 h-4 text-purple-300 shrink-0' />
                      <span className='text-purple-100'>{item.date}</span>
                    </div>
                  </div>

                  <p className='text-slate-200 mb-4 text-sm leading-relaxed'>
                    {item.description}
                  </p>

                  <div>
                    <div className='flex items-center gap-2 mb-3'>
                      <Award className='w-4 h-4 text-orange-300' />
                      <h4 className='text-sm text-orange-200'>Impact & Contributions:</h4>
                    </div>
                    <ul className='space-y-2'>
                      {item.impact.map((point, idx) => (
                        <li key={idx} className='text-sm text-slate-300 flex items-start gap-2'>
                          <span className='text-cyan-400 mt-1'>•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>        <div className='mt-12 bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-orange-500/20 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center shadow-2xl'>
          <Heart className='w-12 h-12 text-pink-400 mx-auto mb-4' />
          <h3 className='text-2xl mb-3'>Commitment to Community</h3>
          <p className='text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed'>
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