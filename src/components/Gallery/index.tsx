import Image from 'next/image'

export function Gallery() {

  return (
    <section id="gallery">

      <h2 className="mb-7">Galeria</h2>

      <div
        className="w-full flex justify-center"
      >
        <p className="leading-7 mb-10">
          <em className='max-w-lg'>
            <q>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam excepturi aut sint placeat deleniti optio facilis pariatur accusantium incidunt natus.
              Lorem ipsum dolor sit amet consectetur
            </q>
          </em>
        </p>
      </div>

      <div className='grid grid-cols-4 grid-rows-[repeat(7,_300px)] max-[425px]:grid-rows-[repeat(7,_200px)] sm:grid-rows-[repeat(5,_400px)] gap-2 sm:gap-4 relative mb-10 grid-flow-row-dense'>

        <div className='gallery-card col-span-4 row-span-1 relative'>
          <Image
            className='img-grid'
            src="/passarinho.jpg"
            alt="passarinho num balanço"
            blurDataURL={"/passarinho.jpg"}
            placeholder="blur"
            fill
          />
        </div>
        <div className='gallery-card col-span-4 sm:col-span-2 row-span-1 relative'>
          <Image
            className='img-grid'
            src="/garça.jpg"
            alt="garça"
            blurDataURL={"/garça.jpg"}
            placeholder="blur"
            fill
          />
        </div>
        <div className='gallery-card col-span-4 sm:col-span-2 row-span-2 relative'>
          <Image
            className='img-grid'
            src="/flamingo.jpg"
            alt="flamingo"
            blurDataURL={"/flamingo.jpg"}
            placeholder="blur"
            fill
          />
        </div>
        <div className='gallery-card col-span-2 row-span-1 relative'>
          <Image
            className='img-grid'
            src="/lobo2.jpg"
            alt="lobo 2"
            blurDataURL={"/lobo2.jpg"}
            placeholder="blur"
            fill
          />
        </div>
        <div className='gallery-card col-span-2 row-span-2 relative'>
          <Image
            className='img-grid'
            src="/girafa.jpg"
            alt="girafa"
            blurDataURL={"/girafa.jpg"}
            placeholder="blur"
            fill
          />
        </div>
        <div className='gallery-card col-span-2 row-span-1 relative'>
          <Image
            className='img-grid'
            src="/cobra.jpg"
            alt="cobra"
            blurDataURL={"/cobra.jpg"}
            placeholder="blur"
            fill
          />
        </div>
        <div className='gallery-card col-span-2 sm:col-span-1 row-span-1 relative'>
          <Image
            className='img-grid'
            src="/coelho.jpg"
            alt="coelho"
            blurDataURL={"/coelho.jpg"}
            placeholder="blur"
            fill
          />
        </div>
        <div className='gallery-card col-span-2 sm:col-span-1 row-span-1 relative'>
          <Image
            className='img-grid'
            src="/alce.jpg"
            alt="alce"
            blurDataURL={"/alce.jpg"}
            placeholder="blur"
            fill
          />
        </div>
      </div>
    </section>
  )
}
