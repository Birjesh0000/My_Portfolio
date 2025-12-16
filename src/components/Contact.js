// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiPhone, FiMapPin, FiDownload } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail className="text-xl" />,
      label: 'Email',
      value: 'gbirjesh0000@gmail.com',
      link: 'mailto:gbirjesh0000@gmail.com',
      color: 'text-purple-400'
    },
    {
      icon: <FiPhone className="text-xl" />,
      label: 'Phone',
      value: '+91-8081955858',
      link: 'tel:+918081955858',
      color: 'text-green-400'
    },
    {
      icon: <FiMapPin className="text-xl" />,
      label: 'Location',
      value: 'Prayagraj, Uttar Pradesh',
      link: '#',
      color: 'text-red-400'
    },
    {
      icon: <FiGithub className="text-xl" />,
      label: 'GitHub',
      value: 'Birjesh0000',
      link: 'https://github.com/Birjesh0000',
      color: 'text-gray-400'
    }
  ];

  // Resume download path:
  // Place your resume at: public/resume/Birjesh_Gupta_Resume.pdf
  const resumePath = '/resume/Birjesh_Gupta_Resume.pdf';

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">Feel free to reach out or download my resume</p>
        </motion.div>

        {/* Center the single contact card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-3xl"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4 mb-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <motion.a
                  href={resumePath}
                  download="Birjesh_Gupta_Resume.pdf"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <FiDownload />
                  Download Resume
                </motion.a>

                <div className="text-sm text-gray-400">
                  <p>Prefer a quick chat? Call or email and we’ll arrange a time.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
