# Marble.js Schematics

Schematics collection for Marble.js

## Features

- 🆕 Create Marble.js projects with ease
- 🔨 Scaffold main building blocks efficiently
- 💎 Provide good practices
- 🌀 Enforce consistency

## Getting started

⬇ Install dependencies

```bash
yarn add @angular-devkit/schematics-cli marble-schematics -D
```

🏃 Run the schematic

```bash
npx -p @angular-devkit/schematics schematics marble-schematics:<SchematicName>
```

🔎 List all available schematics

```bash
npx -p @angular-devkit/schematics schematics --list-schematics marble-schematics:
```

## Contributing

⬇ Install the dependencies for the schematic and the sandbox application

```bash
yarn && cd sandbox && yarn && cd ..
```

🖇 Link the schematic in the sandbox to run locally

```bash
yarn link:schematic
```

🏃 Run the schematic

```bash
yarn build:clean:execute marble-schematics:<SchematicName>
```

## E2E testing

Execute the schematic against the sandbox.sandbox.

```bash
yarn test
```

## Unit Testing

Run the unit tests using Jasmine as a runner and test framework.

```bash
yarn test:unit
```
