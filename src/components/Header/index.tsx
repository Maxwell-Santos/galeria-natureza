import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export function Header() {
  const [width, setWidth] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setWidth(window.screen.width)
  }, [])

  return (
    <header>

      <nav className="flex justify-between items-center py-2">
        <div className=" w-[150px] h-[80px] relative text-white grid place-items-center sm:-translate-y-3">
          <Image
            src="/logoMaxCompletoClaro.png"
            alt="Logo Maxwell"
            priority
            fill
            className="object-contain"
          />
        </div>

        <div
          className="transition-all"
        >
          {
            width > 690 ? (

              <ul className="flex gap-8 md:gap-16">
                <li className="cursor-pointer">
                  <Link
                    to="about"
                    spy
                    smooth
                    offset={-20}
                    className="hover:text-[#ff7a01] transition-all"
                  >
                    Sobre
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    to="gallery"
                    spy
                    smooth
                    offset={-20}
                    className="hover:text-[#ff7a01] transition-all"
                  >
                    Galeria
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    to="contact"
                    spy
                    smooth
                    offset={-20}
                    className="hover:text-[#ff7a01] transition-all"
                  >
                    Contato
                  </Link>
                </li>
              </ul>

            ) : (
              <>
                {open ? (
                  <div className="w-full h-screen fixed inset-0 bg-[#00111b] backdrop-blur-sm grid place-items-center z-40">
                    <button
                      onClick={() => setOpen(!open)}
                      className="z-50 fixed top-9 right-11"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <ul className="flex flex-col items-center gap-8 md:gap-16">
                      <li className="cursor-pointer">
                        <Link
                          to="about"
                          spy
                          smooth
                          offset={-20}
                          className="hover:text-[#ff7a01] transition-all"
                          onSetActive={() => setOpen(false)}
                        >
                          Sobre
                        </Link>
                      </li>
                      <li className="cursor-pointer">
                        <Link
                          to="galley"
                          spy
                          smooth
                          offset={-20}
                          className="hover:text-[#ff7a01] transition-all"
                          onSetActive={() => setOpen(false)}
                        >
                          Galeria
                        </Link>
                      </li>
                      <li className="cursor-pointer">
                        <Link
                          to="contact"
                          spy
                          smooth
                          offset={-20}
                          className="hover:text-[#ff7a01] transition-all"
                          onSetActive={() => setOpen(false)}
                        >
                          Contato
                        </Link>
                      </li>
                    </ul>
                  </div>

                ) : (

                  <button
                    onClick={() => setOpen(!open)}
                    className="z-50" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                  </button>
                )
                }
              </>

            )
          }
        </div>

      </nav>
    </header>
  )
}
