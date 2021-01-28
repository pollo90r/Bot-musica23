const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const config = require('./settings.json');
const { loadCommands } = require('./utils/loadCommands');
const DisTube = require('distube')

bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Chika's Doon da yo! \`${song.name}\` - \`${song.formattedDuration}\`\n gowr gowr: ${song.user}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        `canto ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))

require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);

bot.login(ODA0MTE5Mzk3NTUxNDM5OTMy.YBHsjA.xDfwwOBd2loNMIjDF2wIs3bgyPA);