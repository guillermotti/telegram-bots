const axios = require("axios");
const nodeFetch = require('node-fetch');
const randomWords = require('random-words');
import { createApi } from 'unsplash-js';

// Config is not pushed to repository due it contains API secrets and keys
import config from './config.json';

module.exports = (downpicbot: { message: any }) => {
    // Each message contains "text" and a "chat" object, which has an "id" which is the chat id
    if (downpicbot.message && downpicbot.message.text) {
        if (downpicbot.message.text.toLowerCase().includes("marco")) {
            // In case a message is not present, or if our message does not have the word marco in it, do nothing and return an empty response
            axios.post(
                `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
                {
                    chat_id: downpicbot.message.chat.id,
                    text: "Polo!!",
                }
            )
        } else if (downpicbot.message.text.toLowerCase().includes("beef")) {
            const people = config.PEOPLE;
            const beef = config.BEEF;
            axios.post(
                `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
                {
                    chat_id: downpicbot.message.chat.id,
                    text: `${people[Math.floor(Math.random() * people.length)]} ${beef[Math.floor(Math.random() * beef.length)]}!!`,
                }
            )
        } else if (downpicbot.message.text.toLowerCase().includes("image")) {
            const unsplash = createApi({
                accessKey: config.ACCESS_KEY_UNSPLASH,
                fetch: nodeFetch,
            });
            unsplash.photos.getRandom({}).then((result: any) => {
                axios.post(
                    `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendPhoto`,
                    {
                        chat_id: downpicbot.message.chat.id,
                        photo: result.response.urls.full,
                    }
                )
            });
        } else if (downpicbot.message.text.toLowerCase().includes("video")) {
            const word = randomWords();
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=none&maxResults=1&q=${word}&order=date&type=video&key=${config.GCLOUD_API_KEY}`;
            axios.get(url).then((result: any) => {
                axios.post(
                    `https://api.telegram.org/bot${config.API_TOKEN_TELEGRAM}/sendMessage`,
                    {
                        chat_id: downpicbot.message.chat.id,
                        text: `https://www.youtube.com/watch?v=${result.data.items[0].id.videoId}`,
                    }
                )
            });
        }
    }
    return ""
};
