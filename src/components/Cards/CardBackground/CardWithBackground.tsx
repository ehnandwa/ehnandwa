import Link from "next/link"
import Image from "next/image"


function CardWithBackground() {
  return (
    <div className="pt-16 lg:pt-36 flex flex-col lg:flex-row items-center">
      <div className="lg:w-80 pt-8 w-80  lg:ml-64 mb-8">
        <div className="bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7">
          <div className="flex items-center justify-center space-x-8">
            <Image
              width={48}
              height={48}
              src="https://assets.pesaledger.com/cms/378bb8497a8410e7372053d65908747e.jpg"
              alt=""
              className="rounded-full"
            />
          </div>

          <h3 className="leading-snug text-gray-400 items-center justify-center ml-16">
            evans nandwa
          </h3>

          <Link href="/">
            <a className="block text-yellow-400 font-bold tracking-wide flex">
              <span>Lets Connect</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default CardWithBackground
