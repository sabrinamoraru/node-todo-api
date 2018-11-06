const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove
// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({ _id: "5be13e9f13bbb34b70356fc4" }).then(todo => {
//   console.log(todo);
// });

Todo.findByIdAndRemove("5be13e9f13bbb34b70356fc4").then(todo => {
  console.log(todo);
});
