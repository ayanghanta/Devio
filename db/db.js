import mongoose from "mongoose";

global.mongoose = global.mongoose || { conn: null, promise: null };

const DB_CONNECTION = process.env.DATABASE?.replace(
  "<db_password>",
  process.env.DB_PASSWORD
);

if (!DB_CONNECTION) {
  throw new Error("Missing DATABASE or DB_PASSWORD environment variables");
}

export async function dbConnect() {
  try {
    if (global.mongoose.conn?.readyState === 1) {
      // console.log("Reusing existing database connection");
      return global.mongoose.conn;
    }

    const connPromise = mongoose.connect(DB_CONNECTION, {
      autoIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    global.mongoose = {
      conn: await connPromise,
      promise: connPromise,
    };

    // console.log("Newly connected to the database");
    return global.mongoose.conn;
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    throw new Error("Database connection failed");
  }
}

export const disconnect = async () => {
  if (global.mongoose.conn?.readyState === 1) {
    await mongoose.disconnect();
    global.mongoose.conn = null;
    // console.log("Disconnected from the database");
  }
};
