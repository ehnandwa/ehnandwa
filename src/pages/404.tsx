import { NextSeo } from "next-seo"

function Page404() {
  const SEO = {
    title: "Page Not Found",
    description: "page not found",
    openGraph: {
      title: "Page Not Found",
      description: "page not found",
    },
  }
  return (
    <>
      <NextSeo {...SEO} />

      <div className="lg:pt-96 pt-24 font-bold text-center lg:text-3xl">Page Not Found</div>
    </>
  )
}
export default Page404
