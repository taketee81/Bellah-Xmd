const axios = require('axios');
let handler = async (m, { text}) => {
  if (!text) return m.reply('Provide a question, Example : gpt3 who is Messi');
  try {
    let { data } = await axios.get('https://www.abella.icu/alenaai?q=' + encodeURIComponent(text));
    if (data?.data?.answer) {
      m.reply(data.data.answer);
    } else {
      m.reply('failed to get answer');
    }
  } catch (e) {
    m.reply('Error');
  }
};
handler.help = ['gpt3']
handler.tags = ['chatgpt3']
handler.command = ['gpt3']


module.exports = handler;