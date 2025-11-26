import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Privacy Policy - ReadwiseWidget',
  description: 'Privacy policy for ReadwiseWidget Android application. Learn how we protect your data with hardware-backed encryption and zero tracking.',
  keywords: ['privacy policy', 'ReadwiseWidget', 'Android', 'GDPR', 'CCPA', 'data protection'],
  creator: 'Kinetic Canvas Digital, LLC',
  openGraph: {
    title: 'Privacy Policy - ReadwiseWidget',
    description: 'Learn how ReadwiseWidget protects your data with hardware-backed encryption and zero tracking.',
    url: 'https://privacy.rw.kcd.works',
    siteName: 'ReadwiseWidget Privacy Policy',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
