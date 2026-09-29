import Logo from "@/components/Logo";

const productLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#solutions", label: "Solution" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] px-4 py-16 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="max-w-sm">
            <Logo className="h-11 w-auto text-white" />
            <p className="mt-6 text-lg font-semibold text-[#45d1db]">
              Make education fun again!
            </p>
            <p className="mt-3 leading-relaxed text-zinc-400">
              Attendance and marks for study centers, with instant SMS and
              Telegram alerts for parents.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-50">Product</h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-400 transition-colors hover:text-zinc-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-sm text-zinc-400">
          © {new Date().getFullYear()} Tarteeb. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
