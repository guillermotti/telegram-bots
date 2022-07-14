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

// exports.dailyMood = functions.pubsub.schedule('0 9 * * *').timeZone('Europe/Madrid').onRun((context) => {
//     axios.post(
//         `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
//         {
//             chat_id: config.HERMANDAD_CHAT_ID,
//             text: "Buenos días compadres, este es el MOOD de hoy: " + config.MOODS[Math.floor(Math.random() * config.MOODS.length)],
//         }
//     )
//     return null;
// });

// exports.dailyQuote = functions.pubsub.schedule('0 13 * * *').timeZone('Europe/Madrid').onRun((context) => {
//     axios.post(
//         `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
//         {
//             chat_id: config.HERMANDAD_CHAT_ID,
//             text: "La QUOTE del día: " + config.QUOTES[Math.floor(Math.random() * config.QUOTES.length)],
//         }
//     )
//     return null;
// });

exports.diegoBirthday = functions.pubsub.schedule('0 0 17 1 *').timeZone('Europe/Madrid').onRun((context) => {
    const today = new Date();
    const birthDate = new Date('1992/01/17');
    var age = today.getFullYear() - birthDate.getFullYear();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&maxResults=1&q=birthdayhappy&order=date&type=video&key=${config.GCLOUD_API_KEY}`;
    axios.get(url).then((result: any) => {
        axios.post(
            `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
            {
                chat_id: config.HERMANDAD_CHAT_ID,
                text: `🎉 Felicitaciones Dieguinos 🎉. Hoy cumples ${age} años, ${age * 365} días, ${age * 365 * 24} horas o ${age * 365 * 24 * 60} minutos, escoge la cifra que más te guste 🥳. ¡Enhorabuena, que tengas un buen día! 🎂 Disfruta del siguiente vídeo: https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
            }
        )
    });
    return null;
});

exports.bertinosBirthday = functions.pubsub.schedule('0 0 18 1 *').timeZone('Europe/Madrid').onRun((context) => {
    const today = new Date();
    const birthDate = new Date('1992/01/18');
    var age = today.getFullYear() - birthDate.getFullYear();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&maxResults=1&q=birthdayhappy&order=date&type=video&key=${config.GCLOUD_API_KEY}`;
    axios.get(url).then((result: any) => {
        axios.post(
            `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
            {
                chat_id: config.HERMANDAD_CHAT_ID,
                text: `🎉 Felicitaciones Bertinos 🎉. Hoy cumples ${age} años, ${age * 365} días, ${age * 365 * 24} horas o ${age * 365 * 24 * 60} minutos, escoge la cifra que más te guste 🥳. ¡Enhorabuena, que tengas un buen día! 🎂 Disfruta del siguiente vídeo: https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
            }
        )
    });
    return null;
});

exports.bufaBirthday = functions.pubsub.schedule('0 0 14 2 *').timeZone('Europe/Madrid').onRun((context) => {
    const today = new Date();
    const birthDate = new Date('1992/02/14');
    var age = today.getFullYear() - birthDate.getFullYear();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&maxResults=1&q=happybirthday&order=date&type=video&key=${config.GCLOUD_API_KEY}`;
    axios.get(url).then((result: any) => {
        axios.post(
            `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
            {
                chat_id: config.HERMANDAD_CHAT_ID,
                text: `🎉 Felicitaciones Peibol 🎉. Hoy cumples ${age} años, ${age * 365} días, ${age * 365 * 24} horas o ${age * 365 * 24 * 60} minutos, escoge la cifra que más te guste 🥳. ¡Enhorabuena, que tengas un buen día! 🎂 Disfruta del siguiente vídeo: https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
            }
        )
    });
    return null;
});

exports.roberBirthday = functions.pubsub.schedule('0 0 14 3 *').timeZone('Europe/Madrid').onRun((context) => {
    const today = new Date();
    const birthDate = new Date('1992/03/14');
    var age = today.getFullYear() - birthDate.getFullYear();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&maxResults=1&q=birthday&order=date&type=video&key=${config.GCLOUD_API_KEY}`;
    axios.get(url).then((result: any) => {
        axios.post(
            `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
            {
                chat_id: config.HERMANDAD_CHAT_ID,
                text: `🎉 Felicitaciones Roberto Leonardo 🎉. Hoy cumples ${age} años, ${age * 365} días, ${age * 365 * 24} horas o ${age * 365 * 24 * 60} minutos, escoge la cifra que más te guste 🥳. ¡Enhorabuena, que tengas un buen día! 🎂 Disfruta del siguiente vídeo: https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
            }
        )
    });
    return null;
});

