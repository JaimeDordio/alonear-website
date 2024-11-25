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
import { useEffect, useRef, useState } from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

const SIZE = 20;

export default function Hero() {
  const t = useTranslations("Hero");

  // Add device orientation state and detection
  const [isMobile, setIsMobile] = useState(false);

  // Create direct rotation motion values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // a reference for our animated card element
  const cardRef = useRef<HTMLDivElement>(null);

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
    [0, isMobile ? 0.7 : 0.5, 0]
  );
  const sheenGradient = useMotionTemplate`linear-gradient(
    55deg,
    rgba(45 45 45 / 1),
    rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%,
    rgba(76 78 73 / 1)`;

  useEffect(() => {
    const checkMobile = () => {
      // setIsMobile(window.innerWidth <= 2000); // Adjust breakpoint as needed
      setIsMobile(true);
    };

    if (typeof window !== "undefined") {
      checkMobile();
      window.addEventListener("resize", checkMobile);
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Add automatic card movement animation for mobile
  useEffect(() => {
    if (!isMobile) return;

    const startTime = performance.now();
    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const speed = 0.0005;

      // Different patterns you could try:

      // 1. Figure-8 pattern:
      const newRotateX = Math.sin(elapsed * speed) * 15;
      const newRotateY = Math.sin(elapsed * speed) * 15;

      // 2. Elliptical pattern:
      // const newRotateX = Math.sin(elapsed * speed) * 10;
      // const newRotateY = Math.cos(elapsed * speed) * 15;

      // 3. Current circular pattern:
      //   const newRotateX = Math.sin(elapsed * speed) * 15;
      //   const newRotateY = Math.cos(elapsed * speed) * 15;

      rotateX.set(newRotateX);
      rotateY.set(newRotateY);
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Desktop mouse handling
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotX = (e.clientY - centerY) / 20;
      const rotY = (e.clientX - centerX) / 20;

      animate(rotateX, -rotX, {
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      });
      animate(rotateY, rotY, {
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

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
        staggerChildren: 0.8,
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

  const ctaItemVariants = {
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

  // Add automatic sheen animation for mobile
  useEffect(() => {
    if (!isMobile) return;

    // Create an infinite animation loop for the sheen effect
    const sheenAnimation = animate(
      sheenPosition,
      [-100, 200], // Move sheen from left to right
      {
        duration: 3, // Animation duration in seconds
        ease: "easeInOut",
        repeat: Infinity, // Repeat infinitely
        repeatType: "reverse", // Reverse the animation each time
      }
    );

    return () => {
      sheenAnimation.stop(); // Cleanup animation on unmount
    };
  }, [isMobile, sheenPosition]);

  return (
    <motion.div
      className="relative w-full h-full max-w-7xl mx-auto flex flex-col justify-center"
      style={{
        perspective: 1000,
        minHeight: "70dvh",
      }}
    >
      <section className="pt-16 text-start h-full flex flex-col lg:flex-row items-center justify-start relative px-4 lg:px-8">
        {/* Text Container - Increased width */}
        <motion.div
          ref={ref}
          className="w-full lg:w-[60%] relative z-10 mb-12 lg:mb-0 lg:pr-8"
          style={{ y: isMobile ? 0 : y1 }}
          variants={textContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold font-serif"
            variants={textItemVariants}
          >
            {t("title_1")} <br />
            {t("title_2")}{" "}
            <span className="text-bronze-500">{t("highlight")}</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-gray-300 text-base md:text-lg max-w-xl"
            variants={textItemVariants}
          >
            {t("description")}
          </motion.p>
          <motion.a
            href="https://creator.alonear.com/login"
            target="_blank"
            variants={ctaItemVariants}
          >
            <button className="mt-6 group relative overflow-hidden rounded-md bg-black-500 shadow-lg px-6 py-1.5 border-2 border-black-50">
              <div className="absolute inset-0 bottom-0 h-0 bg-gray-400 transition-all duration-[250ms] ease-out group-hover:h-full"></div>
              <span className="relative text-sm">{t("cta")}</span>
            </button>
          </motion.a>
        </motion.div>

        {/* Card - Adjusted width */}
        <motion.div
          style={{
            position: "relative",
            height: "400px",
            overflow: "visible",
            perspective: 1000,
            y: isMobile ? 0 : y2,
          }}
          className="lg:absolute lg:w-[60%] lg:h-full lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full"
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
                transform: "translateZ(-50px)",
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
                  width: "100%",
                  maxWidth: "500px", // Added max-width
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 0,
                }}
                className="mx-4 lg:mx-0 lg:w-[70%]"
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
        padding: "1rem md:2rem",
        border: "2px solid rgba(200 200 200 / 0.2)",
        backdropFilter: "blur(12px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        zIndex: 0,
      }}
    >
      <div className="relative w-full h-full flex flex-col items-end justify-between z-0 p-6">
        <Image
          src="/symbol-primary.svg"
          alt="Alonear"
          width={40}
          height={40}
          className="h-auto"
        />

        <div className="flex flex-col gap-3 mt-auto text-right">
          <h2
            className="text-2xl font-medium tracking-widest
            text-transparent
            [text-shadow:0_1px_2px_rgba(255,255,255,0.15),0_-1px_1px_rgba(0,0,0,0.7)]"
          >
            SKY WILLIAMS
          </h2>
          <p
            className="text-sm tracking-[0.1em]
            text-transparent
            [text-shadow:0_1px_2px_rgba(255,255,255,0.15),0_-1px_1px_rgba(0,0,0,0.7)]"
          >
            Creator #0000000
          </p>
        </div>
      </div>
    </motion.div>
  );
}
