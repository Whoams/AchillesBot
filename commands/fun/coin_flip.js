const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'coinflip',
            group: 'fun',
            memberName: 'coinflip',
            description: 'Kop of munt'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() *2);
        if(chance == 0){
            message.reply('Munt');
        }
        else
        {
            message.reply('Kop');
        }
    }
}

module.exports = CoinFlipCommand;