import { SECRET_SERVER_IP } from "$env/static/private";

export async function load({ fetch, params }) {
	let statLogData = await fetch(`http://${SECRET_SERVER_IP}/api/collections/StatLog/records?filter=(StatID='${params.slug}')`);

	statLogData = await statLogData.json()

	let statData = await fetch(`http://${SECRET_SERVER_IP}/api/collections/Stats/records/${params.slug}`);
	statLogData.stat = await statData.json()

	return statLogData
}
