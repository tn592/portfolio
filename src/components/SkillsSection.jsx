"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Layers, Server, Database, Terminal, FileCode } from "lucide-react";
import { FaBootstrap, FaGitAlt, FaHtml5, FaNode, FaPython, FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango, SiSqlite, SiXampp } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiMysql, DiPostgresql } from "react-icons/di";

const skills = [
  // Programming Languages
  {
    name: "C/C++",
    level: 95,
    category: "programming languages",
    icon: TbBrandCpp,
  },
  {
    name: "Python",
    level: 95,
    category: "programming languages",
    icon: FaPython,
  },
  {
    name: "JavaScript",
    level: 90,
    category: "programming languages",
    icon: IoLogoJavascript,
  },
  // Frontend
  { name: "HTML/CSS", level: 80, category: "frontend", icon: FaHtml5 },
  { name: "React", level: 95, category: "frontend", icon: FaReact },
  { name: "Tailwind CSS", level: 85, category: "frontend", icon: RiTailwindCssFill },
  { name: "Bootstrap", level: 80, category: "frontend", icon: FaBootstrap },
  // Backend
  { name: "Django", level: 90, category: "backend", icon: SiDjango },
  { name: "Node.js", level: 85, category: "backend", icon: FaNode },
  { name: "API Development", level: 90, category: "backend", icon: Server },
  // Database & Tools
  {
    name: "Git/GitHub",
    level: 95,
    category: "database & tools",
    icon: FaGitAlt,
  },
  { name: "VS Code", level: 90, category: "database & tools", icon: VscVscode },
  { name: "Xampp", level: 85, category: "database & tools", icon: SiXampp },
  { name: "MySQL", level: 95, category: "database & tools", icon: DiMysql },
  { name: "SQLite", level: 90, category: "database & tools", icon: SiSqlite },
  {
    name: "PostgreSQL",
    level: 80,
    category: "database & tools",
    icon: DiPostgresql,
  },
];

const categories = [
  "all",
  "programming languages",
  "frontend",
  "backend",
  "database & tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
          Technical <span className="text-primary">Expertise</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-1.5 rounded-full transition-all duration-300 capitalize font-medium text-xs md:text-sm",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-foreground hover:bg-white/20 hover:border-white/40"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {" "}
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon || Code;
            const isCoreSkill = skill.level >= 90;
            const glowClass = isCoreSkill
              ? "hover:shadow-[0_0_15px_0_rgba(var(--primary-rgb),0.5)]"
              : "hover:shadow-lg";

            return (
              <div
                key={key}
                className={cn(
                  "p-5 h-full rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 transform perspective-1000",
                  "bg-white/5 backdrop-blur-md border border-white/10",
                  "hover:bg-white/10 hover:border-primary/50",
                  "hover:scale-[1.03] hover:-translate-y-1",
                  isCoreSkill ? "hover:shadow-primary/30" : "shadow-black/10",
                  glowClass
                )}
              >
                <div
                  className={cn(
                    "p-3 rounded-full mb-3 transition-transform duration-300",
                    isCoreSkill ? "bg-primary/15" : "bg-foreground/10"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-6 w-6",
                      isCoreSkill ? "text-primary" : "text-foreground/70"
                    )}
                  />{" "}
                </div>

                <h3
                  className={cn(
                    "font-bold text-base",
                    isCoreSkill ? "text-primary" : "text-foreground"
                  )}
                >
                  {skill.name}
                </h3>

                <p
                  className={cn(
                    "text-[11px] font-medium uppercase tracking-wider mt-1",
                    isCoreSkill ? "text-green-400" : "text-foreground/50"
                  )}
                >
                  {isCoreSkill
                    ? `Core (${skill.level}%)`
                    : `Proficient (${skill.level}%)`}{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
