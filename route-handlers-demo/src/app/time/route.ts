import { NextRequest } from "next/server";

// export const dynamic = "force-dynamic"; // Method 1
// using the Request object with GET method // Method 2
// employing dynamic functions like headers() and cookies() // Method 3
// using any HTTP method other than GET // Method 4

export async function GET(request: NextRequest) {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}
