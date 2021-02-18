module.exports = {
    name: '8b',
    description: 'donne une réponse random',
    execute(message) {
        if (message.content.startsWith('$8b')) {
        var items = Array("oui", "non", "peut-être");
        var item = items[Math.floor(Math.random()*items.length)];
        message.reply(item);
    }}
}