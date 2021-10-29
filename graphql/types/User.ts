import { objectType, enumType } from "nexus";
import { Habit } from "./Habit";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("email");
    t.string("image");
    t.field("role", { type: Role });
    t.field("bookmarks", {
      type: Habit,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: parent.id,
            },
          })
          .bookmarks();
      },
    });
  },
});

const Role = enumType({
  name: "Role",
  members: ["USERS", "ADMIN"],
});
