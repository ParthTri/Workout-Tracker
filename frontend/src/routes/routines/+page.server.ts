import { SECRET_SERVER_IP } from "$env/static/private"

console.log()
export async function load({ fetch, params }) {
	let data = await fetch(
		`http://${SECRET_SERVER_IP}/api/collections/Routine/records`,
		{
	}
	);
	let json = await data.json();

	return json;
}
