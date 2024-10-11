import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-dvh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-8 items-center flex-col mr-12">
          <Image
            src={"/alone.svg"}
            alt="Alonear"
            width={100}
            height={100}
            className="animate-fadeInBottom "
            style={{ animationDelay: "0ms", opacity: 0 }}
          />
          <Image
            src={"/one.svg"}
            alt="Alonear"
            width={65}
            height={65}
            className="ml-10 animate-fadeInBottom "
            style={{ animationDelay: "2000ms", opacity: 0 }}
          />
          <Image
            src={"/near.svg"}
            alt="Alonear"
            width={85}
            height={85}
            className="ml-26 animate-fadeInBottom "
            style={{ animationDelay: "4000ms", opacity: 0 }}
          />
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
          href="https://app.alonear.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Exclusive →
        </a>
      </footer>
    </div>
  );
}
