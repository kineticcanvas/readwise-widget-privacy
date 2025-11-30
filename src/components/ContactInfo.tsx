import React from 'react';

interface ContactInfoProps {
  role?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ role }) => {
  return (
    <div className="contact-info">
      {role && <p><strong>{role}:</strong></p>}
      <ul>
        <li><strong>Company:</strong> Kinetic Canvas Digital, LLC (a Georgia, USA limited liability company)</li>
        <li><strong>Email:</strong> <a href="mailto:corporate@kcd.works">corporate@kcd.works</a></li>
        <li><strong>Website:</strong> <a href="https://www.kcd.works" target="_blank" rel="noopener noreferrer">www.kcd.works</a></li>
      </ul>
    </div>
  );
};
