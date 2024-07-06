import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

import fs from 'fs'

global.owner = [
  ['15108170058', 'Ton', true],
  ['']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['', '']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'jFC2wbXQ' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '' 
global.author = 'Ai Kiyosumi' 
global.fs = fs

//--info Kiyo
global.botName = 'Ai Kiyosumi'
global.fgig = 'https://whatsapp.com/channel/0029VaYTBn3DZ4LaHbgzxw0B' 
global.fgsc = 'https://whatsapp.com/channel/0029VaYTBn3DZ4LaHbgzxw0B' 
global.fgyt = 'https://whatsapp.com/channel/0029VaYTBn3DZ4LaHbgzxw0B'
global.fgpyp = 'https://whatsapp.com/channel/0029VaYTBn3DZ4LaHbgzxw0B'
global.fglog = 'https://whatsapp.com/channel/0029VaYTBn3DZ4LaHbgzxw0B' 
global.canal1 = 'https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A'

//--- Grupos WA
global.id_canal = '120363292409483536@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaYTBn3DZ4LaHbgzxw0B'
global.bgp = 'https://whatsapp.com/channel/0029VaYTBn3DZ4LaHbgzxw0B'
global.bgp2 = 'https://whatsapp.com/channel/0029VaYTBn3DZ4LaHbgzxw0B'
global.bgp3 = 'https://whatsapp.com/channel/0029VaYTBn3DZ4LaHbgzxw0B' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.miniurl = fs.readFileSync('./src/catalogo.png')

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
