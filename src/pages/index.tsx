import Head from 'next/head'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { About } from '../components/About'
import { Gallery } from '../components/Gallery'
import { Contact } from '../components/Contact'
import { SocialMedia } from '../components/SocialMedia'


export default function Home() {
  return (
    <>
      <Head>
        <title>Galeria Natureza</title>
        <meta name="description" content="A fake landing page of a photographer" />
        <meta name="author" content="Maxwell Alves dos Santos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/logoMaxIconClaro.png"></link>
      </Head>

      <div className="bg-[#00111b] sm:h-[800px] relative">
        <Header />
        <Main />

        <div className="absolute -bottom-36 right-20">
          <SocialMedia />
        </div>
      </div>
      <About />
      <Gallery />
      <Contact />

      <Footer />
    </>
  )
}
