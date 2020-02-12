const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const uri = "mongodb://localhost:27017";
const dbName = "fruitsDB";

const client = new MongoClient(uri, { useUnifiedTopology: true });

client.connect(err => {
  assert.equal(null, err);
  const db = client.db(dbName);

  console.log("Connected Successfully!");
  //   insertDcouments(db, function() {
  //     client.close();
  //   });

  findDocuments(db, function() {
    client.close();
  });
  //client.close();
});

const insertDcouments = function(db, callback) {
  const collection = db.collection("fruits");
  collection.insertMany(
    [
      { name: "Apple", score: 8, review: "Great Fruit" },
      { name: "Orange", score: 7, review: "Sour" },
      { name: "Banana", score: 9, review: "Great Stuff" }
    ],
    function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    }
  );
};
const findDocuments = function(db, callback) {
  const collection = db.collection("fruits");

  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("found the follwoing");
    console.log(docs);
    callback(docs);
  });
};
