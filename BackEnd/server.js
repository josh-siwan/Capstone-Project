const express = require("express");
const app = express();
 const cors = require('cors')
 const bodyParser = require("body-parser");
require("dotenv").config();
// parse requests of content-type - application/json
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

let dbConnect = require("./dbconnect");

app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)


app.listen(PORT, () => {
console.log(`Server is running on port
${PORT}.`);

});