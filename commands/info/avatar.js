const { Command } = require('advanced-command-handler');
const { MessageEmbed } = require('discord.js');
module.exports = new Command({
    name: 'avatar',
    description: 'Show avatar',
    // Optionnals :
    usage: 'havatar',
    category: 'info',
    nsfw: false,
    guildOnly: false,
    ownerOnly: false,
    aliases: [],
    userPermissions: [],
    clientPermissions: [],
}, async(client, message, args) => {
    let user = message.mentions.users.first() || message.guild.member(args[0]);
    if ( !user )  user = message.author 

    let avatarURL = user.avatarURL({format: 'png', dynamic: true});
    let embed = {
        color: 'BLUE',
        title: `${user.tag}`,
        image: {
            url: avatarURL
        }
    }
   await message.channel.send({embed:embed});

});