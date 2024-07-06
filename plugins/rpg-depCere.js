import db from '../lib/database.js';

let handler = async (m, { args }) => {
   let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
   
   let users =  global.db.data.users[m.sender];
   if (!args[0]) return m.reply('[❌] Ingresa la cantidad de 💎 que deseas Depositar.');
   if (args[0] == '--all') {
      let count = parseInt(users.diamond);
      users.diamond -= count * 1
      users.bank += count * 1
      await m.reply(`*Depositaste ${count} de 💎 al Banco.*`);
      return !0;
   };
   if (!Number(args[0])) return m.reply('[⚠️] La cantidad debe ser un Numero.');
   let count = parseInt(args[0]);
   if (!users.diamond) return m.reply('[🥺] No tienes 💎 en la Cartera.');
   if (users.diamond < count) return m.reply(`[❌] Solo tienes ${users.diamond} 💎 en la Cartera.`);
   users.diamond -= count * 1;
   users.bank += count * 1;
   await m.reply(`*Depositaste ${count} de 💎 al Banco.*`);
};

handler.help = ['depd'];
handler.tags = ['econ'];
handler.command = ['depd'];

export default handler
