module.exports = {
    name: 'server',
    description: 'Affiche les informations du server',
    execute(message) {
        message.channel.send(`Nom du serveur : ** ${message.guild.name} **\nNombre de membres : **${message.guild.memberCount}**`)
    }
}