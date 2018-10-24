const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'portfoliyo';
const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect((err) => {
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const insertDocuments = (db, callback) => {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      { name: 'fenil' }, { age: 25, height: 4 }, { sex: 'male' }
    ], (err, result) => {

      console.log("Inserted 3 documents into the collection");
      console.log(JSON.stringify(result.ops, undefined, 2));
      callback(result);
    });
  }
  insertDocuments(db, () => {
    // indexCollection(db, function() {
    client.close();

  });
});