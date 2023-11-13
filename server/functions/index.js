const functions = require("firebase-functions");
const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccountKey = require("./serviceAccountKey.json");

const express = require("express");
const app = express();

// Body parser for JSON data
app.use(express.json());

// Cross-origin middleware
const cors = require("cors");
app.use(cors({ origin: true }));
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

// Firebase credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey)
});

// Root endpoint
app.get("/", (req, res) => {
  return res.send("Hello, world!");
});

// User API endpoint
const userRoute = require("./routes/users");
app.use("/api/users", userRoute);

exports.app = functions.https.onRequest(app);
