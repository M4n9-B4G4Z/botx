const fs = require('fs-extra')
const {
		prefix
} = JSON.parse(fs.readFileSync('./lib/database/setting.json'))


//let prefix = setting


function menu() {
    return `
         •  『 𝐌𝐄𝐍𝐔 』 •
    ╭───────────────────    
    ├─❏ *${prefix}ownermenu*
    ├─❏ *${prefix}adminmenu*
    ├─❏ *${prefix}groupmenu*
    ├─❏ *${prefix}edukasimenu*
    ├─❏ *${prefix}mediamenu*
    ├─❏ *${prefix}stickermenu*
    ├─❏ *${prefix}animemenu*
    ├─❏ *${prefix}downloadmenu*
    ├─❏ *${prefix}infomenu*
    ├─❏ *${prefix}vipmenu*
    ╰───────────────────`
}
exports.menu = menu()
function ownermenu() {   
        return `    
        『 *𝐎𝐖𝐍𝐄𝐑* 』
 ╭───────────────────
 ├─❏ *${prefix}block*
 ├─❏ *${prefix}unblock*
 ├─❏ *${prefix}addadmin*
 ├─❏ *${prefix}deladmin*
 ├─❏ *${prefix}restart*
 ├─❏ *${prefix}ekickall*
 ├─❏ *${prefix}banchat*
 ├─❏ *${prefix}unbanchat*
 ├─❏ *${prefix}changepf*
 ├─❏ *${prefix}addvip*
 ├─❏ *${prefix}delvip*
 ├─❏ *${prefix}addlimit*
 ├─❏ *${prefix}ping*
 ├─❏ *${prefix}nafizgroup*
 ├─❏ *${prefix}nafizadmin*
 ├─❏ *${prefix}addlimit*
 ╰───────────────────`
}
exports.ownermenu = ownermenu()
function adminmenu() {
    return `
        『 *𝐀𝐃𝐌𝐈𝐍* 』
 ╭───────────────────
 ├─❏ *${prefix}mute*
 ├─❏ *${prefix}unmute*
 ├─❏ *${prefix}ban*
 ├─❏ *${prefix}unban*
 ├─❏ *${prefix}spamcall*
 ├─❏ *${prefix}kickall*
 ├─❏ *${prefix}oleave*
 ├─❏ *${prefix}opromote*
 ├─❏ *${prefix}odemote*
 ├─❏ *${prefix}odelete*
 ├─❏ *${prefix}oadd*
 ├─❏ *${prefix}kick*
 ├─❏ *${prefix}okickall*
 ├─❏ *${prefix}otagall*
 ├─❏ *${prefix}changepf*
 ╰───────────────────`
}

exports.adminmenu = adminmenu()
function infomenu() {
    return `
        『 *𝐈𝐍𝐅𝐎* 』
 ╭───────────────────
 ├─❏ *${prefix}bugreport*
 ├─❏ *${prefix}reqfiture*
 ├─❏ *${prefix}listblock*
 ├─❏ *${prefix}listbanned*
 ├─❏ *${prefix}limit*
 ├─❏ *${prefix}listgroup*
 ├─❏ *${prefix}snk*
 ├─❏ *${prefix}readme*
 ├─❏ *${prefix}owner*
 ├─❏ *prefix*
 ╰───────────────────`
}

exports.infomenu = infomenu()
function edukasimenu() {
    return `
        『 *𝐄𝐃𝐔𝐊𝐀𝐒𝐈* 』
 ╭───────────────────
 ├─❏ *${prefix}sandwriting*
 ├─❏ *${prefix}nulis*
 ├─❏ *${prefix}brainlysearch*
 ├─❏ *${prefix}kbbi*
 ├─❏ *${prefix}wiki*
 ├─❏ *${prefix}translate*
 ├─❏ *${prefix}brainly*
 ├─❏ *${prefix}bahasa*
 ╰───────────────────`
}

exports.edukasimenu = edukasimenu()
function praymenu() {
    return `
        『 *𝐏𝐑𝐀𝐘* 』
 ╭───────────────────
 ├─❏ *${prefix}quran*
 ├─❏ *${prefix}tafsir*
 ├─❏ *${prefix}jadwalsholat*
 ├─❏ *${prefix}listdaerah*
 ├─❏ *${prefix}listsurah*
 ├─❏ *${prefix}infosurah*
 ╰───────────────────`
}

