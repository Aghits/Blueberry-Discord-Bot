const { Command } = require('advanced-command-handler');
const { MessageEmbed } = require('discord.js');
const moment = require('moment')
require('moment-duration-format')


module.exports = new Command({
    name: 'stats',
    description: 'Show bot stats',
    // Optionnals :
    usage: 'hstats',
    category: 'info',
    nsfw: false,
    guildOnly: false,
    ownerOnly: false,
    aliases: [],
    userPermissions: [],
    clientPermissions: [],
}, async(client, message, args) => {

    const botUptime = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]')
    const guildSize = client.guilds.cache.size
    const userSize = client.users.cache.size

    const statsEmbed = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setColor('BLUE')
        .addField('Guilds', guildSize, true)
        .addField('Users', userSize, true)
        .addField('Uptime', botUptime, true)
        .setFooter(`Made with ❤️ and discord.js by Aghits#3343`)
        .setTimestamp();

    message.channel.send(statsEmbed);


});