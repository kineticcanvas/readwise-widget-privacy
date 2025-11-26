import React from 'react';

interface ContactInfoProps {
  role?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ role }) => {
  return (
    <div className="contact-info">
      {role && <p><strong>{role}:</strong></p>}
      <ul>
        <li><strong>Company:</strong> Kinetic Canvas Development</li>
        <li><strong>Email:</strong> <a href="mailto:support@kcd.works">support@kcd.works</a></li>
        <li><strong>Website:</strong> <a href="https://www.kcd.works" target="_blank" rel="noopener noreferrer">www.kcd.works</a></li>
        <li><strong>Response Time:</strong> Within 48 hours</li>
      </ul>
    </div>
  );
};
