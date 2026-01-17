import React from "react";
import { InfiniteMovingCards } from "./ui/InifiniteMovingCards";
import { companies, testimonials } from "@/lib/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">people</span>
      </h1>

      <div className="flex flex-col items-center justify-center mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Clients;
