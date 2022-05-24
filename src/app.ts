import dotenv from "dotenv";
dotenv.config();
import express from "express";
import config from "config";
import connectToDb from "./util/connectToDb";
import log from "./util/logger";
import router from './routes'
const app = express();
const PORT = config.get("port");

app.use(router)

app.listen(PORT, () => {
  log.info(`server is running on ${PORT}`);
  connectToDb();
});
