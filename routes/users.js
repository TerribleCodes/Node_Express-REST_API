import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

/*
    All the routes here starts with http://localhost:5000/users
*/

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 45,
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body; // Fetch the user data from the req.body
  users.push({ id: uuidv4(), ...user }); // Insert the unique user id to the user object and Push the newly created user with the id
  res.send(`User ${user.firstName} was added to the database`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const userwithid = users.find((user) => user.id === id);
  res.send(userwithid);
});

export default router;
