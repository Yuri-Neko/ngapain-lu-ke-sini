import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'

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
if (command == 'tikporn') {
if (!text) throw `Use example .${command} 1`
let res = await tikporn(text)
m.reply(`${res.title}
${res.source}
${res.thumb}
${res.desc}
${res.upload}
${res.like}
${res.dislike}
${res.favorite}
${res.views}
${res.tags}
${res.video}`)
}
}
handler.command = ['apakah2', 'turu', 'tikporn']

export default handler

async function tikporn(rand) {
axios.get('https://tikporntok.com/?random=' + rand)
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
        }