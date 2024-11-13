"use client";
import React from "react";
import { HeroParallax } from "./ui/Parallax";
import { products } from "@/lib/data";

const MyWorks = () => {
  return <HeroParallax products={products} />;
};
export default MyWorks;
