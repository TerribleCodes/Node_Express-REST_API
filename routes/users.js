import express from "express";
import {
  addUser,
  getUserById,
  deleteUser,
  updateUser,
  getAll,
} from "../controller/users.js";
const router = express.Router();

/*
    All the routes here starts with http://localhost:5000/users
*/

export let users = [];

router.get("/", getAll); // Get all the users

router.post("/", addUser); // Add a user to the mock database

router.get("/:id", getUserById); // Search a user by id

router.delete("/:id", deleteUser); // Delete a user by ID

router.patch("/:id", updateUser); // Update the user

export default router;
