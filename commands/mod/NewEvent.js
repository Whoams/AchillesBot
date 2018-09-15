const commando = require('discord.js-commando');
const discord = require('discord.js');

class NewEventCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'newevent',
            group: 'mod',
            memberName: 'newevent',
            description: 'Reset de event lijst!'
        });
    }

    async run(message, args)
    {
        
        currentEventMembers = [];
        
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        {
            message.channel.send("Je hebt geen bevoegdheden hiervoor!");
            return;
        }
        var resetTeam = new discord.RichEmbed()
        .setTitle('De lijst is gereset')
        .setDescription("Alle ingeschreven leden zijn verdwenen!")
        .setColor('ff0000')
        
    message.channel.send(resetTeam);
    }
}

module.exports = NewEventCommand;
