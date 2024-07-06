let handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  let name = conn.getName(who);
  let db = await conn.profilePictureUrl(who, "image").catch((_) => "https://telegra.ph/file/e01c177fb1c61f453c659.jpg");
  let bank = `╭━━━━ *BANCO 🏦* ━━━╾•
❍ *Nombre:* ${name}
❍ *Coins en el banco:* $${global.db.data.users[who].banc} 🪙
❍ *Diamantes en el banco:* $${global.db.data.users[who].bank} 💎
╰━━━━━━━━━━━━╾•`.trim();
  conn.sendMessage(
    m.chat,
    {
      image: {
        url: "https://telegra.ph/file/e01c177fb1c61f453c659.jpg",
      },
      caption: bank,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: `RPG - BANK`,
          sourceUrl: "https://whatsapp.com/channel/0029VaYTBn3DZ4LaHbgzxw0B",
          mediaType: 1,
          showAdAttribution: true,
          thumbnailUrl: "https://telegra.ph/file/e01c177fb1c61f453c659.jpg",
        },
      },
    },
    {
      quoted: m,
    }
  );
};
handler.help = ["bal"];
handler.tags = ["xp"];
handler.command = ["bal", "diamantes", "diamond", "balance", "banco"];
export default handler;
