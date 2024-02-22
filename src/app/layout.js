import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss';
import { TopBar } from '@/components/TopBar/TopBar';
import { MainHeader } from '@/components/MainHeader/MainHeader';
import { Footer } from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Автокомплекм',
  description: 'Магазин автозапчастей',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <TopBar />
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
