import express from "express";
import bodyParser from "body-parser"; // Allows imcoming post request bodies
import dotenv from "dotenv";
import userRoute from "./routes/users.js";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use("/users", userRoute);

app.use("*", (req, res) =>
  res.status(404).json({ error: "Page does not exist." })
);

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port http://localhost:${process.env.PORT}`);
});
