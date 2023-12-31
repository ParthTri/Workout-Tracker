import { SECRET_SERVER_IP } from "$env/static/private";

export async function load({ fetch, params }) {
	let data = await fetch(
		`http://${SECRET_SERVER_IP}/api/collections/Log/records?filter=ExcerciseID='${params.log.substring(
			1,
		)}'`,
	);

	let json = await data.json();

	let excercise = await fetch(
		`http://${SECRET_SERVER_IP}/api/collections/Excercise/records/${params.log.substring(
			1,
		)}`,
	)
	
	let excerciseData = await excercise.json()

	json.urlId = params.log.substring(1)
	json.excerciseData = excerciseData
	
	return json;
}
