import { Code2, ExternalLink,Github } from 'lucide-react'

function Projects() {
  const projects = [
    {
      title: "Responsive Portfolio Website Used ReactJS with Tailwind CSS",
      description: "A fully responsive personal portfolio website showcasing my work and skills. Built with modern web technologies including React and Tailwind CSS.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      features: [
        "Fully responsive design",
        "Smooth scrolling navigation",
        "Interactive UI components",
        "Optimized performance"
      ],
      status: "Completed",
      liveDemo: "https://hem-sotheearo-portfolio-react-js-wi.vercel.app/",
      code: "https://github.com/SothearoHEM/HEM-Sotheearo-Portfolio-ReactJS-with-Tailwind-CSS"
    },
    {
      title: "Responsive Portfolio Website Used HTML CSS and JavaScript",
      description: "A personal portfolio website to showcase my skills, projects, my education, and experience. Built using HTML, CSS, and JavaScript with a responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Fully responsive design",
        "Smooth scrolling navigation",
        "Interactive UI components",
        "Optimized performance"
      ],
      status: "Completed",
      liveDemo: "https://sothearohem.github.io/HEM-Sotheearo-Portfolio/",
      code: "https://github.com/SothearoHEM/HEM-Sotheearo-Portfolio"
    },
    {
      title: "E-Commerce Project",
      description: "A responsive e-commerce website featuring product listings, shopping cart functionality, and a user-friendly interface,Cart built with modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript","React", "Tailwind CSS"],
      features: [
        "Product grid layout",
        "Shopping cart functionality",
        "Mobile-first design",
        "Cross-browser compatible"
      ],
      status: "Completed",
      liveDemo: "https://e-commerce-project-chi-vert.vercel.app/",
      code: "https://github.com/SothearoHEM/E-commerce-Project"
    },
    {
      title: "Weather App",
      description: "A responsive weather application that fetches real-time weather data from an external API and displays it in a user-friendly interface.",
      technologies: ["JavaScript", "HTML", "CSS"],
      features: [
        "Real-time weather data",
        "Search functionality for different locations",
        "Responsive design",
      ],
      status: "Completed",
      liveDemo: "https://sothearohem.github.io/Weather-App-project/",
      code: "https://github.com/SothearoHEM/Weather-App-project"
    },
    {
      title: "New Year Countdown Timer",
      description: "A countdown timer that counts down to the New Year, featuring dynamic time updates and celebratory animations when the countdown reaches zero.",
      technologies: ["JavaScript", "HTML", "CSS"],
      features: [
        "Real-time countdown",
        "Responsive design",
        "Customizable target date"
      ],
      status: "Completed",
      liveDemo: "https://sothearohem.github.io/New-Year-Countdown/",
      code: "https://github.com/SothearoHEM/New-Year-Countdown"
    },
  ];

  return (
    <section className='py-20 px-6 bg-linear-to-br from-slate-50 via-purple-50 to-cyan-50' id="projects">
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-900 via-purple-900 to-cyan-900'>My Projects</h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
            A showcase of web development projects demonstrating my technical skills and creativity
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => {
            const headerGradients = [
              'from-cyan-600 to-blue-600',
              'from-purple-600 to-pink-600',
              'from-orange-600 to-red-600',
              'from-teal-600 to-cyan-600',
              'from-indigo-600 to-purple-600',
              'from-pink-600 to-rose-600'
            ];
            return (
              <div 
                key={index}
                className='bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-purple-300'
              >                <div className={`bg-linear-to-r ${headerGradients[index]} text-white p-6`}>
                  <div className='flex items-start justify-between mb-3'>
                    <Code2 className='w-8 h-8' />
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      project.status === 'Completed' 
                        ? 'bg-green-400 text-green-900' 
                        : 'bg-yellow-400 text-yellow-900'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className='text-xl mb-2'>{project.title}</h3>
                </div>                <div className='p-6'>
                  <p className='text-slate-700 mb-4 leading-relaxed'>
                    {project.description}
                  </p>                  <div className='mb-4'>
                    <h4 className='text-sm text-purple-900 mb-2'>Technologies:</h4>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((tech, idx) => {
                        const techColors = [
                          'from-cyan-100 to-blue-100 text-cyan-900',
                          'from-purple-100 to-pink-100 text-purple-900',
                          'from-orange-100 to-red-100 text-orange-900',
                          'from-teal-100 to-cyan-100 text-teal-900'
                        ];
                        return (
                          <span 
                            key={idx}
                            className={`bg-linear-to-r ${techColors[idx % techColors.length]} px-3 py-1 rounded-full text-xs`}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>                  <div className='mb-4'>
                    <h4 className='text-sm text-blue-900 mb-2'>Key Features:</h4>
                    <ul className='space-y-1'>
                      {project.features.map((feature, idx) => (
                        <li key={idx} className='text-sm text-slate-600 flex items-start gap-2'>
                          <span className='text-blue-900 mt-1'>•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>                  <div className='flex gap-3 mt-6'>
                    <a href={project.liveDemo} className={`flex-1 bg-linear-to-r ${headerGradients[index]} hover:opacity-90 text-white py-2 px-4 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm shadow-lg`}>
                      <ExternalLink className='w-4 h-4' />
                      Live Demo
                    </a>
                    <a href={project.code} className='flex-1 border-2 border-purple-600 text-purple-900 hover:bg-purple-600 hover:text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm'>
                      <Github className='w-4 h-4' />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>        <div className='mt-16 text-center bg-linear-to-r from-blue-900 via-purple-900 to-indigo-900 text-white p-12 rounded-lg shadow-2xl shadow-purple-500/30'>
          <h3 className='text-2xl mb-4'>Interested in working together?</h3>
          <p className='text-lg text-cyan-200 mb-6 max-w-2xl mx-auto'>
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="#contact"
            className='inline-block bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg transition-all hover:scale-105 shadow-lg'
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects