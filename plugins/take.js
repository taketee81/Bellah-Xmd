const axios = require('axios');
let handler = async (m, { Owner,text,args,Bellah,downloadAndSaveMediaMessage,mime}) => {
  if (!args.join(" ")) return m.reply(`provide a text`)     
                   
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
Bellah.downloadAndSaveMediaMessage(quoted, "gifee")
Bellah.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Bellah.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await Bellah.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
m.reply(`Photo/Video?`)
}
};
handler.help = ['sw']
handler.tags = ['take']
handler.command = ['take']


module.exports = handler