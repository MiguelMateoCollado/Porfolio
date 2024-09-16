import Statics from "../components/Statics";
import Subrender from "../components/Subrender";

export default function Home({ children }) {
  let features = [
    { position: "AÑOS DE EXPERIENCIA", stats: "2+" },
    { position: "FINISHED PROJECTS", stats: "3+" },
  ];

  return (
    <section className="container leading-relaxed max-md:py-20 text-white mx-auto grid grid-cols-2 place-content-center min-h-screen content-center">
      <div className="col-span-1 max-md:col-span-2  flex flex-col p-10 max-md:p-0 gap-5">
        <h1 className="text-7xl max-md:text-5xl leading-tight">
          <span className="text-[#FF0000]">Crear</span> conlleva esfuerzo y
          dedicación.
        </h1>
        <p className="font-light text-[#d6d6d6] max-md:text-sm">
          Soy Miguel Angel Mateo, me considero full stack developer por mis
          capacidades de extrapolar mis conocimientos tengo 2 años de
          experiencia e trabajado para la compañia Prixet Tecnology donde
          participe en e desarrollo de aplicaciones y landing pages. Tengo un
          objetivo y es comprender tanto la programación que parezca juego de
          niños. Me gustan los retos y desde que empeze a programar no e parado
          de ser retado a mejorar cada dia.
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
