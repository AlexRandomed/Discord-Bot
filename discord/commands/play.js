module.exports = {
    name: 'play',
    description: 'Joue de la musique',
    async execute(message, args) {
        if (!message.guild) return;
            if (message.member.voice.channel) {
                const ytdl = require('ytdl-core');
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play(ytdl(args[0], { filter: 'audioonly' }));
        }
    }
}