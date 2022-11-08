import Head from "next/head";
import LandingPage from "../components/LandingPage/LandingPage";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-purple-200">
      <Head>
        <title>Trouver</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage />
    </div>
    
  )
}
