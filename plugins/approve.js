const axios = require('axios');
let handler = async (m, { Owner,text,Bellah,participants,isAdmins,isBotAdmins }) => {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply("this feature is only for group admins")
if (!isBotAdmins) return m.reply("bot must be admin idiot")

const responseList = await Bellah.groupRequestParticipantsList(m.chat);

if (responseList.length === 0) return m.reply("no pending requests detected at the moment!");

for (const participan of responseList) {
    const response = await Bellah.groupRequestParticipantsUpdate(
        m.chat, 
        [participan.jid], // Approve/reject each participant individually
        "approve" // or "reject"
    );
    console.log(response);
}
m.reply("VolTah Xmd has approved all pending requests✅");

             } ;

handler.help = ['approve']
handler.tags = ['approve-all']
handler.command = ['approve']


module.exports = handler;