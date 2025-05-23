
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import LabPanel from '../components/LabPanel';
import Terminal from '../components/Terminal';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Fyntra",
      description: "AN AI-powered dashboard for dissecting stock market activity using Groq AI summaries, chart visualizations, and real-time data.",
      imageUrl: "./fyntra.png",
      technologies: [ "Next.js", "LangChain", "TypeScript", "TailwindCSS", "MongoDB", "Groq"],
      demoUrl: "https://fyntra.vercel.app/",
      codeUrl: "https://github.com/kaybe005/fyntra",
    },
    {
      title: "Coincise",
      description: "A personal finance tracker that lets users manage expenses, view monthly reports, and toggle dark mode like a real lab dashboard.",
      imageUrl: "./coincise.png",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "JWT", "Bcrypt", "Express"],
      demoUrl: "https://coincise-brown.vercel.app/",
      codeUrl: "https://github.com/kaybe005/coincise",
    },
    {
      title: "Terrain Generator Pro",
      description: "A procedural terrain simulator built with Three.js and GLSL shaders. Lab tests completed, but field deployment is still pending.",
      imageUrl: "https://placehold.co/600x400/1A0B2E/7FFF00?text=Terrain+Generator+Pro",
      technologies: ["Three.js", "GLSL", "CSG"],
      demoUrl: "/demo-unavailable",
      codeUrl: "https://github.com/kaybe005/Procedural-Terrain",
    },
    {
      title: "Tourbot Navigator",
      description: "An MVC tourism management system with agency logins, booking systems, Razor views, and SQL-backed reports.",
      imageUrl: "https://placehold.co/600x400/1A0B2E/44CFCB?text=Tourbot+Navigator",
      technologies: ["ASP.NET", "SQL server", "Bootstrap", "Entity Framework"],
      demoUrl: "/demo-unavailable",
      codeUrl: "https://github.com/kaybe005/TourismProject",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bungee text-dexter-teal mb-6 text-center">LABORATORY EXPERIMENTS</h2>
      
      <Terminal className="mb-6" title="PROJECTS.LOG">
        Displaying {projects.length} experimental projects.
        Each project has undergone rigorous scientific testing.
        Click on any experiment for further analysis.
      </Terminal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
            demoUrl={project.demoUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;