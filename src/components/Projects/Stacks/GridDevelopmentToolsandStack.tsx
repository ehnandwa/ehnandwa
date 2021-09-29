import Image from "next/image"
import Link from "next/link"

function GridDevelopmentToolsandStack() {
  return (
    <section className="flex justify-center pt-56 lg:pt-44  pb-28 overflow-hidden">
      <section className="dev-stack pb-5 pt-1">
        <div className="items-center mx-auto ml-24 lg:ml-96">
          <Image
            width={48}
            height={48}
            src="https://assets.pesaledger.com/cms/378bb8497a8410e7372053d65908747e.jpg"
            alt=""
            className="rounded-full"
          />
          <Link href="/">
            <a className="block  -ml-4 lg:-ml-8 font-bold tracking-wide flex">
              <span>Lets Connect</span>
            </a>
          </Link>
        </div>
      </section>
    </section>
  )
}
export default GridDevelopmentToolsandStack
