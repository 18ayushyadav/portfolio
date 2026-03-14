import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-dark py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex gap-6 mb-6">
          <a href="https://github.com/18ayushyadav" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ayush-yadav-69175734a" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
            <FaTwitter size={20} />
          </a>
        </div>
        
        <p className="flex items-center gap-2 text-sm text-gray-400 font-mono">
          Built with <FaHeart className="text-red-500 animate-pulse" /> by 
          <span className="text-primary hover:text-white cursor-pointer transition-colors">Ayush Yadav</span>
        </p>
        <p className="text-xs text-gray-600 mt-2">
          &copy; {new Date().getFullYear()} Ayush Yadav. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
