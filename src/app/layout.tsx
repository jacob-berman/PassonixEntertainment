import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Bungee } from 'next/font/google'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const plainText = Montserrat({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: "--font-primary"
})
const specialText = Bungee({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-special"
});

export const metadata: Metadata = {
  title: 'Passonix Entertainment',
  description: 'Passion through storytelling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${specialText.variable} ${plainText.variable}`}>
      <Navbar />
      {children}
      <Footer />
        </body>
    </html>
  )
}
