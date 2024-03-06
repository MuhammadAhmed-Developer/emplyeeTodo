import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
  try {
    const { name, email, password } = await req.json();

    let responce = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    console.log("responce", responce);

    return NextResponse.json({ message: "User added" }, { status: 200 });
  } catch (error: any) {
    console.log("error", error);
    return NextResponse.json(
      { message: "Error while adding user" },
      { status: 400 }
    );
  }
};
