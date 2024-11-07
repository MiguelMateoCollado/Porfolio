import AnimateText from "./components/AnimateText";
import Statics from "./components/Statics";
import Subrender from "./components/Subrender";
import Image from "next/image";
export default function Home() {
  return (
    <section className="container min-h-screen leading-relaxed text-white mx-auto grid grid-cols-2 max-md:py-14 max-md:gap-y-2 max-lg:py-12  content-center ">
      <div className="col-span-1 max-lg:col-span-2 content-center overflow-hidden justify-center flex items-center">
        <Image
          width={375}
          maxWidth={500}
          height={500}
          src={"/imgs/yo.png"}
          alt="main photo"
          className=" my-4"
        />
      </div>
      <div className="col-span-1 max-lg:text-center content-center max-lg:col-span-2 gap-4 gap-y-2 leading-relaxed flex flex-col justify-center">
        <h1 className=" max-lg:text-3xl max-lg:py-2 md:text-4xl antialiased font-bold tracking-tight text-balance text-[#FBFAF8]">
          Hola. Mi nombre es  <br /><span className="text-main-color max-md:text-4xl text-5xl ">Miguel Angel Mateo</span>
        </h1>
        <AnimateText />
        <p className="text-lg  text-[#d6d6d6] md:leading-relaxed md:text-xl text-balance max-md:mb-14 tracking-wide py-3 max-md:p-0 antialiased  max-md:leading-relaxed font-light">
          Me he nutrido del vasto e inagotable conocimiento de Internet para
          forjar mi propio destino.
        </p>
      </div>
    </section>
  );
}
