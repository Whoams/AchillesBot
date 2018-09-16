const commando = require('discord.js-commando');
const discord = require('discord.js');

class WieHeeftGecappedCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'wiecapped',
            group: 'mod',
            memberName: 'wiecapped',
            description: 'Laat je de huidige cappers zien!'
        });
    }

    async run(message, args)
    {
        var Gecapped = new discord.RichEmbed()
            .setTitle('De helden:')
            .setDescription(hasCapped)
            .setColor('ff0000')
            
        message.user.send(Gecapped);
    }
}

module.exports = WieHeeftGecappedCommand;
