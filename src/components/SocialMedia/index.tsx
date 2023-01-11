import Image from "next/image";

export function SocialMedia() {

  return (
    <div className="social-media bg-[#ff7a01] rounded-sm">
      <ul className="p-3 flex sm:flex-col gap-5 max-[450px]:px-4 max-[450px]:p-2">
        <li>
          <a href="https://github.com/Maxwell-Santos"
            target="_blank"
            rel="noreferrer"
            className="relative"
          >
            <Image
              src="/icons/github.svg"
              alt="ícone do github"
              width={10}
              height={10}
            />
          </a>
        </li>

        <li>
          <a href="https://api.whatsapp.com/send?phone=5511977761749&text=Me%20interessei%20pelo%20seu%20trabalho%2C%20vamos%20conversar%20%3F"
            rel="noreferrer"
            target="_blank"
            className="relative"
          >
            <Image
              src="/icons/whatsapp.svg"
              alt="ícone do whatsapp"
              width={30}
              height={30}

            />
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/this_maxwell/"
            rel="noreferrer"
            target="_blank"
            className="relative"
          >
            <Image
              src="/icons/insta.svg"
              alt="ícone do instagram"
              width={30}
              height={30}
            />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/maxwell-santos-2ab722210"
            rel="noreferrer"
            target="_blank"
            className="relative"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="ícone do linkedin"
              width={10}
              height={10}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}
