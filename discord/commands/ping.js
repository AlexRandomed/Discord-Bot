module.exports = {
    name: 'ping',
    description: 'renvoie pong',
    execute(message) {
        message.channel.send('pong')
    }
}