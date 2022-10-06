import config from "../config/config";
import app from "./express";
import mongoose from "mongoose";
import Template from "../template"

mongoose.Promise = global.Promise;
mongoose.connect(
  config.mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`connected to database: ${config.mongoUri}`);
  }
);

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

app.get("/", (req, res) => {
  res.status(200).send(Template());
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
