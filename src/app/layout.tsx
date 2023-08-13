import { WeatherHistoryProvider } from '@/providers/WeatherHistoryProvider';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Weather',
  description: 'Weather forecast by city',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WeatherHistoryProvider>{children}</WeatherHistoryProvider>
      </body>
    </html>
  );
}
