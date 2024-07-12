import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  const nextCookies = cookies();
  nextCookies.set("page", "20");

  console.log(headerList.get("Authorization"));
  console.log(requestHeaders.get("Authorization"));
  console.log(request.cookies.get("theme"));
  console.log(nextCookies.get("page"));

  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
