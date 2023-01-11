import '../styles/globals.css'
import '../styles/webkit-scrollbar.css'
import type { AppProps } from 'next/app'
import { Lato } from '@next/font/google'

const inter = Lato({subsets: ['latin'], weight: ['100', '300', '400', '700', '900']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>
      {`
        :root {
          --inter: ${inter.style.fontFamily};
          --section-px: 4rem;
          --section-px-md: 3rem;
          --section-px-sm: 1.4rem;
        }
      `}
    </style>
      <Component {...pageProps} />
    </>


  )
}
