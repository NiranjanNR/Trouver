import Head from "next/head";
import LandingPage from "../components/LandingPage/LandingPage";
import { useRef } from "react";

export default function Home() {

  const myRef = useRef()

  const executeScroll = () => myRef.current?.scrollIntoView({behavior: 'smooth'}) 

  return (
    <div className="flex flex-col items-center justify-center h-fit w-fit bg-purple-200 scroll-smooth scrollbar-hide">
      <Head>
        <title>Trouver</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex h-screen w-screen"
        style={{
          backgroundImage: `url('Head.gif')`,
          backgroundSize: "cover",
        }}
      >
        <div className="m-auto">
          <div className="text-6xl font-bold text-white mb-4">
            Insert logo here
          </div>
          <div className="text-6xl font-bold text-white mb-4 text-center">
            Trouver
          </div>
          <div className="text-center">
            <button className="p-5 bg-white rounded-full text-black " onClick={() => executeScroll()}>
              Check it out
            </button>
          </div>
        </div>
      </div>

<div ref={myRef}>
  <LandingPage  />
</div>
      
    </div>
  );
}
