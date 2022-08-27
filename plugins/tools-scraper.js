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
let blum = 'Blum ada'
if (args[0] == 'android1') {
throw blum
}
if (args[0] == 'anime') {
throw blum
}
if (args[0] == 'anoboydl') {
throw blum
}
if (args[0] == 'anoboys') {
throw blum
}
if (args[0] == 'apkmirror') {
throw blum
}
if (args[0] == 'apkmody') {
throw blum
}
if (args[0] == 'artinama') {
throw blum
}
if (args[0] == 'asupanfilm') {
throw blum
}
if (args[0] == 'asupanfilminfo') {
throw blum
}
if (args[0] == 'bacaresep') {
throw blum
}
if (args[0] == 'carigc') {
let teks = await scarigc(args[1])
	let row = Object.values(teks).map((v, index) => ({
		title: index + ' ' + v.nama,
		description: '\nNama: ' + v.nama + '\nLink: ' + v.link,
		rowId: usedPrefix + 'inspect ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'cariresep') {
throw blum
}
if (args[0] == 'chara') {
throw blum
}
if (args[0] == 'corona') {
throw blum
}
if (args[0] == 'devianart') {
let teks = await sdevianart(args[1])
return conn.sendButton(m.chat, `*Result: !*`, author, teks.result, [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + args[1]],
            ], m)
}
if (args[0] == 'dewabatch') {
throw blum
}
if (args[0] == 'drakor') {
throw blum
}
if (args[0] == 'facebook') {
throw blum
}
if (args[0] == 'film') {
throw blum
}
if (args[0] == 'gempa') {
throw blum
}
if (args[0] == 'ghfollower') {
throw blum
}
if (args[0] == 'ghfollowing') {
throw blum
}
if (args[0] == 'ghuser') {
throw blum
}
if (args[0] == 'goredl') {
throw blum
}
if (args[0] == 'happymod') {
throw blum
}
if (args[0] == 'happymoddl') {
throw blum
}
if (args[0] == 'igdl') {
throw blum
}
if (args[0] == 'igdl2') {
throw blum
}
if (args[0] == 'igstalk') {
throw blum
}
if (args[0] == 'igstory') {
throw blum
}
if (args[0] == 'job') {
throw blum
}
if (args[0] == 'joox') {
let teks = await sjoox(args[1])
	let row = Object.values(teks.data).map((v, index) => ({
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
throw blum
}
if (args[0] == 'konachan') {
let teks = await skonachan(args[1])
return conn.sendButton(m.chat, `*Result: !*`, author, teks.result, [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + args[1]],
            ], m)
}
if (args[0] == 'manga') {
throw blum
}
if (args[0] == 'mangatoon') {
throw blum
}
if (args[0] == 'mediafire') {
let teks = await smediafire(args[1])
return conn.sendButton(m.chat, `*Result: !*
${teks.judul}
${teks.upload_date}
${teks.size}
${teks.mime}
`, author, logo, [
                ['GET', usedPrefix + 'get ' + teks.link],
            ], m)
}
if (args[0] == 'merdekanews') {
let teks = await smerdekanews()
let row = Object.values(teks).map((v, index) => ({
		title: index + ' ' + v.judul,
		description: '\nUpload: ' + v.upload_date + '\nLink: ' + v.link + '\nThumb: ' + v.thumb,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'metronews') {
throw blum
}
if (args[0] == 'palingmurah') {
throw blum
}
if (args[0] == 'pin') {
throw blum
}
if (args[0] == 'pinterest2') {
throw blum
}
if (args[0] == 'quotes') {
let teks = await squotes(args[1])
m.reply(teks.quote)
}
if (args[0] == 'randomgore') {
throw blum
}
if (args[0] == 'randomtt') {
throw blum
}
if (args[0] == 'rexdl') {
throw blum
}
if (args[0] == 'rexdldown') {
throw blum
}
if (args[0] == 'searchgore') {
throw blum
}
if (args[0] == 'sfiledown') {
throw blum
}
if (args[0] == 'sfilesearch') {
let teks = await ssfilesearch(args[1])
	let row = Object.values(teks).map((v, index ) => ({
		title: index + ' ' + v.nama,
		description: '\nNama: ' + v.nama + '\nSize: ' + v.size + '\nLink: ' + v.link,
		rowId: usedPrefix + 'get ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'soundcloud') {
throw blum
}
if (args[0] == 'stickersearch') {
let teks = await sstickersearch(args[1])
	let row = Object.values(teks).map(( index ) => ({
		title: index + ' ' + teks.title,
		description: '\nAuthor: ' + teks.author + '\nUrl: ' + teks.author_link,
		rowId: usedPrefix + 'fetchsticker ' + [teks.sticker].getRandom() + ' wsf'
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'textmakervid') {
throw blum
}
if (args[0] == 'tiktok') {
let teks = await stiktok(args[1])
conn.send2ButtonVid(m.chat, teks.wm, 'Created By: ' + author, wm, 'No Wm', usedPrefix + 'get ' + teks.nowm, 'Audio', usedPrefix + 'get ' + teks.audio, m)
}
if (args[0] == 'trendtwit') {
throw blum
}
if (args[0] == 'twitter') {
throw blum
}
if (args[0] == 'wallpapercave') {
let teks = await swallpapercave(args[1])
return conn.sendButton(m.chat, `*Result: !*`, author, teks.result, [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + args[1]],
            ], m)
}
if (args[0] == 'wallpapercraft') {
let teks = await swallpapercraft(args[1])
return conn.sendButton(m.chat, `*Result: !*`, author, teks.result, [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + args[1]],
            ], m)
}
if (args[0] == 'wallpaperhd') {
let teks = await swallpaperhd(args[1])
return conn.sendButton(m.chat, `*Result: !*`, author, teks.result, [
                ['Next', usedPrefix + command + ' ' + args[0] + ' ' + args[1]],
            ], m)
}
if (args[0] == 'wattpad') {
throw blum
}
if (args[0] == 'webtoons') {
throw blum
}
if (args[0] == 'wikisearch') {
let teks = await swikisearch(args[1])
	let row = Object.values(teks).map(( v, index ) => ({
		title: index + ' ' + v.judul,
		description: '\nWiki: ' + v.wiki + '\nThumb: ' + v.thumb,
		rowId: usedPrefix + 'get ' + v.thumb
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (args[0] == 'zerochan') {
throw blum
}
if (args[0] == 'zippydl') {
throw blum
}
if (args[0] == 'zippydl2') {
throw blum
}

}
handler.command = ['scrap']

export default handler