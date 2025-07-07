const axios = require("axios");
const googleTTS = require('google-tts-api');

let handler = async (m, { text,Bellah }) => {

if (!text) return m.reply("Povide a text for conversion !");

const url = googleTTS.getAudioUrl(text, {
  lang: 'hi-IN',
  slow: false,
  host: 'https://translate.google.com',
});
             Bellah.sendMessage(m.chat, { audio: { url:url},mimetype:'audio/mp4', ptt: true }, { quoted: m });
    };

handler.help = ['tts']
handler.tags = ['say']
handler.command = ['say']


module.exports=handler;