require("./config/db");
const express = require("express");

const profileRoutes = require("./routes/profileRoutes");

const app = express();

app.use(express.json());

app.use("/api", profileRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});