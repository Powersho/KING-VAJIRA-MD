const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://kingvajira:kingvajira@cluster0.6eu4geo.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'botwhatsapp204@gmail.com'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Vajira Rathnayaka' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dwU2Fhcy8xbVV2VUdVRTlaa3ZCM0pCNUxabWJMbVJiVWhiSjFtYmtIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGNteTVFVnFXTnFOMmN1ZGN2dnJ4VUxTelUxcTBvNEZyOGVUWTRaLzh6RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTlc0TjBWOXErK3BNYlJyMDQyeFdoQWIxVS9lOVhyYWdEZUhVN1Z4aTJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RmFrUVJRa3o3UnpsM3NVMERrTXgvamxTWXlBQWdZZE43TUR2cjZKbTIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEVTFabWNNazRRT292ZTBtalJ2Y1B5TjlCdndWLzVwZUxSUHBRNWFEa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt0TTVXdmlaZWRwbWw3UUZLcUpVd0JSQmp1bGZUOE5WZHpsckllNFF3UTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMERsMXpHVTZqVWtaTm43VCtUcytDT3ZlSjNVZ0lrTmZ0WHYrWmlIdmxsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTk1PMnFqNUlWNXFOR0NoOWNnZzZ3UGJObXNUS0tDVDBuSFFJNDQ0NGNDOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBsZTlzVEtNRk9BNXFOR0MxU1lmUG5BTXZvRUhjNlByVlVPZXY1TDllUDg1eHNmbDZzbW9FLzdBKzNqVUtaTW9DYS96d1lGMDNJeWhOaXpsYVQwaEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiJrZTRrRzlyNEhiZmtVa1NUM2J5VHlXWnA2eTlxZW91RFVxczJSdVp1bWlNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSdVhtN1dMNFNPaS04R3dyWjU4Z2J3IiwicGhvbmVJZCI6ImQ0ODk1NDNjLWM1NDEtNDQ3My1hOGZmLWZkZmE2YjQ0MzE0ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2V2FPWjFEbG11a3F0L01id2QxY0JzQU5waEU9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldaMXl0VFdHdjkvZTloQmdWTFN6SmF0cngxST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xXbmdPZ0dFS21oK0swR0dCa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjlBK1ZiTEQ1V05CZ25WV1IwQnF1ZndkNHpQNC92c2xrSmhJL0N2KzYrMTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBhSWRsNHRqV20wQi9xa044QkFyY0k0ZzJsaWtZVmhZWlJrR241V0VSNW1XRTYxZ1lLTjlrZlFPMnlKU0R6c09JSFoweTZjb2M5NjFSOGgyWktvWERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0WEhSZWRVZVFUQmVMWmNPV3VHWTNCR05KSCt4ZUpLb0tLamNHL1JhMG1qaWtHZDBtSEJwR1l5dU1jQXl4OWtIMDlMb3RySVpUc1NjVytpTDcrV3dEZz09In0sIm1lIjp7ImlkIjoiMjMyMzM2MTEwMjg6MzJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4ZGtT+GXr0XhlofhlJXhlbxPVCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzIzMzYxMTAyODozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmUVBsV3l3K1ZqUVlKMVZrZEFhcm44SGVNeitQNzdKWkNZU1B3ci91dnRmIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA2OTU0OTI0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlUYyJ9' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Vajira-Rathnayaka' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Vajira-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
