import {
  Rule,
  SchematicContext,
  Tree,
  mergeWith,
  apply,
  url,
  applyTemplates,
  move
} from "@angular-devkit/schematics";
import { Schema as EffectOptions } from "./schema";
import { strings } from "@angular-devkit/core";

export default function(options: EffectOptions): Rule {
  return (_host: Tree, _context: SchematicContext) => {
    return mergeWith(
      apply(url("./files"), [
        applyTemplates({
          ...strings,
          ...options
        }),
        move(options.directory || options.name)
      ])
    );
  };
}
