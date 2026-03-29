import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  
  {
    role: 'Python Developer Intern',
    company: 'YBI Foundation',
    duration: 'june 2025 - july 2025',
    description: [
      'Built cloud monitering system prototype using the MERN stack.',
      'Optimized database queries in MongoDB, reducing page load times by 15%.',
      ],
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub Community',
    duration: 'Ongoing',
    description: [
      'Made 30+ contributions to various open-source projects across the React and Node.js ecosystems.',
      'Collaborated with maintainers to resolve issues, improve documentation, and optimize code.',
      'Actively learning and adopting industry best practices through code reviews and public collaboration.',
    ],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container relative">
      {/* Decorative timeline line */}
      <div className="absolute left-6 md:left-1/2 top-32 bottom-24 w-0.5 bg-border hidden md:block"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 text-center mb-16">
          <span className="text-primary font-mono text-2xl md:text-3xl mr-2 block text-center mb-4">04.</span> 
          Work Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline marker */}
              <div className="absolute left-0 md:left-1/2 top-4 md:top-8 w-4 h-4 rounded-full bg-primary -ml-2 border-4 border-dark z-10 hidden md:block">
                <div className="absolute inset-0 rounded-full bg-primary -ml-1 -mt-1 w-6 h-6 opacity-30 animate-ping"></div>
              </div>

              {/* Content box */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 text-left md:text-left' : 'md:pr-12 text-left md:text-right'}`}>
                <div className="glass-card p-8 group hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-accent text-sm mb-4 bg-accent/10 inline-block px-3 py-1 rounded-full border border-accent/20">
                    {exp.company} <span className="text-gray-400">|</span> {exp.duration}
                  </div>
                  
                  <ul className={`space-y-3 text-gray-300 text-[15px] ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className={`flex items-start gap-3 ${index % 2 !== 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                         <span className="text-primary mt-1 flex-shrink-0">▹</span>
                         <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty placeholder for timeline balance */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
