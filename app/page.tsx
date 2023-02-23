import prisma from "../prisma/client";

export default async function Home() {
  const posts = await prisma.post.findMany({});

  console.log("HERE ARE POSTS", posts);

  return <div className="border-2 border-red-400">HOME PAGE</div>;
}
