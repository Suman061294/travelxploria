import type { Metadata } from 'next'
import { Instrument_Sans, Lato, Mulish } from '@next/font/google';
import '@/styles/styles.scss'
import GlobalProvider from './GlobalProvider'
const dmSans = Mulish({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'], // Include weights you need
  display: 'swap',               // Improves performance by using the font only when needed
});

export const metadata: Metadata = {
  title: 'TravelXploria',
  description: 'The Best Travel Agency in Kolkata',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />

          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet"></link>
        </head>
        <body className={dmSans.className}>
          {children}
        </body>
      </html>
    </GlobalProvider>
  )
}
