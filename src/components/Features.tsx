"use client";

import {
  IconGift,
  IconMessages,
  IconShoppingBag,
  IconSignature,
  IconSparkles,
  IconVideo,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

import { useTranslations } from "next-intl";
import { useRef } from "react";

export default function Features() {
  const t = useTranslations("Features");
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-10% 0% -10% 0%",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconClassname = "h-5 w-5 text-neutral-500";

  const items = [
    {
      title: t("items.0.title"),
      description: t("items.0.description"),
      header: <Skeleton />,
      icon: <IconVideo className={iconClassname} />,
    },
    {
      title: t("items.1.title"),
      description: t("items.1.description"),
      header: <Skeleton />,
      icon: <IconMessages className={iconClassname} />,
    },
    {
      title: t("items.2.title"),
      description: t("items.2.description"),
      header: <Skeleton />,
      icon: <IconSignature className={iconClassname} />,
    },
    {
      title: t("items.3.title"),
      description: t("items.3.description"),
      header: <Skeleton />,
      icon: <IconShoppingBag className={iconClassname} />,
    },
    {
      title: t("items.4.title"),
      description: t("items.4.description"),
      header: <Skeleton />,
      icon: <IconGift className={iconClassname} />,
    },
    {
      title: t("items.5.title"),
      description: t("items.5.description"),
      header: <Skeleton />,
      icon: <IconSparkles className={iconClassname} />,
    },
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-4xl font-extrabold text-center max-w-3xl mx-auto"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t("title")} <span className="text-purple-600">{t("highlight")}</span>
        </motion.h2>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <BentoGrid className="max-w-4xl mx-auto mt-12">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 0 || i === 3 || i === 4 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </motion.div>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-black-100 dark:from-neutral-900 dark:to-neutral-800 to-neutral-900"></div>
);
