//                     zimbot.inc.pressents 
//                     2022 production
//                     Thanks to dikArdnt
// 👋 SOME BUG ARE FIXING AND ADD NEW PARTS by MR NIMA 
                                                                                        //drips


const fs = require('fs')
const chalk = require('chalk')

//global api
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['94705901949'] 
global.pemilik = ['94705901949'] //pemilik nomor
global.premium = ['94705901949'] //premium number
global.pengguna = 'Nima' //pengguna
global.botnma = 'GROUP BOT INC' //botnama,botname
global.ownernma = 'nima' //ownernama,ownername
global.packname = '© ɴɪᴍᴀ ᴇᴅɪᴛɪᴏɴ' // packname
global.author = 'ɴɪᴍᴀ ᴏғᴄ ɢʀᴏᴜᴘ ʙᴏᴛ' //authorname
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
global.alive =`Hello i am alive now

Download song type .yt 
Thanks fro using...`
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'zim bot must be admin neh!',
    owner: 'This cmd is for zim bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'wait zim bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/drips.jpg')
global.imgalive = fs.readFileSync('./image/drips.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
