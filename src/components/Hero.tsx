"use client";

import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

const SIZE = 60;

export default function Hero() {
  const t = useTranslations("Hero");

  // mouse position
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 0
  );

  // a reference for our animated card element
  const cardRef = useRef<HTMLDivElement>(null);

  // rotation
  const dampen = 40;
  const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    return -newRotateX / dampen;
  });
  const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    return newRotateY / dampen;
  });

  // sheen
  const diagonalMovement = useTransform<number, number>(
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      const position: number = newRotateX + newRotateY;
      return position;
    }
  );
  const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200]);
  const sheenOpacity = useTransform(
    sheenPosition,
    [-250, 50, 250],
    [0, 0.5, 0]
  );
  const sheenGradient = useMotionTemplate`linear-gradient(
    55deg,
    rgba(45 45 45 / 1),
    rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%,
    rgba(76 78 73 / 1)`;

  // handle mouse move on document
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // animate mouse x and y with smoother transitions
      animate(mouseX, e.clientX, {
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      });
      animate(mouseY, e.clientY, {
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      });
    };

    // Use requestAnimationFrame for smoother updates
    let rafId: number;
    const smoothMouseMove = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => handleMouseMove(e));
    };

    if (typeof window === "undefined") return;
    window.addEventListener("mousemove", smoothMouseMove);

    return () => {
      window.removeEventListener("mousemove", smoothMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Add scroll animation logic
  const { scrollY } = useScroll();
  const y1 = useSpring(useTransform(scrollY, [0, 300], [0, -100]), {
    stiffness: 100,
    damping: 30,
  });
  const y2 = useSpring(useTransform(scrollY, [0, 300], [0, -300]), {
    stiffness: 100,
    damping: 30,
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Only trigger once
    amount: 0.3, // Trigger when 30% of the component is in view
  });

  // Text animation variants
  const textContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textItemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`relative w-full`}
      style={{
        perspective: 1000,
        minHeight: "70dvh",
        height: "100%",
      }}
    >
      <section className="pt-16 text-start h-full flex items-center justify-start">
        <motion.div
          ref={ref}
          className="max-w-2xl px-8 relative z-10"
          style={{ y: y1 }}
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-5xl font-extrabold font-serif"
            variants={textItemVariants}
          >
            {t("title_1")} <br />
            {t("title_2")}{" "}
            <span className="text-primary-50">{t("highlight")}</span>
          </motion.h1>
          <motion.p className="mt-6  text-gray-300" variants={textItemVariants}>
            {t("description")}
          </motion.p>
        </motion.div>

        <motion.div
          style={{
            position: "relative",
            width: "70%",
            height: "100%",
            overflow: "hidden",
            perspective: 1000,
            marginLeft: "-20%",
            zIndex: 0,
            y: y2,
          }}
        >
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transformStyle: "preserve-3d",
              rotateX,
              rotateY,
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundSize: `${SIZE}px ${SIZE}px`,
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255 255 255 / 0.25) 1px, transparent 0)",
                backgroundPosition: "center",
                transform: "translateZ(-500px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
              }}
            >
              <motion.div
                ref={cardRef}
                style={{
                  borderRadius: "20px",
                  backdropFilter: "blur(4px) brightness(120%)",
                  backgroundImage: sheenGradient,
                  width: "70%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 0,
                }}
              >
                <Card />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}

function Card() {
  return (
    <motion.div
      style={{
        width: "100%",
        height: "auto",
        aspectRatio: "16/9",
        borderRadius: "20px",
        padding: "2rem",
        border: "2px solid rgba(200 200 200 / 0.2)",
        backdropFilter: "blur(12px) ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        textShadow: "0 1px 0 #999",
        color: "rgba(255 255 255 / 0.7)",
        position: "relative",
        zIndex: 0,
      }}
    >
      <div className="relative w-full h-full flex flex-col items-end justify-between z-0">
        <Image src="/symbol-primary.svg" alt="Alonear" width={50} height={50} />

        <div className="flex flex-col gap-2 mt-auto text-right">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-primary-100 to-primary-200 [text-shadow:-1px_-1px_2px_rgba(0,0,0,0.7),1px_1px_1px_rgba(255,255,255,0.15)] tracking-wider">
            Sky Williams
          </h2>
          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-primary-500 [text-shadow:-1px_-1px_2px_rgba(0,0,0,0.7),1px_1px_1px_rgba(255,255,255,0.15)] tracking-wider">
            Creator number 0000000
          </p>
        </div>
      </div>
    </motion.div>
  );
}
