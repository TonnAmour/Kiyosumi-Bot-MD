import db from '../lib/database.js';

let handler = async (m, { args }) => {
   
   let user =  global.db.data.users[m.sender]; if (!args[0]) return m.reply('*[❌] Ingresa la cantidad de 🪙 que deseas Retirar.*');
   if (args[0] == '--all') {
      let count = parseInt(user.banc);
      user.banc -= count * 1
      user.coin += count * 1
      await m.reply(`*Retiraste ${count} de 🪙 del Banco.*`);
      return !0
   }
   if (!Number(args[0])) return m.reply('[⚠️] La cantidad debe ser un Numero.');
   let count = parseInt(args[0]);
   if (!user.banc) return m.reply('[😿] No tienes 🪙 en Banco.')
   if (user.banc < count) return m.reply(`[❌] Solo tienes ${user.banc} de 🪙 en el Banco.`)
   user.banc -= count * 1
   user.coin += count * 1
   await m.reply(`*Retiraste ${count} de 🪙 del Banco.*`)
}

handler.help = ['retc']
handler.tags = ['econ']
handler.command = ['retc'] 

export default handler
