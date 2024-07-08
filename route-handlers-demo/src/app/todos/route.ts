import { NextRequest } from "next/server";
import { todos } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q") || "";
  return Response.json(todos.filter((todo) => todo.title.includes(query)));
}

export async function POST(request: Request) {
  const todo = {
    ...(await request.json()),
    id: todos.length + 1,
  };
  todos.push(todo);
  return new Response(JSON.stringify(todo), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
