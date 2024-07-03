import { Services } from "../components/Services";

const page = () => {
  return (
    <section className="container leading-relaxed text-white mx-auto grid grid-cols-2 place-content-center h-[90vh] content-center">
      <div className=" flex flex-col gap-4">
        <h1 className="text-6xl ">
          My Services<span className="text-red-500">.</span>
        </h1>
        <p className="text-base w-2/3 text-white/50 tracking-wide leading-relaxed text-pretty">
          Designing and developing e-commerce websites and computer systems
          specifically customized to meet your individual business requirements
          and objectives.
        </p>
      </div>
      <div className="h-[30vh] flex justify-center items-center">
        <Services />
      </div>
    </section>
  );
};

export default page;
