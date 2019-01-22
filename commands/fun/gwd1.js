const commando = require('discord.js-commando');



class gwd1Command extends commando.Command

{

    constructor(client)

    {

        super(client,{

            name: 'gwd1',

            group: 'fun',

            memberName: 'gwd1',

            description: 'Deze command kiest een boss voor je uit uit de Godwars Dungeon 1.'

        });

    }

    

    async run(message, args)

    {

        var chance = Math.floor(Math.random() * 3); 

        if(chance == 0)

        {

            message.reply("Je gaat de boss Kree'Arra killen!");

        }

        if(chance == 1)

        {

            message.reply("Je gaat de boss general Graardor killen!");

        }

        if(chance == 2)

        {

            message.reply("Je gaat de boss commander Zilyana");

        }

        if(chance == 3)

        {

            message.reply("Je gaat de boss K'rill Tsutsaroth killen!");

        }



module.exports = gwd1Command;
