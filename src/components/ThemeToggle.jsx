import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "light") {
    document.documentElement.classList.remove("dark");
    return false; // light mode
  }

  // default is dark
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  return true; 
};

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-colors duration-300",
        "hover:bg-foreground/10 dark:hover:bg-foreground/20"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-foreground" />
      ) : (
        <Moon className="h-6 w-6 text-foreground" />
      )}
    </button>
  );
};
