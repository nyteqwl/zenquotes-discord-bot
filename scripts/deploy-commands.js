require('dotenv').config();
const { REST, Routes } = require('discord.js');

// This script currently deploys zero commands, serving as a proof of concept.
// To deploy commands, populate the annotated array below.
(async () => {
  const rest = new REST().setToken(process.env.TOKEN);
  // TODO: Populate this to deploy commands.
  const commands = [];

  try {
    console.log('Deploying commands (/).');
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log('Deployed commands (/) with zero (0) errors.');
  } catch (e) {
    console.error('Error deploying commands (/):', e.message);
  }
})();
