import db from '../lib/database.js';

let handler = async (m, { args }) => {
   
   let user =  global.db.data.users[m.sender]; if (!args[0]) return m.reply('*[❌] Ingresa la cantidad de 💎 que deseas Retirar.*');
   if (args[0] == '--all') {
      let count = parseInt(user.bank);
      user.bank -= count * 1
      user.diamond += count * 1
      await m.reply(`*Retiraste ${count} de 💎 del Banco.*`);
      return !0
   }
   if (!Number(args[0])) return m.reply('[⚠️] La cantidad debe ser un Numero.');
   let count = parseInt(args[0]);
   if (!user.bank) return m.reply('[😿] No tienes 💎 en Banco.')
   if (user.bank < count) return m.reply(`[❌] Solo tienes ${user.bank} de 💎 en el Banco.`)
   user.bank -= count * 1
   user.diamond += count * 1
   await m.reply(`*Retiraste ${count} de 💎 del Banco.*`)
}

handler.help = ['retd']
handler.tags = ['econ']
handler.command = ['retd'] 

export default handler
