//base by DGXeon
//recode by GIDDY TENNOR 
//YouTube: @GIDDYTENNOR


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'Bellah~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VGTzBiejNjbXFDMnVvMUN3eEtDNStnVGdEei9DRWE5MlljS1R3SklHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHFpZmF2Qm5rRFYwOENQZzVCUC9UNkRjM2xjSGFycVl2M3h4c2RZSnd4Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTEJOTkpoZ2N2WFExaTFhUFZIY0FuZFJubHAyUjJ1Qmg1L1FHNkhOem1FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTTNHMEsxTzBkdTB6SnYrZGFDaE02d2dUQjdza1I1ZWNhbUlVWmZCWHpvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVEUEVQMmJUWTFTdlJIS2hBdXkwcitRZllOa1drNUNBdGlsK3JLUEN1SEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdCTkNSa3hPRjJIbVhEWFdQR1IzNXM1UUJtMXluam1EYU9TSjZWTnIwR009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid01FdGxZTklhSVFiSysxYzlyMkxEaTBhTVNSM3lpZEQ0aGVDV0o3QVpsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0xHN0p6N2JZT2tEcXpHM0hjVitMR1BGbTUxalhabU1sU082elBtNDFCTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZuWEdHTXVNZWpUTTlFdTFUV2V0SWdwdFJyYUd3anpOYWVPL2VmQzl1akRCbzdKWkVEOWhqbmFxdDNLYzZHRjd1T1IrbjFZcUpFZHhMUytOT0VYd0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6ImxNTFg3bFUwUnNobFdRWnFvY04wbWQzdTkxQVk4SUl4NnFKMXNra2FMZE09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ilh1UFlta2RMU3QtQmdGSmxKM1VPdFEiLCJwaG9uZUlkIjoiNDY2NTNiMzYtZjdjMS00NDZmLWE1YzAtNGFjMjk5MjIwMWQ2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdqY2p0TnlJYWQ1Y254UTNIY2luR281WUNHWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRlRwdnBnY1lGanB6NExkWlowa3dPTmh2UVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN1JSQlFCNjgiLCJtZSI6eyJpZCI6IjIzMjc0NDQ4MTMwOjdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tDbzhWTVE0TitMd1FZWUJTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5Ub2c3cDhwc0VaaU5pTHIzbGpMMWdpWi9OQjZlWmluaEtTOU9pT3FSaW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFwajdGMXJ3bDJUZTdLYmNYcWU0SjM1NFRLZHJyWXpCdzBWQmpUOCtvaDdvZmovY1N3M2xHelp0SkhlRDkwN2pZeGhuY2NnSmQ1WTJtZ2c3SnB6Y0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWVzhEZlJWRC9aaFcyK3lwM21lSlBLc1NhS25UWENaYTFCK0hqWmtPeG00cUpEbWtBeEkvQWtGY2pmYzlwaXhVOGlwcGx0bzFhK0wvdWJlZk1KTHVBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMjc0NDQ4MTMwOjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFU2SU82ZktiQkdZallpNjk1WXk5WUltZnpRZW5tWXA0U2t2VG9qcWtZcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NzEyMDEwOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQbEIifQ=='
//owmner v card
global.ytname = "YT: GIDDYTENNOR" //ur yt chanel name
global.socialm = "IG: @GIDDYTENNOR" //ur github or insta name
global.location = "Kenya" //ur location

//new
global.botname = process.env.BOT_NAME ||'𝐁𝐞𝐥𝐥𝐚𝐡 𝐗𝐦𝐝' //enter your  bot name here
global.ownernumber = process.env.OWNER_NUMBER ||'23274448130' //ur owner number
global.ownername = 'TAKE TEE' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.wagc = "https://chat.whatsapp.com/CzFlFQrkdzxFw0pxCBYM7H" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.themeemoji = '🪀'
global.wm = "TAKE TEE"
global.botscript = 'https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D' //'https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES' //script link
global.packname = process.env.PACK_NAME ||"VolTah Xmd" //enter your stickers author name here
global.author = "Take_tee"
global.creator = "23274448130@s.whatsapp.net"
global.xprefix = process.env.BOT_PREFIX ||'.'
global.hituet = 0

//bot settings 
global.autoblocknumber = process.env.AUTOBLOCK_NUMBER || '263,234' //set autoblock country code
global.antiforeignnumber = process.env.ANTIFOREIGN_NUMBER || '' //set anti foreign number country code
global.mode = process.env.MODE || 'public' //set bot public/private
const antilinkgc = process.env.ANTILINK_GC || 'TRUE';
global.anticall = process.env.ANTI_CALL || 'false' //bot blocks user when called
global.autostatusview = process.env.AUTOSW_VIEW || 'true' //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = process.env.GROUP_EVENT || 'false' //show update messages in group chat
//msg
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;

global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	owner: 'Bellah Xmd owner only<\>',
    admin: 'Bot is not admin<\>',
    group: 'feature for group only<\>',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
