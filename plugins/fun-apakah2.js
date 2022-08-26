import fetch from 'node-fetch'
let handler = async (m, { text, args, command }) => {
if (command == 'apakah2') {
  if (!args[0]) throw `Use example .${command} halo`
  m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${['Iya keknya', 'Y saja', 'Gtau', 'Gk', 'No', 'Ynkts', '...', 'Tanya yg lain', 'Bisajadi'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}
if (command == 'turu') {
let keban = global.db.data.chats[m.chat].isBanned
if (args[0] == 'on' ) {
keban = true
    m.reply('Bot Turu Dulu bang :>!')
    } else if (args[0] == 'off' ) {
    keban = false
    m.reply('Bot Udah Bangun bang :>!')
    }
}
}
handler.help = ['apakah2', 'turu']
handler.command = ['apakah2', 'turu']

export default handler