const axios = require('axios');
let handler = async (m, { Owner,text,Bellah,participants }) => {
 if (!Owner) return m.reply(mess.owner)
 if (!m.quoted) return m.reply("tag someone") 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; 
 await Bellah.updateBlockStatus(users, 'unblock'); 
 m.reply (`𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!`); 
 };
 
handler.help = ['release']
handler.tags = ['unblock']
handler.command = ['unblock']


module.exports = handler;