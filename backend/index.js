const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require("./config/db");
const router = require('./routes');

const app = express();

// Correctly configure CORS options
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  // origin: process.env.FRONTEND_URL,
  
  credentials: true,
}));


app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

const PORT = process.env.PORT || 8080;

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend/dist')));

//   // React app
//   app.get("*", (_req, res) => {
//     res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
//   });
// }

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Connected to DB");
    console.log(`Server is running on port ${PORT}`);
  });
});
