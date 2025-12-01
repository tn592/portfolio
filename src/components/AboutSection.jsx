import { Briefcase, Code, Cpu, Github } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Solving Problems by Turning Concepts Into Working Systems
            </h3>
            <p className="text-muted-foreground">
              I’m driven by the desire to understand how systems work and how to
              build them better. Whether it's a small script or a complex
              problem, I enjoy breaking things down, thinking clearly, and
              turning ideas into reliable, real-world solutions.
            </p>

            <p className="text-muted-foreground">
              I'm currently focused on improving my fundamentals, exploring new
              technologies, and building projects that reflect my growth. Every
              project teaches me something new, and that journey keeps me
              motivated as I move closer to a software engineering career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="https://github.com/tn592"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1kJ5IrZWLlBT174WAYjiTxHFmjeY6By3O"
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Software Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Crafting efficient, reliable software with modern tools and
                    clean code.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Problem Solving </h4>
                  <p className="text-muted-foreground">
                    Skilled at analyzing challenges, finding patterns, and
                    creating practical solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