exports.praymenu = praymenu()
function kerangmenu() {
    return `
        『 *𝐊𝐄𝐑𝐀𝐍𝐆* 』
 ╭───────────────────
 ├─❏ *${prefix}apakah*
 ├─❏ *${prefix}rate*
 ├─❏ *${prefix}bisakah*
 ├─❏ *${prefix}kapankah*
 ├─❏ *${prefix}bisakah*
 ├─❏ *${prefix}maukah*
 ╰───────────────────`
}

exports.kerangmenu = kerangmenu()
function mediamenu() {
    return `
        『 *𝐌𝐄𝐃𝐈𝐀* 』
 ╭───────────────────
 ├─❏ *${prefix}ramalpasangan*
 ├─❏ *${prefix}artinama*
 ├─❏ *${prefix}covid*
 ├─❏ *${prefix}quotemaker*
 ├─❏ *${prefix}jadwalTv*
 ├─❏ *${prefix}cuaca*
 ├─❏ *${prefix}resepmasakan*
 ├─❏ *${prefix}tts*
 ├─❏ *${prefix}igstalk*
 ├─❏ *${prefix}tiktokstalk*
 ├─❏ *${prefix}smulestalk*
 ├─❏ *${prefix}shopee*
 ├─❏ *${prefix}google*
 ├─❏ *${prefix}pinterest*
 ├─❏ *${prefix}playstore*
 ├─❏ *${prefix}googleimage*
 ├─❏ *${prefix}youtubesearch*
 ├─❏ *${prefix}lirik*
 ├─❏ *${prefix}chord*
 ├─❏ *${prefix}qrcode*
 ├─❏ *${prefix}maps*
 ├─❏ *${prefix}textmaker*
 ├─❏ *${prefix}checkip*
 ├─❏ *${prefix}ssweb*
 ├─❏ *${prefix}sspc*
 ├─❏ *${prefix}ssphone*
 ├─❏ *${prefix}shorturl*
 ├─❏ *${prefix}stickertoimg*
 ├─❏ *${prefix}neko*
 ├─❏ *${prefix}pokemon*
 ├─❏ *${prefix}inu*
 ├─❏ *${prefix}infoGempa*
 ├─❏ *${prefix}quotes*
 ├─❏ *${prefix}dadu*
 ├─❏ *${prefix}koin*
 ├─❏ *${prefix}quoterandom*
 ├─❏ *${prefix}nyimak*
 ╰───────────────────`
}

exports.mediamenu = mediamenu()
function animemenu() {
    return `
        『 *𝐀𝐍𝐈𝐌𝐄* 』
 ╭───────────────────
 ├─❏ *${prefix}loli*
 ├─❏ *${prefix}shota*
 ├─❏ *${prefix}waifu*
 ├─❏ *${prefix}husbu*
 ├─❏ *${prefix}randomNekoNime*
 ├─❏ *${prefix}randomTrapNime*
 ├─❏ *${prefix}randomAnime*
 ├─❏ *${prefix}quotesnime*
 ├─❏ *${prefix}wait*
 ├─❏ *${prefix}koin*
 ├─❏ *${prefix}malanime*
 ├─❏ *${prefix}malcharacter*
 ├─❏ *${prefix}kusonime*
 ├─❏ *${prefix}otakudesu*
 ├─❏ *${prefix}dewabatch*
 ├─❏ *${prefix}komiku*
 ├─❏ *${prefix}animesearch*
 ╰───────────────────`
}

exports.animemenu = animemenu()
function stickermenu() {
    return `
        『 *𝐒𝐓𝐈𝐂𝐊𝐄𝐑* 』
 ╭───────────────────
 ├─❏ *${prefix}sticker*
 ├─❏ *${prefix}harta*
 ├─❏ *${prefix}hartasticker*
 ├─❏ *${prefix}glowmaker*
 ├─❏ *${prefix}lovemaker*
 ├─❏ *${prefix}partyteks*
 ├─❏ *${prefix}romanceteks*
 ├─❏ *${prefix}silkteks*
 ├─❏ *${prefix}glitchteks*
 ├─❏ *${prefix}thunder*
 ├─❏ *${prefix}Thundersticker*
 ├─❏ *${prefix}blackpink*
 ├─❏ *${prefix}waterteks*
 ├─❏ *${prefix}fssarah*
 ├─❏ *${prefix}slidingteks*
 ├─❏ *${prefix}searchteks*
 ├─❏ *${prefix}cogan*
 ├─❏ *${prefix}cecan1*
 ├─❏ *${prefix}cecan2*
 ├─❏ *${prefix}ttp
 ╰───────────────────`
}

