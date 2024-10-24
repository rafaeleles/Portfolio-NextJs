"use client";
import Image from "next/image";
import { BackgroundBeams } from "./components/ui/background-beams";
import { BackgroundGradient } from "./components/ui/background-gradient";
import euImg from "../assets/eu.png";
import Navbar from "./components/navbar";
import { TextHoverEffect } from "./components/ui/text-hover-effect";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import { style } from "framer-motion/client";

const words = [
  {
    text: "Innovating",
  },
  {
    text: "with",
  },
  {
    text: "every",
  },
  {
    text: "line.",
    style: {
      color: "transparent",
      backgroundClip: "text",
      WebkitBackgroundClip: "text", 
    },
    className: "bg-gradient-to-b from-neutral-200 to-neutral-600 text-transparent bg-clip-text",
  },
];

export default function Home() {
  return (
    <>
      <div className="h-full w-full rounded-md relative flex flex-col items-center justify-center antialiased z-50 bg-transparent ">
        <Navbar className="top-5" />
        <div style={{ marginTop: "9.5rem" }}>
        <h1
            className="relative z-10 text-lg md:text-7xl 
                bg-clip-text text-transparent bg-gradient-to-b 
                from-neutral-200 to-neutral-600  
                text-center font-sans font-bold"
          >
            I'm Rafael Leles
          </h1>
          <TypewriterEffectSmooth words={words} />

        </div>
      </div>
      <BackgroundBeams />
    </>
  );
}
