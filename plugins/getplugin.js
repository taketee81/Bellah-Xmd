const fs = require("fs")

let handler = async (m, { Bellah,Owner, reply, text, example }) => {
if (!text) return m.reply(example("provide a plugin name"))
if (!text.endsWith(".js")) return m.reply("file name must end with  .js")
if (!fs.existsSync("./plugins/" + text.toLowerCase())) return m.reply("sucess!")
let res = await fs.readFileSync("./plugins/" + text.toLowerCase())
return m.reply(`${res.toString()}`)
}

handler.command = ["getp", "gp", "getplugins", "getplugin"]

module.exports = handler