import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../animation";

export default function Index({
  data,
  isActive,
  setSelectedIndicator,
  setIsActive,
}: {
  data: any;
  isActive: boolean;
  setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { name, link, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(link);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link href={link} onClick={() => setIsActive(false)}>
        {name}
      </Link>
    </motion.div>
  );
}
