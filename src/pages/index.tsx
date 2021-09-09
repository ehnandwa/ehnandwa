import type { NextPage } from "next"
import Head from "next/head"
import Header from "@evans/components/Navigation/Header"
// import Image from "next/image"

const Home: NextPage = () => (
  <div className="body">
    <Head>
      <title>evans</title>
      <meta name="description" content="website" />
    </Head>

    <Header />
  </div>
)

export default Home
