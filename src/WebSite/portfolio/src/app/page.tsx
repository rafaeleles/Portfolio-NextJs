import Image from "next/image";
import { BackgroundBeams } from "./components/background-beams";
import { BackgroundGradient } from "./components/background-gradient";
import euImg from '../assets/eu.png'

export default function Home() {
  return (
   <>
   <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto mt-24 mb-10 p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
          style={{ backgroundImage: 'linear-gradient(to bottom, #4FA3FF, #2D3E9A)' }}
          >
          Ich bin Rafael Leles
        </h1>
        <Image
          src={euImg}
          alt="rafaeleles"
          height={208}
          width={208}
        />
      </div>
      
    </div>

      <BackgroundBeams />
   </>
  );
}
