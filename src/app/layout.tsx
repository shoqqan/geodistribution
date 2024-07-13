import type { Metadata } from 'next';
import { fonts } from '@/shared/lib';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.raleway.className}>{children}</body>
    </html>
  );
}
