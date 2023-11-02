export async function load({ fetch, params }) {
	let statLogData = await fetch(`http://127.0.0.1:8090/api/collections/StatLog/records?filter=(StatID='${params.slug}')`);

	statLogData = await statLogData.json()

	let statData = await fetch(`http://127.0.0.1:8090/api/collections/Stats/records/${params.slug}`);
	statLogData.stat = await statData.json()

	return statLogData
}
