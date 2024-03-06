import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    console.log("userId", userId);
    const employee = await prisma.employee.findMany({
      where: {
        userId: parseInt(userId),
      },
    });
    console.log("employee", employee);
    return NextResponse.json({ message: "Get user Employee" }, { status: 200 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { message: "Error while Getting Employee" },
      { status: 500 }
    );
  }
};
