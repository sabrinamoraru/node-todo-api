// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // client
    //   .collection("Todos")
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID("5bdc63c713bbb34b7034aaa4")
    //     },
    //     {
    //       $set: {
    //         completed: false
    //       }
    //     },
    //     {
    //       returnOriginal: true
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });

    // update Jen to Sabrina
    client
      .collection("Users")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5bdc100937e6f57bc74f75ad")
        },
        {
          $set: {
            name: "Sabrina"
          },
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });
    // client.close();
  }
);
