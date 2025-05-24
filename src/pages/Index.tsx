
import React, { useState, useEffect } from 'react';
import ControlPanel from '../components/ControlPanel';
import LabPanel from '../components/LabPanel';
import HomeSection from '../sections/HomeSection';
import ProjectsSection from '../sections/ProjectsSection';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);
  const [bootupProgress, setBootupProgress] = useState(0);

  useEffect(() => {
    // Simulate lab bootup
    const interval = setInterval(() => {
      setBootupProgress(prev => {
        const next = prev + 3 + Math.random() * 2;
        return next >= 100 ? 100 : next;
      });
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection onSectionChange={setActiveSection} />;
      case 'projects':
        return <ProjectsSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection onSectionChange={setActiveSection} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="lab-panel max-w-md w-full">
          <h1 className="text-2xl font-orbitron text-dexter-teal text-center mb-6">
            LABORATORY SYSTEMS INITIALIZING
          </h1>
          
          <div className="w-full bg-black/50 h-6 rounded-full overflow-hidden border-2 border-dexter-teal mb-4">
            <div 
              className="h-full bg-dexter-green"
              style={{ width: `${bootupProgress}%`, transition: "width 0.3s ease-in-out" }}
            ></div>
          </div>
          
          <div className="font-share-tech text-dexter-green text-center">
            {bootupProgress < 100 ? `Loading... ${Math.floor(bootupProgress)}%` : "Complete!"}
          </div>
          
          {bootupProgress === 100 && (
            <div className="text-center mt-4 animate-glow">
              <span className="text-dexter-teal font-orbitron">
                ACCESS GRANTED
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dexter-darkPurple py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Dexter's Lab Control Panel */}
        <ControlPanel 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
          className="mb-8"
        />
        
        {/* Main Content */}
        <LabPanel className="p-6 mb-8 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(128,0,255,0.3)]">
          {renderSection()}
        </LabPanel>
        
        {/* Footer */}
        <footer className="text-center text-dexter-gray text-sm px-2 py-4">
          <p>&copy; {new Date().getFullYear()} Kalash's LABORATORY • All experiments logged and monitored.</p>
          <p className='text-xs mt-1'>Unauthorized cloning of lab results may result in spontaneous code mutation.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;