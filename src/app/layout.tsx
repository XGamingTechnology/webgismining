import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mining Asset Dashboard',
  description: 'Real-time monitoring and geofence management for mining assets',
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