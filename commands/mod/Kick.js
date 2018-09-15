const commando = require('discord.js-commando');
const discord = require('discord.js');

class KickCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kick',
            group: 'mod',
            memberName: 'kick',
            description: 'Schopt iemand van de server, de persoon kan wel elk moment terugkeren!'
        });
    }

    async run(message, args)
    {
        let kickedUser = message.guild.member(message.mentions.users.first());
        if(!kickedUser)
        {
            message.channel.send("Sorry maar deze persoon kon ik niet vinden.")
            return;
        }
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        {
            message.channel.send("Je hebt geen bevoegdheden hiervoor!");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(kickedUser).kick(reason)
            .then(console.log)
            .catch(console.error);
        //usage: !kick @(user) (reden)
    }
}

module.exports = KickCommand;
