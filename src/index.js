/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


var src_default = {
			async fetch(request, env, ctx) {
				var body = {};
				var message;
				if (request.method == "POST") {
							message = "Hello World, you did a POST";
					} 
				else {
							message = "Hello World, you did not do a POST";
						}
				const output = {
							result: message,
				};
				return new Response (JSON.stringify (output), {
							headers: {
								'content-type': 'application/json;charset=UTF-8',
							},
						});
		}
}

export {
	src_default as default 
};
