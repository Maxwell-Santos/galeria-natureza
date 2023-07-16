import { motion } from "framer-motion"
import Image from "next/image"

export function Main() {

  return (
    <main className="flex items-center flex-col sm:flex-row justify-center mx-auto">
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="relative hidden sm:block flex-1 w-full h-[500px] mt-16 md:m-0 md:h-[600px]"
      >
        <Image
          src={"/lobo1.jpg"}
          alt="Imagem de lobo"
          blurDataURL={"/lobo1.jpg"}
          placeholder="blur"
          fill
          className="bg-white/20"
        />
      </motion.div>

      <motion.div
      initial={{opacity: 0, x: 100}}
      animate={{x: 0, opacity: 1, transition: {duration: 0.5}}}
      className="py-10 flex-1 sm:-ml-24 z-20 flex flex-col items-end gap-1 sm:gap-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold">
          Fotografia ajuda as pessoas a verem
        </h1>

        <p
        className="sm:max-w-sm mt-10"
        style={{textShadow: '2px 2px 5px rgba(0,0,0,0.8)'}}
        >
          Descubra a beleza da vida selvagem e paisagens deslumbrantes neste portfólio de fotografia de natureza, capturado com paixão e sensibilidade.
        </p>
      </motion.div>
    </main>
  )
}
