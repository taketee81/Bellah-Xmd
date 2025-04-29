//base by DGXeon
//recode by GIDDY TENNOR 
//YouTube: @GIDDYTENNOR


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'Bellah~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VDSkg4ZnprNlExak5yVzIzZ0lOYjNpZDBwSk0wQTVpak54em04dDMwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkdiWGxrb0M4djR3ZVBmWnFjQllEYTF3eDQ5cklnbzlvLy9aUXVMNldrRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTjJsaW52ajNjSTZrU3pMQUdrTThtRzlWNEVwK2FXaitVUDVCdURrdlZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqQVNGbWg3YzNNSVlBRVVGa3FPU282REYvNENEa3hNTjV6TGF1R3dEUEN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPSGlCNVhrdG5kYlBjZTArNStDVk44R3ozd0ZDOXJtYTAvcjNMRkJOMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNmNnJXd3hvR2I4aUwreHZlSUV4MWRhY3pqTUo5SWpPcDhSQmRBTjRPQ0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJTNEVWckhvdGF5M0o0dnhzR2N2M3d0Qy9MSStBVUJsZzVDcmwzS1ZsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTNYK2M3ZGxtdkNveEp0ODZ2Sy8rdWQ4WUZ2WkNUY1ozVU5pcUZWR3QwST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5QZ2M0amcvKzZvNmlraFlYeEs1NWZjNGEybXp0ZFVsVG1kTUNzREx3UjFWdDZRb0xZdDE1Vlhya0xqbVd0UUZicmlrVncwSmRXN0tSNVl6QkVnb2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6IlJJWFV4TDZGcTFvck9yaUI3ZmwrUzFXeW1oZVFQd0dJUVJiUVFRUWZqNHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFGYVhMci1hUUltcm4wYmJFYnpwNXciLCJwaG9uZUlkIjoiYjFiNmJmNjctNDUwNi00NTkxLWFkNzctYjhiMzNkOTFlMDYwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktUbEp3ZW1YZG4rNTFvZnR1WHk5bURXOUVtTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpa2tNOWI0VTQ5WXhVRWJTYnBuOHBHanoyaTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUU1HUDdRMUsiLCJtZSI6eyJpZCI6IjIzMjc0NDQ4MTMwOjZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tDbzhWTVFwZVhFd0FZWUJDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5Ub2c3cDhwc0VaaU5pTHIzbGpMMWdpWi9OQjZlWmluaEtTOU9pT3FSaW89IiwiYWNjb3VudFNpZ25hdHVyZSI6InZXcVAxVjlWVDVtMkpVcHI0TTVKN21tQ0hXVzlPdVFaYkNxcFU3Um04YjhYQi9oUTIzOGRtYis3bTloS3dKaU53TUh6SjkxNXFBMmlmK2FZQ0pHVkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3d3lQanNmZ3ZmY0tZc3RWMTErSkJiYlBIOVpheXVkK1h6M0ZMYzQ0SnF1RnVGYVZGenF5REd0bWE2SEJYQlhBNDBPckNzSk9oRUlSUlhnM1hnS0dpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMjc0NDQ4MTMwOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFU2SU82ZktiQkdZallpNjk1WXk5WUltZnpRZW5tWXA0U2t2VG9qcWtZcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTk1NzU1NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQbEIifQ==' 
//owmner v card
global.ytname = "YT: GIDDYTENNOR" //ur yt chanel name
global.socialm = "IG: @GIDDYTENNOR" //ur github or insta name
global.location = "Kenya" //ur location

//new
global.botname = process.env.BOT_NAME ||'𝐁𝐞𝐥𝐥𝐚𝐡 𝐗𝐦𝐝' //enter your  bot name here
global.ownernumber = process.env.OWNER_NUMBER ||'23274448130' //ur owner number
global.ownername = 'mr Take Tee' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.wagc = "https://chat.whatsapp.com/CzFlFQrkdzxFw0pxCBYM7H" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.themeemoji = '🪀'
global.wm = "GIDDY TENNOR"
global.botscript = 'https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D' //'https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES' //script link
global.packname = process.env.PACK_NAME ||"VolTah Xmd" //enter your stickers author name here
global.author = "Giddy-Tennor"
global.creator = "254703726139@s.whatsapp.net"
global.xprefix = process.env.BOT_PREFIX ||'.'
global.hituet = 0

//bot settings 
global.autoblocknumber = process.env.AUTOBLOCK_NUMBER || '263,234' //set autoblock country code
global.antiforeignnumber = process.env.ANTIFOREIGN_NUMBER || '' //set anti foreign number country code
global.mode = process.env.MODE || 'public' //set bot public/private
global.anticall = process.env.ANTI_CALL || 'false' //bot blocks user when called
global.autostatusview = process.env.AUTOSW_VIEW || 'true' //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.autorecording = process.env.AUTO_RECORDING || 'false'
global.autotyping = process.env.AUTO_TYPING || 'true'

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
