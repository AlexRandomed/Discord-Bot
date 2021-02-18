const prefix = '$';

module.exports = {
    name: 'prefix',
    description: 'renvoie le prefix',
    execute(message) {
        message.channel.send('Le prefix actuel est : $')
    }
}