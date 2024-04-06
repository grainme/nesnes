"use client";
import styles from "./style.module.css";
import { useState } from "react";

export default function index({ project }: any) {
  const [, setIsActive] = useState(false);

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
        {project.title1}
      </p>
    </div>
  );
}
