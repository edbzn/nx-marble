import httpListener from "@app";
import { Database, Server } from "@connection";
import { createContext } from "@marblejs/core";

const bootstrap = async () => {
  await Database.connect();
  await Server.create(httpListener.run(createContext()));
};

bootstrap();
