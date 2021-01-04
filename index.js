const express = require("express");

const apiRoute = require("./routes/api");

const path = require("path");

const app = express();

app.use("/api", apiRoute);
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 8080 || 3000);
