import { useParams, Link } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pet Adoption Platform",
    description:
      "A full-stack web application that simplifies the pet adoption process by allowing users to browse, search, and connect with pet shelters easily. It features robust filtering, detailed pet profiles, and a streamlined application submission process. This project was built with a focus on user experience and data integrity, offering a warm and intuitive interface for a sensitive topic.",
    shortDescription:
      "A comprehensive, full-stack pet adoption platform connecting users with shelters using robust search and application features.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Django", "PostgreSQL"],
    demoUrl: "https://fn-ui.vercel.app",
    gitHubUrl: "https://github.com/tn592/fur-nest",
    features: [
      "Advanced filtering and search functionality for pets.",
      "Secure user authentication and authorization (JWT).",
      "Responsive design for all devices.",
    ],
  },
  {
    id: 2,
    title: "Event Management System",
    description:
      "A comprehensive event management system designed for organizers to create, track, and manage events efficiently. From ticket sales and seating charts to attendee communication, this platform centralizes all event operations. It leverages modern backend technologies for high performance and scalability, ensuring a smooth experience for both organizers and attendees.",
    shortDescription:
      "A high-performance event management system facilitating creation, tracking, and attendee communication for various event types.",
    image: "/projects/project2.png",
    tags: ["Python", "Django", "Supabase", "React"],
    demoUrl: "https://event-management-system-blue.vercel.app",
    gitHubUrl: "https://github.com/tn592/Event_Management_System",
    features: [
      "Real-time event tracking and analytics.",
      "Role-based access control for organizers and staff.",
      "Automated email communication to attendees.",
    ],
  },
  {
    id: 3,
    title: "Cyber Team Formation Platform",
    description:
      "A specialized platform designed to assemble and manage agile cybersecurity teams for rapid response during cyber incidents. It features a skill-matching algorithm to quickly identify and coordinate between skilled professionals based on the incident type and required expertise. The goal is to minimize response time and enhance operational efficiency in critical situations.",
    shortDescription:
      "A specialized platform using skill-matching to quickly assemble and manage agile cybersecurity response teams during incidents.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    demoUrl: "https://cyber-experts-sable.vercel.app",
    gitHubUrl: "https://github.com/tn592/cyber-experts",
    features: [
      "Skill-based expert matching algorithm.",
      "Incident logging and severity classification.",
      "Secure, real-time team communication channels.",
    ],
  },
];


export const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-xl text-foreground/80 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <h2 className="text-4xl font-bold mb-4">404 - Project Not Found </h2>
        <p className="mb-8">It seems the project you are looking for doesn't exist. 🥲</p>
        <Link
          to="/#projects"
          className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg hover:scale-[1.02] transition-transform duration-300"
        >
          <ArrowLeft size={18} className="mr-2" />
          Go Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <Link
            to="/#projects"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 group"
          >
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Projects
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-4 tracking-tight leading-snug">
            {project.title}
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Project Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 mb-10 border-4 border-gray-200 dark:border-gray-800 transition-all duration-300 transform hover:scale-[1.005]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[500px] object-cover transition-opacity duration-500"
              />
            </div>

            {/* Detailed Description */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold mb-4 text-primary">Overview</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {project.description}
                </p>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-10">

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground text-lg font-semibold shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <ExternalLink size={20} className="mr-3" />
                View Live Demo
              </a>

              <a
                href={project.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Github size={20} className="mr-3" />
                View Source Code
              </a>
            </div>
            
            {/* Tech Stack */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                🚀 Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-sm rounded-full font-medium bg-secondary/20 dark:bg-secondary/30 text-secondary dark:text-secondary-light border border-secondary/40 dark:border-secondary-light/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                ✨ Key Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-primary mr-3 mt-1 shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};