import fetch from 'node-fetch'
let handler = async (m, { text, args, commabd }) => {
  if (!args[0]) throw `Use example .${command} halo`
  m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${['Iya keknya', 'Y saja', 'Gtau', 'Gk', 'No', 'Ynkts', '...', 'Tanya yg lain', 'Bisajadi'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}
handler.help = ['apakah2'].map(v => v + ' <teks>')
handler.tags = ['kerang', 'fun']
handler.command = /^apakah2$/i

export default handler