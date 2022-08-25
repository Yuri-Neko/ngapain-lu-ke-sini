import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import fs from 'fs'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let imgr = flaaa.getRandom()

let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
let template = (args[0] || '').toLowerCase()
if (!args[0]) {
let caption = `*Contoh Penggunaan Single*
${usedPrefix + command} cecan

*Contoh Penggunaan Multi*
${usedPrefix + command} pinterest |wibu

*List:*
• ${usedPrefix + command} gimg
• ${usedPrefix + command} nsfw
• ${usedPrefix + command} quote
• ${usedPrefix + command} sstick
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
            }
            
if (command) {
switch (template) {
            case 'gimg':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
        let bb = await fetch('https://megayaa.herokuapp.com/api/gimg?q=' + one)
        let bc = await bb.json()
        let bd = bc.result
	let be = Object.keys(bd).map((v, index) => ({
		title: 'IMG Result ' + index,
		description: 'By: ' + wm,
		rowId: usedPrefix + 'get ' + bd[v]
	}))
	let bf = {
		buttonText: `☂️ ${args[0]} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${args[0]} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, bf, be, m)
            break
            
           case 'nsfw':
           if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query

• ass
• bdsm
• blowjob
• cuckold
• cum
• cum
• cumslut
• doujin
• feet
• femdom
• foxgirl
• gangbang
• gif
• hentai
• lewdneko
• maid
• masturbation
• mobileWallpapers
• neko
• netorare
• orgy
• panties
• pussy
• school
• thighs
• wallpapers
• yuri`
        let nsf = 'https://megayaa.herokuapp.com/api/akaneko/' + one
        conn.sendButtonImg(m.chat, nsf, wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'quote':
        let bq = await fetch('https://megayaa.herokuapp.com/api/randomquote')
        let cq = await bq.json()
        let qq = `${cq.result.quotes}
        
        *By:* ${cq.result.author}`
        conn.sendButtonImg(m.chat, knimg, qq, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
            case 'sstick':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
        let sb = await fetch('https://megayaa.herokuapp.com/api/searchsticker?q=' + one)
        let sc = await sb.json()
	let se = Object.keys(sc.result).map((v, index) => ({
		title: 'Sticker Result ' + index,
		description: 'By: ' + wm,
		rowId: usedPrefix + 'fetchsticker ' + v + ' wsf'
	}))
	let sf = {
		buttonText: `☂️ ${args[0]} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${args[0]} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, sf, se, m)
            break
}
}
}
handler.help = ['meg <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^meg$/i
export default handler

