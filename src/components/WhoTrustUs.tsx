import Image from "next/image";

const logos = [
  { src: "/images/nippon.svg", alt: "Nippon Foundation", width: 150 },
  { src: "/images/aloqa.webp", alt: "Aloqa", width: 170 },
  { src: "/images/Garage.svg", alt: "Garage", width: 130 },
];

export default function WhoTrustUs() {
  return (
    <section className="px-4 pb-16 lg:pb-24">
      <div className="container mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h2 className="text-sm font-medium text-muted-foreground">
          Development supported by
        </h2>
        <ul className="flex flex-wrap items-center gap-4">
          {logos.map((logo) => (
            <li
              key={logo.alt}
              className="flex h-20 items-center justify-center rounded-2xl border border-border bg-white px-6"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={56}
                className="h-11 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
