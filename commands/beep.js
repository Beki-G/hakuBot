module.exports = {
	name: 'beep',
	description: 'beep!',
	// eslint-disable-next-line no-unused-vars
	execute(message) {
		message.channel.send('Boop');
	},
};