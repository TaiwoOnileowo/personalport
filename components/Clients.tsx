import React from "react";
import { InfiniteMovingCards } from "./ui/InifiniteMovingCards";
import { companies, testimonials } from "@/lib/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      {/* <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1> */}
      <h1 className="heading">
        Companies I've <span className="text-purple">worked with</span>
      </h1>
      <div className="flex flex-col items-center justify-center lg:mt-10">
        {/* <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        /> */}
        <div className="flex  flex-wrap items-center justify-center gap-4 md:gap-16 lg:mt-10">
          {companies.map(({ id, img, name, link }) => (
            <Link
              href={link}
              key={id}
              className="flex md:max-w-60 max-w-32 gap-2 "
              title={name}
            >
              <div>
                <img
                  src={img}
                  alt={name}
                  className={cn("md:w-32 w-24", id === 4 ? "md:w-24 w-20" : "")}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