exports.brunoBirthday = functions.pubsub.schedule('0 0 25 3 *').timeZone('Europe/Madrid').onRun((context) => {
    const today = new Date();
    const birthDate = new Date('1992/03/25');
    var age = today.getFullYear() - birthDate.getFullYear();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&maxResults=1&q=birthdayhappy&order=date&type=video&key=${config.GCLOUD_API_KEY}`;
    axios.get(url).then((result: any) => {
        axios.post(
            `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
            {
                chat_id: config.HERMANDAD_CHAT_ID,
                text: `🎉 Felicitaciones Bruneleski 🎉. Hoy cumples ${age} años, ${age * 365} días, ${age * 365 * 24} horas o ${age * 365 * 24 * 60} minutos, escoge la cifra que más te guste 🥳. ¡Enhorabuena, que tengas un buen día! 🎂 Disfruta del siguiente vídeo: https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
            }
        )
    });
    return null;
});

exports.castaBirthday = functions.pubsub.schedule('0 0 24 4 *').timeZone('Europe/Madrid').onRun((context) => {
    const today = new Date();
    const birthDate = new Date('1990/04/24');
    var age = today.getFullYear() - birthDate.getFullYear();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&maxResults=1&q=birthdayhappy&order=date&type=video&key=${config.GCLOUD_API_KEY}`;
    axios.get(url).then((result: any) => {
        axios.post(
            `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
            {
                chat_id: config.HERMANDAD_CHAT_ID,
                text: `🎉 Felicitaciones Castañes 🎉. Hoy cumples ${age} años, ${age * 365} días, ${age * 365 * 24} horas o ${age * 365 * 24 * 60} minutos, escoge la cifra que más te guste 🥳. ¡Enhorabuena, que tengas un buen día! 🎂 Disfruta del siguiente vídeo: https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
            }
        )
    });
    return null;
});

exports.navesBirthday = functions.pubsub.schedule('0 0 28 5 *').timeZone('Europe/Madrid').onRun((context) => {
    const today = new Date();
    const birthDate = new Date('1992/05/28');
    var age = today.getFullYear() - birthDate.getFullYear();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&maxResults=1&q=birthdayhappy&order=date&type=video&key=${config.GCLOUD_API_KEY}`;
    axios.get(url).then((result: any) => {
        axios.post(
            `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
            {
                chat_id: config.HERMANDAD_CHAT_ID,
                text: `🎉 Felicitaciones Navitos 🎉. Hoy cumples ${age} años, ${age * 365} días, ${age * 365 * 24} horas o ${age * 365 * 24 * 60} minutos, escoge la cifra que más te guste 🥳. ¡Enhorabuena, que tengas un buen día! 🎂 Disfruta del siguiente vídeo: https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
            }
        )
    });
    return null;
});

exports.arguBirthday = functions.pubsub.schedule('0 22 14 7 *').timeZone('Europe/Madrid').onRun((context) => {
    const today = new Date();
    const birthDate = new Date('1992/07/15');
    var age = today.getFullYear() - birthDate.getFullYear();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&maxResults=1&q=birthdayhappy&order=date&type=video&key=${config.GCLOUD_API_KEY}`;
    axios.get(url).then((result: any) => {
        axios.post(
            `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
            {
                chat_id: config.HERMANDAD_CHAT_ID,
                text: `🎉 Felicitaciones Argoils 🎉. Hoy cumples ${age} años, ${age * 365} días, ${age * 365 * 24} horas o ${age * 365 * 24 * 60} minutos, escoge la cifra que más te guste 🥳. ¡Enhorabuena, que tengas un buen día! 🎂 Disfruta del siguiente vídeo: https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
            }
        )
    });
    return null;
});


