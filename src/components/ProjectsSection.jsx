import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pet Adoption Platform",
    description:
      "Simplifies the process of finding and adopting pets by providing a searchable database and connection tools.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Django"],
    demoUrl: "https://fn-ui.vercel.app",
    gitHubUrl: "https://github.com/tn592/fur-nest",
  },
  {
    id: 2,
    title: "Event Management System",
    description:
      "Offers comprehensive features for organizing, tracking, and successfully managing various types of events.",
    image: "/projects/project2.png",
    tags: ["Python", "Django", "Supabase"],
    demoUrl: "https://event-management-system-blue.vercel.app",
    gitHubUrl: "https://github.com/tn592/Event_Management_System",
  },
  {
    id: 3,
    title: "Cyber Team Formation",
    description:
      "A specialized tool for assembling, assigning, and coordinating skilled individuals into effective cybersecurity response teams.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://cyber-experts-sable.vercel.app",
    gitHubUrl: "https://github.com/tn592/cyber-experts",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Creations </span>
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto text-lg">
          {" "}
          Here are some of my recent projects, showcasing full-stack development
          and attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group gradient-border bg-card/70 rounded-xl overflow-hidden shadow-lg card-hover"
            >
              <div className="h-52 overflow-hidden">
                {" "}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  {" "}
                  {project.title}
                </h3>{" "}
                <p className="text-foreground/70 text-base">
                  {" "}
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-start items-center pt-3">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="flex items-center text-primary font-medium hover:underline transition-colors duration-300 group"
                    >
                      Demo
                      <ExternalLink
                        size={16}
                        className="ml-1 transition-transform group-hover:translate-x-0.5"
                      />
                    </a>

                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="flex items-center text-foreground/70 hover:text-primary transition-colors duration-300 group"
                    >
                      Code
                      <Github
                        size={16}
                        className="ml-1 transition-transform group-hover:scale-110"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
