import { todos } from "./data";

export async function GET() {
  return Response.json(todos);
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
