import Image from "next/image";

export default function WhoTrustUs() {
  const logos = [
    { src: "/images/nippon.svg", alt: "Nippon" },
    { src: "/images/aloqa.webp", alt: "Aloqa" },
    { src: "/images/Garage.svg", alt: "Garage" },
  ];

  return (
    <section className="py-8 md:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Development Supported By
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex items-center justify-center h-32"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.alt == "Aloqa" ? "300" : 180}
                  height={180}
                  className={`${"object-contain"}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
