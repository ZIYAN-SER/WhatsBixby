const Bixby = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@ZIYAN-SER/WhatsBixby-Web-Api');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvV2hhdHNCaXhieS8=', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Bixby.addCommand({pattern: 'bot', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

// send a buttons message!

    const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'I Am Fine 🥰  \n\n\nOk Boshh😌😂'}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: 'Ooh Pettenn Onn Fear Aayi😐   \n\n\nFear Aavanda Ithokke Ente Oorooo Kalikal Allee🤭🌚'}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: 'Hii    \n\n\nAnthadaa🐦'}, type: 1}

      ]

      

      const buttonMessage = {

          contentText: "Hi Enthokke Und Bheei Chugam Thanne Allee? 😆",

          footerText: 'Owner ZIYAN',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
