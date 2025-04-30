import './globals.css';
import './styles.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apollo247 Clone - Doctor Listing',
  description: 'Find and book appointments with top doctors in your area',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
