import * as functions from "firebase-functions";
import express from "express";
import * as bodyParser from "body-parser";

const downpicbot = require("./downpicbot");

const app = express();
app.use(bodyParser.json());

app.post("/", (req: any, res: any) => {
    const route = downpicbot(req.body);
    res.status(200).send({ route });
});

exports.downpicbot = functions.https.onRequest(app);