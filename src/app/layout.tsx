import type { Metadata } from 'next'
import { Instrument_Sans } from '@next/font/google';
import '@/styles/styles.scss'
import GlobalProvider from './GlobalProvider'
const instrument = Instrument_Sans({ subsets: ['latin'] })

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
        <body className={instrument.className}>
          {children}
        </body>
      </html>
    </GlobalProvider>
  )
}
