const axios = require('axios');
let handler = async (m, { Bellah}) => {
if (!m.isGroup) return m.reply(mess.group)
let plr = `${m.chat}`
await Bellah.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: plr,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
};
handler.help = ['groupid']
handler.tags = ['gcid']
handler.command = ['getidgc']


module.exports = handler;