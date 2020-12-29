
const { MongoClient } = require("mongodb");
// Replace the following with your Atlas connection string                                                                                                                                        
require('dotenv').config({path : '../.env'});
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@testcluster.s4hn4.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const client = new MongoClient(url, {useUnifiedTopology: true});
const dbName = "testDb"
async function run() {
    try {
        console.log(process.env.DB_USERNAME,process.env.DB_PASS)
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        // Use the collection "people"
        const col = db.collection("people");
        // Construct a document                                                                                                                                                              
        let personDocument = {
            "name": { "first": "MYname", "last": "Turing" },
            "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
            "death": new Date(1954, 5, 7),  // June 7, 1954                                                                                                                                  
            "contribs": [ "bran new", "Turing", "somethin" ],
            "views": 125
        }
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(personDocument);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);