import AnimateText from "./components/AnimateText";
import Statics from "./components/Statics";
import Subrender from "./components/Subrender";
import Image from "next/image";
export default function Home() {
  return (
    <section className="container leading-relaxed text-white mx-auto grid grid-cols-2 max-md:py-14 max-md:gap-y-2 min-h-screen content-center">
      <div className="col-span-1 max-md:col-span-2 content-center overflow-hiddenjustify-center flex items-center">
        {" "}
        <Image
          width={500}
          height={500}
          src={"/imgs/yo.png"}
          alt="main photo"
          className=""
        />
      </div>
      <div className="col-span-1 max-md:text-center content-center max-md:col-span-2 gap-4 flex flex-col justify-center">
        <h1 className="text-7xl max-md:text-4xl max-md:py-3 md:text-4xl antialiased font-bold tracking-tight text-[#FBFAF8]">
          Hi. I am a
        </h1>
        <AnimateText />
        <p className="text-md text-[#d6d6d6] md:leading-relaxed md:text-xl max-md:mb-14 tracking-wide p-3 max-md:p-0 antialiased  max-md:leading-relaxed font-light">
          I have harnessed the immeasurable knowledge of the internet to forge
          my own destiny.{" "}
        </p>
      </div>
    </section>
  );
}