import express from "express";
const router = express.Router();

/*
    All the routes here starts with http://localhost:5000/users
*/

router.get("/", (req, res) => {
  res.send("ree");
});

export default router;
