import Link from "next/link"

function CardWithBackground() {
  return (
    <div className="pt-16 lg:pt-36 flex flex-col lg:flex-row items-center">
      <div className="lg:w-80 pt-8 w-80  lg:ml-64 mb-8">
        <div className="bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7">
          <div className="flex items-center justify-center space-x-8">
            <img
              src="https://images.unsplash.com/photo-1624669240815-815a23372f37?"
              alt="baby with headphones"
              className="w-36 h-36 rounded-full object-cover"
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
