import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Resogar - Apartamentos de Lujo en Madrid',
  description: 'Suites boutique exclusivas y apartamentos de lujo en Madrid. Experiencias premium en Chamartín, Salamanca y Centro Histórico.',
  openGraph: {
    title: 'Resogar - Apartamentos de Lujo',
    description: 'Suites boutique exclusivas en Madrid',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-white">{children}</body>
    </html>
  );
}
