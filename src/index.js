// Code Club Assignment 1
var assignment_1 = {
			async fetch(request, env, ctx) {
				let body = {};
				let message;

				if (request.method == "POST") {
							message = "Hello World, you did a POST!";
					} 
				else {
							message = "Hello World, you did not do a POST!";
					}

				const OUTPUT = {
					result: message,
				};
				return new Response (JSON.stringify (OUTPUT), {
							headers: {
								'content-type': 'application/json;charset=UTF-8',
							},
						});
		}
}

//Code Club Assignment 2
var assignment_2 = {
			async fetch(request, env, ctx) {
				let something = country_response ("ES");

				const COUNTRY_MAP = {
						0: "US",
						1: "FR",
						2: "ES",
						3: "DE",
						4: "JP",
					}

				let random_pick = Math.floor ((Math.random () * 10)) % 5;
				let body = {};
				let message;

				if (request.method == "POST") {
							message = "Hello World, you did a POST!";
					} 
				else {
							message = "Hello World, you did not do a POST!";
					}

				const OUTPUT = {
					result: message + " " + country_response (COUNTRY_MAP[random_pick]),
					country: COUNTRY_MAP[random_pick],
				};
				return new Response (JSON.stringify (OUTPUT), {
							headers: {
								'content-type': 'application/json;charset=UTF-8',
							},
						});
		}
}

// Function for Assignment 2
function country_response (country) {
		const COUNTRY_LOOKUP_TABLE = {
			US: "Thank you for cominng, please come again!",
			FR: "Merci d'être venu, revenez s'il vous plaît!",
			ES: "¡Gracias por venir, por favor vuelve!",
			DE: "„Danke für Ihr Kommen, bitte kommen Sie wieder!",
			JP: "「来てくれてありがとう、また来てね！」",
		};

	return (COUNTRY_LOOKUP_TABLE[country]);
}

//Code Club Assignment 3
var assignment_3 = {
	async fetch(request, env, ctx) {
		const origin_url = "https://www.cloudflare.com";
		const blackhole_url = "https://httpbin.org/get";
		let destination_url = "";

		// Get the bot score
		const bot_score = request.cf.botManagement.score;

		// Pick destination based on bot score
		if (bot_score < 29) {
			destination_url = blackhole_url;
		} else {
			destination_url = origin_url;
		}

		const newrequest = new Request (destination_url, request);

		if (request.method == "GET") {
			let response = await fetch (newrequest);
			return response;
		}
		else {
			return new Response ("You used a POST, you're stuck here");
		}
	}
}

export {
	assignment_3 as default 
};
