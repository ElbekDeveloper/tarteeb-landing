import type { ReactNode } from "react";

// The real root layout is src/app/[locale]/layout.tsx, which owns <html lang>.
// This file only exists so the top-level not-found page has a layout.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
