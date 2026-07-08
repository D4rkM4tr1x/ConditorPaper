import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { StoreProvider } from '@/components/providers/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Conditor Paper | Essbares Zuckerpapier',
    template: '%s | Conditor Paper',
  },
  description: 'Moderne Online-Shop für essbares Zuckerpapier mit schönen Motiven für Kuchen und Torten.',
  keywords: ['essbares Zuckerpapier', 'Kuchendekoration', 'Tortenpapier', 'Dekoration', 'Conditor Paper'],
  openGraph: {
    title: 'Conditor Paper | Essbares Zuckerpapier',
    description: 'Elegante Designs für besondere Kuchen und Torten.',
    url: 'https://conditorpaper.de',
    siteName: 'Conditor Paper',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conditor Paper | Essbares Zuckerpapier',
    description: 'Essbares Zuckerpapier für elegante Kuchen und Torten.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <StoreProvider>
          <div className="min-h-screen bg-transparent">
            <Header />
            {children}
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
