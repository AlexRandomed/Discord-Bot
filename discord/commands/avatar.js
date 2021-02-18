module.exports = {
    name: 'avatar',
    description: 'affiche la photo de profil de l\'utilisateur',
    execute(message) {
        if (!message.mentions.users.size) {
            return message.channel.send(message.author.displayAvatarURL({format: 'png', size: 256}));
        }
    }
}