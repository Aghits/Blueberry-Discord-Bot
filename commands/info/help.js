const { Command } = require('advanced-command-handler');
const { MessageEmbed } = require('discord.js');
module.exports = new Command({
    name: 'help',
    description: 'Show Help',
    // Optionnals :
    usage: 'hhelp',
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
    .setDescription('To get a list of commands type hcommands')
    .addField('Need help?', 'Join https://discord.gg/XVnJC96')
    message.channel.send(testEmbed);
});