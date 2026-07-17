import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://essenzaduo.com'),
  title: 'Inauguração Essenza Duo',
  description:
    'Um novo espaço pensado para cuidar da sua beleza, autoestima e bem-estar. Confirme sua presença na inauguração Essenza Duo.',
  openGraph: {
    title: 'Inauguração Essenza Duo',
    description:
      'Um novo espaço pensado para cuidar da sua beleza, autoestima e bem-estar.',
    images: ['/images/Logo_Essenza.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Logo_Essenza.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
