import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import '../app/globals.css'

// If loading a variable font, you don't need to specify the font weight
export default function Home({ Component, pageProps }: AppProps) {
  return (
    <main >
      <Component {...pageProps} />
    </main>
  )
}