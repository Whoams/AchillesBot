const discord = require('discord.js');
const Commando = require('discord.js-commando');
const fs = require('fs')
const bot = new Commando.Client({
    commandPrefix: "*"
    })

bot.registry.registerGroup('clan_commands', 'Clan_Commands');
bot.registry.registerGroup('mod', 'Mod');
bot.registry.registerGroup('events', 'Events');
bot.registry.registerGroup('fun', 'Fun');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

global.hasCapped = [];
global.currentEventMembers = [];
global.server = {};

bot.on('message', function(message){
    if(message.content == 'test')
    {
        message.reply('Dit woord wordt hier niet toegestaan!')
    }
});


bot.on('ready',function(){
    console.log("I'm ready!")
    bot.user.setActivity("with Yao", {type: 'STREAMING'})
});

bot.login(process.env.BOT_TOKEN);
