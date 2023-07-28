import { builder } from "./builder";

import "./types/item.type";
import "./query/item.query";
import "./mutation/item.mutation";

export const schema = builder.toSchema();
