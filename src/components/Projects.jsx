import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Doctor Appointment System',
    description: 'A comprehensive full-stack healthcare platform connecting patients with doctors. Streamlines the booking process and manages patient records efficiently.',
    problemSolved: 'Reduced average appointment booking time by 40% and minimized scheduling conflicts through automated synchronization.',
    image: 'bg-gradient-to-br from-blue-900 to-indigo-600',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: trueimport React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Live Train Tracker',
    description: 'A full-stack Indian Railways train tracking application providing real-time status and offline location capabilities via cell tower data.',
    problemSolved: 'Delivered accurate real-time updates using WebSockets and ensured offline accessibility for users with poor network connectivity.',
    image: 'bg-gradient-to-br from-blue-900 to-indigo-600',
    tech: ['React', 'Node.js', 'Flutter', 'Firebase', 'WebSockets'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true
  },
  {
    title: 'AI Chatbot Assistant',
    description: 'Intelligent conversational agent capable of understanding context and providing helpful responses based on customizable knowledge bases.',
    problemSolved: 'Automated 60% of common customer queries and implemented natural language processing for better intent recognition.',
    image: 'bg-gradient-to-bl from-purple-800 to-primary',
    tech: ['Python', 'TensorFlow', 'NLP', 'Flask', 'React'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true
  },
  {
    title: 'Airline Reservation System',
    description: 'A robust desktop application for managing flight schedules, bookings, and passenger information with a clean graphical user interface.',
    problemSolved: 'Built a reliable transaction management system preventing double-bookings and optimizing seat allocation algorithms.',
    image: 'bg-gradient-to-tr from-accent/80 to-teal-800',
    tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
    github: 'https://github.com',
    demo: null,
    featured: false
  },
  {
    title: 'Snake Game in C',
    description: 'Classic arcade snake game implemented entirely in C programming language focusing on memory management and terminal graphics.',
    problemSolved: 'Optimized rendering loop to run smoothly at 60fps on terminal and implemented efficient data structures for snake body tracking.',
    image: 'bg-gradient-to-tl from-emerald-800 to-green-600',
    tech: ['C', 'Ncurses', 'Data Structures', 'Pointers'],
    github: 'https://github.com',
    demo: null,
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2">
          <span className="text-primary font-mono text-2xl md:text-3xl mr-2">03.</span> 
          Featured Projects
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 relative group`}
            >
              {/* Project Image/Preview */}
              <div className="w-full md:w-3/5 md:group-hover:-translate-y-2 transition-transform duration-500 z-10">
                <a href={project.demo || project.github} target="_blank" rel="noreferrer" className="block relative overflow-hidden rounded-xl bg-card border border-border aspect-video group-hover:border-primary/50 transition-colors cursor-pointer">
                  {/* Placeholder Gradient representing Project Screenshot */}
                  <div className={`absolute inset-0 ${project.image} opacity-80 mix-blend-screen transition-all duration-500 group-hover:scale-105 group-hover:opacity-100`}></div>
                  
                  {/* Decorative UI elements overlay */}
                  <div className="absolute inset-0 flex flex-col p-4 opacity-70">
                    <div className="w-full h-8 bg-black/40 backdrop-blur-md rounded-t-lg flex items-center px-4 gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      <div className="ml-4 h-4 w-32 bg-white/10 rounded-full"></div>
                    </div>
                    <div className="flex-1 border border-white/10 bg-black/20 rounded-b-lg backdrop-blur-sm p-6 flex flex-col justify-end">
                       <h3 className="text-4xl font-black text-white/40 tracking-wider uppercase mb-2">
                         {project.title.split(' ')[0]}
                       </h3>
                    </div>
                  </div>
                </a>
              </div>

              {/* Project Info */}
              <div className={`w-full md:w-2/5 flex flex-col ${index % 2 === 1 ? 'md:items-start text-left' : 'md:items-end md:text-right'} z-20`}>
                <p className="font-mono text-primary text-sm tracking-widest mb-2">
                  {project.featured ? 'Featured Project' : 'Notable Project'}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 hover:text-primary transition-colors cursor-pointer">
                  {project.title}
                </h3>
                
                <div className={`p-6 glass-card shadow-2xl w-full md:w-[120%] ${index % 2 === 1 ? 'md:-mr-20' : 'md:-ml-20'} mb-6 relative hover:border-primary/50 flex flex-col gap-4 text-gray-300`}>
                  <p className="text-[15px] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-sm">
                      <strong className="text-accent font-medium">Impact: </strong> 
                      {project.problemSolved}
                    </p>
                  </div>
                </div>

                <ul className={`flex flex-wrap gap-3 font-mono text-xs text-gray-400 mb-8 ${index % 2 === 1 ? 'justify-start' : 'md:justify-end'}`}>
                  {project.tech.map((tech, i) => (
                    <li key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className={`flex items-center gap-6 ${index % 2 === 1 ? 'justify-start' : 'md:justify-end'}`}>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all hover:-translate-y-1">
                    <FaGithub size={22} />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-all hover:-translate-y-1">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

  },
  {
    title: 'AI Chatbot Assistant',
    description: 'Intelligent conversational agent capable of understanding context and providing helpful responses based on customizable knowledge bases.',
    problemSolved: 'Automated 60% of common customer queries and implemented natural language processing for better intent recognition.',
    image: 'bg-gradient-to-bl from-purple-800 to-primary',
    tech: ['Python', 'TensorFlow', 'NLP', 'Flask', 'React'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true
  },
  {
    title: 'Airline Reservation System',
    description: 'A robust desktop application for managing flight schedules, bookings, and passenger information with a clean graphical user interface.',
    problemSolved: 'Built a reliable transaction management system preventing double-bookings and optimizing seat allocation algorithms.',
    image: 'bg-gradient-to-tr from-accent/80 to-teal-800',
    tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
    github: 'https://github.com',
    demo: null,
    featured: false
  },
  {
    title: 'Snake Game in C',
    description: 'Classic arcade snake game implemented entirely in C programming language focusing on memory management and terminal graphics.',
    problemSolved: 'Optimized rendering loop to run smoothly at 60fps on terminal and implemented efficient data structures for snake body tracking.',
    image: 'bg-gradient-to-tl from-emerald-800 to-green-600',
    tech: ['C', 'Ncurses', 'Data Structures', 'Pointers'],
    github: 'https://github.com',
    demo: null,
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2">
          <span className="text-primary font-mono text-2xl md:text-3xl mr-2">03.</span> 
          Featured Projects
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 relative group`}
            >
              {/* Project Image/Preview */}
              <div className="w-full md:w-3/5 md:group-hover:-translate-y-2 transition-transform duration-500 z-10">
                <a href={project.demo || project.github} target="_blank" rel="noreferrer" className="block relative overflow-hidden rounded-xl bg-card border border-border aspect-video group-hover:border-primary/50 transition-colors cursor-pointer">
                  {/* Placeholder Gradient representing Project Screenshot */}
                  <div className={`absolute inset-0 ${project.image} opacity-80 mix-blend-screen transition-all duration-500 group-hover:scale-105 group-hover:opacity-100`}></div>
                  
                  {/* Decorative UI elements overlay */}
                  <div className="absolute inset-0 flex flex-col p-4 opacity-70">
                    <div className="w-full h-8 bg-black/40 backdrop-blur-md rounded-t-lg flex items-center px-4 gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      <div className="ml-4 h-4 w-32 bg-white/10 rounded-full"></div>
                    </div>
                    <div className="flex-1 border border-white/10 bg-black/20 rounded-b-lg backdrop-blur-sm p-6 flex flex-col justify-end">
                       <h3 className="text-4xl font-black text-white/40 tracking-wider uppercase mb-2">
                         {project.title.split(' ')[0]}
                       </h3>
                    </div>
                  </div>
                </a>
              </div>

              {/* Project Info */}
              <div className={`w-full md:w-2/5 flex flex-col ${index % 2 === 1 ? 'md:items-start text-left' : 'md:items-end md:text-right'} z-20`}>
                <p className="font-mono text-primary text-sm tracking-widest mb-2">
                  {project.featured ? 'Featured Project' : 'Notable Project'}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 hover:text-primary transition-colors cursor-pointer">
                  {project.title}
                </h3>
                
                <div className={`p-6 glass-card shadow-2xl w-full md:w-[120%] ${index % 2 === 1 ? 'md:-mr-20' : 'md:-ml-20'} mb-6 relative hover:border-primary/50 flex flex-col gap-4 text-gray-300`}>
                  <p className="text-[15px] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-sm">
                      <strong className="text-accent font-medium">Impact: </strong> 
                      {project.problemSolved}
                    </p>
                  </div>
                </div>

                <ul className={`flex flex-wrap gap-3 font-mono text-xs text-gray-400 mb-8 ${index % 2 === 1 ? 'justify-start' : 'md:justify-end'}`}>
                  {project.tech.map((tech, i) => (
                    <li key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className={`flex items-center gap-6 ${index % 2 === 1 ? 'justify-start' : 'md:justify-end'}`}>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all hover:-translate-y-1">
                    <FaGithub size={22} />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-all hover:-translate-y-1">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
