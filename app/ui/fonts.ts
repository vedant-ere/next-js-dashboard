import { Inter, Lusitana } from 'next/font/google';

export const lusitana = Lusitana({ 
  subsets: ['latin'],
  weight: ['400', '700'] // Lusitana only supports 400 and 700
});

export const inter = Inter({ subsets: ['latin'] });