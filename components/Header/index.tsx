"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from "../ui/Rounded/RoundedButton";
import Magnetic from "../ui/Magnetic";
import { navItems } from "@/lib/data";
import React from "react";
export default function index() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            // setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          {/* <p className={styles.copyright}>©</p> */}
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.dennis}>Taiwo</p>
            <p className={styles.snellenberg}>Onileowo</p>
          </div>
        </div>
        <div className={styles.nav}>
          {navItems.map((data, index) => (
            <Magnetic key={index}>
              <div className={styles.el}>
                <a href={data.link}>{data.name}</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
          ))}
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          backgroundColor="#334BD3"
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
}
