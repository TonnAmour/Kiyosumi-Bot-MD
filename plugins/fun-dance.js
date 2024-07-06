let handler = async (m, { conn, usedPrefix, command}) => {
let pp = 'https://tinyurl.com/26djysdo'
let pp2 = 'https://tinyurl.com/294oahv9'
let pp3 = 'https://telegra.ph/file/7e15aa81c6154527b4e15.mp4'
let pp4 = 'https://telegra.ph/file/daee4e52e1b1f15a995ee.mp4'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '✦ Menciona al usuario con *@user*'
let name2 = conn.getName(who)
let name = conn.getName(m.sender)

await conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4].getRandom() }, gifPlayback: true, caption: `*${name}*` + ' está bailando con' + ` *${name2}*` + '🕺🏻' }, { quoted: m })
}
handler.help = ['dance <@user>']
handler.tags = ['fun']
handler.command = ['dance', 'bailar']
export default handler