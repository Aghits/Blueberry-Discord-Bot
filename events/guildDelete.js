const Discord = require("discord.js");
module.exports = guild => {
	const mentionHook = new Discord.WebhookClient('554187560092696597', 'Xg2ViSPQoiuLkrBfDLIVXk9hsYApxhszYHo8yUkgJZPNDN9oXYiPHSO2MWhZHQD5Z94R');
	  mentionHook.send({
      embeds: [{
		  color: 0xFF1834,
		  title: 'Left Server',
		  fields: [{
		   name: 'Name',
				value: `${guild.name}`,
				inline: true
	   },{
		   name: 'ID',
				value: `${guild.id}`,
				inline: true
	   },{
		  name: 'Owner',
				value: `${guild.owner.user.tag}`,
				inline: true 
	   },{
		   name: 'Owner ID',
				value: `${guild.ownerID}`,
				inline: true
	   }],
	   thumbnail: {
        url: guild.icon ? guild.iconURL : `https://dummyimage.com/128/123FD/FFFFFF/&text=${encodeURIComponent(guild.nameAcronym)}`
      }
       }]
	   
       });
}