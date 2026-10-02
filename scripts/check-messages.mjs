// Verifies messages/{uz,en,ru}.json share one key structure (including list
// lengths) and contain no em or en dashes. Run: npm run check:messages
import { readFileSync } from "node:fs";

const locales = ["uz", "en", "ru"];
const DASHES = /[–—]/;

const flatten = (value, prefix = "", out = new Map()) => {
  if (Array.isArray(value)) {
    out.set(prefix, `list(${value.length})`);
    value.forEach((item, index) => flatten(item, `${prefix}[${index}]`, out));
  } else if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      flatten(child, prefix ? `${prefix}.${key}` : key, out);
    }
  } else {
    out.set(prefix, value);
  }
  return out;
};

const files = Object.fromEntries(
  locales.map((locale) => [
    locale,
    flatten(JSON.parse(readFileSync(`messages/${locale}.json`, "utf8"))),
  ])
);

const errors = [];
const reference = files.en;

for (const locale of locales) {
  const keys = files[locale];
  for (const key of reference.keys()) {
    if (!keys.has(key)) errors.push(`${locale}: missing ${key}`);
  }
  for (const [key, value] of keys) {
    if (!reference.has(key)) errors.push(`${locale}: extra ${key}`);
    if (String(value).startsWith("list(") && value !== reference.get(key)) {
      errors.push(`${locale}: ${key} is ${value}, en has ${reference.get(key)}`);
    }
    if (typeof value === "string" && DASHES.test(value)) {
      errors.push(`${locale}: dash in ${key}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `OK: ${reference.size} keys in each of ${locales.join(", ")}; no em or en dashes.`
);
