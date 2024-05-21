import { i18nRouter } from "next-i18n-router";
import i18nConfig from "../i18nConfig";
import { NextResponse } from "next/server";

export function middleware(request) {
  const locales = ["en", "fr", "es", "it"];

  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  console.log(request.nextUrl);
  // Redirect if there is no locale
  const locale = request.cookies.get("NEXT_LOCALE")?.value || "en";
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
// matcher:     '/((?!api|static|.*\\..*|_next).*)'
