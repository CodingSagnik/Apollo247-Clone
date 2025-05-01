import './globals.css';
import './styles.css';
import type { Metadata } from 'next';

// Define metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'General Physician & Internal Medicine Doctors | Apollo 247',
  description: 'Find the best General Physician & Internal Medicine doctors at Apollo 247. Book appointments online, view doctors profiles, education, consultation fees & more.',
  keywords: 'general physician, internal medicine, apollo 247, doctors, online consultation',
  openGraph: {
    title: 'General Physician & Internal Medicine Doctors | Apollo 247',
    description: 'Find the best General Physician & Internal Medicine doctors at Apollo 247. Book appointments online, view doctors profiles, education, consultation fees & more.',
    type: 'website',
    url: 'https://www.apollo247.com/specialties/general-physician-internal-medicine',
    siteName: 'Apollo 247 Clone',
    images: [
      {
        url: '/apollo-logo.png',
        width: 1200,
        height: 630,
        alt: 'Apollo 247',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'General Physician & Internal Medicine Doctors | Apollo 247',
    description: 'Find the best General Physician & Internal Medicine doctors at Apollo 247',
    images: ['/apollo-logo.png'],
  },
  alternates: {
    canonical: '/specialties/general-physician-internal-medicine',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured data for doctor listings (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalSpecialty',
              name: 'General Physician & Internal Medicine',
              description: 'Find the best General Physician & Internal Medicine doctors at Apollo 247',
              provider: {
                '@type': 'Organization',
                name: 'Apollo 247',
                url: 'https://www.apollo247.com',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
