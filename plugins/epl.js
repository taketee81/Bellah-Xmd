const axios = require('axios');
let handler = async (m, {text,fetchJson,Bellah }) => {
        const data = await fetchJson('https://api.dreaded.site/api/standings/PL');
        const standings = data.data;

        const message = `Epl table:-\n\n${standings}`;

        await m.reply(message);
    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗘𝗽𝗹 standings.');
    }

 };

handler.help = ['eplstand']
handler.tags = ['epltable']
handler.command = ['epl']


module.exports = handler;