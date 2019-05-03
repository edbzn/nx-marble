# marble-schematics

Schematics for Marble.js

## Getting started

⚙ [Yarn](https://yarnpkg.com/en/docs/install#mac-stable) is required for the scripts. Make sure it's installed on your machine.

⬇ **Install** the dependencies for the schematic and the sandbox application

```bash
yarn && cd sandbox && yarn && cd ..
```

🖇 **Link** the schematic in the sandbox to run locally

```bash
yarn link:schematic
```

🏃 **Run** the schematic

```bash
yarn build:clean:launch
```

To execute an example schematic, make sure you've ran the **Install** and **Link** steps above. Then run the following and inspect the changed files.

```bash
git checkout component-license && yarn build:clean:launch
```

## E2E testing

Execute the schematic against the sandbox. Then run linting, unit & e2e tests and a prod build in the sandbox.

```bash
yarn test
```

## Unit Testing

Run the unit tests using Jasmine as a runner and test framework.

```bash
yarn test:unit
```
