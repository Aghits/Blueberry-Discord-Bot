const {BetterEmbed, Command, getThing, CommandHandler} = require('advanced-command-handler');
const { MessageEmbed } = require('discord.js');

const fs = require('fs');

module.exports = new Command({
    name: 'commands',
    description: 'Show available commands',
    // Optionnals :
    usage: 'hcommands',
    category: 'info',
    nsfw: false,
    guildOnly: false,
    ownerOnly: false,
    aliases: [],
    userPermissions: [],
    clientPermissions: [],
}, async(client, message, args) => {
	let command;
	
	if (args[0]) {
		if (command = await getThing('command', args[0])) {
            let embed = new MessageEmbed()
            .setTitle(`Command: ${command.name}`)
            .setColor('BLUE')
			.setDescription(`\`\`\`css\nCategory : ${command.category.toUpperCase()}
Available in private messages : ${command.guildOnly ? 'no' : 'yes'}
${command.ownerOnly ? `**Only available to the owner(s).**` : ''}\`\`\``)
            .addField( 'Description :', `\`\`\`css\n${command.description}\`\`\`` , true)
            .addField( 'Syntax :', `\`\`\`css\n${command.usage}\`\`\`` , true)
            .addField('Aliases', `${command.aliases}` ? command.aliases.join(' ') : '-', true)
            .addField('User permissions required :', `${command.userPermissions}` ? command.userPermissions.join(' ') : '-' , true)
            .addField('Bot permissions required :', `${command.clientPermissions}` ? command.clientPermissions.join(' ') : '-', true)
            await message.channel.send(embed)
		}
	} else {

        let info = fs.readdirSync('./commands/info/');
        let moderation = fs.readdirSync('./commands/moderation/');
        let fields = [];
        for (let i = 0; i < 1; i++) {
        fields.push({
            name: 'Info',
            value: `\`\`\`css\n${info.join('\n').split('.js').join('')}\`\`\``,
            inline: true
          },{
            name: 'Moderation',
            value: `\`\`\`css\n${moderation.join('\n').split('.js').join('')}\`\`\``,
            inline: true
          });

          await message.channel.send({
            embed: {
              color: 'BLUE',
              title: 'List of Commands',
              description: 'List of all available commands',
              fields: fields
            }
          });

        }
	}
});