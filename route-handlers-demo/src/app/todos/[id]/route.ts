import { todos } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  return Response.json(
    todos.find((todo) => todo.id.toString() === params.id) || {}
  );
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const todoIndex = todos.findIndex((todo) => todo.id.toString() === params.id);

  if (todoIndex === -1)
    return new Response(JSON.stringify({ message: "Not found" }), {
      status: 404,
    });

  todos[todoIndex] = {
    ...todos[todoIndex],
    ...((await request.json()) || {}),
  };

  return Response.json(todos[todoIndex]);
}
