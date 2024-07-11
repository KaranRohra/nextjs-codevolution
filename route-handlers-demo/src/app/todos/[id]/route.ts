import { redirect } from "next/navigation";
import { todos } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const todoId = parseInt(params.id);
  if (todoId > todos.length) redirect("/todos");

  return Response.json(todos.find((todo) => todo.id === todoId) || {});
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

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const todoIndex = todos.findIndex((todo) => todo.id.toString() === params.id);

  if (todoIndex === -1)
    return new Response(JSON.stringify({ message: "Not found" }), {
      status: 404,
    });

  const deletedTodo = todos[todoIndex];
  todos.splice(todoIndex, 1);

  return Response.json(deletedTodo);
}
