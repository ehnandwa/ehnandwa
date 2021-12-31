import { NextSeo } from "next-seo";

function About() {
  const SEO = {
    title: "About Evans Nandwa",
    description: "get to know more",
    openGraph: {
      title: "About Evans Nandwa",
      description: "get to know more",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />

      <div className="font-bold pt-24">About Page</div>
    </>
  );
}
export default About;
