const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");
const chatRoutes = require("./routes/chat.route");
const { connectDB } = require("./lib/db");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(",") || ["http://localhost:3000", "https://stackchat-five.vercel.app"],
    credentials: true // allow frontend to send the cookies
}))

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
    connectDB();
});
