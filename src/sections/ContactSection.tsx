import React from 'react';
import Terminal from '../components/Terminal';
import LabPanel from '../components/LabPanel';
import ContactForm from '../components/ContactForm';
import useSound from 'use-sound';
import transmitClick from '../../public/sounds/transmit.mp3';

const ContactSection: React.FC = () => {
  const contactChannels = [
    { name: "Email", value: "kalashbijukchhe74@gmail.com", icon: "📧" },
    { name: "GitHub", value: "github.com/kaybe005", icon: "💻" },
    { name: "Instagram", value: "@kay_beee05", icon: "📸" },
    { name: "Location", value: "Currently expreimenting in Sydney", icon: "🔬" },
  ];

  const [playTransmit] = useSound(transmitClick, { volume: 0.5 });

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bungee text-dexter-teal mb-6 text-center">LABORATORY COMMUNICATIONS</h2>
      
      <Terminal title="CONTACT.INFO" className="mb-6 w-full max-w-md mx-auto">
        NOTICE: This lab is equipped with advanced encryption protocols. For authentic collaborations, system access inquiries, or alliance in innovation - use the channels below.
        Response may be delayed if the lab is undergoing dimensional field testing.
      </Terminal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-6 w-full">
        <LabPanel title="CONTACT CHANNELS" glowing className="w-full min-w-0">
          <div className="space-y-4">
            {contactChannels.map((channel, index) => (
              <div key={index} className="flex items-center p-3 bg-black/30 rounded border border-dexter-teal">
                <div className="w-10 h-10 flex items-center justify-center bg-dexter-purple rounded-full text-lg mr-3">
                  {channel.icon}
                </div>
                <div>
                  <h4 className="font-orbitron text-dexter-orange text-sm">{channel.name}</h4>
                  <p className="text-dexter-green font-share-tech break-words">{channel.value}</p>
                </div>
              </div>
            ))}
          </div>
        </LabPanel>
        
        <LabPanel title="SECURE MESSAGE TRANSMISSION" className="w-full min-w-0">
          <ContactForm onSubmit={() => playTransmit()} />
        </LabPanel>
      </div>
    </div>
  );
};

export default ContactSection;
