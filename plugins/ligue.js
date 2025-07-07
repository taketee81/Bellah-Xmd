const axios = require('axios');
let handler = async (m, {text,fetchJson,Bellah }) => {
        const data = await fetchJson('https://api.dreaded.site/api/standings/FL1');
        const standings = data.data;

        const message = `Ligue 1 table\n\n${standings}`;
        await m.reply(message);

    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗹𝗶𝗴𝘂𝗲-1 standings.');
    }
};
handler.help = ['ligue-one']
handler.tags = ['lig-1']
handler.command = ['ligue-1']


module.exports = handler;