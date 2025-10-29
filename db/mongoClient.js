import { MongoClient } from "mongodb";

const uri = process.env.DATABASE?.replace(
  "<db_password>",
  process.env.DB_PASSWORD
);
if (!uri)
  throw new Error("❌ Missing DATABASE or DB_PASSWORD environment variables");

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// 👇 export the connected client
export const mongoClient = clientPromise;
