const axios = require('axios');
let handler = async (m, { Owner,args,isBotAdmins,Bellah,isAdmins }) => {
               if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply("bot must be an admin in this group")
if (!isAdmins && !Owner) return m.reply("you are not an admin to use this command")
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  m.reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  m.reply(`${command} is disabled`)
               }
            };
handler.help = ['antilinkgc']
handler.tags = ['antilinkgc']
handler.command = ['antilinkgc']


module.exports = handler;