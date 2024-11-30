import { useOpenHook } from "../hooks/useOpenHook";
import { AcordionTab } from "./AcordionTab";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Credentials = () => {
  const { openIndex, setOpenIndex, handleToggle } = useOpenHook();
  let experience = [
    {
      id: "item-1",
      experience: "Henry Bootcamp ",
      time: "2022 - 2023",
      certificate:
        "https://certificates.soyhenry.com/new-cert?id=7e8069fc217c06d4c6af890b5ee944cb8f6c011423c618b2477e51001a22dded",
      description: `✔️ Completado con éxito el Programa de Desarrollo Full Stack Intensivo 
     de 5 meses entre 8 - 10 horas diarias.
✔️ Inverti +1,000 horas estudiando tecnologías clave, incluyendo: 
    🔵 JavaScript, React, Node.js, Sequelize,Express, Sql, Redux, CSS
✔️ Participación en proyectos individuales y de grupo para aplicar las competencias en
      situaciones prácticas.

Aplicaciones desarrolladas que:
  🔸 Consumir Datos de una API de videojuegos (rawg.io).
  
  🔸 Cree un CRUD para registrar, buscar, filtrar y mostrar información de videojuegos.
  
  🔸 Visualized data and created an administrative panel for product integration.
  
  🔸 Colabe con compañeros en un proyecto de grupo junto a 5 personas para crear una  
       plataforma de un e-commerce, mejorando las habilidades de trabajo en equipo.
  
  🔸 Implemente metodo de pago Stripe para e-commerce
  
  🔸 Desarrollo de aplicaciones web de completas, mejorando la capacidad 
      de resolución de problemas.
  🔸 Desarrolle modelos de base de datos en Mysql y Postgresql.
  `,
    },
    {
      id: "item-2",
      experience: "React University",
      time: "2022",
      certificate:
        "https://www.udemy.com/certificate/UC-f479516b-458c-4ada-9940-a179aee96dc2/",
      description: `He realizado un curso completo de React basado en la metodología LEAP, adquiriendo conocimientos avanzados en:
  🔶 API de React y su API de Contexto: Dominio de la API de React y su API de Contexto
       para una gestión eficiente del estado global.
  🔶 Hooks y Componentes Funcionales: Creación de componentes funcionales modernos
       utilizando Hooks.
  🔶 Desarrollo de Componentes de Alta Calidad: Diseño y desarrollo de componentes 
        reutilizables y mantenibles.
  🔶 Gestión de Formularios: Manejo de inputs controlados y no controlados en
       formularios React.
  🔶 Peticiones HTTP: Integración de peticiones HTTP y gestión de datos en
       componentes React.
  🔶 Animaciones y Transiciones: Implementación de animaciones y transiciones suaves.
  🔶 Componentes con estilo y CSS avanzado: Gestión avanzada de estilos con componentes.
  🔶 React Router: Configuración de sistemas de enrutamiento para aplicaciones.
  🔶 State Management with Redux: Uso de Redux para la gestión de estados complejos.
  🔶 Pruebas: Realización de pruebas unitarias con Jest y Enzyme.
  🔶 Adicionalmente, he recibido formación en animaciones y transiciones, styled  
        components, React Router y Redux como cursos complementarios.`,
    },
  ];
  return (
    <Accordion type="single" collapsable>
      {experience.map((exp, index) => (
        <AccordionItem key={index} value={exp.id}>
          <AccordionTrigger className="text-lg max-md:text-[0.9rem] flex-wrap font-light tracking-wide flex items-center gap-1  w-fit hover:text-red-400 transition-all duration-150 cursor-pointer text-[#D24545]">
            {exp.experience} - {exp.time}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 whitespace-pre-wrap tracking-wide truncate text-pretty transition-all duration-500 ease-in-out leading-relaxed">
            {exp.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Credentials;
