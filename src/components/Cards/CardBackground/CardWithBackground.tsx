import Link from "next/link";

function CardWithBackground() {
  return (
    <div className="pt-16 flex flex-col lg:flex-row items-center">
      <div className="">

          <Link href="/">
            <a className="block text-yellow-400 font-bold tracking-wide flex">
              <span>Lets Connect</span>
            </a>
          </Link>

      </div>
    </div>
  );
}
export default CardWithBackground;
