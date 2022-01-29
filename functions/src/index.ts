import * as functions from "firebase-functions";
import express from "express";
import * as bodyParser from "body-parser";
const axios = require("axios");
const downpicbot = require("./downpicbot");

// Config is not pushed to repository due it contains API secrets and keys
import config from './config.json';

const app = express();
app.use(bodyParser.json());

app.post("/", (req: any, res: any) => {
    const route = downpicbot(req.body);
    res.status(200).send({ route });
});

exports.downpicbot = functions.https.onRequest(app);

exports.dailyMood = functions.pubsub.schedule('0 9 * * *').timeZone('Europe/Madrid').onRun((context) => {
    axios.post(
        `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
        {
            chat_id: config.HERMANDAD_CHAT_ID,
            text: "Buenos días compadres, este es el MOOD de hoy: " + config.MOODS[Math.floor(Math.random() * config.MOODS.length)],
        }
    )
    return null;
});

exports.dailyQuote = functions.pubsub.schedule('0 13 * * *').timeZone('Europe/Madrid').onRun((context) => {
    axios.post(
        `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
        {
            chat_id: config.HERMANDAD_CHAT_ID,
            text: "La QUOTE del día: " + config.QUOTES[Math.floor(Math.random() * config.MOODS.length)],
        }
    )
    return null;
});