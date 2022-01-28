require("./db/conn");
const User = require("./models/userMessage");
const express = require("express");
const app = express();
const port = process.env.PORT || 8001;
const cors = require("cors");

// configration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// routes

app.post("/contact", (req, res) => {
  console.log(req.body);
  const { fullname,  email, message } = req.body;
  const user = new User({
    fullname,
    email,
    message,
  });
  user.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ msg: "Information successfully submitted" });
    }
  });
});
// fetch data from database



app.get("/students", (req, res) => {
 // console.log(req.body);
  User.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on the ${port}`);
});
