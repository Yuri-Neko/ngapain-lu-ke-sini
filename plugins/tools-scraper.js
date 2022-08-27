import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import { sandroid1,
sanime,
sanoboydl,
sanoboys,
sapkmirror,
sapkmody,
sartinama,
sasupanfilm,
sasupanfilminfo,
sbacaresep,
scarigc,
scariresep,
schara,
scorona,
sdevianart,
sdewabatch,
sdrakor,
sfacebook,
sfilm,
sgempa,
sghfollower,
sghfollowing,
sghuser,
sgoredl,
shappymod,
shappymoddl,
sigdl,
sigdl2,
sigstalk,
sigstory,
sjob,
sjoox,
skiryu,
skonachan,
smanga,
smangatoon,
smediafire,
smerdekanews,
smetronews,
spalingmurah,
spin,
spinterest2,
squotes,
srandomgore,
srandomtt,
srexdl,
srexdldown,
ssearchgore,
ssfiledown,
ssfilesearch,
ssoundcloud,
sstickersearch,
stextmakervid,
stiktok,
strendtwit,
stwitter,
swallpapercave,
swallpapercraft,
swallpaperhd,
swattpad,
swebtoons,
swikisearch,
szerochan,
szippydl } from '../lib/scrape.js'

let handler = async (m, { text, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!args[0]) throw 'Masukkan paramenter scraper'
if (args[0] == 'android1') {

}
if (args[0] == 'anime') {

}
if (args[0] == 'anoboydl') {

}
if (args[0] == 'anoboys') {

}
if (args[0] == 'apkmirror') {

}
if (args[0] == 'apkmody') {

}
if (args[0] == 'artinama') {

}
if (args[0] == 'asupanfilm') {

}
if (args[0] == 'asupanfilminfo') {

}
if (args[0] == 'bacaresep') {

}
if (args[0] == 'carigc') {

}
if (args[0] == 'cariresep') {

}
if (args[0] == 'chara') {

}
if (args[0] == 'corona') {

}
if (args[0] == 'devianart') {

}
if (args[0] == 'dewabatch') {

}
if (args[0] == 'drakor') {

}
if (args[0] == 'facebook') {

}
if (args[0] == 'film') {

}
if (args[0] == 'gempa') {

}
if (args[0] == 'ghfollower') {

}
if (args[0] == 'ghfollowing') {

}
if (args[0] == 'ghuser') {

}
if (args[0] == 'goredl') {

}
if (args[0] == 'happymod') {

}
if (args[0] == 'happymoddl') {

}
if (args[0] == 'igdl') {

}
if (args[0] == 'igdl2') {

}
if (args[0] == 'igstalk') {

}
if (args[0] == 'igstory') {

}
if (args[0] == 'job') {

}
if (args[0] == 'joox') {
let teks = await sjoox(args[1])
let gg = teks.data
	let row = Object.values(gg).map((v, index) => ({
		title: index + ' ' + v.lagu,
		description: '\nAlbum: ' + v.album + '\nPenyanyi: ' + v.penyanyi + '\nPublish: ' + v.publish + '\nImg: ' + v.img + '\nMp3: ' + v.mp3,
		rowId: usedPrefix + 'get ' + v.mp3
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'kiryu') {

}
if (args[0] == 'konachan') {

}
if (args[0] == 'manga') {

}
if (args[0] == 'mangatoon') {

}
if (args[0] == 'mediafire') {

}
if (args[0] == 'merdekanews') {

}
if (args[0] == 'metronews') {

}
if (args[0] == 'palingmurah') {

}
if (args[0] == 'pin') {

}
if (args[0] == 'pinterest2') {

}
if (args[0] == 'quotes') {
let teks = await squotes(args[1])
m.reply(teks.quote)
}
if (args[0] == 'randomgore') {

}
if (args[0] == 'randomtt') {

}
if (args[0] == 'rexdl') {

}
if (args[0] == 'rexdldown') {

}
if (args[0] == 'searchgore') {

}
if (args[0] == 'sfiledown') {

}
if (args[0] == 'sfilesearch') {

}
if (args[0] == 'soundcloud') {

}
if (args[0] == 'stickersearch') {
let teks = await sstickersearch(args[1])
	let row = Object.values(teks).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nAuthor: ' + v.author + '\nUrl: ' + v.url,
		rowId: usedPrefix + 'fetchsticker ' + (v.stickers).getRandom() + ' wsf'
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'textmakervid') {

}
if (args[0] == 'tiktok') {
let teks = await stiktok(args[1])
m.reply(teks.nowm + '\n' + teks.wm + '\n' teks.audio)
}
if (args[0] == 'trendtwit') {

}
if (args[0] == 'twitter') {

}
if (args[0] == 'wallpapercave') {

}
if (args[0] == 'wallpapercraft') {

}
if (args[0] == 'wallpaperhd') {

}
if (args[0] == 'wattpad') {

}
if (args[0] == 'webtoons') {

}
if (args[0] == 'wikisearch') {

}
if (args[0] == 'zerochan') {

}
if (args[0] == 'zippydl') {

}
if (args[0] == 'zippydl2') {

}

}
handler.command = ['scrap']

export default handler