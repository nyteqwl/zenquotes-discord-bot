require('dotenv').config();
const { Client, IntentsBitField, Events, ActivityType } = require('discord.js');
const axios = require('axios');

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

client.on(Events.InteractionCreate, async (i) => {
  if (!i.isChatInputCommand()) return;

  const { commandName } = i;
  if (commandName === 'quote') {
    try {
      const quote = (await axios.get('https://zenquotes.io/api/random'))
        .data[0];
      const reply = await i.reply({
        content: `"${quote.q}" - ${quote.a}`,
        fetchReply: true
      });
      await reply.react('💡');
    } catch (e) {
      await i.reply(
        'Sorry, I was unable to process your command. Please try again.'
      );
    }
  }
});

client.login(process.env.TOKEN);
