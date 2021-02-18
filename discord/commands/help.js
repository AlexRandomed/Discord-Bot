const prefix = '$'

module.exports = {
    name: 'help',
    description: 'Affiche cette interface',
    execute(message) {
        message.channel.send(`Les différentes commandes sur le serveur **${message.guild.name}** sont :\n
**${prefix}help** : affiche cette interface
**${prefix}ping** : renvoie pong. ***Utilisation : ${prefix}ping***
**${prefix}avatar** : affiche votre avatar. ***Utilisation : ${prefix}avatar***
**${prefix}server** : affiche les informations du serveur. ***Utilisation: ${prefix}server***
**${prefix}clear** : supprime le nomnre de messages défini par l'utilisateur. ***Exemple : ${prefix}clear 15***
**${prefix}play** : joue de la musique. ***Exemple : ${prefix}play https://www.youtube.com/watch?v=url***
**${prefix}prefix** : affiche le prefix. ***Utilisation : ${prefix}prefix***
**${prefix}8b** : donne une réponse aléatoire. ***Exemple : ${prefix}8b es-tu en vacances ?***

By **yourpseudo**`) 

    }
}