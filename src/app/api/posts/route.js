import PostBlog from "<@>/models/PostBlog";
import connect from "<@>/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  // const url = new URL(request.url);
  // const username = url.searchParams.get("username");
  const username = request.username;

  try {
    await connect();
    const postBlogs = await PostBlog.find(username && { username });
    return new NextResponse(JSON.stringify(postBlogs), { status: 200 });
  } catch (error) {
    return new NextResponse("Datatbase Error!", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new PostBlog(body);

  try {
    await connect();

    await newPost.save();
    return new NextResponse("Post has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("Datatbase Error!", { status: 500 });
  }
};
