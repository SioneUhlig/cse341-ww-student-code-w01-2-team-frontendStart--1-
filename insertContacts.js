require('dotenv').config();
const { MongoClient } = require('mongodb');

const sampleContacts = [
  {
    firstName: "Sione",
    lastName: "Uhlig",
    username: "Usione",
    favoriteColor: "blue",
    
  },
  {
    firstName: "Jane",
    lastName: "Walz",
    email: "Jwalz",
    favoriteColor: "green",
    
  },
  {
    firstName: "Bob",
    lastName: "Miller",
    email: "Mbob",
    favoriteColor: "red",
  }
];

async function insertContacts() {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    const db = client.db();
    
    const result = await db.collection('contacts').insertMany(sampleContacts);
    console.log(`${result.insertedCount} contacts inserted successfully!`);
    
    await client.close();
  } catch (err) {
    console.error('Error inserting contacts:', err);
  }
}

insertContacts();