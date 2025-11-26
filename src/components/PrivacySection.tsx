import React from 'react';

interface PrivacySectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const PrivacySection: React.FC<PrivacySectionProps> = ({
  id,
  title,
  children
}) => {
  return (
    <section id={id} className="privacy-section">
      <h2>{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};
