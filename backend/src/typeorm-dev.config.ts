import { createConnection } from "typeorm";
import { Project } from "./entities/Project";
import { Task } from "./entities/Task";
export default {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Project, Task],
  synchronize: true,
  logging: true,
  maxQueryExecutionTime: 30,
} as Parameters<typeof createConnection>[0];
