import { strings } from "@angular-devkit/core";
import {
  apply,
  applyTemplates,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  Tree,
  url
} from "@angular-devkit/schematics";
import {
  NodePackageInstallTask,
  RepositoryInitializerTask
} from "@angular-devkit/schematics/tasks";

import { Schema as NewOptions } from "./schema";

export default function(options: NewOptions): Rule {
  if (!options.name) {
    throw new SchematicsException(`Invalid options, "name" is required.`);
  }

  if (!options.directory) {
    options.directory = options.name;
  }

  return (_host: Tree, context: SchematicContext) => {
    let packageTask;
    if (!options.skipInstall) {
      packageTask = context.addTask(
        new NodePackageInstallTask(options.directory)
      );
    }
    if (!options.skipGit) {
      const commit =
        typeof options.commit == "object"
          ? options.commit
          : !!options.commit
          ? {}
          : false;

      context.addTask(
        new RepositoryInitializerTask(options.directory, commit),
        packageTask ? [packageTask] : []
      );
    }

    return mergeWith(
      apply(url("./files"), [
        applyTemplates({
          utils: strings,
          directory: options.directory,
          ...options
        }),
        move(options.directory || options.name)
      ])
    );
  };
}
