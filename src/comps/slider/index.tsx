"use client";
import styles from "./style.module.css";
import { useState } from "react";

export default function index(project: any) {
  const [, setIsActive] = useState(false);

  const { title1 } = project;
  return (
    <div
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className={styles.project}
    >
      <p className="font-cooper text-[70px] text-[#c4c2c2] hover:text-black">
        {title1}
      </p>
      {/* <motion.div
        variants={anim}
        animate={isActive ? "open" : "closed"}
        className={styles.imgContainer}
      >
        <img src={`/medias/${src}`}></img>
      </motion.div> */}
      {/* <p className="font-ibm text-[80px]">{title2}</p> */}
    </div>
  );
}
