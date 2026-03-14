import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'C', icon: '©️', level: 90 },
      { name: 'Java', icon: '☕', level: 85 },
      { name: 'Python', icon: '🐍', level: 80 }
    ]
  },
  {
    category: 'Web Development',
    items: [
      { name: 'HTML5', icon: '🌐', level: 95 },
      { name: 'CSS3/Tailwind', icon: '🎨', level: 90 },
      { name: 'JavaScript/React', icon: '⚡', level: 85 }
    ]
  },
  {
    category: 'Tools & Technologies',
    items: [
      { name: 'Git', icon: '🔀', level: 90 },
      { name: 'GitHub', icon: '🐙', level: 92 },
      { name: 'Linux', icon: '🐧', level: 80 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2">
          <span className="text-primary font-mono text-2xl md:text-3xl mr-2">02.</span> 
          My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 group hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-6 text-white border-b border-border pb-4 w-full flex items-center justify-between">
                {skillGroup.category}
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-primary to-accent group-hover:w-12 transition-all duration-300"></div>
              </h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium flex items-center gap-2">
                        <span>{skill.icon}</span> {skill.name}
                      </span>
                      <span className="text-sm font-mono text-primary">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-dark rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + (idx * 0.1) }}
                        className="h-full bg-gradient-to-r from-primary to-accent relative"
                      >
                         <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
