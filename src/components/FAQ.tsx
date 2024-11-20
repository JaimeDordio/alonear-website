"use client";

import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("FAQ");

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
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="p-4 bg-black-600 rounded shadow border border-black-300 "
            >
              <summary className="font-semibold cursor-pointer marker:mr-8">
                {faq.question}
              </summary>

              <p className="mt-2 text-gray-100">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
