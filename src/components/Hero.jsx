import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Particles (Simple CSS implementation) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Code-like overlay grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] z-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block"
          >
            <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
              Available for Internships
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Ayush Yadav</span>
          </h1>

          <div className="h-16 text-xl md:text-2xl font-mono text-gray-400">
            <span className="text-accent">&gt;</span>{' '}
            <TypeAnimation
              sequence={[
                'Computer Science Engineer',
                2000,
                'Software Developer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            I build elegant, scalable, and high-performance applications. 
            Passionate about solving complex problems through clean code.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              to="projects" 
              smooth={true} 
              duration={500}
              className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer group"
            >
              View Projects 
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="#contact" 
              className="px-8 py-3 bg-card border border-border text-white rounded-lg font-medium hover:bg-border transition-all flex items-center gap-2"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 mt-4 border-t border-border/50">
            <a href="https://github.com/18ayushyadav" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ayush-yadav-69175734a" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:ayushyadav23206@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </motion.div>

        {/* Decorative Graphic Element for Hero */ }
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:block relative"
        >
          <div className="w-full aspect-square relative glass-card p-6 flex flex-col overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
              <FaGithub size={200} />
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="flex-1 font-mono text-sm text-gray-300 space-y-2 overflow-hidden">
              <p><span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> <span className="text-pink-500">=</span> {'{'}</p>
              <p className="pl-4">name: <span className="text-green-400">'Ayush Yadav'</span>,</p>
              <p className="pl-4">role: <span className="text-green-400">'Software Engineer'</span>,</p>
              <p className="pl-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Python'</span>, <span className="text-green-400">'Java'</span>, <span className="text-green-400">'C'</span>],</p>
              <p className="pl-4">passion: <span className="text-green-400">'Building scalable solutions'</span></p>
              <p>{'};'}</p>
              <br />
              <p><span className="text-pink-500">while</span> (alive) {'{'}</p>
              <p className="pl-4 text-gray-400 animate-pulse">// Code, Coffee, Repeat</p>
              <p className="pl-4"><span className="text-blue-400">developer</span>.<span className="text-yellow-300">solveProblem</span>();</p>
              <p>{'}'}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
