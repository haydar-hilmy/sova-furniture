import { NextRequest, NextResponse } from "next/server";

// Data dummy
const users = [
  { id: "1", name: "Haydar", role: "Frontend Developer" },
  { id: "2", name: "Minim Coding", role: "Tech Educator" },
];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ⬅️ Gunakan Promise
) {
  const { id } = await params; // ⬅️ Await params untuk mendapatkan ID

  const user = users.find((u) => u.id === id);

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