exports.stickermenu = stickermenu()
function downloadmenu() {
    return `
        『 *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃* 』
 ╭───────────────────
 ├─❏ ~*${prefix}ytmp3*~
 ├─❏ ~*${prefix}ytmp4*~
 ├─❏ *${prefix}ig*
 ├─❏ *${prefix}fb*
 ├─❏ *${prefix}twitter*
 ├─❏ *${prefix}smule*
 ├─❏ *${prefix}tiktok*
 ├─❏ *${prefix}starmaker*
 ├─❏ *${prefix}nhder*
 ╰───────────────────`
}
exports.downloadmenu = downloadmenu()
function groupmenu() {
    return `
        『 *𝐆𝐑𝐎𝐔𝐏* 』
 ╭───────────────────
 ├─❏ *${prefix}snk*
 ├─❏ *${prefix}intro*
 ├─❏ *${prefix}setlink*
 ├─❏ *${prefix}setname*
 ├─❏ *${prefix}setpic*
 ├─❏ *${prefix}setdesk*
 ├─❏ *${prefix}groupinfo*
 ├─❏ *${prefix}linkgroup*
 ├─❏ *${prefix}bukagc*
 ├─❏ *${prefix}tutupgc*
 ├─❏ *${prefix}profile*
 ├─❏ *${prefix}getprofile*
 ├─❏ *${prefix}add*
 ├─❏ *${prefix}promote*
 ├─❏ *${prefix}demote*
 ├─❏ *${prefix}tagall*
 ├─❏ *${prefix}adminList*
 ├─❏ *${prefix}ownerGroup*
 ├─❏ *${prefix}leave*
 ├─❏ *${prefix}delete*
 ├─❏ *${prefix}kickAll*
 ├─❏ *${prefix}NSFW*
 ├─❏ *${prefix}left*
 ├─❏ *${prefix}welcome*
 ├─❏ *${prefix}simi*
 ╰───────────────────`
}
exports.groupmenu = groupmenu()
function vipmenu() {
    return `
        『 *𝐕𝐈𝐏* 』
 ╭───────────────────
▪├❍ *${prefix}afk*
▪├❍ *${prefix}sgif*
▪├❍ *${prefix}play*
▪├❍ *${prefix}cecanvideo*
▪├❍ *${prefix}video*
▪├❍ *${prefix}getvideo*
▪├❍ *${prefix}music lagu*
▪├❍ *${prefix}getmusic*
▪├❍ *${prefix}ytsearch*
▪├❍ *${prefix}joox*
▪├❍ *${prefix}tekshub*
▪├❍ *${prefix}sfire*
▪├❍ *${prefix}slight*
▪├❍ *${prefix}xnxx*
▪├❍ *${prefix}xvideos*
▪├❍ *${prefix}getxvideos*
▪├❍ *${prefix}nhentai*
▪├❍ *${prefix}getnhentai*
▪├❍ *${prefix} teks (simi)*
 ╰───────────────────`
}

