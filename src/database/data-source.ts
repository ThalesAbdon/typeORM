import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUsersTable1695931290995 } from "./migrations/1695931290995-CreateUsersTable";
import User from "../app/entities/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin",
  database: "typeorm_poc",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [CreateUsersTable1695931290995],
  subscribers: [],
});
