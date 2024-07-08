import { todos } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  return Response.json(
    todos.find((todo) => todo.id.toString() === params.id) || {}
  );
}
