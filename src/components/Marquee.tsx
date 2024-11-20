import Marquee from "react-fast-marquee";

export default function MarqueeBox() {
  const items = [
    { src: "/logo-primary.svg", alt: "Alonear" },
    { src: "/symbol-primary.svg", alt: "Alonear" },
  ];

  return (
    <Marquee
      loop={0}
      speed={30}
      autoFill
      play
      className="min-h-fit bg-black-600 py-6 my-6"
      style={{ transform: "rotate(5deg)", width: "110%" }}
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
  );
}
