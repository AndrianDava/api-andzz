require('../settings')
const express = require('express')
var isUrl = require("is-url")
var fetch = require('node-fetch')
const isImageURL = require('image-url-validator').default
const textpro = require('../lib/textpro')
const photooxy = require('../lib/photooxy')
const { fetchJson, runtime, getBuffer } = require('../lib/functions')
const { set } = require('lodash')
var router = express.Router()


// - DOWNLOADER MENU - \\
router.get('/downloader/fbdl', async (req, res, next) => {
var url = req.query.url
var apikey = req.query.apikey
if (!url) return res.json(loghandler.noturl)  
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://aemt.me/download/fbdl?url=${url}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/downloader/tiktok', async (req, res, next) => {
var url = req.query.url
var apikey = req.query.apikey
if (!url) return res.json(loghandler.noturl)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://apiruulzz.my.id/api/tiktok?url=${url}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/downloader/ytdl', async (req, res, next) => {
var url = req.query.url
var apikey = req.query.apikey
if (!url) return res.json(loghandler.noturl)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://aemt.me/download/ytdl?url=${url}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/downloader/spotifydl', async (req, res, next) => {
    var url = req.query.url
    var apikey = req.query.apikey
    if (!url) return res.json(loghandler.noturl)
    if (!apikey) return res.json(loghandler.notapikey)
    if(listkey.includes(apikey)){
    let anu = await fetchJson(`https://apiruulzz.my.id/api/spotify?url=${url}`)
    res.json({
    status: true,
    creator: `${creator}`,
    result: anu.result
    })
    } else {
    res.json(loghandler.notapikey)
    }
    })
    router.get('/downloader/pindl', async (req, res, next) => {
        var url = req.query.url
        var apikey = req.query.apikey
        if (!url) return res.json(loghandler.noturl)
        if (!apikey) return res.json(loghandler.notapikey)
        if(listkey.includes(apikey)){
        let anu = await fetchJson(`https://aemt.me/download/pindl?url=${url}`)
        res.json({
        status: true,
        creator: `${creator}`,
        result: anu.result
        })
        } else {
        res.json(loghandler.notapikey)
        }
        })

        router.get('/downloader/ttdl', async (req, res, next) => {
            var url = req.query.url
            var apikey = req.query.apikey
            if (!url) return res.json(loghandler.noturl)
            if (!apikey) return res.json(loghandler.notapikey)
            if(listkey.includes(apikey)){
            let anu = await fetchJson(`https://tiktokdl-x6vm.onrender.com/tiktok/api.php?url=${url}`)
            res.json({
            status: true,
            creator: `${creator}`,
            result: anu
            })
            } else {
            res.json(loghandler.notapikey)
            }
            })


