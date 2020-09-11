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
    userPermissions: ['MANAGE_CHANNELS', 'KICK_MEMBERS', 'BAN_MEMBERS'],
    clientPermissions: [],
}, async(client, message, args) => {
    let user = message.mentions.users.first();
    let limit = parseInt(args[0]) ? args[0] : args[1];
    let amount;
    if (user || args.includes('--bots')) {
      amount = 100;
    }
    else {
      amount = /^[1-9][0-9]?$|^100$/.test(limit) ? parseInt(limit) : 100;
    }

    let msgs = await message.channel.messages.fetch({
      limit: amount
    });

    if (user) {
      msgs = Array.from(msgs.filter(m => m.author.id === user.id).values()).slice(0, /^[1-9][0-9]?$|^100$/.test(limit) ? parseInt(limit) : 100);
    }
    else if (args.includes('--bots')) {
      msgs = Array.from(msgs.filter(m => m.author.bot).values()).slice(0, /^[1-9][0-9]?$|^100$/.test(limit) ? parseInt(limit) : 100);
    }
    if (args.includes('--nonpinned')) {
      msgs = msgs.filter(m => !m.pinned);
    }
    if (msgs.size < 2 || msgs.length < 2) {
      let error;
      if ((msgs.size === 1 || msgs.length === 1)) {
        message.channel.send('Messages only 1')
      }
      else {
        message.channel.send('Cant delete this messages')
      }



      return;
    }

    await message.channel.bulkDelete(msgs, true);

    message.channel.send({
      embed: {
        color: 'GREEN',
        description: `I've sweep ${msgs.size || msgs.length}${args.includes('--nonpinned') ? ' non pinned' : ''} messages ${user ? user : args.includes('--bots') ? 'bots' : 'everyone'}`
      }
    }).then(msg => {
      msg.delete({ timeout: 10000 }).catch(() => {});
    }).catch(e => {
      console.error(e);
    });
});