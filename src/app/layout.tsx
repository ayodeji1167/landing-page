import type { Metadata } from 'next';
import { Josefin_Sans, Urbanist } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/providers/AppProvider';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});
const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

export const metadata: Metadata = {
  title: 'Bats Properties - Dubai Real Estate Listings & Property Management',
  description:
    'Explore prime Dubai real estate listings with Bats Properties. Discover luxury homes, apartments, and commercial properties. Contact us to find your perfect property in Dubai.',
  openGraph: {
    title: 'Bats Properties - Dubai Real Estate',
    description:
      'Find exclusive real estate listings in Dubai with Bats Properties. Browse apartments, villas, and commercial spaces and connect with us to explore your options.',
    url: 'https://www.bats.properties', // Replace with the actual domain
    siteName: 'Bats Properties',

    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bats Properties - Dubai Real Estate Listings',
    description:
      'Discover luxury Dubai properties with Bats Properties. Contact us to learn more about available apartments, villas, and commercial spaces.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin_sans.variable} ${urbanist.variable}`}>
      <body>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
