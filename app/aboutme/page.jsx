import Statics from "../components/Statics";
import Subrender from "../components/Subrender";

export default function Home({ children }) {
  let features = [
    { position: `AÑOS DE \nEXPERIENCIA`    , stats: "2+" },
    { position: "PROYECTOS COMPLETADOS", stats: "3+" },
  ];

  return (
    <section className="container leading-relaxed max-lg:py-20 text-[#e0e2db] mx-auto grid grid-cols-2 place-content-center min-h-screen content-start max-md:content-start">
      <div className="col-span-1 max-lg:col-span-2 items flex flex-col p-10 pb-0 max-md:p-0 gap-3">
        <h1 className="max-sm:text-3xl max-lg:text-5xl text-wrap font-bold  leading-relaxed">
          <span className="text-[crimson]">Crear</span> conlleva esfuerzo y
          dedicación.
        </h1>
        <p className="font-light text-[#d6d6d6] max-md:text-lg text-xl text-balance">
          Soy Miguel Angel Mateo, desarrollador full stack con 2 años de
          experiencia en aplicaciones y landing pages en Prixet Technology.
        </p>
        <div className="flex gap-4">
          {features.map((stat, index) => (
            <Statics key={index} stats={stat.stats} position={stat.position} />
          ))}
        </div>
      </div>
      <div className="col-span-1 max-lg:col-span-2 items-center  max-md:py-5 max-md:p-0 flex flex-col p-10 gap-5">
        <Subrender />
      </div>
    </section>
  );
}
