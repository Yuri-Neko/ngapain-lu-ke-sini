import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import { android1,
anime,
anoboydl,
anoboys,
apkmirror,
apkmody,
artinama,
asupanfilm,
asupanfilminfo,
bacaresep,
carigc,
cariresep,
chara,
corona,
devianart,
dewabatch,
drakor,
facebook,
film,
gempa,
ghfollower,
ghfollowing,
ghuser,
goredl,
happymod,
happymoddl,
igdl,
igdl2,
igstalk,
igstory,
job,
joox,
kiryu,
konachan,
manga,
mangatoon,
mediafire,
merdekanews,
metronews,
palingmurah,
pin,
pinterest2,
quotes,
randomgore,
randomtt,
rexdl,
rexdldown,
searchgore,
sfiledown,
sfilesearch,
soundcloud,
stickersearch,
textmakervid,
tiktok,
trendtwit,
twitter,
wallpapercave,
wallpapercraft,
wallpaperhd,
wattpad,
webtoons,
wikisearch,
zerochan,
zippydl,
zippydl2 } from '../lib/scrape.js'

let handler = async (m, { text, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

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
let teks = await quotes(args[1])
m.reply(teks[0].quote)
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

}
if (args[0] == 'textmakervid') {

}
if (args[0] == 'tiktok') {

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