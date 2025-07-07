const axios = require('axios');
let handler = async (m, { text,fetchJson }) => {
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/PD');
        const standings = data.data;

        const message = `Laliga table as it stands:-\n\n${standings}`;
        await m.reply(message);

    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗟𝗮𝗹𝗶𝗴𝗮 standings.');
  }
};


handler.help = ['laligastands']
handler.tags = ['laligatable']
handler.command = ['laliga']


module.exports = handler;