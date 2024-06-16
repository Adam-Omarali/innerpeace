import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen">
        <div className="max-w-2xl mx-auto p-4 flex justify-center h-screen items-center flex-col">
          <h1 className="z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Skadoosh
          </h1>
          <p></p>
          <p className="pt-4 text-neutral-400">
            Using philosophy to find inner peace and become a free thinker.
          </p>
        </div>
        <Image
          src="/inner_peace_dark.png"
          alt="Kung fu Panda 2"
          layout="fill"
          objectFit="cover"
          className="absolute"
          style={{ position: "absolute", zIndex: -1 }}
        />
        <BackgroundBeams />
      </div>
      <div className="flex justify-center w-screen h-screen">
        <div className="absolute w-full h-24 bg-black"></div>
        <iframe
          width="90%"
          height="90%"
          src="https://www.youtube.com/embed/mmcWlgP4oB4?autoplay=0&end=171&start=18&controls=0&showinfo=0"
          title="Kung fu Panda 2 pow&#39;s inner peace"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        ></iframe>
      </div>
      <div className="flex justify-center bg-white">
        <iframe
          src="https://innerpeacephilosophy.substack.com/embed"
          width="480"
          height="320"
        ></iframe>
      </div>
    </div>
  );
}
