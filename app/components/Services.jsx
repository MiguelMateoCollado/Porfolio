"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Icon } from "@iconify/react";
export const Services = () => {
  let [activeItem, setActiveItem] = useState(false);
  let services = [
    {
      icon: "material-symbols:screenshot-monitor-outline",
      title: "Development with React & Express",
      description: `Designing and developing e-commerce websites and computer systems specifically customized to meet your individual business requirements and objectives.`,
    },
    {
      icon: "mdi:wordpress",
      title: "Creation of pages with Worpdress",
      description: `I will create your landing page or ecommerce to suit your business needs for optimal performance and results.`,
    },
    
  ];
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-md flex-row flex"
    >
      <CarouselContent>
        {services.map((value, index) => {
          return (
            <CarouselItem
              key={index}
              onMouseEnter={() => setActiveItem(true)}
              onMouseLeave={() => setActiveItem(false)}
              className="group/item hover:cursor-pointer "
            >
              <div className="p-1">
                <Card className="border-none flex items-center rounded-lg bg-transparent">
                  <CardContent className="aspect-square rounded-lg flex flex-wrap items-center   bg-red-500  text-white  ">
                    <div className="flex flex-col w-full gap-4">
                      <Icon icon={value.icon} className="text-white text-4xl" />
                      <h1 className="text-xl font-semibold">{value.title}</h1>
                      <p className="text-lg leading-relaxed font-light">
                        {value.description}
                      </p>
                    </div>
                    {activeItem === false ? (
                      <Icon
                        icon="material-symbols:arrow-outward-rounded"
                        className="text-3xl"
                      />
                    ) : (
                      <Icon
                        icon="material-symbols:arrow-forward-rounded"
                        className="text-3xl text-neutral-200"
                      />
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="bg-red-500 text-white border-none" />
      <CarouselNext className="bg-red-500 text-white border-none" />
    </Carousel>
  );
};
