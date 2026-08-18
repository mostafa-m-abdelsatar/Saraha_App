import mongoose from "mongoose";

let cachedConnection = null;

export default async function DBConnection() {
    if (cachedConnection && mongoose.connection.readyState === 1) {
        console.log(">>> USING CACHED CONNECTION");
        return cachedConnection;
    }

    try {
        cachedConnection = await mongoose.connect(process.env.DB_URI);

        console.log(">>> DB connection DONE");

        return cachedConnection;

    } catch (error) {
        cachedConnection = null;

        console.error(">>> DB connection FAILED:", error);

        throw error;
    }
}