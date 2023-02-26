import prisma from "../prisma/client";
import Posts from "./Posts";

export default async function Home() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return <Posts posts={posts} />;
}
