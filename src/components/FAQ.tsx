"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

import { IconChevronDown } from "@tabler/icons-react";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("FAQ");

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "-10% 0% -10% 0%",
  });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  const faqs = [
    {
      question: t("items.0.question"),
      answer: t("items.0.answer"),
      soon: false,
    },
    {
      question: t("items.1.question"),
      answer: t("items.1.answer"),
      soon: false,
    },
    {
      question: t("items.2.question"),
      answer: t("items.2.answer"),
      soon: false,
    },
    {
      question: t("items.3.question"),
      answer: t("items.3.answer"),
      soon: false,
    },
    {
      question: t("items.4.question"),
      answer: t("items.4.answer"),
      soon: false,
    },
    {
      question: t("items.5.question"),
      answer: t("items.5.answer"),
      soon: false,
    },
  ];

  return (
    <section className="py-8 md:py-16">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12"
          variants={itemVariants}
        >
          {t("title")}
        </motion.h2>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="group bg-black-600 rounded-lg shadow border border-black-300
                        hover:bg-black-500/50 transition-colors duration-200"
              variants={itemVariants}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 md:p-6 flex justify-between items-center cursor-pointer select-none"
              >
                <span className="font-medium text-sm md:text-base pr-4 text-left">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconChevronDown size={16} stroke={1.5} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={answerVariants}
                    className="overflow-hidden"
                  >
                    <p className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
