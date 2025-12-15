import { ArrowUp } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { Github, Linkedin } from "lucide-react";


export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-6">

        
        {/* GitHub */}
        <a
          href="https://github.com/tn592" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-110"
          aria-label="GitHub Profile"
        >
          <Github size={20} />
        </a>
        
        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/tn231104"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-110"
          aria-label="LeetCode Profile"
        >
          <SiLeetcode size={20} />
        </a>
        
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2 hidden sm:block"></div>

        {/* Scroll Up Button */}
        <a
          href="#hero"
          aria-label="Scroll to top"
          className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-110"
        >
          <ArrowUp size={20} />
        </a>

      </div>
    </footer>
  );
};