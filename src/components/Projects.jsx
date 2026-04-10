import { ExternalLink, Github } from 'lucide-react'
import projectImg1 from '../assets/Portfolio project img.png'
import projectImg2 from '../assets/Financial tracker img.png'
import projectImg3 from '../assets/E-commerce project img.png'
import projectImg4 from '../assets/Weather app img.png'
import projectImg5 from '../assets/New Year Countdown img.png'

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
      image: projectImg1,
      status: "Completed",
      liveDemo: "https://hem-sotheearo-portfolio-react-js-wi.vercel.app/",
      code: "https://github.com/SothearoHEM/HEM-Sotheearo-Portfolio-ReactJS-with-Tailwind-CSS"
    },
    {
      title: "Automated Financial Tracker (Full-stack)",
      description: "A full-stack financial tracking application that allows users to manage their expenses and income. Built with React for the front-end and  with Laravel for the back-end, providing a seamless user experience and robust functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Laravel", "MySQL"],
      features: [
        "User authentication and authorization",
        "Expense and income tracking",
        "Data visualization with charts",
        "Responsive design for mobile and desktop"
      ],
      image: projectImg2,
      status: "Completed",
      liveDemo: "https://automated-financial-tracker.vercel.app/",
      code: "https://github.com/SothearoHEM/Automated-Financial-Tracker"
    },
    {
      title: "E-Commerce Project",
      image: projectImg3,
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
      image: projectImg4,
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
      image: projectImg5,
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
    <section className='min-h-screen py-20 px-6 bg-[#0B1120]' id="projects">
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 font-bold'>My Projects</h2>
          <p className='text-lg text-blue-200/70 max-w-2xl mx-auto'>
            A showcase of web development projects demonstrating my technical skills and creativity
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => {
            const headerGradients = [
              'from-blue-600 to-cyan-600',
              'from-blue-500 to-indigo-600',
              'from-cyan-600 to-blue-500',
              'from-indigo-500 to-blue-600',
              'from-blue-600 to-cyan-500',
              'from-cyan-500 to-indigo-500'
            ];
            return (
              <div
                key={index}
                className='group bg-[#101827] rounded-2xl overflow-hidden border border-blue-900/40 hover:border-blue-500/50 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1'
              >
                {/* Image with overlay */}
                <div className='relative overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100'
                    loading='lazy'
                  />
                  {/* Overlay */}
                  <div className='absolute inset-0 bg-linear-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap items-center justify-center gap-4'>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='bg-blue-600 text-white rounded-full px-5 py-2.5 flex items-center gap-1.5 text-sm font-medium shadow-lg transition-all hover:scale-105 hover:bg-blue-500 hover:shadow-cyan-500/30'
                    >
                      <ExternalLink className='w-4 h-4' />
                      Live Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='bg-[#101827]/80 backdrop-blur-sm text-blue-100 border border-blue-800/50 rounded-full px-5 py-2.5 flex items-center gap-1.5 text-sm font-medium shadow-lg transition-all hover:scale-105 hover:bg-[#1E293B] hover:border-blue-500/50'
                    >
                      <Github className='w-4 h-4' />
                      Code
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className='p-5 flex flex-col h-[calc(100%-12rem)]'>
                  {/* Title & Status */}
                  <div className='mb-3'>
                    <div className='flex items-start justify-between gap-2 mb-2'>
                      <h3 className='text-xl font-semibold text-blue-50 leading-snug'>
                        {project.title}
                      </h3>
                      <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold border ${
                        project.status === 'Completed'
                          ? 'bg-blue-500/10 text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                          : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <p className='text-blue-200/60 mb-4 leading-relaxed'>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className='mb-4'>
                    <h4 className='text-sm text-blue-300/80 mb-2 font-medium'>Technologies:</h4>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className='bg-blue-950/40 text-blue-200 border border-blue-800/30 shadow-[0_inset_0_0_10px_rgba(59,130,246,0.1)] px-3 py-1 rounded-full text-xs'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className='mb-5'>
                    <h4 className='text-sm text-blue-300/80 mb-2 font-medium'>Key Features:</h4>
                    <ul className='space-y-1.5'>
                      {project.features.map((feature, idx) => (
                        <li key={idx} className='text-sm text-blue-200/60 flex items-start gap-2'>
                          <span className='text-cyan-400 mt-1'>•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-3 mt-auto pt-4'>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 bg-linear-to-r ${headerGradients[index]} hover:opacity-90 text-white py-2 px-4 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm shadow-lg hover:shadow-cyan-500/30`}
                    >
                      <ExternalLink className='w-4 h-4' />
                      Live Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex-1 bg-[#101827] text-blue-200 border border-blue-800/40 hover:border-blue-500/50 hover:bg-[#1E293B] py-2 px-4 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm shadow-lg'
                    >
                      <Github className='w-4 h-4' />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='mt-16 text-center bg-[#101827] border border-blue-900/50 text-white p-12 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.1)] relative overflow-hidden'>
          <div className='absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-700 via-transparent to-transparent blur-2xl'></div>
          <h3 className='text-2xl mb-4 font-semibold text-blue-50 relative z-10'>Interested in working together?</h3>
          <p className='text-lg text-blue-200/70 mb-6 max-w-2xl mx-auto relative z-10'>
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="/contact"
            className='inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-cyan-500/40 relative z-10 border border-blue-500/50'
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects
