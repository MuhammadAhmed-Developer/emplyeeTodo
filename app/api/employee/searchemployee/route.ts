import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const { name } = req.nextUrl.searchParams.get("name");
    const employee = await prisma.employee.findMany({
      where: {
        name: name,
      },
    });
    return NextResponse.json(
      { message: "Get  Employee", employee },
      { status: 200 }
    );
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { message: "Error while Getting Employee" },
      { status: 500 }
    );
  }
};
