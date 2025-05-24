
import React, { useState } from 'react';
import LabButton from './LabButton';
import Terminal from './Terminal';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.();

    // Simulate form submission
    setStatus({ success: true, message: 'Message sent successfully!' });
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    
    // Clear status after 3 seconds
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-orbitron text-dexter-teal mb-1">
          NAME:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
          className="w-full bg-black/50 border-2 border-dexter-teal rounded px-3 py-2 font-share-tech text-dexter-green focus:outline-none focus:border-dexter-green focus:ring-1 focus:ring-dexter-green"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block font-orbitron text-dexter-teal mb-1">
          EMAIL:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formState.email}
          onChange={handleChange}
          className="w-full bg-black/50 border-2 border-dexter-teal rounded px-3 py-2 font-share-tech text-dexter-green focus:outline-none focus:border-dexter-green focus:ring-1 focus:ring-dexter-green"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block font-orbitron text-dexter-teal mb-1">
          MESSAGE:
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formState.message}
          onChange={handleChange}
          className="w-full bg-black/50 border-2 border-dexter-teal rounded px-3 py-2 font-share-tech text-dexter-green focus:outline-none focus:border-dexter-green focus:ring-1 focus:ring-dexter-green resize-none"
        />
      </div>
      
      <div className="flex justify-center px-4" onSubmit={handleSubmit}>
        <LabButton type="submit" variant="primary" size="lg" className='w-full max-w-xs rounded-lg'>
          TRANSMIT
        </LabButton>
      </div>
      
      {status && (
        <Terminal className="mt-4" title="SYSTEM">
          <span className={status.success ? "text-dexter-green" : "text-dexter-red"}>
            {status.message}
          </span>
        </Terminal>
      )}
    </form>
  );
};

export default ContactForm;