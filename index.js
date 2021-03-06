const { CommandHandler } = require('advanced-command-handler')

require('dotenv').config()

CommandHandler.create({
    commandsDir: 'commands',
    eventsDir: 'events',
    prefixes: ['b'],
    owners: ['148496129565261824']
});

CommandHandler.launch({
    token: process.env.TOKEN
});