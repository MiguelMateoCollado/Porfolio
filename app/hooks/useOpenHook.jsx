import {useState} from "react";

export const useOpenHook = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    console.log(index, "Este el indice actual", openIndex)
    // Si el tab que se clickeó está abierto, se cierra (se establece en null).
    // Si no, se abre (se establece el índice de ese tab).
    setOpenIndex(index);
  };
  return { openIndex, setOpenIndex, handleToggle };
};
