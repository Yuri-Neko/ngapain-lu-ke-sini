import axios from "axios"
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let imgr = flaaa.getRandom()
let url
try {
url = 'https://api-reysekha.herokuapp.com/api/wallpaper/' + command + '?apikey=apirey'
} catch {
try {
url = 'https://api-reysekha.herokuapp.com/api/wallpaper/' + command + '?apikey=apirey'
} catch {
try {
url = 'https://api-reysekha.herokuapp.com/api/wallpaper/' + command + '?apikey=apirey'
} catch {
try {
url = 'https://server-api-rey.herokuapp.com/api/random/' + command + '?apikey=apirey'
} catch {
try {
url = 'https://server-api-rey.herokuapp.com/api/random/' + command + '?apikey=apirey'
} catch {
try {
url = 'https://server-api-rey.herokuapp.com/api/random/' + command + '?apikey=apirey'
} catch {
try {
url = 'https://sekha.me/api/nsfw/' + command + '?apikey=apirey'
} catch {
try {
url = 'https://sekha.me/api/nsfw/' + command + '?apikey=apirey'
} catch {
try {
url = 'https://sekha.me/api/nsfw/' + command + '?apikey=apirey'
} catch {
throw 'Yahh..'
}}}}}}}}}

let haha = await conn.getFile(url)
await conn.sendButton(m.chat, `Nahh Udah Jadi *${command}*`.trim(), wm, haha.data, [['🔄 Next 🔄', `/${command}`]], m, { quoted: fakes })
if (command == 'ppcouple') {
let hi = await fetch(url)
let sul = await hi.json()
await conn.sendButton(m.chat, `Nahh Udah Jadi *${command}*`.trim(), wm, sul.result.male, [['🔄 Next 🔄', `/${command}`]], m, fdoc)
await conn.sendButton(m.chat, `Nahh Udah Jadi *${command}*`.trim(), wm, sul.result.female, [['🔄 Next 🔄', `/${command}`]], m, fdoc)
}

}
handler.command = handler.help = ["aesthetic",
"ahegao",
"akira",
"akiyama",
"ana",
"anime",
"anjing",
"ass",
"asuna",
"ayuzawa",
"bdsm",
"blowjob",
"boruto",
"cecan",
"cecan2",
"cecan3",
"cecan4",
"cecan5",
"chiho",
"china",
"chitoge",
"cogan",
"cogan2",
"cosplay",
"cuckold",
"cum",
"cyberspace",
"deidara",
"doraemon",
"eba",
"elaina",
"emilia",
"ero",
"erza",
"femdom",
"foot",
"gaming",
"gangbang",
"gifs",
"glasses",
"gremory",
"hekel",
"hentai",
"hestia",
"hinata",
"inori",
"islami",
"isuzu",
"itachi",
"itori",
"jahy",
"jeni",
"jiso",
"justina",
"kaga",
"kagura",
"kaori",
"kartun",
"katakata",
"keneki",
"korea",
"kotori",
"kpop",
"kucing",
"kurumi",
"loli",
"madara",
"manga",
"masturbation",
"megumin",
"mikasa",
"miku",
"minato",
"mobil",
"montor",
"mountain",
"naruto",
"neko",
"neko2",
"nezuko",
"nsfwloli",
"onepiece",
"orgy",
"panties",
"pentol",
"pokemon",
"ppcouple",
"programing",
"pubg",
"pussy",
"rize",
"rose",
"ryujin",
"sagiri",
"sakura",
"sasuke",
"satanic",
"shina",
"shinka",
"shinomiya",
"shizuka",
"shota",
"tatasurya",
"tejina",
"teknologi",
"tentacles",
"thailand",
"thighs",
"toukachan",
"trans",
"tsunade",
"vietnam",
"waifu",
"waifu2",
"wallhp",
"yotsuba",
"yuki",
"yumeko",
"yuri",
"zettai",
"zettai"]
handler.tags = ['anime']
export default handler