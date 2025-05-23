import React from 'react';
import { cn } from '@/lib/utils';
import LabPanel from './LabPanel';
import LabButton from './LabButton';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  demoUrl,
  codeUrl,
  className,
}) => {
  return (
    <LabPanel className={cn("h-full", className)}>
      <div className="flex flex-col h-full">
        <div className="mb-3">
          <h3 className="text-xl font-orbitron text-dexter-teal mb-1">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-dexter-purple text-xs font-share-tech text-dexter-teal rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {imageUrl && (
          <div className="mb-3 border-2 border-dexter-teal rounded overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-48 object-cover object-center"
            />
          </div>
        )}
        
        <p className="text-dexter-gray mb-4 flex-grow">{description}</p>
        
        <div className="flex gap-2 mt-auto">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <LabButton variant="primary" size="sm" className="w-full">
                VIEW DEMO
              </LabButton>
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <LabButton variant="secondary" size="sm" className="w-full">
                VIEW CODE
              </LabButton>
            </a>
          )}
        </div>
      </div>
    </LabPanel>
  );
};

export default ProjectCard;