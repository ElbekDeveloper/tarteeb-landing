"use client";

import NextError from "next/error";

// Requests the locale middleware never sees (rare) land here.
export default function GlobalNotFound() {
  return (
    <html lang="uz">
      <body>
        <NextError statusCode={404} />
      </body>
    </html>
  );
}
