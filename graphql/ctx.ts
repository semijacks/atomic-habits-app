import { PrismaClient } from ".prisma/client";
import prisma from "../lib/prisma";

export type Ctx = {
  prisma: PrismaClient;
};

export async function createCtx(req, res): Promise<Ctx> {
  return {
    prisma,
  };
}
