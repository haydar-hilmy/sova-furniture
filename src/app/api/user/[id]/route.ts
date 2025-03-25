import { NextResponse } from "next/server";

// Data dummy
const users = [
  { id: "1", name: "Haydar", role: "Frontend Developer" },
  { id: "2", name: "Minim Coding", role: "Tech Educator" },
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const user = users.find((u) => u.id === params.id);

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
