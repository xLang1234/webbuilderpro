import { Inter } from 'next/font/google';
import ThemeRegistry from './ThemeRegistry.jsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Website Builder Portfolio',
  description: 'Professional web development services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
