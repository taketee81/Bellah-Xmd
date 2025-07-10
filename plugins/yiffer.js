const axios = require("axios");
 
let handler = async (m, { text,Bellah }) => {
  if (!text) return m.reply('where is the title?');
  async function Search(q) {
    const { data } = await axios.get('https://r.jina.ai/https://yiffer.xyz/browse?search=' + q, {
      headers: {
        'x-return-format': 'html'
      }
    });
    const $ = cheerio.load(data);
    const list = [];
    $('div.pb-6 > div.flex-row > div.rounded').each((i, e) => {
      let obj = {};
      obj.link = 'https://yiffer.xyz' + $(e).find('div.text-center > div.leading-5 > p > a').attr('href');
      obj.title = $(e).find('div.text-center > div.leading-5 > p > a').text().trim();
      obj.artist = $(e).find('div.text-center > p.leading-none > a').text().trim();
      obj.sextype = $(e).find('div.rounded-b-none').text().trim();
      obj.cover = $(e).find('a > img').attr('src');
      list.push(obj);
    });
    return list;
  }

  let query = text.trim();
  let results = await Search(query);
  if (!results || results.length === 0) return m.reply('invalid query.');

  // Gabungkan hasil menjadi satu pesan jika ada gambar dan keterangan.
  let pesan = 'Here are the results:\n';
  results.forEach((item, index) => {
    pesan += `\n[${index + 1}] Title: ${item.title}\nArtis: ${item.artist}\nArtist: ${item.sextype}\nLink: ${item.link}\n`;
  });

  // Ambil cover dari hasil pertama untuk mengirim gambar dan teks sekaligus.
  let coverImage = results[0].cover;
  if (coverImage) {
    Bellah.sendMessage(m.chat, {
      image: { url: coverImage },
      caption: pesan
    });
  } else {
    m.reply(pesan);
  }
};    
handler.help = ['yiffersearch']
handler.tags = ['yiffsearch']
handler.command = ['yiffersearch']
 
module.exports = handler;
