const axios = require("axios");
const googleTTS = require('google-tts-api');

let handler = async (m, { Owner,Bellah,q }) => {

  if (!Owner) return m.reply(mess.owner)
    let target;

    // Jika ada mention
    if (m.mentionedJid && m.mentionedJid.length > 0) {
        target = m.mentionedJid[0];
    } 
    // Jika ada reply ke orang
    else if (m.quoted && m.quoted.sender) {
        target = m.quoted.sender;
    } 
    // Jika input berupa nomor biasa
    else if (q) {
        const nomor = q.replace(/[^0-9]/g, '');
        target = nomor + '@s.whatsapp.net';
    } else {
        return m.reply(`</> Example: .getpp 254xxx / @tag 〽️`);
    }

    try {
        const pp = await Bellah.profilePictureUrl(target, 'image').catch(() => null);
        if (!pp) return m.reply(`</> profile picture is hidden/private.`);
        await Bellah.sendMessage(m.chat, {
            image: { url: pp },
            caption: `</> Success: ${target.split('@')[0]}`
        }, { quoted: m });
    } catch (err) {
        console.log(err);
        m.reply(`</> an error has occurred.`);
    }
};
handler.help = ['getdp']
handler.tags = ['dp']
handler.command = ['getpp']


module.exports=handler;