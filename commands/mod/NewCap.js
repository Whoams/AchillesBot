const commando = require('discord.js-commando');
const discord = require('discord.js');

class NewEventCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'newcap',
            group: 'mod',
            memberName: 'newcap',
            description: 'Reset de cap lijst!'
        });
    }

    async run(message, args)
    {
        
        hasCapped = [];
        
        if(!message.member.hasPermission("VIEW_AUDIT_LOG"))
        {
            message.channel.send("Je hebt geen bevoegdheden hiervoor!");
            return;
        }
        var resetCap = new discord.RichEmbed()
        .setTitle('De lijst is gereset')
        .setDescription("Alle gecapte leden zijn verdwenen!")
        .setColor('ff0000')
        
    message.channel.send(resetCap);
    }
}

module.exports = NewEventCommand;