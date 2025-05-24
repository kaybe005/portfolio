import React from 'react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import buttonClick from '../../public/sounds/button-beep.wav';

const DemoUnavailable: React.FC = () => {
  const [playClick] = useSound(buttonClick, { volume: 0.5 });

  return (
    <div className="min-h-screen bg-dexter-purple text-dexter-green flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bungee mb-4 text-dexter-orange">LAB CONTAINMENT ERROR</h1>
      <p className="text-lg mb-6 max-w-xl">
        This experiment is still undergoing calibration and hasn’t been safely deployed to the public internet.
        The lead scientist advises caution — and patience.
      </p>
      <p className="bg-dexter-teal/20 p-4 rounded text-sm font-mono border border-dexter-teal max-w-md">
        STATUS: 🔒 Access to live demo temporarily restricted. <br />
        SYSTEM LOG: No public deployment found. Awaiting final energy surge.
      </p>
      <Link to="/" className="mt-8 inline-block px-6 py-2 text-dexter-purple bg-dexter-green rounded hover:scale-105 transition-transform" onClick={() => playClick()}>
        🔙 Return to Lab
      </Link>
    </div>
  );
};

export default DemoUnavailable;