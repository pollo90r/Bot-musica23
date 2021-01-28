module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('devi stare in un canale coglione.');

    let queue = await bot.distube.getQueue(message);

    if(queue) {
        bot.distube.skip(message)

        message.channel.send('YO YO YO!')
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "skip",
    aliases: ["s"]
}
