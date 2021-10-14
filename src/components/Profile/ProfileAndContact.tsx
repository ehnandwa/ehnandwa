import Image from "next/image"
import Link from "next/link"

function ProfileAndContact() {
  return (
    <section className=" lg:justify-end justify-center lg:pr-20 flex pt-16  lg:pt-24">
      <div className="">
        <Image
          width={100}
          height={100}
          src="https://assets.pesaledger.com/cms/378bb8497a8410e7372053d65908747e.jpg"
          alt=""
          className="rounded-full"
        />
        <Link href="/">
          <a className="block font-bold tracking-wide flex">
            <span>Lets Connect</span>
          </a>
        </Link>
      </div>
    </section>
  )
}
export default  ProfileAndContact
