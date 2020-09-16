const { Command } = require('advanced-command-handler');
const { MessageEmbed } = require('discord.js');
module.exports = new Command({
    name: 'help',
    description: 'Show Help',
    // Optionnals :
    usage: 'bhelp',
    category: 'info',
    nsfw: false,
    guildOnly: false,
    ownerOnly: false,
    aliases: ['h'],
    userPermissions: [],
    clientPermissions: [],
}, async(client, message, args) => {
    const testEmbed = new MessageEmbed()
    .setTitle('Help')
    .setColor('BLUE')
    .setDescription('To get a list of commands type bcommands')
    .addField('Want to invite the bot?', 'https://discordapp.com/oauth2/authorize?client_id=459985825510195210&scope=bot&permissions=2146958847')
    .addField('Need help?', 'Join https://discord.gg/XVnJC96')
    message.channel.send(testEmbed);
});