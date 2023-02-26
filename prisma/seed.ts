import { Post, User } from "@prisma/client";
import prisma from "./client";
import { fakePostBodies, fakeUsers } from "./data";

async function main() {
  try {
    await insertFakeUsers();

    await insertFakePosts();

    // await deleteAllUsers();
    console.log("INSERTED POSTS");
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const insertFakeUsers = async () => {
  return await prisma.user.createMany({
    data: fakeUsers,
  });
};

const insertFakePosts = async () => {
  /**
   * Get all users
   */
  const users = await prisma.user.findMany({});

  /**
   * For each user, generate 3 fake posts with a random body and random image
   */
  for (const user of users) {
    for (let i = 0; i < 3; i++) {
      const randomPostBody =
        fakePostBodies[Math.floor(Math.random() * fakePostBodies.length)];

      const newPost: Pick<Post, "authorId" | "body"> = {
        authorId: user.id,
        body: randomPostBody,
      };

      await prisma.post.create({
        data: newPost,
      });
    }
  }
};

/**
 * Will cascade-delete posts
 */
const deleteAllUsers = async () => {
  return await prisma.user.deleteMany({});
};
