const axios = require('axios');
let handler = async (m, {command, text,Bellah }) => {
  if (!text || !text.includes('|')) {
    return m.reply(`format invalid "|"\nExample: *.${command} Tennor|XD*`)
  }

  let [text1, text2] = text.split('|').map(t => t.trim())
  if (!text1 || !text2) return m.reply('provide a valid text!')

  try {
    const apiUrl = `https://apikey.sazxofficial.web.id/api/imagecreator/pornhub?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
    const res = await fetch(apiUrl)
    const json = await res.json()

    if (!json.status) return m.reply('sorry our api might down for now.')

    await Bellah.sendMessage(m.chat, {
      image: { url: json.result },
      caption: `✅ *Sucess create logo*\n\n• *Text1:* ${text1}\n• *Text2:* ${text2}`,
      contextInfo: {
        externalAdReply: {
          title: "Pornhub Logo Generator",
          body: "Powered By VolTah Xmd",
          thumbnailUrl: json.result,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: json.result
        }
      }
    }, { quoted: m })

  } catch (e) {
    m.reply('an error has occurred.')
    console.error(e)
  }
};
handler.help = ['ponlogo']
handler.tags = ['pornlogo']
handler.command = ['phlogo']


module.exports = handler;