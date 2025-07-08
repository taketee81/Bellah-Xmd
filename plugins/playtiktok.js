const axios = require('axios');
let handler = async (m, { q,Bellah}) => {
  if (!q) return m.reply('provide a query!\nExample: playtiktok haikyuu edit');
  let res = await fetch(`https://apizell.web.id/download/tiktokplay?q=${encodeURIComponent(q)}`);
  let json = await res.json();
  if (!json.status || !json.data || !json.data.length) return m.reply('Video tidak ditemukan.');
  let vid = json.data[0];
  let caption = `*Title:* ${vid.title}
*Author:* ${vid.author}
*Views:* ${vid.views.toLocaleString()}
*Description:* ${vid.desc || '-'}
`;
  await Bellah.sendMessage(m.chat, {
    video: { url: vid.url },
    caption,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        title: vid.title,
        body: `By ${vid.author} • ${vid.views.toLocaleString()} views`,
        mediaType: 1,
        thumbnailUrl: vid.thumbnail,
        mediaUrl: vid.url,
        sourceUrl: vid.url
      }
    }
  }, { quoted: m });
};
handler.help = ['tiktokplau']
handler.tags = ['playtt']
handler.command = ['playtiktok']


module.exports = handler;