import Link from "next/link";

function ProfileAndContact() {
  return (
    <section className=" lg:justify-end justify-center lg:pr-20 flex pt-16  lg:pt-24">
      <div className="">
        <Link href="/">
          <a className="block font-bold tracking-wide flex">
            <span>Lets Connect</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
export default ProfileAndContact;
