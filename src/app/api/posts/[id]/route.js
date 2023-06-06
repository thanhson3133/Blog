import PostBlog from "<@>/models/PostBlog";
import connect from "<@>/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();
    const postBlog = await PostBlog.findById(id);
    return new NextResponse(JSON.stringify(postBlog), { status: 200 });
  } catch (error) {
    return new NextResponse("Datatbase Error!", { status: 500 });
  }
};
