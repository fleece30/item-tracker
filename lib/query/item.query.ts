import { builder } from "../builder";
import { prisma } from "../prisma";

builder.queryField("items", (t) =>
  t.prismaField({
    type: ["Item"],
    resolve: async (query, _parents, _args, _info) => {
      return prisma.item.findMany({
        ...query,
        orderBy: { createdAt: "desc" },
      });
    },
  })
);