import { Raleway } from 'next/font/google';
import localFont from 'next/font/local';

export const raleway = Raleway({ subsets: ['latin', 'cyrillic'], display: 'swap' });
export const dinPro = localFont({
  src: '../../../../public/fonts/din-pro.woff2',
  display: 'swap',
  variable: '--din-pro',
});