// - STALKER MENU - \\
router.get('/stalker/instagram', async (req, res, next) => {
var username = req.query.username
var apikey = req.query.apikey
if (!username) return res.json(loghandler.notusername)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://saipulanuar.ga/api/stalk/ig?username=${username}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/stalker/tiktok', async (req, res, next) => {
var username = req.query.username
var apikey = req.query.apikey
if (!username) return res.json(loghandler.notusername)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://saipulanuar.ga/api/download/tiktokstalk?username=${username}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/stalker/npm', async (req, res, next) => {
var username = req.query.username
var apikey = req.query.apikey
if (!username) return res.json(loghandler.notusername)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://saipulanuar.ga/api/stalk/npm?username=${username}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/stalker/freefire', async (req, res, next) => {
var id = req.query.id
var apikey = req.query.apikey
if (!id) return res.json(loghandler.notid)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://saipulanuar.ga/api/stalk/epep?id=${id}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/stalker/mobilelegend', async (req, res, next) => {
var id = req.query.id
var server = req.query.server
var apikey = req.query.apikey
if (!id) return res.json(loghandler.notid)
if (!server) return res.json(loghandler.notserver)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://saipulanuar.ga/api/stalk/ml?id=${id}&server=${server}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})


// - SEARCH MENU - \\
router.get('/search/cuaca', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${q}?apikey=${lolkey}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/search/spotify', async (req, res, next) => {
    var q = req.query.q
    var apikey = req.query.apikey
    if (!q) return res.json(loghandler.notq)
    if (!apikey) return res.json(loghandler.notapikey)
    if(listkey.includes(apikey)){
    let anu = await fetchJson(`https://apiruulzz.my.id/api/spotifySearch?query=${q}`)
    res.json({
    status: true,
    creator: `${creator}`,
    result: anu.result
    })
    } else {
    res.json(loghandler.notapikey)
    }
    })
    router.get('/search/tts', async (req, res, next) => {
        var q = req.query.q
        var apikey = req.query.apikey
        if (!q) return res.json(loghandler.notq)
        if (!apikey) return res.json(loghandler.notapikey)
        if(listkey.includes(apikey)){
        let anu = await fetchJson(`https://aemt.me/tiktoksearch?text=${q}`)
        res.json({
        status: true,
        creator: `${creator}`,
        result: anu.result
        })
        } else {
        res.json(loghandler.notapikey)
        }
        })
router.get('/search/jadwaltv', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let anu = await fetchJson(`https://aemt.me/jadwaltv?tv=${q}`)
res.json({
status: true,
creator: `${creator}`,
result: anu.result
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/search/gimage', async (req, res, next) => {
    var q = req.query.q
    var apikey = req.query.apikey
    if (!q) return res.json(loghandler.notq)
    if (!apikey) return res.json(loghandler.notapikey)
    if(listkey.includes(apikey)){
    let anu = await fetchJson(`https://aemt.me/googleimage?query=${q}`)
    res.json({
    status: true,
    creator: `${creator}`,
    result: anu.result
    })
    } else {
    res.json(loghandler.notapikey)
    }
    })

// - MAKER MENU - \\
router.get('/maker/attp', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://aemt.me/attp?text=${q}`)
res.set({'Content-Type': 'image/webp'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})
router.get('/maker/ttp', async (req, res, next) => {
var q = req.query.q
var apikey = req.query.apikey
if (!q) return res.json(loghandler.notq)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://aemt.me/ttp?text=${q}`)
res.set({'Content-Type': 'image/webp'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})

// - TOOL MENU - \\
router.get('/tool/gemini', async (req, res, next) => {
    var q = req.query.q
    if (!q) return res.json(loghandler.notq)
    let anu = await fetchJson(`https://apiruulzz.my.id/api/gemini?query=${q}`)
    res.json({
    status: true,
    creator: `${creator}`,
    result: anu.result
    })
    })


// - PHOTOOXY MENU - \\
router.get('/photooxy/dark-metal', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/elegant-3d-neon-dark-metal-text-effect-online-free-416.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/white-stone', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/shadow', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/white-cube', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/gradient', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/gradient-avatar-text-effect-207.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/fur-text', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/fur-text-effect-generator-198.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/flaming', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/scary-cemetery', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/harry-potter', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/3d-wood', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/3d-wood-text-black-style-182.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/illuminated-metallic', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/put-your', async(req, res, next) => {
var text = req.query.text
var apikey = req.query.apikey
if (!text) return res.json(loghandler.nottext)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html", [text]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})
router.get('/photooxy/8-bit', async(req, res, next) => {
var text1 = req.query.text1
var text2 = req.query.text2
var apikey = req.query.apikey
if (!text1) return res.json(loghandler.nottext1)
if (!text2) return res.json(loghandler.nottext2)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
photooxy("https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html", [text1,text2]).then((data) =>{ 
res.set({'Content-Type': 'image/jpg'})
res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
} else {
res.json(loghandler.notapikey)
}
})


// - TOOLS MENU - \\
router.get('/tools/ssweb', async (req, res, next) => {
var url = req.query.url
var apikey = req.query.apikey
if (!url) return res.json(loghandler.noturl)
if (!apikey) return res.json(loghandler.notapikey)
if(listkey.includes(apikey)){
let result = await getBuffer(`https://saipulanuar.ga/api/download/ssweb?url=${url}`)
res.set({'Content-Type': 'image/jpg'})
res.send(result)
} else {
res.json(loghandler.notapikey)
}
})

module.exports = router
