import React from 'react';

const sections = [
  { id: 'information-collected', title: '1. Information We Collect' },
  { id: 'how-we-use', title: '2. How We Use Your Information' },
  { id: 'data-security', title: '3. Data Storage and Security' },
  { id: 'third-party', title: '4. Third-Party Services' },
  { id: 'gdpr-rights', title: '5. Your Rights (GDPR - EU)' },
  { id: 'ccpa-rights', title: '6. Your Rights (CCPA - California)' },
  { id: 'children', title: "7. Children's Privacy" },
  { id: 'data-sharing', title: '8. Data Sharing and Disclosure' },
  { id: 'international', title: '9. International Data Transfers' },
  { id: 'cookies', title: '10. Cookies and Tracking' },
  { id: 'changes', title: '11. Changes to Privacy Policy' },
  { id: 'breach', title: '12. Data Breach Notification' },
  { id: 'contact', title: '13. Contact Information' },
  { id: 'legal-basis', title: '14. Legal Basis for Processing' },
  { id: 'dpo', title: '15. Data Protection Officer' }
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
