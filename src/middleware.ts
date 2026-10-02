import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip Next internals, API routes, Vercel internals and any file with an
  // extension (images, favicon, robots.txt).
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
