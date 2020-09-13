const { Command } = require('advanced-command-handler');
const { MessageEmbed } = require('discord.js');
module.exports = new Command({
    name: 'sweep',
    description: 'Sweep the messages',
    // Optionnals :
    usage: 'hsweep <number>',
    category: 'moderation',
    nsfw: false,
    guildOnly: false,
    ownerOnly: false,
    aliases: [],
    userPermissions: ['MANAGE_MESSAGES'],
    clientPermissions: ['MANAGE_MESSAGES'],
}, async(client, message, args) => {

  let messagecount = parseInt(args[0]);

  if ( isNaN(args[0] ) ) return message.channel.send('That\'s not a number!').then( msg => { msg.delete({ timeout: 10000 }) });
  if ( args[0] <= 0 ) return message.channel.send('Can\'t delete 0 message');

  message.channel.messages.fetch({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));

});