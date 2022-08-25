import fetch from 'node-fetch'
import axios from 'axios'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!args[0]) throw `Masukkan paramenter

List:
kanji
words
reading`
if (!args[1]) throw `Masukkan teks atau kanji`
  if (args[0] == 'kanji') {
  let res = await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(args[1])}`)
  let json = await res.json()
  let { kanji, grade, stroke_count, meanings, kun_readings, on_readings, name_readings, jlpt, unicode, heisig_en } = json
  let pesan = `
  「Kanji Information」
  Kanji: ${kanji}
  Arti: ${meanings}
  Kun-Reading: ${kun_readings}
  On-Reading: ${on_readings}
  Name Reading: ${name_readings}
  Grade: ${grade}
  Stroke: ${stroke_count}
  JLPT: ${jlpt}
  Unicode: ${unicode}
  Heisig-en: ${heisig_en}
  `.trim()
  conn.reply(m.chat, pesan, m)
  }
  if (args[0] == 'words') {
  let res = await fetch('https://kanjiapi.dev/v1/' + args[0] + '/' + encodeURIComponent(args[1]))
  let json = await res.json()
	let row = Object.values(json).map((v, index) => ({
		title: index + ' ' + v.variants[0].written,
		description: '\nWritten ' + v.variants[0].written + '\nPronounced ' + v.variants[0].pronounced + '\nMeanings ' + (Array.from(v.meanings[0].glosses)),
		rowId: usedPrefix + 'ttp ' + v.variants[0].written
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
	}
	if (args[0] == 'reading') {
  let res = await await fetch('https://kanjiapi.dev/v1/' + args[0] + '/' + encodeURIComponent(args[1]))
  let json = await res.json()
  let { reading, main_kanji, name_kanji } = json
  let pesan = `
  「Kanji Information」
  reading: ${reading}
  main_kanji: ${main_kanji}
  name_kanji: ${name_kanji}
  `.trim()
  conn.reply(m.chat, pesan, m)
  }
}
handler.help = ['kanji'].map(v => v + ' <kanji>')
handler.tags = ['internet']
handler.command =/^(kanji)$/i

export default handler