exports.vityBirthday = functions.pubsub.schedule('0 0 15 8 *').timeZone('Europe/Madrid').onRun((context) => {
    const today = new Date();
    const birthDate = new Date('1992/08/14');
    var age = today.getFullYear() - birthDate.getFullYear();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&maxResults=1&q=birthdayhappy&order=date&type=video&key=${config.GCLOUD_API_KEY}`;
    axios.get(url).then((result: any) => {
        axios.post(
            `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
            {
                chat_id: config.HERMANDAD_CHAT_ID,
                text: `🎉 Felicitaciones Vitor 🎉. Hoy cumples ${age} años, ${age * 365} días, ${age * 365 * 24} horas o ${age * 365 * 24 * 60} minutos, escoge la cifra que más te guste 🥳. ¡Enhorabuena, que tengas un buen día! 🎂 Disfruta del siguiente vídeo: https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
            }
        )
    });
    return null;
});


exports.penaBirthday = functions.pubsub.schedule('0 0 4 10 *').timeZone('Europe/Madrid').onRun((context) => {
    const today = new Date();
    const birthDate = new Date('1991/10/04');
    var age = today.getFullYear() - birthDate.getFullYear();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&maxResults=1&q=birthdayhappy&order=date&type=video&key=${config.GCLOUD_API_KEY}`;
    axios.get(url).then((result: any) => {
        axios.post(
            `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
            {
                chat_id: config.HERMANDAD_CHAT_ID,
                text: `🎉 Felicitaciones Peñita 🎉. Hoy cumples ${age} años, ${age * 365} días, ${age * 365 * 24} horas o ${age * 365 * 24 * 60} minutos, escoge la cifra que más te guste 🥳. ¡Enhorabuena, que tengas un buen día! 🎂 Disfruta del siguiente vídeo: https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
            }
        )
    });
    return null;
});


exports.didiBirthday = functions.pubsub.schedule('0 0 30 10 *').timeZone('Europe/Madrid').onRun((context) => {
    const today = new Date();
    const birthDate = new Date('1992/10/30');
    var age = today.getFullYear() - birthDate.getFullYear();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&maxResults=1&q=birthdayhappy&order=date&type=video&key=${config.GCLOUD_API_KEY}`;
    axios.get(url).then((result: any) => {
        axios.post(
            `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
            {
                chat_id: config.HERMANDAD_CHAT_ID,
                text: `🎉 Felicitaciones Navitos 🎉. Hoy cumples ${age} años, ${age * 365} días, ${age * 365 * 24} horas o ${age * 365 * 24 * 60} minutos, escoge la cifra que más te guste 🥳. ¡Enhorabuena, que tengas un buen día! 🎂 Disfruta del siguiente vídeo: https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
            }
        )
    });
    return null;
});


exports.guilleBirthday = functions.pubsub.schedule('0 0 5 12 *').timeZone('Europe/Madrid').onRun((context) => {
    const today = new Date();
    const birthDate = new Date('1992/12/05');
    var age = today.getFullYear() - birthDate.getFullYear();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&maxResults=1&q=birthdayhappy&order=date&type=video&key=${config.GCLOUD_API_KEY}`;
    axios.get(url).then((result: any) => {
        axios.post(
            `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
            {
                chat_id: config.HERMANDAD_CHAT_ID,
                text: `🎉 Felicitaciones Guille 🎉. Hoy cumples ${age} años, ${age * 365} días, ${age * 365 * 24} horas o ${age * 365 * 24 * 60} minutos, escoge la cifra que más te guste 🥳. ¡Enhorabuena, que tengas un buen día! 🎂 Disfruta del siguiente vídeo: https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
            }
        )
    });
    return null;
});