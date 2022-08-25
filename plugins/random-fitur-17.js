import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let imgr = flaaa.getRandom()
let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
if (command == 'nhentaipdf') {
if (!text) throw 'Masukkan Kode Hentai'
let tobat = 'https://pdf.lolhuman.xyz/download/' + text + '.pdf'
conn.sendFile(m.chat, tobat, 'Ayo Tobat Adik Adik', '', m, null, { fileLength: fsizedoc, pageCount: fpagedoc, mimetype: 'application/pdf', contextInfo: {
          externalAdReply :{
    mediaUrl: sgc,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(logo)).buffer(),
    sourceUrl: sgc
     }}
  })
}

}
handler.command = handler.help = ['nhentaipdf']
handler.tags = ['internet']

export default handler
