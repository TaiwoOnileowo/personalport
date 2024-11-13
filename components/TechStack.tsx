import { techStack } from "@/lib/data";
import React from "react";
import { BentoGridItem, BentoGrid } from "./ui/BentoGrid";
const TechStack = () => {
  return (
    <div className="py-20" id="tech-stack">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>
      <BentoGrid className="w-full mt-12">
        {techStack.map((card) => (
          <BentoGridItem key={card.id} card={card} />
        ))}
      </BentoGrid>
    </div>
  );
};
export default TechStack;
