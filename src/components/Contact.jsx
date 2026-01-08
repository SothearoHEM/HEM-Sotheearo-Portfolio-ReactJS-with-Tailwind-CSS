import React from 'react'
import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Github, Linkedin, Facebook } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  return (
    <section className='py-20 px-6 bg-linear-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden' id="contact">
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4'>Get In Touch</h2>
          <p className='text-lg text-cyan-200 max-w-2xl mx-auto'>
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 mb-12'>
          <div className='bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 shadow-2xl'>
            <h3 className='text-2xl mb-6'>Send Me a Message</h3>
            <form className='space-y-4'>
              <div>
                <label htmlFor="name" className='block text-sm mb-2 text-cyan-200'>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  required
                  className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 transition-colors'
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className='block text-sm mb-2 text-cyan-200'>Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  required
                  className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 transition-colors'
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className='block text-sm mb-2 text-cyan-200'>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  required
                  className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 transition-colors'
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-sm mb-2 text-cyan-200'>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  required
                  rows={5}
                  className='w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none'
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className='w-full bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50'
              >
                <Send className='w-5 h-5' />
                Send Message
              </button>
            </form>
          </div>          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl mb-6'>Contact Information</h3>
              <div className='space-y-6'>
                <div className='bg-linear-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all hover:scale-105'>
                  <div className='flex items-start gap-4'>
                    <div className='bg-linear-to-r from-cyan-500 to-blue-500 p-3 rounded-lg shadow-lg'>
                      <Phone className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h4 className='text-lg mb-2 text-blue-200'>Phone</h4>
                      <a href="tel:+85592202393" className='text-xl hover:text-blue-300 transition-colors'>
                        +855 92 20 23 93
                      </a>
                      <p className='text-sm text-cyan-300 mt-1'>Available Mon-Fri, 9AM-6PM</p>
                    </div>
                  </div>
                </div>

                <div className='bg-linear-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all hover:scale-105'>
                  <div className='flex items-start gap-4'>
                    <div className='bg-linear-to-r from-purple-500 to-pink-500 p-3 rounded-lg shadow-lg'>
                      <Mail className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h4 className='text-lg mb-2 text-blue-200'>Email</h4>
                      <a href="mailto:sothearohem@gmail.com" className='text-xl hover:text-blue-300 transition-colors break-all'>
                        sothearohem@gmail.com
                      </a>
                      <p className='text-sm text-purple-300 mt-1'>I&apos;ll respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className='bg-linear-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all hover:scale-105'>
                  <div className='flex items-start gap-4'>
                    <div className='bg-linear-to-r from-orange-500 to-red-500 p-3 rounded-lg shadow-lg'>
                      <MapPin className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h4 className='text-lg mb-2 text-blue-200'>Address</h4>
                      <p className='text-lg'>
                        #884, St 113, Ou Baek K&apos;am<br />
                        Sen Sok, Phnom Penh, Cambodia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>            <div>
              <h3 className='text-xl mb-4'>Connect With Me</h3>
              <div className='flex gap-4'>
                <a 
                  href="#" 
                  className='w-14 h-14 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-lg'
                  aria-label="GitHub"
                >
                  <Github className='w-7 h-7' />
                </a>
                <a 
                  href="#" 
                  className='w-14 h-14 bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-lg'
                  aria-label="LinkedIn"
                >
                  <Linkedin className='w-7 h-7' />
                </a>
                <a 
                  href="#" 
                  className='w-14 h-14 bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-lg'
                  aria-label="Facebook"
                >
                  <Facebook className='w-7 h-7' />
                </a>
              </div>
            </div>            <div className='bg-linear-to-r from-green-500 to-teal-500 p-6 rounded-lg shadow-lg'>
              <h4 className='text-xl mb-2'>Current Status</h4>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-white rounded-full animate-pulse'></div>
                <span className='text-lg'>Available for opportunities</span>
              </div>
              <p className='text-sm text-green-100 mt-2'>
                Open to internships and entry-level positions
              </p>
            </div>
          </div>
        </div>        <div className='border-t border-white/20 pt-8 text-center'>
          <p className='text-slate-300'>&copy; {new Date().getFullYear()} Hem Sothearo. All rights reserved.</p>
          <p className='text-sm text-slate-400 mt-2'>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}

export default Contact