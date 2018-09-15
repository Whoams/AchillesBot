const commando = require('discord.js-commando');
const discord = require('discord.js')

class UnmuteCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'unmute',
            group: 'mod',
            memberName: 'unmute',
            description: 'Haalt de Muted role weg.'
        });
    }

    async run(message, args)
    {
        let MutedUser = message.guild.member(message.mentions.users.first());
        if(!MutedUser)
        {
            message.channel.send("Sorry maar deze persoon kon ik niet vinden.")
            return;
        }
        if(!message.member.hasPermission("VIEW_AUDIT_LOG"))
        {
            message.channel.send("Je hebt geen bevoegdheden hiervoor!");
            return;
        }
        let myRole = message.guild.roles.find('name','Muted')
        MutedUser.removeRole(myRole)
        var Unmute = new discord.RichEmbed()
        .setTitle('Muted -> Unmuted')
        .setDescription('Je bent nu ge-unmute! verpest je 2e kans niet!')
        .setColor('ff0000')
        
    message.channel.send(Unmute);
    };
}

module.exports = UnmuteCommand;