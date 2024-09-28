//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Asia,Kolakata.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "917872324809@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://wa.me/message/K6OVW2JLF6DTI1";
global.website =
  process.env.GURL || "https://wa.me/message/K6OVW2JLF6DTI1";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.imgur.com/2HM4Qcg.jpeg";
global.devs = "917872324809";
global.sudo = process.env.SUDO || "917872324809";
global.owner = process.env.OWNER_NUMBER || "917872324809";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "false");
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/2HM4Qcg.jpeg";
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05sMW9jZnUraXF4L2RJYVN4SUZjMDBPbWVSR0JQSUlHZGtQMEwrTitFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzArTHJ3Y1FzbXpzQ1lxV3NiSC9RbnptUnN6OWdiblFrdjlmRVdlSU9SMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTzZRODNOV0svNW5KRHFOQlJOb2cvWTllWXhWd0cvQTh0ZkhCNmFPVUhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtU2NQK1BVcEpHNWtiYWkrNTRyNlp6aTYrSzVnQnl6c21ackN4VUt3ZmtnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktCZ2toZGhDOXB4ZldsRTZnRFU4eHVaRFZHSTVkbDMxbVhqU01hRXlOMlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InROaEdORmYzelp2YWpTTW1KZTg2WmlUZDJ0VkxESE41QUxROVJPTUU3Ukk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01mOVpnT0xvc1lTY2JsT3FORzBqVy9CNk14Vk5WTFE4RTVQcGxWQy9VND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTcxYWwyS2x4OExxc1dhZWJ5d013OUdzK1RhcEtsNk5TS3YvZFE3L2lEOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1zMmdWM3ZOZENYdEpqYWhQL3VTMWdPZ0pCdTFTTThFTGdUVXRHNkJuZ0RMRUV2MUdocEhEVlhXcXAzVG5KNVNwNkNaaHhNMy9LYkpvdUtyVFI3WWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6ImNCVDBCK2gxeFl0MTFYdm11WGgzZ1lFaFluSzFXVWx4Q0JZZlkwWFBYUFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imd1V0xXelpEUzBla1k3blMybGRtNnciLCJwaG9uZUlkIjoiNzhlMTkwMmQtODVlOS00MjVjLTlmZTYtZDQ2NjdkYjRlYzNkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InA4QVUxZXUzVmZwSlJTNXEzTGhaSm04V1pMbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIODZrME5QN0EyRmZiSG1tdUsyV0lHOHp5aFU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNVJTUFFENjgiLCJtZSI6eyJpZCI6IjkxNzg3MjMyNDgwOTozN0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT203dzRVSEVNU0Q0TGNHR0I4Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieTZlNEVyV2pnZVdoTUliY2hRYUJYWjdtUFlRamNRNG9MdFBDZ0hPNVNBST0iLCJhY2NvdW50U2lnbmF0dXJlIjoieWljNlUyblRpQllTTHJWbHJyR2R4Z2RqUWN3RlhNaFZHZUlZN282MER1ZmJCNTA3MWY3SFk1bjU1VGxRdXdmZnR4eDBBUGtiOEtyZGNZanNMRXB5Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6Imd5dndTdEhKQ3hKNUYyL3hPazk5MGJ1YjlDYlcwaTVTTHhyRHg3YVlBdHJBa2d0S2FQWDBlVGZ4L0Jnb3BpaEVBcnYxUDZBU1RJbjNMeUE5NUdaNWhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3ODcyMzI0ODA5OjM3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN1bnVCSzFvNEhsb1RDRzNJVUdnVjJlNWoyRUkzRU9LQzdUd29CenVVZ0MifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc1Mjk0MjQsIm15QXBwU3RhdGVLZXlJZCI6IkFBNEFBQndOIn0=";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-A K A S H 😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "S K E T O R-𝐕2",
  ownername: process.env.OWNER_NAME || "A K A S H",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
