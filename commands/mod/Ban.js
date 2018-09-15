const commando = require('discord.js-commando');
const discord = require('discord.js');

class BanCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ban',
            group: 'mod',
            memberName: 'ban',
            description: 'BANHAMMER!'
        });
    }

    async run(message, args)
    {
        let BannedUser = message.guild.member(message.mentions.users.first());
        if(!BannedUser)
        {
            message.channel.send("Sorry maar deze persoon kon ik niet vinden.")
            return;
        }
        if(!message.member.hasPermission("VIEW_AUDIT_LOG"))
        {
            message.channel.send("Je hebt geen bevoegdheden hiervoor!");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(BannedUser).ban(reason)
            .then(console.log)
            .catch(console.error);

            var BanhammerEmbed = new discord.RichEmbed()
            .setTitle('BANHAMMER!')
            .setDescription("DE BANHAMMER HEEFT GESPROKEN!")
            .setColor('ff0000')

            message.channel.send(BanhammerEmbed);
        //usage: !ban @(user) (reden)
    }
}

module.exports = BanCommand;