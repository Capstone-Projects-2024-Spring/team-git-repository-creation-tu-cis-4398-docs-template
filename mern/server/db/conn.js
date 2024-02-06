const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db);
 
var _db;
 
async function connectToServer() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB.");
    // Set the database you want to work with
    _db = client.db("speakeasycluster");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
}

module.exports = { connectToServer, getDb: () => _db };
