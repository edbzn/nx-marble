import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

import { Schema as EffectOptions } from "./schema";

export default function(_options: EffectOptions): Rule {
  return (_host: Tree, _context: SchematicContext) => {};
}
