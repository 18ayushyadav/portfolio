import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaLaptopCode, FaMedal } from 'react-icons/fa';

const achievements = [
  {
    title: 'Open Source Contributor',
    description: 'Actively contributing to various open-source projects on GitHub with over 30+ accepted pull requests in modern web technologies.',
    icon: <FaMedal size={24} />,
    color: 'text-green-400',
    bg: 'bg-green-400/10'
  },
  {
    title: 'Self-Taught Developer',
    description: 'Mastered modern web development, React, and Node.js through rigorous self-study, building comprehensive full-stack applications.',
    icon: <FaLaptopCode size={24} />,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10'
  },
  {
    title: 'Algorithm Enthusiast',
    description: 'Continuously refining problem-solving skills and algorithmic thinking by consistently studying Data Structures, Graph Theory, and DP.',
    icon: <FaCode size={24} />,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'Project Architect',
    description: 'Designed and deployed functional production-ready projects like a complete Doctor Appointment System and an AI Chatbot.',
    icon: <FaTrophy size={24} />,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="heading-2 mb-6">
              <span className="text-primary font-mono text-2xl md:text-3xl mr-2 block mb-2">05.</span> 
              Achievements
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              A showcase of my journey as a self-taught software engineer, open-source contributor, and passionate problem solver.
            </p>
            
            <div className="glass-card p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-gray-300 font-medium">GitHub Contributions</span>
                <span className="text-2xl font-bold text-green-400 font-mono">30+</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-gray-300 font-medium">Projects Built</span>
                <span className="text-2xl font-bold text-primary font-mono">10+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">Lines of Code</span>
                <span className="text-2xl font-bold text-yellow-400 font-mono">50K+</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 grid sm:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 group hover:border-primary/50 transition-all hover:-translate-y-2 h-full flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
