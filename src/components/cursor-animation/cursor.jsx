import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./cursor.css";
import { gsap } from "gsap";
import { useCursor } from "./CursorContext";

export default function Cursor() {
  const NormalCursorSize = 20;
  const ActiveCursorSize = 65;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const [isActive, setIsActive] = useState(false);
  const { resetCursorState } = useCursor();

  const smoothOptions = { damping: 30, stiffness: 250, mass: 0.6 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const buttons = document.querySelectorAll("a, .cursor-effect, button");

    const manageMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouse.x.set(
        clientX - (isActive ? ActiveCursorSize : NormalCursorSize) / 2
      );
      mouse.y.set(
        clientY - (isActive ? ActiveCursorSize : NormalCursorSize) / 2
      );
    };

    window.addEventListener("mousemove", manageMouseMove);

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isActive, mouse.x, mouse.y]);

  useEffect(() => {
    setIsActive(false);
  }, [resetCursorState]);

  useEffect(() => {
    if (isActive) {
      gsap.to(".cursor .active-svg", {
        duration: 0.5,
        width: 70,
        height: 70,
        fill: "none",
        stroke: "#F1F1F1",
        strokeWidth: 2,
        ease: "linear",
      });
      gsap.to(".cursor .normal-svg", {
        duration: 0.5,
        width: 0,
        height: 0,
        fill: "none",
        stroke: "none",
        ease: "linear",
      });
    } else {
      gsap.to(".cursor .active-svg", {
        duration: 0.5,
        width: 0,
        height: 0,
        fill: "none",
        stroke: "none",
        ease: "linear",
      });
      gsap.to(".cursor .normal-svg", {
        duration: 0.5,
        width: 12,
        height: 12,
        fill: "#F1F1F1",
        stroke: "none",
        ease: "linear",
      });
    }
  }, [isActive]);

  return (
    <motion.div
      className={`cursor ${isActive ? "active" : "normal"}`}
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    >
      {isActive ? (
        <svg
          className="active-svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="34.6957"
            cy="34.6957"
            r="33.6957"
            stroke="#F1F1F1"
            strokeWidth="2"
          />
        </svg>
      ) : (
        <svg
          className="normal-svg"
          width="12"
          height="12"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3" cy="3" r="3" fill="#F1F1F1" />
        </svg>
      )}
    </motion.div>
  );
}
