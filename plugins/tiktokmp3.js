let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
await conn.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })



handler.help = ['tiktokmp3' <url>']
handler.tags = ['downloader']
handler.command = /^tiktokmp3$/i
