"use client";
import styles from "./page.module.scss";
import { useRef } from "react";
import gsap from "gsap";
import {
  floating1,
  floating2,
  floating3,
  floating4,
  floating5,
  floating6,
  floating7,
  floating8,
} from "./data";

export default function Floating_Images() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId: number | null = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.main}
    >
      <div ref={plane1} className={styles.plane}>
        <img src={floating1} alt="img" width={300} />
        <img src={floating2} alt="img" width={300} />
        <img src={floating7} alt="img" width={225} />
      </div>
      <div ref={plane2} className={styles.plane}>
        <img src={floating4} alt="img" width={250} />
        <img src={floating6} alt="img" width={200} />
        <img src={floating8} alt="img" width={225} />
      </div>
      <div ref={plane3} className={styles.plane}>
        <img src={floating3} alt="img" width={150} />
        <img src={floating5} alt="img" width={200} />
      </div>
      <div className={styles.title}>
        <h1>
          نتا ماشي فمدينة ديلك وباغي تمشي{" "}
          <span className="text-[#e5af32]">قهوة</span> بش تخدم
        </h1>
        <p>
          نصنص هو تطبيق يهدف إلى توفير قائمة بالمقاهي المناسبة للعمل على
          اللابتوب في المغرب, يتيح للمستخدمين العثور على المقاهي التي توفر بيئة
          مريحة ومناسبة للعمل والدراسة .
        </p>
      </div>
    </main>
  );
}
