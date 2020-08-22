/* eslint-disable no-unused-vars */
const Jikan = require('jikan-node');
const mal = new Jikan();

async function topfiveOfCategories(type) {
	try {
		const topData = await mal.findTop(type);
		return topData;

	}
	catch (error) {
		console.log(error);
	}

}

module.exports = {
	name:'anitop',
	description:'Find the top in anime, manga, people, characters',
	async execute(message, args) {
		try {
			const topfive = await topfiveOfCategories(args[0]);
			const messageInfo = topfive.top.map(data=>{
				return`\n**Title**: ${data.title}\n**Score**: ${data.score}\n**Type**: ${data.type}`;
			});

			messageInfo.length = 5;

			message.channel.send(messageInfo);
		}
		catch (error) {
			console.log(error);
		}

	},
};