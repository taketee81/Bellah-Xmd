const axios = require('axios');
let handler = async (m, {text,fetchJson,Bellah }) => {
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/BL1');
        const standings = data.data;

        const message = `Bundesliga table\n\n${standings}`;
        await m.reply(message);

    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮 standings.');
    }
};

handler.help = ['bundesligatable']
handler.tags = ['bundestands']
handler.command = ['bundesliga']


module.exports = handler;