var express = require("express");
var bodyParser = require("body-parser");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.listen(3000, () => {
  console.log("Started on port 3000");
});

// var { mongoose } = require("./db/mongoose");

// var Todo = mongoose.model("Todo", {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

// var newTodo = new Todo({
//   text: "Cook dinner"
// });

// newTodo.save().then(
//   doc => {
//     console.log("Saved todo", doc);
//   },
//   e => {
//     console.log("Unable to save todo");
//   }
// );

// var otherTodo = new Todo({
//   text: "   Edit this text   "
//   // text: "Feed Floki",
//   // completed: true,
//   // completedAt: 123
// });

// otherTodo.save().then(
//   doc => {
//     console.log(JSON.stringify(doc, undefined, 2));
//   },
//   e => {
//     console.log("Unable to save", e);
//   }
// );

// User
// email - require - trim it -set type -set min length of 1
// var User = mongoose.model("User", {
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 1
//   }
// });

// var user = new User({
//   email: "sabrina.moraru@gmail.com    "
// });

// user.save().then(
//   () => {
//     console.log("User saved", doc);
//   },
//   e => {
//     console.log("Unable to save user", e);
//   }
// );
