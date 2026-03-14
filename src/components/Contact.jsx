import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-container min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-primary font-mono text-lg mb-4 tracking-widest uppercase">
          06. What's Next?
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          Get In Touch
        </h2>
        
        <p className="text-gray-400 text-lg leading-relaxed mb-12">
          I'm currently looking for software engineering internship opportunities. 
          Whether you have a question, an opportunity, or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:ayushyadav23206@gmail.com"
          className="inline-block px-10 py-5 border-2 border-primary text-primary rounded-xl font-bold bg-primary/10 hover:bg-primary hover:text-white hover:-translate-y-2 transition-all duration-300 text-lg shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
        >
          Say Hello 👋
        </a>

      </motion.div>
    </section>
  );
};

export default Contact;
