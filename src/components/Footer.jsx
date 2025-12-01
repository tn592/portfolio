import { ArrowUp } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-card border-t border-border mt-16">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} — Built with passion & precision.
        </p>

        <div className="flex items-center gap-3">
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/tn231104"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <SiLeetcode size={18} />
          </a>

          <a
            href="#hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
