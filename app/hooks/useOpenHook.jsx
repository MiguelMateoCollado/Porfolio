import { useState } from "react";

export const useOpenHook = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(index);
  };
  return { openIndex, setOpenIndex, handleToggle };
};
