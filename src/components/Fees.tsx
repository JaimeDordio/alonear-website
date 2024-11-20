import { useTranslations } from "next-intl";

export default function Fees() {
  const t = useTranslations("Fees");

  return (
    <section className="py-16 max-w-6xl mx-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center max-w-3xl mx-auto">
          {t("title")}
        </h2>

        <p className="text-center text-gray-300 mt-6">{t("description")}</p>
      </div>
    </section>
  );
}
