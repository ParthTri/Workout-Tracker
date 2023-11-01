export async function load({ fetch }): Promise<any>{
	let request = await fetch(
		"http://127.0.0.1:8090/api/collections/Stats/records"
	)	
	let json = await request.json();

	return json;
}
