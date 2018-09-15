const commando = require('discord.js-commando');
const discord = require('discord.js')

class ClanmateCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clanmate',
            group: 'clan_commands',
            memberName: 'clanmate',
            description: 'Iemand joined de clanmate role!'
        });
    }

    async run(message, args)
    {
        let clanUser = message.guild.member(message.users.first());
        let myRole = message.guild.roles.find('name','Clanmate')
        clanUser.addRole(myRole)
        message.reply('Welkom in de clan! :D')
    };
}

module.exports = ClanmateCommand;