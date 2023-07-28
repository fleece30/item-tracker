import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
// @ts-ignore
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { prisma } from "./prisma";

export const builder = new SchemaBuilder<{ PrismaTypes: PrismaTypes }>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.queryType({ description: "The query root type." });
builder.mutationType({ description: "The mutation root type." });
