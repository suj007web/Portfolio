import '../styles/globals.css'
import StyleSwitcher from '../components/StyleSwitcher'
import Client from '@/components/Client'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Sujal Chauhan | Full-Stack Developer Portfolio',
  description: "Sujal Chauhan's professional portfolio. Discover projects in web development, cloud integration, and software engineering.",
  keywords: "Software Developer, Full-Stack Developer, Web Development, Cloud Integration, React, Next.js, Software Engineering",
  authors: [{ name: "Sujal Chauhan" }],
  metadataBase: new URL('https://www.sujalchauhan.in'),
  openGraph: {
    title: 'Sujal Chauhan | Full-Stack Developer Portfolio',
    description: "Explore Sujal Chauhan's projects in web development, cloud integration, and software engineering.",
    url: 'https://www.sujalchauhan.in',
    siteName: 'Sujal Chauhan Portfolio',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Client/>
          <main className="flex-1 p-4 lg:p-6 lg:ml-28">
            {children}
            <Analytics />
          </main>
          <StyleSwitcher />
        </div>
      </body>
    </html>
  )
}