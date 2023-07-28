import { builder } from "../builder";

builder.prismaObject("Item", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    broughtBy: t.exposeString("broughtBy"),
    cost: t.exposeInt("cost"),
  }),
});
