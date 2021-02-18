module.exports = {
    name: 'clear',
    description: 'Supprime le nombre de message demandé par l\'utilisateur',
    execute(message, args) {
        if (args[0] > 99 || args[0] < 1) return;
        message.channel.bulkDelete(args[0])
            .catch(console.error);
        message.channel.send(`Les messages ont biens été supprimé.`)
    }
}