exports.vipmenu = vipmenu()
function readme() {
    return `
            *「 STALK 」*

*@username* Diisi dengan Username yang valid tanpa tanda “” dan “”
Contoh : *${prefix}tiktokstalk @tobz2k19*

*@username* Diisi dengan Username yang valid tanpa tanda “” dan “”
Contoh : *${prefix}igstalk @tobz2k19*

*@username* Diisi dengan Username yang valid tanpa tanda “” dan “”
Contoh : *${prefix}smulestalk @tobz2k19*

            *「 YT SEARCH 」*

*video* Diisi dengan Judul Video yang valid tanpa tanda “” dan “”
Contoh : *${prefix}video Erpan1140*
Jika ingin mendownload video harap ketik @getvideo IdDownload atau @getvideo urutan

*lagu* Diisi dengan Judul Lagu yang valid tanpa tanda “” dan “”
Contoh : *${prefix}music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik @getmusic IdDownload atau @getmusic urutan

*IdDownload atau urutan* Diisi dengan IdDownload yang valid tanpa tanda “” dan “”
Contoh : *Jika tidak reply pesan : @getmusic Iv32bS1*
Contoh : *Jika reply pesan : @getmusic 1*
Contoh : *Jika tidak reply pesan : @getvideo Iv32bS1*
Contoh : *Jika reply pesan : @getvideo 1*

            *「 DOWNLOADER 」*

*linkStarmaker* Diisi dengan link Starmaker yang valid tanpa tanda “” dan “”
Contoh : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*linkTwitter* Diisi dengan link YouTube yang valid tanpa tanda “” dan “”
Contoh : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*linkXnxx* Diisi dengan link Xnxx yang valid tanpa tanda “” dan “”
Contoh : *${prefix}xnxx http://www.xnxx.com/loli/stev-gay*

*linkNekopoi* Diisi dengan link Nekopoi yang valid tanpa tanda “” dan “”
Contoh : *${prefix}nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*

*linkYt* Diisi dengan link YouTube yang valid tanpa tanda “” dan “”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*linkYt* Diisi dengan link YouTube yang valid tanpa tanda “” dan “”
Contoh : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*linkTiktok* Diisi dengan link Tiktok yang valid tanpa tanda “” dan “”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*linkSmule* Diisi dengan link Smule yang valid tanpa tanda “” dan “”
Contoh : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*linkIg* Diisi dengan link Instagram yang valid tanpa tanda “” dan “”
Contoh : *${prefix}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*linkFb* Diisi dengan link Facebook yang valid tanpa tanda “” dan “”
Contoh : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*linkTiktok* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “” dan “”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*daerah* Diisi dengan daerah yang valid, tanpa tanda “” dan “”
Contoh : *${prefix}jadwalShalat Tangerang*

*channel* Diisi dengan channel televisi yang valid, tanpa tanda “” dan “”
Contoh : *${prefix}jadwalTv Indosiar*

*query* Diisi dengan query/pencarian yang valid, tanpa tanda “” dan ““
Contoh : *${prefix}googlesearch siapa itu Sasha*

*tempat* Diisi dengan tempat/lokasi yang valid, tanpa tanda “” dan ““
Contoh : *${prefix}cuaca tangerang*

*kode bhs* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *teks* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “” dan “”
Contoh : *${prefix}tts id Test*
Note : Max 250 huruf

*|teks|author|theme* Diisi dengan teks, author, dan theme, tanpa tanda “” dan “”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*optional* Diisi dengan teks|title lirik lagu, tanpa tanda “” dan “”.
Contoh : *${prefix}lirik aku bukan boneka*

*ipaddress* Diisi dengan Ip Address yang valid, tanpa tanda “” dan “”.
Contoh : *${prefix}checkip 182.0.144.145*`
}
exports.readme = readme()
function info() {
    return `
╔══✪〘 INFORMATION 〙✪══

 ├─❏ *BOT TYPE : NODEJS v5.0*
 ├─❏ *NAME : 𝐍𝐀𝐅𝐈𝐙-𝐁𝐎𝐓*
 ├─❏ *VERSION : 5.0*
 ├─❏ *TEAM : @TEAMGACOR404*

──────────────────
`
}

exports.info = info()
function snk() {
    return `Syarat dan Ketentuan Bot *Nafiz*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk()
function sewa() {
    return `
╔═══════════════════════════
- KAK KEUNTUNGAN JADI VIP ITU APA SIH?

*KEUNTUNGAN VIP*
1. Pemakaian Unlimited
2. Bisa Memasukan BOT Ke Grup Kalian
3. Bisa Menggunaka Fitur VIP
╚═══════════════════════════
      〘 𝐍𝐀𝐅𝐈𝐙-𝐁𝐎𝐓 〙
`
}
exports.sewa = sewa()
function sumbang() {
    return `
╔══✪〘 DONATE 〙✪══

 ├─❏ *DONASI BISA MELALUI :*
 ├─❏ *TELKOMSEL : 081220439155*
 ├─❏ *INDOSAT : 085773825142*
 ├─❏ *DANA : 081220439155*
 ├─❏ *GOPAY : 081220439155*
 ├─❏ *TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*

──────────────────
`
}
exports.sumbang = sumbang()
function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
function bahasalist() {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `
}
exports.bahasalist = bahasalist()
