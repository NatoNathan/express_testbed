const express = require("express");
const user = require("./routes/users");

const app = express();

app.use("/", express.static("public")); // localhost:8080
app.use(express.json());

app.use("/api/user", user); // localhost:8080/api/user/...

app.listen(8080);
console.log("server runing on port 8080");
