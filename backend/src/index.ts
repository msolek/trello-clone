import "dotenv/config";
import { createConnection } from "typeorm";
import express from "express";
import ormconfig from "./typeorm-dev.config";
const main = async () => {
  const db_connection = await createConnection(ormconfig);

  const app = express();
  app.listen(4000, () => {
    console.info("server started at localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
