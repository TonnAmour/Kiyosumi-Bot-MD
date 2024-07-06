let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/65162ab788c9a1c56a0f4.jpg'), 
  }), 'gay.png', ``, m)
}

handler.help = ['gay @user']
handler.tags = ['fun']
handler.command = ['gay'] 
handler.diamond = true

export default handler
