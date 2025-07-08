const axios = require('axios');
let handler = async (m, {Bellah}) => {
m.reply(`VolTah Xmd

Status Bot : *Online*✅
Developer : *Giddy Tennor*
Mode Bot : *${Bellah.public ? "Public" : "Self"}*
`)
    buttons: [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "Copy Full Code!",
copy_code: "PutraGanteng",
}),
},
]
};
handler.help = ['tes']
handler.tags = ['status']
handler.command = ['bot']


module.exports = handler;