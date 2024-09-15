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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBFOWFrbUlEdWZDV1BSNkRLOVZveFVFd00zVTBVQmdDeHJWSG5yaEFsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTdUclBNeEZOeG5ET0VJaFc0THI0dTJvMWxzRDRjS0dNc2ZyYjRhQjNoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRkVWNGg4SWFVOHFHQVRpVCs1WldYNm5uNzVMeFEzdDl6TDVTNUVoaDBrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIMHB0ME80Zzhsc3hZdE9jTWxCaHdwTE9UL2lLM215YkxaQWwvSmo4ZENZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZCZVhoeWhWbEZYSUtIUkZmaGNQRHg3V01Sak5xQ29HWGpUVzJFVEhRRlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9yUFRDOVkxMXNGME5IMHkzYXdkNjZGL25GS0Z2Y2xWS3ZvOTVJVXlLeFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0JxeEtrMmg4TGZmU2dzWk1DT1FEWlRUeTVaekFnZ0V6UnVselc1ZWVWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmJ3Wk1sNG9BOXdSR3FjMXFMUlR4czR3REJqNCtENis4L0hkQlFWYVlnND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1vQUFZQ20xMi92ZE01bUVPNlhGQVlGZ09lZDJXU2tpKzFWdUM1TGtTZnhsSTc5L28rZXUvN0pFUTlWS05wQk9EVDlXUnRwNm1adHlWVkZURHQ4V0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6Ino3OTBxVmJ1Ris2YzJzZW5xcmVwd1pEUVhKQlJuY1MzTTZuWTcveUtpTEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE3ODcyMzI0ODA5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg2RTI0NTBGMTM2NEQ4Qzg2OTY1QkEzNjQ3Njk5QTU3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY0MjU2NTF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxNzg3MjMyNDgwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNjY2OUQ3MzA2QjRBNEEyMkVBQjFBQUQxOEE1MTQwMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2NDI1NjUzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIYnRRcUgzS1R6NjNENjdQbVd0MmNBIiwicGhvbmVJZCI6IjBiMTM0MWI5LTBhNjAtNDVkZi1iMzQ4LWZjMjM4NTlkZjA5MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFMDhpMER5bmNQOGNEeDNVQURnb2NZdE5WUkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0QzM1ljdStWdjNxQnE0aTZ3ZWhhTHdhNGwwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktES1dTQkxIIiwibWUiOnsiaWQiOiI5MTc4NzIzMjQ4MDk6MjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiV2hvcHR5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPbTd3NFVIRUtiVW5MY0dHQlFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5NmU0RXJXamdlV2hNSWJjaFFhQlhaN21QWVFqY1E0b0x0UENnSE81U0FJPSIsImFjY291bnRTaWduYXR1cmUiOiJUVi9TN1Zzd0txSDRLR2h0NkJ3MWdNNW9NUWRTNWY0VTc1YzBsZkNoSlViUitMSktjeTZNV3FKL2YrSmxIRHp2cHV2UENhM0ZtSWc4czF0OTZEVG1DZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUmM5WmpScTM5R3BVcmNDSFNyMXVkY2lOY1gwTS9rUW5rR3hucTh5UGJucTkxTTRUUm5iSlZVNTczT2h6S3oxcW9UdmhndWtxQ2ZaQTdRR045UkgvQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTc4NzIzMjQ4MDk6MjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY3VudUJLMW80SGxvVENHM0lVR2dWMmU1ajJFSTNFT0tDN1R3b0J6dVVnQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjQyNTY1MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCdnoifQ==";
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
