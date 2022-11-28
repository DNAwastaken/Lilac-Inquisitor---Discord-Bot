const { Client, IntentsBitField, Partials } = require('discord.js');
const CommandHandler = require('wokcommands');
const path = require('path');

const keepAlive = require('../server.js');
keepAlive();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on('ready', async () => {
  console.log(`Logged in as "${client.user.tag}"!`);

  new CommandHandler({
    client,
    mongoUri: process.env.MONGO_URI,
    commandsDir: path.join(__dirname, 'commands'),
    testServers: ['1043670656530776064'],
    botOwners: ['856261939662422036', '956330331957506068'],
  });
});

client.login(process.env.TOKEN);
