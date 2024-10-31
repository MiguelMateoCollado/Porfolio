import Statics from "../components/Statics";
import Subrender from "../components/Subrender";

export default function Home({ children }) {
  let features = [
    { position: "AÑOS DE EXPERIENCIA", stats: "2+" },
    { position: "PROYECTS COMPLETADOS", stats: "3+" },
  ];

  return (
    <section className="container leading-relaxed max-md:py-20 text-[#e0e2db] mx-auto grid grid-cols-2 place-content-center min-h-screen content-center max-md:content-start">
      <div className="col-span-1 max-md:col-span-2  flex flex-col p-10 max-md:p-0 gap-3">
        <h1 className="text-7xl max-sm:text-3xl max-md:text-4xl leading-relaxed">
          <span className="text-[crimson]">Crear</span> conlleva esfuerzo y
          dedicación.
        </h1>
        <p className="font-light text-[#d6d6d6] max-md:text-lg">
          Soy Miguel Angel Mateo, desarrollador full stack con 2 años de
          experiencia en aplicaciones y landing pages en Prixet Technology.
        </p>
        <div className="flex gap-4">
          {features.map((stat, index) => (
            <Statics key={index} stats={stat.stats} position={stat.position} />
          ))}
        </div>
      </div>
      <div className="col-span-1 max-md:col-span-2 items-center max-md:py-5 max-md:p-0 flex flex-col p-10 gap-5">
        <Subrender />
      </div>
    </section>
  );
}
