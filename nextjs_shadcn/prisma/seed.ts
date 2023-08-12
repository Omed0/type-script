import { PrismaClient } from "@prisma/client";
import { User } from "next-auth";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "omed@gmail.com" },
    update: {},
    create: {
      name: "Omed",
      email: "omed@gmail.com",
      role: "ADMIN",
      image: "https://avatars.githubusercontent.com/u/4726921?v=4",
    },
  });
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

// function exclude(user: User[], keys: any[]) {
//   for (let key of keys) {
//     delete user[key];
//   }
//   return user;
// }
