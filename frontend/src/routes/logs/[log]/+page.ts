export async function load({ fetch, params }) {
	console.log(params.log);
	console.log(
		`http://127.0.0.1:8090/api/collections/Log/records?filter=ExcerciseID='${params.log.substring(
			1,
		)}'`,
	);
	let data = await fetch(
		`http://127.0.0.1:8090/api/collections/Log/records?filter=ExcerciseID='${params.log.substring(
			1,
		)}'`,
	);
	let json = await data.json();
	console.log(json);

	return json;
}
