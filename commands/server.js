module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	// eslint-disable-next-line no-unused-vars
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};