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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUxlcW1oQ0N2R3JaM05CcEJHZXFqTHNoQlZXUFNOaDFUdUtCNS9UK04yRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0htUUxjMFhSSkFCclR6c1ZwTkEwTUFVUEVnaWExY1RxZUJwbEd5cVAzdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQnUrbjdNKy9lNUpwWlJBSGsyOVRlMm5GN3VQbWs2YTVqTElWa0tldVhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKdnBBUkVVTjJCekFZNmFJeVZ0VU5GYXBIVXM4UmkvNkdISFo4WFFOZVFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCRVphRW1Ub1dEeUgrRThHWVZ2bkZvcDQ1V01tcDhsZXZCQjRQWEgrRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMvY01VaERmaGRGclBYak5TMmlwVzBLeWcyTmFET0ZjSDh6bnM0eHJYVW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0hqU3prZkFuV0Fsd1Z0UzEzRlFkazlYWERHSWpBc0JYd2VFN1I2UlRXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkxjaXBZeHZveGxEdTJYWU1XcUVHbG10V2xDTlFTK2xjVkorV3AwK3ZEcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVXQ3RiMXZWKzFDZTd3OFl2MFh1czY0WThKRmtZd0g0bllKdWp2c2xYQlBpd0FkekNmSm1ybEpTb1YyZVBKQnArNXN6eEhDS1ExeTE0OXdoRU8rVmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiSTJWMmN3Skp1a1pBZDJhQ1lzMzJnRGRjVTEyZldud0NXYklVUjd5ZVZsUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTc4NzIzMjQ4MDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkZFM0EyQjA4NzY2QzBEODQ0QTg5MkRFNDhCMjc1NzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjUwNDkwMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE3ODcyMzI0ODA5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc2OUUyQjg4NUI4MDFDQkMzMzM1MUI2OUE5MThDQzRDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY1MDQ5MDJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlZLZG1BaVVHUmYtU1VKNjlHdnZsQlEiLCJwaG9uZUlkIjoiNGNmZWZkNDctZjM4OC00M2M4LTllMzMtZGQ0MWNjMjI5MjY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRtaVVRdEZ5V1p6NS8wdTI5R1hiUHAvbkREaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxU0IrS1lSM3ZmQVJjV3BrN2QrRmlYMU4vN2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDJORDM1TjIiLCJtZSI6eyJpZCI6IjkxNzg3MjMyNDgwOTozMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJXaG9wdHkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09tN3c0VUhFTGkvb2JjR0dCVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ink2ZTRFcldqZ2VXaE1JYmNoUWFCWFo3bVBZUWpjUTRvTHRQQ2dITzVTQUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkxBWHp2VDAxQnp6K25BcWY3NWhlUW9zQmZVWkwxb1ZjTk5adWZVUlJxbHJyQWNFR1VXZkJaMG00eE9IQUNvbG1hVzlFd2tnU3FreFRKRW15M0NTZkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSZk94alZXeVRqc0l1Z1hlTHdib0czd3lrcEZaemYyRlo2ejQwcnMrSG4xdlpHeE9zZzNPUW53TkZNV2RrZktId3BYYTBBbWhKN2MvUXZnOXlFYlZqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNzg3MjMyNDgwOTozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjdW51QksxbzRIbG9UQ0czSVVHZ1YyZTVqMkVJM0VPS0M3VHdvQnp1VWdDIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NTA0OTAwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJ2NCJ9";
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
