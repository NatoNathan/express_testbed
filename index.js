const express = require("express");
const user = require("./routes/users");

const app = express();

app.use("", express.static("public"));
app.use(express.json());
app.use("/api/user", user);

app.listen(8080);
console.log("server runing on port 8080");
