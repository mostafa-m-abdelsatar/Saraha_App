import app from "../app.js";
import DBConnection from "../src/DB/DB.connection.js";

export default async function handler(req, res) {
    await DBConnection();

    return app(req, res);
}