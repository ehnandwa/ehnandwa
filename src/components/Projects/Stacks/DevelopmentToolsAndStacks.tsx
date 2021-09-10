import Image from "next/image"
import Link from "next/link"

function DevelopmentToolsAndStacks() {
  return (
    <section className="justify-evenly ">
      <div className="">
        <section className="mb-20">
          <div className="flex pt-28 items-center justify-center">
            <div className="dev-stack">
              <h2 className=" lg:text-5xl font-bold lg:font-extrabold">
                Development stack and tools
              </h2>
              <div className="items-center mx-auto ml-28 lg:ml-96">
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

              <div className=" bottom-4  left-0 right-0 space-y-1">
                <div className="animate-scrolll">
                  <div className="strapi">
                    <div className="justify-center  animate-spin_slow">
                      <h6 className="font-bold">Strapi</h6>
                    </div>
                  </div>
                  <div className="git">
                    <div className="justify-center  animate-spin_slow">
                      <h6 className="font-bold">Git</h6>
                    </div>
                  </div>
                  <div className="posthog">
                    <div className="justify-center  animate-spin_slow">
                      <h6 className="font-bold">Posthog</h6>
                    </div>
                  </div>
                  <div className="datadog">
                    <div className="justify-center  animate-spin_slow">
                      <h6 className="font-bold">Datadog</h6>
                    </div>
                  </div>
                </div>
                <div className="anime-scroll">
                  <div className="typescript">
                    <div className="justify-center animate-wiggle  ">
                      <h6 className="font-bold">Typescript</h6>
                    </div>
                  </div>
                  <div className="postgres">
                    <div className="justify-center animate-wiggle  ">
                      <h6 className="font-bold">Postgres</h6>
                    </div>
                  </div>
                  <div className="prometheus">
                    <div className="justify-center animate-wiggle  ">
                      <h6 className="font-bold">Prometheus</h6>
                    </div>
                  </div>
                  <div className="pivotal">
                    <div className="justify-center animate-wiggle  ">
                      <h6 className="font-bold">Pivotal</h6>
                    </div>
                  </div>
                  <div className="storybook">
                    <div className="justify-center animate-wiggle  ">
                      <h6 className="font-bold">Storybook</h6>
                    </div>
                  </div>
                  <div className="chromatic">
                    <div className="justify-center animate-wiggle  ">
                      <h6 className="font-bold">Chromatic</h6>
                    </div>
                  </div>
                  <div className="gitlab">
                    <div className="justify-center animate-wiggle  ">
                      <h6 className="font-bold">Gitlab</h6>
                    </div>
                  </div>
                  <div className="tailwind">
                    <div className="justify-center animate-wiggle  ">
                      <h6 className="font-bold">Tailwindcss</h6>
                    </div>
                  </div>
                  <div className="laravel">
                    <div className="justify-center animate-wiggle  ">
                      <h6 className="font-bold">Laravel</h6>
                    </div>
                  </div>
                </div>
                <div className="animatescroll">
                  <div className="docker">
                    <div className="justify-center text-sm text-gray-1 animate-ping">
                      <h6 className="font-bold">Docker</h6>
                    </div>
                  </div>
                  <div className="nextjs">
                    <div className="justify-center text-sm text-gray-1 animate-ping">
                      <h6 className="font-bold">NextJs</h6>
                    </div>
                  </div>
                  <div className="vercel">
                    <div className="justify-center text-sm text-gray-1 animate-ping">
                      <h6 className="font-bold">Vercel</h6>
                    </div>
                  </div>
                  <div className="s3">
                    <div className="justify-center text-gray-1 animate-ping">
                      <h6 className="font-bold">Aws-s3</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
export default DevelopmentToolsAndStacks
