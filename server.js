const express = require("express");
const bodyParser = require("body-parser");
const { mongoDbConnection } = require("./view/mongodb_connection");
const authRoutes = require("./routes/auth_routes");


const app = express();
const port = 8000; 

app.use(bodyParser.json());

mongoDbConnection("mongodb://localhost:27017/nodejs_ex", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use("/api/auth", authRoutes);

app.listen(port,() =>
  console.log(`Server started at http://localhost:${port}`)
);