const axios = require('axios');
 const cheerio = require('cheerio');
let handler = async (m, { args,q,Bellah,loli}) => {
 if (!args[0]) return m.reply("🔗 provide an ig link!");
 try {
 
 async function yt5sIo(url) {
 try {
 const form = new URLSearchParams();
 form.append("q", url);
 form.append("vt", "home");
 const { data } = await axios.post('https://yt5s.io/api/ajaxSearch', form, {
 headers: {
 "Accept": "application/json",
 "X-Requested-With": "XMLHttpRequest",
 "Content-Type": "application/x-www-form-urlencoded",
 },
 });
 if (data.status !== "ok") throw new Error("provide a valid link.");
 const $ = cheerio.load(data.data); 
 if (/^(https?:\/\/)?(www\.)?(facebook\.com|fb\.watch)\/.+/i.test(url)) {
 const thumb = $('img').attr("src");
 let links = [];
 $('table tbody tr').each((_, el) => {
 const quality = $(el).find('.video-quality').text().trim();
 const link = $(el).find('a.download-link-fb').attr("href");
 if (quality && link) links.push({ quality, link });
 });
 if (links.length > 0) {
 return { platform: "facebook", type: "video", thumb, media: links[0].link };
 } else if (thumb) {
 return { platform: "facebook", type: "image", media: thumb };
 } else {
 throw new Error("media is invalid.");
 }
 } else if (/^(https?:\/\/)?(www\.)?(instagram\.com\/(p|reel)\/).+/i.test(url)) {
 const video = $('a[title="Download Video"]').attr("href");
 const image = $('img').attr("src");
 if (video) {
 return { platform: "instagram", type: "video", media: video };
 } else if (image) {
 return { platform: "instagram", type: "image", media: image };
 } else {
 throw new Error("Media tidak ditemukan.");
 }
 } else {
 throw new Error("provide a valid url or link.");
 }
 } catch (error) {
 return { error: error.message };
 }
 }
 await Bellah.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 let res = await yt5sIo(args[0]);
 if (res.error) {
 await Bellah.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 return m.reply(`⚠ *Error:* ${res.error}`);
 }
 if (res.type === "video") {
 await Bellah.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await Bellah.sendMessage(m.chat, { video: { url: res.media }, caption: "✅ *Downloaded by Bellah Xmd!*" }, { quoted: m });
 } else if (res.type === "image") {
 await Bellah.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await Bellah.sendMessage(m.chat, { image: { url: res.media }, caption: "✅ *Downloaded photo by Bellah Xmd!*" }, { quoted: m });
 }
 } catch (error) {
 console.error(error);
 await Bellah.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 m.reply("failed to get media.");
 }
};  
handler.help = ['igdl']
handler.tags = ['insta']
handler.command = ['igdl']


module.exports = handler;