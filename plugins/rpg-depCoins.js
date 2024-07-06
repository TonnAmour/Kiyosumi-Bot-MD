import db from '../lib/database.js';

let handler = async (m, {conn, command, text, usedPrefix, args }) => {
   let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
   

   let users =  global.db.data.users[m.sender];
   if (!args[0]) return m.reply('[❌] Ingresa la cantidad de 🪙 que deseas Depositar.');
   if (args[0] == '--all') {
      let count = parseInt(users.coin);
      users.coin -= count * 1
      users.banc += count * 1
      await m.reply(`*Depositaste ${count} de 🪙 al Banco.*`);
      return !0;
   };
   if (!Number(args[0])) return m.reply('[⚠️] La cantidad debe ser un Numero.');
   let count = parseInt(args[0]);
   if (!users.coin) return m.reply('[🥺] No tienes 🪙 en la Cartera.');
   if (users.coin < count) return m.reply(`[❌] Solo tienes ${users.coin} 🪙 en la Cartera.`);
   users.coin -= count * 1;
   users.banc += count * 1;
   await m.reply(`*Depositaste ${count} de 🪙 al Banco.*`);
};

//conn.sendButton2(m.chat, oa, null, null, [['Banco', `.banco`]], null, null, m)


handler.help = ['depc'];
handler.tags = ['econ'];
handler.command = ['depc'];

export default handler
