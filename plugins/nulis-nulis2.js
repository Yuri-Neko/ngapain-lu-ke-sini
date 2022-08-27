import { format } from 'util'
import { spawn } from 'child_process'

let handler = async (m, { conn, text, args, command }) => {
            let splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
            let teks = splitText.split('\n').slice(0, 31).join('\n')
            let inputPath = 'src/kertas/magernulis1.jpg'
            let fontPath = 'src/font/Zahraaa.ttf'
            if (command == 'nuliskiri') {
            spawn('convert', [
                inputPath,
                '-font',
                fontPath,
                '-size',
                '960x1280',
                '-pointsize',
                '22',
                '-interline-spacing',
                '2',
                '-annotate',
                '+140+153',
                teks,
                inputPath
            ])
                .on('error', () => throw eror)
                .on('exit', () => {
                    conn.sendMessage(m.chat, { caption: 'Nih :>', image: fs.readFileSync(inputPath) }, { quoted: m, thumbnail: Buffer.alloc(0) })
                })
                }
                if (command == 'nuliskanan') {
            spawn('convert', [
                inputPath,
                '-font',
                fontPath,
                '-size',
                '960x1280',
                '-pointsize',
                '23',
                '-interline-spacing',
                '2',
                '-annotate',
                '+128+129',
                teks,
                inputPath
            ])
                .on('error', () => throw eror)
                .on('exit', () => {
                    conn.sendMessage(m.chat, { caption: 'Nih :>', image: fs.readFileSync(inputPath) }, { quoted: m, thumbnail: Buffer.alloc(0) })
                })
                }
                if (command == 'foliokiri') {
            spawn('convert', [
                inputPath,
                '-font',
                fontPath,
                '-size',
                '1720x1280',
                '-pointsize',
                '23',
                '-interline-spacing',
                '4',
                '-annotate',
                '+48+185',
                teks,
                inputPath
            ])
                .on('error', () => throw eror)
                .on('exit', () => {
                    conn.sendMessage(m.chat, { caption: 'Nih :>', image: fs.readFileSync(inputPath) }, { quoted: m, thumbnail: Buffer.alloc(0) })
                })
                }
                if (command == 'foliokanan') {
            spawn('convert', [
                inputPath,
                '-font',
                fontPath,
                '-size',
                '960x1280',
                '-pointsize',
                '23',
                '-interline-spacing',
                '3',
                '-annotate',
                '+89+190',
                teks,
                inputPath
            ])
                .on('error', () => throw eror)
                .on('exit', () => {
                    conn.sendMessage(m.chat, { caption: 'Nih :>', image: fs.readFileSync(inputPath) }, { quoted: m, thumbnail: Buffer.alloc(0) })
                })
                }
}
handler.tags = ['tools']
handler.command = ['nuliskiri', 'nuliskanan', 'foliokiri', 'foliokanan']

export default handler
