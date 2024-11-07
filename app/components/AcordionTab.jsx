import React from "react";
import {
    Accordion,
  } from "@/components/ui/accordion"
export const AcordionTab = ({children}) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {children}
    </Accordion>
  );
};
