const commando = require('discord.js-commando');
const discord = require('discord.js');

class CurrentTeamCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'currentteam',
            group: 'events',
            memberName: 'currentteam',
            description: 'Laat je het huidige team zien!'
        });
    }

    async run(message, args)
    {
        var TeamInfo = new discord.RichEmbed()
            .setTitle('Het huidige team is:')
            .setDescription(currentEventMembers)
            .setColor('ff0000')
            
        message.channel.send(TeamInfo);
    }
}

module.exports = CurrentTeamCommand;