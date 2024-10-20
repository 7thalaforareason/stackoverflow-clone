const express = require("express");
const { connectMongoDB } = require("./connection");

const router = require("./routes/");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT | 8000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connection
connectMongoDB(process.env.MONGO_URL).then(() =>
    console.log("Connected to MongoDB")
);

// Routes
app.use("/", router);

app.listen(PORT, () => {
    console.log(`App Running on port ${PORT}`);
});
