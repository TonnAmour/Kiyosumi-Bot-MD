/*

CODIGO CREADO POR https://github.com/DIEGO-OFC/DORRAT-BOT-MD

*/

const cooldown = 10800000;

let handler = async (m, {conn, text, usedPrefix, command, groupMetadata}) => {
  let time = global.db.data.users[m.sender].lastrob + 7200000;
  if (new Date() - global.db.data.users[m.sender].lastrob < 7200000) throw `⏱️ Espera *${msToTime(time - new Date())}* para volver a robar`;
  if (!text) return m.reply(`*• Etiquetɑ ɑl usuɑrio que quierɑ sɑqueɑr*\n\n*Ejemplo de uso:* ${usedPrefix + command} @tɑg>.`);
  try {
    let _user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
    if (!_user in global.db.data.users) return m.reply(`El usuɑrio no estά registrɑdo en lɑ bɑse de dɑtos!`);
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
    if (!m.mentionedJid.length) m.mentionedJid.push(m.sender);
    if (global.db.data.users[_user] == undefined) return m.reply(`El usuɑrio no estά registrɑdo en lɑ bɑse de dɑtos!`);
    if (_user.startsWith(conn.user.jid.split`@`[0])) return m.reply("No puedes saquear a la bot :I");
    let uuser = global.db.data.users[_user];
    let coin = Math.floor(Math.random() * 15) + 10;
    let diamond = Math.floor(Math.random() * 5) + 3;
    let raid = `*Has saqueado ⚔️ a @${_user.split("@s.whatsapp.net")[0]}*
◦ Coins🪙: $${coin}
◦ Diamantes💎: ${diamond}

Robado por: @${m.sender.split("@")[0]}`;
    if (uuser.diamond <= 20) return m.reply("El usuario no tiene suficientes recursos!");
    if (uuser.coin <= 100) return m.reply(`El usuario no tiene suficientes recursos!`);
    global.db.data.users[_user].coin -= coin * 1;
    global.db.data.users[_user].diamond -= diamond * 1;
    global.db.data.users[m.sender].coin += coin * 1;
    global.db.data.users[m.sender].diamond += diamond * 1;
    await await conn.sendMessage(m.chat, {text: raid, mentions: [_user, m.sender]}, {quoted: m});
    /*conn.sendMessage(
    _user,
    {
      text: `*❕@${m.sender.split("@")[0]} TE ACABA DE ROBAR!*`,
      mentions: [m.sender],
    },
    { quoted: m }
  );*/
    global.db.data.users[m.sender].lastrob = new Date() * 1;
  } catch {
    await m.reply(`*[❕] ERROR, POR FAVOR INTÉNTELO DE NUEVO, SEGURAMENTE EL USUARIO ESTÁ AFK*`);
  }
};

handler.help = ["saquear [@user]"];
handler.tags = ["econ"];
handler.command = /^(raidear|saquear|rob|robar)$/i;
handler.group = true;
handler.cooldown = cooldown;
export default handler;

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + " Hora(s) " + minutes + " Minuto(s)";
}

/*import MessageType from '@adiwajshing/baileys'

const cooldown = 10800000

let handler = async (m, { conn, text, usedPrefix, command, groupMetadata }) => {
    //let _zzz = owner + "@s.whatsapp.net";
    let user = global.db.data.users[m.sender]
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
    let users = global.db.data.users[m.sender]
    let rauser = groupMetadata.participants.map(v => v.jid)[Math.floor(Math.random() * groupMetadata.participants.map(v => v.jid).length)]
    let time = global.db.data.users[m.sender].lastrob + 7200000
    if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `⏱️¡Hey! Espera *${msToTime(time - new Date())}* para volver a robar`
    if (!text) return m.reply(`*• Etiquetɑ ɑl usuɑrio que quierɑ sɑqueɑr*\n\n*Ejemplo de uso:* ${usedPrefix}sɑqueɑr <usuɑrio/@tɑg>.`)
    let _user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    //if (_zzz.includes(_user)) return m.reply("*No puedes robarle a los owner's.*")
    if (!_user in global.db.data.users) return m.reply(`El usuɑrio no estά registrɑdo en lɑ bɑse de dɑtos!`)
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
    if (global.db.data.users[_user] == undefined) return m.reply(`El usuɑrio no estά registrɑdo en lɑ bɑse de dɑtos!`)
    if (_user.startsWith(conn.user.jid.split`@`[0])) return m.reply('No puedes saquear a la bot :I')
    let uuser = global.db.data.users[_user]
    let __timers = (new Date - user.lastrob)
    let _timers = (cooldown - __timers)
    let timers = clockString(_timers)
    
    let coin = (Math.floor(Math.random() * 20) + 30)
    let diamond = (Math.floor(Math.random() * 5) + 3)

let raid = `*Has saqueado ⚔️ a @${_user.split("@s.whatsapp.net")[0]}*
◦ Dinero: $${coin}
◦ diamond: ${diamond}

Robado por: @${m.sender.split("@")[0]}`


      if (uuser.diamond <= 5) return m.reply('El usuario no tiene suficientes recursos!')
      if (uuser.coin <= 5) return m.reply('El usuario no tiene suficientes recursos!')
       
        global.db.data.users[_user].coin -= coin * 1
        global.db.data.users[_user].diamond -= diamond * 1
        
    
        global.db.data.users[m.sender].coin += coin * 1
        
        global.db.data.users[m.sender].diamond += diamond * 1
        
      
        conn.sendMessage(m.chat, {text: raid, mentions: [_user, m.sender]}, {quoted: m})
        conn.sendMessage(_user, {text: `*❕@${m.sender.split("@")[0]} TE ACABA DE ROBAR!*`, mentions: [m.sender]}, {quoted: m})
global.db.data.users[m.sender].lastrob = new Date * 1
    } 
            


handler.help = ['saquear [@user]']
handler.tags = ['rpg']
handler.command = /^(raidear|saquear|rob|robar)$/i

handler.group = true
handler.cooldown = cooldown

export default handler 

function clockString(ms) {

let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
  
    return hours + " Hora(s) " + minutes + " Minuto(s)"
  }*/

//By DIEGO-OFC
