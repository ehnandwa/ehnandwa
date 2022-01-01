import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Navigation from "@evans/components/Navigation/Navigation";
import SEO from "../../next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
