import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2">
          <span className="text-primary font-mono text-2xl md:text-3xl mr-2">01.</span> 
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I am a dedicated <strong className="text-white">Computer Science Engineer</strong> with a strong foundation in software development and problem-solving. My journey in tech started with a deep curiosity about how things work behind the scenes, leading me to explore various programming languages and modern technologies.
            </p>
            <p>
              I specialize in building robust applications, with a keen focus on <strong className="text-primary">System Design</strong>, <strong className="text-primary">Data Structures</strong>, and <strong className="text-primary">Algorithms</strong>. I believe that good software engineers don't just write code; they design systems that solve real-world problems efficiently and elegantly.
            </p>
            <p>
              Whether it's developing a complex web application, optimizing algorithmic logic, or designing database schemas, I approach every challenge with an engineering mindset. I am constantly learning and adapting to new technologies to stay at the forefront of the industry.
            </p>
            
            <div className="pt-4 flex items-center gap-4">
              <div className="p-4 glass-card flex-1 text-center">
                <h3 className="text-3xl font-bold text-accent mb-1">2+</h3>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Years Coding</p>
              </div>
              <div className="p-4 glass-card flex-1 text-center">
                <h3 className="text-3xl font-bold text-purple-400 mb-1">10+</h3>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Projects Built</p>
              </div>
            </div>
          </div>

          <div className="relative group max-w-sm mx-auto w-full">
            {/* Image styling wrapper */}
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-2xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0"></div>
            
            <div className="relative bg-card border-border border-2 overflow-hidden rounded-2xl z-10 aspect-[3/4] flex items-center justify-center group-hover:border-primary transition-all duration-300">
              
              <div className="absolute inset-0 bg-dark/50 z-0"></div>
              
              {/* Animated Code Illustration */}
              <div className="relative z-10 w-full h-full p-6 flex flex-col font-mono text-sm">
                
                {/* Mac-style Window header */}
                <div className="flex gap-2 mb-6 pb-4 border-b border-border/50 w-full">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>

                <div className="flex-1 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-pink-500">class</span> <span className="text-yellow-300">Developer</span> {'{'}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pl-4"
                  >
                    <span className="text-blue-400">constructor</span>() {'{'}
                    <div className="pl-4 text-gray-400">
                      <span className="text-pink-500">this</span>.name = <span className="text-green-400">'Ayush Yadav'</span>;
                    </div>
                    <div className="pl-4 text-gray-400">
                      <span className="text-pink-500">this</span>.traits = [<span className="text-green-400">'Problem Solver'</span>, <span className="text-green-400">'Builder'</span>];
                    </div>
                    {'}'}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pl-4"
                  >
                    <span className="text-yellow-300">code</span>() {'{'}
                    <div className="pl-4 text-gray-400 animate-pulse">
                      <span className="text-pink-500">return</span> <span className="text-green-400">"Drink coffee, write elegant code."</span>;
                    </div>
                    {'}'}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    {'}'}
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-6 right-6 text-primary opacity-50 text-4xl"
                >
                  &lt;/&gt;
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
