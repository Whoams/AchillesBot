const commando = require('discord.js-commando');
const discord = require('discord.js')

class MuteCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mute',
            group: 'mod',
            memberName: 'mute',
            description: 'Laat iemand zijn mond houden!'
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
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        {
            message.channel.send("Je hebt geen bevoegdheden hiervoor!");
            return;
        }
        let myRole = message.guild.roles.find('name','Muted')
        MutedUser.addRole(myRole)
        var Mute = new discord.RichEmbed()
        .setTitle('BOEM! GEMUTE!')
        .setDescription('Die houdt voorlopig zijn/haar mondje dicht!')
        .setColor('ff0000')
        
    message.channel.send(Mute);
    };
}

module.exports = MuteCommand;
