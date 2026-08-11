import path from "node:path"
import dotenv from "dotenv"
console.log(process.env.MOOD);
if (process.env.MOOD != "PROD"){
    dotenv.config({path:path.resolve("./src/config/.env.prod")})
}
import express from "express"
import bootstrap from "./src/app.controller.js"
import DBConnection from "./src/DB/DB.connection.js";
const app = express()
const port = process.env.PORT || 1206;

await DBConnection()
bootstrap(app, express)


if (process.env.MOOD != "PROD"){
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

export default app