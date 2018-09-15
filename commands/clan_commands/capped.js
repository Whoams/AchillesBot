const commando = require('discord.js-commando');
const discord = require('discord.js');
const fs = require('fs')

class CappedCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'capped',
            group: 'clan_commands',
            memberName: 'capped',
            description: 'Deze command doe je als je hebt gecapped!'
        });
    }

    async run(message, args)
    {
        {
            hasCapped.push(message.author);
        }
        var Cappen = new discord.RichEmbed()
            .setTitle('Cappen')
            .setDescription('Bedankt voor je inzet! Het staat genoteerd!')
            .setColor('ff0000')
            
        message.channel.send(Cappen);
    }
}

module.exports = CappedCommand;