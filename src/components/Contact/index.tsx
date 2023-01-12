import { useState } from "react"

export function Contact() {

  const [fName, setFName] = useState(false)
  const [fEmail, setFEmail] = useState(false)

  //Funções animação label
  const checkName = (input: string) => {
    input ? setFName(true) : setFName(false)
  }
  const checkEmail = (input: string) => {
    input ? setFEmail(true) : setFEmail(false)
  }

  return (
    <section id="contact" className="my-14">
      <h2>Contato</h2>
      <div className="mx-auto max-w-xl mt-10">
        <form
          className="flex flex-col gap-5 w-full"
        >
          <div className="input">

            <div className="absolute top-1/2 -translate-y-1/2 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>

            <label
              htmlFor="name"
              className={`${fName ?
                "-top-4"
                : "top-1/2 -translate-y-1/2"} absolute left-8 bg-[#002733] p-1 px-3 transition-all`}
            >
              Nome
            </label>

            <input
              type="text"
              id="name"
              name="nome"
              onClick={() => setFName(true)}
              onBlur={(e) => checkName(e.target.value)}
              spellCheck={false}
            />
          </div>

          <div className="input">

            <div className="absolute top-1/2 -translate-y-1/2 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
              </svg>
            </div>

            <label
              htmlFor="email"
              className={`${fEmail ?
                "-top-4"
                : "top-1/2 -translate-y-1/2"} left-8 absolute bg-[#002733] p-1 px-3 transition-all`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onClick={() => setFEmail(true)}
              onBlur={(e) => checkEmail(e.target.value)}
              required
            />

          </div>

          <textarea
            name="campo_de_texto"
            id="textarea"
            cols={30}
            rows={6}
            placeholder="Me conte mais..."
            required
          ></textarea>

          <button
            className="p-3 px-10 bg-[#00111b] hover:bg-[#ff7a01] transition-all w-full sm:w-fit ml-auto text-white rounded-sm"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
