import React from 'react';

interface ContactInfoProps {
  role?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ role }) => {
  return (
    <div className="contact-info">
      {role && <p><strong>{role}:</strong></p>}
      <ul>
        <li><strong>Email:</strong> <a href="mailto:kieran@kcd.works">kieran@kcd.works</a></li>
        <li><strong>Developer:</strong> Kieran (Kinetic Canvas Development)</li>
        <li><strong>Response Time:</strong> Within 48 hours</li>
      </ul>
    </div>
  );
};
