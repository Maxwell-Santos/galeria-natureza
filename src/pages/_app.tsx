import '../styles/globals.css'
import '../styles/webkit-scrollbar.css'
import type { AppProps } from 'next/app'
import { Lato } from '@next/font/google'
import { useEffect, useState } from 'react'
import { Loader } from '../components/Loader'
import { AnimatePresence, motion } from 'framer-motion'

const inter = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] })

export default function App({ Component, pageProps }: AppProps) {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setLoad(false)
  }, [])
  
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

      {
        load ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{duration: 1}}
            >
              <Loader />
            </motion.div>
          </AnimatePresence>
        ) : (
          <Component {...pageProps} />
        )
      }
    </>


  )
}
