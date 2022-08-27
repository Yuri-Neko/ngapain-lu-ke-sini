import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { text, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
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
if (command == 'tikporn') {
let puk = await axios.get('https://tikporntok.com/?random=1')
        .then((res) => {
            const $ = cheerio.load(res.data)
            let title = $('article > h1').text()
            let source = $('article > div.video-wrapper.vxplayer').attr('data-post') || 'Web Not Response'
            let thumb = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-poster') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            let desc = $('article > div.intro').text()
            let upload = $('article > div.single-pre-meta.ws.clearfix > time').text()
            let like = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(1) > span').text()
            let dislike = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(2) > span').text()
            let favorite = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(3) > span').text()
            let views = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(4) > span').text()
            let tags = $('article > div.post-tags').text()
            let video = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('src') || $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-src') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            return { title, source, thumb, desc, upload, like, dislike, favorite, views, tags, video }
        })
        let lip = 'https://tikporntok.com/'
        let lic = `*${htki} tikporntok.com ${htka}*
*title:* ${puk.title}
*source:* ${puk.source}
*thumb:* ${lip + puk.thumb}
*desc:* ${puk.desc}
*upload:* ${puk.upload}
*like:* ${puk.like}
*dislike:* ${puk.dislike}
*favorite:* ${puk.favorite}
*views:* ${puk.views}
*tags:* ${puk.tags}
*video:* ${lip + puk.video}`
        
        try {
await conn.sendButtonVid(m.chat, lip + puk.video, lic, author, 'To mp3', '.tomp3', fakes, adReply)
} catch {
throw 'Manaa Gk Adaa :>'
}

}

if (command == 'tbx') {
let hox = await axios.get(`https://turnbackhoax.id/`).then( tod => {
const $ = cheerio.load(tod.data)
let hasil = []
$("figure.mh-loop-thumb").each(function(a, b) {
$("div.mh-loop-content.mh-clearfix").each(function(c, d) {
let link = $(d).find("h3.entry-title.mh-loop-title > a").attr('href');
let img = $(b).find("img.attachment-mh-magazine-lite-medium.size-mh-magazine-lite-medium.wp-post-image").attr('src');
let title = $(d).find("h3.entry-title.mh-loop-title > a").text().trim();
let desc = $(d).find("div.mh-excerpt > p").text().trim();
let date = $(d).find("span.mh-meta-date.updated").text().trim();
const Data = {
title: title,
thumbnail: img,
desc: desc,
date: date,
link: link
}
hasil.push(Data)
})
})
return { hasil }
})
let ha = hox.hasil
	let row = Object.values(ha).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nDate: ' + v.date + '\nImg: ' + v.thumbnail + '\nDesc: ' + v.desc + '\nUrl: ' + v.link,
		rowId: usedPrefix + 'get ' + v.thumbnail
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

}
handler.command = ['apakah2', 'turu', 'tikporn', 'tbx']

export default handler