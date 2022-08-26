import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let urut = text.split`|`
  let one = urut[0]
  let two = urut[1]

if (command == 'nhentai') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} 344253`
try {
  let gas = await fetch(`https://api.lolhuman.xyz/api/nhentai/${args[0]}?apikey=${global.lolkey}`)
    let json = await gas.json()
    let hasil = json.result.image
	let row = Object.keys(hasil).map((v, index) => ({
		title: index + json.result.title_native,
		description: '\n*Color:* ' + json.result.title_romaji + '\n*Slug:* ' + json.result.read + '\n*Description:* ' + Array.from(json.result.tags) + '\n*Image:* ' + hasil[v],
		rowId: usedPrefix + 'get ' + hasil[v]
	}))
	let button = {
		buttonText: `☂️ ${command} Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
} catch (e) {
return m.reply('Error kan')
}
}

if (command == 'nhentaipdf') {
if (!text) throw 'Masukkan Kode Hentai'
let tobat = 'https://pdf.lolhuman.xyz/download/' + text + '.pdf'
await conn.sendMessage(m.chat, {document: { url: tobat }, mimetype: 'application/pdf', fileName: `${text}.pdf`}, {quoted:fakes})
}

}
handler.command = handler.help = ['nhentaipdf', 'nhentai']
handler.tags = ['internet']

export default handler