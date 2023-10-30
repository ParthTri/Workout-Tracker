export async function load({ fetch, params }) {
	let data = await fetch(
		`http://127.0.0.1:8090/api/collections/Log/records?filter=ExcerciseID='${params.log.substring(
			1,
		)}'`,
	);

	let json = await data.json();

	let excercise = await fetch(
		`http://127.0.0.1:8090/api/collections/Excercise/records/${params.log.substring(
			1,
		)}`,
	)
	
	let excerciseData = await excercise.json()

	json.urlId = params.log.substring(1)
	json.weight = excerciseData.Weight
	
	return json;
}
