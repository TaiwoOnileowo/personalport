import { techStack } from "@/lib/data";
import React from "react";
import { BentoGridItem, BentoGrid } from "./ui/BentoGrid";
const TechStack = () => {
  return (
    <div className="py-20" id="stack">
      <h1 className="heading text-white z-50">
        Technical <span className="text-purple">Skills</span>
      </h1>
      <BentoGrid className="w-full mt-12">
        {techStack.map((card, idx) => (
          <BentoGridItem key={card.id} card={card} index={idx} />
        ))}
      </BentoGrid>
    </div>
  );
};
export default TechStack;
