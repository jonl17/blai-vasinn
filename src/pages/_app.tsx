import type { AppProps } from 'next/app'
import Navbar from '~/components/Navbar'
import '~/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
