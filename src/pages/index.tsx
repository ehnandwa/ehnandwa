import type { NextPage } from "next"
import Head from "next/head"
import Header from "@evans/components/Navigation/Header"
import GridDevelopmentToolsandStack from "@evans/components/Projects/Stacks/GridDevelopmentToolsandStack"
// import Image from "next/image"

const Home: NextPage = () => (
  <div className="body">
    <Head>
      <title>evans</title>
      <meta name="description" content="website" />
    </Head>
    <Header />
    <GridDevelopmentToolsandStack/>
  </div>
)

export default Home
