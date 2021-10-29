import { PrismaClient } from "@prisma/client";
import { habits } from "../data/habits";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "semijacks@gmail.com",
      role: "ADMIN",
    },
  });

  await prisma.habit.createMany({
    data: habits,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
