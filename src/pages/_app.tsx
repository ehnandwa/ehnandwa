import "../styles/globals.css"
import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"
import Header from "@evans/components/Navigation/Header"
import SEO from "../../next-seo.config"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
