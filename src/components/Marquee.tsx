import Marquee from "react-fast-marquee";

export default function MarqueeBox() {
  const items = [
    { src: "/logo-primary.svg", alt: "Alonear" },
    { src: "/symbol-primary.svg", alt: "Alonear" },
  ];

  return (
    <div className="relative w-full overflow-x-hidden overflow-y-visible py-20 max-w-screen">
      <div className="relative w-[120%] left-1/2 -translate-x-1/2">
        <Marquee
          loop={0}
          speed={30}
          autoFill
          play
          className="min-h-fit bg-black-600 py-6"
          style={{ transform: "rotate(5deg)" }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <img
              key={i}
              src={items[i % items.length].src}
              alt={items[i % items.length].alt}
              className="h-6 mr-6"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
