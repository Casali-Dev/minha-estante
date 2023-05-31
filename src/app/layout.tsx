'use client'

import { ReactNode, useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookmark,
  faHome,
  faUserGear,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Minha estante',
  description: 'Pra guardar o que é digital.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'night' | 'winter'>('night')

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <meta name="viewport" content="viewport-fit=cover" />
        <title>Minha Estante</title>
      </head>
      <body className={`${inter.className} relative bg-base-200`}>
        <div className="absolute -z-50 h-[100svh] w-[100svh] max-w-[100vw] rounded-r-full bg-base-300 blur-3xl"></div>
        {children}
        <div className="btm-nav shadow-2xl">
          <button className="text-secondary">
            <FontAwesomeIcon icon={faBookmark} />
          </button>
          <button className="active text-secondary">
            <FontAwesomeIcon icon={faHome} />
          </button>
          <button className="text-secondary">
            <FontAwesomeIcon icon={faUserGear} />
          </button>
        </div>
        <button
          className="btn-outline btn-circle btn absolute right-4 top-4"
          onClick={() => {
            setTheme((state) => (state === 'night' ? 'winter' : 'night'))
          }}
        >
          {theme === 'night' ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </body>
    </html>
  )
}
