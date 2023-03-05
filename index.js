import express from "express";
import bodyParser from "body-parser"; // Allows imcoming post request bodies
import dotenv from "dotenv";
import userRoute from "./routes/users.js";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port http://localhost:${process.env.PORT}`);
});
