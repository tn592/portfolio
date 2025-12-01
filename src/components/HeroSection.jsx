import { Code, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[pulse-subtle] z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-[pulse-subtle] z-0"></div>

      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 p-4">
        <div className="text-left space-y-8 pt-10 md:pt-0">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="block text-foreground/80 opacity-0 animate-fade-in">
              Hi, I'm
            </span>
            <span className="block text-primary opacity-0 animate-fade-in-delay-1">
              Tanzina.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-lg opacity-0 animate-fade-in-delay-2">
            I'm an aspiring software engineer, building real projects and
            sharpening my problem-solving skills as I prepare for the industry.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-3">
            <a
              href="#projects"
              className="cosmic-button flex items-center group w-fit"
            >
              <Code className="w-5 h-5 mr-2 transition group-hover:rotate-12" />
              Explore My Code
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center relative min-h-[400px] opacity-0 animate-fade-in-delay-4">
          <div className="w-full max-w-md bg-card/70 p-6 rounded-xl shadow-2xl border border-border backdrop-blur-sm">
            {/* Terminal Header */}
            <div className="flex justify-between items-center pb-4 border-b border-border/50 mb-4">
              <span className="text-sm font-mono text-primary">
                tn/terminal.sh
              </span>
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Terminal Content */}
            <pre className="text-sm font-mono text-foreground leading-relaxed">
              <span className="text-primary">&gt;</span> npx tn build-profile
              <br />
              <span className="text-foreground/50">...fetching skills</span>
              <br />
              <span className="text-cyan-400">STATUS:</span> Problem Solver
              <br />
              <span className="text-yellow-400">LANGUAGES:</span> JavaScript,
              Python, C++
              <br />
              <span className="text-yellow-400">FRAMEWORKS:</span> React,
              Django, Node.js
              <br />
              <span className="text-foreground/50">...ready.</span>
              <br />
              <span className="text-primary">&gt;</span>{" "}
              <span className="animate-pulse">|</span>
            </pre>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/50 hover:text-primary transition duration-300">
        <span className="text-xs tracking-widest uppercase mb-1">Scroll</span>
        <Zap className="h-4 w-4 animate-[float] opacity-70" />
      </div>
    </section>
  );
};
