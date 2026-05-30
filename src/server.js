require("./config/db");

const express = require("express");

const profileRoutes = require("./routes/profileRoutes");

const app = express();

app.use(express.json());

app.use("/api", profileRoutes);

app.get("/", (req, res) => {
    res.send("Server Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});