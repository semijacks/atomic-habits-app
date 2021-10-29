export const resolvers = {
  Query: {
    habits: async (_parent, _args, ctx) => await ctx.prisma.habit.findMany(),
  },
};
