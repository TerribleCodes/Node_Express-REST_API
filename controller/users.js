import { v4 as uuidv4 } from "uuid";
import { users } from "../routes/users.js";

/*
  All the routes handling methods are exported to /routes/users.js
*/

export const addUser = (req, res) => {
  const user = req.body; // Fetch the user data from the req.body
  users.push({ id: uuidv4(), ...user }); // Insert the unique user id to the user object and Push the newly created user with the id
  res.send(`User ${user.firstName} was added to the database`);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const userwithid = users.find((user) => user.id === id);
  if (userwithid) {
    res.send(userwithid);
  } else {
    res.send("User does not exist");
  }
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.send(
    `User with the ID: ${id} was successfully removed from the database`
  );
};

export const updateUser = (req, res) => {
  const { id } = req.params; // ID comes from request parameters
  const { firstName, lastName, age } = req.body; // These parameters will be sent from the client side
  const user = users.find((user) => user.id == id); // The specific user will be returned depending on the ID
  if (firstName || lastName || age) {
    // User will be updated according to the request body
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    res.send(`User: ${firstName} was updated`);
  } else {
    res.send("Missing Parameters");
  }
};

export const getAll = (req, res) => {
  res.send(users);
};
