const Bixby = require('../events');

const {MessageType} = require('@ZIYAN-SER/WhatsBixby-Web-Api');

const GM = "it sends bot deploying link"

const GN = "it sends bot deploying link"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

Bixby.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "*https://github.com/ZIYAN-SER/WhatsBixby*"; 
 
    var i = Math.floor(1*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));
    

    }

    if (Config.WORKTYPE == 'public') {

        Bixby.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

                 r_text[0] = "*https://github.com/ZIYAN-SER/WhatsBixby*"; 

                     var i = Math.floor(1*Math.random())

                         await message.client.sendMessage(

                               message.jid,(r_text[i]), MessageType.text);

    }));
    

   }
