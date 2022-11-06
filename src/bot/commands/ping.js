const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    cooldown: 7,
    aliases: ["ping"],
    run: async(client, message) => {
        try {
            var states = "🟢 Amazing!";
            var states2 = "🟢 Amazing!";
            var msg = `${Date.now() - message.createdTimestamp}`;
            var api = `${Math.round(client.ws.ping)}`;
            if (Number(msg) > 70) states = "🟢 Okay";
            if (Number(msg) > 170) states = "🟡 Bad";
            if (Number(msg) > 350) states = "🔴 Terrible";
            if (Number(api) > 70) states2 = "🟢 Okay";
            if (Number(api) > 170) states2 = "🟡 Bad";
            if (Number(api) > 350) states2 = "🔴 Terrible";
            if (message.author.bot) return;
            message.channel.send(
                new MessageEmbed()
                .setColor("#362f36")
                .setAuthor(message.author.username, message.author.avatarURL())
                .addField("**Response Time:**", msg + " ms 📶 | " + states, true)
                .setTimestamp()
                .setFooter(`Requested By ${message.author.tag}`)
            );
        } catch (err) {
            return;
        }
    }
};
