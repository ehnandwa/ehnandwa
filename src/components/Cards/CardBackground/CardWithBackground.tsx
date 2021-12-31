import Link from "next/link";
import Image from "next/image";

function CardWithBackground() {
  return (
    <div className="pt-16 flex flex-col lg:flex-row items-center">
      <div className="">
        <div className="">
          <div className="">
            <Image
              width={48}
              height={48}
              src="https://assets.pesaledger.com/cms/378bb8497a8410e7372053d65908747e.jpg"
              alt=""
              className="rounded-full"
            />
          </div>

          <Link href="/">
            <a className="block text-yellow-400 font-bold tracking-wide flex">
              <span>Lets Connect</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CardWithBackground;
