const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT | 8000;

app.use("/", (req, res) => {
    return res.json({ message: "Hello World! API Working" });
});

app.listen(PORT, () => {
    console.log(`App Running on port ${PORT}`);
});
