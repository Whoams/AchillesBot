const commando = require('discord.js-commando');

class BossPickerCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'bosspick',
            group: 'fun',
            memberName: 'bosspicker',
            description: 'Deze command kiest een boss voor je uit'
        });
    }
    
    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 29); 
        if(chance == 0)
        {
            message.reply("Je gaat de boss Arraxi killen!");
        }
        if(chance == 1)
        {
            message.reply("Je gaat de minigame The Barrow Brother doen!");
        }
        if(chance == 2)
        {
            message.reply("Je gaat de boss The barrows: Rise of the Six killen!");
        }
        if(chance == 3)
        {
            message.reply("Je gaat de boss Beastmaster Durzag killen!");
        }
        if(chance == 4)
        {
            message.reply("Je gaat de boss Chaos elemental killen!");
        }
        if(chance == 5)
        {
            message.reply("Je gaat de boss Commander Zilyana killen!");
        }
        if(chance == 6)
        {
            message.reply("Je gaat de boss Corporeal Beast killen!");
        }
        if(chance == 7)
        {
            message.reply("Je gaat de Daganoth Kings killen!");
        }
        if(chance == 8)
        {
            message.reply("Je gaat de boss General Graardor killen!");
        }
        if(chance == 9)
        {
            message.reply("Je gaat de boss Giant Mole killen!");
        }
        if(chance == 10)
        {
            message.reply("Je gaat de boss Gregorovic killen!");
        }
        if(chance == 11)
        {
            message.reply("Je gaat de boss Har-aken van de minigame Fight Kiln killen!");
        }
        if(chance == 12)
        {
            message.reply("Je gaat de boss Helwyr killen!");
        }
        if(chance == 13)
        {
            message.reply("Je gaat de boss Kalphite King killen!");
        }
        if(chance == 14)
        {
            message.reply("Je gaat de boss Kalphite Queen killen!");
        }
        if(chance == 15)
        {
            message.reply("Je gaat de boss King Black Dragon killen!");
        }
        if(chance == 16)
        {
            message.reply("Je gaat de boss Kree'arra killen!");
        }
        if(chance == 17)
        {
            message.reply("Je gaat de boss K'rill Tsutsaroth killen!");
        }
        if(chance == 18)
        {
            message.reply("Je gaat de Legiones killen!");
        }
        if(chance == 19)
        {
            message.reply("Je gaat de boss The Magister Killen!");
        }
        if(chance == 20)
        {
            message.reply("Je gaat de boss Nex killen!");
        }
        if(chance == 21)
        {
            message.reply("Je gaat de boss Nex - Angel of Death killen!");
        }
        if(chance == 22)
        {
            message.reply("Je gaat de boss Queen Black Dragon killen!");
        }
        if(chance == 23)
        {
            message.reply("Je gaat de boss Solak killen!");
        }
        if(chance == 24)
        {
            message.reply("Je gaat de boss Telos killen!");
        }
        if(chance == 25)
        {
            message.reply("Je gaat de boss The Twin Furies killen!");
        }
        if(chance == 26)
        {
            message.reply("Je gaat de boss TzTok-Jad killen!");
        }
        if(chance == 27)
        {
            message.reply("Je gaat de boss Vindicta & Gorvek killen!");
        }
        if(chance == 28)
        {
            message.reply("Je gaat de boss Vorago killen!");
        }
        if(chance == 29)
        {
            message.reply("Je gaat de boss Yakamaru killen!");
        }
    }
}

// 0 = Arraxi, 1 = The barrow brothers, 2 = The barros: Rise of the Six, 3 = Beastmaster Durzag, 4 = Chaos elemental, 5 = Commander Zilyana, 6 = Corporeal Beast, 7 = Daganoth Kings
// 8 = General Graardor, 9 = Giant Mole, 10 = Gregorovic, 11 = Har-aken, 12 = Helwyr, 13 = Kalphite King, 14 = Kalphite Queen, 15 = King Black Dragon, 16 = Kree'Arra
// 17 = K'rill Tsutsaroth, 18 = Legiones, 19 = The Magister, 20 = Nex, 21 = Nex - Angel of Death, 22 = Queen Black Dragon, 23 = Solak, 24 = Telos, 25 = The Twin Furies
// 26 = TzTok-Jad, 27 = Vindicta & Gorvek, 28 = Vorago, 29 = Yakamaru 

module.exports = BossPickerCommand;