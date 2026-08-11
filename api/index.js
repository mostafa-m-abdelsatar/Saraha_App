import app from "../app.js";
import DBConnection from "../src/DB/DB.connection.js";

export default async function handler(req, res) {
    console.log(">>> API HANDLER START");

    await DBConnection();

    console.log(">>> DB CONNECTION FINISHED");
    return app(req, res);
}