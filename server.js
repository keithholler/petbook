const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
var cors = require('cors')
const users = require("./routes/api/users");
const userData = require("./routes/api/userData");
const posts = require("./routes/api/posts");
const userinfodbs = require("./routes/api/userinfodbs");
const app = express();
// Bodyparser middleware
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true, })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
app.use(cors())
// Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/userinfodbs", userinfodbs);
app.use("/api/userData", userData);

// app.get('/api/userinfodbs', function(req, res) {
//   res.send("Yep it's working");
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
