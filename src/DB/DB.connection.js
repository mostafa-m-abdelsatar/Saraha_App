import mongoose from "mongoose";

let cachedConnection = null;

export default async function DBConnection() {
    console.log(">>> DBConnection CALLED");

    if (cachedConnection && mongoose.connection.readyState === 1) {
        console.log(">>> USING CACHED CONNECTION");
        return cachedConnection;
    }

    try {
        console.log(">>> CONNECTING TO DB");

        cachedConnection = await mongoose.connect(process.env.DB_URI);

        console.log(">>> DB connection DONE");

        return cachedConnection;

    } catch (error) {
        cachedConnection = null;

        console.error(">>> DB connection FAILED:", error);

        throw error;
    }
}