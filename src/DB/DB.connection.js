import mongoose from "mongoose";

let cachedConnection = null

export default async function DBConnection() {
    try {
        if (cachedConnection) {
            return cachedConnection;
        }
        cachedConnection = await mongoose.connect(process.env.DB_URI);
        console.log("DB connection DONE");
        return cachedConnection.db
    } catch (error) {
        cachedConnection = null;
        console.error("DB connection failed:", error);
        throw error;
    }
}