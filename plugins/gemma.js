const axios = require('axios');
let handler = async (m, {command, text,Bellah }) => {
  if (!text) {
    await Bellah.sendMessage(m.chat, { text: 'Example: .gemma you good?' }, { quoted: m })
   
  }

  await Bellah.sendMessage(m.chat, { react: { text: '💡', key: m.key } })

  try {
    const res = await fetch(`https://www.velyn.biz.id/api/ai/gemma-2-9b-it?prompt=${encodeURIComponent(text)}`)
    if (res.ok) {
      const json = await res.json()
      if (json.status) {
        await Bellah.sendMessage(m.chat, { text: json.data }, { quoted: m })
        await Bellah.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
      } else {
        await Bellah.sendMessage(m.chat, { text: 'Gagal mendapatkan data dari API.' }, { quoted: m })
        await Bellah.sendMessage(m.chat, { react: { text: '🚨', key: m.key } })
      }
    } else {
      await Bellah.sendMessage(m.chat, { text: `Status error: ${res.status}` }, { quoted: m })
      await Bellah.sendMessage(m.chat, { react: { text: '🚨', key: m.key } })
    }
  } catch (e) {
    await Bellah.sendMessage(m.chat, { text: 'an error has occurred.' }, { quoted: m })
    await Bellah.sendMessage(m.chat, { react: { text: '🚨', key: m.key } })
    console.error(e)
  }
};
handler.help = ['gemmachat']
handler.tags = ['gemmagpt']
handler.command = ['gemma']


module.exports = handler;