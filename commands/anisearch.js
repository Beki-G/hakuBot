const Jikan = require('jikan-node');
const mal = new Jikan();

module.exports = {
	name: 'anisearch',
	description: 'Search for anime/manga!',
	execute(message, args) {
		console.log(args);
		mal.search(args[0], args[1])
			.then(info=>{
				const animeList = info.results.map(data => {
					return `\n**Title**: ${data.title} was found. \n**Description**: ${data.synopsis}`;
				});
				animeList.length = 5;
				message.channel.send(animeList);
			})
			.catch(err=>{
				console.log(err);
				message.channel.send('There was an error! Please try again.');
			});

	},
};