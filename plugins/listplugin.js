const fs = require("fs")
const path = require('path');

let handler = async (m, { Bellah, text, reply, example }) => {
let dir = fs.readdirSync('./plugins')
if (dir.length < 1) return m.reply("no files in the plugins")
let teks = "\n"
for (let e of dir) {
teks += `* ${e}\n`
}
m.reply(teks)
}

handler.command = ["listplugin", "listplugins"]

module.exports = handler