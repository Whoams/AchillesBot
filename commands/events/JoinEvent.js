const commando = require('discord.js-commando');
const discord = require('discord.js');
const fs = require('fs')

class JoinEventCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'joinevent',
            group: 'events',
            memberName: 'joinevent',
            description: 'Schrijf je in voor het huidige event!'
        });
    }

    async run(message, args)
    {
        {
            currentEventMembers.push(message.author);
        }
        var TeamInfo = new discord.RichEmbed()
            .setTitle('event')
            .setDescription('Je bent ingeschreven!')
            .setColor('ff0000')
            
        message.channel.send(TeamInfo);
    }
}

module.exports = JoinEventCommand;