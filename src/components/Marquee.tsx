import Marquee from "react-fast-marquee";

export default function MarqueeBox() {
  return (
    <Marquee
      loop={0}
      speed={30}
      autoFill
      play
      className="min-h-fit bg-black-600 py-6 my-6"
      style={{ transform: "rotate(5deg)", width: "110%" }}
    >
      <img src="/logo-primary.svg" alt="Alonear" className="h-6 mr-6" />
      <img src="/symbol-primary.svg" alt="Alonear" className="h-6 mr-6" />
      <img src="/logo-primary.svg" alt="Alonear" className="h-6 mr-6" />
      <img src="/symbol-primary.svg" alt="Alonear" className="h-6 mr-6" />
    </Marquee>
  );
}
