const { Command } = require('advanced-command-handler');
const { MessageEmbed } = require('discord.js');
module.exports = new Command({
    name: 'kick',
    description: 'Kick a users',
    // Optionnals :
    usage: 'bkick <user>',
    category: 'moderation',
    nsfw: false,
    guildOnly: false,
    ownerOnly: false,
    aliases: [],
    userPermissions: ['KICK_MEMBERS'],
    clientPermissions: ['KICK_MEMBERS'],
}, async(client, message, args) => {
    args.reason = args.slice(1).join(' ')
    const user = message.mentions.members.first();
    if ( !user ) return message.channel.send('You need to mention the user!')
    if ( !args.reason ) return message.channel.send('Please provide reasons')
    if ( user.kickable ) {

        if ( message.member.roles.highest.position > user.roles.highest.position ) {
            user.kick()
            let embed = new MessageEmbed()
            .setColor('YELLOW')
            .setDescription(`${user.user.tag} has been kicked from the server by ${message.author.tag}`)
            .addField('Reason :', `${args.reason}`)
            message.channel.send(embed)
        } else {
            message.channel.send('You have lower role')
        }

    } else {
        message.channel.send('Can\'t kick the user')
    }

});