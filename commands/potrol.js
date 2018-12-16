const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let everyoneRoleObject = message.guild.roles.get('name', 'everyone')

    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let aChannel = message.guild.channels.find(`name`, "discord-log");
    aChannel.send(`${everyoneRoleObject} there is a patrol`)

}

module.exports.help = {
  name: "potrol"
}