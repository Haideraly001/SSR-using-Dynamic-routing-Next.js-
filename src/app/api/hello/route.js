import { NextResponse } from "next/server";
import { user } from "@/utility/db"

export async function GET(req, resp) {
  // return NextResponse.json({
  //   "Name": "Hello, World!",
  //   "Age": 24,
  // })
  const data = user;
  return NextResponse.json(data, { status: 200 })
}