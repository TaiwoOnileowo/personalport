"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";

import animationData from "@/lib/data/confetti.json";
import MagicButton from "./MagicButton";
import Image from "next/image";
import { GridGlobe } from "../GridGlobe";
import { techStack } from "@/lib/data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1  lg:grid-cols-3  gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  card,
}: {
  className?: string;
  card: (typeof techStack)[0];
}) => {
  const leftLists = card.stacks.slice(0, 3);
  const rightLists = card.stacks.slice(3, 6);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={` h-full`}>
        <div
          className={cn(
            "group-hover/bento:translate-x-2 justify-center transition duration-200 relative  h-[200px] flex flex-col px-4"
          )}
        >
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {card.title}
          </div>

          <div className="flex gap-1 lg:gap-4 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3  md:gap-3 lg:gap-6">
              {leftLists.map((item, i) => (
                <span
                  key={i}
                  className="  lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 mt-6  md:gap-3 lg:gap-6">
              {rightLists.map((item, i) => (
                <span
                  key={i}
                  className=" lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// {id === 6 && (
//   <BackgroundGradientAnimation>
//     {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
//   </BackgroundGradientAnimation>
// )}
// const defaultOptions = {
//   loop: copied,
//   autoplay: copied,
//   animationData: animationData,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };
{
  /* <div className="mt-5 relative">
<div
  className={`absolute -bottom-5 right-0 ${
    copied ? "block" : "block"
  }`}
>
  <Lottie options={defaultOptions} height={200} width={400} />
</div>

<MagicButton
  title={copied ? "Email is Copied!" : "Copy my email address"}
  icon={<IoCopyOutline />}
  position="left"
  handleClick={handleCopy}
  otherClasses="!bg-[#161A31]"
/>
</div> */
}
