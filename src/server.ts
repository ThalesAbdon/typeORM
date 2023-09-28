import "reflect-metadata";
import * as express from "express";
import * as cors from "cors";
import { AppDataSource } from "./database/data-source";
import routers from "./app/routes/routes";
const app = express();

app.use(cors());

app.use(express.json());
app.use(routers);

AppDataSource.initialize().then(async () => {
  console.log("Database está ok!");
  app.listen(3333, () => {
    console.log("Servidor inicializado na porta 3333");
  });
});
