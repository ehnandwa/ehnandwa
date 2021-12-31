import { NextSeo } from "next-seo";

function ErrorPage() {
  const SEO = {
    title: "unexpected error",
    description: "unexpected error",
    openGraph: {
      title: "unexpected error",
      description: "unexpected error",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />

      <div className="lg:pt-96 pt-24 font-bold text-center lg:text-3xl">
        OOps Unexpected error Something Went Wrong
      </div>
    </>
  );
}
export default ErrorPage;
