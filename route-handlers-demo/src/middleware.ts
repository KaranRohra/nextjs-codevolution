import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const theme = request.cookies.get("theme");
  if (!theme) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;
  //   if (request.nextUrl.pathname === "/profile") {
  //     // return NextResponse.redirect(new URL("/hello", request.url));
  //     return NextResponse.rewrite(new URL("/hello", request.url)); // In this case content changes but URL remain same
  //   }
  //   return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
//   matcher: "/profile",
// };
