import Image from "next/image"
import Link from "next/link"

function GridDevelopmentToolsandStack() {
  return(
   <section className="flex justify-center pt-56 lg:pt-44 animate-ping pb-28 overflow-hidden">
     <section className="dev-stack pb-5">
       <h2 className=" lg:text-5xl font-bold lg:font-extrabold">
         Development stack and tools
       </h2>
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
       <div className="grid grid-cols-2 gap-y-3.5 md:grid-cols-8">
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
           <div className="datadog">
             <div className="justify-center  animate-spin_slow">
               <h6 className="font-bold">VsCode</h6>
             </div>
           </div>
           <div className="datadog">
             <div className="justify-center  animate-spin_slow">
               <h6 className="font-bold">Webstorm</h6>
             </div>
           </div>
           <div className="datadog">
             <div className="justify-center  animate-spin_slow">
               <h6 className="font-bold">Kubernetes</h6>
             </div>
           </div>
           <div className="datadog">
             <div className="justify-center  animate-spin_slow">
               <h6 className="font-bold">Docker</h6>
             </div>
           </div>
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
               <h6 className="font-bold">Ionic</h6>
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
               <h6 className="font-bold">Tailwind</h6>
             </div>
           </div>

       </div>
     </section>
   </section>
  )

}
export default GridDevelopmentToolsandStack