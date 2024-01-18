import createMiddleware from "next-intl/middleware";
import { type NextRequest, type NextResponse } from "next/server";

const nextIntlMiddleware = createMiddleware({
  locales: ["en", "ru", "uk"],

  // Used when no locale matches
  defaultLocale: "ru",


});

export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
