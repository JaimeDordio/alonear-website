import AntiScreenshot from "@/components/AntiScreenshot";
import Description1 from "@/components/Description1";
import Description2 from "@/components/Description2";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Fees from "@/components/Fees";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PageLayout from "@/components/PageLayout";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <PageLayout>
      <Hero />

      <Description1 />
      <Description2 />

      <Features />
      <AntiScreenshot />

      <Fees />

      <Marquee />

      <FAQ />
    </PageLayout>
  );
}
