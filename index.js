import path from "node:path"
import dotenv from "dotenv"
dotenv.config({path:path.resolve("./src/config/.env.prod")})
import DBConnection from "./src/DB/DB.connection.js";
import app from "./app.js";
const port = process.env.PORT || 1206;

await DBConnection()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
export default app