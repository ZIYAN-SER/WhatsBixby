

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@ZIYAN-SER/WhatsBixby-Web-Api');
const fs = require('fs');
const axios = require('axios');
const request = require('request');

const Language = require('../language');
const Lang = Language.getString('random_pic');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'bts ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.BTS_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/random/bts?apikey=queenamdipublic`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '©BIXBY MOWL'})

    }));

    Asena.addCommand({pattern: 'exo ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.EXO_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/random/exo?apikey=queenamdipublic`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '©BIXBY MOWL'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.BP_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/random/blackpink?apikey=queenamdipublic`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '©BIXBY MOWL'})

    }));
}

else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'bts ?(.*)', fromMe: false, desc: Lang.BTS_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/random/bts?apikey=queenamdipublic`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '©BIXBY MOWL'})

    }));

   Asena.addCommand({pattern: 'exo ?(.*)', fromMe: false, desc: Lang.EXO_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/random/exo?apikey=queenamdipublic`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '©BIXBY MOWL'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: false, desc: Lang.BP_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/random/blackpink?apikey=queenamdipublic`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '©BIXBY MOWL'})

    }));
}
