const axios = require('axios');
let handler = async (m, {text,fetchJson,Bellah }) => {
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/SA');
        const standings = data.data;

        const message = `Serie A table\n\n${standings}`;
        await m.reply(message);

    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗦𝗲𝗿𝗶𝗲-𝗮 standings.');
    }
};

handler.help = ['sa-table']
handler.tags = ['sa']
handler.command = ['serie-a']


module.exports = handler;