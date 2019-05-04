import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import { Schema as NewOptions } from "./schema";

describe("New Schematic", () => {
  const schematicRunner = new SchematicTestRunner(
    "new",
    require.resolve("../collection.json")
  );
  const defaultOptions: NewOptions = {
    name: "foo",
    directory: "bar"
  };

  it("should create files of an application", async () => {
    const options = { ...defaultOptions };

    const tree = await schematicRunner
      .runSchematicAsync("new", options)
      .toPromise();
    const files = tree.files;
    expect(files).toEqual(
      jasmine.arrayContaining([
        "/bar/tsconfig.app.json",
        "/bar/src/main.ts",
        "/bar/src/app/app.module.ts",
        "/bar/e2e/src/app.po.ts",
        "/bar/e2e/src/app.e2e-spec.ts",
        "/bar/e2e/tsconfig.json",
        "/bar/e2e/protractor.conf.js"
      ])
    );
  });
});
