import { SECRET_SERVER_IP } from "$env/static/private";

export async function load({ fetch }): Promise<any>{
	let request = await fetch(
		`http://${SECRET_SERVER_IP}/api/collections/Stats/records`,
		{
			"mode": "cors",
			"headers": {
				"Access-Control-Allow-Origin": "*"
			}
		}
	)	
	let json = await request.json();

	return json;
}
