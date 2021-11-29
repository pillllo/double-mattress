import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import router from "./router";

dotenv.config();

const { PORT } = process.env;

const app = express();

const corsConfig = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request received for url ${req.url}`);
  next();
});
app.use(router);
app.get("*", (req, res) => {
  res.status(404).send("Sorry, this page could not be found.");
});

(async function () {
  try {
    console.log(`💿 Db is connected`);
  } catch {
    console.log(`❌ Could not connec to db`);
  }
  app.listen(PORT, () => {
    console.log(`🚀 Server is listening at ${PORT}`);
  });
})();
