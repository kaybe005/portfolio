import React, { useState, useEffect } from 'react';
import Terminal from '../components/Terminal';
import LabButton from '../components/LabButton';
import useSound from 'use-sound';
import buttonClick from '../../public/sounds/button-beep.wav'

const HomeSection: React.FC<{ onSectionChange: (section: string) => void }> = ({ onSectionChange }) => {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'KALASH\'S LAB';
  const [nameIndex, setNameIndex] = useState(0);
  const [playClick] = useSound(buttonClick, { volume: 0.5 });
  
  useEffect(() => {
    if (nameIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(prev => prev + fullName[nameIndex]);
        setNameIndex(nameIndex + 1);
      }, 200);
      
      return () => clearTimeout(timeout);
    }
  }, [nameIndex]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-bungee text-dexter-teal mb-4 text-center animate-glow">
        {displayedName}<span className="animate-blink">_</span>
      </h1>
      
      <p className="text-xl md:text-2xl font-orbitron text-dexter-orange mb-8 text-center">
        Building the future, one line at a time.
      </p>
      
      <div className="w-full max-w-2xl mb-8">
        <Terminal title="WELCOME.SYS" typingEffect>
          Booting lab interface... OK.
           Neural cores synchronized. Memory banks decrypted.
           Subject: Kalash: A full-stack engineer specializing in  AI systems, financial tools, and interactive experiments. Compatibilities: React, TypeScript, Node.js, MongoDB, TailwindCSS, Three.js, and more.
           Status: Conducting live experiments in the field of Fintech and immersive UIs.

           Choose an experiment to begin analysis...
        </Terminal>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <LabButton onClick={() => {
          playClick();
          onSectionChange('projects');}}>
          ACCESS LAB FILES
        </LabButton>
        <LabButton variant="secondary" onClick={() => {
          playClick();
          onSectionChange('contact');
          }}>
          MESSAGE HEAD SCIENTIST
        </LabButton>
      </div>
    </div>
  );
};

export default HomeSection;
