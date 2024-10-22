"use client";
import Image from "next/image";
import { BackgroundBeams } from "./components/ui/background-beams";
import { BackgroundGradient } from "./components/ui/background-gradient";
import euImg from "../assets/eu.png";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <Navbar className="top-5" />
        <div className="max-w-3xl mx-auto mt-24 mb-10 p-4">
          <h1 className="relative z-10 text-lg md:text-7xl 
                          bg-clip-text text-transparent bg-gradient-to-b 
                          from-neutral-200 to-neutral-600  
                          text-center font-sans font-bold">
            Ich bin Rafael Leles
          </h1>
        </div>
      </div>

      <BackgroundBeams />
    </>
  );
}
