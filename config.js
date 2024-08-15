import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.setting = {
 autoclear: false,
 addReply: true
 }

global.owner = [
['212658594530', 'AHMED ALIGUE', true],
['212605784394', 'silana', false],
['', '', false]
]

global.info = {
 nomerbot: '218930304217',
 pairingNumber: '212693227969',
 nameown: 'AHMED ALIGUD',
 nomerown: '212658594530',
 packname: 'sticker by ',
 author: 'BOT SENKU',
 namebot: 'ꜱɪʟᴀɴᴀ',
 wm: ''-'_꩜ 𝘚𝘪𝘭𝘢𝘯𝘢 𝘣𝘰𝘵 ꩜_'-'',
 stickpack: 'Whatsapp',
 stickauth: 'ꜱɪʟᴀɴᴀ ʙᴏᴛ '
}

// Thumbnail 
global.media = {
 profil: 'https://i.ibb.co/3Fh9V6p/avatar-contact.png',
 did: 'https://telegra.ph/file/7eaa19b36e5f61f34ef3a.jpg',
 rules: 'https://telegra.ph/file/7eaa19b36e5f61f34ef3a.jpg',
 thumbnail: 'https://telegra.ph/file/7eaa19b36e5f61f34ef3a.jpg',
 thumb: 'https://telegra.ph/file/7eaa19b36e5f61f34ef3a.jpg',
 logo: 'https://telegra.ph/file/7eaa19b36e5f61f34ef3a.jpg',
 unReg: 'https://telegra.ph/file/7eaa19b36e5f61f34ef3a.jpg',
 registrasi: 'https://telegra.ph/file/7eaa19b36e5f61f34ef3a.jpg',
 confess: 'https://telegra.ph/file/7eaa19b36e5f61f34ef3a.jpg',
 akses: 'https://telegra.ph/file/7eaa19b36e5f61f34ef3a.jpg', 
 wel: 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4', // gif welcome 
 bye: 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4', // gif good bye
 sound: 'https://media.vocaroo.com/mp3/1awgSZYHXP3B' // untuk menu
}

// Sosmed
global.url = {
 sig: 'https://www.instagram.com/dev_senku_ishigami?igsh=OGQ5ZDc2ODk2ZA==',
 sgh:  'https://github.com/Ahmedaligue',
 sgc: 'https://chat.whatsapp.com/DKKRVApRJXo4wq3mRq2mjt'
}

global.wait =` انتظر .. أنا أحاول تلبية طلبك ...`

// Info Wait
global.msg = {
 wait: '⏱️ *Please be patient*\n\> Running command from *User*!',
 eror: '🤖*Bot Information*\n\> Sorry for the inconvenience in using *Bobiza Bot*. There was an error in the system while executing the command.'
}

global.multiplier = 69
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
      let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
}

// Apikey
global.api = {
 lol: 'GataDios'

}
global.APIs = {
  lol: "https://api.lolhumaan.xyz"
}

//Apikey
global.APIKeys = {
    "https://api.lolhumaan.xyz": "GataDios"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
