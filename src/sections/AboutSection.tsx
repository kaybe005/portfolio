import React from 'react';
import Terminal from '../components/Terminal';
import LabPanel from '../components/LabPanel';

const AboutSection: React.FC = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "TailwindCSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Docker", "Figma", "Blender"] },
    { category: "Specialties", items: [ "Finance", "Sports", "Collaboration", "AI"] }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bungee text-dexter-teal mb-6 text-center">LAB DIRECTOR PROFILE</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <LabPanel className="h-full" glowing>
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full border-4 border-dexter-teal overflow-hidden mb-4">
                <img 
                  src="./profile.png" 
                  alt="Kalash's Lab" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-orbitron text-xl text-dexter-orange mb-2">Kalash</h3>
              <p className="text-dexter-teal text-center mb-4">Lead Scientist and Full-Stack Engineer</p>
              
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="flex flex-col items-center p-2 bg-dexter-purple/30 rounded">
                  <span className="text-dexter-green text-2xl font-bold">1+</span>
                  <span className="text-dexter-gray text-xs">Years Exp</span>
                </div>
                <div className="flex flex-col items-center p-2 bg-dexter-purple/30 rounded">
                  <span className="text-dexter-green text-2xl font-bold">15+</span>
                  <span className="text-dexter-gray text-xs">Projects</span>
                </div>
              </div>
            </div>
          </LabPanel>
        </div>
        
        <div className="md:col-span-2">
          <Terminal title="ABOUT.TXT" className="mb-6">
          Welcome to Kalash's Laboratory.

          This controlled environment is dedicated to building intelligent systems, financial tools, and immersive web experiments. With a strong foundation in computer science and a fascination for AI, finance, and creative tech, I build everything from full-stack platforms to 3D simulations.

          Current areas of study include:
          - Intelligent financial dashboards
          - AI-assisted data workflows
          - Shader-based terrain rendering
          - UI systems that spark curiosity

          WARNING: Unauthorized tampering with lab components may result in irreversible innovation.
          </Terminal>
          
          <LabPanel title="SKILL ANALYSIS">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-orbitron text-dexter-orange">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-2 py-1 bg-dexter-purple text-dexter-green text-sm rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </LabPanel>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
