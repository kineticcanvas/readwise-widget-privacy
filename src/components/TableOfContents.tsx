import React from 'react';

const sections = [
  { id: 'information-collected', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'data-security', title: 'Data Storage and Security' },
  { id: 'third-party', title: 'Third-Party Services' },
  { id: 'gdpr-rights', title: 'Your Rights (GDPR - EU)' },
  { id: 'ccpa-rights', title: 'Your Rights (CCPA - California)' },
  { id: 'children', title: "Children's Privacy" },
  { id: 'data-sharing', title: 'Data Sharing and Disclosure' },
  { id: 'international', title: 'International Data Transfers' },
  { id: 'cookies', title: 'Cookies and Tracking' },
  { id: 'changes', title: 'Changes to Privacy Policy' },
  { id: 'breach', title: 'Data Breach Notification' },
  { id: 'contact', title: 'Contact Information' },
  { id: 'legal-basis', title: 'Legal Basis for Processing' },
  { id: 'dpo', title: 'Data Protection Officer' }
];

export const TableOfContents: React.FC = () => {
  return (
    <nav className="table-of-contents">
      <h2>Table of Contents</h2>
      <ol>
        {sections.map(section => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
