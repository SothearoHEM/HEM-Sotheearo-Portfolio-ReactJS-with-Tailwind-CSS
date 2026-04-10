import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Github, Linkedin, Facebook} from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Phnom_Penh', hour12: true });
  const [formData, setFormData] = useState({
    time: time,
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const validMessage = formData.message.trim().length > 0;
  const handleSubmit = (e) => {
    if (!validMessage) {
      alert('Please fill all required fields before sending the message.');
      return;
    }
    e.preventDefault();
    emailjs.send('service_h91tuch', 'template_3d3bq8f', formData, 'Hn0BPBdxDqRJRrzZ6')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully! Thank you for sending me a message. I will get back to you soon.');
        setFormData({
          name: '',
          time: time,
          email: '',
          subject: '',
          message: ''
        });
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      }
    );
  }

  return (
    <section className='py-20 px-6 bg-[#0B1120] text-blue-50 relative overflow-hidden min-h-screen' id="contact">
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 font-bold'>Get In Touch</h2>
          <p className='text-lg text-blue-200/70 max-w-2xl mx-auto'>
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 mb-12'>
          <div className='bg-[#101827df] backdrop-blur-md p-8 rounded-2xl border border-blue-900/40 shadow-xl'>
            <h3 className='text-2xl mb-6 text-white font-semibold'>Send Me a Message</h3>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className='block text-sm mb-2 text-blue-300'>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  value={formData.name}
                  required
                  className='w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-blue-800/50 text-blue-50 placeholder-blue-900/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all'
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className='block text-sm mb-2 text-blue-300'>Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className='w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-blue-800/50 text-blue-50 placeholder-blue-900/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all'
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className='block text-sm mb-2 text-blue-300'>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  value={formData.subject}
                  required
                  className='w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-blue-800/50 text-blue-50 placeholder-blue-900/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all'
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-sm mb-2 text-blue-300'>Message</label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  value={formData.message}
                  required
                  rows={5}
                  className='w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-blue-800/50 text-blue-50 placeholder-blue-900/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none'
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className='w-full bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/25 border border-transparent hover:border-cyan-300/50'
              >
                <Send className='w-5 h-5' />
                Send Message
              </button>
            </form>
          </div>          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl mb-6 text-white font-semibold'>Contact Information</h3>
              <div className='space-y-6'>
                <div className='bg-[#101827] bg-linear-to-r from-blue-900/10 to-cyan-900/10 backdrop-blur-md p-6 rounded-2xl border border-blue-900/40 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] shadow-lg'>
                  <div className='flex items-start gap-4'>
                    <div className='bg-linear-to-r from-blue-600 to-cyan-500 p-3 rounded-xl shadow-lg'>
                      <Phone className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h4 className='text-lg mb-1 text-blue-200'>Phone</h4>
                      <a href="tel:+85592202393" className='text-xl hover:text-cyan-400 transition-colors font-medium'>
                        +855 92 20 23 93
                      </a>
                      <p className='text-sm text-blue-300/70 mt-1'>Available Mon-Fri, 9AM-6PM</p>
                    </div>
                  </div>
                </div>

                <div className='bg-[#101827] bg-linear-to-r from-indigo-900/10 to-blue-900/10 backdrop-blur-md p-6 rounded-2xl border border-blue-900/40 hover:border-indigo-500/50 transition-all duration-300 hover:scale-[1.02] shadow-lg'>
                  <div className='flex items-start gap-4'>
                    <div className='bg-linear-to-r from-indigo-600 to-blue-500 p-3 rounded-xl shadow-lg'>
                      <Mail className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h4 className='text-lg mb-1 text-blue-200'>Email</h4>
                      <a href="mailto:sothearohem@gmail.com" className='text-xl hover:text-indigo-400 transition-colors break-all font-medium'>
                        sothearohem@gmail.com
                      </a>
                      <p className='text-sm text-blue-300/70 mt-1'>I&apos;ll respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className='bg-[#101827] bg-linear-to-r from-cyan-900/10 to-indigo-900/10 backdrop-blur-md p-6 rounded-2xl border border-blue-900/40 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] shadow-lg'>
                  <div className='flex items-start gap-4'>
                    <div className='bg-linear-to-r from-cyan-600 to-indigo-500 p-3 rounded-xl shadow-lg'>
                      <MapPin className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h4 className='text-lg mb-1 text-blue-200'>Address</h4>
                      <p className='text-lg font-medium'>
                        #884, St 113, Ou Baek K&apos;am<br />
                        Sen Sok, Phnom Penh, Cambodia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>            <div>
              <h3 className='text-xl mb-4 text-white font-semibold'>Connect With Me</h3>
              <div className='flex gap-4'>
                <a 
                  href="https://github.com/SothearoHEM" 
                  className='w-14 h-14 bg-[#101827] border border-blue-800/50 hover:border-cyan-400 text-blue-200 hover:text-cyan-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/20'
                  aria-label="GitHub"
                >
                  <Github className='w-7 h-7' />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sothearo-hem-9a862b3a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  className='w-14 h-14 bg-[#101827] border border-blue-800/50 hover:border-indigo-400 text-blue-200 hover:text-indigo-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-indigo-500/20'
                  aria-label="LinkedIn"
                >
                  <Linkedin className='w-7 h-7' />
                </a>
                <a 
                  href="https://www.facebook.com/sothearo.hem" 
                  className='w-14 h-14 bg-[#101827] border border-blue-800/50 hover:border-blue-400 text-blue-200 hover:text-blue-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/20'
                  aria-label="Facebook"
                >
                  <Facebook className='w-7 h-7' />
                </a>
                <a 
                  href="https://t.me/HemSothearo" 
                  className='w-14 h-14 bg-[#101827] border border-blue-800/50 hover:border-cyan-400 text-blue-200 hover:text-cyan-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/20'
                  aria-label="Telegram"
                >
                  <FaTelegram className='w-7 h-7' />
                </a>
              </div>
            </div>            
            <div className='bg-[#101827] border border-cyan-500/30 p-6 rounded-2xl shadow-[0_0_15px_rgba(6,182,212,0.1)] relative overflow-hidden'>
              <div className='absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10'></div>
              <h4 className='text-xl mb-2 text-white font-semibold relative z-10'>Current Status</h4>
              <div className='flex items-center gap-2 relative z-10'>
                <div className='w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]'></div>
                <span className='text-lg font-medium text-cyan-50'>Available for opportunities</span>
              </div>
              <p className='text-sm text-blue-200/80 mt-2 relative z-10'>
                Open to internships and entry-level positions
              </p>
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
}

export default Contact