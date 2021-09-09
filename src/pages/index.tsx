import type { NextPage } from "next"
import Head from "next/head"
import Header from "@evans/components/Navigation/Header"
import CardWithBackground from "@evans/components/Cards/CardBackground/CardWithBackground"
// import Image from "next/image"

const Home: NextPage = () => (
  <div className="body">
    <Head>
      <title>evans</title>
      <meta name="description" content="website" />
    </Head>

    <Header />
    <CardWithBackground />
  </div>
)

export default Home
