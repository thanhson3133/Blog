import PostBlog from "<@>/models/PostBlog";
import connect from "<@>/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const postBlogs = await PostBlog.find();
    return new NextResponse(JSON.stringify(postBlogs), { status: 200 });
  } catch (error) {
    return new NextResponse("Datatbase Error!", { status: 500 });
  }
};
