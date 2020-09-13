const { Command } = require('advanced-command-handler');
const { MessageEmbed } = require('discord.js');
module.exports = new Command({
    name: 'serverinfo',
    description: 'Shows server info',
    // Optionnals :
    usage: 'bserverinfo',
    category: 'info',
    nsfw: false,
    guildOnly: true,
    ownerOnly: false,
    aliases: [],
    userPermissions: [],
    clientPermissions: [],
}, async(client, message, args) => {

    let region = { "eu-central": ":flag_eu: Central Europe",
    "singapore": ":flag_sg: Singapore",
    "us-central": ":flag_us: U.S. Central",
    "sydney": ":flag_au: Sydney",
    "us-east": ":flag_us: U.S. East",
    "us-south": ":flag_us: U.S. South",
    "us-west": ":flag_us: U.S. West",
    "eu-west": ":flag_eu: Western Europe",
    "vip-us-east": ":flag_us: VIP U.S. East",
    "london": ":flag_gb: London",
    "amsterdam": ":flag_nl: Amsterdam",
    "hongkong": ":flag_hk: Hong Kong",
    "russia": ":flag_ru: Russia",
    "southafrica": ":flag_za:  South Africa"
};

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};

    let embed = new MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    .addField("Name", message.guild.name, true)
    .addField("ID", message.guild.id, true)
    .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
    .addField("Region", region[message.guild.region], true)
    .addField("Total | Humans | Bots", `${message.guild.members.cache.size} | ${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
    .addField('Member Count',`${message.guild.members.cache.filter(m => m.presence.status !== 'offline').size} / ${message.guild.memberCount}`, true)
    .addField("Channels", message.guild.channels.cache.size, true)
    .addField("Roles", message.guild.roles.cache.size, true)
    .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
    .setThumbnail(message.guild.iconURL)
message.channel.send(embed);
});