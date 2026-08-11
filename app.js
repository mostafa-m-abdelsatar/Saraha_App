import express from "express";
import bootstrap from "./src/app.controller.js";

console.log(">>> APP.JS LOADED");

const app = express();

bootstrap(app, express);

export default app;