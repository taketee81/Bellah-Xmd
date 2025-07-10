const axios = require("axios");
const fetch = require('node-fetch')
let handler = async (m, { text,Bellah }) => {
      if (!text) return m.reply('Example: .apk search Mobile Legends')
      try {
        let res = await fetch(`https://www.velyn.biz.id/api/search/apk4freesearch?query=${encodeURIComponent(text)}`)
        let data = await res.json()
        if (!data.status || !data.result || data.result.length === 0) return m.reply('provide a valid query.')
        let teks = `*Apk Details :* ${text}\n\n`
        for (let i = 0; i < data.result.length; i++) {
          let apk = data.result[i]
          teks += `*${i + 1}. ${apk.title || '-'}*\n`
          teks += `Developer: ${apk.developer || '-'}\n`
          teks += `Versi: ${apk.version || '-'}\n`
          teks += `Rating: ${apk.rating || '-'}\n`
          teks += `Link: ${apk.link || '-'}\n\n`
        }
        let thumb = data.result[0].image || null
        Bellah.sendMessage(m.chat, {
          image: { url: thumb },
          caption: teks,
        }, { quoted: m })
      } catch (e) {
        console.error(e)
        m.reply('an error has occurred while fetching the apk.')
      }
    };
      
handler.help = ['apk2']
handler.tags = ['apk2']
handler.command = ['apk2']
 
module.exports = handler;