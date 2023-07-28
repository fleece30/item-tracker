import { builder } from "../builder";
import { prisma } from "../prisma";

builder.mutationField("createItem", (t) =>
  t.prismaField({
    type: "Item",
    args: {
      name: t.arg.string({ required: true }),
      broughtBy: t.arg.string({ required: true }),
      cost: t.arg.int({ required: true }),
    },
    resolve: async (query, parent, _args) => {
      return prisma.item.create({
        ...query,
        data: {
          name: _args.name,
          broughtBy: _args.broughtBy,
          cost: _args.cost
        },
      });
    },
  })
);

builder.mutationField("deleteItem", (t) =>
  t.prismaField({
    type: "Item",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, parent, _args) => {
      return prisma.item.delete({
        ...query,
        where: {
          id: _args.id,
        },
      });
    },
  })
);