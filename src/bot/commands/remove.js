module.exports = {
    name: "remove",
    cooldown: 6,
    aliases: ['get-out'],

    run: async function(client, message, args) {
        if (!message.channel.name.includes("ticket-")) {
            message.channel.send({
                embed: {
                    title: `**ERROR*`,
                    description: `This channel is not for tickets.`,
                    color: 0xFF0000
                }
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
            })
            return
        }
        if (!message.member.hasPermission('MANAGE_CHANNELS')) {
            message.channel.send({
                embed: {
                    title: `**ERROR**`,
                    description: `You do not have the needed permissions.`,
                    color: 0xFF0000
                }
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
            })
            return
        }
        message.channel.overwritePermissions([{
            id: require('quick.db').fetch(`TicketControl_${message.channel.id}`),
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
        }, {
            id: require('quick.db').fetch(`TicketAdminRole_${message.guild.id}`),
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
        }, {
            id: message.guild.roles.everyone,
            deny: ["VIEW_CHANNEL"]
        }]).then(() => {
            message.channel.send({
                embed: {
                    title: 'Done',
                    description: `The ticket has been reset.`,
                    color: 0x00D700
                }
            }).then(async function(msg) {
                setTimeout(() => {
                    msg.delete().catch(err => { return })
                }, 1000 * 7);
            })
        })
    }
}
