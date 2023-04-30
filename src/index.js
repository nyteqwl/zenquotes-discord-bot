require('dotenv').config();
const { Client, IntentsBitField, Events, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
});

client.once(Events.ClientReady, (c) => {
  console.log(`${c.user.tag} is online.`);
  c.user.setActivity({
    type: ActivityType.Watching,
    name: 'https://zenquotes.io'
  });
});

client.login(process.env.TOKEN);
