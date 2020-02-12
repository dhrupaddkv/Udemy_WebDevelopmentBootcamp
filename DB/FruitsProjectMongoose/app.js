const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: [true, "value Mandatory"], unique: true },
  rating: { type: Number, min: 1, max: 10 },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({ name: "Apple", rating: 7, review: "Solid" });
const orange = new Fruit({ name: "Orange", rating: 6, review: "Solid" });
const mango = new Fruit({ name: "Mango", rating: 5, review: "fine" });

Fruit.insertMany([apple, mango, orange], function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});

const personSchmea = new mongoose.Schema({
  name: String,
  age: String,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("person", personSchmea);
const person = new Person({ name: "Goldy", age: 33, favoriteFruit: apple });
person.save();
// fruit.save();

Fruit.find(function(err, fruits) {
  if (err) {
    console.log("error");
  } else {
    mongoose.connection.close();
    // console.log(fruits);
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
    console.log(fruits.length);
  }
});

Fruit.updateOne({ name: "Apple" }, { rating: 9 }, function(err) {
  if (err) {
    console.log("failed");
  } else {
    console.log("Updated");
  }
});

Fruit.deleteOne({ name: "Orange" }, function(err) {
  if (err) {
    console.log("failed to delete");
  } else {
    console.log("deleted successfully");
  }
});
