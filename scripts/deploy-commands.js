require('dotenv').config();
const { REST, Routes } = require('discord.js');

(async () => {
  const rest = new REST().setToken(process.env.TOKEN);
  const commands = [
    {
      name: 'quote',
      description:
        "Enlighten yourself with a quote from some of the world's brightest minds."
    }
  ];

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
