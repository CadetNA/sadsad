module.exports = {
    name: "help",
    cooldown: 5,
    aliases: ["commands"],

    run: async function(client, message, args) {
        try {
          message.channel.send({
            embed: {
              title:
                '!help',
              color: 
                000053,
              description: `
                            help - Opens up the help Menu. Usage: !help
                            setup - Setup the bot. Usage: !setup <Ticket Channel> <Ticket Workers Role> <Ticket Title>
                            open - Opens a new ticket. Usage: !open
                            add - Adds a member to the ticket. Usage: <!add @username>
                            remove - Removes a member from the ticket. Usage: !remove <@username>
                            rename - Renames the ticket. Usage: !rename <name>
                            ping - Requests the bot response time. Usage: !ping
                           `
            }
          })
        } catch (err) {
            return;
        }
    }
}
