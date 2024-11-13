import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../animation";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";

export default function Index({
  setIsActive,
}: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={cn("text-neutral-200", styles.header)}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                setIsActive={setIsActive}
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.link}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
