"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import Rounded from "@/components/ui/Rounded/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <h2 className=" text-[45px] md:text-6xl lg:text-7xl">
            Let&apos;s work <br />
            together
          </h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor={"#334BD3"} className={styles.button}>
              <a href="mailto:taiwoonileowo17@gmail.com">Get in touch</a>
            </Rounded>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={`${styles.nav} flex max-md:flex-col-reverse  gap-2`}>
          <Rounded>
            <a href="mailto:taiwoonileowo17@gmail.com">Get in touch</a>
          </Rounded>
          <Rounded>
            <p>+234 9138 2810 54</p>
          </Rounded>
        </div>
        <div className={styles.info}>
          {/* <div>
            <span>
              <h3>Version</h3>
              <p>Built by Taiwo Onileowo AKA DAX</p>
            </span>
            <span>
              <p>6:37 PM WAT</p>
            </span>
          </div> */}
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <a href="https://github.com/TaiwoOnileowo" target="_blank">
                  Github
                </a>
              </Magnetic>
            </span>
            <Magnetic>
              <a
                href="https://www.linkedin.com/in/taiwo-onileowo/"
                target="_blank"
              >
                Linkedin
              </a>
            </Magnetic>
            <Magnetic>
              <a href="mailto:taiwoonileowo17@gmail.com" target="_blank">
                Email
              </a>
            </Magnetic>
            <Magnetic>
              <a href=" https://wa.me/2349138281054" target="_blank">
                Whatsapp
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
